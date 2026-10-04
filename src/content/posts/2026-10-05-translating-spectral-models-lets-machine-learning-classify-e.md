---
title: "Translating spectral models lets machine learning classify extragalactic X-ray sources"
date: 2026-10-05
excerpt: "A two-stage pipeline uses synthetic Hubble photometry to bridge the gap between Galactic training catalogues and extragalactic X-ray point sources."
category: "Physics & Space"
catslug: "physics-space"
source:
  kind: arxiv
  id: "arxiv:2610.00459"
  url: "https://arxiv.org/abs/2610.00459"
  title: "XClass: An Automated Multiwavelength Machine-Learning Pipeline for Classification of Extragalactic X-ray Sources. I. Pipeline Description"
  venue: "arXiv; published in Astrophys. J. 1008, 117 (2026)"
  published: "2026-09-30"
  authors: "Blagoy Rangelov et al."
  peer_reviewed: true
generated:
  provider: gemini
  model: "gemini-3.7-flash"
  at: "2026-10-04T18:00:03.067Z"
---

Most high-energy point sources detected across nearby galaxies remain unclassified. The Chandra X-ray Observatory has accumulated vast archives of extragalactic observations, pinpointing thousands of discrete X-ray emissions in neighbouring galactic systems. Yet translating those detections into specific astrophysical phenomena—distinguishing an active galactic nucleus from a supernova remnant, a cataclysmic variable, or a binary star system hosting a neutron star or black hole—has long been stalled by an incompatibility in observation hardware.

Machine-learning classifiers require large, well-labelled training sets. In high-energy astrophysics, confirmed labels exist almost exclusively for sources within our own Milky Way, where astronomers have assembled extensive catalogues using ground-based, wide-field optical and infrared surveys. However, individual stars and compact binaries in external galaxies cannot be resolved by ground-based surveys; observing them demands the high spatial resolution of spaceborne instruments such as the Hubble Space Telescope. Because Hubble uses a completely different set of optical and ultraviolet photometric filters than wide-field ground instruments, models trained on ground survey data cannot directly process space telescope observations. Published in *The Astrophysical Journal*, a new end-to-end classification system named XClass demonstrates a method for bridging this photometric divide.

## Bridging disjoint instruments with synthetic photometry

When two instruments observe the sky through different filter bands, their recorded flux values cannot be mapped one-to-one without knowing the underlying emission spectrum of the object. A direct statistical transfer between the Pan-STARRS and Two Micron All-Sky Survey (2MASS) bands used for Galactic catalogues and the various passbands of Hubble Space Telescope (HST) instrumentation is impossible because different astronomical objects emit radiation with distinct spectral shapes.

XClass circumvents this mismatch through spectral energy distribution (SED) translation. Instead of attempting a direct coordinate transform between raw magnitude measurements, the pipeline fits physical, class-appropriate spectral models to the multi-band photometric measurements of each training object. Once the best-fitting spectral energy distribution is established, the pipeline convolves that model spectrum through the transmission curves of the target HST filters. 

This process generates synthetic HST magnitudes for every Galactic training object. By converting heterogeneous ground-based observations into the precise photometric system used by Hubble, the pipeline constructs a common, unified feature space. The feature set incorporates these SED-translated optical and ultraviolet colours alongside X-ray hardness ratios derived from Chandra and calculated X-ray-to-optical flux ratios.

Crucially, the pipeline enforces a strict selection rule: it restricts the training sample to sources that possess at least one measured optical magnitude. Many automated classification systems fill missing observational channels through numerical imputation, which estimates missing values from broader population averages. In multiwavelength astrophysics, however, imputation frequently introduces severe artefacts, creating artificial correlations that degrade downstream model performance. Excluding sources with missing optical data avoids these distortions while retaining a substantial training baseline of 11,374 sources.

## An asymmetric two-stage classification hierarchy

The source population in extragalactic fields is characterised by severe class imbalances. Some phenomena, such as background active galactic nuclei, occur frequently, while others, such as specific sub-types of binary systems, are rare. Furthermore, some classes share broad physical similarities in their high-energy signatures but differ subtly in their evolutionary stages and secondary companions.

