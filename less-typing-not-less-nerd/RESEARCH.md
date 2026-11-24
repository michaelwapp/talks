# What makes a great talk for engineers: 10 talks

Research for *Less Typing, Not Less Nerd*, November 2026. Five talks are on AI coding and the changing developer role; five are classics that engineers still pass around. For each: what it is, what made it work, and what this talk takes from it.

## The ten talks

| # | Talk | Where | Why it's here |
| --- | --- | --- | --- |
| 1 | Andrej Karpathy, *Software Is Changing (Again)* | YC AI Startup School, June 2025 | The most-shared talk on how AI changes software work |
| 2 | Simon Willison, *2025 in LLMs so far, illustrated by pelicans on bicycles* | AI Engineer World's Fair, June 2025 | A practitioner's year in review with a running gag |
| 3 | Kent Beck, *Augmented Coding* (talks, podcast and essays) | 2025 | JUnit co-creator on TDD as the guardrail for agents |
| 4 | Birgitta Böckeler, *AI coding assistants: state of play* | QCon London 2025 | The most balanced experience report on coding agents |
| 5 | Gary Bernhardt, *Wat* | CodeMash 2012 | Four minutes, still the most-shared lightning talk |
| 6 | Rich Hickey, *Simple Made Easy* | Strange Loop 2011 | One distinction that changed how people talk about code |
| 7 | Bret Victor, *Inventing on Principle* | CUSEC 2012 | Demos that make a principle impossible to ignore |
| 8 | James Mickens, *Why Do Keynote Speakers Keep Suggesting That Improving Security Is Possible?* | USENIX Security 2018 | Funny, sceptical and on machine learning hype |
| 9 | Kelsey Hightower, keynotes | KubeCon and others | Storytelling over slides |
| 10 | Julia Evans, *High-Reliability Infrastructure Migrations* | KubeCon 2018 | Honest, concrete infrastructure stories |

### 1 · Karpathy: give people a model they can repeat

He names the shift (Software 1.0, 2.0, 3.0), explains it through analogies (LLMs as utilities, fabs and operating systems), and gives memorable handles: the **autonomy slider**, the **Iron Man suit** (augmentation, not a robot), "keep AI on a tight leash" in the generation–verification loop, and "Demo is works.any(), product is works.all()". He closes with a clear call: build for agents.
**What made it great:** a named mental model that people quote afterwards, and a call to action.
**For this talk:** name our model (Define · Build · Trust · Run), frame "Not done yet" as an autonomy slider, and use his demo-vs-product line at the turn to trust. His "build for agents" matches our tool-choice point.

### 2 · Willison: a running device, honesty and a write-up

Every model gets the same silly test, a pelican riding a bicycle, so the audience tracks progress through one recurring image. He's candid: the benchmark "started as a joke", he "cheaped out", he can't tell two models apart. He ran out of time and said cutting a year down to six months was "with hindsight… foolish". The talk lives on as an annotated slide-by-slide post.
**What made it great:** one recurring image, self-deprecating honesty, and a write-up people can share.
**For this talk:** the missing-timesheets ticket is our recurring device, so keep it in the opening, the ticket demo and the close. Be candid about the scripted demos. Publish an annotated version afterwards, and respect the clock.

### 3 · Beck: authority the audience already trusts

Kent Beck calls the AI assistant "the genie". He separates vibe coding ("you don't care about the code") from augmented coding ("you care about the code, its complexity, the tests, & their coverage"). His warning signs include "any indication that the genie was cheating, for example by disabling or deleting tests". On O11ycast he describes an agent that commented out failing tests and kept reporting progress.
**What made it great:** an expert being openly surprised by what agents do, with specific warning signs.
**For this talk:** this is the JUnit co-creator at a Java meetup. A Beck quote in the trust section gives our quality gates authority the room already accepts. Add a "no tests deleted or skipped" gate to the pipeline demo.

### 4 · Böckeler: concrete failure modes, balanced stance

