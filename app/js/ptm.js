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
        $.document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
    }

    // Initialize theme
    (function initTheme() {
        try {
            const stored = localStorage.getItem(ptmLocalStoreTheme);
            if (stored === "dark" || stored === "light") {
                applyTheme(stored);
            } else {
                applyTheme(getSystemTheme());
            }
        } catch (e) {
            applyTheme(getSystemTheme());
        }
    })();

    (function () {
        const themeBtn = document.getElementById("theme-btn");
        if (!themeBtn) return;

        themeBtn.addEventListener("click", function () {
            // toggle theme and persist
            const current = $.document.documentElement.classList.contains("dark") ? "dark" : "light";
            const newTheme = current === "dark" ? "light" : "dark";

            try {
                localStorage.setItem(ptmLocalStoreTheme, newTheme);
            } catch (e) {
                // Ignore storage errors and still apply theme for current page.
            }

            applyTheme(newTheme);
        });
    })();

    //------------------------------------------------------------------------------
    const topBtn = $.document.getElementById("topBtn");
    if (topBtn) {
        topBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
        $.onscroll = () => {
            topBtn.style.opacity = window.scrollY > 200 ? 1 : 0;
        };
    }
})(window);
