---
title: "Mapping magnetic field symmetry reveals internal leakage in lithium-ion cells"
date: 2026-11-28
excerpt: "Non-invasive magnetometry maps internal battery leakage currents down to one milliampere, providing spatial diagnostics for soft short circuits in pouch cells."
category: "Energy"
catslug: "energy"
source:
  kind: arxiv
  id: "arxiv:2611.34699"
  url: "https://arxiv.org/abs/2611.34699"
  title: "Diagnosing internal leakage currents through magnetometry of lithium-ion cells"
  venue: "arXiv preprint"
  published: "2026-11-25"
  authors: "Shaurya Shukla et al."
  peer_reviewed: false
generated:
  provider: gemini
  model: "gemini-3.6-flash"
  at: "2026-11-27T20:58:28.610Z"
---

## The challenge of unseen self-discharge in lithium-ion cells
Detecting localised internal defects inside lithium-ion battery cells remains a central bottleneck for energy storage quality control and reliability engineering. When localised conductive pathways or insulation breaches form between positive and negative electrodes, small internal leakage currents develop. These low-magnitude self-discharge paths—often termed soft shorts—gradually drain cell energy, accelerate capacity degradation, and can serve as precursors to thermal failures. However, monitoring cells strictly from their external electrical terminals provides limited insight into these phenomena. Terminal voltage and current measurements aggregate the electrochemical behaviour of the entire cell volume into a single lumped parameter. Small internal leakage currents are frequently masked by background operational currents or voltage relaxation noise, making it extremely difficult to identify early-stage short circuits or pin down their physical location within the cell structure.

A recent study detailed in an arXiv preprint, which has not yet undergone peer review, demonstrates a non-invasive diagnostic technique designed to address this measurement gap. By placing lithium-ion pouch cells within a controlled magnetic environment and scanning their external magnetic fields, the research team established a method to detect and track internal leakage currents that cannot be isolated through standard terminal monitoring alone.

## Spatial magnetometry inside magnetic shielding
The diagnostic method relies on the fundamental physics of electromagnetism: electrical current flowing through a battery’s internal current collectors, tabs, and active electrode layers generates a proportional magnetic field in the surrounding space. In a flawless cell operating under normal conditions, current distribution follows predictable geometric paths dictated by the cell architecture, producing a characteristic magnetic field profile.

To capture these faint magnetic signals without interference from background ambient noise, the researchers positioned a three-axis magnetoresistive sensor inside a stationary, three-layer magnetic shield. Lithium-ion pouch cells were mounted onto a pair of motorized linear stages capable of translating the cell in two dimensions relative to the fixed sensor. As the stages moved the cell across a planar grid above the sensor, the system recorded two-dimensional maps of the magnetic field vector above the cell.

Simultaneously, a high-precision battery cycler controlled the electrical operation of the cell, setting applied currents while monitoring terminal voltage. Initial benchmark testing on intact pouch cells established the normal magnetic baseline. Across driven currents ranging from 10 mA to 420 mA, the spatial magnetic field strength responded linearly to changes in applied current. Furthermore, spatial field maps acquired during charging cycles exhibited clean symmetry when compared against maps captured during discharge cycles. In an undamaged cell, reversing the direction of external current simply inverted the vector orientation of the magnetic field while preserving its overall spatial pattern.

## Isolating leakage through broken field symmetry
To evaluate how internal defects alter this magnetic signature, the researchers introduced mechanical indentation damage to two 600 mAh pouch cells, deliberately creating localised internal leakage channels. When evaluated with the magnetometry setup, the damaged cells exhibited distinct anomalies that separated them from intact units.

First, when the damaged cells were left at rest with no external current applied by the cycler, the sensor detected a persistent magnetic field across the cell surface. This zero-current magnetic field gradually decayed over several hours, mirroring terminal voltage drops that signalled ongoing self-discharge. Because an undamaged resting cell carries no net internal current and generates no external magnetic field, this static field provided direct evidence of circulating internal leakage current. At rest, the hardware configuration successfully resolved leakage currents down to approximately 1 to 3 mA.

Second, the presence of internal leakage altered the spatial field distributions recorded during active battery operation. Because internal self-discharge currents flow continuously along localised defect pathways, they add vectorially to external charging currents and subtract from discharge currents, or vice versa depending on the defect geometry. This persistent directional offset breaks the structural symmetry between charge and discharge field maps. By comparing spatial field maps captured during opposing cycling phases, the setup could flag active internal leakage even while the cell was undergoing driven charge and discharge cycles.

## Diagnostic limits and scaling challenges
While the demonstration highlights the utility of magnetic field mapping for internal battery diagnostics, several technical constraints define its current distance from commercial deployment. The experiments were conducted on small-format 600 mAh pouch cells. Commercial energy storage applications—such as electric vehicle traction packs and grid-scale storage units—utilize multi-ampere-hour pouch, cylindrical, or prismatic cells with significantly thicker electrode stacks and complex tab geometries. Higher magnetic field background levels and field attenuation through dense metallic layers may obscure micro-ampere or low-milliampere leakage paths in larger cell formats.

Furthermore, the physical mechanics of the setup impose operational limits. Acquiring spatial maps using two-dimensional linear stages requires mechanical rastering over the cell surface, a process that takes considerable time per scan. This slow throughput makes the method well suited for laboratory failure analysis, prototype testing, and root-cause validation, but impractical for high-speed inline manufacturing lines where thousands of cells are formatted per hour.

The method also relies heavily on multi-layer magnetic shielding to suppress ambient electromagnetic interference, which could prove challenging to integrate into industrial test environments containing heavy power electronics. Finally, as an arXiv preprint that has not yet completed formal peer review, the experimental findings and sensor thresholds await independent verification by the broader electrochemical research community.

## Sources

- [Diagnosing internal leakage currents through magnetometry of lithium-ion cells](https://arxiv.org/abs/2611.34699), Shaurya Shukla et al., arXiv preprint, not yet peer reviewed, 2026-11-25

## The R&D takeaway
Engineers planning diagnostic frameworks for energy storage technologies should incorporate spatially resolved physical measurements rather than relying exclusively on terminal voltage and current metrics to assess cell health. Integrating non-invasive magnetometry into early-stage prototype screening can help teams isolate internal short-circuit mechanisms, validate mechanical tooling tolerances, and benchmark cell safety prior to scaling cell dimensions. R&D leaders should evaluate automated magnetic inspection setups for root-cause failure analysis while exploring faster sensor arrays that could transition spatially resolved leakage detection toward pilot production lines.

*The R&D Innovate desk*
