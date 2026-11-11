---
title: "Closed-form force closure condition enables precise multi-robot rectangular pushing"
date: 2026-11-12
excerpt: "An exact scalar condition guarantees planar force closure for four robots pushing rectangular objects, drastically reducing tracking errors in narrow-passage simulations."
category: "Robotics"
catslug: "robotics"
source:
  kind: arxiv
  id: "arxiv:2611.13268"
  url: "https://arxiv.org/abs/2611.13268"
  title: "Force-Closure Condition for Cooperative Multi-robot Pushing of Rectangular Objects"
  venue: "arXiv; published in 2026 IEEE Canadian Atlantic Ocean Symposium (CAOS), pp. 165-170, 2026"
  published: "2026-11-09"
  authors: "Duy Anh Nguyen, Trung Dung Ngo"
  peer_reviewed: true
generated:
  provider: gemini
  model: "gemini-3.6-flash"
  at: "2026-11-11T17:53:16.625Z"
---

When multiple mobile robots collectively transport heavy or oversized payloads without gripping mechanisms, controlling the object's trajectory presents a complex mechanics challenge. Non-prehensile manipulation—moving an object purely through contact pushing rather than grasping—is inherently under-constrained. Because pushing agents can only exert compressive forces and cannot pull, improper contact positioning leads to rotational slipping, path divergence, or physical jamming against surrounding obstacles.

To maintain continuous control over an object's three planar degrees of freedom—translation along two perpendicular axes and rotation in heading—a team of pushing robots must establish and preserve a state known as force closure. In a force-closure configuration, the combined pushing vectors of the active contact points can synthesize arbitrary net forces and moments across the payload, even though every individual agent remains limited to pushing inward against the object's boundary.

Historically, determining whether a given spatial arrangement of pushing contact points satisfies force closure during dynamic transport has required solving iterative numerical optimisation problems or non-linear computational geometry routines at every control timestep. Alternatively, control systems have depended on rigid, fixed contact formations that cannot adapt when robots must shift around the object's perimeter to pass through tight corridors. Furthermore, standard contact evaluation algorithms often require precise, real-time knowledge of the payload's centre of mass, which can shift unexpectedly or remain difficult to measure when moving non-uniform cargo.

## A scalar condition independent of mass distribution

Recent research published in the Proceedings of the 2026 IEEE Canadian Atlantic Ocean Symposium addresses this computational and operational bottleneck by establishing an exact, closed-form necessary and sufficient condition for the planar force closure of rectangular objects. The formulation applies to a rectangular payload pushed by four frictionless contacts, with one contact point placed along each of the object's four outer edges.

For a rectangular payload with a length designated as b and a width designated as a, the positions of the four contacts along their respective edges are designated as l1, l2, l3, and l4. The mathematical proof establishes that planar force closure holds if and only if the algebraic product of two simple linear terms is strictly less than zero. Specifically, the condition dictates that the term (l1 + l3 - b) multiplied by the term (l2 + l4 - a) must yield a negative number.

This algebraic rule provides three main structural advantages for multi-robot manipulation architectures:

First, evaluation speed is virtually instantaneous. Verifying force closure requires only basic arithmetic operations on four contact displacement values and two perimeter dimensions. This completely bypasses the need to execute iterative matrix operations or linear optimisation routines inside the real-time control loop.

Second, the condition is completely independent of the object's centre of mass. The derivation proves that whether four frictionless edge contacts can generate arbitrary planar forces and torques depends entirely on the geometric relation between the contact coordinates and the payload's outer dimensions. As a result, the controller maintains valid force-closure verification even if the internal mass distribution of the load is unknown or changing.

Third, the inequality provides direct corrective feedback. When the contact points fall out of force closure—causing the product of the two terms to equal zero or exceed zero—the individual algebraic signs of (l1 + l3 - b) and (l2 + l4 - a) indicate exactly which opposing pair of pushing robots must adjust its positions along the perimeter to restore full force control over the payload.

## Tracking performance in tight constraint environments

To verify how this geometric criterion operates within a complete motion planner, the force-closure condition and its corresponding adjustment rules were integrated as a geometric feasibility layer within a full-pose trajectory-tracking framework. The feasibility layer monitors contact positions throughout execution and instructs individual pushing agents to re-align along the perimeter whenever a trajectory manoeuvre threatens to break the force-closure inequality.

The integrated framework was tested through static wrench feasibility evaluations and dynamic narrow-passage simulations involving floating bodies. In these narrow-passage simulations, maintaining certified force-closure configurations produced dramatic reductions in trajectory tracking errors across all planar coordinates.

When the controller operated without the geometric force-closure layer, uncorrected contact drift and moment imbalances caused severe path divergence. The root-mean-square tracking errors reached 12.05 metres along the x-axis, 18.11 metres along the y-axis, and 535.96 degrees in unwrapped yaw heading angle. When the closed-form force-closure layer was enabled, allowing agents to perform real-time contact adjustments based on the algebraic signs of the inequality terms, root-mean-square tracking errors dropped to 2.24 metres along the x-axis, 2.66 metres along the y-axis, and 2.69 degrees in yaw. The sharp reduction in orientation error demonstrates how force-closure maintenance suppresses catastrophic rotational slipping during constrained manoeuvres.

## Real-world assumptions and physical limitations

While the closed-form formulation streamlines force-closure verification, several fundamental assumptions define the current boundary between this theoretical framework and operational robotics deployment.

The derivation strictly relies on a rectangular boundary geometry. While rectangular shapes cover a vast proportion of industrial payloads—such as shipping crates, storage pallets, and modular machinery—the specific algebraic relation does not apply directly to non-rectangular, L-shaped, or irregularly curved objects without further theoretical extension.

Additionally, the proof assumes frictionless contact between the pushing agents and the object perimeter. Real-world physical manipulation invariably involves surface friction. While zero-friction models provide a conservative lower bound for push capability—since friction forces generally assist in preventing slip along the contact normal—physical dry or lubricated friction can introduce stick-slip phenomena, localized deformation, and off-axis tipping moments that are not captured in pure 2D planar point contact dynamics.

Finally, the dynamic evaluations reported in the study were conducted in simulation environments using static wrench calculations and floating-body physical models. The system has not yet been demonstrated on physical multi-robot hardware platforms operating on physical ground surfaces, where wheel slip, floor roughness, wireless communication latency, and low-level force controller delays affect multi-agent execution.

## Sources

- [Force-Closure Condition for Cooperative Multi-robot Pushing of Rectangular Objects](https://arxiv.org/abs/2611.13268), Duy Anh Nguyen, Trung Dung Ngo, arXiv; published in 2026 IEEE Canadian Atlantic Ocean Symposium (CAOS), pp. 165-170, 2026, 2026-11-09
- [Publisher record (DOI)](https://doi.org/10.1109/CAOS69069.2026.11665860)

## The R&D takeaway

For teams designing multi-robot material handling and automated logistics systems, this research demonstrates the power of replacing iterative optimisation loops with exact geometric conditions in low-level control loops. Eliminating computational overhead in contact feasibility checks enables real-time adaptation without sacrificing mechanical stability. Engineering managers should prioritise testing these closed-form feasibility rules on physical robotic hardware under real-world surface conditions before deploying cooperative pushing fleets in production environments.

*The R&D Innovate desk*
