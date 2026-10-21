---
title: "Near-infrared probing shows optical cavities do not alter singlet fission in rubrene"
date: 2026-10-22
excerpt: "By eliminating cavity mode-filtering artefacts, transient absorption and spin measurements reveal that strong coupling leaves rubrene singlet fission kinetics completely unperturbed."
category: "Chemistry"
catslug: "chemistry"
source:
  kind: arxiv
  id: "arxiv:2610.26675"
  url: "https://arxiv.org/abs/2610.26675"
  title: "NIR-probe transient absorption on rubrene microcavities demonstrates no changes to singlet fission by strong coupling"
  venue: "arXiv preprint"
  published: "2026-10-19"
  authors: "Robert H. Gordon et al."
  peer_reviewed: false
generated:
  provider: gemini
  model: "gemini-3.8-flash"
  at: "2026-10-21T13:36:56.427Z"
---

## The promise and pitfalls of polaritonic control

Over the past decade, molecular polaritonics has attracted widespread interest on the premise that placing organic molecules between mirrors could rewrite their chemical reactivity. The core concept relies on strong light-matter coupling: when the transition dipole moment of a molecular ensemble exchanges energy with a confined optical cavity mode faster than either can dissipate energy to the environment, hybrid light-matter states, known as polaritons, are formed. In theory, forming these hybrid states alters the potential energy landscape of the molecules, potentially opening or suppressing specific photochemical pathways without requiring any synthetic modification of the chemical backbone.

Among the various photophysical processes investigated under this framework, singlet exciton fission has stood out as a prime target. Singlet fission is a spin-conserving process in which an organic chromophore absorbs a photon to create a singlet-excited state, which subsequently shares its excitation energy with an adjacent ground-state molecule to produce a pair of lower-energy triplet excitons. In photovoltaics and optoelectronics, singlet fission offers a potential path to exceed traditional efficiency limits by doubling the number of excited charge-carrier precursors produced per incident photon. Several published studies have suggested that coupling singlet-fission materials to optical cavities could accelerate the splitting rate, adjust branching yields, or control the spin states of the triplets. 

However, these reports have encountered significant scientific debate. Measuring photophysics within optical cavities frequently relies on ultrafast transient absorption spectroscopy, where an optical pump pulse triggers an electronic transition and a broadband probe pulse measures the resulting time-resolved changes in transmission or reflection. When such measurements are performed on molecules enclosed within reflective dielectric mirrors, the cavity itself acts as a resonant optical filter. The resulting data can easily become contaminated by cavity-induced optical artefacts, making pure optical mode filtering or interference mimic altered molecular kinetics. A study by Robert H. Gordon and colleagues, recently posted as an arXiv preprint and not yet peer reviewed, directly tackles this dispute by rigorously isolating intrinsic photophysics from cavity artefacts in rubrene microcavities.

## Bypassing cavity artefacts with near-infrared probing

To understand how cavity artefacts arise, one must examine the optical architecture of a microcavity. A typical planar microcavity consists of an active organic layer sandwiched between two dielectric mirrors, which are constructed from alternating layers of high and low refractive index materials. These mirrors exhibit a high-reflectance spectral window termed the stopband. Within this stopband, photons at resonant wavelengths bounce repeatedly between the mirrors, establishing standing electromagnetic waves that couple to the molecular excitons. 

When researchers interrogate these devices with transient absorption spectroscopy inside the stopband, any transient change in the refractive index of the molecular film modifies the resonance frequency, linewidth, and transmission of the cavity mirrors. As a consequence, probe light passing through or reflecting off the structure experiences spectral modulation that has nothing to do with a change in the internal rates of molecular transitions. These mode-filtering effects can create transient signals that look convincingly like accelerated exciton decay or novel intermediate states, leading researchers to conclude that strong coupling has altered the underlying chemistry.

To resolve this ambiguity, Gordon and colleagues designed an experimental strategy centred on eliminating mode-filtering artefacts entirely. Rather than probing within the visible wavelengths where the cavity mirrors are designed to reflect and confine light, they shifted their probe window to the near-infrared (NIR) region, well outside the cavity stopband. In this spectral window, the dielectric mirrors are largely transparent, allowing the probe pulse to sample the excited-state populations directly without being modulated by cavity resonances.

The authors applied this detection scheme to dielectric microcavities containing rubrene, a quintessential singlet-fission chromophore whose photophysical mechanism involves splitting a singlet exciton into two correlated triplet excitons. To test whether the extent of light-matter confinement or energy alignment plays a role, they investigated two contrasting cavity quality factors: a low-quality cavity with a Q factor of 90, and a high-quality cavity with a Q factor of 1150. Furthermore, they tuned the cavity resonances across a wide range of exciton-photon detunings, spanning from +20 meV to -110 meV, systematically altering the light-matter energetic landscape across both positively and negatively detuned regimes.

## Optical interference versus modified photophysics

The measurements revealed that the underlying kinetics of singlet fission in strongly coupled rubrene are virtually identical to those observed in uncoupled control films. Across both cavity quality factors (Q = 90 and Q = 1150) and across all tested detuning values, the rates of triplet formation and exciton decay showed no meaningful deviation from baseline molecular behaviour. Placing rubrene inside a resonant optical cavity did not alter the speed or yield of the singlet-fission process.

Although the kinetic decay profiles remained unchanged, the raw optical spectra inside the microcavity did show minor spectral changes. Rather than attributing these shifts to new photophysical states, the authors carried out transfer matrix simulations to model the linear optical response of the multilayer dielectric stacks. These electromagnetic simulations revealed that the minor spectral modifications were entirely caused by mirror interference—optical reflections and phase shifts between the dielectric layers—rather than modified molecular physics. 

To provide independent confirmation beyond optical measurements, the authors deployed transient electron paramagnetic resonance (EPR) spectroscopy. Because triplet excitons carry a net spin of one, transient EPR can monitor the spin state and population dynamics of high-spin triplets directly, without relying on optical transmission or reflection. The transient EPR measurements showed that the high-spin triplet dynamics in the strongly coupled microcavities remained completely unperturbed, matching the control films precisely.

These findings establish clear boundary conditions for the field of polaritonic chemistry, but their scope must be interpreted carefully. The study evaluates singlet exciton fission specifically in rubrene thin films within planar dielectric microcavities, bounded by quality factors up to 1150 and detuning values between +20 meV and -110 meV. It does not preclude the possibility that strong coupling might influence different molecular mechanisms, polaritonic systems with much higher coupling strengths, or distinct chemical reactions involving ground-state vibrational polaritons. What it does demonstrate, however, is that previously reported modifications to singlet fission in rubrene microcavities are likely the product of optical artefacts rather than genuine cavity-induced photochemistry.

## Sources

- [NIR-probe transient absorption on rubrene microcavities demonstrates no changes to singlet fission by strong coupling](https://arxiv.org/abs/2610.26675), Robert H. Gordon et al., arXiv preprint, not yet peer reviewed, 2026-10-19

## The R&D takeaway

For organisations funding or managing research programs in polaritonic chemistry and optical materials, this study serves as a clear warning against mistaking cavity interference for altered chemical kinetics. R&D leaders should insist that experimental roadmaps include rigorous artefact-free validation—such as probing outside the cavity stopband and using non-optical techniques like transient EPR—before committing capital to cavity-based reactivity concepts. Until molecular mechanisms are verified independently of optical mode filtering, investments in polaritonic materials for optoelectronic enhancement should be treated as speculative exploratory science rather than viable device engineering.

*The R&D Innovate desk*
