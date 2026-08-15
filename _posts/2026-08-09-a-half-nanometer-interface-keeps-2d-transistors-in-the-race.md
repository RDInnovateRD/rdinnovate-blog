---
layout: post
title: "A Half-Nanometer Interface Keeps 2D Transistors in the Race"
date: 2026-08-09
excerpt: "Silicon transistors are running out of room. As the industry pushes toward features measured in single-digit nanometers, the silicon channel itself becomes too thick to control cleanly, and leakage..."
---

Silicon transistors are running out of room. As the industry pushes toward features measured in single-digit nanometers, the silicon channel itself becomes too thick to control cleanly, and leakage and variability start to win. For years the leading candidate to take over has been a class of atomically thin materials known as 2D semiconductors, sheets a single molecule deep. They are physically thinner than anything silicon can offer, which is exactly why they are attractive. The problem has never been the sheet. It has been everything you have to attach to it.

This week a team from National Yang Ming Chiao Tung University (NYCU) in Taiwan, working with TSMC Corporate Research, published a result that attacks that attachment problem directly. It is a small number with large consequences: a buffer layer about 0.42 nanometers thick, roughly two atoms, that lets a working gate stack sit on a 2D transistor without wrecking its performance.

## Why 2D semiconductors stall at the gate

A transistor needs an insulating layer, the gate dielectric, sitting on top of the semiconductor channel so a voltage can switch the current on and off. On silicon this is routine. On a 2D semiconductor like monolayer molybdenum disulfide (MoS2) it is a trap.

The reason is chemistry. The surface of MoS2 is atomically smooth and chemically inert, with none of the reactive dangling bonds that let a dielectric film nucleate evenly. Deposit an insulator directly onto it and the film grows in patches, leaving defects and a rough boundary. Those defects scatter the electrons moving through the channel, and carrier mobility, the thing that makes the transistor fast, collapses. The field has been stuck with a genuine tradeoff: you can have a very thin gate insulator, or you can have high mobility, but the direct-deposition route made it hard to have both.

## What the team built

The fix is an engineered interface rather than a new material. The researchers deposited a thin epitaxial layer of aluminum directly onto CVD-grown monolayer MoS2, then oxidized it in place. That converts the metal into an aluminum oxide (Al2O3) buffer roughly 0.42 nanometers thick, uniform and well ordered because it grew from an ordered metal film rather than nucleating on an inert surface. On top of that buffer they added a hafnium oxide dielectric, the same high-permittivity insulator used in production silicon chips today.

The combined stack reaches an equivalent oxide thickness of about one nanometer. Equivalent oxide thickness is the standard yardstick here: it tells you how thin a plain silicon-dioxide layer would need to be to give the same electrical control. A one-nanometer figure on a 2D channel is the kind of number that keeps 2D transistors competitive with where silicon is headed, not a generation behind.

## The results

On 100-nanometer channel-length devices the team measured a maximum transconductance of 0.45 millisiemens per micrometer, a direct measure of how strongly the gate controls the current, alongside low leakage and minimal hysteresis. Low leakage means the insulator is doing its job. Minimal hysteresis means the device behaves consistently as it switches, a sign the interface is clean rather than riddled with charge traps. Taken together, the numbers say the buffer preserved the channel instead of degrading it, which is precisely the outcome direct deposition fails to deliver.

As one of the corresponding authors, Professor Wen-Hao Chang, put it, the work shows that "the atomic interface between materials can be just as important" as the materials themselves.

## What it does not solve yet

The authors are careful, and it is worth repeating their caution rather than smoothing it over. This is not a manufacturing solution. A result on selected devices in a lab is a long way from a process that runs across a full wafer with the repeatability, durability, and yield a fab requires. Growing that 0.42-nanometer oxide identically across billions of transistors, and proving it survives real operating conditions, is the work that still has to happen. The paper is a demonstration that the interface problem is solvable, not a signal that 2D chips are arriving next year.

## R&D takeaway

The lesson sits in the size of the fix. The advance here is not a better semiconductor and not a better insulator. Both of those existed. The advance is the two-atom-thick boundary between them, and the recognition that this boundary was the real bottleneck all along. It is easy to treat a system as its components and to look for gains inside each one. Often the value, and the failure, lives at the seams where components meet, and those seams get less attention precisely because they belong to no single part.

That pattern generalizes well beyond chips. When a combination of good pieces underperforms, the instinct is to upgrade a piece. The sharper move is often to ask what is happening at the joints, because an interface you never designed is still an interface, and it is usually doing something you did not intend. Engineer the boundary and the parts you already had can suddenly work.

Keep building, keep questioning, and keep an eye on the interfaces everyone treats as an afterthought.

The R&D Innovate desk

## Sources

- Chang, Lee et al., monolayer MoS2 transistor with epitaxial oxide buffer, Nature Electronics, July 31, 2026 (DOI: 10.1038/s41928-026-01672-7)
- SciTechDaily, "One of the Thinnest Transistor Interfaces Yet Could Reshape Future Chips," August 2026 (scitechdaily.com)
- TrendForce, "TSMC and Researchers Overcome 2D Semiconductor Bottleneck with Epitaxial Interface Engineering," August 7, 2026 (trendforce.com)
- National Yang Ming Chiao Tung University and TSMC Corporate Research announcement, August 2026
