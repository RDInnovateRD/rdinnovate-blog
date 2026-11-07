---
title: "Engineered prime editing framework improves sequence insertion efficiencies in dicot crops"
date: 2026-11-08
excerpt: "Combining dual guide RNAs, template base mismatches, engineered transcriptases, and cis-regulatory elements overcomes historical efficiency bottlenecks in dicot crop editing."
category: "Bio"
catslug: "bio"
source:
  kind: europepmc
  id: "pmid:42951926"
  url: "https://europepmc.org/article/MED/42951926"
  title: "SmartPE enables efficient prime editing in dicot crops"
  venue: "Nature plants"
  published: "2026-10-28"
  authors: "Liu Y et al."
  peer_reviewed: true
generated:
  provider: gemini
  model: "gemini-3.6-flash"
  at: "2026-11-07T18:36:42.269Z"
---

## Overcoming the dicot editing bottleneck

Precision genetic modification in agriculture relies on tools that can alter DNA sequences without introducing uncontrolled double-stranded breaks. Standard CRISPR-Cas9 nucleases excel at disrupting gene function by creating targeted double-stranded cuts, which the cell repairs through error-prone pathways. However, inserting specific functional sequences, swapping individual nucleotides, or placing regulatory elements requires a higher degree of control. Prime editing offers this precision by fusing a catalytically impaired Cas9 nickase to a reverse transcriptase enzyme, directed by an extended prime editing guide RNA that carries both the targeting sequence and the desired template edit.

While prime editing has demonstrated high utility in monocot crops such as rice and wheat, its application in dicotyledonous plants has encountered severe operational limits. Dicots—a broad group of flowering plants that includes essential oilseed, protein, and horticultural crops like soybean, oilseed rape, and tomato—have consistently shown low baseline editing rates and extreme variability from one genomic location to another. Standard prime editing configurations frequently yield negligible edit rates in dicot cells, forcing researchers to screen thousands of candidates or rely on complex selection markers to recover targeted events. This disparity has created an ongoing technical bottleneck, delaying the deployment of precise trait engineering in broad-leaf crops relative to cereal grasses.

## Multi-component optimisation of the editing architecture

To resolve this persistent inefficiency, researchers developed SmartPE, a prime editing system designed specifically to address the biochemical constraints observed in dicot cells. Rather than altering a single component of the editing machinery, the SmartPE framework integrates four distinct structural and regulatory modifications into a single operational system.

First, the system employs a dual prime editing guide RNA strategy. By delivering two coordinated guide RNAs that target opposite strands of the DNA duplex, the complex stabilises the uncoiled target DNA during the synthesis phase, promoting cleaner replacement of the endogenous strand with the newly synthesised sequence. Second, the developers introduced calculated base mismatches into the reverse-transcription templates embedded within the guide RNAs. These structural mismatches alter the physical dynamics of the template-strand interaction, preventing unwanted secondary folding patterns and favouring correct hybridisation with the target genomic locus.

Third, the framework incorporates optimised cis-regulatory elements designed to drive robust, balanced expression of both the guide RNA constructs and the protein machinery within plant cells. Maintaining an adequate ratio of active enzyme to guide RNA during critical cell division cycles improves the probability that an editing complex will encounter and process its target site before cellular repair pathways intervene. Finally, SmartPE replaces canonical reverse transcriptases with engineered transcriptase variants tailored for enhanced processivity and fidelity. These engineered enzymes read across the RNA template with higher stability inside plant nuclei, reducing premature termination during the reverse-transcription step.

## Efficiency gains across model and crop species

The performance of SmartPE was tested across several key dicot species in both transient cellular assays and stably transformed tissue line experiments. Initial validation was conducted in isolated plant protoplasts—single plant cells stripped of their cell walls—representing four key species: Arabidopsis thaliana, tomato, soybean, and oilseed rape.

In Arabidopsis protoplasts, SmartPE demonstrated editing efficiencies between 6.3-fold and 23.0-fold higher than canonical prime editing platforms. In tomato protoplasts, the system recorded efficiency gains ranging from 8.2-fold to 38.2-fold over standard systems. Parallel testing across target loci in soybean and oilseed rape achieved efficiency increases exceeding 10-fold at the majority of genomic sites tested.

To determine whether these transient single-cell gains translated into complex plant tissues, the framework was evaluated in tomato hairy root cultures targeting the SlOR2 locus. In this tissue assay, standard prime editing produced a low overall edit rate, yielding only 1.0 percent heterozygous edit lines alongside multiple chimeric tissues containing incomplete or mixed mutations. By contrast, SmartPE generated homozygous edit lines at a frequency of 7.3 percent and heterozygous edit lines at 12.5 percent at the same genomic site.

In stable plant transformation trials, SmartPE demonstrated the capacity to perform complex sequence modifications. The system mediated the seamless insertion of an epitope tag (a FLAG tag sequence) into the Arabidopsis genome. In tomato plants, SmartPE successfully introduced functional sequence elements, including transcription enhancers and recombination sites, into targeted genomic locations, achieving stable transformation editing efficiencies of up to 32.3 percent.

## Operational limits and path to field deployment

While these quantitative results show substantial progress in molecular editing efficiency, several practical boundaries remain before SmartPE can be routinely integrated into commercial plant breeding pipelines.

The primary limitation rests on the gap between cellular transformation and whole-plant regeneration. The reported efficiency gains were primarily measured in protoplasts, hairy root cultures, and early-stage stable transformants. In major dicot crops, particularly soybean and oilseed rape, regenerating fully mature, fertile plants from single edited protoplasts or transformed callus tissue remains a technical challenge that is independent of the editing tool's enzymatic speed. A high editing rate in a cellular assay does not eliminate the delays or failures inherent to complex tissue culture protocols.

Additionally, the study demonstrated precise insertion of relatively compact sequences, such as tags, enhancers, and recombination sites. The performance of SmartPE when delivering larger structural constructs—such as multi-gene pathways or full regulatory cassettes extending over several kilobases—remains to be systematically mapped across diverse crop genomes. Finally, translating these lab-based lines into field-ready varieties requires multi-generational stability testing, off-target genomic screening across full plant genomes, and regulatory reviews, all of which represent significant multi-year investments downstream of initial molecular validation.

## Sources

- [SmartPE enables efficient prime editing in dicot crops](https://europepmc.org/article/MED/42951926), Liu Y et al., Nature plants, 2026-10-28
- [Publisher record (DOI)](https://doi.org/10.1038/s41477-026-02447-w)

## The R&D takeaway

For biotechnology directors and agricultural R&D planners, SmartPE demonstrates that overcoming editing recalcitrance in complex plant systems requires multi-factor vector engineering rather than incremental tweaks to single components. R&D leaders should evaluate their gene-editing platforms to ensure guide design, enzyme engineering, and cis-regulatory architecture are optimised in tandem. However, program managers must align investments in advanced editing tools with parallel capabilities in tissue culture and whole-plant regeneration to prevent downstream bottlenecks from choking trait development pipelines.

*The R&D Innovate desk*
