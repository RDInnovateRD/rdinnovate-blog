---
title: "Designing lipid nanoparticles around transcript size unlocks large-cargo genome editing"
date: 2026-10-08
excerpt: "Ionisable lipids engineered specifically for bulky multi-kilobase messenger RNAs prevent structural collapse and achieve potent editing in the liver, brain, and lungs."
category: "Bio"
catslug: "bio"
source:
  kind: europepmc
  id: "pmid:42806111"
  url: "https://europepmc.org/article/MED/42806111"
  title: "Lipid nanoparticles optimized for large RNA cargo and tissue targeting enhance in vivo genome editing"
  venue: "Nature biotechnology"
  published: "2026-09-28"
  authors: "Dong S et al."
  peer_reviewed: true
generated:
  provider: gemini
  model: "gemini-3.8-flash"
  at: "2026-10-07T19:44:00.769Z"
---

Lipid nanoparticles are the established workhorses of clinical RNA delivery, yet their success has largely been built around relatively modest cargoes. The messenger RNAs encoding viral antigens in commercial vaccines or short interfering RNAs used in hepatic therapies span hundreds to around two thousand nucleotides. When genetic medicines demand larger payloads, however, this delivery architecture begins to fail. Advanced genome engineering platforms—such as base editors, prime editors, and large nucleases—require transcripts that frequently exceed four or five thousand nucleotides. Packaging these extensive sequences into standard lipid formulations typically causes a precipitous drop in delivery potency, forcing developers to accept poor expression, escalate dosages to toxic thresholds, or split molecular machinery across multiple vectors.

The unspoken assumption behind traditional nanoparticle screening has been that an ionisable lipid capable of compacting a short transcript will behave similarly when handed a longer one. Formulators have historically treated cargo size as an incidental variable rather than a fundamental design parameter. A recent study published in *Nature Biotechnology* challenges this approach by establishing transcript length as an essential screening constraint, revealing why benchmark lipid formulations falter when loaded with outsized genetic payloads and demonstrating a chemical solution tailored to multi-kilobase transcripts.

## When bulky transcripts distort nanoparticle architecture

To understand why conventional formulations struggle with large transcripts, it helps to examine how an ionisable lipid nanoparticle functions at a molecular level. Under acidic processing conditions during formulation, the ionisable headgroups become protonated, acquiring a positive charge that binds electrostatically to the negatively charged phosphate backbone of the RNA. As the mixture is dialysed to neutral physiological pH, the lipid charge is neutralised, packing the genetic cargo into an electron-dense, hydrophobic core enveloped by helper phospholipids, cholesterol, and polyethylene glycol-lipid conjugates.

Upon entering a target cell via endocytosis, the particle encounters the naturally acidic environment of the endosome. This drop in pH re-protonates the ionisable lipid. In an ideal delivery event, this transition drives the lipids to transition into an inverted-hexagonal non-lamellar phase. This structural arrangement is fusogenic: it disrupts the endosomal membrane bilayer, allowing the nucleic acid payload to escape intact into the cytoplasm where cellular ribosomes can translate it into protein.

However, when an RNA transcript stretches across several kilobases, its conformational freedom and high steric bulk disrupt this self-assembly process. With standard benchmark lipids—such as ALC-0315, familiar from widespread commercial vaccines, or LP-01—the packing geometry deteriorates as cargo length increases. Instead of maintaining an ordered interior capable of flipping into a clean inverted-hexagonal phase at low pH, the lipid-RNA complex becomes structurally disordered. This loss of physical order impairs the pH-dependent membrane destabilisation that makes endosomal escape possible, trapping the bulk of the genetic payload inside cellular vesicles where it is degraded.

## Screening directly for large-cargo stability

Rather than screening candidate molecules against conventional, short reporter transcripts, the authors adopted a screening strategy that explicitly penalised cargo sensitivity. They designed a combinatorial library of 384 distinct ionisable lipids and evaluated their encapsulation and delivery capabilities using a 5.7-kilobase reporter mRNA encoding an adenine base editor coupled to NanoLuciferase (ABE-NanoLuc). 

