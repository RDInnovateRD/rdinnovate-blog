---
layout: post
title: "A Faster Way to Make the Fluid Inside Grid-Scale Flow Batteries"
date: 2026-08-06
excerpt: "Vanadium flow batteries are one of the more promising ways to store many hours of electricity for the grid, but they have long carried a quiet cost problem. A large share of a flow battery's price ..."
category: "Energy"
catslug: "energy"
---

Vanadium flow batteries are one of the more promising ways to store many hours of electricity for the grid, but they have long carried a quiet cost problem. A large share of a flow battery's price sits not in its pumps or tanks but in the liquid that runs through it. On August 5, 2026, a team at the Korea Advanced Institute of Science and Technology (KAIST) published a method that cuts the time to make that liquid by roughly two-thirds, a step that could meaningfully lower the cost of the technology just as data centers and renewable grids are hunting for long-duration storage.

## The chemistry of a flow battery

Unlike a lithium cell, a vanadium redox flow battery stores its energy in two tanks of liquid electrolyte rather than in solid electrodes. Charging and discharging shuffle electrons between vanadium ions dissolved in acid, and because you can simply build bigger tanks to store more energy, the design scales well to the multi-hour, grid-sized duties that lithium struggles to serve economically. The electrolyte does not degrade the way a lithium electrode does, so the fluid can, in principle, last the life of the plant.

The catch is that the ideal starting fluid is a specific mixed-valence state of vanadium known as V3.5+, an even balance of two oxidation states. Making it cleanly and cheaply has been a persistent headache. Manufacturers typically start from vanadium pentoxide and reduce it down to the target state, and the standard chemical routes are slow and tend to leave impurities behind.

## Where the process got stuck

The KAIST group, led by Professor Hee-Tak Kim with doctoral researcher Kyunghwa Seok, traced the slowdown to a precise point in the reaction. As vanadium is reduced toward V3.5+, the reaction moves quickly at first and then stalls near an oxidation state of about +4.1. At that point the chemical reduction runs out of steam, and pushing it the rest of the way with conventional reducing agents such as oxalic acid is both sluggish and messy, leaving residual acid that has to be cleaned out later.

Their fix was to stop treating the whole reduction as a single chemical step. In the fast early phase, ordinary chemical reduction does the work. Then, right at the +4.1 bottleneck, the team hands the job to a platinum-on-carbon catalyst that accelerates the final electron transfer and carries the fluid across the stall point. Splitting the process into a chemical stage and a catalytic stage, each used where it is strongest, is the core of the advance.

## The reported results

According to KAIST, the combined method cuts electrolyte production time to roughly one-third of the conventional duration, an improvement of about 67 percent. It also removes the oxalic acid impurity problem, yielding a cleaner electrolyte without an extra purification step. On the durability question that usually decides whether a catalyst is affordable in practice, the team reports the platinum-on-carbon catalyst held up through more than 2,500 reuse cycles without significant loss of activity, which spreads the cost of the precious metal across a large volume of product. The work appears in Advanced Energy Materials under the title "Streamlined V3.5+ Electrolyte Production by Leveraging Chemical and Catalytic Reductions."

## Why the timing matters

The context here is as interesting as the chemistry. AI data centers are pushing electricity demand up sharply and unevenly, and grid operators increasingly need storage that can shift energy across many hours rather than the roughly four-hour window where lithium is most competitive. Flow batteries, iron-air cells, and thermal storage are all competing to fill that longer-duration gap. Vanadium flow has strong technical credentials for the role, including long cycle life and inherent fire safety from its water-based chemistry, but its upfront cost has kept it a niche choice. Anything that trims the electrolyte bill attacks the technology's single biggest weakness.

It is worth being measured about what this is. The result is a manufacturing process improvement, not a new battery chemistry, and moving a benchtop method into tonne-scale electrolyte plants brings its own engineering and supply questions, including the price and availability of vanadium itself. A faster, cleaner production route is a necessary ingredient for cheaper flow batteries, not a guarantee of them.

## R&D takeaway

The lesson worth carrying out of this work is that the path to cheaper clean energy often runs through process engineering rather than headline chemistry. The vanadium flow battery is decades old and its physics are well understood. What has held it back is the unglamorous cost of making its working fluid, and the KAIST advance targets exactly that by recognizing that one reduction step was really two problems wearing the same coat. Splitting a stubborn reaction at the point where it stalls, and matching each phase to the right tool, is a pattern that shows up again and again in scaling deep tech. For anyone building in energy storage, the takeaway is to look hard at the boring middle of the manufacturing line, because that is frequently where the next cost reduction is hiding.

That is today's signal from the edge of the lab. Keep building, and keep questioning where the real cost actually sits.

The R&D Innovate desk

## Sources
- KAIST, "Streamlined V3.5+ Electrolyte Production by Leveraging Chemical and Catalytic Reductions," Advanced Energy Materials, August 5, 2026
- TechXplore, "Bringing 'giant batteries' closer to commercialization in the AI data center era," August 2026: https://techxplore.com/news/2026-08-giant-batteries-closer-commercialization-ai.html
- Bioengineer.org, "KAIST Advances Giant Batteries Toward Commercialization for AI Data Centers," August 2026: https://bioengineer.org/kaist-advances-giant-batteries-toward-commercialization-for-ai-data-centers/
