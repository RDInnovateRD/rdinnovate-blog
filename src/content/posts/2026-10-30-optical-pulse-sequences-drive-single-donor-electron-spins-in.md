---
title: "Optical pulse sequences drive single donor electron spins in zinc selenide"
date: 2026-10-30
excerpt: "Coherent optical control of single donor electron spins in zinc selenide offers a potential route toward solid-state quantum networks combining bright optical transitions with low spin noise."
category: "Quantum"
catslug: "quantum"
source:
  kind: arxiv
  id: "arxiv:2610.36423"
  url: "https://arxiv.org/abs/2610.36423"
  title: "Coherent Optical Control of a Single Donor Electron Spin"
  venue: "arXiv preprint"
  published: "2026-10-27"
  authors: "Yuxi Jiang et al."
  peer_reviewed: false
generated:
  provider: gemini
  model: "gemini-3.6-flash"
  at: "2026-10-29T19:31:46.406Z"
---

Quantum networks require stable interfaces that convert quantum information stored in stationary matter qubits into flying photonic qubits. Solid-state electron spins are leading candidates for these network nodes, but finding a semiconductor host that simultaneously offers efficient optical coupling and long spin coherence has proven difficult. 

In semiconductor physics, materials belong to different chemical families with distinct crystal and electronic properties. Group IV elements, such as silicon, possess clean nuclear environments when isotopically purified, but they feature an indirect bandgap. In an indirect-bandgap material, an electron transitioning between energy bands requires a change in momentum mediated by lattice vibrations, making optical photon emission slow and weak. Group III-V materials, such as gallium arsenide, feature direct energy bandgaps with bright optical transitions. However, every naturally occurring isotope in typical III-V crystals possesses a non-zero nuclear spin, creating a dense, fluctuating magnetic background that rapidly destroys electron spin coherence.

Group II-VI semiconductors, such as zinc selenide, present a compelling alternative. They possess direct energy bandgaps that enable bright optical transitions while offering an element matrix that can be largely composed of nuclear-spin-free isotopes. Despite these theoretical advantages, achieving complete optical initialisation, coherent spin manipulation, and readout of an isolated individual donor electron spin in zinc selenide has long remained an unfulfilled experimental goal.

In a preprint that has not yet been peer reviewed, researchers have demonstrated optical initialisation, coherent pulse control, and spin readout of a single donor-bound electron spin in zinc selenide (ZnSe). By probing spin-selective donor-bound exciton transitions, the study establishes that fast, all-optical control of single donor qubits in II-VI materials is achievable.

## Initialising and manipulating donor spins with light

At the core of a semiconductor spin-photon interface is the light-matter coupling between localized electrons and optical fields. When a chlorine donor atom replaces an atom in the zinc selenide crystal lattice, it contributes an extra electron. Absorbing a photon can excite an additional electron-hole pair around this donor site, forming a bound state called a donor-bound exciton. Quantum selection rules govern these optical transitions: specific optical polarisations and photon energies interact exclusively with specific electron spin orientations.

The researchers use these spin-selective optical transitions to perform the fundamental actions required for quantum state operation. To initialise the qubit, a resonant optical pump drives the selective exciton transition until the electron falls into an uncoupled spin orientation, leaving the spin in a known starting state. This optical excitation process also provides a direct readout channel: by observing the emitted light or optical absorption over time, the experiment directly resolves the electron spin-relaxation dynamics, measuring how long the spin persists before environmental interactions induce thermal flipping.

To manipulate the spin state coherently without causing unwanted optical absorption, the system is exposed to off-resonant picosecond optical pulses. These ultrashort light pulses act as effective transient magnetic fields via an AC Stark shift, rotating the electron spin vector across the quantum state space. By tuning the pulse duration and intensity, the experiment shows clear spin Rabi oscillations—the continuous, coherent rotation between spin states driven by the optical pulse field. To verify phase coherence, two off-resonant optical pulses are applied in a Ramsey interference sequence, confirming that the isolated spin maintains its phase relationship during free evolution.

The experimental setup also explores multi-tone optical driving by illuminating two spin-selective optical transitions simultaneously. This creates coherent population trapping, a quantum interference effect in which the excitation pathways cancel each other out. As a result, the electron becomes trapped in a coherent dark state that cannot absorb light from either optical field. When the optical driving strength is increased, multiple distinct dark resonances appear in the optical spectrum. These split features reveal the magnetic hyperfine interaction between the single electron spin and the nuclear spin of the nearby chlorine nucleus, which carries a nuclear spin quantum number of three halves ($I = 3/2$).

## Physical limits and integration hurdles

While these measurements confirm that donor spins in zinc selenide can be controlled with optical pulses, significant physical and technical challenges must be overcome before this architecture can be applied in working quantum hardware.

First, the current demonstration is conducted on a single donor electron spin in a bulk crystal matrix. Demonstrating single-qubit control and dark-state formation is an essential initial validation, but it does not establish two-qubit entangling gates between adjacent donors or demonstrate the heralded optical entanglement of two distant donor sites.

Second, although zinc selenide can theoretically provide a nuclear-spin-free environment, the specific chlorine donor utilized in this experiment introduces a local nuclear spin ($I = 3/2$). While the resulting hyperfine splitting allows for detailed spectroscopy, unmitigated coupling to a nuclear spin can introduce local magnetic noise and shorten the electron qubit's phase coherence time unless active dynamical decoupling or nuclear spin orientation protocols are implemented.

Third, practical quantum communication requires high-efficiency photon collection. In a bulk semiconductor, most emitted photons are trapped by internal reflection due to the material's high refractive index. To create scalable quantum network nodes, these zinc selenide donors must be integrated into microphotonic cavities or photonic crystal waveguides to funnel emitted light into single-mode optical fibres. Integrating donors into microfabricated structures often introduces surface states and electrical noise that can broaden optical linewidths and degrade spin-photon coupling efficiency.

Finally, the results originate from an early-stage laboratory setup and are described in a preprint that has not yet been peer reviewed. Broader fabrication trials are necessary to verify whether donor impurities can be positioned deterministically with stable optical linewidths across reproducible semiconductor chips.

## Sources

- [Coherent Optical Control of a Single Donor Electron Spin](https://arxiv.org/abs/2610.36423), Yuxi Jiang et al., arXiv preprint, not yet peer reviewed, 2026-10-27

## The R&D takeaway

For teams funding and planning quantum hardware architectures, this work identifies II-VI semiconductors like zinc selenide as viable platforms for optically controlled spin qubits. Research investments should focus on advanced fabrication techniques for deterministic donor placement and microcavity integration to improve photon collection efficiency. Long-term project planning must address local nuclear spin dynamics and establish pathways to scale from isolated single-spin rotation to multi-qubit entangling protocols.

*The R&D Innovate desk*
