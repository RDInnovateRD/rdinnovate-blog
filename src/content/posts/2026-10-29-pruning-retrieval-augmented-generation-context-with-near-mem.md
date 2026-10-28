---
title: "Pruning retrieval-augmented generation context with near-memory Ising machines"
date: 2026-10-29
excerpt: "A fabricated 28-nanometre SRAM compute-in-memory macro reframes RAG reranking as binary optimisation, cutting evaluated query energy by two thirds."
category: "Compute & AI"
catslug: "compute-ai"
source:
  kind: arxiv
  id: "arxiv:2610.37033"
  url: "https://arxiv.org/abs/2610.37033"
  title: "p-DCIM: A 28nm Probabilistic SRAM DCIM based Ising Machine for Near-Memory Context Selection in LLM-RAG Pipeline"
  venue: "arXiv preprint"
  published: "2026-10-27"
  authors: "Madhav Vadlamani et al."
  peer_reviewed: false
generated:
  provider: gemini
  model: "gemini-3.8-flash"
  at: "2026-10-28T16:32:17.720Z"
---

Retrieval-augmented generation has become the standard architectural pattern for tethering large language models to external knowledge bases. By retrieving relevant document snippets from a vast corpus and prepending them to the user prompt, system designers can curb factual hallucinations and inject domain-specific data without retraining the underlying network. Yet this pipeline suffers from an acute efficiency bottleneck at the interface between storage and inference. Standard vector search retrieves dozens or hundreds of candidate text passages, many of which contain redundant, distracting, or irrelevant tokens. To filter this pool into a compact context window, modern pipelines increasingly rely on a secondary language model to score and rerank candidate evidence. Running repeated autoregressive or cross-encoder passes over broad candidate pools introduces a punishing computational and energy penalty, often consuming more power than the generation step itself.

A research team has proposed circumventing this digital tax by shifting context selection away from heavy language models altogether, treating it instead as a combinatorial optimisation problem executed inside the memory stack. In an arXiv preprint that has not yet undergone peer review, the authors introduce p-DCIM, a fabricated probabilistic static random-access memory (SRAM) digital compute-in-memory (DCIM) Ising machine designed specifically for set-level context selection. Rather than moving vast amounts of textual data into host processor cores for iterative inference, the architecture evaluates candidate subsets directly beside the storage substrate using low-power stochastic physical computing principles.

## Reformulating context selection as a binary optimisation problem

The primary conceptual shift behind the architecture lies in reformulating passage selection as a quadratic unconstrained binary optimisation (QUBO) problem. When assembling context for a large language model, the goal is to select an optimal subset of passages that simultaneously maximises semantic relevance to the input query and minimises mutual redundancy among the chosen passages. Standard retrieval systems address this through multi-stage neural rerankers, which process candidate sequences through dense attention layers to output ranking probabilities.

By framing evidence selection as a QUBO problem, each retrieved candidate passage is mapped to a binary variable representing an include-or-exclude decision. The objective function penalises the inclusion of passages with weak alignment to the query vector, while quadratic interaction terms penalise the co-occurrence of passages whose vector representations overlap heavily. This mathematical formulation maps directly onto the classical Ising model from statistical physics, where individual binary choices correspond to magnetic spin orientations and the optimal context selection corresponds to the lowest-energy ground state of the system Hamiltonian. Finding the ideal subset of reference documents thus transforms from a sequence of transformer forward passes into an energy-minimisation problem that can be solved via simulated annealing.

## A dual-mode digital compute-in-memory architecture

Solving combinatorial optimisation problems via digital annealing typically requires either dedicated coprocessors or large matrix-vector compute engines. To minimise silicon area and data movement, the researchers developed a dual-mode digital compute-in-memory macro in which a single hardware datapath performs two distinct computational stages. 

