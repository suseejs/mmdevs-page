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
  function applyPfAttr(theme) {
    const pfDiv = document.getElementById("pf-search");
    if (pfDiv) {
      const attr = pfDiv.getAttribute("data-pf-theme");
      if (!attr && theme === "dark") {
        pfDiv.setAttribute("data-pf-theme", "dark");
      }
      if (attr && theme === "light") {
        pfDiv.removeAttribute("data-pf-theme");
      }
    }
  }
  // Initialize theme
  (function initTheme() {
    try {
      const stored = localStorage.getItem(ptmLocalStoreTheme);
      if (stored === "dark" || stored === "light") {
        applyTheme(stored);
        applyPfAttr(stored);
      } else {
        applyTheme(getSystemTheme());
        applyPfAttr(getSystemTheme());
      }
    } catch (e) {
      applyTheme(getSystemTheme());
      applyPfAttr(getSystemTheme());
    }
  })();

  (function () {
    const themeBtn = document.getElementById("theme-btn");
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
      applyPfAttr(newTheme);
    });
  })();

  //------------------------------------------------------------------------------
  // const topBtn = $.document.getElementById("topBtn");
  // if (topBtn) {
  //   topBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
  //   $.onscroll = () => {
  //     topBtn.style.opacity = window.scrollY > 200 ? 1 : 0;
  //   };
  // }

  //------------------------------------------------------------------------------
  (function initCodeBlockCopy() {
    const blocks = $.document.querySelectorAll(
      ".markdown-body .highlighter-rouge .highlight",
    );
    if (!blocks.length) return;

    function fallbackCopy(text) {
      const textarea = $.document.createElement("textarea");
      textarea.value = text;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      $.document.body.appendChild(textarea);
      textarea.select();

      let success = false;
      try {
        success = $.document.execCommand("copy");
      } catch (e) {
        success = false;
      }

      $.document.body.removeChild(textarea);
      return success;
    }

    async function copyText(text) {
      if ($.navigator.clipboard && $.navigator.clipboard.writeText) {
        try {
          await $.navigator.clipboard.writeText(text);
          return true;
        } catch (e) {
          return fallbackCopy(text);
        }
      }
      return fallbackCopy(text);
    }

    blocks.forEach((block) => {
      if (block.querySelector(".copy-code-btn")) return;

      const code = block.querySelector("pre code");
      if (!code) return;

      const button = $.document.createElement("button");
      button.type = "button";
      button.className = "copy-code-btn";
      button.setAttribute("aria-label", "Copy code to clipboard");
      button.setAttribute("title", "Copy code");

      button.addEventListener("click", async () => {
        const codeText = code.innerText;
        const success = await copyText(codeText);

        button.classList.toggle("is-copied", success);
        button.classList.toggle("is-failed", !success);
        button.setAttribute("title", success ? "Copied" : "Copy failed");
        button.setAttribute(
          "aria-label",
          success ? "Code copied" : "Copy failed",
        );

        $.setTimeout(() => {
          button.classList.remove("is-copied", "is-failed");
          button.setAttribute("title", "Copy code");
          button.setAttribute("aria-label", "Copy code to clipboard");
        }, 1500);
      });

      block.appendChild(button);
    });
  })();
})(window);
