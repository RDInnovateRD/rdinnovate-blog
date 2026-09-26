---
title: "Redesigning a fragile peptide ligase reveals a decoupling in enzyme physics"
date: 2026-09-27
excerpt: "Generative diffusion models and targeted mutagenesis produced FortiPAL-1, raising stability and expression without shifting its operating temperature."
category: "Bio"
catslug: "bio"
source:
  kind: europepmc
  id: "pmid:42769965"
  url: "https://europepmc.org/article/MED/42769965"
  title: "Constrained diffusion-enabled construction of a highly expressed and robust peptide asparaginyl ligase"
  venue: "Chemical science"
  published: "2026-09-15"
  authors: "Pang S et al."
  peer_reviewed: true
generated:
  provider: gemini
  model: "gemini-3.8-flash"
  at: "2026-09-26T17:37:21.299Z"
---

Enzymes capable of joining peptides together under mild aqueous conditions are among the most versatile tools in modern molecular synthesis. Peptide asparaginyl ligases, or PALs, are prized for their capacity to carry out peptide macrocyclisation and site-specific protein bioconjugation. By recognising specific short peptide sequences and forming peptide bonds, they allow chemists and biotechnologists to lock linear peptides into cyclic architectures that resist degradation, or to attach functional handles to therapeutic proteins with high precision.

Despite their utility, natural PALs carry severe practical liabilities. Most known members of this enzyme family suffer from low thermal stability, unfolding at temperatures around 50 °C. More problematically for development pipelines, they express poorly in standard industrial hosts. Attempting to harvest recombinant PALs from *Escherichia coli* typically yields vanishingly small amounts of soluble protein, forcing researchers and biomanufacturers to rely on low-yielding isolation from native botanical sources or cumbersome expression systems that cannot easily scale.

A new computational and experimental engineering effort has addressed this structural frailty directly. The resulting enzyme, designated FortiPAL-1, demonstrates that generative protein design can overcome the persistent expression and stability bottlenecks of fragile enzyme classes. At the same time, its characterisation reveals an important operational nuance: significantly increasing the melting temperature of an enzyme does not automatically shift the temperature at which it performs best.

## Building beyond natural scaffolds

Natural PALs evolved to operate within the narrow physiological envelopes of their host plants, where high thermodynamic stability and hyper-abundant soluble expression offer no selective advantage. Re-engineering these enzymes through purely rational point mutations or directed evolution has historically proved difficult because mutations that shore up stability often degrade the delicate active-site dynamics necessary for rapid catalysis.

To circumvent the trade-offs that constrain natural sequences, researchers constructed FortiPAL-1 through an integrated pipeline that combined generative sequence design with experimental optimisation. The strategy used constrained diffusion modelling to produce *de novo* sequence variations across the enzyme backbone. Diffusion models in structural biology generate sequences by learning the distribution of valid structural arrangements and generating novel sequences that satisfy geometric and chemical constraints.

A generative model alone, however, rarely produces an application-ready biocatalyst. The team coupled this generative sequence generation with multi-model-guided mutagenesis, using several predictive models in concert to identify and evaluate residue substitutions throughout the scaffold. They then introduced PAL-specific functional refinements, ensuring that the catalytic machinery required for peptide bond synthesis remained unperturbed while redesigning the surrounding structural matrix to facilitate stable folding and soluble synthesis.

## Structural resilience and bacterial yield

When produced in *E. coli*, FortiPAL-1 established practical benchmarks that natural PALs cannot approach. The engineered enzyme achieved a soluble zymogen expression level of 64 milligrams per litre. For researchers accustomed to milligram-scale yields from large volumes of bacterial culture, this represents a substantial operational shift. Zymogens are inactive enzyme precursors requiring cleavage for activation, and reaching tens of milligrams per litre in a standard bacterial chassis makes routine preparation and downstream testing substantially more practical.

The structural reinforcement also translated into marked resistance to heat denaturation. In thermal stability assays, FortiPAL-1 exhibited a melting temperature of 69 °C. Compared to the approximately 50 °C melting threshold typical of natural PALs, this 19-degree increase represents a dramatic hardening of the global fold. Such thermal resilience matters in industrial settings, where enzymes must endure shear stress, ambient temperature fluctuations, and extended incubation times without unfolding or aggregating into an inactive precipitate.

