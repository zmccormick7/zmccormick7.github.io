---
layout: post
title: Contextual vs. non-contextual LLM tasks
date: 2025-03-03 16:40:16
description: 
tags: 
categories: 
---

I like to think of LLM applications as falling into one of two categories: contextual tasks and non-contextual tasks. Contextual tasks require knowledge about the user or organization to complete. Non-contextual tasks do not. Let’s consider some examples of each:

Contextual tasks
- Email triage and drafting
  - Requires deep context about the user to know what’s relevant and what’s not.
- Evaluating resumes and interview performance
  - Requires context about the company and the role.
- Marketing content generation
  - Requires context about the company’s brand, marketing strategy, past campaigns, etc.
- Customer support
  - Requires context about the company and its products, and ideally context about the customer too.

Non-contextual tasks
- Document summarization
  - You don’t need to know anything about the user to properly summarize a document for them. You just need the document.
- Most structured data extraction tasks
  - Looping through a document and extracting specific types of data usually doesn’t require any additional context about the user. There are exceptions, though.
- Translation
- Spam filtering
  - Spam is spam

If you treat a contextual task as if it’s a non-contextual task, you’ll get disappointing results. Consider the marketing content generation task. If all you provide the LLM with is a short description of a product, and you ask it to generate marketing copy for it, you’ll get a very bland and generic response. It won’t be tailored to the company’s brand, and it won’t feel consistent with all of the other marketing copy the company uses. 

## Not all contextual tasks are RAG tasks
Ok so let’s say you have a contextual task. At this point, most people jump straight to RAG. That’s a mistake.

For many contextual tasks, the context the LLM needs can be provided via a fixed context string, rather than being constructed through a retrieval process for each user input. It only becomes a RAG task when the context required is highly dependent on the user input. Customer support is usually a RAG task, for example, because customers can have a wide range of issues they need help with, and responding to each one requires detailed information about specific company policies and products. You wouldn’t want to put all of that information into a single fixed prompt, because 99% of it would be irrelevant for a given user input.

What do you do if your contextual task isn’t a RAG task? 

If your task needs context but doesn't require retrieval for each input, fixed context prompts are your best bet. Think about what the LLM actually needs to know to do a good job. For marketing tasks, this might be brand guidelines, tone of voice, and examples of past successful content. For email drafting, it could be your communication style and common response patterns. You need to include enough context for the LLM to understand what makes your company unique without bloating your prompts with unnecessary information. This generally requires a bit of trial and error.

With the ever-expanding context windows of modern LLMs, the fixed context approach is becoming viable for more and more use cases over time. A good rule of thumb (that will surely be outdated in six months) is that if you can pack everything the LLM needs to know into 10k tokens (~15 pages) then you should use fixed context. It’ll be more reliable than RAG, because the context will always be there. With RAG, you’re adding one additional point of failure (the search system).

Even for RAG tasks, there’s usually some part of the context that should be provided as fixed context. For example, in the customer support use case, there will be certain high-level information that the LLM always needs. For example, a detailed description of the company and an overview of its products. This information is helpful to the LLM because it provides context to user queries and RAG search results, reducing the risk of hallucinations. Commonly requested information, like return policies, should also be provided via fixed context, to minimize the risk of a retrieval failure leading to a bad response.

So to sum it up: First, do you have a contextual task or not? If not, you have it easy. If you do have a contextual task, first add as much information as you can to a fixed context string. Then, if it doesn’t all fit, consider RAG.
