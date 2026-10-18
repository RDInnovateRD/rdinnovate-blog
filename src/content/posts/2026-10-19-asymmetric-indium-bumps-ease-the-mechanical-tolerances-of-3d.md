---
title: "Asymmetric indium bumps ease the mechanical tolerances of 3D quantum chip packaging"
date: 2026-10-19
excerpt: "Separating qubit dies from control routing using thin pads and thick bumps preserves transmon coherence while slashing flip-chip tilt."
category: "Quantum"
catslug: "quantum"
source:
  kind: arxiv
  id: "arxiv:2610.21435"
  url: "https://arxiv.org/abs/2610.21435"
  title: "Accurate gap control of 3D-integrated superconducting quantum circuits using asymmetric indium architecture and multi-angle flip-chip bonding"
  venue: "arXiv preprint"
  published: "2026-10-15"
  authors: "L. Richard et al."
  peer_reviewed: false
generated:
  provider: gemini
  model: "gemini-3.8-flash"
  at: "2026-10-18T13:50:31.734Z"
---

Planar superconducting quantum processors are rapidly running out of physical room. When all qubits, readout resonators, flux bias lines, and microwave drive conduits share a single flat substrate, wiring density quickly becomes an unmanageable physical bottleneck. Traces routed across the surface must skirt sensitive junctions, risking unwanted capacitive and inductive crosstalk. To scale superconducting devices beyond modest arrays, quantum hardware engineers have increasingly turned to three-dimensional integration, borrowing the flip-chip packaging architectures long established in conventional microelectronics.

In a standard quantum flip-chip layout, the system is partitioned across two separate substrates: a qubit die containing the sensitive superconducting circuits, and a carrier or control die carrying the input and output routing. The two chips are brought face-to-face and bonded mechanically and electrically using micro-bumps made of indium, a ductile metal that superconducts at millikelvin operating temperatures. 

Yet transitioning from a single plane to a dual-chip stack introduces severe fabrication challenges. The vacuum spacing between the two dies directly dictates the electromagnetic coupling between the control lines and the qubits. Any variation in the separation, or any angular tilt between the dies across the chip surface, shifts intended coupling strengths, alters resonance frequencies, and can degrade gate fidelities. Historically, maintaining an exact, uniform gap across several square millimetres has forced packaging teams to compromise between mechanical precision and quantum coherence. A study reported by L. Richard and colleagues—described in a preprint that has not yet been peer reviewed—proposes a physical architecture that tackles this trade-off by reconsidering the symmetry of the bonding interface.

## The mechanics of the flip-chip compromise

To join two chips using indium, conventional packaging recipes deposit symmetric, relatively thick indium bumps on both mating surfaces. When the chips are aligned and compressed together at room temperature, the opposing bumps plastically deform and cold-weld into continuous interconnects. 

This symmetric approach carries significant drawbacks. Depositing thick indium films on the qubit chip exposes sensitive dielectric surfaces to extensive processing, lithography, and lift-off steps, which can leave trace chemical residues and introduce surface two-level defects that sap qubit energy. Mechanically, squeezing two thick, malleable metal pillars against one another can lead to unpredictable lateral spreading and uneven collapse across the array. 

To prevent uneven collapse and maintain a consistent separation distance, conventional processes often rely on dedicated rigid micro-spacers, such as silicon or dielectric pillars, placed across the chip periphery. While spacers establish a hard stop during bonding, they add lithographic complexity, consume valuable die area, and can induce mechanical stress or trap contaminants during compression. If the bonding tool exerts pressure with even a fraction of a degree of non-parallelism, the dies tilt against each other, causing a spatial gradient in inter-chip capacitance across the processor.

## Asymmetric bumps and multi-angle compression

The method developed by Richard and colleagues circumvents these structural issues by dispensing with symmetric bumps and separate physical spacers. Instead, the team employs an asymmetric indium architecture. 

All substantial vertical topography is confined to the control die. Thick indium bumps measuring 20 micrometres in height are patterned exclusively on the carrier substrate, where routing traces and passive microwave lines reside. The sensitive qubit chip, by contrast, undergoes minimal metallisation: it is patterned with ultra-thin indium contact pads just 200 nanometres thick. 

