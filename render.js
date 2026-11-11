// Builds the page from content.js. You shouldn't need to edit this file.
(function () {
  const $ = (id) => document.getElementById(id);
  const esc = (s) =>
    String(s ?? "").replace(/[&<>"']/g, (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const has = (s) => typeof s === "string" && s.trim() !== "";
  const soon = '<p class="empty">Coming soon.</p>';

  const linkRow = (links) => {
    const items = (links || []).filter((l) => has(l.url));
    if (!items.length) return "";
    return `<div class="pill-row">${items
      .map((l) => `<a class="pill" href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)} ↗</a>`)
      .join("")}</div>`;
  };

  // Header / bio
  document.title = SITE.name;
  $("nav-name").textContent = SITE.name;
  $("name").textContent = SITE.name;
  $("photo").src = SITE.photo;
  $("photo").alt = `Photo of ${SITE.name}`;
  if (has(SITE.tagline)) $("tagline").textContent = SITE.tagline;
  else $("tagline").remove();
  const paras = (SITE.bio || []).filter(has);
  $("bio").innerHTML = paras.length
    ? paras.map((p) => `<p>${esc(p)}</p>`).join("")
    : '<p class="empty">Bio coming soon.</p>';

  const L = SITE.links || {};
  const social = [
    ["email", "Email", has(L.email) ? `mailto:${L.email}` : ""],
    ["linkedin", "LinkedIn", L.linkedin],
    ["github", "GitHub", L.github],
    ["scholar", "Google Scholar", L.scholar],
    ["orcid", "ORCID", L.orcid],
    ["cv", "CV", L.cv],
  ].filter(([, , url]) => has(url));
  $("social").innerHTML = social
    .map(([k, label, url]) =>
      `<a class="${k === "cv" ? "btn" : "pill"}" href="${esc(url)}"${k === "email" ? "" : ' target="_blank" rel="noopener"'}>${esc(label)}</a>`)
    .join("");

  // Projects
  $("project-list").innerHTML = PROJECTS.length
    ? PROJECTS.map((p) => `
      <article class="card">
        ${has(p.image)
          ? `<img class="card-img" src="${esc(p.image)}" alt="" loading="lazy">`
          : `<div class="card-img placeholder" aria-hidden="true">${esc((p.title || "?")[0])}</div>`}
        <div class="card-body">
          <h3>${esc(p.title)}${has(p.year) ? ` <span class="muted">· ${esc(p.year)}</span>` : ""}</h3>
          ${has(p.description) ? `<p>${esc(p.description)}</p>` : ""}
          ${(p.tags || []).length ? `<div class="tags">${p.tags.map((t) => `<span>${esc(t)}</span>`).join("")}</div>` : ""}
          ${linkRow(p.links)}
        </div>
      </article>`).join("")
    : soon;

  // Publications
  const boldMe = (authors) => {
    const safe = esc(authors);
    const last = SITE.name.split(" ").slice(-1)[0];
    return safe.replace(new RegExp(`([^,]*\\b${last}\\b[^,]*)`), "<strong>$1</strong>");
  };
  $("publication-list").innerHTML = PUBLICATIONS.length
    ? PUBLICATIONS.map((p) => {
        const thumb = has(p.thumbnail)
          ? `<img class="thumb" src="${esc(p.thumbnail)}" alt="" loading="lazy">`
          : `<div class="thumb placeholder" aria-hidden="true">📄</div>`;
        const title = has(p.url)
          ? `<a href="${esc(p.url)}" target="_blank" rel="noopener">${esc(p.title)}</a>`
          : esc(p.title);
        return `
        <article class="row">
          ${has(p.url) ? `<a href="${esc(p.url)}" target="_blank" rel="noopener" tabindex="-1">${thumb}</a>` : thumb}
          <div>
            <h3>${title}</h3>
            ${has(p.authors) ? `<p class="muted">${boldMe(p.authors)}</p>` : ""}
            <p class="venue">${[p.venue, p.year].filter(has).map(esc).join(" · ")}</p>
            ${linkRow(p.links)}
          </div>
        </article>`;
      }).join("")
    : soon;

  // News
  $("news-list").innerHTML = NEWS.length
    ? NEWS.map((n) => `
      <article class="row news">
        ${has(n.thumbnail) ? `<img class="thumb" src="${esc(n.thumbnail)}" alt="" loading="lazy">` : ""}
        <div>
          <p class="date">${esc(n.date)}</p>
          <h3>${has(n.url) ? `<a href="${esc(n.url)}" target="_blank" rel="noopener">${esc(n.title)}</a>` : esc(n.title)}</h3>
          ${has(n.source) ? `<p class="muted">${esc(n.source)}</p>` : ""}
        </div>
      </article>`).join("")
    : soon;

  $("footer-text").textContent = `© ${new Date().getFullYear()} ${SITE.name}`;
})();
