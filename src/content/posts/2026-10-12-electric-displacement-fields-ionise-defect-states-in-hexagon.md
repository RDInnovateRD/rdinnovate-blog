---
title: "Electric displacement fields ionise defect states in hexagonal boron nitride"
date: 2026-10-12
excerpt: "Long assumed to be an inert dielectric, high-quality hexagonal boron nitride transfers charge into encapsulated 2D materials when tuned with out-of-plane displacement fields."
category: "Materials"
catslug: "materials"
source:
  kind: arxiv
  id: "arxiv:2610.11297"
  url: "https://arxiv.org/abs/2610.11297"
  title: "Displacement-Field-Induced Ionization of Defect States in High-Quality hBN"
  venue: "arXiv preprint"
  published: "2026-10-08"
  authors: "Ilia Begichev et al."
  peer_reviewed: false
generated:
  provider: gemini
  model: "gemini-3.8-flash"
  at: "2026-10-11T18:39:21.583Z"
---

## The myth of the passive dielectric

In two-dimensional materials research, hexagonal boron nitride has spent more than a decade cast in the role of the ideal passive bystander. Whenever experimentalists assemble van der Waals heterostructures—stacking atomically thin conductors, semiconductors, or insulators into bespoke quantum devices—hexagonal boron nitride (hBN) is almost invariably chosen to encapsulate them. Because it possesses an atomically smooth surface, a wide electronic bandgap, and a crystal lattice free of dangling bonds, hBN isolates active monolayers from environmental contamination and substrate roughness. It has enabled delicate quantum transport and optoelectronic phenomena to survive at room temperature and cryogenic conditions alike.

Underpinning hundreds of published studies is an operational premise: when external electrostatic gate voltages establish an out-of-plane displacement field across a heterostructure, the insulating hBN spacers serve merely as inert dielectric media. Researchers routinely assume that the displacement field couples exclusively to the active two-dimensional channel, altering its internal band alignments or tuning its carrier density while leaving the dielectric host electronically undisturbed. 

That foundational assumption has now been called into question. In a preprint that has not yet been peer reviewed, Ilia Begichev and colleagues demonstrate that even high-quality hBN crystals are far from electronically inert. When subjected to moderate out-of-plane displacement fields, intrinsic defect states within the wide bandgap of hBN undergo field-induced ionisation, transferring substantial charge directly across the interface into the encapsulated material and altering the device's potential landscape.

## Turning graphene into an electrostatic sensor

The challenge in studying dielectric imperfections at the nanoscale is that deeply trapped charges within an insulator rarely reveal themselves through conventional optical or capacitance measurements. To uncover them, the authors turned the heterostructure architecture itself into an analytical probe, using a single sheet of monolayer graphene encapsulated between hBN crystals as a sensitive charge sensor.

Graphene's conical electronic band structure makes its electrical resistivity extraordinarily sensitive to minute variations in carrier concentration. In a standard dual-gated device, top and bottom metal gates allow experimentalists to vary two parameters independently: the net chemical potential of the channel and the perpendicular displacement field across the sandwich. By applying opposite voltages to the opposing gates, one can generate an out-of-plane displacement field without intentionally changing the electrostatic gate charge injected into the graphene. 

If the encapsulating hBN were completely inert, ramping this displacement field would alter the internal out-of-plane field distribution while leaving the baseline doping of the graphene unchanged, save for purely geometric capacitance effects. Instead, the transport measurements revealed a pronounced and unexpected charge transfer between the hBN crystals and the central graphene sheet. Even at a moderate displacement field of approximately 0.5 V nm^-1, the encapsulated graphene accumulated an additional electron doping of 10 to 20 x 10^9 cm^-2. Rather than originating from classical gate leakage through dielectric breakdown, this extra carrier population arose from the ionisation of localised defect states situated within the hBN bandgap.

## Systematic distortions in 2D heterostructures

