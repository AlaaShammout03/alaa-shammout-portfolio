---
name: portfolio-voice
description: Writes and rewrites copy for Alaa's personal engineering portfolio - project case studies, section intros, headlines, and about text. Use this skill whenever working on any user-facing text on the portfolio site, including project descriptions, technical highlight bullets, case study pages, hero copy, section headers, or the about section. Also use when reviewing existing portfolio copy for generic AI phrasing. Trigger even if the request sounds like a small edit ("reword this bullet", "write the intro for the CSRNet page") - the rules below apply at every size.
---

# Portfolio Voice

Copy rules for Alaa Shammout's portfolio. The visual design is already handled.
This skill governs words only. Words are what make the site look human or not.

## The one rule everything else serves

The reader cannot tell an AI wrote this, because an AI could not have written it.
That means the copy must contain information only Alaa has: what broke, what he
tried first, what he decided, and why. Anything a model could generate from a
tech stack list alone is filler.

## Hard bans

Never write these. No exceptions.

**Never name the audience in the copy.** The words "recruiter", "recruiters",
"hiring team", "hiring manager", "employer" must not appear anywhere on the
site. Write *to* them, never *about* them. A section that helps someone
download a resume is called "Resume" - not "Fast access for recruiters".

**Never describe the site's own structure.** No "this portfolio is structured
to show...", no "these cards summarize...", no "below you'll find...", no
"a concise view of...". The reader can see the page. Describing the page to
someone looking at the page is the single strongest tell of generated copy.

**Never ship a TODO.** No "planned for a later phase", "coming soon",
"to be added later", "case study in progress". If something isn't done,
it doesn't get a label - it gets omitted until it's done.

**Never use these words and phrases:**
passionate, delightful, seamless, robust, leveraged, utilized, cutting-edge,
state-of-the-art, journey, crafting, solutions, innovative, dynamic, scalable
(unless stating an actual measured limit), best practices, deep dive,
"I'm a X who loves Y", "bringing ideas to life", "at the intersection of".

**Never use em dashes.** Use a period, a comma, or restructure.

**Never inflate a label.** If "Featured project" is on more than one or two
items it means nothing. Same for "Selected work" over everything.

## Never invent

This matters more than every style rule here.

Do not write a metric, a percentage, a latency figure, a user count, a team
size, or a timeline that Alaa has not stated. Do not guess at what a bug was.
Do not infer why a technical choice was made.

When a case study needs a detail that isn't available, stop and ask him for it.
Leave a visible `[ASK ALAA: what was the race condition that forced advisory
locking?]` marker in the draft rather than filling the gap. A draft with three
honest gaps is useful. A draft with three invented facts is a liability in an
interview, because he will be asked about them.

## Case study structure

Every project write-up follows this shape. Prose, not bullet lists. Bullets
flatten causation, and causation is the whole value.

1. **What it is** - one sentence, plain, no adjectives.
2. **The problem that made it non-trivial** - the specific thing that didn't
   work, or the constraint that ruled out the obvious approach. This is the
   opening hook and it should be concrete enough that another engineer nods.
3. **What was tried and what was chosen** - including approaches that were
   rejected and why. Rejected approaches are strong signal; they prove
   judgment rather than tutorial-following.
4. **What it cost** - the tradeoff accepted, the thing still unsolved, the
   part that would be done differently now. Never skip this. Every project
   has one, and admitting it is more credible than a clean win.
5. **Stack** - listed once, at the end, small. It supports the story; it is
   not the story.

Length: 150-300 words of real prose beats 8 bullets every time.

## Rewriting existing bullets

The current bullets state tools. Convert each to a decision.

- Before: "Implemented operating-hours validation, booking limits, conflict
  detection, and PostgreSQL advisory locking."
- After (shape, not content - get the real details from Alaa): "Two people
  hitting the same slot at the same moment both got confirmations.
  Application-level checks weren't enough because [ASK ALAA], so conflict
  detection moved into the database with advisory locks. That serializes
  writes on a slot and cost [ASK ALAA] under load."

The pattern: **symptom → why the easy fix failed → what was done → what it cost.**

## Headlines and hero

A list of four categories is not a positioning statement. "Full-stack,
embedded, cloud, and AI" tells the reader he has taken several courses.

The hero should say the one true thing that is unusual about him. Web
developers who are also comfortable on bare metal with an RTOS are genuinely
uncommon, and that specific span is the differentiator, not the breadth count.
Draft options, show them to Alaa, let him pick. Never settle on the first.

## The about section

Written in first person, past tense, concrete. No mission statement, no
adjective self-description. What he built, where, what he got good at, what
he wants to work on next. Three to five sentences. If a sentence would be
equally true of any other graduate from the same program, delete it.

## Review checklist

Before returning any copy, check each line:

- Could this sentence appear on someone else's portfolio unchanged? Cut it.
- Does it name the audience? Cut it.
- Does it describe the page? Cut it.
- Is there a number, a name, or a failure in it? Good. Keep it.
- Would an interviewer have a real follow-up question? That is the target.
- Any invented fact? Replace with `[ASK ALAA: ...]`.

## Working method

Do one project at a time. Ask the questions for that project, write it,
show it, get corrections, move on. Do not batch-generate all five. Batching
is how the whole site ends up in one uniform voice, which is the problem
this skill exists to prevent.
