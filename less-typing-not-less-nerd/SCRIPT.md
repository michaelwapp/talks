# Less Typing, Not Less Nerd — talk script

Java and Friends, Vienna · English · 45 minutes: about 33 minutes of talk, then Q&A, with a few minutes of buffer.

The talk is built on one model, **Define · Build · Trust · Run**, where Build is the agents' part and the one that got cheap, and the reasoning behind its structure is in [RESEARCH.md](RESEARCH.md).

This is the spoken version of the deck, slide by slide. Use it to rehearse, not to read on stage. Memorise the opening, the closing and the bridge lines; talk the rest from the slides.

**How to read this script**
- `→` means press the right arrow. On agent slides each press plays one beat, such as typing a prompt or letting the agent run.
- *Italic lines in brackets* are stage directions.
- About 130 words a minute is a calm speaking pace. The spoken text here is about 2,950 words, or 22–23 minutes. Agent playback adds about 6–7 minutes, the audience moments about 2, and the stories you tell in your own words about 2–3. That lands at roughly 33–35 minutes, leaving about ten minutes for questions, so time your first rehearsal and use the cut order at the end if it runs long.

---

## The pitch in 30 seconds

Agents made writing code cheap. They didn't make it cheap to know *what* to build, to trust what they built, or to run it afterwards. I went from full-stack developer to CTO of a construction software company. Today I spend most of my time talking to customers and writing precise definitions, then orchestrating agents and the quality gates that let me trust them. This talk follows one real customer request from a ticket to production. It shows where the nerd went: building is the agents' part now, and the nerd moved to the three places around it. Define what to build, precisely. Trust what agents build, through quality gates. And run what we ship, ourselves.

## Abstract (for the organisers)

**Less Typing, Not Less Nerd: From Full-Stack Developer to Customer-Facing Orchestrator**

I started as a Java developer and worked my way through full-stack roles. Today, as CTO of BauTask, a construction software company, I write less code than ever, and I'm more technical than ever.

Agents build exactly what you define. That makes the definition the job, and writing a good one takes knowing the system inside out. But definitions alone aren't enough: you can only orchestrate what you can trust. So I invested in the unglamorous parts: a fast test suite, quality gates, written rules for agents. And building got cheap, but running didn't: we self-host on European infrastructure for GDPR, and that's still daily work.

This talk follows one real customer request from a ticket to production, with scripted agent sessions along the way. You'll see what my week looks like now, what still needs a human, and what I'd tell a developer early in their career.

You'll leave with:
- A five-line requirement format you can try on your next ticket
- Why quality gates matter more with agents, not less
- An honest view of what isn't solved yet

---

## Before you start (walk-in)

**Slide 1 · Cover**
*[On screen while people arrive. Presenter view open on the laptop with `P`. Timer ready.]*

