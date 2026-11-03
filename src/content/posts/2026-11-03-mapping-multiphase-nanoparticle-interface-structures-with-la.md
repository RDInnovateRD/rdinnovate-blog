---
title: "Mapping multiphase nanoparticle interface structures with lattice energy models"
date: 2026-11-03
excerpt: "A computational framework combining density functional theory and Potts models predicts multiphase nanoparticle morphologies, discovering nine previously unclassified triphase structures."
category: "Materials"
catslug: "materials"
source:
  kind: arxiv
  id: "arxiv:2611.00575"
  url: "https://arxiv.org/abs/2611.00575"
  title: "Heterostructure morphology stability maps in multiphase nanoparticles"
  venue: "arXiv preprint"
  published: "2026-10-31"
  authors: "Elodie Sandraz, Chris Wolverton"
  peer_reviewed: false
generated:
  provider: gemini
  model: "gemini-3.6-flash"
  at: "2026-11-03T03:31:54.204Z"
---

## Mapping internal interfaces in multiphase nanomaterials

Nanoparticles containing multiple distinct chemical phases have become central to advanced materials research, offering tailored combinations of catalytic, optical, and electronic properties. The functional performance of these heterostructures depends heavily on their internal morphology—specifically, how the different phase domains join together at internal interfaces and how they present themselves to the surrounding medium.

With the development of high-throughput synthesis techniques capable of generating vast combinatorial libraries of nanoparticles, known as megalibraries, materials researchers can produce thousands of multi-component particle formulations in parallel. However, interpreting and predicting the resulting internal architectures remains a substantial challenge. Experimentally characterising the internal boundaries of thousands of sub-micrometre particles is labour-intensive, while modelling such complex structures from first principles requires accounting for competing surface and interfacial energy forces.

To address this challenge, researchers have proposed a unified computational strategy that constructs stability maps for multiphase nanoparticle geometries directly from calculated physical constants. The methodology, detailed in a manuscript released as a preprint that has not yet undergone peer review, systematically predicts ground-state interface architectures across two-phase and three-phase nanoparticle systems. By converting fundamental interface energetics into spatial configuration maps, the approach provides a predictive blueprint for identifying stable nanoparticle structures before committing synthesis resources.

## Combining density functional theory with Potts models

The physical shape of a multiphase nanoparticle in equilibrium is dictated by a fundamental thermodynamic trade-off between surface energy and interfacial energy. Minimising the surface energy favours configurations that reduce contact area with the surrounding medium, whereas minimising interfacial energy drives internal boundaries toward geometry combinations that lower the strain and bond mismatch between adjacent solid phases.

To simulate these competing energy contributions across arbitrary phase geometries, the researchers combined density functional theory calculations with a spatial lattice model known as a Potts model—a generalization of the classic Ising model used in statistical physics. In an Ising model, spatial sites are assigned one of two spin states to represent binary conditions. The Potts model expands this concept to $q$ possible discrete states.

In this framework, a system containing $q - 1$ distinct solid material phases uses $q - 1$ spin states to represent spatial regions occupied by each respective phase. An additional $q$-th spin state represents the surrounding medium or matrix. Interactions between adjacent lattice sites holding different material spin states correspond directly to the interfacial energies between those physical phases, as calculated by density functional theory. Meanwhile, interactions between a material spin state and the environmental spin state quantify the surface energy of that phase exposed to the outside environment.

Using this discretized lattice mapping, the authors applied a Monte Carlo optimization algorithm to explore spatial configurations and search for the lowest-energy arrangement. Rather than forcing the nanoparticle into predefined structural templates, such as core-shell or Janus geometries, the Monte Carlo search allows complex, unconstrained interface topologies to emerge naturally as the algorithm searches for global energy minima.

## Uncovering nine previously unclassified triphase structures

By sweeping through ranges of relative surface and interfacial energies, the modelling strategy generates comprehensive stability maps that define which internal morphology represents the thermodynamic ground state for any given combination of material properties.

For binary, two-phase nanoparticle systems, the computational grid search mapped the relationships between three fundamental biphase interface geometries. The resulting stability map clarifies how shifting the relative energy balance between the two phases alters the internal boundary arrangement. To validate the approach, the authors used the biphase stability map to predict nanoparticle morphologies for specific benchmark material combinations, demonstrating close agreement with available experimental structural data.

Extending the grid search algorithm to ternary, three-phase nanoparticle systems revealed a far richer geometric landscape. The calculations identified 11 distinct triphase nanoparticle interface morphologies. Crucially, nine of these identified triphase structural configurations had never been formally enumerated or classified in previous theoretical or experimental literature.

The researchers subsequently applied the triphase stability map to predict structural outcomes for sample three-phase material systems and re-examined previously reported experimental triphase nanoparticle structures. The expanded catalogue of stability regions provides a rational basis for interpreting complex multi-domain nanoparticles observed in laboratory synthesis, showing that non-intuitive phase arrangements can represent true thermodynamic ground states rather than non-equilibrium anomalies.

## Scope, assumptions, and practical boundaries

While the computational strategy marks a notable step forward for predictive nanocombinatorics, several important physical limitations frame its practical application. First, the framework operates strictly on equilibrium ground-state thermodynamics. It assumes that nanoparticles have sufficient mobility and time during formation to relax into their lowest-energy configuration. In many laboratory and industrial synthesis environments, kinetic factors such as rapid cooling, diffusion barriers, precursor supply rates, and surfactant capping agents play a dominant role, often trapping particles in metastable phase arrangements that differ from theoretical thermodynamic ground states.

Second, the reliability of the calculated stability maps depends directly on the accuracy of the underlying density functional theory inputs. Calculating precise surface and interfacial energies requires accurate modelling of crystallographic orientations, surface reconstructions, and interfacial strain, all of which can vary depending on temperature and chemical environment. Small errors or omissions in the fundamental energy inputs can shift calculated stability boundaries, potentially leading to incorrect morphology predictions for borderline cases.

Finally, while lattice-based Potts models excel at mapping global geometric trade-offs efficiently, their spatial discretization involves a trade-off between grid resolution and computational throughput. Very fine structural features, such as sub-nanometre boundary relaxation or localised compositional gradients across interfaces, require larger lattice representations that increase computational costs. As a result, transitioning these predictions into engineering rules for material manufacturing will require combining thermodynamic stability maps with real-time kinetic modelling.

## Sources

- [Heterostructure morphology stability maps in multiphase nanoparticles](https://arxiv.org/abs/2611.00575), Elodie Sandraz, Chris Wolverton, arXiv preprint, not yet peer reviewed, 2026-10-31

## The R&D takeaway

Integrating multi-phase stability mapping into early-stage materials discovery allows R&D managers to screen complex nanoparticle architectures computationally before initiating costly synthesis runs. By using fundamental interface energies to define accessible thermodynamic boundaries, planners can focus synthesis experiments on material combinations that are naturally prone to forming target morphologies. R&D leaders should embed thermodynamic morphology mapping into high-throughput discovery workflows while establishing complementary protocols to evaluate kinetic trapping during process scaling.

*The R&D Innovate desk*
