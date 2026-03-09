(() => {
  const year = document.querySelector("[data-year]");
  if (year) year.textContent = String(new Date().getFullYear());

  const header = document.querySelector("[data-header]");
  const navToggle = document.querySelector("[data-nav-toggle]");
  const navPanel = document.querySelector("[data-nav-panel]");

  const closeNav = () => {
    if (!navToggle || !navPanel) return;
    navToggle.setAttribute("aria-expanded", "false");
    navPanel.classList.remove("is-open");
  };

  const openNav = () => {
    if (!navToggle || !navPanel) return;
    navToggle.setAttribute("aria-expanded", "true");
    navPanel.classList.add("is-open");
  };

  if (navToggle && navPanel) {
    navToggle.addEventListener("click", () => {
      const expanded = navToggle.getAttribute("aria-expanded") === "true";
      if (expanded) closeNav();
      else openNav();
    });

    document.addEventListener("click", (e) => {
      const t = e.target;
      if (!(t instanceof Element)) return;
      if (t.closest("[data-nav-panel]") || t.closest("[data-nav-toggle]")) return;
      closeNav();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeNav();
    });
  }

  const path = (location.pathname || "/").toLowerCase();
  const normalize = (p) => (p === "/" ? "/" : p.replace(/\/+$/, ""));
  const active = normalize(path);

  document.querySelectorAll(".nav__link").forEach((a) => {
    const href = a.getAttribute("href");
    if (!href) return;
    const target = normalize(href.toLowerCase());
    if (target === active) a.classList.add("is-active");
    else a.classList.remove("is-active");
  });

  // Resume link placeholder: hide if file doesn't exist (best-effort without fetch)
  const resumeLink = document.querySelector("[data-resume-link]");
  if (resumeLink && resumeLink.getAttribute("href")?.endsWith(".pdf")) {
    // If you add the PDF later, remove this line to always show it.
    resumeLink.style.display = "none";
  }

  // tiny "ready" class for future progressive enhancements
  header?.classList.add("is-ready");
})();