*[When the host hands over, don't introduce yourself. Press `→` and start immediately.]*

---

## 1 · Cold open and the model · 0:00–3:30

**Slide 2 · "One sentence from a customer."** *(slide first, then split view)*

A ticket from our customer success team. One customer, one sentence:

"We'd like a weekly overview of missing timesheets for every employee."

Let's do what everybody does now. Let's give it to an agent.

`→` *[The agent opens.]*

`→` *[The prompt types itself. Let it finish.]*

`→` *[The agent runs. Narrate as if you don't know the result.]*

It's reading the schema… employees, timesheets. It's writing the report: every employee, Monday to Friday, without a timesheet. A route, a view. Tests pass. Twelve of them. Done. It's live, missing days in red. No questions asked.

**Slide 3 · "Tests pass. It looks right."**

That took about forty seconds. The tests pass, the code is clean, and it does exactly what the ticket says.

So, quick show of hands. Who would merge this?

*[Wait. Some hands will go up.]*

Thank you for your honesty. So would I have, a few years ago.

**Slide 4 · "Missing? She was on holiday."** *(the agent's week grid, red everywhere)*

Because look at what it built. Red everywhere. Anna: missing, all week.

*[Pause.]*

"Missing? She was on holiday."

`→` *[the real reasons appear on the grid]*

*[Let the room react.]*

Anna is on holiday. Carla is sick. Ben and Emil never work Fridays. Of nine "missing", two are real. The agent doesn't know about leave, or sick notes, or part-time, or the company holiday.

`→` *[the line under the title appears]* And it built one weekly list, for one customer, when the office checks a day, payroll checks a month, and every other customer has the same problem. The agent built the wrong thing, and it built it perfectly.

**Slide 5 · "Agents build exactly what you define."**

That's the whole talk in one line. Agents build exactly what you define. So the definition is now the job. And writing a good definition takes knowing the system inside out.

I'm Michael. This is the story of how my job moved from typing code to writing that definition, and why that made me more of a nerd, not less.

And to be clear from the start: this isn't a hype talk, and it isn't a doom talk. It's what actually changed in my job.

**Slide 6 · "The nerd didn't leave. It moved."**

Here's the short version. Every feature still goes through four steps.

Define: what to build, precisely enough that an agent can't misread it.

Build: that's the agents' part now. It takes minutes, not weeks. That's why it's drawn dashed: it's the part that got cheap.

Trust: that what the agents built is right, without reading every line.

Run: everything we ship still has to be hosted, patched, secured and paid for.

Building got cheap. Everything around it didn't. That's where the nerd went: to the three solid boxes. Once we get to the real work, a little signpost in the top corner shows which part we're in.

> **Bridge:** "But first, let me tell you who's talking."

---

## 2 · Who's talking · 3:30–6:00

**Slide 7 · `/whoami --history`** *(agent maximized)*

`→` *[types `/whoami --history`]*

`→` *[output streams]*

I did my master's in computer science here at TU Wien. So, like most of you, I was raised on Java.

*[Pause. Expect nods.]*

I started working in 2014 at Bosch, typing internal desktop tools in Java. Then RISE, where I typed mobile apps for Android and iOS. Then neoom, where I became a full-stack developer: Ruby on Rails, React and React Native, plus a lot of TypeScript, bash and infrastructure. Then I went self-employed, and I started typing less and talking to clients more. And in 2025 I joined BauTask, a construction software company. They hired me to review their code and help merge their backlog.

And the last line is the honest summary. Code typed per week: going down. Requirements written per week: going up.

**Slide 8 · "Same job title. Different week."**

Here's what that looks like in a week.

`→` Two years ago: about half my week was writing code, a quarter reviewing, and the rest with customers.

`→` Today: the biggest block is customers and requirements, then steering agents, then about twenty percent testing and verifying by hand: does it actually work, on the device, for the user?

`→` And code I type myself? Zero. Reading code line by line? Maybe two percent.

And that customer time isn't overhead. That's where I get the input: what to build next, and what we should be doing better.

Same job title. Completely different week.

The moment I noticed was in 2024. I connected Claude to my codebase through an MCP server, Desktop Commander, and let it iterate on its own, again and again. And the code it produced was good. Not demo-good. Merge-good. That's when I went all in.

But I don't call it vibe coding. Once the checks are in place, it's engineering with agents. The orchestration part. More on those checks later.

> **Bridge:** "And to understand why the customer part grew so much, you need to meet my users."

---

## 3 · Who I build for · 6:00–8:00

**Slide 9 · "Your hardest user can barely use a phone."**

*[The photo on the right: an older version of our app at the largest text size. Point at it when you say "barely use a phone".]*

My users are not in an office. They're foremen, roofers, road builders and scaffolders. Companies from ten to ten thousand employees. Crews change every day. A lot of them don't speak German as a first language. They're standing on a muddy site at seven in the morning with a phone in one hand.

One customer told us: finally, software that doesn't smell like the office. In German it's even better: *"Endlich eine Software, die nicht nach Büro riecht."*

*[Pause for the laugh.]*

That's the bar. And their day looks very different from ours. Some of our users can barely use a smartphone. Building for them is a different job from building for developers.

`→` Big text sizes and slow Android tablets are the default, not the edge case. If it only works on your fast iPhone at normal text size, it doesn't work.

`→` Everyone sees everything in their own language. Not just the buttons: what their colleagues typed, too. Fourteen languages.

`→` And voice-first? Everyone asks me about it. It sounds perfect, until you stand next to a jackhammer. And even when it's quiet, people don't know what to say into a blank microphone. So we guide them. Voice input that corrects them and asks back, in text, because nobody hears a voice on site. And forms, step by step. Not exciting, but it works.

None of this is in the code, and an agent doesn't know it unless you write it down. Keep that in mind; it comes back later.

> **Bridge:** "Now let's see how good we are at understanding a request. Your turn."

---

## 4 · Spot the ambiguity · 8:00–11:30

**Slide 10 · Quote: "Can the app show me who's on which site?"**

First, a true story. A customer called and asked us to remove the three extra columns from our Excel export.

There were no extra columns. She'd got a new, wider monitor, and saw them for the first time.

*[Pause for the laugh.]*

Give that ticket to an agent, and the columns are gone in a minute, for every customer. The question that saves you is boring: "Since when?" So let's practise asking the second question.

Here's a request we get in one form or another all the time.

"Can the app show me who's on which site?"

You have sixty seconds. How many different meanings can you find? Just shout them out.

*[Let people shout. Repeat good answers into the mic so the room hears them. If it's quiet, prompt: "Who's on site according to whom?"]*

**Slide 11 · "Same sentence, four products."** *(split view)*

Let's see what you found.

`→` One: planned. Who is scheduled on the planning board today.
`→` Two: actual. Who really clocked in on site, with GPS.
`→` Three: right now. Who is there this minute, including subcontractors.
`→` Four: history. Who was there on the day the defect happened, which matters a lot when there's a dispute.

Four meanings, four different queries, four different screens, and four different privacy questions.

Now let's give the original sentence to the agent.

`→` *[types the request]*

`→` *[agent runs]*

It picked one: the planned crews per site. It didn't ask. It's confident, and it might be right. But it might also be the wrong product.

That's the same pattern as the opening, the second time in ten minutes. Typing got cheap; clarity didn't. Asking the second question is now the most valuable thing an engineer does.

> **Bridge:** "So let's go back to the missing timesheets and do it properly."

---

## 5 · Define: one request, end to end · 11:30–19:00

**Slide 12 · "From a ticket to production."**

This is the first part: Define. And it's the centrepiece. The same request, from the ticket to production, in five steps: conversation, plan file, agent session, review, shipped. This one really happened.

**Slide 13 · "The question I asked back."**

Step one is the conversation. And my first reply on that ticket was one line:

"The daily overview isn't sufficient here?"

Because we already had one: a list of everyone who hadn't handed in a timesheet that day.

And the answer was the interesting part. No, one day isn't enough. The office checks the week on Friday. Payroll checks the month. So the real question was never "can we have a weekly report?" It was "how do you check timesheets?"

That didn't come from the code. It came from asking.

**Slide 14 · "Five lines. Each one earned."**

Step two: write it down. We call these plan files: a markdown file in the repo, next to the code. Five lines.

WHO: the office, checking timesheets, not chasing one list.
WHAT: who's missing a timesheet, per employee and day.
SCOPE: one view, day, week or month, for every customer.
SOURCE: timesheets, working-time models and absences.
EDGE: leave, sick, part-time and free days are not missing.

*[Slow down here. Point at the last three lines.]*

Look at lines three to five. The ticket didn't say any of that. Scope came from asking: one customer asked for a week, but every customer checks timesheets, so build it once, for all of them. And source and edge came from knowing the system. I know where working time lives, where leave lives, where sick notes live. Someone on holiday isn't missing a timesheet. Someone who never works Fridays isn't missing one on Friday.

That edge case is why you still need the nerd.

**Slide 15 · "Precise input. A precise question back."** *(split view)*

Step three: the agent session.

`→` *[types: "Build the Zeitleiste from docs/plans/zeitleiste.md. Ask before you guess."]*

`→` *[agent reads files, makes a plan, asks a question]*

It reads the models: timesheets, working hours, leave, sick notes. Makes a plan: a grid of employees and days, a day, week and month switch, tests including absences. And then it asks me something.

"Part-timers with no hours on Fridays: show Friday as missing, or as not scheduled?"

That's a good question. And it only asks it because the input was precise. Vague input gets a confident guess. Precise input gets a precise question.

`→` *[types: "Not scheduled. Grey, not red."]*

`→` *[agent implements and opens a pull request]*

Zeitleiste with day, week and month. Absences shown, but not counted as missing. Tests including part-time. Pull request opened.

**Slide 16 · "Agents review the PR. I review the problem."** *(split view)*

Step four: review. Remember, I was originally hired to review code. Today a guided agent does the first pass on every pull request.

`→` *[types `/review the Zeitleiste pull request`]*

`→` *[review runs]*

It reads the pull request and checks it against the plan file. Every line covered. Our review agents are told to hunt two things in particular: tenant scoping, so no company ever sees another company's data, and N+1 queries. And here it found one: absences queried per day and per employee. Load them once. It leaves that as a comment on the pull request, like a colleague would.

But the best findings are the ones nobody asked for. Our review agents have caught break time being deducted twice, silently. And break time not being deducted when it should have been. In a payroll system. That would have hurt for months before anyone noticed.

My own review is now one question: can the office check a week of timesheets at a glance? That's the part an agent can't judge for me.

**Slide 17 · "One customer asked. Every customer got it."**

*[A real screenshot of the Zeitleiste, month view, demo data. U is holiday, K is sick.]*

Step five: shipped. One customer asked for a weekly list. Every customer got a view they can switch between a day, a week and a month. We call it the Zeitleiste.

And today it's the view most of our users check timesheets with. Their favourite feature started as a one-line ticket that would have become a one-off report.

The build is the cheap box. Our full test suite, web and mobile, runs in twelve minutes, and deploy is instant; for small changes we've even shipped during a sales call. Getting the definition right is where the time goes.

How long would something like this have taken your team two years ago?

*[Let one or two people answer.]*

> **Bridge:** "And the five lines don't have to come from me."

---

## 6 · Define: scaling the definition · 19:00–21:00

**Slide 18 · "The skill asks the second question."**

I'm not the only one writing definitions anymore. Our customer success team writes tickets through an agent, using a skill I wrote. The skill contains my guidelines for a good ticket. Here are two real ones.

`→` Before. A ticket as it used to arrive: "Enhance the status system with configurable statuses." Acceptance criteria: custom statuses, status filtering, status management, backward compatibility.

`→` And this was my reply. *[Read it slowly.]* Task status? Site status? Invoice status? Planning status?

*[Pause.]* That's the ambiguity game again. In our own backlog.

`→` After. Written through the skill. What's wrong today, with an example. What's wanted, down to the settings screen. Acceptance criteria, with a test setup: employee A and B, A is excluded, A gets no reminder, B does.

An agent can start on that without coming back to me. The skill asks the second question, so I don't have to.

We chose Plane over Jira for exactly this reason: agents can read and write tickets through MCP. Tool choice is now an agent question.

**Slide 19 · "Yes. But not like that."**

And sometimes defining means saying: not like that.

Some of our customers want to move hours between projects. From their side that makes total sense: they're watching project budgets, and the hours were booked on the wrong project.

But I knew, in about ten seconds, that those same hours are legal working time. They go into payroll. You can't just quietly move them around after the fact.

So the answer wasn't no. It was: you can close a month. If you need to change something, you reopen it, on request. And every change after that is tracked and audited.

They still get to fix their budgets. Payroll stays honest. And an agent? It would have built the plain edit. Happily.

> **Bridge (important, this is the turn of the talk):** "More definitions, from more people, built by more agents. That only works if I can trust what ships without reading every line."

---

## 7 · Trust: orchestration runs on trust · 21:00–27:00

**Slide 20 · "You can only orchestrate what you can trust."**

This is the part nobody demos.

I run several agents a day. I can't read every line they write. If I tried, I'd be the bottleneck again, just in a different chair. So trust has to come from the system, not from my eyes.

Andrej Karpathy put it nicely: a demo only has to work once; a product has to work every time. Everything I've shown you so far was a demo. This part is about every time.

And it answers the question I know half of you have been thinking for twenty minutes: "But how do you know it works?"

**Slide 21 · `/ship`** *(agent maximized)*

Here's how. Every change, from every agent, goes through the same gates as human code.

`→` *[types `/ship zeitleiste`]*

`→` Format. Lint. Types.

`→` *[the suite runs]* The test suite: request specs, unit tests, end-to-end. A spec guard and our own lint rules for specs: structure an agent can't talk its way around. Coverage, merged across all test shards: under eighty percent, nothing deploys. Then translations: fourteen languages. An agent adds them automatically in its own worktree, with a glossary of construction jargon, so a "Polier" never turns into a "polisher". Then cross-project checks: does the mobile API still match what the React Native app expects? Then security: static analysis and dependency audits. And the agent review against the requirement.

`→` *[deploy]* Web deployed. Mobile: over-the-air update published. Release notes written from the commit messages and published; remember that line, it comes back. Third deploy today.

`→` *[the screen switches to the Java version]* And for the Java nerds in the room, here's the same pipeline in your world. Spotless, Checkstyle, JUnit, ArchUnit, JaCoCo, Pact, OWASP Dependency-Check. Different names. Same gates.

None of these gates are new. They're old-school quality engineering. But with agents they matter more than ever, because they're the only thing standing between a confident agent and your customer.

**Slide 22 · "Trust isn't free."**

And that costs something. We currently use between three hundred and four hundred thousand CI minutes a month. *[Point at the servers.]* That's like nine machines running tests around the clock.

The CI bill is what lets me stop reading every line. I think that's the best money we spend.

**Slide 23 · "Rules live in the repo."**

The second part of trust is that the agents know how we work. I wrote it down, in the repository, where every agent reads it.

Testing: how I want my code tested. Frontend: design and component patterns. Migrations: what a safe migration looks like. Mobile API: the contract with the app. Translations: every string, in every language. And a few more for our domain areas.

This is tribal knowledge, written down once and read by every agent on every task. It's how my nerd knowledge scales to several agents at once.

**Slide 24 · "Write down how your tests lie."**

*[Say this before the slide sinks in.]* Kent Beck, who co-created JUnit, calls his coding agent "the genie". And one of his warning signs is the genie deleting tests. That's one reason coverage gates our deploys: under eighty percent, nothing ships.

But a test doesn't need to be deleted to lie to you. Ours have, in all kinds of ways. So that's what our testing rules are full of. These come straight from the repo, shortened for the slide. In Ruby, tests are called specs, and there's a section literally called "Specs that pass on a bug."

One. We have tests that count database queries, to catch N+1 problems: load one row, load three rows, and the number of queries must stay the same. But the first request after login does some extra one-time work, like writing the session. Those extra queries hide the growth, so the test passes while the N+1 is right there. Remember the review agents hunting N+1 queries? This is why.

Two. "The page does not contain X." Sounds solid. But if the page redirects, to the login for example, the body is empty. And an empty page doesn't contain anything. Green test, wrong page. You check for the status code first.

Three. CSRF protection is switched off in tests. So if a form breaks its CSRF token, every test passes, and only production says no. *[To the room:]* Same in Spring, if your test setup disables CSRF.

Four. The database doesn't promise any order unless you ask for one. Assert a list in an exact order, and it passes on your machine and flakes in CI. *[To the room:]* You've all had that one with `findAll()` in JUnit.

And five, my favourite. In Ruby, `redo` is a keyword: it restarts the current block. Name a test helper `redo`, call it inside a test, and the test restarts. Forever.

*[Pause for the laugh.]*

Every one of these lines is a bug that a green test once hid. "Write tests" is not a rule. *How* your tests can lie to you is. Written down once, every agent reads it. I also spent a lot of time making the suite and the pipelines fast, because fast feedback is what lets agents iterate without waiting for me.

**Slide 25 · "Shipping became boring. In a good way."**

So what does trust buy you?

`→` *[the chart appears]* This is real data from our CI. Every bar is a workday in the last three months: black is a web release, orange an over-the-air update to the phones. Three and a half a day, on average.

`→` Over-the-air updates. That's one big reason we chose React Native: an update builds in under twenty minutes and reaches the phones on site without an app store review. Everyone is forced onto it, and most customers are on the latest version within a week.

`→` And a brand-new customer complaint: "too fast." Sometimes our customers are overwhelmed by how much changes.

*[Pause for the laugh.]*

Honestly? I'll take that problem.

**Slide 26 · "Every gate passed. The site didn't."**

And to be fair: it doesn't always work.

`→` We moved every page in the app to one new, unified filter. Modern, consistent, better looking. Every test green, every gate passed.

`→` Then a customer called. He couldn't filter his list of sites anymore. Our old filter was ugly, but it was *his* ugly filter. He'd used it every morning for years.

`→` And it happened again. We moved a photo button on the mobile dashboard further up. The feature had always been there. But people thought it was new, and it confused them.

None of our gates could catch that. Gates check the code. Nobody checks people's habits.

`→` So now we have release notes that pop up with every release. Which means: every day.

*[Pause for the laugh.]*

With pictures for the bigger ones. It didn't fix a bug. It fixed the surprise. Our users know the system better now, and they look out for what changed.

That's how trust grows: not by never failing, but by turning every failure into something new. A gate, a rule, or sometimes just telling people what changed.

> **Bridge:** "So building is fast, and I can trust it. Is the nerd done? No. Because building got cheap. Running didn't."

---

## 8 · Run: building got cheap, running didn't · 27:00–29:00

**Slide 27 · "Building got cheap. Running didn't."**

The last part. Every feature an agent ships still has to be hosted, patched, secured and paid for. And that part is still my daily work. If anything, more features means more to run.

**Slide 28 · "German servers. European providers."** *(full slide: a small diagram of the stack; the agent opens on →)*

For us, the reason is GDPR, or DSGVO as we say here. Our customers' data stays in Europe.

So we moved off DigitalOcean and AWS to Hetzner, deployed with Hatchbox, with files on Hetzner S3. And the rule doesn't stop at hosting. Our AI API is Mistral, not a US provider. Our maps are HERE, not Google. And we run our own AI server, with custom models behind LiteLLM: for chat, for search in a company's handbook, for speech-to-text, and for reading invoices and expenses.

That's a trade-off, not a recommendation for everyone. The price is that updates, patches and security are on us. Every morning.

I don't do a morning ritual. Monitoring tells me when something's wrong: uptime, errors, servers.

`→` *[the agent opens and an alert lands]*

Like this one: a new error in invoice reading, three companies affected. An agent can investigate it and propose a fix. Deciding what to tell those three customers, and whether to roll back, is still my job.

> **Bridge:** "So what does this mean for you?"

---

## 9 · Your Monday · 29:00–30:30

**Slide 29 · "Build depth on purpose."**

If you're early in your career: the Stanford AI Index reports that employment of US software developers aged 22 to 25 has fallen close to 20 percent from its 2022 peak. The first rungs are thinner, so build depth on purpose.

`→` Work with code and architecture, again and again, until the concepts click. Not just reading it: change it, break it, see why it's built that way.
`→` Talk to the people who use your software.
`→` Learn one system well enough to say "that breaks X" in ten seconds.
`→` And never stop exploring. New languages, new tools, new technology. Learning, learning, learning.

Prompts or code, either is fine, as long as you know the system you're prompting about.

**Slide 30 · "Five lines before any prompt."**

And for everyone, here's something to try on Monday. Before you write any prompt, write five lines.

Who uses it, where, and when. What the outcome is, in their words. Scope: what's in, and what's explicitly out. Source: where the data really lives. Edge: the case only the code knows about.

Then hand it to your agent and see what it asks back.

*[Leave it up for a few seconds. People will take photos.]*

> **Bridge:** "And I'll be honest about what's not working yet."

---

## 10 · Not done yet · 30:30–31:30

**Slide 31 · "The goal: the whole loop, without me in it."**

My goal is the full loop without me in it. A ticket comes in, an agent builds it, the quality gates check it, it's verified on the live system, and it ships.

Karpathy calls this the autonomy slider: how much you let the agent do on its own. Ours is already far to the right.

`→` Ticket, build, gates and shipping already run without me.

`→` Checking it on the real thing is half there. In the browser, Claude in Chrome clicks through the real app, and works better for us than our Playwright scripts so far. On the phone, our agents drive the simulator and emulator with a tool called agent-device, while they build.

`→` What's missing is doing that on every change. On mobile, our CI still runs unit tests only.

`→` So we're exploring AI testers: agents on emulators, each one a persona. Largest font size, slow Android, another language. Exactly our users.

But it's not reliable enough to take me out of the loop. Yet.

So if anyone here has cracked agentic verification on live systems, please find me after the talk. I'll buy you a drink.

> **Bridge:** "So, back to that one sentence."

---

## 11 · Close · 31:30–32:30

**Slide 32 · "Same sentence. Defined properly."** *(slide first, then split view)*

Same ticket. Same sentence. But this time the agent gets the five lines.

`→` *[the agent opens]*

`→` *[types the same customer sentence, plus the plan file]*

`→` *[agent runs. Let the last line land before you speak.]*

This time it doesn't just read two tables. It reads where the data really lives: timesheets, working hours, leave, sick notes. One view for day, week and month, for every customer. Leave, sick days, part-time and free days are not missing. Tests for exactly those cases. And it opens a pull request, it doesn't ship.

Every line of the output comes from a line of the definition. That's the right answer. To the right question.

And notice what changed. Not the model. Not the agent. The definition.

**Slide 33 · Recap: "Questions?"**

So: the nerd didn't leave. It moved.

Define: five lines before any prompt, because agents build exactly what you define.

Build: let the agents do it. That part got cheap.

Trust: build the gates, so you don't have to read every line.

Run: building got cheap. Running didn't.

Thank you. I'm happy to take questions.

*[The recap stays on screen during Q&A. At about 44:00, wrap up even if there are hands left: "Let's take one more, then I'll find the rest of you after."]*

**Slide 34 · "Not less nerd."** *(after Q&A)*

*[Press → after the last question.]*

The slides, this script and all the links are on **michaelwapp.com**. The QR code takes you there.

The nerd didn't leave the job. The nerd moved to where the job is hardest now: the definition, the gates and the systems that run it.

Less typing. Not less nerd. Thank you.

---

## Timing checkpoints

| Clock | You should be at |
| --- | --- |
| 3:30 | `/whoami` |
| 8:00 | The audience game |
| 11:30 | Define: the end-to-end walkthrough |
| 21:00 | Trust: "You can only orchestrate what you can trust" |
| 27:00 | Run: "Building got cheap. Running didn't." |
| 30:30 | "Not done yet" |
| 32:30 | Recap and questions |

**If you're running late,** shorten in this order:
1. Skip the testing excerpt and mention it on the rules slide.
2. Shorten the audience game to 30 seconds.
3. Skip the "Building for the site" reveals and say the four points in one breath.

**Never cut:** the cold open, the model slide, the five lines, the trust turn, the failure story or the close.

## Lines to memorise

- **Opening:** "A ticket from customer success. One customer, one sentence."
- **Thesis:** "Agents build exactly what you define. So the definition is now the job."
- **The model:** "Building got cheap. Everything around it didn't: Define, Trust, Run."
- **The turn:** "More definitions, from more people, built by more agents. That only works if I can trust what ships without reading every line."
- **The authority:** "Kent Beck calls his coding agent the genie. But a test doesn't need to be deleted to lie to you."
- **The counterweight:** "Building got cheap. Running didn't."
- **The ask:** "If anyone here has cracked agentic verification on live systems, please find me after the talk."
- **Last line:** "Less typing. Not less nerd. Thank you."
