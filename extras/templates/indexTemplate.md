---
title: The Pasta Madness
draft: false
tags:
recurringTemplate: true
recurringTemplateName: indexTemplate
---

Welcome to the Madness.  The Pasta Madness.

Since taking a cooking class with my boyfriend where we learned to make fresh pasta from scratch, I have been rendered insane and want to master making pasta, in all its shapes and sauces.  And there's a LOT of shapes and sauces.  And so many combinations of shapes and sauces.

This blog is where I hold onto my thin grip of reality and catalog my notes on pasta making.  Long noodles, short noodles, hand shaped, stuffed.  Gnocchi made with potatoes, gnocchi made with ricotta, gnocchi made with plantains.

[[Tools]] for making pasta

## Doughs

[[Dough Notes]]
[[Flours]]
[[Herbs, Spices and Other Additions]]
[[Liquids]]
[[Making the Dough]]

## Shapes

## Fillings

## Sauces and Dishes

```dataview
LIST 
FROM "content/4 Sauces & Dishes"
```

<%*
	const dv = app.plugins.plugins["dataview"].api;
	const query = `LIST 
FROM "content/4 Sauces & Dishes"`
	let out = await dv.queryMarkdown(query)
	tR += out.value
%>