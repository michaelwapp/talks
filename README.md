# Talks by Michael Bauer-Wapp

Slides, scripts and the deck engine for my conference talks. I'm the CTO of [BauTask](https://bautask.de), construction software for crews on site. More about me and my talks: **[michaelwapp.com](https://michaelwapp.com)**.

## Less Typing, Not Less Nerd

*Java and Friends, Vienna, 2026.* From full-stack developer to customer-facing orchestrator: agents build exactly what you define, so the definition is now the job. The talk follows one real customer request from a ticket to production, through four steps: **Define · Build · Trust · Run**.

| | |
| --- | --- |
| **Slides (PDF)** | [less-typing-not-less-nerd/slides.pdf](less-typing-not-less-nerd/slides.pdf): every slide in its finished state |
| **Live deck** | [less-typing-not-less-nerd/index.html](less-typing-not-less-nerd/index.html): the deck as presented, with the agent terminal (see [Run a talk](#run-a-talk)) |
| **Script** | [less-typing-not-less-nerd/SCRIPT.md](less-typing-not-less-nerd/SCRIPT.md): what I said, slide by slide |
| **Research** | [less-typing-not-less-nerd/RESEARCH.md](less-typing-not-less-nerd/RESEARCH.md): ten great talks and what this one borrowed from them |

The agent sessions in the talk are scripted replays of the kind of sessions I run every day, so the demo doesn't depend on the conference Wi-Fi.

## What's in this repository

- `less-typing-not-less-nerd/`: the talk: slides (`slides.js`), PDF, script, research and images
- `engine/`: a small deck engine in plain HTML, CSS and JavaScript (no build step, no dependencies, works offline), with a built-in agent terminal, a presenter view with live slide previews, and a PDF export
- `scripts/`: a helper to bundle the fonts for an offline stage

## How this was made

Fittingly for a talk about writing definitions instead of code, the deck engine, the slides and much of the wording were built with [Claude Code](https://claude.com/claude-code), Anthropic's coding agent.

The definitions were mine: the story, the structure, the arguments and every requirement for the slides and the engine. So were the real stories, numbers and examples from my work, and the review of every change. Claude Code did the typing. Less typing, not less nerd.

## Run a talk

Open the talk's `index.html` in Chrome. For the presenter view, serve the folder so both windows share an origin:

```sh
python3 -m http.server 8000
# open http://localhost:8000/less-typing-not-less-nerd/
```

The presenter view (`P`) shows the spoken script for the current slide, taken from the talk's `SCRIPT.md` (set `script: "SCRIPT.md"` on the deck), next to the notes, the agent beats and the next slide. It needs the served folder; opened as a plain file it falls back to the notes.

To read the script on paper, open `script.html` in the talk folder (for example `http://localhost:8000/less-typing-not-less-nerd/script.html`) and press **Save as PDF**, or use the **Script as PDF** button in the presenter view. It always renders the current `SCRIPT.md`.

## Export the slides as PDF

Serve the folder, open the talk with `?print` (for example `http://localhost:8000/less-typing-not-less-nerd/?print`), wait until every slide is rendered and press **Cmd/Ctrl + P → Save as PDF**. Each slide becomes one 16:9 page in its finished state: every agent beat played, every reveal shown. Add `&backup` to include the backup slides.

Or from the command line with Chrome:

```sh
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless --no-pdf-header-footer \
  --virtual-time-budget=20000 --print-to-pdf=less-typing-not-less-nerd/slides.pdf \
  "http://localhost:8000/less-typing-not-less-nerd/?print"
```

For an offline stage, bundle the fonts once while online:

```sh
./scripts/vendor-fonts.sh
```

## Keys

| Key | Action |
| --- | --- |
| `→` `Space` `Enter` | Next agent beat, then next slide |
| `←` | Back one beat or slide |
| `1` `2` `3` | Minimize, split or maximize the agent pane (the three window dots do the same) |
| `M` | Cycle the agent layout |
| `P` | Presenter view with notes, timer, beats and next slide |
| `H` | Hide TODO markers |
| `B` | Black screen |
| `F` | Fullscreen |
| `?` | Help |

## How a talk is written

Each talk has a `slides.js` that sets `window.DECK`. The engine in `engine/` renders it.

```js
{
  type: "statement",        // cover, statement, points, quote, stats, ledger, history, week, flow, contact, html
  mode: "split",            // slides (agent minimized), split, agent (maximized)
  kicker: "A request from site",
  title: "One sentence from a customer.",
  notes: "Shown in the presenter view.",
  todo: "Shown as a yellow marker until you hide it with H.",
  agent: [                  // each → plays one beat
    { prompt: "Build it." },                       // typed into the agent
    [ { think: "Reading schema" },                 // a beat can hold several steps
      { out: [["ok", "Added report"], ["say", "Done."]] } ]
  ]
}
```

A `contact` slide takes `qr` (an image next to the talk's `index.html`) and `url` (its caption). Mark the first backup slide with `appendix: true`: from there on slides are not counted.

Output line kinds: `ok`, `say`, `dim`, `tool` (allows `<b>` for file names), `warn` (a question back), `err`, `code`, `big`.

Talk structure: set `signposts: ["Define", "~Build", "Trust", "Run"]` on the deck, then `signpost: 0` on a slide to show that part in the top-right corner. Later slides keep it until another slide sets a new index, or `-1` to hide it. A `~` in front of a name draws that part dashed and faded. Flow slides take `big: true` for large cards with a `<small>` description, and `muted: 1` to draw that card dashed.

Other steps: `{ clear: true }`, `{ mode: "agent" }`, `{ live: "text" }` and `{ live: false }` for a LIVE card while you switch to a real terminal, `{ reveal: true }` for slides with `stepwise: true`, `{ wait: 600 }`. A slide with `clearAgent: true` starts with an empty agent log.

## Licence

- Code (`engine/`, `scripts/`): [MIT](LICENSE)
- Talk content (slides, script, research): [CC BY 4.0](LICENSE-CONTENT.md)
- Fonts (Martian Mono, Schibsted Grotesk): [SIL Open Font License 1.1](engine/fonts/OFL.txt)
- Screenshots of the BauTask product are not licensed for reuse.
