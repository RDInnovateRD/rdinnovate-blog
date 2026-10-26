---
title: "Wide superconducting microstrips resolve high photon counts by expanding timing signals"
date: 2026-10-27
excerpt: "Widening superconducting microstrips causes photon time-of-arrival peaks to separate rather than compress, enabling accurate photon counting up to eight photons."
category: "Physics & Space"
catslug: "physics-space"
source:
  kind: arxiv
  id: "arxiv:2610.32154"
  url: "https://arxiv.org/abs/2610.32154"
  title: "Photon-Number Discrimination from Increasing Time-of-Arrival Separation in Wide Superconducting Microstrip Single-Photon Detectors"
  venue: "arXiv preprint"
  published: "2026-10-23"
  authors: "Hsin-Yeh Wu et al."
  peer_reviewed: false
generated:
  provider: gemini
  model: "gemini-3.6-flash"
  at: "2026-10-26T16:43:03.700Z"
---

## The challenge of photon-number resolution

In optical quantum computing and photonic signal processing, measuring the exact number of photons contained within a pulse of light is a central operational requirement. Superconducting single-photon detectors are frequently used for this purpose due to their extreme sensitivity and temporal resolution. However, conventional superconducting nanowire single-photon detectors struggle when tasked with distinguishing higher photon numbers. In standard narrow nanowires, as the number of simultaneous photon absorption events increases, the temporal separation between the resulting output signals compresses. The timing shifts corresponding to consecutive photon counts squeeze closer together, causing the arrival-time signatures of multi-photon states to overlap and blur.

This signal compression creates a fundamental barrier for characterising multiphoton states. When photons arrive concurrently, the detector generates an electrical pulse whose exact timing—the time of arrival—depends on how many photons triggered the event. In narrow nanowire geometries, the margin of temporal difference between detecting seven photons versus eight photons becomes so small that system jitter and noise render the signals indistinguishable. Consequently, resolving high photon counts has traditionally required dividing incoming light across complex arrays of multiple separate detectors or relying on cascading spatial splitters, both of which introduce physical complexity, optical loss, and significant space constraints.

## How microstrip geometry alters timing mechanics

A potential solution to this timing compression lies in altering the physical dimensions of the superconducting channel itself. In a recent study detailed in an arXiv preprint that has not yet been peer reviewed, researchers evaluated superconducting microstrip single-photon detectors fabricated from niobium nitride. Unlike traditional single-photon nanowires, which feature narrow sub-micron widths, these microstrip devices were constructed with significantly wider channels measuring 3.2 micrometres and 6.4 micrometres across, each spanning a length of 10 micrometres.

When these wide niobium nitride microstrips are illuminated by short pulses of laser light at a wavelength of 515 nanometres, the underlying light absorption and signal generation dynamics differ markedly from those in narrow wires. In a conventional narrow nanowire, photon absorption creates a local resistive hotspot that quickly spans the entire width of the wire, diverting the supercurrent. In contrast, in a wider microstrip, the transverse dimension is much larger than the initial absorption spot. Signal formation instead relies on more complex vortex dynamics—where magnetic flux vortices enter and move across the strip—coupled with collective current redistribution across the wider superconducting channel.

Because photon absorption sites can vary across the width of the microstrip, and because multiple photons create interacting non-superconducting regions, the resulting current redistribution alters the time required for a measurable voltage signal to form. A phenomenological model based on absorption-site-dependent vortex processes and collective current redistribution accounts for these timing trends. Instead of timing shifts diminishing as photon counts increase, the widening geometry allows adjacent time-of-arrival signatures to remain distinctly separated relative to their temporal widths, reversing the compression trend seen in narrow detectors.

## High fidelity at elevated photon counts

To analyse the exact distribution of signal arrivals, the recorded time-of-arrival histograms were decomposed into sums of exponentially modified Gaussian components. Each component corresponds to a specific number of absorbed photons. In tests on the wider 6.4-micrometre device, distinct mathematical components were successfully resolved for photon numbers ranging up to eight simultaneous photons.

The timing properties revealed two distinct behaviours across the fitted components. The Gaussian-location parameter, which tracks the central time shift of the signal peak, continues to shift systematically between neighbouring photon numbers as the photon count increases. At the same time, the exponential-tail parameter of the fitted distribution decreases strongly with higher photon numbers, narrowing the trailing edge of the timing distribution.

Because the peak centres continue to shift while the signal tails contract, adjacent time-of-arrival peaks become more distinguishable relative to their width at higher photon counts. This effect was particularly pronounced at the upper limits of the tested range. For the components representing seven and eight photons, the separation between adjacent peak centres—normalised by the full width at half maximum—reached a value of 2.15. Based on the fitted exponentially modified Gaussian distributions, this separation yields an equal-prior pairwise time-of-arrival assignment fidelity of 99.6 percent. This demonstrates that wide microstrips can distinguish between high-order photon states with high accuracy.

## Laboratory scale and current constraints

While these findings demonstrate a clear physical mechanism for resolving multi-photon states, several critical limitations define the current stage of development. The presented results represent a preliminary preprint that has not yet undergone formal peer review. Furthermore, the experiments were conducted entirely in a controlled laboratory environment on isolated single devices with lengths of 10 micrometres under specific pulsed laser illumination at 515 nanometres.

The study establishes proof-of-principle photon-number discrimination, but it does not present a complete integrated sensor system. Real-world quantum optics and optical communications systems operate across diverse optical wavelengths, including infrared telecommunication bands, where absorption and vortex dynamics may behave differently. Additionally, the microstrips were evaluated under direct pulsed laser excitation rather than within fully integrated photonic circuits or complex quantum networks. Transitioning from single 10-micrometre test strips to scalable detector arrays will require addressing issues such as bias current stability, readout electronic bandwidth, and uniform fabrication quality across larger surface areas.

## Sources

- [Photon-Number Discrimination from Increasing Time-of-Arrival Separation in Wide Superconducting Microstrip Single-Photon Detectors](https://arxiv.org/abs/2610.32154), Hsin-Yeh Wu et al., arXiv preprint, not yet peer reviewed, 2026-10-23

## The R&D takeaway

For managers funding and planning quantum optics R&D, this work shows that modifying detector geometry provides a viable alternative to complex spatial multiplexing for photon-number resolution. Teams developing quantum information platforms should evaluate wide superconducting microstrips when designing architectures that require distinguishing high-order photon states from single input channels. Strategic plans should focus initial funding on testing these microstrip geometries at telecommunication wavelengths and integrating them with high-bandwidth readout electronics.

*The R&D Innovate desk*
