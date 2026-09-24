---
title: "Splitting high bandwidth memory and flash keeps agentic AI sessions alive"
date: 2026-09-25
excerpt: "Tiering GPU memory between HBM and on-package 3D flash lets accelerators host 24 times more concurrent agent sessions while avoiding severe read-energy penalties."
category: "Compute & AI"
catslug: "compute-ai"
source:
  kind: arxiv
  id: "arxiv:2609.25782"
  url: "https://arxiv.org/abs/2609.25782"
  title: "Hot-Cold Tiering of HBM and High Bandwidth Flash for Agentic LLM Serving"
  venue: "arXiv; published in vol. 25, no. 2, pp. 355-358, July-Dec. 2026"
  published: "2026-09-22"
  authors: "Jongjin Baek et al."
  peer_reviewed: true
generated:
  provider: gemini
  model: "gemini-3.8-flash"
  at: "2026-09-24T23:05:58.717Z"
---

Large language models are no longer deployed solely as reactive query-and-response engines. In agentic workflows, a model operates across extended multi-turn sessions, pausing between autonomous actions to wait on external tool outputs, environment feedback, or human guidance. While an agent is idle, its entire dialogue history and reasoning trail must remain intact. If the system discards this context, resuming execution requires either recalculating all intermediate states from scratch or fetching them over host interconnects from external storage. 

Both recovery methods carry severe penalties. Recalculation wastes expensive compute cycles, while moving large data volumes across host-device interconnects introduces latency spikes that degrade interactive performance. Consequently, serving infrastructure has struggled to manage the memory demands of key-value (KV) states—the cached intermediate representations generated during attention calculations. Because high bandwidth memory (HBM) capacity on modern graphics processors remains tight, inactive sessions are routinely evicted to preserve memory for active generation. The architectural assumption that all active and paused states must compete for the same ultra-fast memory pool has turned into a major deployment bottleneck.

## The physical trade-offs of on-package flash

To expand memory capacity without leaving the processor package, hardware designers have explored high bandwidth flash (HBF). By integrating 3D-NAND flash directly onto the package alongside the compute die, HBF provides orders of magnitude more storage capacity than standard HBM while delivering comparable read bandwidth. On paper, substituting HBM with dense on-package flash would allow a single accelerator to retain the KV states of thousands of paused sessions without running out of physical room.

However, treating high bandwidth flash as a direct substitute for HBM exposes two severe physical constraints inherent to NAND flash: limited write endurance and elevated read energy. Standard inference generation involves continuous read operations across the KV cache for every single decoded token. If an accelerator were to direct all KV memory traffic to on-package 3D-NAND, the cumulative read power would quickly push the system past manageable thermal thresholds. Furthermore, repeatedly writing transient attention states into flash would rapidly exhaust the finite write cycles of the memory cells. Because of these physics-driven limitations, naive designs that attempt to run the entire KV cache out of flash prove impractical for sustained production environments.

## Splitting the cache into hot and cold tiers

A viable alternative emerges from inspecting how agentic workloads actually touch memory over time. In a multi-turn agentic framework, execution consists of two starkly different phases: steady-state token decoding and episodic session resumption. 

During token decoding, the accelerator iteratively processes new tokens for an active task. This phase touches a comparatively small subset of working memory on every cycle. Conversely, when an agent pauses to wait for external inputs or tool completions, its existing context becomes entirely dormant. It forms a large pool of cold memory that sits unread for seconds or minutes. Only when the session receives the required input and resumes execution does the accelerator need to access this historical context.

This behavioural divergence suggests a hybrid hierarchy. By splitting the KV cache into a hot-cold structure located entirely within the GPU memory tier, the system can capitalise on the strengths of both memory technologies while side-stepping their weaknesses. The frequently accessed hot set remains resident in HBM, where low read power and unlimited write endurance comfortably support token-by-token generation. Meanwhile, the voluminous cold pool resides in high bandwidth flash. The cold pool is touched only upon session reactivation, sparing the flash memory from relentless read cycles while insulating HBM from capacity exhaustion.

## Quantifying density, latency, and power savings

Evaluating this architectural arrangement on agentic workloads using the Qwen3-Coder-30B-A3B model highlights the operational differences between monolithic memory and a tiered hierarchy. The hot-cold layout delivers a time-between-tokens (TBT) of 14 milliseconds during active generation, preserving the responsiveness required for automated software engineering and reasoning tasks. 

When an idle session resumes, the overhead introduced by fetching the cold context from on-package flash is roughly 0.1 milliseconds on top of the baseline prefill stage. This negligible resume latency confirms that HBF read bandwidth is sufficiently wide to reload dormant states without stalling the execution pipeline. Because the cold tier relieves the pressure on HBM capacity, the design permits an accelerator to host 24 times more concurrent sessions than an HBM-only system. 

The strategy also resolves the energy penalty of pure flash architectures. Confining steady-state decoding traffic to HBM reduces the read power draw by 7.6 kilowatts across an eight-GPU node compared to a configuration that serves all KV traffic directly from flash. By avoiding sustained flash reads during decoding, the system remains within standard datacentre power envelopes while retaining the capacity benefits of 3D-NAND.

These findings show that high bandwidth flash cannot serve as a blanket replacement for HBM in modern AI accelerators. Its utility relies on software-hardware coordination that separates working sets according to temporal access patterns. The reported gains reflect specific agentic access distributions on a single 30-billion-parameter code-generation model; workloads with shorter pause times, higher token-generation-to-pause ratios, or fundamentally different context reuse dynamics may see different trade-offs between flash endurance, read power, and session density.

## Sources

- [Hot-Cold Tiering of HBM and High Bandwidth Flash for Agentic LLM Serving](https://arxiv.org/abs/2609.25782), Jongjin Baek et al., arXiv; published in vol. 25, no. 2, pp. 355-358, July-Dec. 2026, 2026-09-22
- [Publisher record (DOI)](https://doi.org/10.1109/LCA.2026.3729099)

## The R&D takeaway

For teams designing next-generation AI hardware and serving runtimes, treating accelerator memory as a monolithic tier is no longer sustainable under agentic traffic. R&D roadmaps should prioritise heterogeneous, on-package memory systems paired with runtime policies that explicitly partition transient computation states from dormant execution history. Engineering effort is best spent on co-designing the handoff mechanisms between low-power volatile memory and dense non-volatile tiers rather than chasing pure capacity expansion within high bandwidth memory alone.

*The R&D Innovate desk*