By screening against a transcript nearly three times the length of standard mRNA benchmarks, the team filtered out compounds that work only under low-molecular-weight conditions. This process uncovered a class of lipids tailored for large payloads, led by a top-performing compound designated LC-1.

Mechanistic characterisation confirmed that LC-1 resolves the structural collapse observed in legacy formulations. Unlike benchmark lipids, LC-1 forms substantially stronger electrostatic and hydrophobic associations with long RNA chains. Crucially, as the size of the enclosed transcript increases, nanoparticles formulated with LC-1 maintain an ordered, fusogenic inverted-hexagonal organisation. When exposed to an acidic environment matching the endosome, LC-1 retains sharp pH-responsive membrane disruption rather than degrading into a disordered, inactive state. By stabilising the internal architecture of the particle around lengthy RNA chains, the lipid preserves high endosomal escape efficiency regardless of cargo size.

## Potent in vivo editing across multiple organ systems

The functional payoff of this structural stabilisation becomes apparent when tested in vivo. Delivering genome editing machinery directly to non-hepatic tissues has historically presented a steep barrier for non-viral vectors, particularly when large base editors or Cas9 enzymes are involved. 

In comparative animal studies, nanoparticles formulated with LC-1 demonstrated editing efficiencies that outstripped industry benchmarks across three distinct routes of administration:

* **Systemic intravenous delivery:** Targeting hepatic tissue, LC-1 delivered Cas9-mediated gene knockout at efficiencies reaching up to 79% in the liver. 
* **Intrathecal delivery:** Administered directly into the cerebrospinal fluid, LC-1 achieved up to 48% Cas9 knockout in brain tissue.
* **Intratracheal delivery:** Inhaled or instilled delivery to the respiratory tract drove up to 27% Cas9 knockout in the lung.

Across these diverse administrative routes, LC-1 delivered up to fourfold higher editing efficiency than both LP-01 and ALC-0315. In parallel reporter trials using the adenine base editor construct, LC-1 consistently yielded superior base-correction rates across the liver, brain, and lung compared to both benchmark formulations.

Beyond proof-of-concept reporters, the researchers applied LC-1 to therapeutically relevant genetic targets. The platform successfully supported base editing of *PCSK9*, an established therapeutic target in the liver for cholesterol regulation. It also achieved targeted base editing in models of *CFTR* carrying the R55X nonsense mutation associated with cystic fibrosis in pulmonary tissues, as well as the *Ube3a-ATS* locus implicated in Angelman syndrome within the central nervous system. Demonstrating effective base editing at these distinct sites highlights the broad applicability of the vehicle when paired with anatomically targeted delivery routes.

## Boundaries and development horizons

While these results address a persistent bottleneck in non-viral delivery, translating these findings into clinical assets requires careful positioning. The reported data demonstrates delivery of Cas9 and adenine base editor transcripts; it does not automatically resolve delivery challenges for even larger macromolecular assemblies, such as multi-component prime editing systems or prime editors coupled to large reverse transcriptases and complex recombinases, which push transcript requirements further still. 

Additionally, the physical stability of the formulation during manufacturing scale-up, long-term storage shelf life, and the immunogenicity profile of LC-1 upon repeat dosing remain standard developmental hurdles that must be evaluated beyond preclinical models. Nevertheless, identifying the loss of the inverted-hexagonal phase as the core point of failure provides a clear physicochemical roadmap for future vehicle optimisation.

## Sources

- [Lipid nanoparticles optimized for large RNA cargo and tissue targeting enhance in vivo genome editing](https://europepmc.org/article/MED/42806111), Dong S et al., Nature biotechnology, 2026-09-28
- [Publisher record (DOI)](https://doi.org/10.1038/s41587-026-03298-8)

## The R&D takeaway

For teams developing mRNA therapeutics and non-viral genetic medicines, this work demonstrates that carrier discovery cannot be decoupled from payload length; screening delivery vehicles against short surrogate transcripts creates systemic blind spots that eliminate candidates best suited for multi-kilobase editors. R&D leaders should integrate actual therapeutic cargo lengths into early-stage combinatorial lipid discovery pipelines and use biophysical assays that assess inverted-hexagonal phase retention as primary go/no-go selection criteria.

*The R&D Innovate desk*
