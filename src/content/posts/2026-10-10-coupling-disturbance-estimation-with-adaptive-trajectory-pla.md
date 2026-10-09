---
title: "Coupling disturbance estimation with adaptive trajectory planning for quadrotors"
date: 2026-10-10
excerpt: "A reinforcement learning framework estimates wind acceleration to simultaneously drive low-level motor compensation and high-level path adjustments."
category: "Robotics"
catslug: "robotics"
source:
  kind: arxiv
  id: "arxiv:2610.11809"
  url: "https://arxiv.org/abs/2610.11809"
  title: "WAND: Learning Robust Navigation under Complex Wind Disturbances and Dense Obstacles for Quadrotors"
  venue: "arXiv; published in IEEE Robotics and Automation Letters, vol. 11, no. 11, pp. 12392-12399, Nov. 2026"
  published: "2026-10-08"
  authors: "Zhonghan Tang et al."
  peer_reviewed: true
generated:
  provider: gemini
  model: "gemini-3.8-flash"
  at: "2026-10-09T19:15:57.863Z"
---

## The limits of implicit disturbance handling

Quadrotors operating in cluttered environments must maintain exceptionally tight control over their positions and flight paths. Because a multirotor drone is an underactuated system that tilts its entire airframe to direct thrust laterally, any rapid flight manoeuvring through dense clusters of obstacles demands precise coordination between orientation and translational acceleration. When the surrounding air is unstable, this coordination quickly breaks down. Strong, time-varying wind disturbances impose sudden aerodynamic forces and moments on the vehicle, perturbing its flight dynamics, eroding available control authority, and significantly increasing the danger of colliding with nearby obstacles.

In autonomous robotics, the conventional strategy for dealing with cluttered space relies on learning-based navigation policies trained through reinforcement learning. Typically, these systems feed real-time obstacle perception alongside proprioceptive observations—such as onboard inertial readings and state estimates—directly into a neural network policy. The policy is expected to find collision-free paths while implicitly figuring out how the surrounding air currents are pushing the platform. However, leaving disturbance effects to be deduced implicitly creates serious operational vulnerabilities. Under partial observability, the network cannot easily disentangle whether an unexpected trajectory deviation stems from external wind, internal tracking inaccuracies, or unmodelled platform dynamics. Because the system struggles to isolate the aerodynamic forces acting on it, its reactions to wind gusts are often delayed or poorly calibrated, causing the vehicle to drift into obstacles before corrective actions can take effect.

## Estimating disturbance acceleration from proprioceptive history

To overcome this vulnerability, the system must separate the task of understanding the physical environment from the task of plotting a course through it. The WAND framework, which stands for Wind-Aware Navigation with Disturbance Estimation, approaches this problem by explicitly calculating wind-induced disturbance acceleration rather than forcing the navigation policy to deduce it indirectly.

Instead of deploying dedicated external wind sensors, which add payload mass and structural complexity, WAND extracts the disturbance acceleration directly from historical proprioceptive states. The historical progression of the vehicle's own internal states carries a clear mechanical signature of external forces: deviations between commanded flight behaviour and actual motion over recent time steps reveal how environmental airflow is accelerating the airframe. To capture these temporal dynamics, the framework uses a Temporal Convolutional Network. By applying causal convolutional operations across a sequence of recent proprioceptive states, the network can model time-varying disturbance effects with high computational efficiency. This explicit estimation provides the system with a dedicated, real-time quantification of the translational acceleration caused by the surrounding wind field, effectively removing the ambiguity that undermines policies operating under partial observability.

## Dual compensation across planning and flight control

Once the wind-induced disturbance acceleration has been explicitly determined, the central engineering question is how to use that knowledge. In traditional flight control, external disturbance estimates are typically routed straight to the low-level controller as a feedforward signal. This allows the motors to apply counteracting thrust and tilt to nullify the external force. However, relying purely on low-level feedforward rejection preserves a major flaw: it treats the planned path as a rigid geometric line that must be held at all costs, regardless of how hostile the wind conditions make that particular trajectory.

