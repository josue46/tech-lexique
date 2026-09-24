(() => {
  "use strict";

  const grid = document.getElementById("cards-grid");
  const emptyState = document.getElementById("empty-state");
  const searchInput = document.getElementById("search-input");
  const pillsWrap = document.getElementById("category-pills");
  const favFilter = document.getElementById("fav-filter");
  const resultCount = document.getElementById("result-count");
  const resetBtn = document.getElementById("reset-filters");
  const topBtn = document.getElementById("back-to-top");
  const themeBtn = document.getElementById("theme-toggle");
  const iconSun = document.getElementById("icon-sun");
  const iconMoon = document.getElementById("icon-moon");

  const LS_FAV = "techlexique:favs";
  const LS_THEME = "techlexique:theme";

  let activeCategory = "all";
  let query = "";
  let favs = new Set(JSON.parse(localStorage.getItem(LS_FAV) || "[]"));

  // Thème toggle
  const applyTheme = (dark) => {
    document.documentElement.classList.toggle("dark", dark);
    iconSun.classList.toggle("hidden", !dark);
    iconMoon.classList.toggle("hidden", dark);
    localStorage.setItem(LS_THEME, dark ? "dark" : "light");
  };
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  applyTheme(
    localStorage.getItem(LS_THEME)
      ? localStorage.getItem(LS_THEME) === "dark"
      : prefersDark,
  );
  themeBtn.addEventListener("click", () =>
    applyTheme(!document.documentElement.classList.contains("dark")),
  );

  // Construction des pills de catégories
  const buildPills = () => {
    const entries = [
      ["all", { label: "Tout", color: "#4d6fff" }],
      ...Object.entries(CATEGORIES),
    ];
    pillsWrap.innerHTML = entries
      .map(([key, cat]) => {
        const n =
          key === "all"
            ? TERMS.length
            : TERMS.filter((t) => t.cat === key).length;
        const active = key === activeCategory;
        return `
        <button data-cat="${key}"
          class="pill group inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[13px] font-medium transition-all
          ${
            active
              ? "border-transparent bg-ink-900 text-white dark:bg-white dark:text-ink-900 shadow-sm"
              : "border-ink-200 dark:border-ink-800 bg-white dark:bg-ink-900 text-ink-600 dark:text-ink-300 hover:border-ink-300 dark:hover:border-ink-700"
          }">
          <span class="cat-dot h-1.5 w-1.5 rounded-full" style="background:${cat.color};color:${cat.color}"></span>
          ${cat.label}
          <span class="font-mono text-[11px] opacity-50">${n}</span>
        </button>`;
      })
      .join("");
  };
  
  pillsWrap.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-cat]");
    if (!btn) return;
    activeCategory = btn.dataset.cat;
    buildPills();
    render();
  });

  // Highlighting des termes recherchés
  const escapeReg = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const highlight = (text, q) => {
    if (!q) return text;
    const rx = new RegExp(`(${escapeReg(q)})`, "gi");
    return text.replace(rx, "<mark>$1</mark>");
  };

  // Normalisation pour recherche insensible aux accents et à la casse
  const norm = (s) =>
    s
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  
  const filtered = () =>
    TERMS.filter((t) => {
      if (activeCategory !== "all" && t.cat !== activeCategory) return false;
      if (favFilter.checked && !favs.has(t.term)) return false;
      if (!query) return true;
      const nq = norm(query);
      return (
        norm(t.term).includes(nq) ||
        norm(t.full).includes(nq) ||
        norm(t.def).includes(nq)
      );
    });

  const starSVG = (filled) => `
    <svg width="15" height="15" viewBox="0 0 24 24"
      fill="${filled ? "currentColor" : "none"}"
      stroke="currentColor" stroke-width="1.8" stroke-linejoin="round">
      <path d="M12 2.5 9.9 8.6 3.4 9l5 4.4-1.5 6.4L12 16.7l5.1 3.1L15.6 13.4 20.6 9l-6.5-.4z"/>
    </svg>`;

  const cardHTML = (t, i) => {
    const cat = CATEGORIES[t.cat];
    const isFav = favs.has(t.term);
    const open = t._open ? " open" : "";
    return `
    <article class="term-card card-enter flex flex-col rounded-xl border border-ink-200/80 dark:border-ink-800 bg-white dark:bg-ink-900 p-5${open}"
      style="animation-delay:${Math.min(i * 25, 300)}ms" data-term="${t.term}">
      <div class="flex items-start justify-between gap-3">
        <div class="min-w-0">
          <h3 class="font-display text-lg font-bold leading-snug tracking-tight">${highlight(t.term, query)}</h3>
          ${
            t.full && t.full !== "—"
              ? `<p class="mt-0.5 truncate font-mono text-[11px] uppercase tracking-wide text-ink-400 dark:text-ink-500">${highlight(t.full, query)}</p>`
              : ""
          }
        </div>
        <button class="fav-btn shrink-0 rounded-lg p-1.5 transition-colors ${
          isFav
            ? "text-amber-400 hover:text-amber-500"
            : "text-ink-300 dark:text-ink-600 hover:text-amber-400"
        }"
          aria-label="${isFav ? "Retirer des favoris" : "Ajouter aux favoris"}" title="Favori">
          ${starSVG(isFav)}
        </button>
      </div>

      <p class="mt-3 text-[14px] leading-relaxed text-ink-600 dark:text-ink-300">${highlight(t.def, query)}</p>

      <div class="term-details">
        <div>
          <p class="mt-3 border-l-2 pl-3 text-[13px] leading-relaxed text-ink-500 dark:text-ink-400"
            style="border-color:${cat.color}">${t.detail}</p>
        </div>
      </div>

      <div class="mt-4 flex items-center justify-between border-t border-ink-100 dark:border-ink-800 pt-3">
        <span class="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold"
          style="background:color-mix(in srgb, ${cat.color} 12%, transparent);color:${cat.color}">
          <span class="h-1 w-1 rounded-full" style="background:${cat.color}"></span>
          ${cat.label}
        </span>
        <button class="more-btn inline-flex items-center gap-1 text-[12px] font-medium text-ink-400 dark:text-ink-500 hover:text-accent-500 transition-colors">
          ${t._open ? "Moins" : "Détails"}
          <svg class="chevron" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="m6 9 6 6 6-6"/></svg>
        </button>
      </div>
    </article>`;
  };

  const render = () => {
    const list = filtered();
    resultCount.textContent = `${list.length} terme${list.length > 1 ? "s" : ""} affiché${list.length > 1 ? "s" : ""}`;
    emptyState.classList.toggle("hidden", list.length > 0);
    grid.innerHTML = list.map(cardHTML).join("");
  };

  // Management des clics sur les cartes (favoris / détails)
  grid.addEventListener("click", (e) => {
    const card = e.target.closest(".term-card");
    if (!card) return;
    const t = TERMS.find((x) => x.term === card.dataset.term);

    if (e.target.closest(".fav-btn")) {
      favs.has(t.term) ? favs.delete(t.term) : favs.add(t.term);
      localStorage.setItem(LS_FAV, JSON.stringify([...favs]));
      render();
      return;
    }
    if (e.target.closest(".more-btn")) {
      t._open = !t._open;
      render(); // re-render pour conserver l'état ouvert
    }
  });

  // Construction de la recherche avec debounce de 120ms.
  let debounce;
  searchInput.addEventListener("input", () => {
    clearTimeout(debounce);
    debounce = setTimeout(() => {
      query = searchInput.value.trim();
      render();
    }, 120);
  });

  // Raccourci clavier pour la recherche (Cmd/Ctrl + K) et fermeture avec Échap
  document.addEventListener("keydown", (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      searchInput.focus();
      searchInput.select();
    }
    if (e.key === "Escape" && document.activeElement === searchInput)
      searchInput.blur();
  });

  // Gestion du filtre favoris et du bouton reset
  favFilter.addEventListener("change", render);
  resetBtn.addEventListener("click", () => {
    query = "";
    searchInput.value = "";
    activeCategory = "all";
    favFilter.checked = false;
    buildPills();
    render();
    searchInput.focus();
  });

  // Gestion du bouton "back to top"
  const onScroll = () => {
    const show = window.scrollY > 600;
    topBtn.classList.toggle("hidden", !show);
    topBtn.classList.toggle("flex", show);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  topBtn.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" }),
  );

  // Initialisation
  const counts = `${TERMS.length} termes`;
  document.getElementById("hero-count").textContent = TERMS.length;
  document.getElementById("nav-count").textContent = counts;
  document.getElementById("kbd-hint").textContent = navigator.platform
    .toUpperCase()
    .includes("MAC")
    ? "⌘K"
    : "Ctrl K";

  buildPills();
  render();
})();
