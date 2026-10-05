---
title: "Scaling in-process security to ten thousand compartments with CHERI"
date: 2026-10-06
excerpt: "A linkage-based model uses CHERI architectural capabilities to run thousands of isolated compartments inside a single process with minimal software changes."
category: "Compute & AI"
catslug: "compute-ai"
source:
  kind: arxiv
  id: "arxiv:2609.36731"
  url: "https://arxiv.org/abs/2609.36731"
  title: "Efficient Linkage-Based Compartmentalization on CHERI"
  venue: "arXiv preprint"
  published: "2026-09-29"
  authors: "Dapeng Gao et al."
  peer_reviewed: false
generated:
  provider: gemini
  model: "gemini-3.7-flash"
  at: "2026-10-05T19:09:33.184Z"
---

Software security has long struggled with a fundamental trade-off between isolation and performance. Modern software systems are composed of hundreds of third-party libraries, external dependencies, and legacy modules linked into a single executable. If an attacker discovers a memory corruption flaw in any one of these components, the entire process address space is typically compromised. Operating systems provide process-level isolation through virtual memory page tables, but creating and context-switching between separate processes imposes heavy performance and memory overheads. Hardware-assisted mechanisms within a single process have historically offered little relief; features like Intel Memory Protection Keys (MPK) provide hardware domain isolation but are restricted to a maximum of 16 concurrent protection domains. As a consequence, complex applications like web browsers remain largely exposed internally, unable to isolate individual libraries without prohibitive engineering effort and execution latency.

Capability Hardware Enhanced RISC Instructions (CHERI) provides a different architectural foundation. By extending hardware pointers with unforgeable bounds, permissions, and validity tags, CHERI enforces spatial and temporal memory safety directly in hardware. A recent study reported in an arXiv preprint, which has not yet undergone formal peer review, demonstrates how CHERI capabilities can be harnessed to deliver fine-grained, in-process compartmentalisation at a scale previously out of reach, supporting more than 10,000 isolated compartments on desktop systems.

## Automated boundaries at the dynamic linker

The core obstacle to compartmentalising existing software is the sheer volume of manual refactoring typically required. Developers must redesign interfaces, write remote procedure call stubs, and manage cross-boundary memory copies. The researchers address this by introducing a linkage-based compartmentalisation model that operates along the boundaries of existing dynamic libraries.

Because CHERI hardware capabilities can precisely restrict pointer access rights within a single virtual address space, a dynamic linker and compiler toolchain can assign distinct capability sets to individual shared objects. When one library calls a function in another, the transition crosses a compartmental boundary where caller permissions are restricted and callee permissions are granted. This linkage-level enforcement functions in a "push-button" manner: standard C and C++ libraries can be compartmentalised as they are loaded, without rewriting source code. 

For cases where a single large library requires internal subdivision, the framework allows developers to apply custom policies to create sub-library compartments. Because all compartments coexist within a single address space, sharing data does not require inter-process serialisation or expensive page-table manipulation. Instead, memory capabilities can be delegated directly across compartment boundaries, allowing safe zero-copy data passing while retaining strict access controls.

## Validating compatibility across thousands of applications

To test whether automated linkage compartmentalisation holds up against real-world software complexity, the authors evaluated the toolchain across thousands of standard UNIX and desktop C and C++ programs. In the vast majority of cases, applications compiled and ran inside compartmentalised environments without any source modifications. 

The primary test of scale came from deploying the architecture on Chromium, one of the largest and most intricate open-source codebases in existence. Under standard execution, Chromium relies on multiple separate operating system processes to isolate rendering tabs, but individual browser processes still link hundreds of dynamic libraries without internal barriers. Under the proposed model, Chromium regularly hosted more than 500 active compartments within a single process. This represents an order-of-magnitude leap beyond the 16-domain ceiling imposed by page-key hardware like MPK.

The only software component in their testing suite that demanded manual code changes was the V8 JavaScript engine. Dynamic runtimes with garbage collectors and just-in-time (JIT) compilation routinely generate and inspect code at runtime, which conflicts with static pointer delegation. Nevertheless, adapting V8 required modifying fewer than 300 lines of source code related specifically to its garbage collection and JIT memory management. The remainder of the runtime operated within the single-address-space capability model without alteration.

## Cross-platform hardware validation and observability

Security architectures designed purely in simulation often stumble against the physical constraints of real silicon. To prove generalisability, the researchers implemented and evaluated the linkage-based model across two distinct CHERI-extended instruction set architectures: Armv8-A and RISC-V. 

Hardware experiments were conducted on Arm's experimental superscalar Morello system as well as Codasip's X730, which represents the first commercial CHERI-enabled RISC-V application processor core (an in-order, dual-issue design). Across both platforms, the single-address-space design maintained consistent semantics, confirming that the linkage model does not rely on proprietary processor quirks or single-vendor extensions.

Operating thousands of compartments inside one process introduces new engineering challenges for debugging and system introspection. Traditional debugging tools assume a binary division between kernel space and a uniform user space. The authors developed compartment-aware debugging and visualisation tools that trace capability transfers, identify cross-boundary access violations, and map inter-compartment memory delegation in real time. This operational support makes it feasible for software teams to observe compartmental behaviour and diagnose faults without stripping out isolation layers during development.

## Implementation boundaries and remaining questions

While the linkage model demonstrates that high-density compartmentalisation is technically viable, important operational boundaries remain. First, because this work is presented in a preprint, its performance metrics and security guarantees await independent verification through the peer-review process. 

Second, the architecture relies entirely on hardware CHERI support. While commercial RISC-V IP cores such as the Codasip X730 are now appearing and prototype silicon like Arm Morello has enabled research, mainstream commercial processors in volume desktop and server deployments do not yet incorporate CHERI capability units. Widespread adoption remains contingent on tier-one silicon vendors committing to hardware capability standards in future mass-market roadmaps.

Third, while library-boundary compartmentalisation effectively stops lateral traversal following a memory safety breach, it does not automatically resolve logic-level vulnerabilities. If a library contains an intended application programming interface (API) that can be tricked into returning sensitive data through valid capability handles, linkage isolation alone cannot prevent the misuse. Software architectures must still enforce semantic input validation at compartmental boundaries.

## Sources

- [Efficient Linkage-Based Compartmentalization on CHERI](https://arxiv.org/abs/2609.36731), Dapeng Gao et al., arXiv preprint, not yet peer reviewed, 2026-09-29
- [Publisher record (DOI)](https://doi.org/10.1145/3830454.3846528)

## The R&D takeaway

For engineering leaders designing secure systems, this work demonstrates that fine-grained software compartmentalisation no longer requires expensive multi-process architectures or extensive code refactoring. Research teams targeting future high-assurance systems should evaluate CHERI-enabled toolchains to isolate third-party dependencies at dynamic library boundaries. Hardware and platform strategists should factor architectural capability support into long-term processor selection, as capability-based isolation significantly outscales traditional memory protection key mechanisms.

*The R&D Innovate desk*
