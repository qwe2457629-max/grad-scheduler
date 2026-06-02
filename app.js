/* ============================================================
 *  研究所推甄 時間衝突檢查 — 程式邏輯（三步驟流程版）
 *  流程：① 選學校 → ② 選系所 → ③ 日曆結果 / 匯出 Google 日曆
 *  資料在 data.js（全域 PROGRAMS）。
 * ============================================================ */

// 9 所頂大固定清單（沒有資料的顯示「即將推出」）
const SCHOOLS = [
  "臺灣大學", "政治大學", "清華大學", "陽明交通大學", "成功大學",
  "中興大學", "中正大學", "中山大學", "中央大學",
];

const STORAGE_KEY = "grad-scheduler-selected";
let selected = new Set(loadSelected());
let currentSchool = null;

function loadSelected() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []; }
  catch (e) { return []; }
}
function saveSelected() { localStorage.setItem(STORAGE_KEY, JSON.stringify([...selected])); }

const byId = (id) => PROGRAMS.find((p) => p.id === id);
const progsOf = (school) => PROGRAMS.filter((p) => p.school === school);
const fmt = (p) => `${p.dept}${p.group ? "（" + p.group + "）" : ""}`;
const fmtFull = (p) => `${shortSchool(p.school)} ${fmt(p)}`;
function shortSchool(s) {
  return { 臺灣大學: "臺大", 政治大學: "政大", 清華大學: "清大", 陽明交通大學: "陽明交大",
    成功大學: "成大", 中興大學: "中興", 中正大學: "中正", 中山大學: "中山", 中央大學: "中央" }[s] || s;
}
const md = (iso) => (iso ? `${+iso.slice(5, 7)}/${iso.slice(8, 10)}` : "");
function selectedSchools() {
  return [...new Set(PROGRAMS.filter((p) => selected.has(p.id)).map((p) => p.school))];
}

/* ---------- 報名 / 繳費截止（全校共用） ---------- */
function deadlineChips(school, withName) {
  const info = (typeof SCHOOL_INFO !== "undefined") && SCHOOL_INFO[school];
  if (!info) return "";
  const pre = withName ? shortSchool(school) + "・" : "";
  return `
    <div class="dl-chip"><div class="k">${pre}報名期間</div>
      <div class="v">${md(info.regStart)} – ${md(info.regEnd)}</div></div>
    <div class="dl-chip pay"><div class="k">${pre}繳費截止</div>
      <div class="v">${md(info.payDeadline)}</div>
      ${info.payNote ? `<div class="dl-note">${info.payNote}</div>` : ""}</div>`;
}
function renderDeadlines(containerId, schools, withName) {
  document.getElementById(containerId).innerHTML =
    schools.map((s) => deadlineChips(s, withName)).join("");
}
// 報名/繳費截止 → 行事曆/匯出用的事件
function deadlineEvents() {
  const evs = [];
  for (const s of selectedSchools()) {
    const info = (typeof SCHOOL_INFO !== "undefined") && SCHOOL_INFO[s];
    if (!info) continue;
    if (info.regEnd) evs.push({ date: info.regEnd, kind: "報名截止", school: s, url: info.scheduleUrl });
    if (info.payDeadline) evs.push({ date: info.payDeadline, kind: "繳費截止", school: s, url: info.scheduleUrl });
  }
  return evs;
}

/* ---------- 時間 / 衝突 ---------- */
function toMinutes(hhmm) { const [h, m] = hhmm.split(":").map(Number); return h * 60 + m; }
function slotRange(e) {
  return [e.start ? toMinutes(e.start) : 0, e.end ? toMinutes(e.end) : 24 * 60 - 1];
}
function examConflict(a, b) {
  if (!a.date || !b.date || a.date !== b.date) return null;
  const [as, ae] = slotRange(a), [bs, be] = slotRange(b);
  if (!(as <= be && bs <= ae)) return null;
  return a.tentative || b.tentative ? "maybe" : "conflict";
}
function findConflicts() {
  const chosen = PROGRAMS.filter((p) => selected.has(p.id));
  const out = [];
  for (let i = 0; i < chosen.length; i++)
    for (let j = i + 1; j < chosen.length; j++) {
      let worst = null, date = null;
      for (const ea of chosen[i].exams) for (const eb of chosen[j].exams) {
        const c = examConflict(ea, eb);
        if (c === "conflict") { worst = "conflict"; date = ea.date; }
        else if (c === "maybe" && worst !== "conflict") { worst = "maybe"; date = ea.date; }
      }
      if (worst) out.push({ a: chosen[i], b: chosen[j], level: worst, date });
    }
  return out;
}
// 哪些日期有衝突
function conflictDates() {
  const s = new Set();
  for (const c of findConflicts()) if (c.level === "conflict") s.add(c.date);
  return s;
}