Critically, this stabilisation was achieved without sacrificing the enzyme's catalytic prowess. Engineered enzymes frequently suffer from sluggish kinetics, but FortiPAL-1 maintained a catalytic efficiency of 1.3 × 10^6 per molar per second (kcat / Km). This rate matches the catalytic efficiency of butelase-1, the fastest natural PAL characterised to date. FortiPAL-1 therefore demonstrates that the extensive sequence remodelling required to fortify an enzyme scaffold need not compromise the kinetic performance of its catalytic core.

## The decoupling of folding and function

The most instructive finding from the characterisation of FortiPAL-1 is a fundamental discrepancy between thermodynamic stability and operational kinetics. While the melting temperature of FortiPAL-1 jumped to 69 °C, this enhanced structural stability did not translate into an equivalent increase in the enzyme's optimal reaction temperature.

In classical enzymology, engineers often operate under the assumption that raising an enzyme's melting temperature will naturally shift its activity profile upward, allowing biocatalysis to be run at higher operating temperatures where substrate solubility improves and contamination risks decline. FortiPAL-1 demonstrates an explicit decoupling between global folding stability and catalytic performance.

The physical basis for this decoupling lies in the nature of dynamic biocatalysis. An enzyme's global melting temperature reflects the total free energy required to disrupt its cooperative three-dimensional structure. Catalytic turnover, by contrast, relies on localised conformational flexibility within and around the active site. If the catalytic residues and mobile loops must undergo specific mechanical motions to coordinate substrate binding, transition-state stabilisation, and product release, those local dynamics can remain rate-limiting even when the supporting scaffold has been rendered exceptionally rigid. 

FortiPAL-1 shows that generative sequence redesign can successfully build an exceptionally heat-resistant architectural framework around a dynamic catalytic pocket. However, it also cautions against assuming that global thermodynamic markers like melting temperature can serve as direct proxies for operational thermal optima.

## Translating design into biomanufacturing

While FortiPAL-1 resolves several bottlenecks that have restricted the practical use of PALs, important engineering steps remain before the platform can be widely integrated into manufacturing workflows. 

The published expression level of 64 milligrams per litre reflects the yield of the soluble zymogen form in *E. coli*. In practice, asparaginyl ligases synthesised as zymogens require an activation step to cleave the pro-domain and unleash the active biocatalyst. Scaling a bioconjugation process will require assessing the yield, efficiency, and cost of this activation process under pilot bioprocessing conditions.

Furthermore, macrocyclisation and bioconjugation reactions often involve diverse, non-standard synthetic peptides, bulky therapeutic payloads, or atypical reaction buffers containing organic co-solvents. While FortiPAL-1 matches the catalytic efficiency of butelase-1 on standard substrates, its tolerance to high substrate loadings, industrial shelf-life, and performance across diverse sterically hindered targets will dictate its adoption in commercial bioconjugation pipelines.

Nonetheless, the pipeline used to create FortiPAL-1 provides a template for dynamic enzyme engineering. Rather than treating generative AI as an all-in-one synthesis solution, the work shows the necessity of layering generative models with targeted multi-model mutagenesis and empirical functional refinements.

## Sources

- [Constrained diffusion-enabled construction of a highly expressed and robust peptide asparaginyl ligase](https://europepmc.org/article/MED/42769965), Pang S et al., Chemical science, 2026-09-15
- [Publisher record (DOI)](https://doi.org/10.1039/d6sc04842k)

## The R&D takeaway

For research programmes attempting to engineer industrially viable biocatalysts, pure generative design must be treated as an initial scaffold generator rather than a finished solution. Teams should combine diffusion architectures with functional filters to preserve delicate catalytic dynamics, rather than optimising solely for static stability scores. Furthermore, R&D planners must avoid treating melting temperature as a universal proxy for catalytic performance, explicitly validating kinetic behaviour across operational temperatures early in the engineering pipeline.

*The R&D Innovate desk*
