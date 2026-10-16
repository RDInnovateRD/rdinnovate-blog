---
title: "Tracking the hidden cellular memories that make stem cell models diverge"
date: 2026-10-17
excerpt: "Monoclonal gastruloid profiling and lineage barcoding reveal that organoid variability stems from heritable epigenetic fluctuations in founder stem cells."
category: "Bio"
catslug: "bio"
source:
  kind: europepmc
  id: "pmid:42849438"
  url: "https://europepmc.org/article/MED/42849438"
  title: "A fluctuation test for gastruloid heterogeneity"
  venue: "Cell"
  published: "2026-10-08"
  authors: "Regalado SG et al."
  peer_reviewed: true
generated:
  provider: gemini
  model: "gemini-3.8-flash"
  at: "2026-10-16T19:33:44.222Z"
---

Biological assays built on cultured stem cells routinely face an infuriating repeatability problem. When embryonic stem cells are prompted to self-organise into gastruloids—three-dimensional aggregates that replicate the early stages of mammalian embryonic body patterning—the resulting structures diverge widely. In the same incubator, fed by identical batches of media and exposed to uniform signalling cues, individual gastruloids develop along starkly different trajectories. Some elongate smoothly, executing symmetrical spatial patterning, while others stall, collapse, or generate mismatched mixtures of cellular lineages.

For years, the working assumption across many bioengineering and stem cell laboratories has been that this variability is primarily a byproduct of protocol noise or spontaneous, stochastic bifurcation during morphogenesis. Under this view, once hundreds or thousands of cells come together in a polyclonal aggregate, micro-environmental gradients, variable aggregate geometry, or subtle fluctuations in local cell-cell signalling nudge the developing collective off course. Process engineers have responded accordingly, investing heavily in automated liquid handling, microfluidic culture chambers, and tighter physical boundary constraints to keep initial conditions uniform. Yet even under exacting environmental control, substantial inter-individual heterogeneity persists.

A study published in *Cell* by Regalado and colleagues demonstrates that this assumption is incomplete. Rather than arising purely from stochastic dynamics after induction, a substantial share of organoid variation is already baked into the starting stem cell pool. By breaking conventional polyclonal protocols down to single cells and tracing their lineage histories, the authors reveal that individual embryonic stem cells harbour heritable, pre-existing fate biases that systematically dictate what kind of gastruloid their progeny will form.

## Tracking variation to its cellular origins

To isolate the source of developmental divergence, the study stripped away the confounding multicellular complexity of standard organoid protocols. Conventional gastruloids are formed by aggregating hundreds of cells together, meaning any idiosyncratic cell state is quickly buried within an ensemble average. To prevent this masking, the researchers established monoclonal gastruloids, each initiated from an isolated single mouse embryonic stem cell (mESC).

Once these single-cell-derived structures were cultivated and analysed through molecular profiling, their phenotypic divergence was stark. Far from averaging out into a uniform baseline, the monoclonal gastruloids exhibited extensive inter-individual heterogeneity. Certain monoclonal lines failed to develop altogether, arrested at rudimentary developmental checkpoints. Others displayed pronounced lineage skewing, committing preferentially toward mesodermal lineages or veering heavily into neural fates. In several cases, the monoclonal gastruloids generated cell types that are atypical in conventional polyclonal aggregates, exposing developmental programs that are normally dampened or outcompeted when diverse stem cells are pooled.

The sheer range of outcomes from identical culture conditions raised a fundamental mechanistic question analogous to the classic Luria-Delbrück fluctuation tests of bacterial genetics: does this developmental diversity emerge purely by chance after differentiation is initiated, or does it reflect heritable variation that arose in the founder cells prior to the start of the experiment?

To answer this, the team deployed DNA Typewriter, an engineered genomic lineage recorder that systematically registers compact molecular marks into synthetic chromosomal arrays across successive rounds of cell division. By reading out these lineage-recording barcodes, the researchers could reconstruct deep phylogenetic family trees linking founder mESCs that had expanded in culture before gastruloid aggregation began.

