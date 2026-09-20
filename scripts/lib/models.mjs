// Model calls with a fallback ladder. Every call returns the same shape, so the
// run summary can always say which model answered, why it stopped, and what it
// cost in tokens.
//
// Model IDs were checked against the providers' model lists in September 2026.
// Check again before changing them: a model that isn't on the current list
// fails with a 404 and the ladder simply moves on, but you lose the day.

export const GEMINI_LADDER = [
  'gemini-3.8-flash',
  'gemini-3.7-flash',
  'gemini-3.6-flash',
  'gemini-3.5-flash',
  'gemini-3.1-flash-lite',
  'gemini-3.5-flash-lite',
];
export const ANTHROPIC_DEFAULT = 'claude-sonnet-5';

const TRANSIENT = new Set([408, 429, 500, 502, 503, 504]);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

class CallError extends Error {
  constructor(message, { status = 0, transient = false, fatal = false, raw = '' } = {}) {
    super(message);
    Object.assign(this, { status, transient, fatal, raw });
  }
}

async function postJson(url, headers, body, timeoutMs = 180000) {
  let res;
  try {
    res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', ...headers },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(timeoutMs),
    });
  } catch (err) {
    throw new CallError(`network/timeout: ${err.message}`, { transient: true });
  }
  const text = await res.text();
  if (!res.ok) {
    throw new CallError(`HTTP ${res.status}: ${text.slice(0, 300)}`, {
      status: res.status,
      transient: TRANSIENT.has(res.status),
      // A bad or missing key fails the same way on every model: stop the ladder.
      fatal: res.status === 401 || res.status === 403,
      raw: text,
    });
  }
  try {
    return JSON.parse(text);
  } catch {
    throw new CallError('response was not JSON', { transient: true, raw: text.slice(0, 2000) });
  }
}

async function callGemini(model, system, user, key) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`;
  const data = await postJson(url, { 'x-goog-api-key': key }, {
    systemInstruction: { parts: [{ text: system }] },
    contents: [{ role: 'user', parts: [{ text: user }] }],
    // Gemini 3.x thinks by default and thinking tokens come out of this same
    // budget, so it must be generous or the visible answer gets truncated.
    generationConfig: { temperature: 0.7, maxOutputTokens: 16000 },
  });
  const cand = data.candidates?.[0] ?? {};
  const text = (cand.content?.parts ?? []).filter((p) => !p.thought).map((p) => p.text ?? '').join('');
  const u = data.usageMetadata ?? {};
  return {
    provider: 'gemini',
    model: data.modelVersion || model,
    finishReason: cand.finishReason ?? (data.promptFeedback?.blockReason ? `BLOCKED:${data.promptFeedback.blockReason}` : 'UNKNOWN'),
    tokens: { input: u.promptTokenCount ?? 0, output: u.candidatesTokenCount ?? 0, thinking: u.thoughtsTokenCount ?? 0, total: u.totalTokenCount ?? 0 },
    text,
  };
}

async function callAnthropic(model, system, user, key) {
  const data = await postJson('https://api.anthropic.com/v1/messages', {
    'x-api-key': key,
    'anthropic-version': '2023-06-01',
  }, {
    model,
    max_tokens: 8000,
    system,
    messages: [{ role: 'user', content: user }],
  });
  const text = (data.content ?? []).filter((b) => b.type === 'text').map((b) => b.text).join('');
  const u = data.usage ?? {};
  return {
    provider: 'anthropic',
    model: data.model || model,
    finishReason: data.stop_reason ?? 'UNKNOWN',
    tokens: { input: u.input_tokens ?? 0, output: u.output_tokens ?? 0, thinking: 0, total: (u.input_tokens ?? 0) + (u.output_tokens ?? 0) },
    text,
  };
}

/** The ordered list of {provider, model} to try, from env and flags. */
export function ladder({ provider, geminiModels, anthropicModel }) {
  const g = (geminiModels ? geminiModels.split(',').map((s) => s.trim()).filter(Boolean) : GEMINI_LADDER)
    .map((model) => ({ provider: 'gemini', model }));
  const a = [{ provider: 'anthropic', model: anthropicModel || ANTHROPIC_DEFAULT }];
  if (provider === 'anthropic') return a;
  if (provider === 'both') return [...g, ...a];
  return g;
}

/**
 * Call one model, retrying transient failures twice (15 s, then 30 s).
 * Records every attempt in `log` for the run summary.
 */
export async function callWithRetry({ provider, model }, system, user, keys, log) {
  const key = provider === 'gemini' ? keys.gemini : keys.anthropic;
  if (!key) {
    const e = new CallError(`no API key for ${provider} (set ${provider === 'gemini' ? 'GEMINI_API_KEY' : 'ANTHROPIC_API_KEY'})`, { fatal: true });
    log.push({ provider, model, ok: false, error: e.message });
    throw e;
  }
  const fn = provider === 'gemini' ? callGemini : callAnthropic;
  const waits = [15000, 30000];
  for (let attempt = 1; ; attempt++) {
    const t0 = Date.now();
    try {
      const r = await fn(model, system, user, key);
      log.push({ provider, model: r.model, ok: true, attempt, ms: Date.now() - t0, finishReason: r.finishReason, tokens: r.tokens, chars: r.text.length });
      return r;
    } catch (err) {
      log.push({ provider, model, ok: false, attempt, ms: Date.now() - t0, status: err.status, error: err.message });
      if (err.fatal || !err.transient || attempt > waits.length) throw err;
      await sleep(waits[attempt - 1]);
    }
  }
}

export { CallError };
