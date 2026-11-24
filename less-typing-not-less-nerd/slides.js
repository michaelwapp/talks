/* Less Typing, Not Less Nerd — Java and Friends, Vienna
   45-minute slot: about 33 minutes of talk, then Q&A and buffer.
   Structure: the model Define · Build · Trust · Run (Build is the agents' part, shown muted) (see RESEARCH.md). `signpost` sets the part shown top-right.
   All agent moments are scripted playback (no live session).

   `at`    planned clock time, shown in the presenter view (P)
   `todo`  yellow marker on the slide, hidden with H (none left) */

window.DECK = {
  id: "less-typing-not-less-nerd",
  script: "SCRIPT.md",
  title: "Less Typing, Not Less Nerd",
  agentName: "agent · bautask",
  minutes: 33,
  signposts: ["Define", "~Build", "Trust", "Run"],
  slides: [

    /* ======== Walk-in ======== */
    {
      type: "cover", mode: "slides",
      kicker: "Java and Friends · Vienna",
      title: "Less typing, not less nerd.",
      sub: "From full-stack developer to customer-facing orchestrator.",
      byline: "Michael Bauer-Wapp · CTO, BauTask",
      notes: "On screen while people arrive. No intro when you start: press → and go straight into the request."
    },

    /* ======== 1 · Cold open and the model · 0:00–3:30 · demo ======== */
    {
      type: "statement", at: "0:00", mode: "slides", clearAgent: true,
      kicker: "A ticket from customer success",
      title: "One sentence from a customer.",
      sub: "Straight into the agent. No meeting, no questions.",
      notes: "Don't introduce yourself yet. First line: 'A ticket came in from customer success. One sentence. Let's give it to an agent.'\nPress \u2192 to open the agent, \u2192 to type the request, \u2192 again to let it run. Speak as if you don't know the result.\nThe request is real (a customer, early 2026). The agent run is a replay of the kind of thing an agent does with it.",
      agent: [
        { mode: "split" },
        { prompt: "A customer writes: \"We'd like a weekly overview of missing timesheets for every employee.\" Build it." },
        [
          { think: "Reading schema", ms: 1100 },
          { out: [
            ["tool", "read <b>db/schema.rb</b> \u00b7 employees, timesheets"],
            ["ok", "Created MissingTimesheetsReport: employees without a timesheet, Mon\u2013Fri"],
            ["ok", "Added route and view: /reports/missing-week"],
            ["ok", "Tests pass (12 examples)"],
            ["say", "Done. Weekly report is live at /reports/missing-week, missing days in red."]
          ] }
        ]
      ]
    },
    {
      type: "statement", mode: "split",
      kicker: "40 seconds later",
      title: "Tests pass. It looks right.",
      sub: "Hands up: who would merge this?",
      notes: "Wait for hands. Some will go up. Thank them: 'So would I have, a few years ago.'"
    },
    {
      type: "html", mode: "slides",
      html: "<p class=\"kicker\">What the agent didn't know</p><div style=\"display:grid;grid-template-columns:1fr 820px;grid-template-rows:auto auto;column-gap:56px;row-gap:24px;align-items:center\"><div style=\"grid-column:1;grid-row:1\"><h1 class=\"title\" style=\"font-size:84px\">\u201cMissing? She was on holiday.\u201d</h1></div><div style=\"position:relative;grid-column:2;grid-row:1 / span 2\"><p class=\"kicker\" style=\"margin-bottom:14px\">/reports/missing-week</p><div style=\"display:grid;grid-template-columns:120px repeat(5,1fr);gap:6px;font:500 20px/1 var(--mono)\"><div></div><div style=\"color:var(--slide-muted);font-size:16px;padding:6px 0\">Mo</div><div style=\"color:var(--slide-muted);font-size:16px;padding:6px 0\">Di</div><div style=\"color:var(--slide-muted);font-size:16px;padding:6px 0\">Mi</div><div style=\"color:var(--slide-muted);font-size:16px;padding:6px 0\">Do</div><div style=\"color:var(--slide-muted);font-size:16px;padding:6px 0\">Fr</div><div style=\"padding:12px 0;color:var(--slide-ink)\">Anna</div><div style=\"padding:12px;border-radius:6px;background:#fde2df;color:#b42318;text-align:center\">fehlt</div><div style=\"padding:12px;border-radius:6px;background:#fde2df;color:#b42318;text-align:center\">fehlt</div><div style=\"padding:12px;border-radius:6px;background:#fde2df;color:#b42318;text-align:center\">fehlt</div><div style=\"padding:12px;border-radius:6px;background:#fde2df;color:#b42318;text-align:center\">fehlt</div><div style=\"padding:12px;border-radius:6px;background:#fde2df;color:#b42318;text-align:center\">fehlt</div><div style=\"padding:12px 0;color:var(--slide-ink)\">Ben</div><div style=\"padding:12px;border-radius:6px;background:#e6efe6;color:#2f6b3a;text-align:center\">8,0</div><div style=\"padding:12px;border-radius:6px;background:#e6efe6;color:#2f6b3a;text-align:center\">7,5</div><div style=\"padding:12px;border-radius:6px;background:#e6efe6;color:#2f6b3a;text-align:center\">8,0</div><div style=\"padding:12px;border-radius:6px;background:#e6efe6;color:#2f6b3a;text-align:center\">8,0</div><div style=\"padding:12px;border-radius:6px;background:#fde2df;color:#b42318;text-align:center\">fehlt</div><div style=\"padding:12px 0;color:var(--slide-ink)\">Carla</div><div style=\"padding:12px;border-radius:6px;background:#e6efe6;color:#2f6b3a;text-align:center\">7,5</div><div style=\"padding:12px;border-radius:6px;background:#fde2df;color:#b42318;text-align:center\">fehlt</div><div style=\"padding:12px;border-radius:6px;background:#fde2df;color:#b42318;text-align:center\">fehlt</div><div style=\"padding:12px;border-radius:6px;background:#e6efe6;color:#2f6b3a;text-align:center\">8,0</div><div style=\"padding:12px;border-radius:6px;background:#e6efe6;color:#2f6b3a;text-align:center\">6,5</div><div style=\"padding:12px 0;color:var(--slide-ink)\">Deniz</div><div style=\"padding:12px;border-radius:6px;background:#e6efe6;color:#2f6b3a;text-align:center\">8,0</div><div style=\"padding:12px;border-radius:6px;background:#e6efe6;color:#2f6b3a;text-align:center\">8,0</div><div style=\"padding:12px;border-radius:6px;background:#fde2df;color:#b42318;text-align:center\">fehlt</div><div style=\"padding:12px;border-radius:6px;background:#e6efe6;color:#2f6b3a;text-align:center\">7,5</div><div style=\"padding:12px;border-radius:6px;background:#e6efe6;color:#2f6b3a;text-align:center\">8,0</div><div style=\"padding:12px 0;color:var(--slide-ink)\">Emil</div><div style=\"padding:12px;border-radius:6px;background:#e6efe6;color:#2f6b3a;text-align:center\">6,0</div><div style=\"padding:12px;border-radius:6px;background:#e6efe6;color:#2f6b3a;text-align:center\">6,0</div><div style=\"padding:12px;border-radius:6px;background:#e6efe6;color:#2f6b3a;text-align:center\">6,0</div><div style=\"padding:12px;border-radius:6px;background:#e6efe6;color:#2f6b3a;text-align:center\">6,0</div><div style=\"padding:12px;border-radius:6px;background:#fde2df;color:#b42318;text-align:center\">fehlt</div><div style=\"padding:12px 0;color:var(--slide-ink)\">Fatma</div><div style=\"padding:12px;border-radius:6px;background:#e6efe6;color:#2f6b3a;text-align:center\">8,0</div><div style=\"padding:12px;border-radius:6px;background:#e6efe6;color:#2f6b3a;text-align:center\">8,0</div><div style=\"padding:12px;border-radius:6px;background:#e6efe6;color:#2f6b3a;text-align:center\">8,0</div><div style=\"padding:12px;border-radius:6px;background:#fde2df;color:#b42318;text-align:center\">fehlt</div><div style=\"padding:12px;border-radius:6px;background:#e6efe6;color:#2f6b3a;text-align:center\">7,5</div></div><div class=\"frag\" style=\"position:absolute;left:0;right:0;bottom:0;top:34px\"><div style=\"display:grid;grid-template-columns:120px repeat(5,1fr);gap:6px;font:500 20px/1 var(--mono)\"><div></div><div style=\"visibility:hidden;font-size:16px;padding:6px 0\">Mo</div><div style=\"visibility:hidden;font-size:16px;padding:6px 0\">Di</div><div style=\"visibility:hidden;font-size:16px;padding:6px 0\">Mi</div><div style=\"visibility:hidden;font-size:16px;padding:6px 0\">Do</div><div style=\"visibility:hidden;font-size:16px;padding:6px 0\">Fr</div><div style=\"visibility:hidden;padding:12px 0\">Anna</div><div style=\"padding:12px;border-radius:6px;background:#fff4c2;color:#7a5b00;text-align:center;outline:2px solid #e9c46a\">Urlaub</div><div style=\"padding:12px;border-radius:6px;background:#fff4c2;color:#7a5b00;text-align:center;outline:2px solid #e9c46a\">Urlaub</div><div style=\"padding:12px;border-radius:6px;background:#fff4c2;color:#7a5b00;text-align:center;outline:2px solid #e9c46a\">Urlaub</div><div style=\"padding:12px;border-radius:6px;background:#fff4c2;color:#7a5b00;text-align:center;outline:2px solid #e9c46a\">Urlaub</div><div style=\"padding:12px;border-radius:6px;background:#fff4c2;color:#7a5b00;text-align:center;outline:2px solid #e9c46a\">Urlaub</div><div style=\"visibility:hidden;padding:12px 0\">Ben</div><div></div><div></div><div></div><div></div><div style=\"padding:12px;border-radius:6px;background:#fff4c2;color:#7a5b00;text-align:center;outline:2px solid #e9c46a\">Teilzeit</div><div style=\"visibility:hidden;padding:12px 0\">Carla</div><div></div><div style=\"padding:12px;border-radius:6px;background:#fff4c2;color:#7a5b00;text-align:center;outline:2px solid #e9c46a\">krank</div><div style=\"padding:12px;border-radius:6px;background:#fff4c2;color:#7a5b00;text-align:center;outline:2px solid #e9c46a\">krank</div><div></div><div></div><div style=\"visibility:hidden;padding:12px 0\">Deniz</div><div></div><div></div><div></div><div></div><div></div><div style=\"visibility:hidden;padding:12px 0\">Emil</div><div></div><div></div><div></div><div></div><div style=\"padding:12px;border-radius:6px;background:#fff4c2;color:#7a5b00;text-align:center;outline:2px solid #e9c46a\">Teilzeit</div><div style=\"visibility:hidden;padding:12px 0\">Fatma</div><div></div><div></div><div></div><div></div><div></div></div></div></div><p class=\"sub frag\" style=\"grid-column:1;grid-row:2;align-self:start\">Leave, sick notes, part-time: the agent knew none of it. 9 \u201cmissing\u201d, 2 real.</p></div>",
      notes: "The reveal. First the grid as the agent built it: red everywhere. Press \u2192: the real reasons appear. Anna is on holiday all week, Carla is sick, Ben and Emil don't work Fridays. Only two cells are really missing.\nThen the second problem: one customer asked for a week. Others look at a day, or a month. The agent built a one-off.\nThe agent built the wrong thing, and it built it perfectly.",
      agent: [{ reveal: true }, { reveal: true }]
    },

    {
      type: "statement", mode: "slides",
      kicker: "The whole talk in one line",
      title: "Agents build exactly what you define.",
      sub: "So the definition is now the job. And writing a good one takes knowing the system inside out.",
      notes: "Say it slowly. Then: 'I'm Michael, and this is the story of how my job moved from typing code to writing that definition.'\nBalance line: 'This isn't a hype talk, and it isn't a doom talk. It's what actually changed in my job.'"
    },
    {
      type: "flow", mode: "slides", big: true,
      kicker: "Where the nerd went",
      title: "The nerd didn't leave. It moved.",
      flow: [
        "Define<small>what to build, precisely enough for an agent</small>",
        "Build<small>the agents' part now: minutes, not weeks</small>",
        "Trust<small>that what they built is right, without reading every line</small>",
        "Run<small>everything we ship: hosted, patched, secured, paid for</small>"
      ],
      highlight: -1, muted: 1,
      sub: "Building got cheap. Everything around it didn't.",
      notes: "The model for the rest of the talk. Name the three words clearly; from the walkthrough on, a small signpost top-right shows which part we're in.\nBuild is in the loop, but it's the agents' part now, so it's drawn dashed: it got cheap. The nerd moved to the three parts around it.\nOne distinction to repeat all evening: cheap (building) vs. still expensive (defining, trusting, running)."
    },

    /* ======== 2 · Who's talking · 3:30–6:00 ======== */
    {
      type: "statement", at: "3:30", mode: "agent", clearAgent: true,
      kicker: "Who's talking", title: "",
      notes: "Maximized agent as a playful intro. Under one minute. Read the last line out loud.\nThe TU Wien line lands with this room: most of them learned Java there too. Pause for the nods.",
      agent: [
        { prompt: "/whoami --history" },
        { out: [
          ["dim", "Michael Bauer-Wapp · Vienna"],
          ["tool", "<b>TU Wien</b> MSc computer science → Java, Java, Java"],
          ["tool", "<b>2014</b>    Bosch · Java         → typed desktop tools in Java"],
          ["tool", "<b>later</b>   RISE · mobile        → typed Android and iOS"],
          ["tool", "<b>later</b>   neoom · full-stack   → typed Rails, React, bash, infra"],
          ["tool", "<b>later</b>   self-employed        → typed less, talked to clients more"],
          ["tool", "<b>2025</b>    BauTask, CTO         → hired to review the code"],
          ["say", "Code typed per week: going down. Requirements written per week: going up."]
        ] }
      ]
    },
    {
      type: "week", mode: "slides",
      kicker: "Where my week goes",
      title: "Same job title. Different week.",
      stepwise: true,
      weeks: [
        { label: "Two years ago", parts: [
          { kind: "code", share: 55, label: "Writing code" },
          { kind: "review", share: 25, label: "Reviewing" },
          { kind: "people", share: 20, label: "Customers" }
        ] },
        { label: "Today", parts: [
          { kind: "people", share: 45, label: "Customers & requirements" },
          { kind: "agents", share: 35, label: "Steering agents" },
          { kind: "review", share: 20, label: "Testing & verifying" }
        ] }
      ],
      sub: "Code I type myself: zero. Code I read line by line: about 2%.",
      notes: "Today: zero code typed myself, about 20% testing and verifying by hand, and only about 2% reading code line by line; the rest steering agents and talking to customers. The customer time is where the new input comes from: what to build next, and what to do better.\nThen the personal beat: 2024, Claude iterating on my codebase through Desktop Commander, and the code was good. Not demo-good, merge-good. All in. 'I don't call it vibe coding: with checks in place, it's engineering with agents.'",
      agent: [{ reveal: true }, { reveal: true }, { reveal: true }]
    },

    /* ======== 3 · Meet the users · 6:00–8:00 ======== */
    {
      at: "6:00", type: "html", mode: "slides",
      html: "<div style=\"display:grid;grid-template-columns:1fr 380px;gap:64px;align-items:center;height:100%\"><div style=\"display:grid;gap:26px\"><p class=\"kicker\">Who I build for</p><h1 class=\"title\" style=\"font-size:72px\">Your hardest user can barely use a phone.</h1><div style=\"display:grid;gap:22px\"><div class=\"frag\" style=\"border-top:2px solid var(--slide-ink);padding-top:14px\"><b style=\"font:600 60px/1.05 var(--display);letter-spacing:-.02em\">XXL</b><div style=\"font:400 22px/1.4 var(--body);color:var(--slide-muted);margin-top:6px\">text, on slow Android tablets. The default, not the edge case.</div></div><div class=\"frag\" style=\"border-top:2px solid var(--slide-ink);padding-top:14px\"><b style=\"font:600 60px/1.05 var(--display);letter-spacing:-.02em\">14</b><div style=\"font:400 22px/1.4 var(--body);color:var(--slide-muted);margin-top:6px\">languages. Everyone reads everything in their own.</div></div><div class=\"frag\" style=\"border-top:2px solid var(--slide-ink);padding-top:14px\"><b style=\"font:600 60px/1.05 var(--display);letter-spacing:-.02em\">Asks back</b><div style=\"font:400 22px/1.4 var(--body);color:var(--slide-muted);margin-top:6px\">guided voice and forms. Sites are loud.</div></div></div></div><figure style=\"margin:0;display:grid;gap:10px;justify-items:center\"><img src=\"img/max-font-phone.jpg\" alt=\"An older version of the BauTask app at the largest text size: buttons and labels cut off\" style=\"height:640px;border-radius:18px;display:block\"><figcaption style=\"font:400 15px/1.4 var(--mono);color:var(--slide-muted);text-align:center\">An older version of our app, at the largest text size</figcaption></figure></div>",
      notes: "Before the first click: my users aren't in an office. Foremen, roofers, road builders, scaffolders. Companies from 10 to 10,000 employees, crews change daily, many don't speak German as a first language. A muddy site at seven, a phone in one hand. One customer told us: finally, software that doesn't smell like the office ('Endlich eine Software, die nicht nach B\u00fcro riecht'). Pause for the laugh.\nThe phone: an older version of our app at the largest text size. Buttons cut off, labels clipped. That's how many of our users see it.\nEverything means everything: the app and what colleagues typed. 14 languages.\nMany of these users barely use a smartphone. Designing for them is a different job from designing for developers.\nVoice is the AI-hype answer, but sites are too loud, and a blank 'just say it' leaves people stuck. A guided form tells them what to enter.\nThis is domain knowledge an agent doesn't have unless you write it down. It comes back in the testing rules.",
      agent: [{ reveal: true }, { reveal: true }, { reveal: true }]
    },



    /* ======== 4 · Audience game · 8:00–11:30 ======== */
    {
      type: "quote", at: "8:00", mode: "slides",
      kicker: "Your turn · spot the ambiguity",
      quote: "Can the app show me who's on which site?",
      cite: "A real kind of request. You have 60 seconds: how many meanings can you find? Shout them out.",
      notes: "Warm-up first, the Excel story: a customer asked us to remove the three extra columns from our Excel export. There were no extra columns. She'd got a wider monitor and saw them for the first time.\nAn agent would have removed them. 'Since when?' would have found the monitor.\nSecond change of pace. Let people shout. Repeat good answers into the mic.\nThen press → to show the interpretations, and → again for the agent's take."
    },
    {
      type: "points", mode: "split", clearAgent: true,
      kicker: "What the room found",
      title: "Same sentence, four products.",
      stepwise: true,
      points: [
        "Planned: who is scheduled on the Plantafel today",
        "Actual: who clocked in on site with GPS",
        "Right now: who is there this minute, including subcontractors",
        "History: who was there on the day the defect happened"
      ],
      notes: "Each meaning is a different query, a different screen, and a different privacy question.\nLast beat: the agent picks one silently and is confident about it. That's the danger.\nLine to land: 'Asking the second question is now the most valuable thing an engineer does.' Same pattern as the cold open, second time.",
      agent: [
        { reveal: true }, { reveal: true }, { reveal: true }, { reveal: true },
        { prompt: "Can the app show me who's on which site?" },
        [
          { think: "Reading schema", ms: 900 },
          { out: [
            ["ok", "Added view: Site staffing (from crew_assignments)"],
            ["say", "Done. Shows the planned crews per site for today."]
          ] }
        ]
      ]
    },

    /* ======== 5 · DEFINE: one request, end to end · 11:30–19:00 · demo ======== */
    {
      type: "flow", at: "11:30", mode: "slides", clearAgent: true, signpost: 0,
      kicker: "Back to the missing timesheets",
      title: "From a ticket to production.",
      flow: ["Conversation", "Plan file", "Agent session", "Review", "Shipped"],
      highlight: -1,
      notes: "Now do the cold-open request properly, step by step. This is the centrepiece, about nine minutes."
    },
    {
      type: "flow", mode: "slides",
      kicker: "Step 1 · Conversation",
      title: "The question I asked back.",
      flow: ["Conversation", "Plan file", "Agent session", "Review", "Shipped"],
      highlight: 0,
      sub: "\u201cThe daily overview isn't sufficient here?\u201d",
      notes: "My real first reply on the ticket. We already had a daily list of who hadn't handed in a timesheet.\nThe answer: one day isn't enough. The office checks a week at the end of the week, payroll checks a month. So the real question wasn't 'weekly report', it was 'how do you check timesheets?'\nThat came from listening, not from the code."
    },
    {
      type: "history", mode: "slides",
      kicker: "Step 2 · Plan file",
      title: "Five lines. Each one earned.",
      lines: [
        ["c", "# docs/plans/zeitleiste.md"],
        ["p", "WHO     the office: checking timesheets, not chasing one list"],
        ["p", "WHAT    who's missing a timesheet, per employee and day"],
        ["p", "SCOPE   one view, day / week / month, every customer"],
        ["p", "SOURCE  timesheets + working-time models + absences"],
        ["p", "EDGE    leave, sick, part-time, free days: not missing"],
        ["c", "# lines 3 to 5 came from knowing the system"]
      ],
      notes: "This is the slide to slow down on. Point at SCOPE, SOURCE and EDGE.\nSCOPE: one customer asked for a week, but every customer checks timesheets. Build it once, for all of them.\nEDGE: someone on holiday, on sick leave, part-time on Fridays or on a company holiday isn't missing a timesheet. You only know that if you know where working time, leave and sick notes live.\nThe five lines are a reconstruction of the definition, in today's format."
    },
    {
      type: "flow", mode: "split",
      kicker: "Step 3 · Agent session",
      title: "Precise input. A precise question back.",
      flow: ["Conversation", "Plan file", "Agent session", "Review", "Shipped"],
      highlight: 2,
      notes: "Scripted playback. Speak as if it's happening now.\nThe agent's question is the point: good input makes it ask the right thing.",
      agent: [
        { prompt: "Build the Zeitleiste from docs/plans/zeitleiste.md. Ask before you guess." },
        [
          { think: "Reading the plan file and models", ms: 1100 },
          { out: [
            ["tool", "read <b>configurable_time_sheet.rb</b>, <b>employee_working_hour.rb</b>, <b>leave_request.rb</b>, <b>sick_note.rb</b>"],
            ["say", "Plan: 1) employees \u00d7 days grid  2) day / week / month switch  3) tests incl. absences"],
            ["warn", "Part-timers with no hours on Fridays: show Friday as 'missing' or as 'not scheduled'?"]
          ] }
        ],
        { prompt: "Not scheduled. Grey, not red." },
        [
          { think: "Implementing", ms: 1000 },
          { out: [
            ["ok", "Zeitleiste: day, week, month"],
            ["ok", "Leave, sick notes and free days shown, not counted as missing"],
            ["ok", "Tests incl. part-time and absences"],
            ["say", "Opened pull request for review."]
          ] }
        ]
      ]
    },
    {
      type: "flow", mode: "split", clearAgent: true,
      kicker: "Step 4 · Review",
      title: "Agents review the PR. I review the problem.",
      flow: ["Conversation", "Plan file", "Agent session", "Review", "Shipped"],
      highlight: 3,
      notes: "'I was hired to review code. Today a guided agent does the first pass.' Our review agents are told to hunt two things: tenant scoping and N+1 queries.\nThe real story: they also catch bugs nobody asked about, like break time silently deducted twice, or not deducted when it should be. In payroll. That would have hurt for months.\nMy review is one question: can the office check a week of timesheets at a glance?",
      agent: [
        { prompt: "/review the Zeitleiste pull request" },
        [
          { think: "Reading the pull request and the plan file", ms: 1100 },
          { out: [
            ["ok", "Every line of docs/plans/zeitleiste.md covered"],
            ["ok", "Tenant scoping: every query scoped to the company"],
            ["warn", "N+1: absences queried per day and employee. Load them once."],
            ["say", "Commented on the pull request: 1 blocking issue, fix suggested."]
          ] }
        ]
      ]
    },
    {
      type: "html", mode: "slides",
      html: "<p class=\"kicker\">Step 5 \u00b7 Shipped</p><h1 class=\"title\" style=\"max-width:none;font-size:64px\">One customer asked. <b>Every customer</b> got it.</h1><figure style=\"margin:0\"><img src=\"img/zeitleiste.jpg\" alt=\"The Zeitleiste: employees by day for a month, with hours, holidays (U) and sick days (K)\" style=\"width:100%;height:470px;object-fit:cover;object-position:top left;border-radius:10px;border:1px solid var(--slide-line);display:block\"><figcaption style=\"font:400 16px/1.4 var(--mono);color:var(--slide-muted);margin-top:10px\">The Zeitleiste: day, week, month. U = holiday, K = sick. Today the view most of our users check timesheets with.</figcaption></figure>",
      notes: "The screenshot is a demo tenant with generated names.\nReal outcome: a full, modular day / week / month view, the Zeitleiste. It's now the feature most people like to use for checking timesheets.\nOn speed: full web and mobile test suite 12 minutes, deploy instant. For small changes we've shipped during a sales call, under 30 minutes, if the definition is right. Real: we've built changes during sales calls, while the customer was still on the line. Under 30 minutes, if the definition is right: build time plus 12 minutes of CI, and deploy is instant.\nAsk: 'How long would this have taken your team two years ago?' Let one or two people answer.\nThen: 'And the five lines don't have to come from me.'"
    },


    /* ======== 6 · DEFINE: scaling the definition · 19:00–21:00 ======== */
    {
      at: "19:00", type: "html", mode: "slides", clearAgent: true,
      html: '<p class="kicker">Scaling the definition</p>' +
        '<h1 class="title" style="max-width:none">The skill asks the second question.</h1>' +
        '<div style="display:grid;grid-template-columns:1.15fr 1fr;gap:40px;align-items:start;min-height:0">' +
          '<div style="display:grid;gap:18px">' +
            '<figure class="frag" style="margin:0"><figcaption class="kicker" style="margin-bottom:10px">Before: a ticket, as written</figcaption>' +
              '<img src="img/ticket-before.png" alt="Old ticket: custom statuses, status filtering, status management, backward compatibility" style="width:100%;border-radius:8px;display:block"></figure>' +
            '<p class="frag" style="margin:0;font:400 28px/1.4 var(--mono);color:var(--accent)">Me: Task status? Site status? Invoice status? Planning status?</p>' +
          '</div>' +
          '<figure class="frag" style="margin:0"><figcaption class="kicker" style="margin-bottom:10px">After: via the ticket skill, in Plane</figcaption>' +
            '<div style="height:430px;overflow:hidden;border-radius:8px"><img src="img/ticket-after.png" alt="New ticket in Plane: problem, desired state, acceptance criteria with test setup" style="width:100%;display:block"></div></figure>' +
        '</div>',
      notes: "Two real tickets. Before: four words of acceptance criteria, and my reply was four questions. Which status? That's the ambiguity game again, in our own backlog.\nAfter: customer success wrote it through the ticket skill. Problem as it is today, what's wanted, acceptance criteria with a test setup. An agent can start on it without coming back to me.\nThen: we chose Plane over Jira because agents read and write tickets through MCP.",
      agent: [{ reveal: true }, { reveal: true }, { reveal: true }]
    },
    {
      type: "points", mode: "slides",
      kicker: "Defining also means saying \u201cnot like that\u201d",
      title: "\u201cYes. But not like that.\u201d",
      points: [
        "Asked: move hours between projects, to keep project budgets right",
        "The catch: those same hours are legal working time. They feed payroll",
        "Built: close a month. Reopen only on request, and every change is tracked and audited"
      ],
      notes: "A real story, and the answer wasn't a flat no. Customers can still move hours, but the system knows when a month was reopened, by whom, and what changed.\nThe nerd part: knowing that one number serves two masters, the project budget and the payroll.\nAn agent would have built the plain edit. Happily.\nThen the turn to Trust: 'More definitions, from more people, built by more agents. That only works if I can trust what ships without reading every line.'"
    },

    /* ======== 7 · TRUST: orchestration runs on trust · 21:00–27:00 ======== */
    {
      type: "statement", at: "21:00", mode: "slides", signpost: 2,
      kicker: "The part nobody demos",
      title: "You can only orchestrate what you can trust.",
      sub: "I can't read every line from several agents a day. So trust has to come from the system, not from my eyes.",
      notes: "Karpathy's line fits here: 'A demo only has to work once. A product has to work every time.' (He put it as works.any() vs works.all().)\nThis is the turn of the talk. Your real investment: the test suite, quality gates, faster pipelines, written rules.\nIt also answers the question every engineer in the room is thinking: 'but how do you know it works?'"
    },
    {
      type: "statement", mode: "agent", clearAgent: true,
      kicker: "", title: "",
      notes: "Maximized. Every change from every agent goes through the same gates as human code. Old-school quality gates, and they matter more now than ever.\nPoint out the i18n and cross-project lines: those are the checks you built yourself.\nTranslations are added automatically in each agent's worktree, with a glossary for construction jargon so the wording is safe.\nThe last line pays off later: release notes are written from the commit messages, on every release.\nLast beat: the same gates in Java tools, for the room. Keep it light: 'Different names. Same gates.'",
      agent: [
        { prompt: "/ship zeitleiste" },
        { out: [
          ["ok", "format         rubocop -a · prettier                  0.8s"],
          ["ok", "lint           rubocop · eslint · tsc                 14s"]
        ] },
        [
          { think: "Running test suite", ms: 1400 },
          { out: [
            ["ok", "tests          rspec · jest · e2e, web + mobile       12m"],
            ["ok", "spec guard     bin/spec-guard · Bautask/* cops"],
            ["ok", "coverage       ≥ 80% across all shards · deploy waits"],
            ["ok", "i18n           14 languages · construction glossary"],
            ["ok", "cross-project  mobile API contract matches app"],
            ["ok", "security       brakeman · bundler-audit · npm audit"],
            ["ok", "review         agent review of the PR against the plan file"]
          ] }
        ],
        [
          { think: "Publishing", ms: 900 },
          { out: [
            ["ok", "web            deployed"],
            ["ok", "mobile         OTA update published"],
            ["ok", "release notes  written from the commits, published"],
            ["say", "Shipped. Third deploy today."]
          ] }
        ],
        [
          { clear: true },
          { out: [
            ["say", "For the Java nerds, in your world:"],
            ["tool", "<b>format</b>         Spotless \u00b7 google-java-format"],
            ["tool", "<b>lint</b>           Checkstyle \u00b7 PMD \u00b7 Error Prone"],
            ["tool", "<b>tests</b>          JUnit 5 \u00b7 Mockito \u00b7 Testcontainers"],
            ["tool", "<b>spec guard</b>     ArchUnit"],
            ["tool", "<b>coverage</b>       JaCoCo, with a minimum in the build"],
            ["tool", "<b>cross-project</b>  Pact \u00b7 OpenAPI contract tests"],
            ["tool", "<b>security</b>       SpotBugs + Find Security Bugs \u00b7 OWASP Dependency-Check"],
            ["dim", "Different names. Same gates."]
          ] }
        ]
      ]
    },
    {
      type: "html", mode: "slides",
      html: "<p class=\"kicker\">Every change, every agent, every time</p><h1 class=\"title\">Trust isn't free.</h1><div style=\"display:grid;grid-template-columns:auto 1fr;gap:64px;align-items:end;margin-top:8px\"><div><b style=\"font:600 120px/1 var(--display);letter-spacing:-.03em\">300\u2013400k</b><div style=\"font:400 26px/1.4 var(--body);color:var(--slide-muted);margin-top:10px\">CI minutes a month</div></div><div><div style=\"display:flex;gap:14px;flex-wrap:wrap\"><svg viewBox=\"0 0 48 60\" width=\"56\" height=\"70\" aria-hidden=\"true\"><rect x=\"2\" y=\"2\" width=\"44\" height=\"56\" rx=\"6\" fill=\"none\" stroke=\"var(--slide-ink)\" stroke-width=\"3\"/><line x1=\"10\" x2=\"38\" y1=\"18\" y2=\"18\" stroke=\"var(--slide-ink)\" stroke-width=\"3\"/><line x1=\"10\" x2=\"38\" y1=\"30\" y2=\"30\" stroke=\"var(--slide-ink)\" stroke-width=\"3\"/><circle cx=\"36\" cy=\"46\" r=\"4\" fill=\"var(--accent)\"/></svg><svg viewBox=\"0 0 48 60\" width=\"56\" height=\"70\" aria-hidden=\"true\"><rect x=\"2\" y=\"2\" width=\"44\" height=\"56\" rx=\"6\" fill=\"none\" stroke=\"var(--slide-ink)\" stroke-width=\"3\"/><line x1=\"10\" x2=\"38\" y1=\"18\" y2=\"18\" stroke=\"var(--slide-ink)\" stroke-width=\"3\"/><line x1=\"10\" x2=\"38\" y1=\"30\" y2=\"30\" stroke=\"var(--slide-ink)\" stroke-width=\"3\"/><circle cx=\"36\" cy=\"46\" r=\"4\" fill=\"var(--accent)\"/></svg><svg viewBox=\"0 0 48 60\" width=\"56\" height=\"70\" aria-hidden=\"true\"><rect x=\"2\" y=\"2\" width=\"44\" height=\"56\" rx=\"6\" fill=\"none\" stroke=\"var(--slide-ink)\" stroke-width=\"3\"/><line x1=\"10\" x2=\"38\" y1=\"18\" y2=\"18\" stroke=\"var(--slide-ink)\" stroke-width=\"3\"/><line x1=\"10\" x2=\"38\" y1=\"30\" y2=\"30\" stroke=\"var(--slide-ink)\" stroke-width=\"3\"/><circle cx=\"36\" cy=\"46\" r=\"4\" fill=\"var(--accent)\"/></svg><svg viewBox=\"0 0 48 60\" width=\"56\" height=\"70\" aria-hidden=\"true\"><rect x=\"2\" y=\"2\" width=\"44\" height=\"56\" rx=\"6\" fill=\"none\" stroke=\"var(--slide-ink)\" stroke-width=\"3\"/><line x1=\"10\" x2=\"38\" y1=\"18\" y2=\"18\" stroke=\"var(--slide-ink)\" stroke-width=\"3\"/><line x1=\"10\" x2=\"38\" y1=\"30\" y2=\"30\" stroke=\"var(--slide-ink)\" stroke-width=\"3\"/><circle cx=\"36\" cy=\"46\" r=\"4\" fill=\"var(--accent)\"/></svg><svg viewBox=\"0 0 48 60\" width=\"56\" height=\"70\" aria-hidden=\"true\"><rect x=\"2\" y=\"2\" width=\"44\" height=\"56\" rx=\"6\" fill=\"none\" stroke=\"var(--slide-ink)\" stroke-width=\"3\"/><line x1=\"10\" x2=\"38\" y1=\"18\" y2=\"18\" stroke=\"var(--slide-ink)\" stroke-width=\"3\"/><line x1=\"10\" x2=\"38\" y1=\"30\" y2=\"30\" stroke=\"var(--slide-ink)\" stroke-width=\"3\"/><circle cx=\"36\" cy=\"46\" r=\"4\" fill=\"var(--accent)\"/></svg><svg viewBox=\"0 0 48 60\" width=\"56\" height=\"70\" aria-hidden=\"true\"><rect x=\"2\" y=\"2\" width=\"44\" height=\"56\" rx=\"6\" fill=\"none\" stroke=\"var(--slide-ink)\" stroke-width=\"3\"/><line x1=\"10\" x2=\"38\" y1=\"18\" y2=\"18\" stroke=\"var(--slide-ink)\" stroke-width=\"3\"/><line x1=\"10\" x2=\"38\" y1=\"30\" y2=\"30\" stroke=\"var(--slide-ink)\" stroke-width=\"3\"/><circle cx=\"36\" cy=\"46\" r=\"4\" fill=\"var(--accent)\"/></svg><svg viewBox=\"0 0 48 60\" width=\"56\" height=\"70\" aria-hidden=\"true\"><rect x=\"2\" y=\"2\" width=\"44\" height=\"56\" rx=\"6\" fill=\"none\" stroke=\"var(--slide-ink)\" stroke-width=\"3\"/><line x1=\"10\" x2=\"38\" y1=\"18\" y2=\"18\" stroke=\"var(--slide-ink)\" stroke-width=\"3\"/><line x1=\"10\" x2=\"38\" y1=\"30\" y2=\"30\" stroke=\"var(--slide-ink)\" stroke-width=\"3\"/><circle cx=\"36\" cy=\"46\" r=\"4\" fill=\"var(--accent)\"/></svg><svg viewBox=\"0 0 48 60\" width=\"56\" height=\"70\" aria-hidden=\"true\"><rect x=\"2\" y=\"2\" width=\"44\" height=\"56\" rx=\"6\" fill=\"none\" stroke=\"var(--slide-ink)\" stroke-width=\"3\"/><line x1=\"10\" x2=\"38\" y1=\"18\" y2=\"18\" stroke=\"var(--slide-ink)\" stroke-width=\"3\"/><line x1=\"10\" x2=\"38\" y1=\"30\" y2=\"30\" stroke=\"var(--slide-ink)\" stroke-width=\"3\"/><circle cx=\"36\" cy=\"46\" r=\"4\" fill=\"var(--accent)\"/></svg><svg viewBox=\"0 0 48 60\" width=\"56\" height=\"70\" aria-hidden=\"true\"><rect x=\"2\" y=\"2\" width=\"44\" height=\"56\" rx=\"6\" fill=\"none\" stroke=\"var(--slide-ink)\" stroke-width=\"3\"/><line x1=\"10\" x2=\"38\" y1=\"18\" y2=\"18\" stroke=\"var(--slide-ink)\" stroke-width=\"3\"/><line x1=\"10\" x2=\"38\" y1=\"30\" y2=\"30\" stroke=\"var(--slide-ink)\" stroke-width=\"3\"/><circle cx=\"36\" cy=\"46\" r=\"4\" fill=\"var(--accent)\"/></svg></div><div style=\"font:400 26px/1.4 var(--body);color:var(--slide-muted);margin-top:14px\">\u2248 9 machines, testing around the clock</div></div></div><p class=\"sub\" style=\"max-width:none\">The CI bill is what lets me stop reading every line.</p>",
      notes: "Let the number land. 300k–400k minutes a month ≈ 7–9 machines running 24/7 (a month has about 43,800 minutes)."
    },

    {
      type: "history", mode: "slides",
      kicker: "Written down once, read by every agent",
      title: "Rules live in the repo.",
      lines: [
        ["c", "$ ls .claude/rules"],
        ["p", "testing.md       how I want my code tested"],
        ["p", "frontend.md      design and component patterns"],
        ["p", "migrations.md    what a safe migration looks like"],
        ["p", "mobile-api.md    the contract with the React Native app"],
        ["p", "i18n.md          every string, every language"],
        ["c", "# + timesheets, calendar, imports-exports, beam"]
      ],
      notes: "From your real repo. The rules are the 'knowing the system' part of the talk, written down.\nGood line: 'The rules are how my nerd knowledge scales to several agents at once.'"
    },
    {
      type: "history", mode: "slides",
      kicker: "From .claude/rules/testing.md",
      title: "Write down how your tests lie.",
      lines: [
        ["c", "## Tests that pass on a bug"],
        ["p", "- N+1 hides if request #1 is after sign_in"],
        ["p", "- \"not included\" passes on a redirect"],
        ["p", "- CSRF is off in tests. Only prod sees it"],
        ["c", "## Tests that flake"],
        ["p", "- No ORDER BY: green locally, flaky on CI"],
        ["p", "- Never name a helper `redo`. It loops."]
      ],
      notes: "Before it appears: Kent Beck (JUnit) calls his agent 'the genie'; a warning sign is the genie deleting tests. But a test doesn't need to be deleted to lie.\nIn Ruby, tests are called specs. Say 'tests'.\n1 N+1: the test counts DB queries for 1 row vs 3 rows. The first request after login does one-time extra queries (session, tenant), which hide the growth. Fix: warm up first. Java: a Hibernate query-count test where the first call also warms things up.\n2 Redirect: 'page doesn't contain X' is true for an empty redirect body. Fix: assert 200 first. Java: MockMvc not(containsString()) on a 302.\n3 CSRF: Rails turns it off in tests, so a broken token only fails in production. Java: Spring Security tests with CSRF disabled.\n4 ORDER BY: no order guaranteed; exact-order asserts pass locally, flake in CI. Java: assertEquals on findAll(); use containsExactlyInAnyOrder.\n5 redo: a Ruby keyword that restarts the block; a helper called redo restarts the test forever. The laugh.\nThen: I also spent a lot of time making the suite fast, because fast feedback lets agents iterate without me.",
    },
    {
      type: "html", mode: "slides",
      html: "<p class=\"kicker\">What trust buys you</p><h1 class=\"title\" style=\"max-width:none\">Shipping became boring. In a good way.</h1><figure class=\"frag\" style=\"margin:0\"><svg viewBox=\"0 0 1300 304\" width=\"100%\" height=\"220\" preserveAspectRatio=\"none\" style=\"display:block\" role=\"img\" aria-label=\"Production releases per workday, last 3 months\"><rect x=\"42.0\" y=\"258.5\" width=\"16.0\" height=\"41.5\" fill=\"var(--slide-ink)\"/><rect x=\"42.0\" y=\"237.7\" width=\"16.0\" height=\"20.8\" fill=\"var(--accent)\"/><rect x=\"82.0\" y=\"279.2\" width=\"16.0\" height=\"20.8\" fill=\"var(--slide-ink)\"/><rect x=\"82.0\" y=\"258.5\" width=\"16.0\" height=\"20.8\" fill=\"var(--accent)\"/><rect x=\"102.0\" y=\"279.2\" width=\"16.0\" height=\"20.8\" fill=\"var(--slide-ink)\"/><rect x=\"102.0\" y=\"258.5\" width=\"16.0\" height=\"20.8\" fill=\"var(--accent)\"/><rect x=\"122.0\" y=\"237.7\" width=\"16.0\" height=\"62.3\" fill=\"var(--slide-ink)\"/><rect x=\"122.0\" y=\"154.6\" width=\"16.0\" height=\"83.1\" fill=\"var(--accent)\"/><rect x=\"162.0\" y=\"258.5\" width=\"16.0\" height=\"41.5\" fill=\"var(--slide-ink)\"/><rect x=\"162.0\" y=\"216.9\" width=\"16.0\" height=\"41.5\" fill=\"var(--accent)\"/><rect x=\"182.0\" y=\"258.5\" width=\"16.0\" height=\"41.5\" fill=\"var(--slide-ink)\"/><rect x=\"182.0\" y=\"237.7\" width=\"16.0\" height=\"20.8\" fill=\"var(--accent)\"/><rect x=\"202.0\" y=\"279.2\" width=\"16.0\" height=\"20.8\" fill=\"var(--slide-ink)\"/><rect x=\"222.0\" y=\"258.5\" width=\"16.0\" height=\"41.5\" fill=\"var(--slide-ink)\"/><rect x=\"222.0\" y=\"237.7\" width=\"16.0\" height=\"20.8\" fill=\"var(--accent)\"/><rect x=\"242.0\" y=\"279.2\" width=\"16.0\" height=\"20.8\" fill=\"var(--slide-ink)\"/><rect x=\"242.0\" y=\"258.5\" width=\"16.0\" height=\"20.8\" fill=\"var(--accent)\"/><rect x=\"262.0\" y=\"279.2\" width=\"16.0\" height=\"20.8\" fill=\"var(--slide-ink)\"/><rect x=\"262.0\" y=\"258.5\" width=\"16.0\" height=\"20.8\" fill=\"var(--accent)\"/><rect x=\"282.0\" y=\"279.2\" width=\"16.0\" height=\"20.8\" fill=\"var(--slide-ink)\"/><rect x=\"302.0\" y=\"279.2\" width=\"16.0\" height=\"20.8\" fill=\"var(--slide-ink)\"/><rect x=\"322.0\" y=\"237.7\" width=\"16.0\" height=\"62.3\" fill=\"var(--slide-ink)\"/><rect x=\"322.0\" y=\"216.9\" width=\"16.0\" height=\"20.8\" fill=\"var(--accent)\"/><rect x=\"342.0\" y=\"175.4\" width=\"16.0\" height=\"124.6\" fill=\"var(--slide-ink)\"/><rect x=\"362.0\" y=\"258.5\" width=\"16.0\" height=\"41.5\" fill=\"var(--slide-ink)\"/><rect x=\"362.0\" y=\"237.7\" width=\"16.0\" height=\"20.8\" fill=\"var(--accent)\"/><rect x=\"382.0\" y=\"279.2\" width=\"16.0\" height=\"20.8\" fill=\"var(--slide-ink)\"/><rect x=\"382.0\" y=\"237.7\" width=\"16.0\" height=\"41.5\" fill=\"var(--accent)\"/><rect x=\"402.0\" y=\"216.9\" width=\"16.0\" height=\"83.1\" fill=\"var(--slide-ink)\"/><rect x=\"402.0\" y=\"196.2\" width=\"16.0\" height=\"20.8\" fill=\"var(--accent)\"/><rect x=\"422.0\" y=\"279.2\" width=\"16.0\" height=\"20.8\" fill=\"var(--slide-ink)\"/><rect x=\"442.0\" y=\"237.7\" width=\"16.0\" height=\"62.3\" fill=\"var(--slide-ink)\"/><rect x=\"442.0\" y=\"175.4\" width=\"16.0\" height=\"62.3\" fill=\"var(--accent)\"/><rect x=\"462.0\" y=\"279.2\" width=\"16.0\" height=\"20.8\" fill=\"var(--slide-ink)\"/><rect x=\"482.0\" y=\"279.2\" width=\"16.0\" height=\"20.8\" fill=\"var(--slide-ink)\"/><rect x=\"482.0\" y=\"216.9\" width=\"16.0\" height=\"62.3\" fill=\"var(--accent)\"/><rect x=\"502.0\" y=\"279.2\" width=\"16.0\" height=\"20.8\" fill=\"var(--slide-ink)\"/><rect x=\"502.0\" y=\"258.5\" width=\"16.0\" height=\"20.8\" fill=\"var(--accent)\"/><rect x=\"522.0\" y=\"258.5\" width=\"16.0\" height=\"41.5\" fill=\"var(--slide-ink)\"/><rect x=\"522.0\" y=\"216.9\" width=\"16.0\" height=\"41.5\" fill=\"var(--accent)\"/><rect x=\"542.0\" y=\"258.5\" width=\"16.0\" height=\"41.5\" fill=\"var(--slide-ink)\"/><rect x=\"562.0\" y=\"258.5\" width=\"16.0\" height=\"41.5\" fill=\"var(--slide-ink)\"/><rect x=\"562.0\" y=\"237.7\" width=\"16.0\" height=\"20.8\" fill=\"var(--accent)\"/><rect x=\"582.0\" y=\"216.9\" width=\"16.0\" height=\"83.1\" fill=\"var(--slide-ink)\"/><rect x=\"602.0\" y=\"279.2\" width=\"16.0\" height=\"20.8\" fill=\"var(--slide-ink)\"/><rect x=\"602.0\" y=\"258.5\" width=\"16.0\" height=\"20.8\" fill=\"var(--accent)\"/><rect x=\"622.0\" y=\"279.2\" width=\"16.0\" height=\"20.8\" fill=\"var(--slide-ink)\"/><rect x=\"642.0\" y=\"237.7\" width=\"16.0\" height=\"62.3\" fill=\"var(--slide-ink)\"/><rect x=\"662.0\" y=\"216.9\" width=\"16.0\" height=\"83.1\" fill=\"var(--slide-ink)\"/><rect x=\"662.0\" y=\"113.1\" width=\"16.0\" height=\"103.8\" fill=\"var(--accent)\"/><rect x=\"682.0\" y=\"258.5\" width=\"16.0\" height=\"41.5\" fill=\"var(--slide-ink)\"/><rect x=\"682.0\" y=\"216.9\" width=\"16.0\" height=\"41.5\" fill=\"var(--accent)\"/><rect x=\"702.0\" y=\"258.5\" width=\"16.0\" height=\"41.5\" fill=\"var(--slide-ink)\"/><rect x=\"702.0\" y=\"216.9\" width=\"16.0\" height=\"41.5\" fill=\"var(--accent)\"/><rect x=\"722.0\" y=\"216.9\" width=\"16.0\" height=\"83.1\" fill=\"var(--slide-ink)\"/><rect x=\"722.0\" y=\"154.6\" width=\"16.0\" height=\"62.3\" fill=\"var(--accent)\"/><rect x=\"742.0\" y=\"258.5\" width=\"16.0\" height=\"41.5\" fill=\"var(--slide-ink)\"/><rect x=\"742.0\" y=\"237.7\" width=\"16.0\" height=\"20.8\" fill=\"var(--accent)\"/><rect x=\"762.0\" y=\"279.2\" width=\"16.0\" height=\"20.8\" fill=\"var(--slide-ink)\"/><rect x=\"762.0\" y=\"258.5\" width=\"16.0\" height=\"20.8\" fill=\"var(--accent)\"/><rect x=\"782.0\" y=\"154.6\" width=\"16.0\" height=\"145.4\" fill=\"var(--slide-ink)\"/><rect x=\"782.0\" y=\"30.0\" width=\"16.0\" height=\"124.6\" fill=\"var(--accent)\"/><rect x=\"802.0\" y=\"216.9\" width=\"16.0\" height=\"83.1\" fill=\"var(--slide-ink)\"/><rect x=\"802.0\" y=\"133.8\" width=\"16.0\" height=\"83.1\" fill=\"var(--accent)\"/><rect x=\"822.0\" y=\"258.5\" width=\"16.0\" height=\"41.5\" fill=\"var(--slide-ink)\"/><rect x=\"822.0\" y=\"216.9\" width=\"16.0\" height=\"41.5\" fill=\"var(--accent)\"/><rect x=\"842.0\" y=\"237.7\" width=\"16.0\" height=\"62.3\" fill=\"var(--slide-ink)\"/><rect x=\"842.0\" y=\"175.4\" width=\"16.0\" height=\"62.3\" fill=\"var(--accent)\"/><rect x=\"862.0\" y=\"258.5\" width=\"16.0\" height=\"41.5\" fill=\"var(--slide-ink)\"/><rect x=\"882.0\" y=\"237.7\" width=\"16.0\" height=\"62.3\" fill=\"var(--slide-ink)\"/><rect x=\"882.0\" y=\"216.9\" width=\"16.0\" height=\"20.8\" fill=\"var(--accent)\"/><rect x=\"902.0\" y=\"279.2\" width=\"16.0\" height=\"20.8\" fill=\"var(--slide-ink)\"/><rect x=\"922.0\" y=\"237.7\" width=\"16.0\" height=\"62.3\" fill=\"var(--slide-ink)\"/><rect x=\"922.0\" y=\"196.2\" width=\"16.0\" height=\"41.5\" fill=\"var(--accent)\"/><rect x=\"942.0\" y=\"279.2\" width=\"16.0\" height=\"20.8\" fill=\"var(--slide-ink)\"/><rect x=\"942.0\" y=\"216.9\" width=\"16.0\" height=\"62.3\" fill=\"var(--accent)\"/><rect x=\"962.0\" y=\"279.2\" width=\"16.0\" height=\"20.8\" fill=\"var(--slide-ink)\"/><rect x=\"982.0\" y=\"258.5\" width=\"16.0\" height=\"41.5\" fill=\"var(--slide-ink)\"/><rect x=\"982.0\" y=\"196.2\" width=\"16.0\" height=\"62.3\" fill=\"var(--accent)\"/><rect x=\"1002.0\" y=\"279.2\" width=\"16.0\" height=\"20.8\" fill=\"var(--slide-ink)\"/><rect x=\"1002.0\" y=\"258.5\" width=\"16.0\" height=\"20.8\" fill=\"var(--accent)\"/><rect x=\"1022.0\" y=\"237.7\" width=\"16.0\" height=\"62.3\" fill=\"var(--slide-ink)\"/><rect x=\"1022.0\" y=\"196.2\" width=\"16.0\" height=\"41.5\" fill=\"var(--accent)\"/><rect x=\"1042.0\" y=\"237.7\" width=\"16.0\" height=\"62.3\" fill=\"var(--slide-ink)\"/><rect x=\"1042.0\" y=\"196.2\" width=\"16.0\" height=\"41.5\" fill=\"var(--accent)\"/><rect x=\"1062.0\" y=\"237.7\" width=\"16.0\" height=\"62.3\" fill=\"var(--slide-ink)\"/><rect x=\"1082.0\" y=\"279.2\" width=\"16.0\" height=\"20.8\" fill=\"var(--slide-ink)\"/><rect x=\"1082.0\" y=\"258.5\" width=\"16.0\" height=\"20.8\" fill=\"var(--accent)\"/><rect x=\"1102.0\" y=\"196.2\" width=\"16.0\" height=\"103.8\" fill=\"var(--slide-ink)\"/><rect x=\"1102.0\" y=\"154.6\" width=\"16.0\" height=\"41.5\" fill=\"var(--accent)\"/><rect x=\"1122.0\" y=\"258.5\" width=\"16.0\" height=\"41.5\" fill=\"var(--slide-ink)\"/><rect x=\"1122.0\" y=\"216.9\" width=\"16.0\" height=\"41.5\" fill=\"var(--accent)\"/><rect x=\"1142.0\" y=\"258.5\" width=\"16.0\" height=\"41.5\" fill=\"var(--slide-ink)\"/><rect x=\"1142.0\" y=\"216.9\" width=\"16.0\" height=\"41.5\" fill=\"var(--accent)\"/><rect x=\"1182.0\" y=\"237.7\" width=\"16.0\" height=\"62.3\" fill=\"var(--slide-ink)\"/><rect x=\"1182.0\" y=\"196.2\" width=\"16.0\" height=\"41.5\" fill=\"var(--accent)\"/><rect x=\"1202.0\" y=\"279.2\" width=\"16.0\" height=\"20.8\" fill=\"var(--accent)\"/><rect x=\"1222.0\" y=\"237.7\" width=\"16.0\" height=\"62.3\" fill=\"var(--slide-ink)\"/><rect x=\"1222.0\" y=\"71.5\" width=\"16.0\" height=\"166.2\" fill=\"var(--accent)\"/><rect x=\"1242.0\" y=\"237.7\" width=\"16.0\" height=\"62.3\" fill=\"var(--slide-ink)\"/><rect x=\"1242.0\" y=\"196.2\" width=\"16.0\" height=\"41.5\" fill=\"var(--accent)\"/><rect x=\"1262.0\" y=\"258.5\" width=\"16.0\" height=\"41.5\" fill=\"var(--slide-ink)\"/><rect x=\"1262.0\" y=\"196.2\" width=\"16.0\" height=\"62.3\" fill=\"var(--accent)\"/><rect x=\"1282.0\" y=\"216.9\" width=\"16.0\" height=\"83.1\" fill=\"var(--slide-ink)\"/><rect x=\"1282.0\" y=\"133.8\" width=\"16.0\" height=\"83.1\" fill=\"var(--accent)\"/><line x1=\"0\" x2=\"1300\" y1=\"225.2\" y2=\"225.2\" stroke=\"var(--slide-muted)\" stroke-dasharray=\"6 6\" stroke-width=\"2\"/><line x1=\"0\" x2=\"1300\" y1=\"300\" y2=\"300\" stroke=\"var(--slide-line)\" stroke-width=\"2\"/></svg><figcaption style=\"display:flex;gap:28px;font:400 16px/1.4 var(--mono);color:var(--slide-muted);margin-top:12px\"><span><i style=\"display:inline-block;width:12px;height:12px;background:var(--slide-ink);margin-right:8px\"></i>web release</span><span><i style=\"display:inline-block;width:12px;height:12px;background:var(--accent);margin-right:8px\"></i>mobile over-the-air update</span><span>- - - average: 3.6 a day</span><span>production releases per workday, Sep\u2013Nov 2026</span></figcaption></figure><div style=\"display:grid;grid-template-columns:1fr 1fr;gap:40px\"><div class=\"frag\" style=\"border-top:2px solid var(--slide-ink);padding-top:12px\"><b style=\"font:600 48px/1.1 var(--display)\">&lt; 20 min</b><div style=\"font:400 22px/1.4 var(--body);color:var(--slide-muted)\">to build an over-the-air update. Everyone is forced onto it, most within a week</div></div><div class=\"frag\" style=\"border-top:2px solid var(--slide-ink);padding-top:12px\"><b style=\"font:600 48px/1.1 var(--display)\">Too fast</b><div style=\"font:400 22px/1.4 var(--body);color:var(--slide-muted)\">the new customer complaint: so many changes they can't keep up</div></div></div>",
      notes: "Real data from GitHub Actions: successful production deploys on main (web) plus over-the-air updates from main (mobile), Sep\u2013Nov 2026. 234 releases on 65 workdays: 3.6 a day. Busiest day: 13.\nReact Native was chosen partly for OTA updates: shipping fast and often to phones on site.\nThe overwhelmed customers get a laugh: 'My biggest support problem is that things change too fast. I'll take that problem.'",
      agent: [{ reveal: true }, { reveal: true }, { reveal: true }]
    },

    {
      type: "points", mode: "slides",
      kicker: "And the time it went wrong",
      title: "Every gate passed. The site didn't.",
      stepwise: true,
      points: [
        "One new, unified filter on every page. Modern, every check green.",
        "A customer called: he couldn't filter his sites anymore. The ugly old filter was <em>his</em>.",
        "Then a photo button that was always there moved up. People thought it was new.",
        "Since then: release notes with every release. So, every day."
      ],
      notes: "Under ninety seconds. Gates check the code; nobody checks people's habits.\nPunchline on the last point: 'So, every day.' Pause for the laugh.\nClose: release notes didn't fix a bug. They fixed the surprise. Users now know the system better and look out for what changed.",
      agent: [{ reveal: true }, { reveal: true }, { reveal: true }, { reveal: true }]
    },

    /* ======== 8 · RUN: building got cheap, running didn't · 27:00–29:00 ======== */
    {
      type: "statement", at: "27:00", mode: "slides", signpost: 3,
      kicker: "Run",
      title: "Building got cheap. Running didn't.",
      sub: "Every feature an agent ships still has to be hosted, patched, secured and paid for. That part is still my daily work.",
      notes: "The counterweight to the whole talk so far. Agents made features cheap; they didn't make operations cheap. If anything, more features means more to run."
    },
    {
      type: "html", mode: "slides", clearAgent: true,
      html: "<p class=\"kicker\">Our own stack</p><h1 class=\"title\">German servers. European providers.</h1><div style=\"display:grid;grid-template-columns:1.4fr 1fr;gap:22px;align-items:start\"><div style=\"border:2px dashed var(--slide-line);border-radius:12px;padding:16px;display:grid;gap:8px\"><div style=\"font:400 14px/1 var(--mono);color:var(--slide-muted)\">GERMANY \u00b7 HETZNER \u00b7 OURS</div><div style=\"border:2px solid var(--slide-ink);border-radius:8px;padding:10px 14px;background:var(--slide-bg);text-align:center\"><div style=\"font:600 20px/1.2 var(--body)\">Load balancer</div></div><div style=\"text-align:center;color:var(--slide-muted);font:400 20px/1 var(--mono)\">\u2193</div><div style=\"display:grid;grid-template-columns:1fr 1fr;gap:8px\"><div style=\"border:2px solid var(--slide-ink);border-radius:8px;padding:10px 14px;background:var(--slide-bg);text-align:center\"><div style=\"font:600 20px/1.2 var(--body)\">Web</div></div><div style=\"border:2px solid var(--slide-ink);border-radius:8px;padding:10px 14px;background:var(--slide-bg);text-align:center\"><div style=\"font:600 20px/1.2 var(--body)\">Web</div></div></div><div style=\"text-align:center;color:var(--slide-muted);font:400 20px/1 var(--mono)\">\u2193</div><div style=\"display:grid;grid-template-columns:1fr 1fr;gap:8px\"><div style=\"border:2px solid var(--slide-ink);border-radius:8px;padding:10px 14px;background:var(--slide-bg);text-align:center\"><div style=\"font:600 20px/1.2 var(--body)\">Database</div></div><div style=\"border:2px solid var(--accent);border-radius:8px;padding:10px 14px;background:var(--slide-bg);text-align:center\"><div style=\"font:600 20px/1.2 var(--body)\">AI server</div><div style=\"font:400 14px/1.3 var(--mono);color:var(--slide-muted);margin-top:4px\">LiteLLM</div></div></div></div><div style=\"border:2px dashed var(--slide-line);border-radius:12px;padding:16px;display:grid;gap:8px\"><div style=\"font:400 14px/1 var(--mono);color:var(--slide-muted)\">EUROPEAN PROVIDERS</div><div style=\"border:2px solid var(--slide-ink);border-radius:8px;padding:10px 14px;background:var(--slide-bg);text-align:center\"><div style=\"font:600 20px/1.2 var(--body)\">Mistral AI</div><div style=\"font:400 14px/1.3 var(--mono);color:var(--slide-muted);margin-top:4px\">France</div></div><div style=\"border:2px solid var(--slide-ink);border-radius:8px;padding:10px 14px;background:var(--slide-bg);text-align:center\"><div style=\"font:600 20px/1.2 var(--body)\">HERE</div><div style=\"font:400 14px/1.3 var(--mono);color:var(--slide-muted);margin-top:4px\">maps, Netherlands</div></div></div></div><p class=\"sub\" style=\"max-width:none;font-size:24px\">Why: GDPR. The price: patching and security are on us.</p>",
      notes: "The reason is GDPR (DSGVO): customer data stays in Europe. That's why the rule applies to every provider, not just hosting: Mistral instead of a US AI API, HERE instead of Google Maps.\nLikely the most interesting slide for a Vienna audience.\nNo morning ritual: monitoring tells me when something's wrong (uptime, errors, servers). The pane shows the kind of alert that lands. Illustrative, not a real incident.",
      agent: [
        [{ mode: "split" }, { out: [
          ["dim", "alerts · 06:58"],
          ["ok", "uptime     all up"],
          ["ok", "servers    normal"],
          ["warn", "invoice OCR: new error, 3 companies"]
        ] }]
      ]
    },

    /* ======== 9 · Your Monday · 29:00–30:30 ======== */
    {
      type: "points", at: "29:00", mode: "slides", signpost: -1,
      kicker: "If you're early in your career",
      title: "Build depth on purpose.",
      stepwise: true,
      points: [
        "Work with code and architecture until the concepts click",
        "Talk to the people who use your software",
        "Learn one system well enough to say \"that breaks X\" in ten seconds",
        "Never stop exploring new technology. Learning, learning, learning."
      ],
      notes: "Practical, not reassuring. The first rungs are thinner; these build the next ones.\nThe number behind it: employment of US software developers aged 22–25 fell close to 20% from its 2022 peak, through September 2025 (Stanford AI Index 2026, citing Brynjolfsson et al.).",
      agent: [{ reveal: true }, { reveal: true }, { reveal: true }, { reveal: true }]
    },
    {
      type: "history", mode: "slides",
      kicker: "Try this on Monday",
      title: "Five lines before any prompt.",
      lines: [
        ["p", "WHO     uses it, where, and when"],
        ["p", "WHAT    the outcome, in their words"],
        ["p", "SCOPE   what's in, and what's explicitly out"],
        ["p", "SOURCE  where the data really lives"],
        ["p", "EDGE    the case only the code knows about"],
        ["c", "# then hand it to your agent and see what it asks back"]
      ],
      notes: "The call to action. Concrete, small, and something they can try in their next ticket. Leave it up for a few seconds so people can photograph it."
    },

    /* ======== 10 · Not done yet · 30:30–31:30 ======== */
    {
      at: "30:30", type: "points", mode: "slides",
      kicker: "Not done yet",
      title: "The goal: the whole loop, without me in it.",
      stepwise: true,
      points: [
        "Ticket, build, gates and shipping already run without me",
        "Checking it for real: Claude in Chrome, agent-device on simulators",
        "Missing: doing that on every change. Mobile CI still runs unit tests only",
        "Exploring: AI testers as personas. Largest font, slow Android"
      ],
      notes: "Karpathy calls this the autonomy slider: how much you let the agent do on its own. Ours is far to the right, except for one step.\nTools: agent-device (Callstack) lets coding agents drive the iOS simulator and Android emulator. The AI testers we're exploring: the open-source mobile-agent-testers template, Claude Code agents on emulators in GitHub Actions, each with a persona (device, font size, language).\nEnd on an open problem and invite the room: 'If you've cracked agentic verification on live systems, find me after the talk.'",
      agent: [{ reveal: true }, { reveal: true }, { reveal: true }, { reveal: true }]
    },

    /* ======== 11 · Close · 31:30–32:30 ======== */
    {
      type: "statement", at: "31:30", mode: "slides", clearAgent: true,
      kicker: "Back to the missing timesheets",
      title: "Same sentence. Defined properly.",
      sub: "Not a better model. A better definition.",
      notes: "The callback. Same agent, same customer sentence as the cold open, but this time it comes with the five lines.\nPress \u2192 to open the agent, \u2192 to type the request, \u2192 to let it run. Each output line maps to a line of the definition: point at SCOPE, SOURCE, EDGE.\nContrast with the opening: then it read two tables and shipped; now it reads where the data really lives and opens a pull request.",
      agent: [
        { mode: "split" },
        { prompt: "A customer writes: \"We'd like a weekly overview of missing timesheets for every employee.\" Build it from the five lines in docs/plans/zeitleiste.md." },
        [
          { think: "Reading docs/plans/zeitleiste.md", ms: 1000 },
          { out: [
            ["tool", "read <b>configurable_time_sheet.rb</b>, <b>employee_working_hour.rb</b>, <b>leave_request.rb</b>, <b>sick_note.rb</b>"],
            ["ok", "SCOPE   one Zeitleiste: day, week, month, every customer"],
            ["ok", "SOURCE  timesheets + working-time models + absences"],
            ["ok", "EDGE    leave, sick, part-time, free days: not missing"],
            ["ok", "Tests cover holiday, sick note, part-time Friday"],
            ["say", "Done. Every line of the plan covered. Pull request open for review."]
          ] }
        ]
      ]
    },
    {
      type: "points", at: "32:30", mode: "slides",
      kicker: "Define · Build · Trust · Run",
      title: "Questions?",
      points: [
        "Define: five lines before any prompt.",
        "Build: let the agents do it. That part got cheap.",
        "Trust: build the gates, so you don't have to read every line.",
        "Run: building got cheap. Running didn't."
      ],
      notes: "Recap stays on screen during Q&A, so people can anchor their questions.\nAt about 44:00, go to the next slide for the final line. Don't end on the last question."
    },
    {
      type: "contact", mode: "slides",
      kicker: "Less typing",
      title: "Not less nerd.",
      sub: "Thanks for listening. Feel free to get in touch. The slides will be on my homepage.",
      byline: "Michael Bauer-Wapp · CTO, BauTask",
      qr: "qr-michaelwapp.svg", url: "michaelwapp.com",
      notes: "Last words, after Q&A: 'The nerd didn't leave the job. The nerd moved to where the job is now hardest. Thank you.'\nLeave it up while people pack: the QR code goes to michaelwapp.com."
    },

    /* ======== Backup slides for Q&A ======== */
    {
      type: "statement", mode: "slides", appendix: true,
      kicker: "Backup · for Q&A",
      title: "Answers I've prepared.",
      sub: "Skip past this during the talk. Jump here with End if a question comes up.",
      notes: "Likely questions: which tools, how you guide review agents, security and code ownership, what juniors should learn."
    },
    {
      type: "points", mode: "slides",
      kicker: "Backup · \"What's your setup?\"",
      title: "The stack behind the demos.",
      points: [
        "Rails 8 with Hotwire and Stimulus, PostgreSQL",
        "React Native app with Expo",
        "Several agents in parallel, one git worktree each",
        "Tickets in Plane, written and read through MCP"
      ],
      notes: "Keep it short: the room is mostly Java developers. Agents open pull requests against develop and can't push to main. The worktree setup is on my blog."
    },
    {
      type: "points", mode: "slides",
      kicker: "Backup · \"Why self-host instead of AWS?\"",
      title: "GDPR, for every provider.",
      points: [
        "Customer data stays in Europe: servers in Germany that we own and run",
        "European providers where it matters: Mistral AI, HERE Maps",
                "The trade-off: we do the patching, monitoring and security ourselves"
      ],
      notes: "Our own models run behind LiteLLM, so prompts and data stay with us."
    },
    {
      type: "points", mode: "slides",
      kicker: "Backup · \"Why React Native?\"",
      title: "Over-the-air updates.",
      points: [
        "Fixes reach phones on site without an app store review",
        "Small, frequent releases instead of big risky ones",
        "One codebase for iOS and Android",
        "The limit: OTA (via Expo) ships JavaScript only. Native changes need a store release"
      ]
    }
  ]
};
