---
layout: post
title: "Growing a superconductor underneath a graphene lid"
date: 2026-08-17
excerpt: "Monolayer niobium diselenide has been a laboratory curiosity because it oxidises within seconds of meeting air. Growing it under a graphene cap changes what can be built with it."
category: "Quantum"
catslug: "quantum"
---

There is a class of materials that behaves beautifully in a glovebox and is useless everywhere else. Monolayer niobium diselenide is the textbook case. A single plane of niobium atoms sandwiched between two planes of selenium, roughly three quarters of a nanometre thick, it superconducts, it hosts a charge density wave, and it does interesting things with spin that thicker samples do not. It also begins to oxidise essentially the moment it meets room air. Peel a flake off a bulk crystal with adhesive tape, carry it across the bench, and what arrives at the measurement stage is a layer of niobium oxide with some superconductor possibly still underneath.

The workaround the field has used for a decade is to do everything inside an argon-filled glovebox: exfoliate, stack, cap with hexagonal boron nitride, then transfer out. It works, and it has produced good physics. What it has not produced is anything you could call a manufacturable process. Exfoliated flakes are tens of micrometres across, arrive in random thicknesses, and land in random places. You cannot lithographically pattern a circuit onto a substrate when the active material is a scatter of confetti whose positions you learn only after the fact.

A group spanning MIT, MIT Lincoln Laboratory, Rice, Yale and Pohang University has published a route around this in *Nature*. The trick is an inversion of the usual order of operations, and it is simple enough to describe in one sentence: put the protective layer down first, and grow the superconductor underneath it.

## Growing in a gap less than a nanometre wide

Conventional practice is grow-then-cap. You synthesise the film, then rush to deposit something protective on top before the surface reacts. The failure mode is obvious in hindsight — the film is exposed during the interval between those two steps, and for a material that oxidises in seconds, no interval is short enough. Worse, large-area growth takes longer than small-area growth, so the problem gets harder exactly as you scale up. That is a large part of why attempts to grow wafer-scale monolayer NbSe2 have historically returned patchy, partly oxidised films.

The new approach, which the authors call encapsulation epitaxy, starts by transferring graphene onto a silicon dioxide substrate. Graphene lies close to an oxide surface but not perfectly flat against it; the gap is under a nanometre, which is enough room for a single layer of atoms and not much else. Precursor species introduced during growth diffuse into that gap and crystallise there. The graphene above does two jobs at once. It acts as a template that sets the crystallographic orientation of the layer forming beneath it, which is what makes the growth epitaxial rather than a random polycrystalline mess. And it acts as the cap, from the first instant of nucleation rather than from some point after growth ends. The material is never exposed, because there is no moment at which it exists without a lid.

The geometric constraint does useful work too. A gap that admits one atomic layer cannot admit two, so thickness uniformity comes from the confinement itself rather than from precise control of growth time. That is a much more forgiving way to hit a monolayer target.

The result is continuous monolayer NbSe2 films more than an inch across that can be taken out into ambient air, carried to a different tool, and patterned with ordinary lithography. The authors report the method also works with hexagonal boron nitride as the encapsulant and with substrates other than silicon dioxide, which suggests it is a general interface phenomenon rather than a coincidence specific to one material pairing.

## The numbers, and what they do not say

The graphene/NbSe2 heterostructures superconduct at about 1 kelvin. The charge density wave transition sits near 177 kelvin, notably higher than in bulk crystals, which is consistent with what dimensional confinement is expected to do to that particular instability. The measured kinetic inductance is around 0.7 nanohenries per square.

That last number is the one with the clearest engineering consequence, and it deserves unpacking. In a superconductor, current is carried by paired electrons that still have mass, so accelerating them takes energy — the material resists changes in current even with zero resistance. That effect is kinetic inductance, and in a very thin film it becomes large. Conventional thin-film niobium or aluminium resonators sit in the range of a few to a few tens of picohenries per square. At roughly 700 picohenries per square, this film is one to two orders of magnitude higher. High kinetic inductance is not a defect to be engineered around; it is actively wanted for compact microwave resonators, for the large-inductance elements that fluxonium-style qubits need, and for kinetic inductance detectors used in millimetre-wave astronomy. Getting it from a material you can grow across a wafer and pattern in air is the point.

Now the honest accounting. A transition temperature of about 1 kelvin is low. Exfoliated monolayer NbSe2 is usually quoted nearer 3 kelvin, and bulk crystals around 7 kelvin. Sitting in contact with graphene appears to cost something, plausibly through proximity effects or charge transfer at the interface, and 1 kelvin means dilution refrigerator territory with less thermal headroom than a niobium circuit would give you. That is workable for quantum hardware, which lives at those temperatures anyway, but it removes any prospect of simpler cryogenics.

An inch is also not 300 millimetres. It is a real advance over 30-micrometre flakes and it is nowhere near a semiconductor fab's definition of wafer scale. Nothing published establishes defect density, run-to-run reproducibility, or yield across that inch at the standard a process needs before anyone builds a device with a thousand elements on it.

The integration problem is not solved either. A one-nanometre film has to be contacted by electrodes hundreds of nanometres thick, and that step height is where 2D device fabrication usually loses its samples. The paper addresses it, but contact resistance and mechanical reliability at that junction are exactly the sort of thing that looks fine in a demonstration and becomes the dominant failure mode at scale.

Finally, and most importantly for the stated application: this is a materials and growth result, not a qubit result. Superconducting quantum circuits live or die on microwave loss, and the figure of merit is resonator quality factor in the millions, measured at single-photon power. A new material earns its place in that stack only by clearing that bar, and clearing it consistently. Encapsulation epitaxy makes the experiment possible. It does not tell you the answer.

## Sources

- [Encapsulation epitaxy of air-stable 2D superconductors for quantum circuits, Nature, 5 August 2026](https://www.nature.com/articles/s41586-026-10865-1)
- [Researchers make air-stable, ultrathin superconductors, for more scalable quantum devices, MIT News](https://news.mit.edu/2026/researchers-make-air-stable-ultrathin-superconductors-more-scalable-quantum-devices-0805)
- [Researchers use graphene encapsulation to grow air-stable 2D superconductors, Graphene-Info](https://www.graphene-info.com/researchers-use-graphene-encapsulation-grow-air-stable-2d-superconductors)
- [High-quality monolayer superconductor NbSe2 grown by chemical vapour deposition, Nature Communications, 2017](https://www.nature.com/articles/s41467-017-00427-5)

## The R&D takeaway

The valuable asset here is the process concept, not the specific compound. Reordering growth and protection so that the cap is present before nucleation is a generic fix for any air-sensitive 2D material, and a portfolio that holds it can apply it repeatedly. The right near-term milestone to fund is not a bigger film but a single-photon-power resonator measurement — that is the cheapest experiment that would tell you whether this material belongs in a quantum circuit at all, and it should come before any investment in scaling the growth. Expect several years between that answer and anything resembling a manufacturing process.

*The R&D Innovate desk*
