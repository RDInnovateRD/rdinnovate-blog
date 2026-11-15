---
title: "Multi-band intracranial decoding stabilizes long-term speech and grasp detection in ALS"
date: 2026-11-16
excerpt: "Combining lower-frequency neural features with high-gamma signals prevents performance decay in chronic electrocorticography brain-computer interfaces over extended periods."
category: "Neuroscience"
catslug: "neuroscience"
source:
  kind: europepmc
  id: "pmid:43008331"
  url: "https://europepmc.org/article/MED/43008331"
  title: "Lower frequency ECoG features improve longitudinal stability of speech and hand-grasp detection in a patient with progressive ALS"
  venue: "Journal of neural engineering"
  published: "2026-11-10"
  authors: "Wallner J et al."
  peer_reviewed: true
generated:
  provider: gemini
  model: "gemini-3.6-flash"
  at: "2026-11-15T13:55:35.282Z"
---

## The high-gamma decay problem in chronic neural implants

Brain-computer interfaces designed for chronic motor and communication restoration typically rely on high-gamma power from intracranial recordings. High-gamma activity, usually spanning frequencies above 70 Hz, correlates tightly with localised population spiking, offering high spatial and temporal resolution for decoding intended movements or speech. However, clinical translation of these implants faces a persistent obstacle: longitudinal signal instability. Over months and years, physical changes at the tissue-electrode interface—such as progressive encapsulation by fibrous tissue, minor mechanical displacement of array contacts, and ongoing neurodegeneration—cause high-frequency signal amplitudes to attenuate. As high-gamma recordings drift, classification algorithms trained on baseline data experience steady performance loss, requiring frequent recalibration routines that burden both users and clinicians.

While high-gamma activity reflects localised neuronal firing, lower-frequency neural oscillations (such as beta and delta rhythms) and time-domain signals like the local motor potential represent broader, synchronized neural ensembles. Because these lower-frequency signals integrate activity over larger cortical volumes, they are inherently less sensitive to sub-millimetre micro-displacements of individual recording contacts or localized tissue scarring. Despite this structural resilience, low-frequency features have often been relegated to secondary roles in decoders due to their lower spatial specificity. A study by Wallner and colleagues published in the *Journal of Neural Engineering* addresses this trade-off directly, evaluating whether lower-frequency spectral components and local motor potentials can preserve long-term decoding accuracy for speech and grasp detection without requiring constant model retraining.

## Harnessing lower frequencies and local motor potentials

To test the long-term viability of multi-spectral feature combinations, the researchers conducted a longitudinal study with a human participant suffering from progressive amyotrophic lateral sclerosis (ALS). The participant was implanted with two 64-channel electrocorticography (ECoG) arrays positioned over sensorimotor cortical regions. Logistic regression models were established to detect two functional behaviours: speech detection and hand-grasp detection. Speech detection performance was tracked across a 21-month period, while hand-grasp detection was monitored over 13 months.

The investigation compared models built on individual spectral bands—specifically high-gamma, beta, and delta frequencies—as well as the local motor potential, a low-frequency time-domain feature associated with movement execution. The team then constructed multi-band classification architectures that paired high-gamma power with lower-frequency spectral features, mapping the spatial and temporal contributions of each input component over time. Local motor potentials and lower-frequency rhythms reflect distinct physiological processes compared to high-gamma power. Beta rhythms (15 to 30 Hz) and delta rhythms (1 to 4 Hz) capture widespread oscillatory coordination across sensorimotor networks. By incorporating these resilient signal types into unified decoders, the experimental design sought to determine whether multi-scale feature integration could offset the natural decline of high-frequency signal power in long-term implants.

## Long-term performance gains and system limitations

The trial results confirmed that decoders relying exclusively on high-gamma features suffer severe functional degradation over extended clinical deployment. For speech detection, high-gamma model accuracy declined at an average rate of 4.3 percentage points per 100 days. For hand-grasp detection, high-gamma performance dropped by 3.4 percentage points per 100 days. In contrast, the time-domain local motor potential delivered exceptional stability as a standalone feature, achieving 93.8% overall accuracy for speech detection and 99.4% for hand-grasp detection, exhibiting little to no performance degradation over the entire tracking timeline.

Combining high-gamma features with lower-frequency bands provided a clear, persistent performance advantage. For speech detection, a multi-band model combining high-gamma and beta activity reduced the rate of performance loss to a negligible 0.5 percentage points per 100 days, yielding a high overall accuracy of 95.6% ± 0.06%. For hand-grasp detection, delta-band features alone showed a positive stability slope of +0.5 percentage points per 100 days. Furthermore, a triple-band model combining high-gamma, beta, and delta features achieved a mean overall accuracy of 98.2% ± 0.09% with completely flat long-term performance (0.0 percentage points per 100 days change). The performance gap between multi-band decoders and high-gamma-only decoders expanded dramatically over time; in the final 100 days of testing, multi-band models outperformed high-gamma models by 20.6 percentage points for speech detection and 10.2 percentage points for hand-grasp detection.

Despite these promising metrics, several practical constraints frame the findings. The evaluation was conducted with a single participant, limiting immediate statistical generalization across broader clinical demographics. The tasks examined were discrete detection problems—identifying the presence or absence of speech and hand-grasp actions—rather than high-dimensional continuous trajectory control or open-vocabulary speech synthesis. Additionally, progressive ALS involves ongoing changes in cortical tissue that may introduce unique background signal variations compared to static neurotrauma. Finally, while logistic regression models demonstrated high stability and low computational demand, the interaction between lower-frequency features and complex deep learning architectures remains an open area for longitudinal evaluation.

## Sources

- [Lower frequency ECoG features improve longitudinal stability of speech and hand-grasp detection in a patient with progressive ALS](https://europepmc.org/article/MED/43008331), Wallner J et al., Journal of neural engineering, 2026-11-10
- [Publisher record (DOI)](https://doi.org/10.1088/1741-2552/aec049)

## The R&D takeaway

For teams developing chronic invasive brain-computer interfaces, feature pipeline architectures should avoid sole reliance on high-gamma spectral bands. Integrating local motor potentials and lower-frequency spectral features like beta and delta rhythms dramatically reduces signal decay rates and hedges against electrode drift. Incorporating multi-band feature extraction into clinical device roadmaps minimises algorithm recalibration overhead, significantly reducing operational costs and improving user independence over multi-year implant lifetimes.

*The R&D Innovate desk*
