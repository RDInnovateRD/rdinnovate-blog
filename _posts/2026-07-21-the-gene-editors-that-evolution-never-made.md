---
layout: post
title: "The Gene Editors That Evolution Never Made"
date: 2026-07-21
excerpt: "For a decade, the frontier of gene editing has been a search for better scissors that already exist. Researchers combed hot springs, cow guts, and ocean sediment for natural proteins that cut DNA i..."
---

*R&D Innovate, Cutting Edge, 21 July 2026*

For a decade, the frontier of gene editing has been a search for better scissors that already exist. Researchers combed hot springs, cow guts, and ocean sediment for natural proteins that cut DNA in useful ways, then adapted whatever nature happened to leave lying around. CRISPR-Cas9 came out of a bacterial immune system. Its smaller cousins came from other microbes doing their own ancient business. The tools were found, not designed.

A team at the University of California, Berkeley, has just shown a different way to build one. Working in Jennifer Doudna's lab and publishing in *Science*, the group used an artificial intelligence model to design working gene-editing enzymes from scratch. The proteins they made do not exist anywhere in nature, and in living human cells some of them cut better than the natural enzyme they were modeled on.

## What the Berkeley team built

The starting point was a protein called TnpB, a compact RNA-guided nuclease that is widely regarded as an evolutionary ancestor of the Cas12 editors. TnpB is interesting for a practical reason. At roughly 400 amino acids it is about a third the size of Cas9, small enough to fit inside the delivery vehicles used to carry gene therapies into the body. The catch is that natural TnpB is not especially efficient, and improving it by hand has been slow going.

Rather than hunt for a better version in the wild, the team generated new ones computationally. They called the results SynTnpBs, synthetic TnpBs. When screened across bacterial, plant, and human cells, many of the designs retained the activity of the natural enzyme, and some surpassed it while maintaining their targeting specificity. That last point matters. It is easy to make an editor that cuts more; the hard part is making one that cuts more without also cutting in the wrong places.

## How the AI worked

The method leans on a model called ESM Inverse Folding, or ESM-IF1, developed at Meta. It is worth understanding what "inverse" means here. A tool like AlphaFold reads an amino acid sequence and predicts the 3D shape it will fold into. Inverse folding runs the problem backward. It takes a desired 3D structure as the input and proposes amino acid sequences that would fold into that shape. The Berkeley group fed it the known structure of TnpB and asked, in effect, what other sequences could build the same machine.

Left unconstrained, that question produces mostly junk, because a protein has to do more than hold a shape. It has to grip RNA, recognize DNA, and flex at the right moments. So the team layered evolution-informed constraints on top of the model, guiding it to preserve the residues that natural selection had clearly protected while rewriting the rest.

## Why the divergence numbers matter

The striking part of the result is how far the designs drifted from the original. In the SynTnpBs, the DNA-interacting regions differed from natural TnpB by about 17 percent, and the RNA-interacting regions by about 28 percent. Earlier AI approaches to editor design had produced proteins that were more than 99 percent identical to their natural templates, which is to say barely changed at all.

That gap is the whole story. A protein that is 99 percent identical is a tweak. A functional protein that is a quarter rewritten in its most sensitive region is a demonstration that the design space is far larger than evolution ever explored, and that a model can navigate it without breaking the machine. As the authors put it, structure and evolution-guided design can generate functional genome-editing proteins with substantially different sequences.

Doudna framed the difficulty plainly in interviews around the paper. "Once you start tweaking things, you realize pretty quickly that while you can make changes, they ultimately produce something that isn't functional." Getting past that wall, at scale, is the advance.

## Where this points

The near-term prize is speed and customization. Isabel Esain-Garcia, a postdoctoral researcher on the study, pointed to personalized medicine as the target: "when we think about personalized medicine and how we have to rapidly generate new genome-editing enzymes tailored to different diseases, this type of approach where there are a lot of custom properties that can be designed quickly would be beneficial." A model that outputs viable editors on demand turns a years-long search into a design cycle.

There is a longer arc too. If small, efficient, novel editors can be generated to order, the bottleneck in gene therapy shifts away from finding a tool that works and toward deciding what you want it to do.

## The R&D takeaway

The reflex in a mature field is to keep prospecting the known catalog, tuning what already exists. This result argues for the opposite move. The catalog nature handed us is not the full set of what is possible; it is only the subset that happened to evolve. When a design tool can produce a working answer that sits 25 percent away from anything in that catalog, the useful question changes from "what has nature already made?" to "what could exist that nature simply never got around to building?"

Most fields have a catalog they treat as the boundary of the possible. It is usually just the boundary of what has been found so far.

Dare to dream. Design the thing that was never found.

---

*Sources: "Design of highly functional CRISPR-associated TnpB genome editors," P. Skopintsev, I. Esain-Garcia, J. A. Doudna et al., UC Berkeley and the Innovative Genomics Institute, published in Science, 17 July 2026 (DOI: 10.1126/science.aed6123); "CRISPR gets a power boost from AI-designed 'molecular scissors'," Nature news, 16 July 2026; reporting via C&EN, AZoLifeSciences, and Phys.org, July 2026.*