Injecting tens of billions of excess electrons per square centimetre into an active device channel is a significant deviation in its own right, but the consequences do not stop at uniform doping offsets. The authors found that increasing the out-of-plane displacement field simultaneously intensified the spatial carrier-density inhomogeneity within the graphene layer.

When localised defect states within the insulating bulk of hBN ionise, they do not release their charge in a uniform sheet. Instead, each ionisation event creates a discrete, fixed charged centre inside the crystal. Because these ionised centres are situated only a few atomic layers away from the graphene sheet, their unscreened Coulomb potentials induce local spatial variations in the electrostatic potential, commonly referred to as charge puddles. In low-dimensional physics, this spatial disorder degrades carrier mobility and obscures subtle quantum states, from fractional quantum Hall plateaus to correlated insulating transitions in moiré superlattices.

From the observed magnitude of charge transfer and the onset of inhomogeneity, the authors deduced that the bulk density of these active defect states sits between 1 x 10^-5 and 7 x 10^-5 nm^-3. In conventional three-dimensional semiconductor engineering, such defect concentrations might seem modest. In van der Waals heterostructures, however, where device active regions comprise only single atomic planes, even a sparse distribution of charged defects exerts a disproportionate electrostatic influence. Crucially, the researchers noted that this bulk defect density was not uniform across all devices; it varied noticeably across different hBN crystals, introducing an unquantified source of sample-to-sample variability into devices fabricated from ostensibly identical materials.

## What the measurements leave open

These findings highlight an unrecognised source of systematic error in low-dimensional physics, but they also delineate clear boundaries regarding what the current evidence proves. 

First, the study registers the electrical consequences of defect ionisation through transport measurements, but it does not determine the crystallographic identity or chemical nature of the responsible defects. Hexagonal boron nitride can accommodate a wide variety of native structural flaws and impurities, including boron vacancies, nitrogen vacancies, carbon substitutions, oxygen inclusions, and divacancies. The data does not isolate which specific defect species undergoes ionisation under displacement fields near 0.5 V nm^-1, leaving materials growers without a specific target to eliminate during synthesis.

Second, the study establishes that defect density varies across individual flakes, but it does not offer a systematic comparison across different synthesis routes. Most high-quality hBN used in academic physics originates from specialised high-pressure, high-temperature synthesis or metal-flux growth techniques. Because the authors observe density variations spanning nearly an order of magnitude across flakes, experimentalists cannot simply assume that high optical clarity or flat surface morphology guarantees a low density of field-ionisable defects.

Third, while graphene served as the readout sensor in this demonstration, the broader impact on other encapsulated materials remains to be mapped. Different two-dimensional systems, such as transition metal dichalcogenides, magnetic monolayers, or complex multi-layer twisted structures, feature different dielectric constants, work functions, and band alignments relative to hBN. How readily defects ionise, and how effectively the adjacent 2D material screens the resulting charge disorder, will vary from system to system.

Finally, the study examines flakes prepared under pristine laboratory conditions for fundamental transport studies. Translating these findings into industrial 2D semiconductor integration will require understanding how scalable deposition methods, such as chemical vapour deposition, compare in terms of field-induced defect ionisation under industrial gate-dielectric stresses.

## Sources

- [Displacement-Field-Induced Ionization of Defect States in High-Quality hBN](https://arxiv.org/abs/2610.11297), Ilia Begichev et al., arXiv preprint, not yet peer reviewed, 2026-10-08

## The R&D takeaway

For research organisations developing two-dimensional electronics and quantum devices, these results demonstrate that hexagonal boron nitride cannot be treated as an inert electrostatic boundary when interpreting gate-dependent measurements. R&D leaders should immediately mandate that transport phenomena attributed to displacement-field-driven phase changes be cross-checked against dielectric charge transfer and potential roughening. Over the longer term, device development roadmaps must invest in rigorous defect metrology and purification protocols for synthetic dielectrics, rather than relying on uncharacterised crystal flakes as passive substrates.

*The R&D Innovate desk*
