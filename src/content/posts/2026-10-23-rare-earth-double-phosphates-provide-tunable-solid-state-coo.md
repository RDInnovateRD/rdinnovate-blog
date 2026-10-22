---
title: "Rare-earth double phosphates provide tunable solid-state cooling below one hundred millikelvin"
date: 2026-10-23
excerpt: "Distorted triangular lattices of ytterbium and gadolinium decouple base temperature from hold duration in helium-free magnetic refrigeration."
category: "Materials"
catslug: "materials"
source:
  kind: arxiv
  id: "arxiv:2610.28038"
  url: "https://arxiv.org/abs/2610.28038"
  title: "Rare-earth tuning of magnetic entropy and interaction scales in K$_3$$Ln$(PO$_4$)$_2$ ($Ln$ = Yb, Gd) for adiabatic demagnetization refrigeration"
  venue: "arXiv; published in Physical Review B 114, 214419 (2026)"
  published: "2026-10-20"
  authors: "Yonglin Wang et al."
  peer_reviewed: true
generated:
  provider: gemini
  model: "gemini-3.8-flash"
  at: "2026-10-22T19:56:51.560Z"
---

Reaching temperatures below one kelvin is a prerequisite for operating solid-state quantum processors, sensitive astronomical bolometers, and low-noise cryogenic instrumentation. For decades, the workhorse technology for this temperature regime has been helium dilution refrigeration, which relies on the continuous phase separation of helium-3 and helium-4 isotopes. However, helium-3 is exceptionally scarce, expensive, and subject to volatile geopolitical supply chains. This vulnerability has revived interest in solid-state alternatives, predominantly adiabatic demagnetisation refrigeration. 

Adiabatic demagnetisation relies on the magnetocaloric effect: aligning the magnetic moments of paramagnetic ions under an external magnetic field expels magnetic entropy as heat, and then removing that field under thermally isolated conditions forces the magnetic subsystem to absorb thermal energy from the crystal lattice, plunging its temperature. The ultimate limit of this cooling process is set by internal magnetic interactions. If the magnetic moments spontaneously order into a ferromagnetic or antiferromagnetic ground state, the available magnetic entropy vanishes, halting the refrigeration cycle. Conventional paramagnetic salts, such as ferric ammonium alum, circumvent ordering by maintaining massive physical separation between magnetic ions with water molecules, but they suffer from poor chemical stability, low thermal conductivity, and a tendency to dehydrate under vacuum. Frustrated magnetic crystals offer a more durable route, yet finding materials where the trade-off between minimum achievable temperature and cooling endurance can be precisely controlled has remained difficult.

## Distorted triangles and suppressed magnetic order

To reconcile high chemical robustness with suppressed magnetic ordering, researchers have turned to dense rare-earth compounds arranged in geometrically frustrated geometries. In a study published in *Physical Review B*, Yonglin Wang and colleagues investigated the alkali rare-earth double phosphates K3Ln(PO4)2, focusing on variants incorporating either ytterbium (Ln = Yb) or gadolinium (Ln = Gd). 

These double phosphates crystallise in a monoclinic structure belonging to the P2_1/m space group. Within this crystal architecture, the magnetic rare-earth ions form distorted isosceles triangular networks. Geometric frustration occurs naturally on triangular arrangements: if neighbouring magnetic moments attempt to align anti-parallel to one another, a third moment cannot simultaneously satisfy anti-parallel alignment with both of its neighbours. The resulting competing interactions suppress long-range magnetic ordering to temperatures far below the scale of the individual exchange couplings.

Through magnetization and specific heat measurements, the authors confirmed that neither K3Yb(PO4)2 nor K3Gd(PO4)2 undergoes long-range magnetic ordering down to at least 0.1 kelvin. By suppressing parasitic ordering down to the sub-100 millikelvin regime, the double phosphate framework preserves the disorder in the spin system necessary to absorb heat during demagnetisation. Furthermore, unlike hydrated coordination compounds, these oxide-phosphate frameworks provide a chemically robust solid-state lattice that avoids degradation during thermal cycling or extended exposure to ultra-high vacuum.

## Contrasting extremes: 30 millikelvin versus extended hold times

While both compounds share an underlying crystal symmetry and an absence of ordering down to 0.1 kelvin, their performance in direct quasi-adiabatic demagnetisation refrigeration tests diverged sharply, demonstrating how specific rare-earth selections alter cooling dynamics. 

