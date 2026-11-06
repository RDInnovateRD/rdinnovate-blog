---
title: "Adding a third readout axis resolves ghost signals in gaseous radiation detectors"
date: 2026-11-07
excerpt: "A triaxial micro pixel chamber fabricated with through-glass vias eliminates multi-hit ambiguities while maintaining high gas gain and spatial separation performance."
category: "Physics & Space"
catslug: "physics-space"
source:
  kind: arxiv
  id: "arxiv:2611.07638"
  url: "https://arxiv.org/abs/2611.07638"
  title: "Triaxial $μ$-PIC for resolving Multi-Hit Ambiguity"
  venue: "arXiv preprint"
  published: "2026-11-05"
  authors: "A. Takada et al."
  peer_reviewed: false
generated:
  provider: gemini
  model: "gemini-3.6-flash"
  at: "2026-11-06T19:09:14.586Z"
---

## The challenge of ghost tracks in gaseous detectors

Gaseous radiation detectors operate by converting passing energetic particles or photons into free electron-ion pairs within a gas volume. Under a strong electric field, these primary electrons drift towards positive electrodes, multiplying rapidly through high-field avalanche collisions to generate a measurable electrical pulse. Micro-pattern gaseous detectors, including micro pixel chambers, refine this principle by micro-fabricating fine electrode structures that mimic arrays of miniature proportional counters. This approach yields exceptional spatial resolution and fast signal collection, making them valuable tools for high-energy physics, astrophysics, and industrial imaging.

However, scaling these micro-pattern detectors to large active areas creates a fundamental engineering bottleneck: reading out every individual pixel independently requires hundreds of thousands or even millions of separate electronic processing channels. To make the readout electronics tractable, conventional micro pixel chambers connect discrete pixel elements along two orthogonal axes, mapping the signal collection to a grid of strip electrodes. While this strategy drastically reduces circuit complexity, it introduces a physical limitation known as multi-hit ambiguity.

When multiple energetic particles pass through the gas volume simultaneously, or when a single particle traces a winding trajectory across the detector plane, the two-dimensional grid fails to uniquely pair signals from one axis with those from the other. The overlapping strip readouts register hit signals at intersection points where no particle actually passed, generating phantom or ghost tracks. At high particle event rates or during detailed trajectory reconstruction, this spatial ambiguity degrades data quality and complicates signal processing.

## Three-axis signal collection via through-glass vias

Addressing multi-hit ambiguity without resorting to an unscalable pixel-by-pixel readout architecture requires introducing additional spatial constraints directly into the physical detector structure. The study discussed here, which is a preprint that has not yet been peer reviewed, presents a structural solution: a triaxial micro pixel chamber that incorporates a third readout axis to break the geometric degeneracy of two-dimensional grid arrays.

To design the complex three-dimensional electric fields required for multi-axis signal collection, the researchers initially performed detailed numerical simulations using the Garfield++ simulation framework. These electrostatic and charge transport models guided the spatial arrangement of the internal electrodes, ensuring that single electron avalanches could be collected and partitioned predictably across three distinct sets of readout strips without distorting the local multiplication fields.

Translating this triaxial geometry from simulation into physical hardware required an advanced microfabrication approach. The team fabricated the device using through-glass-via technology. Through-glass vias allow tiny, conductive vertical channels to pass directly through a glass substrate, creating high-density electrical interconnections between layered electrode structures on opposite sides of the glass sheet. This structural manufacturing technique allows three independent electrode sets—an anode array and two non-parallel cathode arrays designated as the U-cathode and V-cathode—to coexist within a compact plane while maintaining isolation, precise alignment, and low electrical crosstalk.

During operation, an ionisation event in the detector gas creates an electron avalanche that deposits charge onto all three readout axes simultaneously. Because the avalanche charge is captured across the anode, the U-cathode, and the V-cathode, every physical hit generates three distinct geometric projections rather than two. The additional coordinate axis provides the mathematical redundancy needed to isolate genuine particle trajectories from false phantom intersections.

## Quantitative performance and charge sharing dynamics

Experimental evaluations of the fabricated triaxial micro pixel chamber confirmed that introducing the third readout axis does not compromise the core gain or energy resolution capabilities of the detector. The prototype achieved a high gas gain of 1.1 times 10 to the power of 4, demonstrating robust signal amplification suitable for particle detection and tracking. When exposed to 5.9 kiloelectronvolt radiation, the chamber delivered an energy resolution of 22 per cent full width at half maximum, proving that multi-axis charge extraction preserves accurate energy measurement.

A key physical finding of the experimental testing is the stability of charge division among the three electrode sets. The avalanche charge collected during an event splits across the electrode arrays in a remarkably consistent ratio: the charge ratio among the anode, the U-cathode, and the V-cathode remains virtually constant at 3:2:1. This predictable charge sharing confirms that single ionisation clusters interact uniformly with all three readout planes, providing a reliable foundation for pulse-height analysis and spatial reconstruction.

The primary objective of the triaxial layout—eliminating phantom hits—was verified through quantitative spatial testing. For two distinct charge clusters separated by a distance of more than 3 millimetres, the false-hit probability dropped to less than 0.78 per cent at a 95 per cent confidence level. This empirical spatial performance agreed closely with the theoretical predictions generated during the initial Garfield++ simulation phase.

Furthermore, the research demonstrated flexibility in operational control. By altering the electrical biasing configuration to an alternative operation mode, the detector achieved an enhanced gas gain of 3.2 times 10 to the power of 4. Crucially, this nearly threefold increase in amplification was accomplished without increasing the risk of destructive electrical discharges within the micro-gap gas volume.

## Operational boundaries and manufacturing realities

While the triaxial architecture successfully resolves the multi-hit ambiguity problem, several clear boundaries delineate the scope of these findings. The empirical verification of false-hit reduction focused on charge clusters separated by distances of more than 3 millimetres. The study does not establish the detector's resolving power for closely overlapping hits separated by less than 3 millimetres, where severe charge cloud blending may still challenge single-cluster identification.

Additionally, the reliance on through-glass-via substrate fabrication introduces distinct manufacturing and operational considerations. Although glass substrates provide exceptional mechanical flatness and electrical isolation, through-glass-via processing is more complex than standard printed circuit board methods widely used in conventional micro-pattern gaseous detectors. Issues such as substrate yield during via drilling, thermal mechanical stress, and long-term dielectric charge accumulation under intense radiation environments remain unaddressed in this initial prototype evaluation.

The reported performance metrics represent laboratory characterisation under controlled test conditions using a single detector prototype. The study does not demonstrate long-term continuous operation under high-luminosity particle beam conditions, nor does it address the systemic integration challenges of scaling through-glass-via triaxial panels up to large active areas required by major collider experiments or industrial scanners. The technology remains an early-stage hardware concept requiring further validation before reaching commercial deployment readiness.

## Sources

- [Triaxial $μ$-PIC for resolving Multi-Hit Ambiguity](https://arxiv.org/abs/2611.07638), A. Takada et al., arXiv preprint, not yet peer reviewed, 2026-11-05
- [Publisher record (DOI)](https://doi.org/10.1016/j.nima.2026.172204)

## The R&D takeaway

Integrating advanced microelectronics packaging methods, such as through-glass-via technology, directly into sensor geometries offers a practical strategy for overcoming fundamental hardware scaling limits. R&D leaders in instrumentation should recognise that solving signal processing challenges at the physical sensor layer can reduce downstream computational complexity and readout hardware overhead. Investing in rigorous device-level physics simulations prior to committing to complex substrate fabrication ensures strong alignment between modelled predictions and empirical performance.

*The R&D Innovate desk*