To handle these structural differences, XClass splits the classification problem across an asymmetric two-stage Random Forest architecture. The pipeline categorises point sources into seven distinct astrophysical classes: active galactic nuclei (AGN), low-mass X-ray binaries (LMXBs), high-mass X-ray binaries (HMXBs), cataclysmic variables (CVs), supernova remnants, low-mass foreground stars, and high-mass foreground stars. 

The training baseline is compiled from ten distinct Galactic catalogues and established extragalactic supernova remnant catalogues, cross-matched against the Chandra Source Catalog (version 2.1). Rather than forcing a single decision forest to resolve all seven classes simultaneously, the first stage carries out a broad classification, separating sources into four macro-categories: active galactic nuclei, X-ray binaries, supernova remnants, and foreground stars.

Once Stage 1 isolates the candidate X-ray binaries, Stage 2 resolves them into their specific physical sub-types: low-mass or high-mass X-ray binaries. This second stage does not operate in isolation; it employs an augmented feature vector that integrates the class probability outputs generated by Stage 1 alongside the primary observational features. This hierarchical flow allows the second-stage forest to refine ambiguous boundary cases using the confidence levels established in the initial macro-level separation.

On its 11,374-source optical baseline, the complete pipeline achieves an overall accuracy of 99.6 per cent. Because overall accuracy can be misleading in datasets dominated by majority classes, the authors evaluate performance using balanced accuracy, which treats all classes with equal weighting regardless of sample size. XClass attains a balanced accuracy of 0.90. In addition, the pipeline exhibits strong probabilistic reliability, achieving an Expected Calibration Error (ECE) of 0.002, indicating that the model's predicted class probabilities closely match empirical observation frequencies across the entire feature space.

## Operational boundaries and pipeline scope

While XClass establishes a high-accuracy classification framework, its operational boundaries are defined by its data requirements and structural assumptions. 

First, the system is designed to classify point sources rather than extended emissions. Its feature space relies on cross-matched X-ray properties from Chandra and optical-to-infrared counterparts. Because the training protocol deliberately avoids data imputation to prevent systematic bias, the pipeline cannot classify pure X-ray detections that lack any detectable optical counterpart. Any source falling below optical detection thresholds must be excluded or set aside for deeper follow-up imaging.

Second, the SED translation step relies on class-appropriate spectral models. If an observed object represents an atypical, highly obscured, or novel class of emitter that deviates significantly from the modelled spectral templates, the resulting synthetic HST magnitudes may introduce colour errors into the feature vector. 

Nevertheless, the pipeline is constructed to be modular. It is not locked to a single static filter configuration; because the SED translation acts on physical spectral models, the system can recalculate synthetic magnitudes for any specified combination of Hubble filters. While initial verification was conducted on catalogue baselines, the architecture is designed for immediate deployment across neighbouring galaxies, with applications to the massive point-source populations of the Andromeda Galaxy (M31) and Triangulum Galaxy (M33) slated for separate implementation.

## Sources

- [XClass: An Automated Multiwavelength Machine-Learning Pipeline for Classification of Extragalactic X-ray Sources. I. Pipeline Description](https://arxiv.org/abs/2610.00459), Blagoy Rangelov et al., arXiv; published in Astrophys. J. 1008, 117 (2026), 2026-09-30
- [Publisher record (DOI)](https://doi.org/10.3847/1538-4357/ae8d15)

## The R&D takeaway

For teams designing predictive pipelines across domain boundaries, physical forward-modelling offers a robust alternative to direct feature mapping or mathematical data imputation. When training and target datasets are collected through mismatched sensor profiles, translating source physics into synthetic instrument responses establishes a coherent feature space without fabricating statistical artefacts. Dividing complex, imbalanced multi-class targets into a hierarchical, multi-stage classifier further preserves accuracy on minority classes by passing early-stage uncertainty directly into subsequent decision stages.

*The R&D Innovate desk*
