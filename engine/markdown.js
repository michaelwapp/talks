/* Tiny Markdown → HTML for speaker scripts. No dependencies.
   Covers what SCRIPT.md uses: headings, paragraphs, **bold**, *italic*, `code`,
   [links](url), > quotes, - / 1. lists, | tables |, --- rules. */
(function () {
  const esc = t => t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  function inline(t) {
    const codes = [];
    t = esc(t).replace(/`([^`]+)`/g, (_, c) => "\u0000" + (codes.push(c) - 1) + "\u0000");
    t = t
      .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, '<a href="$2">$1</a>')
      .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
      .replace(/(^|[^*])\*([^*\s][^*]*?)\*/g, "$1<em>$2</em>");
    return t.replace(/\u0000(\d+)\u0000/g, (_, k) => "<code>" + codes[k] + "</code>");
  }

  function render(md) {
    const lines = md.replace(/\r/g, "").split("\n");
    const out = [];
    let i = 0;
    const isBlockStart = l => /^(#{1,6} |> |[-*] |\d+\. |\||---\s*$)/.test(l) || l.trim() === "";
    while (i < lines.length) {
      const l = lines[i];
      if (l.trim() === "") { i++; continue; }
      let m;
      if ((m = l.match(/^(#{1,6}) (.*)$/))) { out.push("<h" + m[1].length + ">" + inline(m[2]) + "</h" + m[1].length + ">"); i++; continue; }
      if (/^---\s*$/.test(l)) { out.push("<hr>"); i++; continue; }
      if (/^> /.test(l)) {
        const q = [];
        while (i < lines.length && /^> ?/.test(lines[i])) q.push(lines[i++].replace(/^> ?/, ""));
        out.push("<blockquote>" + render(q.join("\n")) + "</blockquote>");
        continue;
      }
      if (/^[-*] /.test(l) || /^\d+\. /.test(l)) {
        const ordered = /^\d+\. /.test(l), items = [];
        while (i < lines.length && (ordered ? /^\d+\. /.test(lines[i]) : /^[-*] /.test(lines[i]))) {
          let item = lines[i++].replace(/^([-*]|\d+\.) /, "");
          while (i < lines.length && /^ {2,}\S/.test(lines[i])) item += " " + lines[i++].trim();
          items.push("<li>" + inline(item) + "</li>");
        }
        out.push((ordered ? "<ol>" : "<ul>") + items.join("") + (ordered ? "</ol>" : "</ul>"));
        continue;
      }
      if (/^\|/.test(l)) {
        const rows = [];
        while (i < lines.length && /^\|/.test(lines[i])) rows.push(lines[i++]);
        const cells = r => r.replace(/^\||\|\s*$/g, "").split("|").map(c => c.trim());
        const body = rows.filter(r => !/^\|[\s\-:|]+\|?\s*$/.test(r));
        out.push("<table>" + body.map((r, k) => "<tr>" + cells(r).map(c => (k ? "<td>" : "<th>") + inline(c) + (k ? "</td>" : "</th>")).join("") + "</tr>").join("") + "</table>");
        continue;
      }
      const p = [];
      while (i < lines.length && !isBlockStart(lines[i])) p.push(lines[i++]);
      if (!p.length) p.push(lines[i++]);
      out.push("<p>" + p.map(inline).join("<br>") + "</p>");
    }
    return out.join("\n");
  }

  /* Split a script into per-slide parts. A part starts at a line "**Slide N · …**"
     and runs to the next such line, the next heading or the next --- rule. */
  function slideParts(md) {
    const parts = {};
    const lines = md.replace(/\r/g, "").split("\n");
    let cur = null, buf = [];
    const flush = () => { if (cur) parts[cur] = buf.join("\n").trim(); cur = null; buf = []; };
    for (const l of lines) {
      const m = l.match(/^\*\*Slide (\d+) ·/);
      if (m) { flush(); cur = +m[1]; continue; }
      if (/^#{1,6} /.test(l) || /^---\s*$/.test(l)) { flush(); continue; }
      if (cur) buf.push(l);
    }
    flush();
    return parts;
  }

  window.MiniMarkdown = { render, inline, slideParts };
})();
