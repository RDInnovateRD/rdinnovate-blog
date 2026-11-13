---
title: "In situ catalyst conversion yields high-mobility indium antimonide nanowires via MBE"
date: 2026-11-14
excerpt: "A self-catalyzed molecular-beam epitaxy technique converts gallium droplets to indium to grow defect-free InSb nanowires with electron mobility near 19,000 cm² V⁻¹ s⁻¹."
category: "Materials"
catslug: "materials"
source:
  kind: arxiv
  id: "arxiv:2611.16234"
  url: "https://arxiv.org/abs/2611.16234"
  title: "High-Quality InSb Nanowires Grown by Molecular-Beam Epitaxy via Precise Catalyst Modulation"
  venue: "arXiv; published in J. Phys. Chem. Lett. 2026, 17, 11079-11086"
  published: "2026-11-12"
  authors: "Wenlong Yang et al."
  peer_reviewed: true
generated:
  provider: gemini
  model: "gemini-3.6-flash"
  at: "2026-11-13T14:16:53.951Z"
---

Building hybrid quantum devices requires joining semiconductor nanostructures with superconducting contact layers without introducing interface defects. Indium antimonide (InSb) nanowires have emerged as a primary material candidate for topological quantum computing due to their strong spin-orbit interactions and high electron mobility. However, the standard method for synthesizing these nanowires—metal organic chemical vapour deposition—suffers from a fundamental architectural conflict. The precursor gases and operating conditions used in chemical vapour deposition systems are incompatible with the ultra-high-vacuum environments required to deposit clean, defect-free superconducting thin films in situ. As a result, fabrication workflows must expose grown nanowires to ambient atmosphere during transfer between deposition tools, introducing surface oxidation and interfacial disorder that degrade fragile quantum states.

Molecular-beam epitaxy (MBE) offers a compelling alternative because it operates within ultra-high-vacuum chambers capable of integrating both semiconductor growth and superconductor deposition modules. Yet, growing InSb nanowires via MBE has historically proven exceptionally difficult. The thermodynamic parameter window that allows InSb nanowires to nucleate and elongate smoothly is narrow, leading to poor process reproducibility. Furthermore, conventional MBE methods rely on foreign metal droplets, such as gold, to act as liquid catalysts for nanowire growth. These foreign catalyst metals can introduce deep-level impurity states into the semiconductor crystal, trapping charge carriers, scattering electrons, and destroying phase coherence.

## Converting liquid droplets in situ to control axial growth

To resolve the conflict between ultra-high-vacuum process compatibility and material purity, a self-catalyzed MBE synthesis process has been developed that eliminates foreign metal catalysts entirely. The growth strategy relies on a multi-stage droplet conversion mechanism initiated on a supporting substrate.

The process begins by growing vertical gallium arsenide (GaAs) nanowire stems. Instead of introducing a foreign element to act as the seed for the subsequent indium antimonide segment, the process manipulates the chemical composition of the liquid catalyst droplet resting at the tip of each GaAs stem. Inside the MBE chamber, the liquid gallium catalyst droplet is converted in situ into a liquid indium droplet. Once this transition is complete, source beams of indium and antimony are supplied to drive axial heteroepitaxial growth of InSb directly beneath the indium droplet. Because the catalyst droplet consists entirely of constituent matrix metals rather than foreign elements, the risk of incorporating deep-level metallic impurities into the active crystal channel is avoided.

Controlling the physical dimensions of the growing InSb nanowires requires careful management of the molecular beam flux during epitaxy. By maintaining a low flux, radial growth on the sidewalls of the nanowires is suppressed. This forces incoming vaporized atoms to incorporate exclusively at the liquid-solid interface located at the top tip. Consequently, the axial length of the InSb nanowires can be tuned linearly from 0.8 micrometres to 2.6 micrometres simply by varying the growth duration, while the wire diameter remains virtually constant.

## Crystal purity and quantum transport metrics

Structural characterisation indicates that this self-catalyzed growth mechanism yields material with high crystallographic integrity. Electron microscopy confirms that the resulting InSb nanowires possess a pure zinc-blende crystal structure completely free of structural defects such as twin boundaries and stacking faults, which typically degrade nanowires grown along heteroepitaxial interfaces. 

Eliminating crystallographic disorder and foreign impurities leads directly to strong electrical transport properties. Transport measurements on the MBE-grown InSb nanowires reveal an electron mobility reaching approximately 19,000 square centimetres per volt-second. 

Low-temperature electronic testing confirms that these high-mobility nanowires preserve phase-coherent quantum transport. Electrical measurements demonstrate quasi-ballistic transport, where charge carriers move through significant portions of the nanowire channel without undergoing inelastic scattering events. When configured with electrostatic gating, the nanowires form quantum dots that display clean single-electron charging states. Furthermore, device characterisation reveals clear Kondo correlations, confirming coherent quantum interactions between localized electronic states in the nanostructure and delocalized conduction channels.

## Integration pathways and scaling constraints

While this self-catalyzed route establishes a substrate-independent synthesis process for high-quality InSb nanowires within an MBE environment, several engineering hurdles must be addressed before the platform can support practical topological quantum hardware. The current demonstration proves material synthesis on individual GaAs stems, but achieving pattern-controlled location, precise orientation, and uniform array density across full semiconductor wafers remains a critical step for circuit integration.

Additionally, demonstrating high mobility and coherent quantum transport in single-nanowire test structures represents an initial material validation. The primary architectural goal of using MBE is to enable the in situ deposition of superconducting metals, such as aluminium, onto clean nanowire facets without breaking vacuum. The physical and electronic properties of the interface between this self-catalyzed InSb crystal and an in situ deposited superconducting shell must still be systematically evaluated. Interface strain, interdiffusion, and thermal expansion mismatches during superconductor deposition could reintroduce local disorder. Finally, translating standalone linear nanowires into complex, multi-terminal junction topologies will require dedicated nanofabrication routes and scalable device assembly protocols.

## Sources

- [High-Quality InSb Nanowires Grown by Molecular-Beam Epitaxy via Precise Catalyst Modulation](https://arxiv.org/abs/2611.16234), Wenlong Yang et al., arXiv; published in J. Phys. Chem. Lett. 2026, 17, 11079-11086, 2026-11-12
- [Publisher record (DOI)](https://doi.org/10.1021/acs.jpclett.6c02486)

## The R&D takeaway

For teams funding and directing quantum hardware programs, this result highlights the strategic value of prioritising growth-process compatibility over short-term material performance metrics achieved via non-scalable methods. When evaluating material synthesis platforms for hybrid semiconductor-superconductor devices, R&D planners should focus on methods that permit end-to-end, multi-material processing within unified ultra-high-vacuum environments. Investing in self-catalyzed epitaxy techniques effectively removes catalyst-induced deep-level defects, establishing a clean baseline for subsequent in situ device layer integration.

*The R&D Innovate desk*
