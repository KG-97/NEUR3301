/**
 * Synapse NEUR3301 — lightweight enhancements for the static build.
 * Progress storage key must match the patched app bundle.
 */
(function () {
  "use strict";

  const KEY = "synapse-neur3301-progress-v1";
  const PANEL_ID = "synapse-enhance-panel";

  function readProgress() {
    try {
      const raw = JSON.parse(localStorage.getItem(KEY) || "[]");
      return Array.isArray(raw) ? raw : [];
    } catch {
      return [];
    }
  }

  function writeProgress(items) {
    localStorage.setItem(KEY, JSON.stringify(items));
    // Nudge react-query if the page is live (reload is the reliable path)
    try {
      window.dispatchEvent(new Event("storage"));
      window.dispatchEvent(new CustomEvent("neur3301-progress"));
    } catch (_) {}
  }

  function statusCounts(items) {
    const counts = {};
    for (const it of items) {
      const s = it && it.status ? String(it.status) : "unknown";
      counts[s] = (counts[s] || 0) + 1;
    }
    return counts;
  }

  function downloadJson(filename, data) {
    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  function exportProgress() {
    const items = readProgress();
    const payload = {
      app: "Synapse NEUR3301 Study Lab",
      key: KEY,
      exportedAt: new Date().toISOString(),
      count: items.length,
      items,
    };
    const stamp = new Date().toISOString().slice(0, 10);
    downloadJson(`neur3301-progress-${stamp}.json`, payload);
    toast(`Exported ${items.length} progress items`);
  }

  function importProgress(file) {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const data = JSON.parse(String(reader.result || "{}"));
        const items = Array.isArray(data) ? data : data.items;
        if (!Array.isArray(items)) throw new Error("No items array");
        const cleaned = items
          .filter((x) => x && typeof x.itemKey === "string" && x.status)
          .map((x) => ({ itemKey: x.itemKey, status: x.status }));
        if (!cleaned.length) throw new Error("No valid items");
        if (
          !confirm(
            `Import ${cleaned.length} progress items?\nThis replaces the current browser progress.`
          )
        ) {
          return;
        }
        writeProgress(cleaned);
        toast(`Imported ${cleaned.length} items — reloading…`);
        setTimeout(() => location.reload(), 500);
      } catch (err) {
        alert("Import failed: " + (err && err.message ? err.message : err));
      }
    };
    reader.readAsText(file);
  }

  function resetProgress() {
    const n = readProgress().length;
    if (!n) {
      toast("No progress saved yet");
      return;
    }
    if (
      !confirm(
        `Reset all ${n} progress items on this browser?\nThis cannot be undone (export first if you care).`
      )
    ) {
      return;
    }
    writeProgress([]);
    toast("Progress cleared — reloading…");
    setTimeout(() => location.reload(), 400);
  }

  function toast(msg) {
    let el = document.getElementById("synapse-toast");
    if (!el) {
      el = document.createElement("div");
      el.id = "synapse-toast";
      el.setAttribute("role", "status");
      document.body.appendChild(el);
    }
    el.textContent = msg;
    el.classList.add("show");
    clearTimeout(el._t);
    el._t = setTimeout(() => el.classList.remove("show"), 2800);
  }

  function refreshStats() {
    const items = readProgress();
    const counts = statusCounts(items);
    const parts = Object.keys(counts)
      .sort()
      .map((k) => `${k}: ${counts[k]}`);
    const el = document.getElementById("synapse-progress-stats");
    if (el) {
      el.textContent = items.length
        ? `${items.length} tracked · ${parts.join(" · ")}`
        : "No progress yet — mark cards known / mastered as you study";
    }
  }

  function buildPanel() {
    if (document.getElementById(PANEL_ID)) return;

    const style = document.createElement("style");
    style.textContent = `
      #${PANEL_ID}{
        position:fixed; z-index:99999; right:12px; bottom:12px;
        font:12px/1.35 system-ui,-apple-system,Segoe UI,Roboto,sans-serif;
        color:#e8eef7; max-width:min(340px,calc(100vw - 24px));
      }
      #${PANEL_ID} .se-card{
        background:rgba(15,23,42,.92); border:1px solid rgba(148,163,184,.35);
        border-radius:12px; box-shadow:0 10px 30px rgba(0,0,0,.35);
        backdrop-filter:blur(8px); padding:10px 12px; display:none;
      }
      #${PANEL_ID}.open .se-card{ display:block; }
      #${PANEL_ID} .se-title{ font-weight:650; font-size:12.5px; margin:0 0 4px; color:#f8fafc; }
      #${PANEL_ID} .se-stats{ color:#94a3b8; margin:0 0 8px; font-size:11px; }
      #${PANEL_ID} .se-row{ display:flex; flex-wrap:wrap; gap:6px; }
      #${PANEL_ID} button, #${PANEL_ID} label.se-btn{
        appearance:none; border:1px solid rgba(148,163,184,.4); background:#1e293b;
        color:#f1f5f9; border-radius:8px; padding:6px 9px; font:inherit; cursor:pointer;
      }
      #${PANEL_ID} button:hover, #${PANEL_ID} label.se-btn:hover{ background:#334155; }
      #${PANEL_ID} button.danger{ border-color:rgba(248,113,113,.45); color:#fecaca; }
      #${PANEL_ID} .se-note{ margin:8px 0 0; color:#64748b; font-size:10.5px; }
      #${PANEL_ID} .se-hr{ border:0; border-top:1px solid rgba(148,163,184,.25); margin:10px 0; }
      #${PANEL_ID} .se-sub{ font-weight:600; color:#cbd5e1; margin:0 0 4px; font-size:11.5px; }
      #${PANEL_ID} .se-list{ margin:0 0 6px; padding-left:1.1em; color:#94a3b8; font-size:10.5px; }
      #${PANEL_ID} .se-list li{ margin:2px 0; }
      #${PANEL_ID} .se-toggle{
        margin-left:auto; display:inline-flex; align-items:center; gap:6px;
        border:1px solid rgba(148,163,184,.45); background:rgba(15,23,42,.9);
        color:#e2e8f0; border-radius:999px; padding:8px 12px; cursor:pointer;
        box-shadow:0 6px 18px rgba(0,0,0,.3); font-weight:600;
      }
      #${PANEL_ID} .se-toggle:hover{ background:#1e293b; }
      #synapse-toast{
        position:fixed; z-index:100000; left:50%; bottom:72px; transform:translateX(-50%) translateY(12px);
        background:#0f172a; color:#f8fafc; border:1px solid rgba(148,163,184,.4);
        padding:8px 14px; border-radius:999px; font:12px system-ui,sans-serif;
        opacity:0; pointer-events:none; transition:opacity .2s, transform .2s;
        max-width:90vw; text-align:center;
      }
      #synapse-toast.show{ opacity:1; transform:translateX(-50%) translateY(0); }
      @media (max-width:640px){
        #${PANEL_ID}{ right:8px; left:8px; bottom:8px; max-width:none; }
      }
    `;
    document.head.appendChild(style);

    const root = document.createElement("div");
    root.id = PANEL_ID;
    root.innerHTML = `
      <div class="se-card" role="dialog" aria-label="Study tools">
        <p class="se-title">Study tools (local)</p>
        <p class="se-stats" id="synapse-progress-stats"></p>
        <div class="se-row">
          <button type="button" id="se-export">Export JSON</button>
          <label class="se-btn" for="se-import-file">Import JSON</label>
          <input id="se-import-file" type="file" accept="application/json,.json" hidden />
          <button type="button" id="se-refresh">Refresh stats</button>
          <button type="button" class="danger" id="se-reset">Reset</button>
        </div>
        <hr class="se-hr" />
        <p class="se-sub">2026 handbook alignment</p>
        <ul class="se-list">
          <li><strong>Test 1</strong> Mon 24 Aug — L1–7 Development &amp; Differentiation (10%)</li>
          <li><strong>Test 2</strong> Mon 7 Sep — L8–13 Synaptic Physiology &amp; Plasticity (10%)</li>
          <li><strong>Seminar video</strong> Fri 18 Sep 11:59pm — 25% group (15 min; 14–16 allowed)</li>
          <li><strong>Peer questions</strong> Fri 9 Oct — + <strong>Q&amp;A</strong> Wed 14 Oct = 5% individual</li>
          <li><strong>Final exam</strong> 50% — 2 h long-answer, 4 of 8–10; all lectures (date on LMS)</li>
        </ul>
        <p class="se-sub">Unit outcomes to cover</p>
        <ul class="se-list">
          <li>Neurons/glia structure–function · synaptic physiology &amp; plasticity</li>
          <li>Peripheral transduction &amp; central sensory processing (normal + pathological)</li>
          <li>Motor/cognitive integration · neuroendocrinology</li>
          <li>Development · injury/degeneration · repair &amp; prostheses</li>
        </ul>
        <p class="se-note">Progress in this browser only (localStorage). Aligns with handbook 13 Jul 2026; always verify against LMS slides. Alt+P toggles this panel.</p>
      </div>
      <div style="display:flex;justify-content:flex-end;margin-top:8px">
        <button type="button" class="se-toggle" id="se-toggle" aria-expanded="false">Study tools</button>
      </div>
    `;
    document.body.appendChild(root);

    const toggle = root.querySelector("#se-toggle");
    toggle.addEventListener("click", () => {
      const open = root.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      if (open) refreshStats();
    });

    root.querySelector("#se-export").addEventListener("click", exportProgress);
    root.querySelector("#se-refresh").addEventListener("click", () => {
      refreshStats();
      toast("Stats refreshed");
    });
    root.querySelector("#se-reset").addEventListener("click", resetProgress);
    root.querySelector("#se-import-file").addEventListener("change", (e) => {
      const f = e.target.files && e.target.files[0];
      if (f) importProgress(f);
      e.target.value = "";
    });

    // Keyboard: Alt+P toggles panel
    window.addEventListener("keydown", (e) => {
      if (e.altKey && (e.key === "p" || e.key === "P")) {
        e.preventDefault();
        toggle.click();
      }
    });

    refreshStats();
    // periodic light refresh while open
    setInterval(() => {
      if (root.classList.contains("open")) refreshStats();
    }, 4000);
  }

  function markOnlineStatus() {
    document.documentElement.dataset.online = navigator.onLine ? "1" : "0";
    window.addEventListener("online", () => {
      document.documentElement.dataset.online = "1";
    });
    window.addEventListener("offline", () => {
      document.documentElement.dataset.online = "0";
      toast("Offline — progress still saves locally");
    });
  }

  function boot() {
    markOnlineStatus();
    buildPanel();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