/* ---------- 視圖切換 ---------- */
function showView(name) {
  for (const v of ["schools", "dept", "result"])
    document.getElementById("view-" + v).classList.toggle("hidden-view", v !== name);
  const order = { schools: 0, dept: 1, result: 2 };
  document.querySelectorAll(".step").forEach((el) => {
    const s = el.dataset.step;
    el.classList.toggle("active", s === name);
    el.classList.toggle("done", order[s] < order[name]);
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* ---------- Step 1：學校 ---------- */
function renderSchools() {
  const grid = document.getElementById("school-grid");
  grid.innerHTML = "";
  for (const school of SCHOOLS) {
    const list = progsOf(school);
    const pickedN = list.filter((p) => selected.has(p.id)).length;
    const soon = list.length === 0;
    const card = document.createElement("div");
    card.className = "school-card" + (soon ? " soon" : "");
    card.innerHTML = `
      ${pickedN ? `<span class="picked-tag">已選 ${pickedN}</span>` : ""}
      <h3>${school}</h3>
      <div class="meta">${soon ? `<span class="soon-tag">資料準備中・即將推出</span>` : `${list.length} 個系所可選`}</div>
    `;
    if (!soon) card.addEventListener("click", () => openSchool(school));
    grid.appendChild(card);
  }
}

/* ---------- 跨校全域搜尋（在選學校頁） ---------- */
function renderGlobalSearch(q) {
  const kw = q.trim().toLowerCase();
  const grid = document.getElementById("school-grid");
  const box = document.getElementById("global-results");
  if (!kw) { grid.style.display = ""; box.innerHTML = ""; return; }
  grid.style.display = "none";

  const hits = PROGRAMS.filter((p) =>
    (p.school + p.dept + p.group).toLowerCase().includes(kw));
  if (!hits.length) {
    box.innerHTML = `<div class="gr-hint">找不到「${q}」相關系所，換個關鍵字或回下方選學校。</div>`;
    return;
  }
  // 依學校分組
  const bySchool = {};
  for (const p of hits) (bySchool[p.school] ||= []).push(p);
  box.innerHTML = `<div class="gr-hint">找到 ${hits.length} 個系所（跨 ${Object.keys(bySchool).length} 校），勾選後按上方「查看日曆結果」。</div>`;
  for (const [school, list] of Object.entries(bySchool)) {
    const h = document.createElement("div");
    h.className = "gr-school";
    h.textContent = `${school}（${list.length}）`;
    box.appendChild(h);
    for (const p of list) box.appendChild(programLabel(p, true));
  }
}
// 共用：產生一個可勾選的系所列（showSchool 顯示學校）
function programLabel(p, showSchool) {
  const examText = p.exams.map((e) =>
    `${e.date || "日期待確認"} ${e.start || ""}${e.end ? "–" + e.end : ""} ${e.type}${e.tentative ? "·待確認" : ""}`).join("、");
  const label = document.createElement("label");
  label.className = "program";
  label.innerHTML = `
    <input type="checkbox" value="${p.id}" ${selected.has(p.id) ? "checked" : ""}>
    <span class="prog-name">${fmt(p)}${showSchool ? ` <span class="prog-school">· ${shortSchool(p.school)}</span>` : ""}</span>
    <span class="prog-exam">${examText}</span>
    <a class="prog-link" href="${p.url}" target="_blank" rel="noopener">簡章↗</a>`;
  label.querySelector("input").addEventListener("change", (e) => {
    e.target.checked ? selected.add(p.id) : selected.delete(p.id);
    saveSelected();
    updateCart();
  });
  return label;
}

/* ---------- Step 2：系所 ---------- */
function openSchool(school) {
  currentSchool = school;
  document.getElementById("dept-title").textContent = school;
  document.getElementById("search").value = "";
  renderDeadlines("dept-deadlines", [school], false);
  renderPicker(school);
  showView("dept");
}
function renderPicker(school) {
  const box = document.getElementById("picker");
  box.innerHTML = "";
  for (const p of progsOf(school)) {
    const examText = p.exams.map((e) =>
      `${e.date || "日期待確認"} ${e.start || ""}${e.end ? "–" + e.end : ""} ${e.type}`).join("、");
    const label = document.createElement("label");
    label.className = "program";
    label.innerHTML = `
      <input type="checkbox" value="${p.id}" ${selected.has(p.id) ? "checked" : ""}>
      <span class="prog-name">${fmt(p)}</span>
      <span class="prog-exam">${examText}</span>
      <a class="prog-link" href="${p.url}" target="_blank" rel="noopener">簡章↗</a>`;
    box.appendChild(label);
  }
  box.onchange = (e) => {
    if (e.target.matches('input[type="checkbox"]')) {
      e.target.checked ? selected.add(e.target.value) : selected.delete(e.target.value);
      saveSelected();
      updateCart();
    }
  };
}
function filterPicker(q) {
  const kw = q.trim().toLowerCase();
  for (const label of document.querySelectorAll("#picker .program"))
    label.classList.toggle("hidden", kw !== "" && !label.textContent.toLowerCase().includes(kw));
}

/* ---------- 購物車列 ---------- */
function updateCart() {
  const n = selected.size;
  document.getElementById("cart-count").textContent = n;
  document.getElementById("cartbar").classList.toggle("empty", n === 0);
  renderSchools(); // 更新各校「已選 N」標籤
}

/* ---------- Step 3：結果 + 日曆 ---------- */
function renderResult() {
  renderConflicts();
  renderDeadlines("result-deadlines", selectedSchools(), true);
  renderCalendar();
  renderEventList();
  renderNoDate();
  showView("result");
}
// 列出已選但「日期待公告」的系所（台大/中央/中正等）
function renderNoDate() {
  const box = document.getElementById("nodate");
  box.innerHTML = "";
  const nd = PROGRAMS.filter((p) => selected.has(p.id) && !p.exams.some((e) => e.date));
  if (!nd.length) return;
  const h = document.createElement("h4");
  h.style.fontSize = "15px";
  h.innerHTML = `📌 日期待系所公告（${nd.length}）<span class="muted" style="font-weight:400;font-size:12px;"> — 這些系所的甄試日期簡章未列，需考前看系所公告</span>`;
  box.appendChild(h);
  for (const p of nd) {
    const row = document.createElement("div");
    row.className = "ev-row dl";
    row.innerHTML = `
      <span class="ev-date">待公告</span>
      <span class="ev-name">${fmtFull(p)}</span>
      <a class="gcal" href="${p.url}" target="_blank" rel="noopener">系所公告↗</a>`;
    box.appendChild(row);
  }
}
function renderConflicts() {
  const box = document.getElementById("conflicts");
  const chosen = PROGRAMS.filter((p) => selected.has(p.id));
  if (!chosen.length) { box.innerHTML = `<p class="muted">尚未選任何系所。</p>`; return; }
  const cs = findConflicts();
  const hard = cs.filter((c) => c.level === "conflict"), maybe = cs.filter((c) => c.level === "maybe");
  let html = `<p class="summary">已選 <b>${chosen.length}</b> 個系所（${new Set(chosen.map((p) => p.school)).size} 校）。`;
  html += hard.length || maybe.length
    ? `偵測到 <span class="bad">${hard.length} 個確定衝突</span>${maybe.length ? `、<span class="warn">${maybe.length} 個可能衝突</span>` : ""}。</p>`
    : `<span class="ok">沒有偵測到衝突</span> ✅</p>`;
  box.innerHTML = html;
  for (const c of [...hard, ...maybe]) {
    const div = document.createElement("div");
    div.className = "conflict-item " + (c.level === "conflict" ? "lv-bad" : "lv-warn");
    div.innerHTML = `<span class="conflict-tag">${c.level === "conflict" ? "確定衝突" : "可能衝突"}</span>
      <span class="conflict-date">${c.date}</span>
      <div class="conflict-pair">${fmtFull(c.a)} <b>✕</b> ${fmtFull(c.b)}</div>`;
    box.appendChild(div);
  }
}

function eventsOfSelection() {
  const evs = [];
  for (const p of PROGRAMS) if (selected.has(p.id))
    for (const e of p.exams) if (e.date) evs.push({ ...e, program: p });
  evs.sort((a, b) => (a.date + (a.start || "")).localeCompare(b.date + (b.start || "")));
  return evs;
}
function weekday(d) { return "日一二三四五六"[new Date(d + "T00:00:00").getDay()]; }

function renderCalendar() {
  const box = document.getElementById("calendar");
  box.innerHTML = "";
  // 合併：甄試事件 + 報名/繳費截止
  const items = [];
  for (const ev of eventsOfSelection())
    items.push({ date: ev.date, dl: false, label: `${shortSchool(ev.program.school)}·${ev.program.dept.slice(0, 6)}`, title: fmtFull(ev.program) });
  for (const de of deadlineEvents())
    items.push({ date: de.date, dl: true, label: `${shortSchool(de.school)} ${de.kind}`, title: `${de.school} ${de.kind}` });
  if (!items.length) return;
  const conf = conflictDates();
  const months = {};
  for (const it of items) (months[it.date.slice(0, 7)] ||= []).push(it);
  for (const [ym, list] of Object.entries(months)) {
    const [y, m] = ym.split("-").map(Number);
    const first = new Date(y, m - 1, 1), days = new Date(y, m, 0).getDate();
    const byDay = {};
    for (const it of list) (byDay[+it.date.slice(8, 10)] ||= []).push(it);
    let cells = "";
    for (const h of ["日", "一", "二", "三", "四", "五", "六"]) cells += `<div class="cal-h">${h}</div>`;
    for (let i = 0; i < first.getDay(); i++) cells += `<div class="cal-cell empty"></div>`;
    for (let d = 1; d <= days; d++) {
      const dayItems = byDay[d] || [];
      const iso = `${ym}-${String(d).padStart(2, "0")}`;
      const isConf = conf.has(iso);
      const cls = dayItems.length ? (isConf ? "cal-cell has conflict" : "cal-cell has") : "cal-cell";
      let inner = `<span class="d">${d}</span>`;
      for (const it of dayItems)
        inner += `<span class="cal-ev${it.dl ? " dl" : ""}" title="${it.title}">${it.label}</span>`;
      cells += `<div class="${cls}">${inner}</div>`;
    }
    const wrap = document.createElement("div");
    wrap.className = "cal-month";
    wrap.innerHTML = `<h4>${y} 年 ${m} 月${list.some((e) => conf.has(e.date)) ? ' <span class="bad">（含撞期）</span>' : ""}</h4>
      <div class="cal-grid">${cells}</div>`;
    box.appendChild(wrap);
  }
}

function renderEventList() {
  const box = document.getElementById("evlist");
  box.innerHTML = "";
  // 合併甄試 + 報名/繳費截止，依日期排序
  const rows = [];
  for (const ev of eventsOfSelection())
    rows.push({ date: ev.date, start: ev.start || "", name: `${fmtFull(ev.program)}・${ev.type}`, dl: false, gcal: gcalLink(ev) });
  for (const de of deadlineEvents())
    rows.push({ date: de.date, start: "", name: `${shortSchool(de.school)} ${de.kind}`, dl: true, gcal: gcalLinkDeadline(de) });
  if (!rows.length) return;
  rows.sort((a, b) => (a.date + a.start).localeCompare(b.date + b.start));
  const conf = conflictDates();
  const h = document.createElement("h4");
  h.textContent = "完整日程（甄試＋報名/繳費截止，點「＋Google」單筆加入）";
  h.style.fontSize = "15px";
  box.appendChild(h);
  for (const r of rows) {
    const row = document.createElement("div");
    row.className = "ev-row" + (!r.dl && conf.has(r.date) ? " conflict" : "") + (r.dl ? " dl" : "");
    row.innerHTML = `
      <span class="ev-date">${r.date}（${weekday(r.date)}）${r.start ? " " + r.start : ""}</span>
      <span class="ev-name">${r.dl ? "🔔 " : ""}${r.name}</span>
      <a class="gcal" href="${r.gcal}" target="_blank" rel="noopener">＋Google</a>`;
    box.appendChild(row);
  }
}

/* ---------- 匯出：Google 日曆連結 + .ics ---------- */
// 隔天（YYYYMMDD）。用 Date.UTC 避免本地時區把日期算錯。
function nextDayCompact(iso) {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d + 1)).toISOString().slice(0, 10).replace(/-/g, "");
}
function gDates(ev) {
  const d = ev.date.replace(/-/g, "");
  if (ev.start) {
    const s = ev.start.replace(":", "") + "00";
    const endMin = (ev.end ? toMinutes(ev.end) : toMinutes(ev.start) + 120);
    const e = `${String(Math.floor(endMin / 60)).padStart(2, "0")}${String(endMin % 60).padStart(2, "0")}00`;
    return `${d}T${s}/${d}T${e}`;
  }
  return `${d}/${nextDayCompact(ev.date)}`; // 全天，迄日為隔天(exclusive)
}
function gcalLink(ev) {
  const p = new URLSearchParams({
    action: "TEMPLATE",
    text: `${fmtFull(ev.program)} ${ev.type}`,
    dates: gDates(ev),
    details: `研究所推甄甄試\n簡章：${ev.program.url}`,
    ctz: "Asia/Taipei",
  });
  return "https://calendar.google.com/calendar/render?" + p.toString();
}
function gcalLinkDeadline(de) {
  const p = new URLSearchParams({
    action: "TEMPLATE",
    text: `${shortSchool(de.school)} ${de.kind}`,
    dates: `${de.date.replace(/-/g, "")}/${nextDayCompact(de.date)}`,
    details: `研究所推甄 ${de.kind}\n${de.url || ""}`,
    ctz: "Asia/Taipei",
  });
  return "https://calendar.google.com/calendar/render?" + p.toString();
}
function buildICS() {
  const evs = eventsOfSelection();
  const pad = (n) => String(n).padStart(2, "0");
  const now = new Date();
  const stamp = `${now.getUTCFullYear()}${pad(now.getUTCMonth() + 1)}${pad(now.getUTCDate())}T${pad(now.getUTCHours())}${pad(now.getUTCMinutes())}${pad(now.getUTCSeconds())}Z`;
  let s = ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//grad-scheduler//TW//ZH", "CALSCALE:GREGORIAN"];
  evs.forEach((ev, i) => {
    const d = ev.date.replace(/-/g, "");
    s.push("BEGIN:VEVENT", `UID:${ev.program.id}-${i}@grad-scheduler`, `DTSTAMP:${stamp}`);
    if (ev.start) {
      const st = ev.start.replace(":", "") + "00";
      const endMin = ev.end ? toMinutes(ev.end) : toMinutes(ev.start) + 120;
      const et = `${pad(Math.floor(endMin / 60))}${pad(endMin % 60)}00`;
      s.push(`DTSTART:${d}T${st}`, `DTEND:${d}T${et}`);
    } else {
      s.push(`DTSTART;VALUE=DATE:${d}`, `DTEND;VALUE=DATE:${nextDayCompact(ev.date)}`);
    }
    s.push(`SUMMARY:${fmtFull(ev.program)} ${ev.type}`, `DESCRIPTION:研究所推甄甄試 簡章：${ev.program.url}`, "END:VEVENT");
  });
  // 報名/繳費截止（全天提醒）
  deadlineEvents().forEach((de, i) => {
    const d = de.date.replace(/-/g, "");
    s.push("BEGIN:VEVENT", `UID:dl-${de.school}-${de.kind}-${i}@grad-scheduler`, `DTSTAMP:${stamp}`,
      `DTSTART;VALUE=DATE:${d}`, `DTEND;VALUE=DATE:${nextDayCompact(de.date)}`,
      `SUMMARY:🔔 ${shortSchool(de.school)} ${de.kind}`, `DESCRIPTION:研究所推甄 ${de.kind} ${de.url || ""}`, "END:VEVENT");
  });
  s.push("END:VCALENDAR");
  return s.join("\r\n");
}
function downloadICS() {
  if (!eventsOfSelection().length) { alert("尚未選任何有日期的系所。"); return; }
  const blob = new Blob([buildICS()], { type: "text/calendar;charset=utf-8" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "研究所推甄甄試日程.ics";
  a.click();
  URL.revokeObjectURL(a.href);
}

/* ---------- 啟動 ---------- */
document.addEventListener("DOMContentLoaded", () => {
  renderSchools();
  updateCart();
  showView("schools");

  document.getElementById("search").addEventListener("input", (e) => filterPicker(e.target.value));
  document.getElementById("global-search").addEventListener("input", (e) => renderGlobalSearch(e.target.value));
  document.getElementById("back-schools").addEventListener("click", () => showView("schools"));
  document.getElementById("back-dept").addEventListener("click", () =>
    currentSchool ? showView("dept") : showView("schools"));
  document.getElementById("dept-go").addEventListener("click", renderResult);
  document.getElementById("cart-go").addEventListener("click", renderResult);
  document.getElementById("cart-clear").addEventListener("click", () => {
    if (!selected.size || !confirm("確定清空所有已選系所？")) return;
    selected.clear(); saveSelected(); updateCart();
    document.querySelectorAll('input[type="checkbox"]:checked').forEach((c) => (c.checked = false));
  });
  document.querySelectorAll(".step").forEach((el) =>
    el.addEventListener("click", () => {
      const s = el.dataset.step;
      if (s === "schools") showView("schools");
      else if (s === "dept" && currentSchool) showView("dept");
      else if (s === "result") renderResult();
    }));
  document.getElementById("dl-ics").addEventListener("click", downloadICS);
  document.getElementById("how-import").addEventListener("click", () =>
    alert("匯入 Google 日曆步驟：\n\n1. 點「下載 .ics」取得檔案\n2. 打開 Google 日曆（電腦版）\n3. 右上齒輪 → 設定 → 匯入與匯出\n4. 選擇剛下載的 .ics 檔 → 匯入\n\n或：每場點「＋Google」可單筆加入。"));
});