WAND resolves this limitation by adopting a dual-use architecture that simultaneously influences both low-level control and high-level trajectory generation. On the low-level side, the estimated disturbance acceleration is supplied directly as feedforward compensation to assist basic flight stabilisation, actively rejecting aerodynamic forces at the actuator level. On the high-level side, the same disturbance estimate is routed into the reinforcement learning navigation policy through a specialised residual module called WindAdapter.

The WindAdapter module is zero-initialised, a design choice that preserves the baseline behaviour of the navigation policy during the opening phases of reinforcement learning and prevents destabilising training updates. As learning progresses, WindAdapter trains the policy to condition its high-level navigation decisions directly on the estimated wind acceleration. This dual integration creates a tightly coupled system. The quadrotor does not merely fight against crosswinds using raw motor power to stay on an arbitrary path. Instead, the high-level planner actively reshapes its intended route through the dense obstacle field to account for prevailing wind direction and strength, coordinating intelligent path planning with immediate physical disturbance rejection.

## Flight trials and practical boundaries

The performance of this coupled approach was evaluated in peer-reviewed research published in IEEE Robotics and Automation Letters across extensive simulation runs and physical flight experiments. In simulation benchmarks covering 12 distinct wind-disturbed environments with dense obstacle distributions, WAND increased the observed navigation success rate by an average of 8.3 percentage points compared to relying on feedforward compensation alone. This margin highlights that simply cancelling forces at the motor level is not enough when obstacle density is high; the vehicle must also adapt its intended flight path to the wind field.

Controlled experiments under opposing crosswinds further verified this mechanism, demonstrating that the quadrotor dynamically altered its trajectory depending on wind direction. Rather than attempting identical geometric trajectories under mirrored wind directions, the policy adapted its flight lines relative to obstacles based on how the crosswind was pressing against the airframe.

To evaluate whether the complete architecture could operate within real-time onboard constraints, the researchers deployed WAND on physical hardware in an indoor testing environment subject to fan-induced wind disturbances. In these physical flights, the system achieved successful navigation in 18 out of 20 trials, proving that the Temporal Convolutional Network and policy architecture can run onboard without introducing latency that compromises flight safety.

Nevertheless, the experimental scope highlights clear operational boundaries. Relying on historical proprioceptive states means that the system requires a brief window of physical interaction to detect changes in airflow; extremely abrupt, turbulent shifts may still cause temporary tracking errors before the temporal network updates its acceleration estimate. Furthermore, the physical validation was conducted indoors with fan arrays rather than in chaotic, large-scale outdoor atmospheric turbulence. Two failed runs out of 20 in the physical trials also show that when clearances around obstacles become exceptionally tight, even coupled disturbance estimation and adaptive planning cannot entirely eliminate collision risks under heavy airflow.

## Sources

- [WAND: Learning Robust Navigation under Complex Wind Disturbances and Dense Obstacles for Quadrotors](https://arxiv.org/abs/2610.11809), Zhonghan Tang et al., arXiv; published in IEEE Robotics and Automation Letters, vol. 11, no. 11, pp. 12392-12399, Nov. 2026, 2026-10-08
- [Publisher record (DOI)](https://doi.org/10.1109/LRA.2026.3730214)

## The R&D takeaway

R&D teams developing autonomous mobile robots for aerodynamically unstable environments should avoid relying on monolithic reinforcement learning policies to implicitly manage disturbance dynamics. Decoupling disturbance estimation into a dedicated temporal model and feeding that output simultaneously into low-level compensation and high-level path planning yields measurable improvements in task completion. For engineering leaders balancing compute and reliability, structuring policies to adapt spatial trajectories around environmental forces rather than treating disturbances solely as low-level control errors provides a pragmatic architecture for edge deployment.

*The R&D Innovate desk*
