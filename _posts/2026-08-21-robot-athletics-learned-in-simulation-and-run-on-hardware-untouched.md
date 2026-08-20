---
layout: post
title: "Robot athletics learned in simulation, and run on hardware untouched"
date: 2026-08-21
excerpt: "A single training recipe taught cartwheels, crawls and backflips to three different robots from motion capture, phone video and cartoon animation, with no per-skill tuning."
category: "Robotics"
catslug: "robotics"
---

The reason humanoid robot demonstrations arrive one at a time, months apart, is not that the hardware cannot do the moves. It is that each move has historically been its own research project. A backflip needed a hand-written contact schedule saying which limb bears load at which millisecond. A crawl needed a different one. Reward functions were tuned per behaviour, often for weeks, and a policy that worked on one machine rarely survived being pointed at another with different mass, different joint limits and different actuator dynamics. The skill library grew linearly in engineer-years.

Work published in the August humanoid special issue of *Science Robotics*, from the RAI Institute and Boston Dynamics, attacks that scaling problem directly. The framework is called ZEST, for zero-shot embodied skill transfer. One recipe, trained entirely in simulation, produced more than fifteen behaviours across three physically dissimilar robots: the 30-degree-of-freedom, 100 kg Atlas humanoid; the smaller 29-degree-of-freedom, 35 kg Unitree G1; and Spot, a 12-degree-of-freedom, 33 kg quadruped. Each policy was deployed to hardware without a tuning pass.

## Three kinds of bad data, treated the same way

The more interesting claim is about what counts as a usable demonstration. ZEST trains from three sources that are usually kept separate because they differ enormously in fidelity.

The first is conventional optical motion capture, worn by a human performer. This is the clean case, and it is where Atlas gets its army crawl, its forward rolls, its cartwheels and a breakdancing move in which one leg sweeps continuously beneath the torso.

The second is ordinary monocular video, the kind shot on a handheld camera with the camera itself moving. Here the pipeline first reconstructs camera motion and 3D human pose from the footage, then runs a spacetime optimisation that retargets the recovered human skeleton onto the robot. That optimisation does something subtle: it jointly solves for spatial scale and time resampling, so that ballistic phases, the moments when the body is airborne and only gravity acts, come out physically consistent for a machine of a different size. Play a human's jump back at the wrong scale and the reference implies a gravitational constant the robot does not live under. Box-climbing and expressive dance reached both Atlas and the G1 by this route.

The third source is keyframe animation, drawn by hand and under no obligation to obey physics at all. That is where Spot's continuous backflip comes from.

## What replaces the hand-tuning

Two mechanisms carry most of the load, and both are variations on the same idea: let the failures decide where the effort goes.

Every reference motion is chopped into fixed-length bins. Each bin carries a running failure level, smoothed over recent attempts. When an episode resets, the starting bin is drawn from a distribution weighted by those failure levels, so training concentrates on the segment the robot keeps blowing, rather than on the easy walk-up before it. A small floor probability on every bin keeps the policy from forgetting the parts it has already mastered.

The second mechanism is a virtual assistive force applied at the robot's torso during training. It is computed as a proportional-derivative term on base pose error plus a feedforward component covering nominal torso dynamics, scaled by a gain kept below unity. These are training wheels, and the same per-bin failure metric decides when to take them off: bins that fail often get more help at the start and are weaned faster as tracking improves. No human sets the schedule.

What the policy is allowed to see is deliberately austere. It receives torso angular velocity from the onboard IMU, the gravity direction in the torso frame, joint positions and velocities, its own previous action, and the single next step of the reference. It does not receive global position or linear velocity, contact labels, a window of upcoming reference frames, or the output of a state estimator. That austerity is the point. A policy that never learned to depend on a state estimator does not need one to exist on the robot, and the sim-to-real gap shrinks to actuator dynamics, mass properties and friction, all of which standard domain randomisation covers: injected observation noise, random pushes, randomised link masses and surface friction.

Training cost per policy is roughly ten hours, about 7,000 iterations, on a single NVIDIA L4. That is a modest cloud instance, not a cluster.

## The numbers, and what they do not cover

Tracking error is reported as mean joint-angle deviation and mean base orientation deviation against the reference. Walking on Atlas comes in at 0.057 radians of joint error and 0.030 radians of orientation error, roughly three degrees and under two degrees respectively. Breakdancing degrades to 0.079 and 0.133 radians. The G1 climbing a box reaches 0.073 radians at the joints but 0.385 radians of base orientation error, about 22 degrees. The robot completes the climb; it does not complete it the way the human in the video did.

Several limitations are stated plainly by the authors, and they matter more than the demonstration reels.

The controller is proprioceptive and assumes flat, non-slippery ground. It has no perception of the environment. When Atlas climbs a box, it is not seeing the box. The box must be where the reference motion says it is, within tolerance, or the skill fails. The reported robustness margins are on the order of plus or minus 10 cm in position and plus or minus 0.3 radians in yaw at the start of a motion. That is a real margin, and it is not the margin a warehouse presents.

Generalisation to unseen skills is explicitly not evaluated. The paper does not claim that a policy trained on fifteen motions will interpolate to a sixteenth that resembles them. It claims the recipe reproduces each of the fifteen.

Automated system identification remains unsolved, and the authors say so. Someone with access to the physical machine still has to make the simulator match it. Zero-shot transfer of the policy is not zero-shot modelling of the robot, and the modelling half is where institutional advantage lives.

Hardware statistics are thin. Box climbing is reported as five consecutive successes. Simulation testing ran 10,000 rollouts per motion under domain randomisation, which is a genuine number, but there is no aggregate hardware failure rate across the full skill library. A demonstration that works five times running is a demonstration, not a reliability figure.

And athletics is not labour. Nothing here involves grasping an object of unknown mass, maintaining force closure, or recovering from a slip that was not in the training distribution. The hard problem of useful humanoid work is contact with objects, and this is contact with the floor.

## Sources

- [ZEST: Zero-shot Embodied Skill Transfer for Athletic Robot Control, arXiv preprint](https://arxiv.org/abs/2602.00401)
- [ZEST, Science Robotics 11, eaec7695 (2026)](https://www.science.org/doi/10.1126/scirobotics.aec7695)
- [Science Robotics special issue on humanoid robots](https://www.science.org/journal/scirobotics)
- [Boston Dynamics Atlas shows off breakdance moves, New Atlas](https://newatlas.com/ai-humanoids/boston-dynamics-atlas-athletic/)

## The R&D takeaway

The cost curve worth watching here is not the ten GPU-hours per skill. It is the collapse in the quality bar for training data: if a handheld video or a hand-drawn animation is an acceptable demonstration, the bottleneck moves from motion capture studios to whatever footage already exists. Anyone planning humanoid deployment should still budget for the parts this work leaves open, namely perception, terrain, and the system identification that keeps the simulator honest. Skill acquisition is becoming cheap; skill reliability in unstructured environments has not moved.

*The R&D Innovate desk*
