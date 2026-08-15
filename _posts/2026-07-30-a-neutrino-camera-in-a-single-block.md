---
layout: post
title: "A Neutrino Camera in a Single Block"
date: 2026-07-30
excerpt: "A neutrino detector is usually a monument to brute force. To catch particles that slip through a light year of lead without noticing it, physicists build machines the size of buildings and fill the..."
---

A neutrino detector is usually a monument to brute force. To catch particles that slip through a light year of lead without noticing it, physicists build machines the size of buildings and fill them with millions of finely machined parts. A team from ETH Zurich and EPFL has just shown a different route. Their prototype, called PLATON, replaces the millions of parts with one block of plastic, a special camera, and a neural network. It is a reminder that in instrumentation, as in computing, the winning move is often to move the complexity out of the hardware and into the software.

## The problem with counting light in a solid

Scintillator detectors work on a simple idea. When a charged particle passes through certain plastics, the material gives off a faint flash of light. Track where the flashes happen and you can reconstruct the path of a particle you never see directly. The catch is figuring out where inside a large, transparent block each flash came from.

The standard answer has been to stop using one block at all. The T2K experiment in Japan, for example, divides its detector into about two million small scintillator cubes and threads roughly 60,000 optical fibers through them, so each fiber reports light from a known location. It works, but it is expensive, slow to build, and hard to scale. Every increase in resolution means more cubes, more fibers, and more channels of electronics to read them all out.

## Imaging the block instead of dividing it

PLATON keeps the scintillator whole and solves the location problem optically. The heart of the system is a light field camera, also called a plenoptic camera, fitted with a micro lens array. Where an ordinary camera records only where light lands on the sensor, a plenoptic camera also records the direction each ray arrived from. That extra information is enough to work backward and place the origin of a flash in three dimensions inside the block.

Catching those flashes is its own challenge, because a real interaction can produce only a handful of photons. The team used a sensor called SwissSPAD2, an array of single photon avalanche diodes that fire in Geiger mode, sensitive enough to register individual photons. In laboratory tests the system reconstructed events across a wide range of brightness, from several hundred detected photons down to as few as five.

The final piece is the software that turns raw camera frames into particle tracks. Here the group used a transformer, the same class of neural network that underpins modern language models, trained to take the pattern of photon positions and timing and infer where the interaction occurred. The hardware collects the evidence, and the network does the reconstruction that fibers and segmentation used to do mechanically.

## What the prototype actually showed

This is a working device, not a simulation dressed up as one. Using electrons from a strontium 90 source, the team detected real particles and reconstructed their positions event by event. From there, simulations project where the approach can go. For a block ten centimeters on each side, the group estimates spatial resolution below one millimeter is realistic, and in a neutrino interaction case study the modeled resolution reached roughly 200 micrometers. Scaling toward cubic meter volumes, the expected resolution stays in the few millimeter range, which would already be competitive with far more complex machines.

The work was published in Nature Communications by Till Dieminger, Saúl Alonso-Monsalve, and Davide Sgalaberna at ETH Zurich, with Edoardo Charbon at EPFL and the camera firm Raytrix as an industrial partner. The next hardware step is a purpose built sensor, PlatonSPAD, designed to give each photon a sub nanosecond timestamp so the timing information becomes as rich as the spatial information.

## Beyond neutrinos

The obvious customers are the next generation of neutrino experiments, including DUNE in South Dakota and Hyper-Kamiokande in Japan, where cheaper and finer detectors would sharpen measurements of how neutrinos change identity as they travel. The same technique is a candidate for hunting dark matter, another category of particle that almost never interacts.

The less obvious payoff is medical. The team has filed three patents around positron emission tomography, the PET scans used to find tumors. Commercial PET scanners resolve features at roughly three to five millimeters. A detector that reads a solid scintillator with a camera and a network could, in principle, do better, which would matter for spotting small lesions early.

## R&D takeaway

PLATON is a case study in a pattern worth watching across deep tech. When a field has spent decades adding physical complexity to solve a measurement problem, the arrival of cheap image sensors and capable neural networks can invert the design. Instead of building structure into the hardware, you build a simpler instrument and let computation recover the detail. For anyone doing R&D in sensing, imaging, or instrumentation, the question PLATON poses is direct. Which of your millions of precision parts are really there to gather information, and which are just there because, until recently, software could not do their job?

Keep building, and keep questioning which complexity is essential.

The R&D Innovate desk

Sources: ETH Zurich Department of Physics, "Neutrinos caught on camera"; Dieminger et al., Nature Communications (2026), DOI 10.1038/s41467-026-70918-x; TechTimes and ScienceDaily coverage, July 2026.
