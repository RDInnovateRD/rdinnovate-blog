---
layout: post
title: "A satellite megaconstellation becomes a sensor for the upper atmosphere"
date: 2026-08-15
excerpt: "Kyoto researchers turned the public orbital data of 1,200 Starlink satellites into the first two-dimensional map of thermospheric density, using tomography borrowed from medical CT scanning."
category: "Physics & Space"
catslug: "physics-space"
---

Most discussions of Starlink treat the constellation as either infrastructure or nuisance. It delivers broadband to remote places, and it clutters the night sky for astronomers. A team at Kyoto University has now shown a third role that nobody designed the system for. By reading nothing more than the publicly available orbital data of roughly 1,200 Starlink satellites, they reconstructed a two dimensional map of how dense the air is more than 480 kilometers above the ground. The satellites did not carry a new instrument. The instrument was the fleet itself.

## What the researchers measured

The region in question is the thermosphere, the electrically neutral part of the upper atmosphere that stretches from about 100 to 1,000 kilometers up. It is extremely thin, but it is not empty, and the trace of gas that remains at those altitudes matters more than its density suggests. That gas drags on every satellite passing through it. Over time the drag pulls a spacecraft into a slightly lower, slightly faster orbit. The rate of that decay is a direct readout of how much air the satellite is plowing through.

Kyoto's group, led by corresponding author Mamoru Yamamoto, took the standard tracking data that is published for objects in orbit, the two line element sets, and turned the decay of each Starlink satellite into a local density measurement. With around 1,200 satellites spread across latitudes and longitudes at an altitude near 482 kilometers, they had a dense grid of simultaneous samples rather than a single track. The work was published in the journal Earth, Planets and Space, DOI 10.1186/s40623-026-02509-5.

## Borrowing a technique from medicine

The clever step is what they did with all those individual drag measurements. A single satellite tells you the density along its own path. To go from a scatter of paths to a coherent picture, the team applied tomography, the same mathematical idea behind a medical CT scan. A CT scanner does not photograph the inside of a body. It takes many one dimensional X ray shadows from different angles and reconstructs the cross section computationally. Kyoto did the equivalent for the sky. Many overlapping density readings, taken from satellites crossing the same region on different tracks, were combined into a reconstructed field. The result is described as the first two dimensional latitude and longitude snapshot of thermospheric density built this way from satellite ephemeris data, resolved at roughly 500 kilometers altitude.

To check that the reconstruction was not an artifact of the method, the team compared it against independent observations from the European Space Agency's SWARM mission, which flies its own instruments through the same region. The two agreed, which is the kind of cross validation that separates a real measurement from a plausible looking one.

## Why an old, thin layer of gas is worth mapping

The thermosphere is not a quiet backdrop. It swells and contracts with solar activity, and when the Sun is active the added density raises drag across the entire low orbit population at once. That is not an abstract concern. In 2022 a batch of newly launched Starlink satellites was lost when a geomagnetic storm thickened the upper atmosphere more than expected and pulled them down before they could raise their orbits. As the number of objects in low orbit climbs into the tens of thousands, knowing the local air density well enough to predict where each object will be is the difference between a confident collision forecast and a guess.

Existing thermosphere models are coarse and lean heavily on sparse data. A method that produces a live, two dimensional density field from tracking information the operators already publish gives collision avoidance and reentry prediction a much firmer footing. It also feeds space weather forecasting, since the density response is one of the clearest fingerprints of how the atmosphere reacts to solar storms.

## The limits worth stating

This is a first demonstration, and the authors treat it as one. The snapshot is a two dimensional slice, not a full three dimensional, continuously updated model, and the resolution is set by how many satellites happen to be sampling a given region. The approach depends on a specific, unusually large and uniform constellation, and on the continued public availability of accurate orbital data. Yamamoto framed the result as a bridge between two communities that do not usually work together, space science and space engineering, and noted that getting more out of the idea will require deeper dialogue between them. The path from a proof of concept to an operational monitoring tool is real work, not a formality.

## The R&D takeaway

The instructive part of this story is not the atmosphere. It is the reframing of an asset. Starlink was built to move data, and every one of its satellites was already broadcasting, for free, a second stream of information in the form of how fast its orbit was decaying. That signal had been sitting in public tracking files the whole time. The advance came from asking what an existing, densely deployed system measures as a side effect, rather than from launching a dedicated mission to measure it. For anyone running R&D, the lesson is to look hard at the infrastructure already in the field. The most valuable new sensor is sometimes a large system you did not build for sensing, read in a way its designers never intended.

Until the next signal, keep building.

*The R&D Innovate desk*

## Sources

- Kyoto University via EurekAlert, "Mapping the upper atmosphere," August 2026
- Yamamoto et al., *Earth, Planets and Space*, vol. 78 (2026), DOI 10.1186/s40623-026-02509-5
- ScienceDaily, "Scientists turn Starlink into a giant scanner for Earth's upper atmosphere," August 12, 2026
- Phys.org, "Mapping the upper atmosphere with public Starlink satellite data," August 2026