When demagnetised from an initial baseline of 2 kelvin under an applied magnetic field of 6 tesla, K3Yb(PO4)2 reached a minimum temperature of 29.8 millikelvin. Crystal-electric-field calculations revealed that the local coordination environment of the ytterbium ion splits its energy states, leaving an effective spin-1/2 ground-state doublet. This effective doublet possesses weak magnetic exchange interactions and a small effective magnetic moment, which delays the onset of internal dipolar interactions to extremely low temperatures. The weak internal interaction scale is what enables the material to continue absorbing entropy down to approximately 30 millikelvin.

In contrast, K3Gd(PO4)2 did not reach the same ultra-low base temperature, but it displayed extended hold times below 150 millikelvin. Gadolinium ions possess a half-filled electronic shell with seven unpaired electrons, yielding a much larger total angular momentum and an unquenched spin of 7/2. Consequently, each gadolinium ion possesses an eight-fold degenerate ground state, conferring an inherently larger reservoir of magnetic entropy per unit volume than the effective spin-1/2 doublet of ytterbium. Although the stronger magnetic dipolar interactions associated with the larger gadolinium moment place a higher floor on the absolute base temperature, the vast entropy reservoir allows K3Gd(PO4)2 to absorb substantial thermal loads and maintain operating conditions below 150 millikelvin for significantly longer intervals.

Thermodynamic analysis confirmed that these divergent behaviours arise predictably from the interplay between the total magnetic entropy capacity and the characteristic energy scales of the inter-ion interactions. By swapping the rare-earth ion within the identical structural lattice, the platform allows experimentalists to deliberately prioritise either extreme base temperature or prolonged thermal endurance.

## Engineering constraints and the solid-state cooling chain

Demonstrating sub-30 millikelvin cooling and prolonged 150 millikelvin hold times in milligram- or gram-scale characterisation rigs does not immediately translate to turnkey sub-kelvin cryostats. The reported findings represent core material validations rather than integrated refrigeration systems. 

Several technical hurdles separate these magnetic measurements from commercial deployment. First, adiabatic demagnetisation is an inherently single-shot or cyclical cooling process, unlike continuous dilution systems. Achieving uninterrupted cooling at 30 millikelvin requires multi-stage architectures with mechanical or superconducting heat switches, where one stage pre-cools while the other maintains temperature. The distinct behaviours of the ytterbium and gadolinium variants suggest they would function naturally as complementary layers within a cascaded refrigeration train—gadolinium handling high-entropy pre-cooling down to intermediate sub-kelvin stages, followed by an ytterbium stage driving down to 30 millikelvin.

Second, the study evaluates quasi-adiabatic demagnetisation on isolated samples. In practical applications, the bulk thermal conductivity of the phosphate crystals, the contact resistance across crystal-metal packaging boundaries, and the packing density of polycrystalline or sintered blocks determine how effectively the cooling power can be extracted to chill an external payload, such as a detector array or a quantum processor. Because insulating oxide phosphates typically exhibit modest thermal conductivity at millikelvin temperatures, formulating composite matrices or metallic bonding methods will be required before these compounds can replace liquid helium in operational instruments.

## Sources

- [Rare-earth tuning of magnetic entropy and interaction scales in K$_3$$Ln$(PO$_4$)$_2$ ($Ln$ = Yb, Gd) for adiabatic demagnetization refrigeration](https://arxiv.org/abs/2610.28038), Yonglin Wang et al., arXiv; published in Physical Review B 114, 214419 (2026), 2026-10-20
- [Publisher record (DOI)](https://doi.org/10.1103/gnh9-srtk)

## The R&D takeaway

For teams developing cryogenic platforms, these results show that geometric frustration within chemically durable host lattices can bypass the operational fragility of hydrated salts while avoiding reliance on helium-3. R&D leaders planning sub-kelvin infrastructure should evaluate modular, cascaded magnetic refrigeration architectures that deliberately pair high-entropy rare-earth ions for thermal buffer stages with weakly coupled ions for deep-millikelvin baseline stages. Future material development should concentrate on thermal packaging interfaces to verify that the theoretical entropy capacity of these double phosphates can be extracted across realistic device heat loads.

*The R&D Innovate desk*
