---
title: "Why the number of turns dictates coding agent costs"
date: 2026-10-18
excerpt: "An empirical analysis of coding agent trajectories shows turn count, not observation size, drives inference cost when prefix caching is in play."
category: "Compute & AI"
catslug: "compute-ai"
source:
  kind: arxiv
  id: "arxiv:2610.15093"
  url: "https://arxiv.org/abs/2610.15093"
  title: "TurnCost: Turns, Not Observations: Cache-Aware Loop Engineering for Coding Agents"
  venue: "arXiv preprint"
  published: "2026-10-10"
  authors: "Pramod Kumar, Raj Kumar Pandey"
  peer_reviewed: false
generated:
  provider: gemini
  model: "gemini-3.8-flash"
  at: "2026-10-17T13:32:18.360Z"
---

Most engineering efforts to rein in the operating cost of autonomous coding agents rest on an intuitive premise: command-line outputs, compiler logs, and runtime traces are enormous, so compressing tool observations must be the quickest way to lower inference expenditure. An agent functions through an iterative execution loop. It inspects a codebase, proposes edits or shell commands, receives the environmental output from tool executions, and appends those results into its prompt history before determining its next move. Within software engineering teams, the discipline of managing this runtime cycle—encompassing context pruning, model selection, observation compaction, and termination policies—has come to be known as loop engineering.

Because an unformatted traceback or verbose build log can easily span thousands of characters, system architects have naturally treated observation volume as the primary fiscal risk. Conventional wisdom holds that if an agent ingests several oversized logs over the course of a debugging session, the prompt context will rapidly inflate, multiplying token costs across every subsequent step. Consequently, substantial engineering time has been invested in stripping stack traces, summarising terminal output, and building algorithmic filters to compact tool observations before feeding them back into the model.

## How prefix caching alters agent economics

That mental model, however, overlooks how modern inference serving actually handles sequential conversational threads. In a preprint paper published on arXiv that has not yet undergone peer review, researchers Pramod Kumar and Raj Kumar Pandey present an empirical investigation into coding agent efficiency, examining 600 publicly released trajectories across two agent scaffolds and two distinct language models. Their analysis reveals that the underlying assumptions driving observation compression do not match empirical reality.

To begin with, the study demonstrates that tool observations are rarely as large as developer intuition suggests. While massive compilation dumps certainly occur, they sit near the ninety-ninth percentile of the distribution. In practice, the median observation across the evaluated corpora contains only 118 to 286 tokens. The vast majority of tool outputs during an agentic session are brief confirmations, small file reads, or concise terminal responses.

More critically, standard cost calculations fail to account for modern key-value cache architectures. In contemporary inference engines, prefix caching detects identical prompt prefixes across successive requests and reuses their precomputed attention states rather than evaluating them anew. Because an iterative agent loop operates by appending new actions and tool observations to an established, static interaction history, the prompt retains an identical prefix from turn to turn.

Across the 600 evaluated trajectories, Kumar and Pandey found that an average of 98.6 per cent of input tokens were served directly from a prefix cache. Under near-ideal caching conditions, the actual computational and financial burden of repeated input tokens drops precipitously. The authors calculate that standard flat-rate pricing models—which bill every input token as though it were being processed cold—overestimate actual loop execution costs by roughly seven times. When input tokens are heavily discounted by cache hits, aggressively compacting modest observations produces negligible financial savings while introducing the risk of omitting vital debugging details.

## The false economy of model delegation

The prevalence of prefix caching similarly complicates another widely adopted cost-reduction tactic: model delegation. In an effort to trim expenses, agent frameworks frequently implement routing mechanisms that dispatch ostensibly simple subtasks—such as parsing a test result or formulating a routine shell command—to smaller, cheaper models, reserving larger frontier models for complex reasoning.

To determine whether this strategy generates genuine net savings, the authors derived and empirically validated a closed-form break-even condition for model delegation. Their evaluation revealed that routing turns to smaller models increased total loop costs in half of the evaluated configurations, with the outcomes clustering tightly around the predicted mathematical threshold.

This counterintuitive outcome stems from cache boundaries. Key-value caches cannot be shared across different model architectures or distinct serving instances. When an agent scaffold routes an intermediate turn to a secondary model, the secondary model cannot reuse the extensive prefix cache already accumulated by the primary model. Instead, it must ingest the entire multi-turn trajectory from scratch at full input token cost. The cold-start processing penalty incurred by the secondary engine routinely exceeds the marginal savings gained from its lower token tariff, transforming a well-intentioned optimisation into an unexpected expense.

## What trajectory variance actually proves

If observation pruning and multi-model routing fail to deliver substantial savings, what actually drives the cost of an agentic coding session? When the researchers performed variance decomposition across the trajectory logs, a clear pattern emerged: turn count explains 84 per cent of the variance in log trajectory cost. Mean observation size, by contrast, explains only 4 per cent.

The most expensive trajectories in the benchmark were not defined by runaway tool outputs or bloated contexts. Instead, they were runs that executed an unusually large number of iterative turns while exhibiting some of the smallest average observation sizes. Every additional round trip between the agent and its runtime environment requires fresh output generation, latency overhead, and an incremental cache query, compounding cumulative costs far more aggressively than token density.

These findings clarify agent economics, but they also establish vital operational boundaries. As the authors explicitly point out, proving that turn count correlates strongly with total cost does not establish that turns can simply be eliminated without harming performance. In software engineering, iterative problem-solving is fundamentally exploratory. An agent might require twenty or thirty turns to isolate an elusive edge case, test potential patches, and verify regression suites. Forcing early termination or artificially restricting turn counts could lower per-session expenditure at the catastrophic cost of task resolution rates.

Furthermore, the study assumes near-ideal prefix caching. If an organisation runs its workloads on infrastructure with poor cache persistence, frequent evictions, or erratic load-balancing across worker nodes, the cache hit rate will degrade, reintroducing input token volume as a material financial driver. To help engineering teams quantify these complex dynamics, the authors released TurnCost, an analytical tool designed to rescore trajectory datasets under varying pricing structures, caching efficiencies, compaction algorithms, and routing rules.

## Sources

- [TurnCost: Turns, Not Observations: Cache-Aware Loop Engineering for Coding Agents](https://arxiv.org/abs/2610.15093), Pramod Kumar, Raj Kumar Pandey, arXiv preprint, not yet peer reviewed, 2026-10-10
- [Publisher record (DOI)](https://doi.org/10.1145/3843779.3844635)

## The R&D takeaway

R&D leaders directing autonomous agent initiatives should reorient engineering priorities away from observation compression and multi-model delegation, which offer diminishing returns under persistent prefix caching. Technical roadmaps should focus instead on loop efficiency, investigating algorithmic methods that reduce the number of turns required to achieve task completion without sacrificing solution accuracy. Finally, systems architects must treat prefix cache retention and session routing affinity as non-negotiable infrastructural requirements, since cache instability immediately erodes the operational viability of agentic systems.

*The R&D Innovate desk*
