---
title: "Scaling robot fleet policies through automated collective experience retrieval"
date: 2026-10-21
excerpt: "A collective learning framework allows robot fleets to improve policy reliability by sharing execution failures and retrieving successful maneuvers without human supervision."
category: "Robotics"
catslug: "robotics"
source:
  kind: arxiv
  id: "arxiv:2610.25736"
  url: "https://arxiv.org/abs/2610.25736"
  title: "Learning from Fleet Experience: A Collective Learning Paradigm for Robots"
  venue: "arXiv preprint"
  published: "2026-10-19"
  authors: "Chao Yu et al."
  peer_reviewed: false
generated:
  provider: gemini
  model: "gemini-3.6-flash"
  at: "2026-10-20T16:39:31.267Z"
---

As deployments of autonomous robotic systems move from isolated laboratory environments into large-scale commercial and industrial fleets, maintaining high policy reliability becomes a central engineering challenge. Robots operating in real-world environments frequently encounter subtle physical variations, mechanical slips, or sensor noise that cause policy execution to fail. Traditionally, improving policy performance post-deployment has required continuous human supervision. When a robot commits an error, a human operator typically intervenes through teleoperation or manual resets to supply corrective demonstrations. While this approach works well during early-stage prototyping, it creates a severe operational bottleneck as fleet sizes scale. Human-in-the-loop intervention costs scale linearly with the number of operating units, rendering teleoperation-based correction economically unfeasible for large fleets.

To achieve long-term autonomy across extensive deployments, modern robotics requires a shift in design philosophy: enabling deployed units to learn autonomously from their own operational executions without demanding ongoing human intervention. Rather than treating each robot as an isolated learner or relying on continuous expert oversight, robotic fleets must leverage their collective deployment experience to continuously refine shared control policies.

## Automated retrieval of shared execution experience

To address the bottleneck of human intervention, researchers have introduced a framework called collective experience learning. This approach enables a fleet of deployed robots to continuously pool their operational data and share execution experiences to update a single, common control policy. The framework operates without gathering fresh expert demonstrations or requiring manual corrective actions from human supervisors.

The central algorithmic mechanism powering this approach is failure-guided experience retrieval fine-tuning. During routine deployment, individual robots execute tasks while logging state and trajectory data. When a robot encounters an execution failure or an anomalous physical context, the framework isolates the specific failure context. It then uses this contextual information to query a shared fleet-wide database containing successfully executed trajectory segments gathered across all operating units in the fleet. By identifying prior instances where another robot successfully navigated a similar context, the system retrieves the corresponding successful trajectory segment.

The retrieved action sequences from these successful historical executions serve as automated supervisory labels for policy updating. The policy is fine-tuned directly against these retrieved trajectories, effectively steering the model away from failure states without requiring a human to demonstrate the correct response. Because the fleet continuously generates new execution data during standard operation, the repository of successful trajectory segments grows organically over time.

To manage the logistics of real-time data collection and policy distribution across multiple physical units, the architecture utilizes a fault-tolerant asynchronous training system. In real-world fleet deployments, individual units frequently experience localized disruptions, such as wireless network drops, temporary power cycles, hardware pauses, or task interruptions. The asynchronous training infrastructure coordinates experience collection from individual units, manages centralized policy optimisation in the background, and distributes updated policy checkpoints back to the fleet without requiring all units to remain synchronously connected or operational.

## Fleet scaling performance and experimental findings

It is important to note that these results are detailed in a recent research paper published as an arXiv preprint that has not yet undergone formal peer review.

The performance of the collective experience framework was evaluated through extensive real-world manipulation experiments across five distinct physical tasks. To rigorously assess how well the updated policies generalised to unmeasured hardware, testing was conducted on physical robots that were explicitly excluded from the initial data collection phase. Across 120 evaluation trials per task on these held-out units, the fine-tuned policies achieved task success rates ranging between 93.3 per cent and 99.2 per cent.

The experimental evaluation also analysed how system performance scales with fleet size. In a multi-stage phone packaging task involving a large fleet of 96 physical robots, fine-tuning the control policy using collective fleet experience increased the task success rate from a baseline of 79.2 per cent to 98.3 per cent. When holding the collection time per individual robot constant, larger fleets produced a higher volume and broader diversity of execution experience. This increased experience pool enabled the retrieval algorithm to find more precise matches for failure contexts, driving systematic improvements in overall success rates as fleet size expanded.

Despite these empirical results, the framework operates within clear boundaries. First, the method relies fundamentally on the existence of relevant successful trajectory segments in the shared fleet database. If a robot encounters a highly novel failure state for which no unit in the fleet has ever recorded a successful execution, the retrieval system cannot supply valid action supervision. Second, the architecture relies on accurately detecting and logging failure contexts during runtime execution; errors in contextual indexing could lead to retrieving mismatched supervision. Finally, while demonstrated across complex multi-stage physical manipulation tasks such as phone packaging, the system was evaluated on fixed task workflows rather than open-ended, unstructured mobile navigation environments.

## Sources

- [Learning from Fleet Experience: A Collective Learning Paradigm for Robots](https://arxiv.org/abs/2610.25736), Chao Yu et al., arXiv preprint, not yet peer reviewed, 2026-10-19

## The R&D takeaway

For engineering leaders funding or planning multi-robot deployments, this collective learning paradigm demonstrates that expanding fleet scale can act as an automated engine for policy improvement rather than an operational supervisory burden. By replacing manual teleoperation interventions with contextual retrieval from shared execution logs, R&D teams can decouple policy maintenance costs from the number of active physical units. Strategic software roadmaps should prioritise building robust asynchronous data synchronisation pipelines and standardised failure-logging formats to ensure that fleet-wide experience can be continuously harvested and converted into higher policy reliability.

*The R&D Innovate desk*
