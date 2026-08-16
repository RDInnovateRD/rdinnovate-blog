---
layout: post
title: "A Quantum Experiment Run From the Cloud Confirms a 20-Year-Old Prediction"
date: 2026-08-05
excerpt: "For most of the history of physics, a theorist with a bold prediction faced a hard bottleneck. To test the idea, someone had to build an apparatus, or the theorist had to persuade an experimental g..."
category: "Quantum"
catslug: "quantum"
---

For most of the history of physics, a theorist with a bold prediction faced a hard bottleneck. To test the idea, someone had to build an apparatus, or the theorist had to persuade an experimental group to spend months of scarce lab time on it. A result reported this week shows another path. A team confirmed a quantum prediction that had gone untested for more than two decades, and they did it by using an ultracold-atom machine they never touched, operated entirely through the cloud.

The work, published in Communications Physics, comes from Ippei Danshita at Kindai University, Daichi Kagamihara at Chuo University, and Noah Fitch at the quantum company Infleqtion. The experiment ran on Oqtant, Infleqtion's cloud-accessible platform, which holds a Bose-Einstein condensate of neutral atoms in a vacuum chamber cooled below 100 nanokelvin. Users submit instructions over the internet, the machine shapes and probes the atoms with lasers and magnetic fields, and the images come back for analysis. No one on the theory team stood at the bench.

## The prediction that waited two decades

The phenomenon they set out to test is called anomalous tunneling. Ordinary quantum tunneling is familiar: a particle meets an energy barrier, and its odds of passing through fall as its energy drops. Lower energy means a smaller chance of getting across. Anomalous tunneling, first predicted by Russian theorists more than twenty years ago, describes the opposite behavior for a special kind of wave. In a Bose-Einstein condensate, the lowest-energy collective excitations, sound-like ripples known as Bogoliubov phonons, pass through a barrier with near-perfect transmission precisely when their energy approaches zero. To those waves, the barrier becomes almost invisible.

The prediction was clean, but it sat unconfirmed. Collective excitations in a condensate are delicate, and measuring how a barrier affects them requires exactly the kind of controlled ultracold-atom setup that few groups in the world possess.

## How the experiment worked

Rather than fire single waves at a wall and count how many cross, the team measured frequencies. Anomalous tunneling should leave a fingerprint on the collective modes of a condensate that sits across a potential barrier. The low-energy modes should behave as if the barrier is barely there, shifting their frequencies less than a naive picture would predict. Danshita and Kagamihara worked out what those frequencies should be, then used Oqtant to build the condensate, impose the barrier, excite the modes, and read out the oscillations. The measured frequencies tracked the theory. Low-energy collective modes were only weakly disturbed by the barrier, the exact signature the prediction called for.

The result reaches beyond cold atoms. Anomalous tunneling is expected to appear in any system that shares the same underlying symmetry, including magnetic materials that carry spin waves. Confirming it in a condensate is a foothold for testing it elsewhere.

## Why a cloud apparatus matters

The more consequential story may be the method. Danshita's group is a theory group. In the older model, this paper would have needed a partnership with an experimental lab, a queue for beam time, and a long calibration effort before a single useful number came out. Instead, the barrier to entry was an internet connection and a well-specified request.

Infleqtion frames the platform in blunt terms. As one of its executives put it, "Before quantum is everywhere, we can access quantum from anywhere." Danshita was direct about why that access counted: "Theoretical predictions cannot become scientific discoveries without experimental verification." The cloud model narrows the gap between having an idea and testing it, and it does so for researchers who would otherwise be locked out by the cost and complexity of the hardware.

There are limits worth naming. A shared cloud apparatus offers the experiments its operators choose to expose, not arbitrary custom rigs, and precision is bounded by a machine tuned for general use rather than one built around a single question. But the same was true of early cloud computing and early cloud-based gene sequencing, and both went on to reshape their fields once the convenience outweighed the constraints.

## R&D takeaway

The scientific headline is a twenty-year-old prediction finally verified. The innovation headline is that experimental physics is starting to look like software: a capability you call over a network rather than a building you have to own. When frontier instruments become services, the pool of people who can run a real experiment widens from the few labs that hold the hardware to anyone with a testable idea. That is how bottlenecks break, not by making the apparatus cheaper, but by making it shared. For any R&D organization, the lesson is to watch for the moment a scarce, capital-heavy capability turns into an on-demand service, because that is usually when the pace of discovery in a field starts to change.

Until next time, keep questioning, and keep building.

The R&D Innovate desk

## Sources
- Scienmag, "Theoretical physicists uncover discoveries using cloud computing for cutting-edge physics experiment," August 4, 2026: https://scienmag.com/theoretical-physicists-uncover-discoveries-using-cloud-computing-for-cutting-edge-physics-experiment/
- Mirage News, "Physicists Use Cloud Service in Breakthrough Experiment," August 2026: https://www.miragenews.com/physicists-use-cloud-service-in-breakthrough-1721242/
- Danshita, Kagamihara and Fitch, "Observation of anomalous tunneling in collective excitations via a cloud experiment platform for Bose-Einstein condensates," Communications Physics (2026), DOI 10.1038/s42005-026-02720-6. Preprint: https://arxiv.org/abs/2509.06254
- Infleqtion, "What is a Bose-Einstein Condensate?": https://infleqtion.com/what-is-a-bose-einstein-condensate/
