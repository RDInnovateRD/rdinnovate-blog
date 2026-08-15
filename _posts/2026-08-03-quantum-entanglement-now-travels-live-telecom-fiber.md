---
layout: post
title: "Quantum Entanglement Now Travels Live Telecom Fiber"
date: 2026-08-03
excerpt: "Entangled photons crossed 24.4 km of live commercial telecom fiber at 94% fidelity, a real step toward a practical quantum internet."
---

Quantum networks have always come with an expensive footnote. To send entangled photons between two points, you needed your own fiber, dark and undisturbed, kept clear of the ordinary internet traffic that would drown a quantum signal. That footnote is a big reason the quantum internet has stayed a laboratory promise rather than a deployable system. A team at Northwestern University has just weakened it. In a result published in Optica Quantum on July 20, 2026, the group distributed quantum entanglement across 24.4 kilometers of commercial telecom fiber while that same fiber carried a full load of live classical data.

## What the team demonstrated

The experiment linked two nodes, one in Evanston and one in downtown Chicago, over a single strand of deployed fiber. The researchers, led by Professor Prem Kumar with graduate student Gina Talcott as first author, generated pairs of entangled photons and sent them between the nodes, then confirmed that the entanglement survived the trip with a fidelity above 94 percent.

The number that matters is not just the distance. It is what else was on the line at the same time. The fiber was simultaneously carrying two classical data channels running at 800 gigabits per second each, plus additional optical power added to emulate a fully loaded commercial link with roughly 36 terabits per second of capacity. In other words, the quantum photons were not traveling through a quiet, reserved channel. They were threading through the same crowded pipe that a real internet provider would be pushing to its limits.

Kumar described the challenge plainly. Quantum signals, he said, are very tiny compared with classical ones, like an ant traveling through a path filled with elephants. The elephants in this case were the powerful classical beams whose stray light can easily swamp the single photons that carry quantum information.

## How they protected the quantum signal

The trick was to keep the ant and the elephants in different lanes of the same road. The classical traffic ran in the C-band, the wavelength region around 1550 nanometers that telecom networks use by default. The quantum photons were placed in the O-band, near 1310 nanometers, a spectrally distant neighborhood where far less of the classical noise bleeds over. Careful filtering removed the residual scattered light that still crept into the quantum channel.

Timing was the other hard part. Entanglement-based protocols require the two ends to agree on when a photon should arrive, down to picoseconds. The team used a precision synchronization system known as White Rabbit to keep the distant nodes locked together tightly enough for the measurement to work. None of these pieces is exotic on its own. What is new is assembling them into a system that holds a fragile quantum correlation steady inside a live, noisy, fully utilized network.

## Why sharing fiber matters

The strategic significance is about infrastructure, not physics. The world has already buried an enormous amount of optical fiber, and most of it is spoken for by classical data. A quantum internet that demanded its own separate, dedicated fiber everywhere would essentially require laying a second network on top of the one we have. A quantum internet that can coexist on the fiber already in the ground is a far more plausible near-term project.

This result does not deliver that coexistence at production scale, but it removes a key objection to the idea. It shows that entanglement, the resource that underpins quantum key distribution, distributed quantum computing, and networked sensing, can be moved through fiber that is doing its normal commercial job at the same time.

## The limits worth keeping in view

The honest caveats are important. The team demonstrated entanglement distribution, which is the first step, not full quantum teleportation, which requires a second stage the group names as its next target. The setup still depended on specialized synchronization hardware and on giving the quantum channel a protected slice of the spectrum, so this is coexistence under carefully engineered conditions rather than a plug-and-play upgrade. Fidelity above 94 percent is strong for a real-world link, but scaling to many nodes and longer distances will surface new noise and loss problems. This is a milestone on a long road, and the researchers present it as one.

## R&D takeaway

The lesson here is about where the hard problem actually lived. For years the implicit assumption was that a quantum network needed a pristine environment, so progress meant building that environment from scratch. This team asked a different question. Instead of demanding a clean channel, they asked whether the delicate effect could be made robust enough to survive a dirty one. The breakthrough is not a new law of physics. It is an engineering answer to the question of coexistence, and coexistence with existing infrastructure is almost always cheaper and faster to deploy than replacement of it.

That pattern shows up well beyond quantum optics. The most deployable innovations are frequently not the ones that require the world to be rebuilt around them, but the ones that learn to run on the world as it already is. Before assuming your new capability needs its own dedicated stack, it is worth asking whether it can be made tough enough to share the one that is already there.

Until the next signal, keep building.

The R&D Innovate desk

## Sources

- Talcott, Kumar et al., "Entanglement distribution over deployed telecom fiber carrying classical traffic," Optica Quantum, July 20, 2026
- Northwestern Engineering (McCormick) news, "Quantum internet leaves the lab," July 2026 (mccormick.northwestern.edu)
- EurekAlert, "Quantum internet leaves the lab," Northwestern University, July 2026 (eurekalert.org)
- Phys.org, "Quantum internet leaves the lab with first real-world entanglement over busy telecom fiber," July 2026 (phys.org)
- The Quantum Insider and TechTimes coverage, July 2026
