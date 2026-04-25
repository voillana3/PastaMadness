---
title: The Pasta Madness
tags:
recurringTemplate: true
recurringTemplateName: indexTemplate
---

Welcome to the Madness.  The Pasta Madness.

Since taking a cooking class with my boyfriend where we learned to make fresh pasta from scratch, I have been rendered insane and want to master making pasta, in all its shapes and sauces.  And there's a LOT of shapes and sauces.  And so many combinations of shapes and sauces.

This blog is where I hold onto my thin grip of reality and catalog my notes on pasta making.  Long noodles, short noodles, hand shaped, stuffed.  Gnocchi made with potatoes, gnocchi made with ricotta, gnocchi made with plantains.

## Basics

[Tools](Tools.md) A guide to different tools for making pasta

[Flours](Flours.md) Different flours that can be used

[Liquids](Liquids.md) Different liquids that can be used

[Herbs, Spices and Other Additions](Herbs,%20Spices%20and%20Other%20Additions.md) Additional ingredients that can be added to pasta dough

[Dough Notes](Dough%20Notes.md) General notes on how different ingredients can affect the final dough

[Making the Dough](content/0%20Basics/Making%20the%20Dough.md) A great video guide on making pasta dough

## Doughs

<%*
	const dv1 = app.plugins.plugins["dataview"].api;
	const query1 = `LIST 
FROM "content/1 Doughs"`
	let out1 = await dv1.queryMarkdown(query1)
	tR += out1.value
%>

## Shapes

<%*
	const dv2 = app.plugins.plugins["dataview"].api;
	const query2 = `LIST 
FROM "content/2 Shapes"`
	let out2 = await dv2.queryMarkdown(query2)
	tR += out2.value
%>

## Fillings

<%*
	const dv3 = app.plugins.plugins["dataview"].api;
	const query3 = `LIST 
FROM "content/3 Fillings"`
	let out3 = await dv3.queryMarkdown(query3)
	tR += out3.value
%>

## Sauces and Dishes

<%*
	const dv4 = app.plugins.plugins["dataview"].api;
	const query4 = `LIST 
FROM "content/4 Sauces & Dishes"`
	let out4 = await dv4.queryMarkdown(query4)
	tR += out4.value
%>