Confining the bulk metal deposition to the control substrate shields the qubit die from aggressive chemical processing and thermal cycles associated with thick-film lift-off. During the bonding process, the 20-micrometre pillars on the carrier make contact with the thin planar target pads on the qubit chip. Because the 200-nanometre pads are essentially two-dimensional planar targets, there is no risk of pillar-on-pillar misalignment or compound lateral squashing between two tall, compliant structures.

To solve the residual tilt problem without inserting dedicated mechanical spacers, the authors paired this asymmetric metallurgy with a multi-angle compression bonding procedure. Conventional flip-chip tool heads compress the top die against the bottom die along a single fixed mechanical axis, which can lock in slight misalignments between the tool stages. By applying compression through a sequence of varying angles, the procedure evenly distributes the plastic deformation across the indium bump field, suppressing systematic angular bias. Across the bonded assemblies, this approach reduced the average residual post-bonding tilt to 20 plus or minus 12 microradians.

## Coherence at planar-equivalent levels

Precision packaging is worthless if the mechanical processing degrades the delicate quantum states of the circuits. Superconducting circuits rely on low-loss microwave environments; lossy dielectrics, interface oxides, or trapped flux in metallic interconnects can introduce non-radiative decay channels that destroy quantum superpositions.

The authors evaluated the interconnects through electrical and microwave measurements, confirming that the bonded joints deliver both low electrical resistance and low microwave insertion loss. Crucially, they integrated transmon qubits into the dual-chip stack using this asymmetric process to evaluate whether the proximity of the bonded carrier and the mechanical compression impaired device physics.

The resulting bonded transmon qubits demonstrated relaxation times (T1) of 159 plus or minus 14 microseconds. Dephasing times, measured via a Hahn echo sequence (T2,echo), reached 294 plus or minus 42 microseconds. These figures match the performance typically seen in high-grade single-chip planar transmon architectures, indicating that neither the 200-nanometre thin pads on the qubit substrate nor the physical deformation during multi-angle bonding introduced dominant loss mechanisms.

## Unresolved scaling questions

These experimental results provide an elegant route toward reliable vertical packaging, but substantial engineering hurdles remain before the technique can be treated as an off-the-shelf industrial packaging standard.

First, because this work is currently available only as a preprint, the broader community has not yet subjected the fabrication protocols and metrology data to independent peer review. Beyond verification, the physical longevity of these asymmetric bonds across repeated cryogenic thermal cycles remains an open question. Pure indium undergoes thermal contraction when cooled from room temperature to around 10 millikelvin. Mismatches in thermal contraction, or structural fatigue caused by repeated warming and cooling cycles during processor maintenance, could cause microscopic delamination between the thick bump and the thin pad. The abstract does not report long-term thermal cycle reliability or fatigue data.

Second, the structural uniformity demonstrated here must be evaluated across larger surface footprints. As processor die sizes scale toward multi-centimetre dimensions to accommodate hundreds or thousands of physical qubits, preserving an average tilt of 20 microradians across the entire area becomes considerably more difficult. Finally, the work demonstrates the integration of single-layer flip-chip packaging; whether the asymmetric deposition and multi-angle compression strategy can be extended to multi-layer stacks—where multiple control and qubit tiers are interleaved—is yet to be established.

## Sources

- [Accurate gap control of 3D-integrated superconducting quantum circuits using asymmetric indium architecture and multi-angle flip-chip bonding](https://arxiv.org/abs/2610.21435), L. Richard et al., arXiv preprint, not yet peer reviewed, 2026-10-15

## The R&D takeaway

For teams designing and packaging superconducting quantum hardware, this work demonstrates that mechanical precision does not require adding rigid spacer structures or symmetric metallurgy that complicates qubit die fabrication. Separating tall bumps on the control substrate from thin contact pads on the qubit substrate isolates processing damage while simplifying the compression physics. R&D leaders planning multi-chip packaging roadmaps should assess whether asymmetric bonding and controlled multi-axis compression can replace dedicated micro-spacers, cutting lithographic steps without compromising qubit coherence.

*The R&D Innovate desk*
