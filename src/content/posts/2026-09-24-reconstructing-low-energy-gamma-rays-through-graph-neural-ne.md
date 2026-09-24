---
title: "Reconstructing low-energy gamma rays through graph neural networks"
date: 2026-09-24
excerpt: "Graph neural networks outperform standard reconstruction algorithms in simulated sub-100 MeV gamma-ray tracking, targeting the long-standing MeV sensitivity gap."
category: "Physics & Space"
catslug: "physics-space"
source:
  kind: arxiv
  id: "arxiv:2609.26350"
  url: "https://arxiv.org/abs/2609.26350"
  title: "Testing deep learning techniques for event reconstruction in pair-production gamma-ray telescopes"
  venue: "arXiv; published in Proc. SPIE 14146, Space Telescopes and Instrumentation 2026: Ultraviolet to Gamma Ray, 141465G (2026)"
  published: "2026-09-22"
  authors: "Mattia Maniscalco et al."
  peer_reviewed: true
generated:
  provider: gemini
  model: "gemini-3.7-flash"
  at: "2026-09-24T03:56:03.223Z"
---

Astronomical observations in the medium-energy gamma-ray regime have long been constrained by a persistent physical bottleneck known as the MeV gap. Below 100 megaelectronvolts, incoming photons interact with tracking detectors primarily through electron-positron pair production. While high-energy gamma rays produce relatively straight, easily traceable ionization tracks as these daughter particles traverse detector layers, lower-energy photons yield particles that suffer heavily from multiple Coulomb scattering. As low-energy electrons and positrons collide with atomic nuclei inside the detector material, their paths deflect rapidly and unpredictably. 

This scattering severely degrades traditional trajectory reconstruction algorithms. Standard tracking methods rely heavily on clean, near-linear projections or smooth mathematical curve-fitting to trace tracks back to a common vertex and infer the arrival direction of the initial photon. When scattering dominates, these algorithms struggle to separate physical track points from noise and secondary deflections, causing angular resolution to deteriorate and detector sensitivity to plummet. Addressing this degradation requires a departure from rigid tracking routines toward models capable of capturing non-linear topological relationships directly from raw hit patterns.

## Representing particle tracks as relational graphs

The spatial output of modern silicon or semiconductor tracking detectors consists of discrete spatial coordinates, energy depositions, and timing signatures across multiple detector layers. Traditional computer vision architectures, such as standard convolutional neural networks, require data to be mapped onto uniform, rigid pixel or voxel grids. In particle physics and astrophysics detectors, however, events produce sparse, irregular point clouds where empty space vastly outweighs active sensor hits. Projecting these sparse hits onto high-dimensional regular grids introduces unnecessary computational overhead and can blur the fine spatial relationships between adjacent sensor activations.

Graph Neural Networks (GNNs) offer a natural representation for such event topologies. By treating individual energy deposits or detector hits as nodes and candidate physical trajectories between them as edges, graph representations preserve the exact geometric coordinates and local energy signatures without geometric binning artifacts. The network learns to evaluate the probability of edges representing true physical paths by aggregating information across neighbouring nodes and iteratively updating feature representations.

In a recent study published in the proceedings of SPIE Space Telescopes and Instrumentation, researchers evaluated deep learning approaches for track identification and reconstruction within the tracker of the proposed AMEGO-X mission concept. The study focused on two distinct graph neural network architectures: GraphSAGE (Sample and Aggregate) and Interaction Networks. GraphSAGE operates by sampling local neighbourhoods around a given node and aggregating their spatial and energetic features to learn uniform embedding functions. Interaction Networks, by contrast, explicitly model physical interactions between objects and relations, making them well-suited for reasoning about systems where relational dynamics govern particle trajectories.

## Simulation workflow and performance benchmarking

To evaluate these architectures under conditions matching experimental instrumentation, the investigation employed an end-to-end simulation and data preparation pipeline. Synthetic event datasets were generated using the MEGAlib framework, which builds upon the Geant4 particle physics simulation toolkit. This simulation modeled pair-production interactions within the specific geometry and material composition of the AMEGO-X tracker concept.

A dedicated, Python-based read-out and data handling processor converted the raw simulated interactions into formatted datasets structured to mirror physical detector telemetry as closely as possible. This step is critical for machine learning evaluation in experimental physics, ensuring that the input features provided to the neural networks reflect real-world detector constraints, such as spatial resolution limits, threshold cut-offs, and readout noise, rather than unphysical simulation ground truths.

The trained GraphSAGE and Interaction Network models were evaluated alongside standard event reconstruction techniques across two primary performance metrics: the Point Spread Function (PSF) 68 percent containment radius and the effective area. The 68 percent containment radius measures angular resolution by determining the angular radius around a true source direction within which 68 percent of reconstructed photon directions fall. The effective area reflects the overall detection efficiency of the instrument, balancing geometrical collection capability against event selection and reconstruction efficiencies.

The comparative analysis demonstrated that GNN-based reconstruction outperforms standard algorithmic methods in the critical soft energy range below 100 MeV. By learning the complex, non-linear topologies created by multiple Coulomb scattering, the graph models improved the recovery of initial particle trajectories, leading to enhanced angular resolution and better retention of valid pair-production events that standard pipelines typically misclassify or discard.

## Practical boundaries and deployment challenges

While the results indicate that graph-based architectures can resolve long-standing limitations in soft gamma-ray reconstruction, the approach operates within clear developmental boundaries. The current validation relies entirely on simulated detector responses within the AMEGO-X concept framework. Although the simulation pipeline incorporated realistic readout constraints via MEGAlib and custom data handlers, synthetic training data inevitably fails to capture every operational nuance of physical hardware, including complex cross-talk, temperature-dependent sensor drift, and unanticipated background radiation environments.

Furthermore, integrating deep learning algorithms into space mission architectures introduces severe computational and operational constraints. In-flight gamma-ray telescopes often require real-time or low-latency event processing to issue alerts for transient astrophysical phenomena, such as gamma-ray bursts. Graph neural networks, particularly relational architectures like Interaction Networks, demand substantial memory bandwidth and computational power during inference. Implementing these pipelines either on radiation-hardened spaceborne processors or within constrained ground-segment pipelines requires significant model compression, quantisation, and further architectural optimisation.

The study authors explicitly noted that substantial potential for further optimisation remains. Beyond baseline architecture comparisons, future work must establish how these networks handle edge cases, such as overlapping multi-particle events, high instrumental noise rates, and detector edge effects where particle tracks exit the active instrument volume before depositing their full energy.

## Sources

- [Testing deep learning techniques for event reconstruction in pair-production gamma-ray telescopes](https://arxiv.org/abs/2609.26350), Mattia Maniscalco et al., arXiv; published in Proc. SPIE 14146, Space Telescopes and Instrumentation 2026: Ultraviolet to Gamma Ray, 141465G (2026), 2026-09-22
- [Publisher record (DOI)](https://doi.org/10.1117/12.3104782)

## The R&D takeaway

For teams developing scientific instruments, these results highlight that overcoming physical sensor limitations increasingly depends on matching data representation models to the underlying physical processes rather than relying on legacy reconstruction algorithms. When designing processing pipelines for sparse, scattering-dominated detector data, engineering roadmaps should prioritise graph-based relational models over rigid grid architectures. Technical leaders should integrate high-fidelity readout emulation into their machine learning pipelines early to ensure that algorithmic gains translate reliably to operational hardware.

*The R&D Innovate desk*
