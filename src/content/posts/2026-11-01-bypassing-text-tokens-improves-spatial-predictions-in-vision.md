---
title: "Bypassing text tokens improves spatial predictions in vision-language models"
date: 2026-11-01
excerpt: "Regressing coordinates directly from intermediate hidden layers reduces trajectory error by over 60 percent while boosting throughput nearly fourfold."
category: "Robotics"
catslug: "robotics"
source:
  kind: arxiv
  id: "arxiv:2610.39416"
  url: "https://arxiv.org/abs/2610.39416"
  title: "Decoding Geometry, Not Tokens: Efficient VLMs for Robot Affordance and Trajectory Prediction"
  venue: "arXiv preprint"
  published: "2026-10-29"
  authors: "Akila Ayanthi et al."
  peer_reviewed: false
generated:
  provider: gemini
  model: "gemini-3.6-flash"
  at: "2026-10-31T17:14:38.684Z"
---

## The flaw in autoregressive spatial prediction

Robotic planning systems increasingly rely on vision-language models (VLMs) to translate natural language commands and scene imagery into spatial control decisions, such as determining where a robot gripper should make contact or how an end-effector should move across a surface. However, standard VLM designs treat these spatial outputs as an exercise in natural language generation. In these traditional architectures, physical coordinates are converted into discrete textual numbers or spatial tokens, which the network then predicts step by step using autoregressive decoding.

This language-centric formulation introduces fundamental friction when applied to continuous geometric tasks. Converting continuous space into discrete text tokens discards spatial structure and truncates physical precision. Furthermore, because autoregressive models output coordinate sequences token by token, early prediction errors propagate into subsequent tokens. Small numerical inaccuracies near the start of a sequence can severely distort an affordance boundary or cause a planned trajectory path to drift off course.

In addition to compromising accuracy, autoregressive coordinate prediction imposes a significant computational burden. Generating a complete set of spatial coordinates requires multiple sequential forward passes through the model backbone. In real-time robotic applications where fast inference is critical, this multi-token decoding loop introduces excessive latency, limiting the responsiveness and practical deployment of VLM-driven control systems.

## Extracting geometry from intermediate hidden layers

To overcome these structural limitations, recent research evaluates whether spatial prediction truly requires autoregressive text generation. The key premise is that off-the-shelf vision-language models—specifically compact variants with 0.5 billion to 2 billion parameters—already encode rich, continuous spatial representations within their intermediate hidden layers during initial vision-and-language processing. The computational bottleneck is not a lack of spatial understanding inside the network, but rather the requirement to output that understanding as sequential text tokens.

To exploit these latent representations directly, researchers designed an alternative architecture that bypasses text decoding altogether. A lightweight, geometry-compatible prediction head is attached directly to an intermediate hidden layer of a frozen VLM backbone. Because the underlying backbone parameters remain entirely frozen during training and execution, the foundational vision-language representations are preserved without needing resource-intensive full-model fine-tuning.

The attached head reads internal feature maps extracted from the selected intermediate layer. To align these internal representations with the user's intent, the prediction head conditions a learned spatial query on the input text instruction. It then refines this query by performing cross-attention over the visual tokens extracted from the image. Instead of emitting strings of text tokens, the head directly regresses spatial coordinates as continuous numerical values. These outputs specify 2D affordance bounding boxes, which identify functional regions on objects, and sequential 2D trajectory waypoints, which outline movement paths.

Architectural experiments reveal that different spatial outputs depend on distinct network factors. Trajectory prediction is heavily constrained by the autoregressive decoding bottleneck itself, meaning that bypassing token generation yields immediate improvements. By contrast, affordance prediction performance relies not only on removing autoregressive decoding but also on the specific feature depth of the chosen intermediate layer and the design of the prediction head.

## Benchmark gains and computational efficiency

The performance of this direct geometric regression head was evaluated against standard autoregressive VLM baselines across two established benchmark suites: ShareRobot-Bench and AGD20K.

When integrated with a 2 billion parameter VLM backbone, the continuous prediction head delivered substantial improvements in both spatial accuracy and computational speed. Trajectory prediction error dropped by more than 60 percent relative to the autoregressive baseline. On the ShareRobot-Bench affordance benchmark, the 2 billion parameter model achieved an 85 percent relative improvement in mean average precision (mAP).

The direct regression framework also demonstrated competitive accuracy against larger, highly specialised spatial models while running substantially faster. In trajectory prediction evaluations using the Discrete Fréchet Distance (DFD) metric, the 2 billion parameter model achieved a score of 0.251, approaching the 0.191 DFD score of RoboBrain. Crucially, the direct continuous prediction head reached this comparable level of geometric precision while delivering 3.8 times higher inference throughput than the larger baseline model.

By replacing multi-step autoregressive token generation with a single continuous regression pass, the architecture resolves the historical trade-off between spatial precision and processing throughput for instruction-conditioned 2D spatial tasks.

## Operational limitations and hardware deployment gaps

While these benchmark findings highlight clear benefits, several technical boundaries must be recognised when evaluating the approach for real-world robotics.

It is important to state clearly that the underlying study has been published as an arXiv preprint and has not yet undergone peer review. Beyond its publication status, the practical scope of the experimental evaluation is confined to 2D geometric outputs—specifically 2D affordance boxes and 2D trajectory waypoints mapped onto image planes. Physical robotic manipulation requires extending these predictions into 3D spatial positions, orientation vectors, and 6-degree-of-freedom end-effector trajectories.

Furthermore, because the VLM backbone remains frozen, the system's performance is inherently capped by the quality of the feature representations generated by that baseline model. If the frozen backbone fails to resolve fine-grained details in complex or cluttered environments, or if it misinterprets ambiguous natural language commands, the attached prediction head has no mechanism to recover the missing context.

The direct regression head provides a fast, accurate method for generating 2D spatial targets from visual and textual inputs. However, translating these 2D continuous waypoints into physical robot motion requires integration with downstream motion planners, inverse kinematics routines, and real-time closed-loop control systems.

## Sources

- [Decoding Geometry, Not Tokens: Efficient VLMs for Robot Affordance and Trajectory Prediction](https://arxiv.org/abs/2610.39416), Akila Ayanthi et al., arXiv preprint, not yet peer reviewed, 2026-10-29

## The R&D takeaway

R&D leaders working on embodied artificial intelligence and robotic perception should re-evaluate the practice of using autoregressive text generation to predict spatial coordinates. Rather than incurring high latency and accumulated token errors by forcing Vision-Language Models to output spatial commands as text, engineering teams can attach lightweight continuous regression heads to frozen intermediate layers of off-the-shelf backbones. R&D strategy should focus on modular architectures that decouple high-level multimodal reasoning from downstream continuous geometric prediction.

*The R&D Innovate desk*
