(function () {
  const KEY = "diddymark_question_history_v1";
  const els = {
    subject: document.getElementById("historySubjectFilter"),
    source: document.getElementById("historySourceFilter"),
    level: document.getElementById("historyLevelFilter"),
    mode: document.getElementById("historyModeFilter"),
    refreshBtn: document.getElementById("refreshHistoryBtn"),
    clearBtn: document.getElementById("clearHistoryBtn"),
    meta: document.getElementById("historyMeta"),
    list: document.getElementById("historyList")
  };

  function loadEntries() {
    try {
      const raw = localStorage.getItem(KEY);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }

  function saveEntries(entries) {
    try {
      localStorage.setItem(KEY, JSON.stringify(entries));
      return true;
    } catch {
      return false;
    }
  }

  function formatDate(iso) {
    try {
      return new Date(iso).toLocaleString("en-AU", {
        year: "numeric",
        month: "short",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
      });
    } catch {
      return iso || "-";
    }
  }

  function esc(value) {
    return String(value || "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function filterEntries(entries) {
    const subject = els.subject.value;
    const source = els.source.value;
    const level = els.level.value;
    const mode = els.mode.value;

    return entries.filter((entry) => {
      if (subject !== "all" && entry.subjectId !== subject) return false;
      if (source !== "all" && (entry.sourceMode || "syllabus") !== source) return false;
      if (level !== "all" && entry.level !== level) return false;
      if (mode !== "all" && entry.mode !== mode) return false;
      return true;
    });
  }

  function render() {
    const entries = loadEntries();
    const filtered = filterEntries(entries);

    els.meta.textContent = `${filtered.length} question(s) shown of ${entries.length} total.`;

    if (!filtered.length) {
      els.list.innerHTML = '<p class="muted">No questions in history for this filter yet.</p>';
      return;
    }

    els.list.innerHTML = filtered
      .slice(0, 160)
      .map((entry, idx) => {
        const sourceText = entry.sourceMode === "past_style" ? "Past HSC/Trial Style" : "Syllabus Bank";
        const sample = esc(entry.sampleAnswer || "No sample answer saved");
        const sourceTag = entry.sourceTag ? `<p class="meta">Inspired by: ${esc(entry.sourceTag)}</p>` : "";

        return `
          <article class="history-item">
            <p class="meta">#${idx + 1} | ${formatDate(entry.createdAt)} | ${esc(entry.mode)} mode</p>
            <h3>${esc(entry.subjectLabel)} | ${esc(entry.moduleName)} | ${esc(entry.level)}</h3>
            <p class="meta">${sourceText} | ${esc(entry.type || "extended_response")} | ${esc(entry.marks)} marks</p>
            ${sourceTag}
            <p><strong>Question:</strong> ${esc(entry.stem)}</p>
            <details>
              <summary>View Sample Answer</summary>
              <p>${sample}</p>
            </details>
          </article>
        `;
      })
      .join("");
  }

  function wire() {
    [els.subject, els.source, els.level, els.mode].forEach((input) => {
      input.addEventListener("change", render);
    });

    els.refreshBtn.addEventListener("click", render);
    els.clearBtn.addEventListener("click", () => {
      const ok = window.confirm("Clear all saved generated question history?");
      if (!ok) return;
      saveEntries([]);
      render();
    });
  }

  wire();
  render();
})();
