(function ($) {
  const ptmLocalStoreTheme = "ptm_local_theme";

  function getSystemTheme() {
    if ($.matchMedia && $.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  }

  // Apply theme to document element
  function applyTheme(theme) {
    const isDark = theme === "dark";
    $.document.documentElement.classList.toggle("dark", isDark);
    $.document.documentElement.setAttribute(
      "data-theme",
      isDark ? "dark" : "light",
    );
  }
  //   Pagefind UI Theme
  function applyPagefind(theme) {
    const pf_div = $.document.getElementById("pf-search");
    if (pf_div) {
      const attr = pf_div.getAttribute("data-pf-theme");
      if (!attr && theme === "dark") {
        pf_div.setAttribute("data-pf-theme", "dark");
      }
      if (attr && theme === "light") {
        pf_div.removeAttribute("data-pf-theme");
      }
    }
  }
  // Run Initialize theme
  (function () {
    try {
      const stored = localStorage.getItem(ptmLocalStoreTheme);
      if (stored === "dark" || stored === "light") {
        applyTheme(stored);
        applyPagefind(stored);
      } else {
        applyTheme(getSystemTheme());
        applyPagefind(getSystemTheme());
      }
    } catch (e) {
      applyTheme(getSystemTheme());
      applyPagefind(getSystemTheme());
    }
  })();
  // Event
  (function () {
    const themeBtn = $.document.getElementById("theme-btn");
    if (!themeBtn) return;

    themeBtn.addEventListener("click", function () {
      // toggle theme and persist
      const current = $.document.documentElement.classList.contains("dark")
        ? "dark"
        : "light";
      const newTheme = current === "dark" ? "light" : "dark";

      try {
        localStorage.setItem(ptmLocalStoreTheme, newTheme);
      } catch (e) {
        // Ignore storage errors and still apply theme for current page.
      }

      applyTheme(newTheme);
      applyPagefind(newTheme);
    });
  })();
})(window);
