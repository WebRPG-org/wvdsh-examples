function wavedash_js_init() {
  if (window.Wavedash && typeof window.Wavedash.init === "function") {
    window.Wavedash.init({ debug: true });
  }
  return 1.0;
}

function wavedash_js_update_progress(progress) {
  if (window.Wavedash && typeof window.Wavedash.updateLoadProgressZeroToOne === "function") {
    window.Wavedash.updateLoadProgressZeroToOne(progress);
  }
  return 1.0;
}

(function () {
  window.ensureAspectRatio = function () {
    if (!window.startingAspect) return;
    const c = document.getElementById("canvas");
    if (!c) return;
    c.classList.add("active");
    c.style.width = window.innerWidth + "px";
    c.style.height = (window.innerWidth / window.startingAspect) + "px";
  };
  const hideDebugUI = () => {
    const out = document.getElementById("output-container");
    if (out) out.hidden = true;
  };
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", hideDebugUI);
  } else {
    hideDebugUI();
  }
})();