In conventional computing architectures, arithmetic logic units sit physically separated from the memory banks where embeddings and matrix coefficients are held. The constant shuttling of weights between storage and logic consumes the vast majority of the system's operational power. The p-DCIM macro addresses this by embedding multiply-and-accumulate (MAC) circuitry directly into the SRAM fabric. Crucially, the authors designed this MAC datapath to operate in two sequential modes. First, it computes the dot products between query embeddings and retrieved candidate embeddings, populating the similarity coefficients that define the QUBO problem matrix. Second, the very same MAC circuitry is reconfigured to evaluate the local Hamiltonian energy differences for each individual spin during the annealing routine.

Annealing algorithms rely on thermal fluctuations to escape local minima and converge toward the global energy optimum. In physical or simulated annealers, generating reliable, controllable noise across thousands of parallel nodes often necessitates complex analog circuits or power-hungry pseudo-random number generators. The p-DCIM macro circumvents this overhead by harvesting randomness directly from the memory cells. By inducing SRAM pseudo-read operations that provoke random bit flips, combined with a digital plane-count control, the chip creates graded cooling profiles. The effective annealing temperature is controlled entirely through on-chip digital configuration registers, providing fine-grained stochasticity without requiring analogue noise generators or external thermal regulators.

## Energy reductions and physical constraints

The macro was taped out and fabricated in a standard 28-nanometre CMOS process, occupying an active silicon area of 0.16 square millimetres and drawing 0.41 milliwatts of power. The proposed deployment model does not place this macro inside the central GPU compute core. Instead, the authors propose integrating the p-DCIM macro directly onto the logic base-die within 3D-stacked memory packages—specifically hybrid high-bandwidth memory (HBM) and high-bandwidth flash (HBF) assemblies. Under this operational concept, high-density candidate vector stores stay inside the memory stack. The local Ising macro receives the prompt vector, calculates similarity metrics, runs the stochastic anneal in situ, and returns only the indices of the winning passages across the high-speed interface to the host GPU.

When benchmarked against conventional language-model-based reranking approaches, the savings are stark. At the macro level, the normalised energy required to carry out the selection process is estimated to be more than six orders of magnitude lower than running a baseline language model for the task. When assessing the complete retrieval-augmented generation workflow, offloading the selection pass to the near-memory Ising solver yielded an evaluated total energy reduction per query of 67%. Furthermore, the authors report that this steep drop in operational power was achieved while maintaining comparable token-level F1 accuracy on the evaluated benchmark examples.

Despite these promising figures, the methodology faces clear engineering and architectural constraints. The physical prototype exists as a standalone 28-nanometre test macro rather than a fully integrated 3D memory base-die; operating inside the severe thermal and routing envelopes of commercial HBM stacks remains an unverified deployment challenge. Additionally, expressing document relevance strictly through quadratic vector interactions relies on the assumption that semantic utility can be captured entirely through linear and pairwise relationships. While this holds well for deduplication and basic relevance matching, it does not replicate the complex multi-step reasoning, cross-document synthesis, or subtle linguistic nuance that large cross-encoders can resolve. The evaluation in the study is based on specific test examples, meaning performance across highly heterogeneous enterprise data lakes and longer reasoning chains remains to be determined.

## Sources

- [p-DCIM: A 28nm Probabilistic SRAM DCIM based Ising Machine for Near-Memory Context Selection in LLM-RAG Pipeline](https://arxiv.org/abs/2610.37033), Madhav Vadlamani et al., arXiv preprint, not yet peer reviewed, 2026-10-27

## The R&D takeaway

For teams designing artificial intelligence infrastructure, this work demonstrates that the steepest energy gains in generative inference may come from excising unnecessary language-model workloads rather than merely accelerating them. By reformulating context filtering as a near-memory binary optimisation problem, systems can strip out substantial GPU compute cycles before context windows are ever populated. R&D leaders planning future heterogeneous accelerator nodes should evaluate whether intermediate filtering, ranking, and scheduling tasks can be delegated to specialised digital annealing macros embedded within memory stacks.

*The R&D Innovate desk*
