---
title: "Characterising analog quantum simulators without individual qubit control"
date: 2026-10-07
excerpt: "New theoretical protocols show that many-body Hamiltonians can be learned using only uniform or computational-basis operations, bypassing fine-grained quantum control."
category: "Quantum"
catslug: "quantum"
source:
  kind: arxiv
  id: "arxiv:2610.06709"
  url: "https://arxiv.org/abs/2610.06709"
  title: "Out-of-control Hamiltonian Learning"
  venue: "arXiv preprint"
  published: "2026-10-05"
  authors: "Weiyuan Gong et al."
  peer_reviewed: false
generated:
  provider: gemini
  model: "gemini-3.8-flash"
  at: "2026-10-06T19:20:38.639Z"
---

Verifying that a quantum device actually implements the physics it was designed to simulate usually relies on a demanding assumption: that the experimenter already has exquisite control over every individual qubit. In typical protocols for Hamiltonian learning—the process of deducing the underlying interaction strengths and fields of a many-body system by observing its time evolution—algorithms require fast, arbitrary single-qubit gates interleaved with dynamic evolution, alongside measurements executed across arbitrary bases. 

For digital quantum processors with universal gate sets, these requirements are standard, even if they remain noisy and expensive. But for near-term analog quantum simulators, such as neutral-atom arrays and trapped-ion platforms, this level of control is simply unavailable. Analog simulators achieve scale precisely by dispensing with complex, individualised gate sequences in favour of letting the natural physics of the array evolve as a collective whole. Demanding single-site manipulation and flexible basis rotations to calibrate or benchmark such systems creates a paradox: to verify an analog simulator, one would first need to turn it into a fully programmable digital computer.

In an arXiv preprint that has not yet been peer reviewed, Weiyuan Gong and colleagues demonstrate that this stringent control assumption is unnecessary. The authors introduce theoretical frameworks for "out-of-control" Hamiltonian learning, showing that complete interaction parameters can be reconstructed under minimal experimental access models that match the existing capabilities of analog hardware.

## The control bottleneck in quantum characterisation

To understand why Hamiltonian learning usually demands fine-grained control, consider the structure of many-body dynamics. When a collection of quantum particles interacts according to a Hamiltonian, quantum information scrambles rapidly across the system. Local coupling strengths between neighbouring particles become entangled in complex, non-linear ways with global time evolution. 

Standard characterisation schemes untangle these couplings by actively steering individual qubits. An experimenter might freeze certain interactions, flip a specific target qubit midway through evolution, or rotate the measurement basis of individual sites to isolate specific Pauli interaction terms. Without these active interventions, the output probabilities from measuring the system appear as complicated mixtures where the effect of one interaction term is masked by several others.

This requirement has left analog platforms in an awkward position. Neutral Rydberg atom arrays, for instance, can arrange hundreds of atoms in regular geometric patterns and let them interact through dipole-dipole or van der Waals interactions. Yet, performing high-fidelity, independent single-qubit rotations across hundreds of closely spaced optical tweezers during continuous time evolution is technically prohibitive. As a result, rigorous, provable Hamiltonian learning algorithms have remained largely incompatible with the very devices that most urgently need them.

## Reconstructing interactions from uniform operations

Gong and colleagues tackle this impasse by formulating two distinct minimal-access regimes, each reflecting different hardware limitations.

The first setting considers uniform state preparation and uniform measurement. In this architecture, an experimenter has no site-by-site addressability, but can manipulate all qubits collectively. At the beginning of each experimental cycle, every qubit in the system is rotated into the exact same initial state. The system then undergoes short-time evolution governed by its intrinsic Hamiltonian. Finally, every qubit is measured in the exact same basis.

The authors prove that for generic two-local Hamiltonians defined on any arbitrary interaction graph, these uniform operations are sufficient to reconstruct every parameter in the Hamiltonian. A two-local Hamiltonian includes all pairwise interactions between particles as well as local field terms, representing the vast majority of physical models investigated in condensed matter physics and quantum chemistry. 

