const localStoreTheme = "mmdocs_local_theme";
const root = document.documentElement;
const pf_div = document.getElementById("pf-search");

// Theme
function getSystemTheme() {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    return "dark";
  }
  return "light";
}
function applyTheme(theme) {
  const isDark = theme === "dark";

  if (pf_div) {
    const attr = pf_div.getAttribute("data-pf-theme");
    if (!attr && isDark) {
      pf_div.setAttribute("data-pf-theme", "dark");
    }
    if (attr && !isDark) {
      pf_div.removeAttribute("data-pf-theme");
    }
    root.classList.toggle("dark", isDark);
  } else {
    root.classList.toggle("dark", isDark);
  }
}
// Initialize theme
(() => {
  let theme = getSystemTheme();
  try {
    let stored = localStorage.getItem(localStoreTheme);
    if (stored === "dark" || stored === "light") {
      theme = stored;
    }
  } catch (e) {}
  applyTheme(theme);
})();
// Theme Event
(function () {
  const themeBtn = document.getElementById("theme-btn");
  if (!themeBtn) return;

  themeBtn.addEventListener("click", function () {
    // toggle theme and persist
    const current = root.classList.contains("dark") ? "dark" : "light";
    const newTheme = current === "dark" ? "light" : "dark";

    try {
      localStorage.setItem(localStoreTheme, newTheme);
    } catch (e) {
      // Ignore storage errors and still apply theme for current page.
    }

    applyTheme(newTheme);
  });
})();