The lineage reconstructions provided unequivocal proof of pre-existing bias. Founder cells that were close relatives within the lineage tree—descended from a common ancestor shortly before experiment induction—consistently formed gastruloids that shared the same morphological and molecular phenotypes. Conversely, distant subclones formed distinct classes of gastruloids. The fate biases were therefore heritable across cell divisions in the undifferentiated maintenance phase, well before any developmental cues were introduced.

## Clonal lineages and cryptic epigenetic memory

Lineage tracking established that the biases were inherited, but it did not explain how an undifferentiated mouse embryonic stem cell physically remembers its developmental inclinations. Cultured pluripotent cells are maintained in conditions intended to preserve a ground state, yet pluripotency is not a single, static molecular configuration. It is a dynamic equilibrium of shifting transcriptional programs and chromatin states.

By linking mESC subclones directly to the downstream fates of their descendant gastruloids, the researchers uncovered cryptic molecular markers that predict developmental performance. Founder cells that looked morphologically indistinguishable in the undifferentiated state nevertheless contained measurable differences in gene expression and chromatin accessibility.

Importantly, these predictive molecular signatures were concentrated at imprinted, methylation-sensitive genomic loci known to govern developmental potency. In mammalian biology, genomic imprinting relies on DNA methylation and closed chromatin to restrict gene expression to a specific parental allele. When methylation or chromatin packing at these sensitive control regions drifts during culture, the epigenetic silencing can weaken or tighten. 

Because these epigenetic marks are copied across DNA replication cycles, any drift occurring in a single cell is inherited by its entire branch of daughter cells. The study demonstrates that these heritable shifts in chromatin accessibility alter how readily specific gene programs can be activated when external morphogens arrive. A subclone whose epigenetic landscape already leans toward a permissive configuration for neural transcription factors will react differently to differentiation signals than a neighbouring subclone with more accessible mesodermal enhancers or altered imprinted loci. Intrinsic, heritable fluctuations in the undifferentiated mESC state therefore act as an unrecognised driver of organoid heterogeneity.

## Boundaries, model limits, and translational friction

These findings give researchers a clear conceptual framework for understanding why stem cell models drift, but they also highlight notable technical and practical constraints.

First, the experimental system relies on mouse embryonic stem cells forming simplified gastruloids in vitro. While mouse gastruloids serve as powerful reductionist models for post-implantation patterning, they do not duplicate all embryonic structures, nor do they carry the identical regulatory architecture of human pluripotent stem cells. Human induced pluripotent stem cells (iPSCs) accumulate their own idiosyncratic epigenetic and genetic anomalies during reprogramming and extended culture, meaning the specific loci driving heterogeneity in human organoid systems may differ from the imprinted loci identified here.

Second, tracking these effects required synthetic genomic recording via DNA Typewriter. While this tool provides high-resolution lineage trees in an experimental stem cell setting, deploying complex genetic barcoding is not a straightforward quality-control measure for standard manufacturing workflows. Lineage barcoding modifies the cellular genome, which limits its utility in clinical cell therapy settings where unmodified cells are essential.

Finally, proving that starting cell states dictate organoid variation does not automatically solve the operational challenge. Identifying cryptic differences in chromatin accessibility requires sensitive molecular assays. In an industrial or bioprocess context, separating "competent" stem cell subclones from those carrying subtle biases toward failure or abnormal differentiation will require non-destructive screening methods or far more robust maintenance protocols that suppress epigenetic drift altogether. Until such methods exist, researchers must accept that even seemingly homogenous starting cultures contain silent, heritable fractions that will behave unpredictably under identical induction protocols.

## Sources

- [A fluctuation test for gastruloid heterogeneity](https://europepmc.org/article/MED/42849438), Regalado SG et al., Cell, 2026-10-08
- [Publisher record (DOI)](https://doi.org/10.1016/j.cell.2026.09.057)

## The R&D takeaway

For teams funding and designing organoid-based discovery platforms, this work shifts the engineering priority from exclusively refining downstream induction mechanics to actively monitoring epigenetic drift in upstream seed trains. R&D leaders should avoid assuming that uniform culture media and automated liquid handling can overcome uncharacterised subclonal variation within starting stem cell populations. Screening programs using developmental models will generate more reliable data if they benchmark the baseline chromatin and imprinting stability of founder cell banks before committing resources to large-scale differentiation campaigns.

*The R&D Innovate desk*
