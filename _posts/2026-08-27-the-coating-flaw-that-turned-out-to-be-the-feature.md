---
layout: post
title: "The coating flaw that turned out to be the feature"
date: 2026-08-27
excerpt: "A KAIST team stopped trying to make an ultrathin polymer film smooth. The blobs it forms instead became droplet nucleation sites, and condensation heat transfer rose 5.5-fold."
category: "Materials"
catslug: "materials"
---

Almost every large thermal power station on the planet ends the same way. Steam
that has already turned the turbine arrives at a condenser, meets a bundle of
water-cooled metal tubes, gives up its latent heat, and returns to liquid so the
cycle can start again. How well that last step works sets a hard ceiling on the
efficiency of everything upstream. It is also, quietly, one of the least
optimised steps in the whole plant.

The reason is a film of water perhaps a tenth of a millimetre thick. Steam
condensing on clean metal wets it, and the condensate spreads into a continuous
sheet that every subsequent gram of steam must then conduct through. Water is a
poor conductor. The film insulates the tube from the steam it is supposed to be
cooling.

The alternative has been known since 1930, when Schmidt, Schurig and Sellschopp
showed that if the condensate beads into discrete droplets instead of spreading,
heat transfer improves by roughly an order of magnitude. Droplets grow, merge,
and roll off under gravity, repeatedly stripping the surface bare and exposing
fresh metal to the steam. Ninety-six years later, essentially no commercial
condenser runs in dropwise mode. The physics was never the obstacle. The surface
was.

## Two properties that refuse to be separated

To get dropwise condensation you need a surface water does not want to wet, and
you need it to stay that way. Every candidate coating has run into one of two
walls.

The first is thermal. A coating thick enough to be durable adds its own
resistance in series with the tube wall, and polymers conduct heat poorly enough
that a few micrometres can eat most of the gain you were chasing. The second is
more subtle, and it is the one this new work goes after.

Droplets have to start somewhere. Nucleation happens preferentially at surface
heterogeneities: pits, edges, chemical patches, anything that lowers the energy
barrier to forming the first stable cluster of liquid. So a textured or
defect-rich surface nucleates readily. But texture also pins droplets in place.
A pinned droplet keeps growing, merges with its neighbours, and eventually the
surface floods back into filmwise mode anyway.

Run the argument the other way and you get the mirror problem. A very smooth,
low-adhesion surface sheds droplets beautifully once they exist, but offers few
places for them to form, and at the low subcooling typical of a real condenser
it may barely nucleate at all.

Nucleation and shedding have historically been two ends of the same lever. Push
one and the other moves the wrong way.

## Deliberately stopping halfway

The KAIST team, led by Youngsuk Nam in mechanical engineering and Sung Gap Im in
chemical and biomolecular engineering, was working with initiated chemical vapour
deposition, or iCVD. It is a dry, solvent-free process: an initiator and a
monomer are introduced as vapour, a heated filament cracks the initiator, and
polymer grows directly on a cooled substrate. It coats conformally, works at low
temperature, and does not need the part to be dipped in anything.

Thin iCVD films do not begin life as smooth sheets. They begin as scattered
nanoscale aggregates that only later merge into continuous coverage. In coating
practice those aggregates are a defect. You grow past them.

The team stopped in that regime on purpose, and treated the aggregate density as
the design variable. Thinner films meant more of the blobs, more distinct sites
where a droplet could nucleate, and roughly three times as many droplets forming
as on thicker, smoother films of the same chemistry.

That solves half the problem and would normally create the other half, because
those same aggregates should pin what they nucleate. The second move was a
thermal post-treatment of the finished film, which reduced the adhesion holding
droplets to the surface without erasing the morphology that created them.

That is the actual result, and it is a more interesting one than the headline
number. Film thickness and surface adhesion were turned into two knobs that can
be set independently, when for decades they behaved like one.

## The number, and what sits behind it

Tested on copper tubes of the kind condensers actually use, the best coating
reached a heat transfer coefficient of about 88 kilowatts per square metre per
kelvin. That is up to roughly 5.5 times a conventional copper surface running
filmwise, and more than 50 percent better than a standard hydrophobic coating.
The work was published in Nature Communications on 16 July 2026, with the
university announcement following on 23 August.

Now the honest part.

A 5.5-fold improvement in condenser-side heat transfer is not a 5.5-fold
improvement in anything a plant operator cares about. The condenser tube is one
resistance in a series that also includes the coolant-side film, the tube wall,
and whatever has fouled onto both. Multiply the smallest resistance by 0.18 and
the total does not fall nearly as far. Translated into cycle efficiency, gains
from better condensation are real but measured in fractions of a percentage
point, which is still worth having at gigawatt scale and is not the same story
the multiplier tells.

The published materials also do not report long-duration durability data, and
durability is precisely where dropwise coatings have died before. Self-assembled
monolayers, fluoropolymers, grafted brushes and thin ceramics have all posted
excellent laboratory numbers and then degraded over weeks to months through
delamination, oxidation at the metal interface, or fouling that buries the
surface chemistry under a layer of scale. A coating whose function depends on
nanoscale aggregates a few tens of nanometres tall has, on the face of it, less
margin to lose than one that relies on bulk chemistry. That is a question the
data in front of us does not answer either way.

Two further caveats. Laboratory condensation rigs typically run pure steam;
industrial condensers leak air, and non-condensable gases at even a few percent
can dominate the resistance and swamp any surface effect. And the public
summaries do not name the polymer or give the film thicknesses in nanometres,
which are the first things anyone trying to reproduce this will need from the
paper itself.

## Why it is still worth attention

Because the mechanism generalises. The finding is not "this polymer is good". It
is that morphology and adhesion in a vapour-deposited film can be decoupled and
tuned separately, using a process that is already used industrially, runs dry,
runs cool, and coats complex geometry conformally. The same argument applies to
water harvesting from air, to dehumidification, to desalination trains where
condensation is the whole product, and to two-phase electronics cooling where
the surfaces are small enough that coating cost stops mattering.

Those smaller applications are also where this will get proven or disproven
first. A vapour chamber in a data centre accumulates operating hours quickly and
fails cheaply. A 500-megawatt condenser does neither.

## Sources

- [Rational design of polymer film morphology via structure-performance linkage for enhanced condensation performance, Nature Communications, 16 July 2026](https://www.nature.com/articles/s41467-026-75621-5)
- [KAIST uses surface defects to enhance droplet formation and removal, EurekAlert, 23 August 2026](https://www.eurekalert.org/news-releases/1140937)
- [Scientists turn tiny defects into a 5.5x heat transfer boost, ScienceDaily, 23 August 2026](https://www.sciencedaily.com/releases/2026/08/260823014940.htm)

## The R&D takeaway

The transferable result here is a decoupling, not a coating. If two performance
properties in your process have always moved together, it is worth asking
whether that coupling is physics or merely the consequence of how everyone
happens to make the material. Second, when a heat transfer result arrives as a
multiplier, ask immediately what fraction of the total resistance it sits in.
Third, before funding scale-up, ask for hours: dropwise condensation has a long
history of excellent day-one numbers, and the coatings that eventually matter
will be the ones with a year of operating data behind them.

*The R&D Innovate desk*
