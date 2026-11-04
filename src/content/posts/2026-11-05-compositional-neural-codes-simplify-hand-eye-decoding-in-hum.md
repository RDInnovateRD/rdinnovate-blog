---
title: "Compositional neural codes simplify hand-eye decoding in human parietal cortex"
date: 2026-11-05
excerpt: "Posterior parietal cortex neurons encode hand and eye movements additively, allowing decoders trained on single movements to predict coordinated actions with minimal performance loss."
category: "Neuroscience"
catslug: "neuroscience"
source:
  kind: europepmc
  id: "pmid:42945213"
  url: "https://europepmc.org/article/MED/42945213"
  title: "The compositional encoding of hand-eye coordinated movements for single neurons in the posterior parietal cortex"
  venue: "Cell reports"
  published: "2026-10-26"
  authors: "Mynhier NA et al."
  peer_reviewed: true
generated:
  provider: gemini
  model: "gemini-3.6-flash"
  at: "2026-11-04T20:49:39.688Z"
---

## The calibration bottleneck in multi-effector neural interfaces

Developing high-performance brain-computer interfaces for complex motor control requires translating single-unit neural firing rates into precise spatial movements. When a human subject performs everyday tasks, such as reaching out to grasp an object, the brain coordinates multiple motor channels simultaneously. The eyes shift gaze to target the object, while the hand and arm calculate trajectory and posture. Historically, neural engineering strategies have operated under the implicit assumption that controlling multiple body parts simultaneously alters the underlying neural representations. If combining an eye movement with a hand reach creates an integrated, non-linear code within the motor processing hierarchy, decoders must be trained on exhaustive datasets containing every possible combination of eye gaze and hand position.

This combinatorial demand creates a severe calibration bottleneck for clinical applications. In practical settings, requiring a patient with severe motor impairment to perform hundreds of repetitive, multi-effector task trials to calibrate a multi-channel decoding algorithm induces significant cognitive and physical fatigue. If decoders trained on isolated hand reaches fail whenever the user simultaneously moves their eyes, real-world deployment of multi-limb neuroprosthetics becomes functionally unviable. Determining whether the brain encodes coordinated multi-effector movements as complex, inseparable signals or as modular, linearly additive components is critical for designing scalable neural decoders.

## Additive encoding across parietal and motor cortices

To clarify how the human brain organises multi-effector actions at the single-neuron level, researchers recorded action potentials from a human participant engaged in a coordinated hand-eye center-out task. In a standard center-out paradigm, a subject directs movements from a central resting location toward one of several peripheral targets arranged in a circle. In this experiment, the task evaluated motor control when the participant executed hand reaches and eye fixations either independently or in synchronised combination.

Neural activity was tracked across 11 experimental recording sessions, yielding a dataset of 412 single neurons across two distinct regions of the cerebral cortex: 251 single units in the motor cortex and 161 single units in the posterior parietal cortex. Comparing these two anatomical regions revealed a clear division in how motor control signals are formatted prior to movement execution.

Neurons recorded within the motor cortex demonstrated negligible functional modulation by eye movements. Hand-movement tuning curves in the motor cortex remained consistent regardless of whether the participant's eyes moved alongside the hand or remained stationary. This functional isolation indicates that motor cortex representations for reaching do not suffer from cross-talk or interference driven by visual gaze control, allowing hand-tracking decoders targeting motor cortex to operate without adjusting for eye position.

By contrast, 79 percent of the single neurons isolated in the posterior parietal cortex showed significant neural tuning to both hand reaches and eye movements. Rather than blending these inputs into complex, non-linear representations, the parietal neurons encoded hand and eye kinematics through additively separable tuning curves. The response of a single parietal neuron during a simultaneous hand reach and eye shift could be expressed as the linear sum of its independent hand-movement tuning curve and its independent eye-movement tuning curve. Because of this additive separability, the recorded population vectors could be mathematically separated into isolated single-effector components and then recomposed through simple addition while retaining their structural similarity to the original coordinated state.

## Modular decoding accuracy and practical limitations

The presence of additively separable tuning curves in the posterior parietal cortex suggests that machine learning decoders do not need to be calibrated on paired, coordinated movements. Instead, a compositional decoding architecture can be constructed by training modular algorithms exclusively on isolated single-effector tasks—such as hand reaching while holding visual gaze steady, or shifting gaze while keeping the hand at rest—and combining their weight matrices additively.

To validate this compositional approach, the researchers compared the performance of decoders trained strictly on single-effector trial data against baseline decoders trained directly on combined, coordinated hand-eye movements. When predicting hand targets, the compositional decoder achieved an accuracy of 66 percent, closely matching the 69 percent accuracy achieved by the decoder trained on fully coordinated task data. When predicting eye targets, the compositional decoder reached 34 percent accuracy, compared with 36 percent for the fully coordinated baseline decoder. Across both effectors, decoders built entirely from isolated single-movement training data performed within two to three percentage points of models trained on joint, multi-effector calibration datasets.

Despite these promising functional results, several technical constraints boundary the current operational scope of this decoding framework. First, the data were collected from a single human participant performing planar reaching movements across a limited set of discrete target directions. Real-world neuroprosthetic control involves continuous, three-dimensional movements within dynamic environments, where complex task demands or physical obstacles might elicit non-linear neural interactions not observed during simple laboratory tasks.

Second, the baseline decoding performance numbers—specifically 34 to 36 percent accuracy for eye target identification and 66 to 69 percent for hand target identification—reflect the signal limits of a relatively small ensemble of 161 parietal neurons recorded in a center-out task structure. Translating compositional decoding into commercially viable medical devices will require demonstrating that additive separability holds across larger patient cohorts, higher-density microelectrode arrays, and continuous non-planar movement tasks. Additionally, long-term operational stability must be verified across extended timeframes, where electrode degradation and neural plasticity alter single-unit tuning profiles.

## Sources

- [The compositional encoding of hand-eye coordinated movements for single neurons in the posterior parietal cortex](https://europepmc.org/article/MED/42945213), Mynhier NA et al., Cell reports, 2026-10-26
- [Publisher record (DOI)](https://doi.org/10.1016/j.celrep.2026.118204)

## The R&D takeaway

For strategy leaders and engineering heads planning brain-computer interface architectures, these findings demonstrate that multi-effector decoders can be built from modular, single-effector training blocks. By exploiting the additive separability of tuning curves in the posterior parietal cortex, software teams can design calibration protocols that train hand and eye tracking models independently, avoiding the combinatorial data collection bottleneck of joint-movement testing. This modular approach simplifies data architecture and significantly reduces participant calibration time in clinical neuroprosthetic development.

*The R&D Innovate desk*
