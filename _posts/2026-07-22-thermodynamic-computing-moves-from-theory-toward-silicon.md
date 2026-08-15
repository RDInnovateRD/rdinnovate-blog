---
layout: post
title: "Thermodynamic Computing Moves From Theory Toward Silicon"
date: 2026-07-22
excerpt: "For seventy years, digital engineering has treated thermal noise as the enemy. Every transistor spends energy forcing electrons into a clean 0 or 1, fighting the random jostling that heat introduce..."
---

For seventy years, digital engineering has treated thermal noise as the enemy. Every transistor spends energy forcing electrons into a clean 0 or 1, fighting the random jostling that heat introduces. A small but growing group of researchers is now building machines that do the opposite. Instead of suppressing noise, they use it as the raw material of computation. In mid-July 2026 the approach crossed an important line: it stopped being a whiteboard idea and started appearing in peer-reviewed hardware architectures and working prototypes.

## The idea

The field goes by a few names, thermodynamic computing or probabilistic computing, and its core unit is often called a p-bit. Unlike a transistor that holds a fixed value, a p-bit fluctuates between states, nudged by the same thermal energy a conventional chip works to cancel out. Wire enough p-bits together and shake them with heat, and the system naturally drifts toward configurations that correspond to the answer of a problem. The computation is not switched into place. It settles into place, the way a ball rolls to the bottom of a valley.

That behavior maps unusually well onto a specific class of modern AI. Diffusion models, the technology behind most image generators, work by starting with random noise and gradually removing it until a picture emerges. A machine whose native language is structured randomness is, in principle, a natural fit for that job.

## How the hardware works

Two companies anchor the current wave. Normal Computing, founded in 2022 by former Google X and Google Brain engineers, built a prototype using eight clusters of resistor, capacitor and inductor components. The coupling strengths between the clusters form a mathematical matrix, and when the board is driven by noise, its equilibrium fluctuations correspond to the inverse of that matrix. In other words, the physics performs the linear algebra. The company has since announced a digital silicon follow-up, the CN101, aimed at generative AI and molecular simulation.

Extropic, founded the same year by veterans of Google, IBM, Apple and Microsoft, has focused on a chip-scale grid of thousands of interconnected components it calls Thermodynamic Sampling Units. In October 2025 it released a research platform, the XTR-0, for early testing. In early July 2026 it published a peer-reviewed description of its Denoising Thermodynamic Computer Architecture in the journal npj Unconventional Computing, developed with collaborators at MIT.

## The efficiency claims

The numbers are the reason people are paying attention. Extropic and its MIT collaborators report that, in simulation, their architecture could generate an image sample on the Fashion-MNIST benchmark using roughly 10,000 times less energy than a conventional generative AI algorithm running on standard hardware. Separately, Stephen Whitelam at Lawrence Berkeley National Laboratory published theoretical work suggesting a thermodynamic approach to diffusion model inference could dissipate on the order of 100 billion times less heat than a digital neural network performing the same denoising task.

If even a fraction of those gains survive contact with real workloads, the implication for the energy footprint of AI is significant. Data center power demand has become one of the hardest constraints on scaling AI, and the industry has been searching for architectures that break the link between more capability and more electricity.

## The caveats

Here the honesty of the researchers is worth repeating, because it is easy to lose in the headline figures. Both of the standout numbers come from simulations and theory, not from measurements on finished chips. Normal Computing's early prototype had to inject noise artificially using random number generators, which meant it could not yet demonstrate the energy savings that are the entire point. Whitelam, whose figure is the more dramatic of the two, offered the most grounding assessment: the designs built so far are only about as capable as the small digital neural networks of around 1990. The hardware that would realize the full promise has not been built, and performance on production workloads remains undemonstrated.

The most useful comparison may be to quantum computing in the 1990s, when the theory was compelling, the first small devices existed, and the distance to practical advantage was measured in decades rather than years. Thermodynamic computing sits in roughly that position now.

## R&D takeaway

The lesson for anyone building or funding R&D is about where efficiency gains actually come from. The digital paradigm has spent decades optimizing within a single strategy: suppress noise, switch cleanly, repeat. Thermodynamic computing does not out-optimize that strategy, it discards a founding assumption of it and asks what becomes possible when the physics of a system is allowed to do the work directly. That is a reminder that the largest jumps in performance often sit outside the current design space, not further along it. The teams here are early, they say so plainly, and the discipline of pairing bold projections with candid limits is exactly what makes the work credible. Watch for the moment a chip measures the savings rather than simulating them. That is the number that will matter.

Until the next signal, keep building.

The R&D Innovate desk

## Sources

- Quanta Magazine, "Thermodynamic Computers Go With the (Energy) Flow," July 15, 2026
- TechTimes, "Chips That Run on Thermal Noise Could Cut AI Image Generation Energy Use 10,000 Times," July 17, 2026
- Extropic and MIT, "Denoising Thermodynamic Computer Architecture," npj Unconventional Computing, July 2026
- S. Whitelam, Lawrence Berkeley National Laboratory, Physical Review Letters