Her goal: "get the skeptics more excited, and the enthusiasts… a little bit more down to earth." She works from daily use ("98% of the time… existing code bases"), names specific failures and their blast radius, and admits she can't keep up.
**What made it great:** credibility through specific failures, and neither hype nor doom.
**For this talk:** say the balanced stance out loud early. The failure story is not optional. It's the single most credibility-building slide, and it's still empty.

### 5 · Bernhardt, *Wat*: shared frustration, setup and punchline

A four-minute lightning talk: show a short line of code, ask the room what it returns, reveal the absurd answer. People who barely know the languages still laughed.
**What made it great:** a tight rhythm of prediction and reveal, and humour built on a pain everyone shares.
**For this talk:** our cold open ("who would merge this?") and the ambiguity game use the same rhythm. Keep the reveals crisp, ask for a prediction before each one, and don't explain the joke.

### 6 · Hickey, *Simple Made Easy*: define your terms

He builds the talk on one distinction, simple versus easy, grounds it in etymology, and introduces one word ("complect") that people still use. The lines are short and quotable.
**What made it great:** one precise distinction, defined carefully and applied everywhere.
**For this talk:** make our distinction explicit and repeat it: *cheap* (typing) versus *still expensive* (defining, trusting, running). Keep the quotable lines short.

### 7 · Victor, *Inventing on Principle*: state a principle, then make it visceral

He states his principle (creators need an immediate connection to what they make), shows demos where it's broken and fixed, and then makes it personal: a principle is a responsibility, and a useful one is specific enough to judge yes or no.
**What made it great:** each demo proves one point, and the ending turns the idea into the audience's own choice.
**For this talk:** each agent demo should prove exactly one thing. The close should hand the room a principle they can apply ("Define it, trust it, run it"), not just a summary.

### 8 · Mickens: scepticism with humour

He punctures hype about machine learning and "shipping as fast as possible" with jokes, concrete examples (Tay, biased risk tools) and questions rather than blame.
**What made it great:** humour lets a hard critique land without making people defensive.
**For this talk:** our sceptical beats (voice-first next to a jackhammer, "too fast", the failure story, "not done yet") balance the optimism. Keep them; they make the optimism believable.

### 9 · Hightower: stories over slides

He has given keynotes with no slides, demos or notes, only stories, with the goal of making people "feel something".
**What made it great:** emotion and human connection.
**For this talk:** we still lack a personal, emotional beat: the moment you noticed your job had changed, and how it felt. One honest sentence there does more than any slide.

### 10 · Evans: concrete, honest, and still learning

Real migrations at Stripe, specific tools, pragmatic choices ("it's okay to do that if that's what works for your company"), and "I'm not done!". Slides were hand-drawn, simple and personal.
**What made it great:** specific stories, trade-offs stated plainly, and humility.
**For this talk:** the infrastructure section (Hetzner, GDPR, own AI server) should sound like Evans: what we chose, what it costs us, and that it's a trade-off, not a recommendation for everyone.

## Cross-cutting findings