The mechanism enabling this reconstruction relies on solving structured systems of polynomial equations over an extensive number of parameters. By examining how expectation values scale during short-time evolution from these uniformly prepared states, the mathematical relations between the unknown couplings yield a system of polynomial constraints. The authors show that despite the lack of individual addressing or heterogeneous basis choices, the resulting polynomial system possesses unique solutions for generic systems, allowing the full interaction network to be recovered.

## Learning Rydberg dynamics within the computational basis

While uniform global rotations are simpler than single-site control, some platforms face even stricter constraints. In certain neutral-atom and analog regimes, rotating out of the native computational basis is itself challenging or introduces severe fidelity penalties. Experiments are often effectively confined to preparing states in the computational basis (such as all atoms initialised in their atomic ground states) and measuring population occupancy directly in that same basis.

To address this, the authors investigate a second access model restricted entirely to computational-basis state preparation and measurement. Under such severe constraints, arbitrary Hamiltonians cannot be learned because purely diagonal preparations and measurements fail to register off-diagonal dynamical phases unless specific interaction symmetries are present.

However, the authors show that for nearest-neighbour Hamiltonians featuring only Pauli X and Pauli Z interactions—a specific class that captures contemporary Rydberg atom arrays—exact parameter reconstruction remains possible. Across both one-dimensional and two-dimensional rectangular lattices, all Hamiltonian parameters can be reconstructed from computational-basis experiments, up to unavoidable physical gauge symmetries. 

Here again, the technique hinges on formulating and solving structured polynomial systems across the full lattice. The dynamics generated by the competition between Pauli X driving terms and Pauli Z interactions produce measurable population shifts in the computational basis during short-time evolution. Even though the measurement apparatus only detects whether an atom is in state zero or state one, the non-commuting nature of the underlying Hamiltonian imprints the coupling constants into the observed probability distributions.

## What remains unproven

While these results provide valuable theoretical guarantees, several practical considerations must be kept in mind before treating the problem of analog characterisation as solved.

First, this work represents a theoretical and algorithmic proof of principle; it has not yet been demonstrated on physical quantum hardware. Translating these protocols to physical Rydberg arrays or trapped-ion systems will expose them to realistic noise sources, including optical decoherence, state preparation and measurement errors, and laser phase fluctuations, which are not modelled in the core recovery theorems.

Second, the computational overhead involved in solving structured polynomial systems over an extensive number of parameters requires careful scrutiny. In classical algebra, solving generic polynomial equations is computationally hard as the number of variables grows. Although the authors exploit the specific physical structure of two-local interactions and rectangular geometries to make these systems solvable, the classical computational scaling of the post-processing pipeline for systems containing hundreds of qubits remains an open question for engineering workflows.

Third, the guarantees for computational-basis learning apply specifically to nearest-neighbour Hamiltonians with Pauli X and Z interactions on regular lattices, rather than arbitrary interaction graphs or more general coupling types. Furthermore, the reconstruction in this setting operates only up to unavoidable gauge equivalences, meaning certain global phases or relative signs cannot be distinguished without additional physical assumptions or reference frames.

## Sources

- [Out-of-control Hamiltonian Learning](https://arxiv.org/abs/2610.06709), Weiyuan Gong et al., arXiv preprint, not yet peer reviewed, 2026-10-05

## The R&D takeaway

For teams designing and benchmarking analog quantum processors, this work demonstrates that verifying system Hamiltonians does not require investing in complex, single-site digital control hardware. Research leaders should evaluate whether their characterisation roadmaps can replace hardware-level control upgrades with classical polynomial post-processing on uniform or computational-basis datasets. When planning calibration routines for neutral-atom or ion architectures, R&D programmes should test these structured inversion protocols against experimental noise floors to determine their practical limits before committing resources to individual-qubit addressing optics.

*The R&D Innovate desk*
