---
title: "Protecting fusion vessel walls over twenty minutes of continuous plasma"
date: 2026-10-15
excerpt: "A multi-tier monitoring system combining physics models and machine learning protected WEST tokamak walls across thirteen hours of plasma, contributing to a 1,337-second record run."
category: "Energy"
catslug: "energy"
source:
  kind: arxiv
  id: "arxiv:2610.11871"
  url: "https://arxiv.org/abs/2610.11871"
  title: "WEST advanced wall protection achievements toward long pulse operation"
  venue: "arXiv; published in Nuclear Fusion, 2026, 66 (12), pp.126042"
  published: "2026-10-08"
  authors: "R. Mitteau et al."
  peer_reviewed: true
generated:
  provider: gemini
  model: "gemini-3.8-flash"
  at: "2026-10-15T07:11:44.756Z"
---

## The steady-state heat bottleneck in magnetic fusion

Confining a burning plasma for practical energy generation is less a problem of ignition than of heat exhaust. When magnetic fields trap a high-temperature plasma inside a tokamak, charged particles and intense radiation inevitably spill across the magnetic boundary layer into the surrounding vessel. In short pulsed experiments lasting only a few seconds, the thermal inertia of solid armour tiles is often sufficient to absorb this diverted exhaust without failing. But as experimental devices push toward long-pulse and steady-state regimes, heat accumulation transforms from a transient thermal surge into a continuous, unforgiving flux. If local power deposition is not strictly managed, the divertor and plasma-facing components develop concentrated hot spots. Left unchecked, these thermal concentrations risk melting materials, releasing impurities that poison the core plasma, and inflicting damage severe enough to shut down an operational campaign.

The engineering challenge lies in the sheer velocity and complexity of wall interactions. Plasma exhaust does not distribute itself uniformly across the chamber interior. Localised turbulence, magnetic field irregularities, and shifting plasma geometries cause heat loads to focus unevenly onto distinct components. Preventing component degradation requires continuous, accurate knowledge of surface temperatures and thermal energy distribution, coupled with the ability to alter plasma heating before a localised hot spot crosses into an irreversible damage threshold. In long-duration discharges, human operators cannot intervene fast enough. The machine protection architecture must assess thermal loads autonomously, balancing physical models of heat transfer against complex observational data in real time.

## Combining deterministic physics with machine learning

To address this monitoring challenge during extended discharges, researchers on the WEST tokamak deployed a structured protection framework covering ten major plasma-facing components. These critical regions were evaluated through ten dedicated series of temperature and power indicators, drawing data from an array of diagnostic instruments. Among these diagnostic tools, an infrared viewing system served as the primary instrument, providing direct optical thermography of the surfaces exposed to plasma exhaust.

Translating raw optical and sensor measurements into actionable operational decisions is rarely straightforward in an active fusion environment. Emissivity changes, reflected radiation, and sensor noise complicate direct surface temperature extraction. To manage this uncertainty, the monitoring strategy relies on a tiered computational approach. At the base layer, deterministic models calculate surface temperatures, heat power fluxes, and accumulated thermal energies using classical formulations of thermal conduction and energy balance. These physics-based indicators offer transparent, predictable benchmarks for the thermal condition of the machine.

Alongside these deterministic models, the system incorporates advanced analytical processes driven by artificial intelligence and machine learning. Where classical heat transfer equations become computationally heavy or struggle with anomalous sensor patterns, machine-learned routines process incoming data streams to detect signatures of elevated thermal stress. Rather than relying on a single analytical methodology, the indicators combine deterministic baselines with data-driven evaluation to maintain continuous oversight across all ten monitored component groups.

## Real-time actuation and post-discharge forensics

Detecting an emerging hot spot is only useful if the facility can react before component limits are breached. The monitoring architecture implemented on WEST divides protection into two operating timescales: millisecond-scale closed-loop control during the pulse, and post-discharge forensic evaluation between experimental runs.

During an active discharge, select advanced indicators operate in real time. These algorithms feed thermal status metrics directly into the central plasma control system. When thermal loads or localised temperatures approach hazardous boundaries, the control system adjusts input power actuators, actively modifying heating parameters to steer the discharge back within a safe operating domain. By dynamically modulating heating power before critical limits are exceeded, the facility avoids abrupt terminations—which themselves impose severe electromagnetic and thermal stresses on the vacuum vessel—while maintaining stable plasma confinement.

Complementing this immediate feedback loop is a second layer of forensic analysis executed after the discharge concludes. Between plasma pulses, offline advanced processes comb through the diagnostic records to identify latent power loading risks that developed during the run. Even when an active discharge finishes without an automatic trip, uneven power distributions can reveal underlying vulnerabilities in the wall components or plasma positioning. By pinpointing these localised thermal stresses during post-shot analysis, operators can adjust the broader discharge run plan for subsequent experiments, preventing cumulative thermal fatigue from escalating into severe wall damage over the course of an experimental campaign.

## Operational endurance and the 1,337-second record

The operational effectiveness of this integrated wall protection system was tested during experimental campaigns C9 through C11 on WEST, conducted across 2024 and 2025. Over this operational period, the tokamak accumulated approximately thirteen hours of active plasma runtime. Throughout these campaigns, the monitoring and protection framework prevented any critical wall power events that would have forced changes to the planned experimental schedule. Avoiding forced downtime across tens of hours of plasma operation represents an essential engineering milestone for steady-state fusion concepts.

This protection infrastructure supported a notable operational milestone: achieving a plasma duration record of 1,337 seconds, or more than twenty-two minutes of continuous operation. Demonstrating that plasma-facing components can endure such extended runtimes without destructive localised overheating validates the general operational philosophy.

Nevertheless, establishing direct scientific causality requires caution. The authors explicitly point out that it cannot be formally demonstrated that active and intelligent wall protection was the sole enabling factor behind the 1,337-second record discharge. A prolonged tokamak discharge depends on a complex interplay of magnetic equilibrium control, particle fuelling, impurity control, and heating efficiency. What can be stated with confidence is that the protection suite as a whole plausibly contributed to achieving these record durations by reliably preventing wall hot spots from maturing into critical, pulse-terminating failures.

Furthermore, while thirteen hours of total plasma exposure provides valuable validation for experimental research reactors, commercial magnetic fusion power plants will need to operate uninterrupted for months or years under far higher neutron fluxes and steady-state thermal loads. Adapting diagnostic systems such as infrared cameras and machine-learned surrogate models to the harsh radiation fields of a commercial burning-plasma plant remains an unresolved engineering frontier.

## Sources

- [WEST advanced wall protection achievements toward long pulse operation](https://arxiv.org/abs/2610.11871), R. Mitteau et al., arXiv; published in Nuclear Fusion, 2026, 66 (12), pp.126042, 2026-10-08

## The R&D takeaway

For teams developing steady-state fusion and high-heat-flux industrial systems, this work demonstrates that component protection cannot rely solely on passive thermal margins or human intervention. Long-pulse viability requires integrating deterministic physical boundaries with real-time machine-learned diagnostics that directly throttle power actuators before damage occurs. R&D leaders should prioritise dual-timescale protection architectures that pair immediate closed-loop intervention with post-cycle forensic analytics to safeguard expensive capital equipment without unnecessarily halting operations.

*The R&D Innovate desk*
