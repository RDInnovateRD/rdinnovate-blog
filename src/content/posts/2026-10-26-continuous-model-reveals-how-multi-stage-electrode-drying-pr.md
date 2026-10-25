---
title: "Continuous model reveals how multi-stage electrode drying prevents binder migration"
date: 2026-10-26
excerpt: "A unified transport model tracks binder convection through both consolidation and pore emptying, unlocking faster battery electrode drying without sacrificing foil adhesion."
category: "Energy"
catslug: "energy"
source:
  kind: arxiv
  id: "arxiv:2610.29286"
  url: "https://arxiv.org/abs/2610.29286"
  title: "Binder migration across film consolidation and pore emptying in electrode drying: a continuous model validated against drying-rate, thickness, and schedule experiments"
  venue: "arXiv preprint"
  published: "2026-10-21"
  authors: "Younghwan Joo, Sanghyun Oh, Sung-il Kim"
  peer_reviewed: false
generated:
  provider: gemini
  model: "gemini-3.6-flash"
  at: "2026-10-25T14:14:11.280Z"
---

## The mechanics of binder migration in battery drying

In the high-volume production of lithium-ion battery electrodes, drying wet-cast slurries represents one of the most energy-intensive and rate-limiting processing steps. Manufacturers blend active electrode materials, conductive carbon additives, and polymeric binders into a liquid solvent, coat the slurry onto metallic current collector foils, and pass the wet substrate through thermal drying ovens. Accelerating solvent evaporation is a primary objective for reducing manufacturing energy consumption and increasing production line speeds. However, rapid evaporation creates a fundamental physical challenge: as solvent rapidly leaves the upper surface of the wet film, liquid moving upward from the deeper layers carries dissolved binder molecules along with it.

This upward binder convection redistributes the polymer unevenly across the thickness of the film. Over time, binder accumulates near the upper surface while depleting at the lower interface adjacent to the metallic current collector. Depleting the binder at this critical interface weakens mechanical adhesion between the porous electrode material and the collector foil. In severe cases, poor adhesion leads to electrode delamination, mechanical failure during subsequent calendering and cell assembly, or early capacity degradation during battery operation.

Attempts to plan and optimise electrode drying schedules using physical transport models have historically encountered a major conceptual gap. Electrode drying progresses through two distinct physical stages: an initial film consolidation phase, during which the total thickness of the liquid film shrinks, followed by a pore-emptying phase, during which solvent evaporates from within the rigid porous network formed by the consolidated particles. Previous mathematical models focused almost exclusively on binder transport during the consolidation phase, stopping all calculations as soon as film shrinkage ended. Conversely, models designed for the pore-emptying phase either omitted binder transport entirely or relied on arbitrary, assumed starting binder distributions. Because neither approach connected the transition between consolidation and pore emptying, engineers lacked a continuous mathematical simulation capable of tracking binder redistribution under dynamic, multi-stage drying schedules.

## Unifying transport physics across consolidation and pore emptying

To address this limitation, a recent study—released as a preprint that has not yet been peer reviewed—presents a continuous mathematical simulation of dissolved binder transport across both film consolidation and pore emptying. Rather than treating the drying sequence as two disconnected physical regimes, the framework models dissolved binder convection as a continuous process driven directly by time-dependent drying rates from slurry deposition to final drying.

The continuous framework resolves two core physical transport questions that traditional governing equations left open: where the liquid within the consolidating film carries the dissolved binder during initial film shrinkage, and at what exact point binder movement freezes during pore emptying. By integrating effective physical descriptions for these two boundary conditions, the simulation tracks binder transport seamlessly through both drying phases using a single, unified set of physical parameters.

A central strength of this continuous approach is its ability to model dynamic drying schedules where evaporation rates change over time. Industrial coating lines rarely run at a single constant drying rate; instead, oven zones are stepped to apply different heating and airflow profiles at different points along the coater. By establishing an unbroken transport model across both drying regimes, the framework allows researchers to evaluate how switching drying rates mid-process impacts final binder distributions and interface adhesion.

## Validation across drying rates, film thickness and schedules

The continuous simulation was validated against three distinct sets of published experimental measurements without adjusting its baseline parameter set. First, the model reproduced empirical data showing how the ratio of surface-to-interface binder concentration changes across a 5.6-fold range of drying rates, as well as the surface and interface binder concentrations observed in heavy-build films up to six times thicker than standard coatings. Second, the model matched experimental depth profiles showing binder concentrations through the interior thickness of dried electrode films. Third, the simulation captured how interface binder levels respond when the drying rate is adjusted mid-process.

When applied without further adjustment to a published three-stage drying schedule, the model provided clear physical insights into schedule optimisation. The simulation demonstrated that lowering the evaporation rate early in the process—during film consolidation—suppresses upward binder convection and completely restores binder concentrations at the current collector interface. Furthermore, the model revealed that once the film enters the pore-emptying stage and reaches the threshold where binder movement ceases, the drying rate can be increased significantly without causing any additional binder redistribution.

This finding demonstrates that rapid drying does not need to be avoided throughout the entire oven length to preserve adhesion. Instead, high drying rates can be applied during the final pore-emptying stage after binder mobility has stopped. The simulation confirmed that an optimised three-stage schedule achieves both a reduced total drying time and full binder concentration recovery at the current collector interface.

Despite these capabilities, practical implementation requires consideration of model boundaries. The simulation relies on effective physical descriptions for binder transport cut-offs that must be calibrated for specific slurry compositions and polymer-solvent systems. Additionally, while the model describes microscopic transport across film thickness, translating these predictions into operational factory settings requires coupling the transport model with coater-scale equipment models that capture broader thermal and fluid dynamics.

## Sources

- [Binder migration across film consolidation and pore emptying in electrode drying: a continuous model validated against drying-rate, thickness, and schedule experiments](https://arxiv.org/abs/2610.29286), Younghwan Joo, Sanghyun Oh, Sung-il Kim, arXiv preprint, not yet peer reviewed, 2026-10-21

## The R&D takeaway

For decision-makers funding and planning battery manufacturing R&D, this continuous transport framework provides a methodology to increase drying throughput while maintaining electrode structural integrity. By demonstrating that binder transport ceases prior to complete solvent removal, the model enables technical teams to design multi-stage drying profiles that apply high heat flux precisely when binder migration can no longer occur. Combining this microscopic transport model with coater-scale process simulations will allow organisations to systematically identify production parameters that maximise energy efficiency and electrode quality.

*The R&D Innovate desk*
