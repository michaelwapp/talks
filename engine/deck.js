/* Agent deck engine. No build step, no dependencies.
   A talk defines window.DECK (see talks/<talk>/slides.js) and loads this file.

   Layout modes:  slides (agent minimized to a dock) · split · agent (maximized)
   Agent beats:   slide.agent is a list of beats. Each press of → plays one beat.
                  A beat is one step or an array of steps that run in order.
   Steps:         { prompt: "text" }            typed into the agent
                  { think: "Reading files", ms } a thinking line that resolves
                  { out: [["ok","text"], ...] }  streamed output lines
                  { clear: true }               empties the agent log
                  { mode: "agent" }             switches layout mid-slide
                  { live: "text" } / { live: false }  shows or hides the LIVE card
                  { reveal: true }              reveals the next .frag element on the slide
                  { wait: 600 }                 pauses
*/
(function () {
  "use strict";
  const D = window.DECK;
  if (!D) { document.body.textContent = "No DECK defined. Load slides.js before deck.js."; return; }

  const params = new URLSearchParams(location.search);
  const isPresenter = params.has("presenter");
  // ?mirror shows the slide the main window is on, ?mirror=next the one after it.
  // A mirror only follows; it never sends commands. The presenter view embeds two.
  const isMirror = params.has("mirror");
  const mirrorOffset = params.get("mirror") === "next" ? 1 : 0;
  // ?print lays out every slide, finished (all beats played), one page each: Save as PDF.
  // ?print&backup also includes the backup slides.
  const isPrint = params.has("print");
  const channelName = "agent-deck:" + (D.id || D.title);
  let channel = null;
  try { channel = new BroadcastChannel(channelName); } catch (e) { channel = null; }

  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const beatsOf = s => (s.agent || []).map(b => (Array.isArray(b) ? b : [b]));
  const modeOf = s => s.mode || (s.agent && s.agent.length ? "split" : "slides");

  function send(msg) {
    if (isMirror && msg.cmd !== "hello") return;
    if (channel) { channel.postMessage(msg); return; }
    try { localStorage.setItem(channelName, JSON.stringify(Object.assign({ t: Date.now() }, msg))); } catch (e) {}
  }
  function listen(fn) {
    if (channel) channel.onmessage = e => fn(e.data);
    else addEventListener("storage", e => { if (e.key === channelName && e.newValue) fn(JSON.parse(e.newValue)); });
  }

  /* ------------------------------------------------------------------ */
  /* Slide templates                                                     */
  /* ------------------------------------------------------------------ */
  const todo = s => (s.todo ? '<span class="todo">TODO · ' + esc(s.todo) + "</span>" : "");
  const kicker = s => (s.kicker ? '<p class="kicker">' + esc(s.kicker) + "</p>" : "");
  const title = s => (s.title ? '<h1 class="title">' + s.title + "</h1>" : "");
  const sub = s => (s.sub ? '<p class="sub">' + s.sub + "</p>" : "");
  /* In code lines, the leading key (WHO, testing.md, "- ") gets the accent; the value stays ink. */
  const specKey = t => {
    const m = /^([A-Z]{2,}\s+|\S+\.md\s+|- )([\s\S]*)$/.exec(t);
    return m ? '<span class="k">' + esc(m[1]) + "</span>" + esc(m[2]) : esc(t);
  };
  /* Slides from the first `appendix: true` on are backups: not counted, no counter shown. */
  const appendixAt = D.slides.findIndex(s => s.appendix);
  const mainCount = appendixAt < 0 ? D.slides.length : appendixAt;

  const templates = {
    cover: s => kicker(s) + title(s) + sub(s) + (s.byline ? '<p class="byline">' + s.byline + "</p>" : "") + todo(s),
    statement: s => kicker(s) + title(s) + sub(s) + todo(s),
    points: s => kicker(s) + title(s) +
      '<ul class="points">' + (s.points || []).map(p => "<li" + (s.stepwise ? ' class="frag"' : "") + ">" + p + "</li>").join("") + "</ul>" + todo(s),
    quote: s => kicker(s) + '<p class="quote">' + s.quote + "</p>" + (s.cite ? "<cite>" + s.cite + "</cite>" : "") + todo(s),
    stats: s => kicker(s) + title(s) +
      '<div class="stats" style="--n:' + (s.stats || []).length + '">' +
      (s.stats || []).map(x => '<div class="stat' + (s.stepwise ? " frag" : "") + '"><b>' + x.value + "</b><span>" + x.label + "</span>" + (x.source ? "<small>" + x.source + "</small>" : "") + "</div>").join("") +
      "</div>" + sub(s) + todo(s),
    ledger: s => kicker(s) + title(s) +
      '<div class="ledger"><div class="up"><h3>' + esc(s.upTitle || "Worth more") + "</h3><ul>" + (s.up || []).map(x => "<li>" + x + "</li>").join("") +
      '</ul></div><div class="down"><h3>' + esc(s.downTitle || "Worth less") + "</h3><ul>" + (s.down || []).map(x => "<li>" + x + "</li>").join("") + "</ul></div></div>" + todo(s),
    history: s => kicker(s) + title(s) + '<pre class="history">' + (s.lines || []).map(([k, t]) => '<span class="' + k + '">' + (k === "p" ? specKey(t) : esc(t)) + "</span>").join("\n") + "</pre>" + todo(s),
    contact: s => '<div class="contact"><div>' + kicker(s) + title(s) + sub(s) +
      (s.byline ? '<p class="byline">' + s.byline + "</p>" : "") + todo(s) + "</div>" +
      (s.qr ? '<figure class="qr"><img src="' + esc(s.qr) + '" alt="QR code for ' + esc(s.url || "") + '">' +
        (s.url ? "<figcaption>" + esc(s.url) + "</figcaption>" : "") + "</figure>" : "") + "</div>",
    week: s => kicker(s) + title(s) +
      '<div class="split-week">' + (s.weeks || []).map(w =>
        '<div class="week' + (s.stepwise ? " frag" : "") + '"><span>' + esc(w.label) + '</span><div class="bar">' +
        w.parts.map(p => '<i class="' + p.kind + '" style="flex:' + p.share + '">' + esc(p.label) + "</i>").join("") + "</div></div>").join("") +
      "</div>" + (s.stepwise && s.sub ? '<p class="sub frag">' + s.sub + "</p>" : sub(s)) + todo(s),
    flow: s => kicker(s) + title(s) +
      '<ol class="flow' + (s.big ? " big" : "") + '" style="--n:' + (s.flow || []).length + '">' +
      (s.flow || []).map((f, i) => '<li class="' + (i === s.highlight ? "on" : "") + (i === s.muted ? " muted" : "") + (s.stepwise ? " frag" : "") + '">' + f + "</li>").join("") + "</ol>" + sub(s) + todo(s),
    html: s => s.html + todo(s)
  };

  /* Signpost: D.signposts names the talk's parts. A slide sets `signpost` to an index
     (or -1 to hide); later slides keep showing the last one set.
     A name starting with "~" is shown muted (a part that isn't the focus, e.g. the agents' part). */
  function signpostFor(n) {
    if (!D.signposts) return -1;
    for (let k = n; k >= 0; k--) if (D.slides[k].signpost !== undefined) return D.slides[k].signpost;
    return -1;
  }
  function signpostHTML(n) {
    const cur = signpostFor(n);
    if (cur < 0) return "";
    return '<div class="signpost" aria-label="Part ' + (cur + 1) + " of " + D.signposts.length + '">' +
      D.signposts.map((p, i) => {
        const muted = p.startsWith("~");
        return '<span class="' + (i === cur ? "on" : muted ? "muted" : "") + '">' + esc(muted ? p.slice(1) : p) + "</span>";
      }).join("") + "</div>";
  }

  function slideHTML(s, n) {
    const t = templates[s.type || "statement"] || templates.statement;
    return signpostHTML(n) + '<div class="slide t-' + (s.type || "statement") + '">' + t(s) + "</div>";
  }

  /* ------------------------------------------------------------------ */
  /* Presenter view                                                      */
  /* ------------------------------------------------------------------ */
  if (isPresenter) {
    document.body.className = "presenter";
    document.body.innerHTML =
      '<div class="pv"><header><span class="clock" id="pv-clock">00:00</span>' +
      '<span class="meta">Slide <b id="pv-n">1</b> of ' + D.slides.length + ' · target <b>' + (D.minutes || 40) + ' min</b> · planned here <b id="pv-plan">0:00</b></span>' +
      '<span class="btns" style="margin-left:auto"><button id="pv-start">Start timer</button><button data-cmd="prev">← Back</button><button data-cmd="next">Next →</button>' +
      '<button data-cmd="mode:slides">Minimize</button><button data-cmd="mode:split">Split</button><button data-cmd="mode:agent">Maximize</button>' +
      (D.script ? '<a class="btn" href="script.html" target="_blank" rel="noopener">Script as PDF</a>' : "") + '</span></header>' +
      '<section class="pv-main"><h2>Now</h2><div class="thumb"><iframe src="' + location.pathname + '?mirror" title="Current slide" tabindex="-1"></iframe></div><div class="now" id="pv-now"></div><h2 id="pv-script-h">Script</h2><div class="script" id="pv-script"></div></section>' +
      '<section><h2>Next slide</h2><div class="thumb"><iframe src="' + location.pathname + '?mirror=next" title="Next slide" tabindex="-1"></iframe></div><div class="next" id="pv-next"></div><h2>Agent beats on this slide</h2><div class="steps" id="pv-steps"></div><h2>Notes</h2><div class="notes" id="pv-notes"></div></section></div>';
    let t0 = null;
    const $ = id => document.getElementById(id);
    $("pv-start").onclick = () => { t0 = Date.now(); $("pv-start").textContent = "Restart timer"; };
    document.querySelectorAll("[data-cmd]").forEach(b => (b.onclick = () => send({ cmd: b.dataset.cmd })));
    addEventListener("keydown", e => {
      if (["ArrowRight", "PageDown", " "].includes(e.key)) { e.preventDefault(); send({ cmd: "next" }); }
      if (["ArrowLeft", "PageUp"].includes(e.key)) { e.preventDefault(); send({ cmd: "prev" }); }
    });
    const fromHTML = (h, re) => { const m = h && h.match(re); return m && m[1]; };
    const label = s => (s.title || s.quote || s.kicker ||
      fromHTML(s.html, /<h1[^>]*>([\s\S]*?)<\/h1>/) || fromHTML(s.html, /class=\\?"kicker\\?"[^>]*>([\s\S]*?)<\/p>/) || "(untitled)")
      .replace(/<[^>]+>/g, "").replace(/&amp;/g, "&");
    // The spoken script, per slide, from the talk's SCRIPT.md ("**Slide N · …**" sections).
    let script = null, last = null;
    const md = window.MiniMarkdown;
    if (D.script && md) {
      fetch(D.script).then(r => (r.ok ? r.text() : Promise.reject())).then(t => { script = md.slideParts(t); if (last) show(last); })
        .catch(() => { script = {}; $("pv-script").innerHTML = '<p class="hint">Script not loaded. Serve the folder (python3 -m http.server) to see it here.</p>'; });
    }
    setInterval(() => {
      if (!t0) return;
      const sec = Math.floor((Date.now() - t0) / 1000);
      $("pv-clock").textContent = String(Math.floor(sec / 60)).padStart(2, "0") + ":" + String(sec % 60).padStart(2, "0");
      $("pv-clock").classList.toggle("over", sec > (D.minutes || 40) * 60);
    }, 500);
    function show(m) {
      last = m;
      const s = D.slides[m.i], nx = D.slides[m.i + 1];
      $("pv-n").textContent = m.i + 1;
      $("pv-plan").textContent = s.at || "–";
      $("pv-now").textContent = label(s);
      $("pv-notes").textContent = s.notes || "";
      $("pv-next").textContent = nx ? label(nx) : "End of talk";
      $("pv-steps").innerHTML = beatsOf(s).map((b, k) =>
        '<div class="' + (k < m.beat ? "done" : k === m.beat ? "cur" : "") + '">' + (k + 1) + ". " +
        esc(b.map(st => st.prompt ? "type: " + st.prompt.slice(0, 60) : st.out ? "output ×" + st.out.length : Object.keys(st)[0]).join(" → ")) + "</div>").join("") || "None";
      if (script && md) {
        const part = script[m.i + 1];
        $("pv-script").innerHTML = part ? md.render(part) : '<p class="hint">No script for this slide. Use the notes.</p>';
        $("pv-script").scrollTop = 0;
      }
    }
    listen(m => { if (!m.cmd) show(m); });
    send({ cmd: "hello" });
    return;
  }

  /* ------------------------------------------------------------------ */
  /* Audience view                                                       */
  /* ------------------------------------------------------------------ */
  document.title = D.title;
  document.body.innerHTML =
    '<div id="viewport"><div id="stage" class="has-agent">' +
    '<div id="slide"></div>' +
    '<div id="agent"><div class="bar-top"><span class="lights">' +
    '<button data-mode="slides" title="Minimize (1)" aria-label="Minimize agent"></button>' +
    '<button data-mode="split" title="Split (2)" aria-label="Split view"></button>' +
    '<button data-mode="agent" title="Maximize (3)" aria-label="Maximize agent"></button></span>' +
    '<span class="name">' + esc(D.agentName || "agent") + '</span><span class="status" id="status">idle</span></div>' +
    '<div id="log" aria-live="polite"></div>' +
    '<div class="input" id="input"><span id="input-text">Waiting for a prompt</span></div>' +
    '<div class="live"><span class="dot">LIVE</span><p id="live-text"></p><small>Switching to the real terminal</small></div></div>' +
    '<button id="dock" type="button" aria-label="Open agent"><span class="dock-name">' + esc(D.agentName || "agent") + ' ›</span><span class="last" id="dock-last">agent</span><kbd>2</kbd></button>' +
    '<div id="progress"></div><div id="counter"></div>' +
    "</div></div>" +
    '<div id="black"></div>' +
    '<div id="help"><div class="card"><h2>Keys</h2><dl>' +
    "<dt><kbd>→</kbd> <kbd>Space</kbd></dt><dd>Next agent beat, then next slide</dd>" +
    "<dt><kbd>←</kbd></dt><dd>Previous slide</dd>" +
    "<dt><kbd>1</kbd> <kbd>2</kbd> <kbd>3</kbd></dt><dd>Minimize, split, maximize the agent</dd>" +
    "<dt><kbd>M</kbd></dt><dd>Cycle the agent layout</dd>" +
    "<dt><kbd>P</kbd></dt><dd>Open the presenter view with notes and timer</dd>" +
    "<dt><kbd>H</kbd></dt><dd>Hide TODO markers</dd>" +
    "<dt><kbd>B</kbd></dt><dd>Black screen</dd>" +
    "<dt><kbd>F</kbd></dt><dd>Fullscreen</dd>" +
    "<dt><kbd>Home</kbd> <kbd>End</kbd></dt><dd>First or last slide</dd>" +
    "<dt><kbd>?</kbd></dt><dd>This help</dd></dl></div></div>";

  if (isMirror) document.body.classList.add("mirror");
  const stage = document.getElementById("stage");
  const slideEl = document.getElementById("slide");
  const agentEl = document.getElementById("agent");
  const log = document.getElementById("log");
  const inputText = document.getElementById("input-text");
  const statusEl = document.getElementById("status");
  const dockLast = document.getElementById("dock-last");

  let i = 0, beat = 0, mode = "slides", run = 0, typing = null;
  // Clear settings that older versions remembered (dark slides, typing by hand).
  try { localStorage.removeItem("deck:dark"); localStorage.removeItem("deck:handTyping"); } catch (e) {}

  function fit() {
    const w = document.documentElement.clientWidth || innerWidth, h = document.documentElement.clientHeight || innerHeight;
    const s = Math.min(w / 1600, h / 900);
    if (isMirror) {
      // Thumbnails: pin to the top-left and centre by hand; a centred grid item
      // much larger than a small frame doesn't land reliably.
      stage.style.transform = "translate(" + (w - 1600 * s) / 2 + "px," + (h - 900 * s) / 2 + "px) scale(" + s + ")";
    } else {
      stage.style.transform = "scale(" + s + ")";
    }
  }
  addEventListener("resize", fit);
  if (isMirror && window.ResizeObserver) new ResizeObserver(fit).observe(document.documentElement);
  fit();

  function setMode(m) {
    mode = m;
    stage.classList.remove("mode-slides", "mode-split", "mode-agent");
    stage.classList.add("mode-" + m);
    broadcast();
  }
  function setBusy(b, label) {
    agentEl.classList.toggle("busy", b);
    statusEl.textContent = label || (b ? "working" : "idle");
  }

  function addLine(kind, html) {
    const d = document.createElement("div");
    d.className = "l " + kind;
    d.innerHTML = html;
    log.appendChild(d);
    while (log.children.length > 60) log.removeChild(log.firstChild);
    const txt = d.textContent.trim();
    if (txt) dockLast.textContent = txt;
    return d;
  }
  const wait = (ms, my) => new Promise(r => setTimeout(r, reduce || my === -1 ? 0 : ms));

  /* Runs one step. my === -1 means instant replay (no animation). */
  async function runStep(st, my) {
    const live = my !== -1;
    if (st.clear) { log.innerHTML = ""; dockLast.textContent = D.agentName || "agent"; }
    if (st.mode && live) setMode(st.mode);
    if (st.live !== undefined) {
      agentEl.classList.toggle("is-live", !!st.live);
      document.getElementById("live-text").textContent = st.live || "";
    }
    if (st.reveal) {
      const f = slideEl.querySelector(".frag:not(.shown)");
      if (f) f.classList.add("shown");
    }
    if (st.wait && live) await wait(st.wait, my);
    if (st.prompt !== undefined) {
      const text = st.prompt;
      if (!live) { addLine("prompt", esc(text)); return; }
      const line = addLine("prompt", "");
      const span = document.createElement("span");
      const caret = document.createElement("span");
      caret.className = "caret";
      line.append(span, caret);
      inputText.textContent = "";
      let pos = 0;
      setBusy(false, "you");
      await new Promise(done => {
        typing = {
          advance(n) {
            pos = Math.min(text.length, pos + n);
            span.textContent = text.slice(0, pos);
            inputText.textContent = text.slice(Math.max(0, pos - 60), pos);
            if (pos >= text.length) { typing = null; done(); }
          }
        };
        (async () => {
          await wait(220, my);
          while (typing && my === run) { typing.advance(1); await wait(st.speed || 24, my); }
        })();
      });
      caret.remove();
      inputText.textContent = "Waiting for a prompt";
      dockLast.textContent = "› " + text;
      setBusy(false);
    }
    if (st.think) {
      const l = addLine("thinking", esc(st.think));
      if (live) { setBusy(true, "thinking"); await wait(st.ms || 900, my); }
      l.className = "l dim";
      setBusy(false);
    }
    if (st.out) {
      if (live) setBusy(true);
      for (const [kind, text] of st.out) {
        if (live && my !== run) break;
        if (live) await wait(kind === "dim" || kind === "tool" ? 260 : 420, my);
        addLine(kind, kind === "tool" ? text : esc(text));
      }
      setBusy(false);
    }
  }

  async function runBeat(steps, my) {
    for (const st of steps) {
      if (my !== -1 && my !== run) return;
      await runStep(st, my);
    }
  }

  /* Rebuilds the agent log for slide n with b beats played, instantly. */
  async function rebuild(n, b) {
    log.innerHTML = "";
    agentEl.classList.remove("is-live");
    document.getElementById("live-text").textContent = "";
    let start = 0;
    for (let k = n; k >= 0; k--) { if (D.slides[k].clearAgent) { start = k; break; } }
    for (let k = start; k <= n; k++) {
      const bs = beatsOf(D.slides[k]);
      const upto = k < n ? bs.length : Math.min(b, bs.length);
      for (let x = 0; x < upto; x++) {
        // reveals belong to their own slide; don't replay earlier slides' reveals here
        await runBeat(k < n ? bs[x].filter(st => !st.reveal) : bs[x], -1);
      }
    }
  }

  async function show(n, b) {
    run++;
    typing = null;
    i = Math.max(0, Math.min(D.slides.length - 1, n));
    const s = D.slides[i];
    slideEl.innerHTML = slideHTML(s, i);
    beat = 0; // before setMode, which broadcasts: never pair this slide with the last slide's beat
    setMode(modeOf(s));
    if (s.clearAgent) { log.innerHTML = ""; }
    await rebuild(i, b || 0);
    beat = b || 0;
    // replayed beats may have switched layout; re-apply their last mode
    beatsOf(s).slice(0, beat).flat().forEach(st => { if (st.mode) setMode(st.mode); });
    // the agent strip stays out of the way on the opening and closing slides
    stage.classList.toggle("has-agent", !["cover", "contact"].includes(s.type));
    document.getElementById("progress").style.width = Math.min(1, i / Math.max(1, mainCount - 1)) * 100 + "%";
    document.getElementById("counter").textContent = i < mainCount ? (i + 1) + " / " + mainCount : "";
    history.replaceState(null, "", "#" + (i + 1));
    setBusy(false);
    broadcast();
  }

  async function next() {
    if (typing) { typing.advance(1e6); return; }
    const bs = beatsOf(D.slides[i]);
    if (beat < bs.length) {
      const my = ++run;
      const b = bs[beat++];
      broadcast();
      await runBeat(b, my);
      return;
    }
    if (i < D.slides.length - 1) show(i + 1, 0);
  }
  function prev() {
    if (beat > 0) { show(i, beat - 1); return; }
    if (i > 0) show(i - 1, beatsOf(D.slides[i - 1]).length);
  }
  function broadcast() { send({ i, beat, mode }); }

  // Reveal-style fragments: hidden until a { reveal: true } step shows them.
  const st = document.createElement("style");
  st.textContent = ".frag{opacity:0;transform:translateY(8px);transition:opacity .35s ease,transform .35s ease}.frag.shown{opacity:1;transform:none}";
  document.head.appendChild(st);

  if (isPrint) {
    document.body.classList.add("print");
    document.title = D.title + " (slides)";
    const pages = document.createElement("div");
    pages.id = "print-pages";
    document.body.appendChild(pages); // after #viewport, so getElementById still finds the live stage
    (async () => {
      const last = params.has("backup") ? D.slides.length : mainCount;
      const snap = () => {
        const page = document.createElement("section");
        page.className = "print-page";
        const copy = stage.cloneNode(true);
        copy.style.transform = "none";
        copy.querySelectorAll(".frag").forEach(f => f.classList.add("shown"));
        page.appendChild(copy);
        pages.appendChild(page);
      };
      for (let n = 0; n < last; n++) {
        const bs = beatsOf(D.slides[n]);
        // A beat that clears the agent would wipe what came before: keep that state as its own page.
        for (let k = 1; k < bs.length; k++) if (bs[k].some(st => st.clear)) { await show(n, k); snap(); }
        await show(n, bs.length);
        snap();
      }
      await document.fonts.ready;
      await Promise.all([...pages.querySelectorAll("img")].map(im => im.complete ? 0 : new Promise(r => { im.onload = im.onerror = r; })));
      document.body.classList.add("print-ready");
    })();
    return;
  }

  if (isMirror) {
    // Apply the latest state one at a time; overlapping rebuilds would duplicate log lines.
    let pending = null, applying = false, shown = null;
    const follow = async m => {
      pending = m;
      if (applying) return;
      applying = true;
      while (pending) {
        const x = pending; pending = null;
        const n = x.i + mirrorOffset, b = mirrorOffset ? 0 : x.beat;
        try {
          if (n >= D.slides.length) { slideEl.innerHTML = ""; stage.classList.remove("has-agent"); shown = null; continue; }
          if (!shown || shown.n !== n || shown.b !== b) { shown = null; await show(n, b); shown = { n, b }; }
          if (!mirrorOffset && x.mode && x.mode !== mode) setMode(x.mode);
        } catch (e) { console.error("mirror", e); shown = null; }
      }
      applying = false;
    };
    listen(m => { if (!m.cmd && m.i !== undefined) follow(m); });
    follow({ i: 0, beat: 0 }); // until the main window answers
    send({ cmd: "hello" });
    return;
  }

  listen(m => {
    if (m.cmd === "next") next();
    else if (m.cmd === "prev") prev();
    else if (m.cmd === "hello") broadcast();
    else if (m.cmd && m.cmd.startsWith("mode:")) setMode(m.cmd.slice(5));
  });

  document.querySelectorAll(".lights button").forEach(btn => btn.addEventListener("click", e => { e.stopPropagation(); setMode(btn.dataset.mode); }));
  document.getElementById("dock").addEventListener("click", () => setMode("split"));

  addEventListener("keydown", e => {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    const k = e.key;
    if (["ArrowRight", "PageDown", " ", "Enter"].includes(k)) { e.preventDefault(); next(); }
    else if (["ArrowLeft", "PageUp"].includes(k)) { e.preventDefault(); prev(); }
    else if (k === "Home") show(0, 0);
    else if (k === "End") show(D.slides.length - 1, 0);
    else if (k === "1") setMode("slides");
    else if (k === "2") setMode("split");
    else if (k === "3") setMode("agent");
    else if (k === "m" || k === "M") setMode({ slides: "split", split: "agent", agent: "slides" }[mode]);
    else if (k === "h" || k === "H") document.body.classList.toggle("hide-todos");
    else if (k === "b" || k === "B") document.body.classList.toggle("blackout");
    else if (k === "f" || k === "F") { if (!document.fullscreenElement) document.documentElement.requestFullscreen().catch(() => {}); else document.exitFullscreen(); }
    else if (k === "p" || k === "P") window.open(location.pathname + "?presenter", "deck-presenter", "width=1200,height=760");
    else if (k === "?") document.body.classList.toggle("show-help");
    else if (k === "Escape") document.body.classList.remove("show-help", "blackout");
  });

  const start = parseInt(location.hash.slice(1), 10);
  show(isNaN(start) ? 0 : start - 1, 0);
})();
