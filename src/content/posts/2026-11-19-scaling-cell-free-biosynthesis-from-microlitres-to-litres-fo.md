---
title: "Scaling cell-free biosynthesis from microlitres to litres for industrial chemical production"
date: 2026-11-19
excerpt: "A fully in vitro architecture maps, optimises, and scales the four-step enzymatic synthesis of 1,2,4-butanetriol from 10 microlitres to 1 litre at low reagent cost."
category: "Bio"
catslug: "bio"
source:
  kind: europepmc
  id: "pmid:43044918"
  url: "https://europepmc.org/article/MED/43044918"
  title: "Microliter to liter scale engineering of cell-free 1,2,4-butanetriol biosynthesis"
  venue: "Metabolic engineering"
  published: "2026-11-17"
  authors: "Rasor BJ et al."
  peer_reviewed: true
generated:
  provider: gemini
  model: "gemini-3.6-flash"
  at: "2026-11-19T00:04:47.180Z"
---

## Bypassing cellular constraints in metabolic engineering

Traditional biomanufacturing relies on living micro-organisms to convert biological feedstocks into industrial chemicals, presenting a sustainable alternative to conventional petrochemical processes by operating at milder temperatures and atmospheric pressures. However, relying on living host cells introduces substantial technical hurdles into process development. Engineering living microbes requires multi-step genetic modifications, complex gene regulation, and tedious strain selection to balance target chemical production against host survival. Living organisms direct a significant fraction of available carbon and metabolic energy toward cell growth, cellular maintenance, and off-target pathway activity. Furthermore, many toxic chemical intermediates or target molecules inhibit host metabolism, severely limiting achievable product yields and slowing down the iterative engineering cycles needed to develop viable commercial strains.

Cell-free expression and enzymatic systems eliminate the living host entirely. By using crude cell extracts or purified enzyme mixtures, cell-free biomanufacturing operates outside the boundaries of cellular physiology. This acellular environment allows researchers to directly manipulate reaction conditions, adjust individual enzyme ratios, and bypass membrane transport limitations without needing to keep micro-organisms alive. Despite these advantages, cell-free systems have historically been restricted to early-stage laboratory prototyping and small-scale testing. Industry has typically viewed in vitro reactions as diagnostic tools—useful for rapidly testing enzyme variants in microlitre drops, but too expensive, unstable, or difficult to manage for large-scale chemical manufacturing. Proving that cell-free synthesis can move beyond high-throughput screening to produce meaningful material volumes at manageable costs requires demonstrating consistent scale-up across several orders of magnitude.

## Systematic enzyme selection and statistical reaction tuning

To test whether a purely in vitro system can serve as a scalable manufacturing architecture, researchers established an end-to-end cell-free platform for the synthesis of 1,2,4-butanetriol. This compound is a high-value industrial platform chemical used in various applications, including the synthesis of energetic materials, pharmaceuticals, and specialised polymers. The biomanufacturing pathway converting xylose—an abundant five-carbon plant sugar—into 1,2,4-butanetriol involves a four-step cascade requiring four distinct enzymatic transformations.

Rather than relying on a single fixed set of enzymes, the research team systematically explored the broader biological design space. They gathered and screened approximately 150 candidate enzyme homologs across all four chemical reactions in the pathway. By measuring the catalytic performance of these variants in small-volume cell-free reactions, they identified highly active enzyme candidates for each individual transformation step. This strategy ensured that the synthetic pathway was built using the most efficient enzyme combinations available, avoiding the kinetic bottlenecks that frequently slow down multi-step metabolic pathways in living host cells.

Once the optimal enzyme components were selected, the next challenge involved configuring the chemical environment in which they operate. Multi-step enzymatic pathways require precise balances of substrates, cofactors, salts, and buffering agents to maintain high reaction rates over extended operational periods. To optimize these complex reaction mixtures, the team applied statistical Design of Experiments methodologies. Rather than adjusting one parameter at a time, statistical experiment design systematically varies multiple reaction components simultaneously to map multi-variable interactions. This approach allowed the team to pinpoint reaction formulations tuned specifically for two critical objectives: maximising total chemical output (titer) and minimising overall reagent costs.

## Five-order-of-magnitude scale-up and process performance

With optimised enzyme combinations and cost-effective reaction formulations established at the microlitre level, the architecture was evaluated across progressively larger reaction volumes. The team scaled the reaction directly from initial 10-microlitre screening volumes to a full 1-litre scale, representing a linear expansion across five orders of magnitude.

The performance metrics achieved at the 1-litre reaction scale demonstrated that cell-free systems can maintain high kinetic efficiency when expanded to preparative volumes. The 1-litre cell-free reaction achieved a peak volumetric productivity of approximately 1 gram per litre per hour. Over the duration of the batch run, the system produced more than 13 grams of 1,2,4-butanetriol in the single 1-litre reaction vessel. Crucially, process economics were tracked alongside technical yields: the optimised minimum-cost reaction formulation reduced total reagent costs to just 3.00 US dollars per litre.

These results show that in vitro biomanufacturing can operate at preparative chemical scales without incurring prohibitive reagent expenses. However, moving this approach closer to industrial deployment reveals important operational boundaries and engineering challenges that remain to be addressed:

- Operating mode: The current findings reflect batch reaction conditions. Industrial chemical production typically demands continuous or fed-batch operation to authorise continuous volumetric throughput and maintain peak reaction kinetics over extended running times.
- Downstream processing: The reported metrics focus on in-vessel chemical generation. Practical manufacturing requires integrating online product recovery and purification systems to isolate 1,2,4-butanetriol from residual substrates, enzyme proteins, and reaction buffers without degrading product yield.
- Upstream enzyme supply: While the cell-free reaction itself incurs low direct reagent costs of 3.00 US dollars per litre, the overall economic model relies on the bulk preparation and stability of the underlying cell extracts and recombinant enzymes. Scaling total supply chains will require cost-efficient, standardised enzyme expression protocols.
- Bioreactor integration: Translating benchtop 1-litre liquid vessels into industrial chemical plant hardware requires characterising fluid mixing dynamics, gas transfer, and thermal management in uncelled bio-catalytic fluids at larger scales.

## Sources

- [Microliter to liter scale engineering of cell-free 1,2,4-butanetriol biosynthesis](https://europepmc.org/article/MED/43044918), Rasor BJ et al., Metabolic engineering, 2026-11-17
- [Publisher record (DOI)](https://doi.org/10.1016/j.ymben.2026.102591)

## The R&D takeaway

This work demonstrates that cell-free biomanufacturing can transition from a rapid screening tool into a scalable production architecture capable of operating across five orders of magnitude. For R&D leaders, this shift highlights the viability of using fully in vitro systems to bypass host strain development bottlenecks and directly scale complex multi-step chemical syntheses. Strategic planning should consider cell-free platforms not merely as analytical screening tools, but as potential alternatives for pilot-scale production of high-value industrial chemicals.

*The R&D Innovate desk*
