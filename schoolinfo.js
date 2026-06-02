/* ============================================================
 *  各校共用招生時程（報名期間 / 繳費截止）— 手動維護
 * ============================================================
 *  這些是「全校共用」資訊，不像系所甄試日期那樣逐系所不同，
 *  所以獨立成一檔。資料來自各校「重要日程表」PDF（115 學年度）。
 *
 *  欄位：
 *    regStart / regEnd   報名（網路登錄）起訖日 YYYY-MM-DD
 *    payDeadline         繳費截止日（最重要，學生最常漏）
 *    payNote             繳費截止細節（不同管道時間不同）
 *    scheduleUrl         該校重要日程表/簡章連結
 *  ⚠️ 115 學年度資料，正式上線請更新為 116。
 * ============================================================ */

const SCHOOL_INFO = {
  "成功大學": {
    regStart: "2025-09-24", regEnd: "2025-10-02",
    payDeadline: "2025-10-02", payNote: "ATM／信用卡 16:00、臨櫃 15:30 止",
    scheduleUrl: "https://adms-acad.ncku.edu.tw/var/file/44/1044/img/4384/436110794.pdf",
  },
  "陽明交通大學": {
    regStart: "2025-10-01", regEnd: "2025-10-07",
    payDeadline: "2025-10-07", payNote: "報名系統 17:00 止",
    scheduleUrl: "https://exam.nycu.edu.tw/ma-md.php",
  },
  "政治大學": {
    regStart: "2025-09-30", regEnd: "2025-10-14",
    payDeadline: "2025-10-14", payNote: "取得繳費帳號至 12:00、登錄資料至 15:00",
    scheduleUrl: "https://www.nccu.edu.tw/p/403-1000-123.php?Lang=zh-tw",
  },
  "中興大學": {
    regStart: "2025-10-01", regEnd: "2025-10-13",
    payDeadline: "2025-10-13", payNote: "ATM 23:59、第一銀行臨櫃 15:30 止",
    scheduleUrl: "https://recruit.nchu.edu.tw/grade-exam/sele/115/115sele_Schedule.pdf",
  },
  "中山大學": {
    regStart: "2025-10-01", regEnd: "2025-10-14",
    payDeadline: "2025-10-14", payNote: "取號至 10/14 17:00、補登錄至 10/15 17:00",
    scheduleUrl: "https://exam-oaa.nsysu.edu.tw/p/412-1065-2038.php?Lang=zh-tw",
  },
  "臺灣大學": {
    regStart: "2025-10-01", regEnd: "2025-10-08",
    payDeadline: "2025-10-08", payNote: "詳見招生重要日程表",
    scheduleUrl: "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
  },
  "中央大學": {
    regStart: "2025-09-30", regEnd: "2025-10-07",
    payDeadline: "2025-10-07", payNote: "網路登錄至 15:30",
    scheduleUrl: "https://admission.ncu.edu.tw/zh-TW/content/82/13",
  },
  "中正大學": {
    regStart: "2025-10-02", regEnd: "2025-10-13",
    payDeadline: "2025-10-13", payNote: "網路報名至 17:00",
    scheduleUrl: "https://exams.ccu.edu.tw/p/403-1032-2830.php?Lang=zh-tw",
  },
  "清華大學": {
    regStart: "2025-10-08", regEnd: "2025-10-14",
    payDeadline: "2025-10-14", payNote: "一階段收費，複試不另收費",
    scheduleUrl: "https://adms.site.nthu.edu.tw/p/412-1207-17260.php?Lang=zh-tw",
  },
};
