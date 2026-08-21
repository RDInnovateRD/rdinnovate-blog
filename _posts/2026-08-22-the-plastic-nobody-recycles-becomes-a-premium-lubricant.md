---
layout: post
title: "The plastic nobody recycles becomes a premium lubricant"
date: 2026-08-22
excerpt: "PVC is recycled at under one per cent because its chlorine wrecks every downstream process. A mild aluminium chloride reaction turns it into synthetic base oil instead."
category: "Chemistry"
catslug: "chemistry"
---

Every plastic recycling scheme has a plastic it quietly refuses to take. For chemical recycling, that plastic is PVC.

The reason is chlorine. Polyvinyl chloride is roughly half chlorine by mass, and when you heat it, that chlorine leaves as hydrogen chloride gas. HCl corrodes reactor steel, poisons the acid-sensitive catalysts used in downstream upgrading, and contaminates the pyrolysis oil with organochlorine compounds that refiners will not accept. A few tenths of a per cent of PVC contamination is enough to make an otherwise clean stream of mixed polyolefin waste unusable. So PVC gets sorted out and sent to landfill or incineration, and the world's third most produced plastic, at something like 60 million tonnes a year, is recycled at a rate below one per cent.

A paper published in Nature on 5 August takes the opposite approach. Rather than treating chlorine as contamination to be tolerated, it uses chlorine as the chemical handle that makes the reaction work, and turns PVC into polyalphaolefin base oil, one of the more expensive products in the lubricants market.

## What the reaction does

The recipe is unglamorous. Waste PVC, a solvent, alpha-olefins, and aluminium chloride, held at 70 degrees Celsius for three hours. Out comes a viscous oil.

Aluminium chloride is a strong Lewis acid, and its role here is to pull chloride off the polymer backbone. That is the first of three transformations happening in the same pot. Stripping a chloride leaves behind a carbocation, a carbon centre short of an electron pair and highly reactive. In a conventional PVC degradation, that intermediate collapses into a conjugated polyene backbone and the material turns dark and useless. Here, the alpha-olefins in the mixture intercept it instead: the double bond of the olefin attacks the cation and forms a new carbon-carbon bond, a Friedel-Crafts-style alkylation. The third reaction, chain scission, breaks the long polymer backbone into shorter fragments.

Run together, dechlorination, alkylation and scission convert a rigid chlorinated polymer into branched hydrocarbon chains of roughly the right length and shape to behave like synthetic base oil. The authors call the product vinyl-derived polyalphaolefin, or vPAO. Conventional PAO is made by oligomerising pure alpha-olefins, usually 1-decene, derived from ethylene. The vPAO route substitutes some of that virgin feedstock with carbon that came out of a waste pipe.

The team spans three institutions with three distinct jobs: Guoliang Liu's group at Virginia Tech developed the chemistry, Ali Erdemir's group at Texas A&M ran the tribology, and William Goddard's group at Caltech did the computational work on the mechanism.

## The numbers

The products are tunable. Changing the chain length of the alpha-olefin used in the reaction shifts the kinematic viscosity of the output across a range of roughly 14.9 to 26.3 centistokes at 100 degrees Celsius. That spans a useful band of commercial base oil grades. Viscosity index, which measures how little a lubricant thins as it heats up, reached as high as 130 — respectable, and in the territory where synthetic base oils are expected to sit.

In friction testing, the oils gave coefficients of friction of about 0.08 to 0.15. That is a normal boundary-lubrication range for a base oil tested without the additive package that any finished engine oil carries.

The temperature is the quietly important number. Most chemical recycling of plastics runs hot: pyrolysis typically operates somewhere between 400 and 600 degrees Celsius, and the energy cost of getting there is a large part of why the economics rarely close. Seventy degrees is a hot water bath. Combined with a product that sells at base-oil prices rather than fuel prices, that is what makes the paper interesting as economics rather than only as chemistry.

## What it does not establish

Several things, and they matter.

The alpha-olefins are not free. They are a petrochemical feedstock produced by ethylene oligomerisation, and they are a substantial fraction of the product by mass. This process is not converting waste PVC into lubricant; it is converting waste PVC plus fresh fossil-derived olefin into lubricant. Whether that is a net environmental gain depends on the ratio, and on a full life-cycle assessment that this paper does not attempt.

Aluminium chloride is a difficult reagent at scale. It is violently moisture sensitive, and Lewis acid processes of this kind typically consume the acid rather than turning it over catalytically, which means an aqueous quench and an aluminium-bearing waste stream. Where the stripped chlorine ultimately ends up — as an aluminium chloride complex, as recoverable HCl, as something requiring disposal — is the single most important scale-up question, and the published coverage does not resolve it. Any process that liberates 30 kilograms of chlorine per 100 kilograms of feed has to answer for that chlorine.

The feedstock in a laboratory is not the feedstock in a waste stream. Real PVC arrives with plasticisers, heat stabilisers that may contain lead or calcium-zinc compounds, mineral fillers, and pigments, sometimes at tens of per cent of total mass. The tolerance of this chemistry to that mixture is untested.

The lubricant testing is preliminary. Friction coefficients from a bench tribometer are a screening result. A finished engine oil must survive oxidation stability, deposit formation, seal compatibility, and hundreds of hours of engine testing against API or ACEA specifications. None of that has been done.

Finally, the arithmetic of scale runs the wrong way. The global market for polyalphaolefin base oils is small — on the order of a million tonnes a year, against roughly 60 million tonnes of PVC produced annually. Even if this process worked perfectly and captured the entire PAO market, it would consume a small percentage of annual PVC production. This is a high-value outlet, not a disposal route. That is a legitimate thing to be, but it is not the same thing as solving PVC waste.

## Sources

- [Upcycling of polyvinyl chloride into polyalphaolefin lubricants](https://www.nature.com/articles/s41586-026-10867-z), Nature 656, 376-382 (2026), DOI 10.1038/s41586-026-10867-z
- [Turning one of the world's most difficult plastics into premium lubricant](https://phys.org/news/2026-08-world-difficult-plastics-premium-lubricant.html), Phys.org
- [Research team upcycles plastic waste into premium high-performance lubricants](https://stories.tamu.edu/news/2026/08/06/research-team-upcycles-plastic-waste-into-premium-high-performance-lubricants/), Texas A&M University
- [Transforming low-cost plastic waste into premium lubricants](https://news.engineering.tamu.edu/news/2026/08/05/transforming-low-cost-plastic-waste-into-premium-lubricants/), Texas A&M Engineering

## The R&D takeaway

The reframing is the transferable idea: chlorine went from being the reason PVC cannot be recycled to being the reactive handle that makes the chemistry work at 70 degrees rather than 500. When a contaminant blocks every process you have tried, the productive question is what that contaminant is unusually good at. For anyone funding plastics work, note also where the value sits — targeting a high-price, low-volume product rather than fuel is what lets a recycling process pay for itself, and it is also why this one cannot absorb the waste stream it draws on. Fund it as a chemistry platform, not as a waste solution, and ask for the chlorine mass balance before anything else.

*The R&D Innovate desk*