1. **One named model, repeated.** (Karpathy, Hickey, Victor) People remember a framework they can repeat.
2. **A running device.** (Willison, *Wat*) One recurring image or call-back holds a talk together.
3. **Each demo proves one point.** (Victor, Karpathy)
4. **Honesty builds credibility:** failures, caveats, "not done yet". (Böckeler, Willison, Evans)
5. **Borrow authority the audience already trusts.** (Beck for a Java room)
6. **Humour from shared frustration, with crisp reveals.** (*Wat*, Mickens)
7. **Balanced stance:** neither hype nor doom. (Böckeler, Mickens, Karpathy's leash)
8. **Specific beats general:** real numbers, names and trade-offs. (Evans, Böckeler)
9. **A personal, emotional beat.** (Hightower, Victor)
10. **End with something the audience owns:** a principle or an action. (Victor, Karpathy)
11. **Respect the clock; cut scope early.** (Willison)
12. **The talk lives on:** an annotated write-up or slides people can share. (Willison, Evans)

## How the talk measured up, and what changed

| Finding | Before | Change in this revision |
| --- | --- | --- |
| 1 · Named model | Three themes (define, trust, run) existed, but unnamed and out of order | New slide "The nerd didn't leave. It moved." introduces **Define · Build · Trust · Run** (Build dashed: the agents' part, the one that got cheap); a small signpost shows the current part on every section slide; sections reordered to match; the recap uses the model |
| 2 · Running device | One request at the start and end (now the real missing-timesheets ticket) | Kept; the ticket demo and recap point back to it |
| 3 · One point per demo | Mostly met | Pipeline demo gains a test-guard line so it also proves Beck's point |
| 4 · Honesty | "Not done yet" existed; failure story empty | Failure story moved into the trust section where it belongs; script says plainly the demos are replays; still needs your story |
| 5 · Borrowed authority | None | New Kent Beck quote slide in the trust section |
| 6 · Crisp reveals | Good | Script asks for a prediction before reveals |
| 7 · Balanced stance | Implicit | Spoken line after the thesis: "This isn't a hype talk, and it isn't a doom talk." |
| 8 · Specific | Many drafts | Unchanged; the FILL IN list is the work left |
| 9 · Emotional beat | Missing | New FILL IN after the week slide: the moment you noticed |
| 10 · Audience owns the end | Five lines + recap | Recap rewritten as the model: Define, Trust, Run, each with one action |
| 11 · Clock | 37 minutes, tight | Cut "No Jira" and "Not a better model" slides, then the stats, poll, users-intro, definitions-intro and not-done flow slides (folded into others); about 33–35 minutes, 10 for Q&A |
| 12 · Lives on | Nothing planned | Last slide points to the slides and links |

## Sources

- Karpathy: [Latent Space notes and slides](https://www.latent.space/p/s3)
- Willison: [annotated talk](https://simonwillison.net/2025/Jun/6/six-months-in-llms/)
- Beck: [Augmented Coding: Beyond the Vibes](https://newsletter.kentbeck.com/p/augmented-coding-beyond-the-vibes), June 2025; [O11ycast ep. 80](https://www.heavybit.com/library/podcasts/o11ycast/ep-80-augmented-coding-with-kent-beck), April 2025
- Böckeler: [QCon London 2025 on InfoQ](https://infoq.com/presentations/ai-coding-agents); [LDX3 2025 listing](https://leaddev.com/technical-direction/from-autocomplete-to-agents-ai-coding-assistance-state-of-play)
- Bernhardt: [Wat](https://www.destroyallsoftware.com/talks/wat); [Deprogrammatica Ipsum](https://deprogrammaticaipsum.com/gary-bernhardt/); [MetaFilter thread](https://metafilter.com/112348/WAT)
- Hickey: [talk notes](https://dev.to/sylwiavargas/talk-notes-simple-made-easy-by-rich-hickey-2011-39oo); [InfoQ](https://infoq.com/presentations/Simple-Made-Easy)
- Victor: [James Clear's annotated transcript](https://jamesclear.com/great-speeches/inventing-on-principle-by-bret-victor)
- Mickens: [USENIX](https://www.usenix.org/conference/usenixsecurity18/presentation/mickens); [Packt summary](https://hub.packtpub.com/why-scepticism-is-important-in-computer-security-watch-james-mickens-at-usenix-2018-argue-for-thinking-over-blindly-shipping-code/)
- Hightower: [TFIR interview](https://tfir.io/find-better-stories-tell-better-stories-secret-of-delivering-great-keynotes/)
- Evans: [talk post](https://jvns.ca/blog/2018/12/15/new-talk--high-reliability-infrastructure-migrations/)
- Earlier research still applies: GitLab, Duarte, Slido/Medina, Utku Sen, speaking.io and Inc.

### Limits of this research

- Two sources are summaries rather than primary: the Bernhardt analysis and the Mickens summary. Hightower's advice comes from one interview.
- The Böckeler LeadDev page was registration-walled; her points come from the QCon recording on InfoQ.
- One secondary article attributes "AI is like a genie" to Beck on a podcast. I only used wording confirmed in his own post.
