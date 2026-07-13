(function () {
  const projects = window.PROJECTS || [];
  const grid = document.getElementById("project-grid");
  const moreWrap = document.getElementById("project-more-wrap");
  const moreGrid = document.getElementById("project-more-grid");
  const showMoreButton = document.getElementById("project-show-more");

  if (!grid) {
    return;
  }

  // Pick most important projects to display (6 visible, the rest behind Show More)
  const featuredIds = [
    "dh-metrozone",
    "zoande-brokersim",
    "zoande-stellarfronts",
    "dima-tab-sorter-pro",
    "pablo-focus-blocker",
    "dima-human-doc-typer",
    "pablo-pocketvault"
  ];
  
  const featuredOrder = new Map(featuredIds.map((id, index) => [id, index]));
  const displayedProjects = projects
    .filter((project) => featuredOrder.has(project.id))
    .sort((left, right) => featuredOrder.get(left.id) - featuredOrder.get(right.id));
  const primaryProjects = displayedProjects.slice(0, 6);
  const extraProjects = displayedProjects.slice(6);

  function renderCard(project, index) {
    const tech = project.tech.slice(0, 3).map((item) => `<span class="chip">${item}</span>`).join("");
    const aosDelay = Math.min(index * 75, 450);
    const externalLink = project.repoUrl || project.extUrl;
    const linkLabel = project.extUrl ? "Get Extension" : "Repo";
    const extIconMap = {
      "dima-tab-sorter-pro": "/images/ext-tab-sorter.png",
      "pablo-focus-blocker": "/images/ext-focus.png",
      "dima-human-doc-typer": "/images/ext-autotyper.png",
      "zoande-brokersim": "/images/site/brokersim_app_icon.png",
      "dh-metrozone": "/images/site/metrozone_app_icon.png",
      "zoande-stellarfronts": "/images/site/stellarfronts_icon.png"
    };
    const pocketVaultLogo =
      `<div style="width:40px;height:40px;border-radius:10px;margin-bottom:0.75rem;background:#14342f;display:flex;align-items:center;justify-content:center;">` +
      `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">` +
      `<rect x="5" y="10.5" width="14" height="9.5" rx="2" stroke="#ffffff" stroke-width="2"/>` +
      `<path d="M8 10.5V7a4 4 0 0 1 8 0v3.5" stroke="#ffffff" stroke-width="2"/>` +
      `<circle cx="12" cy="15" r="1.4" fill="#ffffff"/></svg></div>`;
    const extIcon = extIconMap[project.id]
      ? `<img src="${extIconMap[project.id]}" alt="${project.title} icon" style="width:40px;height:40px;border-radius:10px;margin-bottom:0.75rem;display:block;object-fit:cover;" />`
      : project.id === "pablo-pocketvault"
      ? pocketVaultLogo
      : "";
    const primaryBtn = project.accessUrl
      ? `<a class="button ghost" href="${project.accessUrl}">${project.accessLabel || "Request Access"}</a>`
      : project.playUrl
      ? `<a class="button ghost" href="${project.playUrl}" target="_blank" rel="noopener noreferrer">Play Now</a>`
      : `<a class="button ghost" href="${externalLink}" target="_blank" rel="noopener noreferrer">${linkLabel}</a>`;
    return `
      <article
        class="project-card"
        aria-label="${project.title}"
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="${aosDelay}"
      >
        ${extIcon}
        <p class="owner">${project.owner}</p>
        <h3>${project.title}</h3>
        <p class="summary">${project.summary}</p>
        <div class="chip-row">${tech}</div>
        <div class="card-actions">
          ${primaryBtn}
          <a class="button" href="projects/${project.id.replace(/^(dh|dima|pablo|zoande)-/, '')}">Open Page</a>
        </div>
      </article>
    `;
  }

  grid.innerHTML = primaryProjects
    .map((project, index) => {
      return renderCard(project, index);
    })
    .join("");

  if (moreWrap && moreGrid && showMoreButton && extraProjects.length) {
    moreGrid.innerHTML = extraProjects
      .map((project, index) => renderCard(project, index + primaryProjects.length))
      .join("");
    showMoreButton.hidden = false;
    showMoreButton.addEventListener("click", () => {
      const isOpen = !moreWrap.hidden;
      moreWrap.hidden = isOpen;
      showMoreButton.textContent = isOpen ? "Show More Featured Projects" : "Show Less Featured Projects";
      if (!isOpen) {
        moreWrap.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  } else if (showMoreButton) {
    showMoreButton.hidden = true;
  }
})();
