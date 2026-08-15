---
layout: post
title: "A 27-Billion-Parameter AI Just Moved Onto a Phone"
date: 2026-07-17
excerpt: "For the last few years, the deal has felt permanent. The powerful AI models live in giant data centres, humming behind racks of Nvidia chips, and your phone is just a window into them. Every clever..."
---

*R&D Innovate, Cutting Edge, 17 July 2026*

For the last few years, the deal has felt permanent. The powerful AI models live in giant data centres, humming behind racks of Nvidia chips, and your phone is just a window into them. Every clever answer travels a round trip to a server farm and back. The assumption underneath the whole industry was simple: real intelligence is too big to carry in your pocket.

A small company that spun out of Caltech just picked a hole in that assumption. On 14 July, PrismML released a model it calls Bonsai 27B, a 27.8-billion-parameter system that reads both text and images, and it runs on an ordinary iPhone. Not a stripped-down toy version in the cloud pretending to be local. The actual model, sitting on the device, generating text with no signal bars required.

## What PrismML shipped

To understand why this raised eyebrows, you need one number. A model with 27.8 billion parameters, stored the normal way at 16 bits per parameter, needs roughly 54 gigabytes of memory just to load. No phone on Earth has that to spare. That is precisely why models this size have always lived in the cloud.

Bonsai 27B loads in about 3.9 gigabytes. That is not a smaller model. It is the same 27.8 billion parameters, squeezed down by more than a factor of thirteen, small enough to fit in the working memory of a phone you can buy today (PrismML says an iPhone 15 or newer). On an iPhone 17 Pro it produces around 11 words' worth of text per second, which is comfortably faster than most people read. And it holds on to more than 90 percent of the full-size model's performance while doing it. PrismML released it free, under an open Apache 2.0 licence, and posted it publicly on Hugging Face for anyone to download.

## The trick: throwing away almost every bit

The method is where the interest really lies, because it sounds like it should not work.

Ordinarily, each of a model's parameters is a number stored with 16 bits of precision, a fine-grained decimal. PrismML's approach, a form of extreme quantisation, throws almost all of that away. In the most aggressive version, every single parameter is reduced to one bit: just a plus one or a minus one. A slightly larger version uses three possible values, minus one, zero, or plus one, and lands at 5.9 gigabytes while recovering more than 95 percent of full performance.

The intuition most engineers carry is that this level of brutal rounding should destroy a model. Strip a number down to a single bit and you have thrown away almost everything it was telling you. The reason Bonsai holds together is a technique PrismML calls group-wise scaling: the individual weights go binary, but small clusters of them keep a shared full-precision scaling factor, a volume knob that restores the overall shape of the maths even after the fine detail is gone. The company is candid about the cost. Raw factual recall, the model's memory for trivia, takes the biggest hit. Reasoning, mathematics, and coding hold up comparatively well. In other words, the part that makes a model feel smart survives; the part that makes it an encyclopaedia is what you sacrifice.

## Why on-device changes the economics

Apple appears to have noticed. PrismML's chief executive, the Caltech information theorist Babak Hassibi, confirmed to CNBC that Apple and other companies are evaluating the technology, describing the talks as early stage but adding that "things are progressing nicely." The startup is tiny, built on a seed round of about 16.25 million dollars from Caltech, Khosla Ventures, and Cerberus, which makes the interest from the most valuable company in the world all the more telling.

The reason is not novelty for its own sake. A model that runs on the device rather than the cloud changes three things at once. It costs nothing per query, because there is no server to rent. It keeps your data on your phone, because nothing has to be sent anywhere. And it works on a plane, in a tunnel, or anywhere the network does not. For a company like Apple, whose whole pitch rests on privacy and on hardware people already own, a capable model that never phones home is close to an ideal fit.

## The R&D takeaway

The lesson here is not really about phones or bits. It is about which constraint you decide to attack.

For years the entire field has been sprinting in one direction: bigger models, more parameters, larger data centres, the assumption that progress means scale and scale means somewhere else. PrismML pointed at a different question. Not "how do we build a bigger brain in the cloud?" but "how little can we spend to store the one we already have?" The answer, it turns out, was more than an order of magnitude less than everyone assumed was possible.

That is the pattern worth stealing. When a whole industry is optimising the same variable, the opening is usually in the variable nobody is looking at. While competitors race to add, sometimes the breakthrough is in what you can afford to remove.

Sometimes the smartest move is to make the thing smaller.
