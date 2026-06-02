/* 研究所推甄 甄試時間衝突檢查 — data（115學年度真實資料・9校）
 *  解析器在 scraper/，來源見 SOURCES.md。正式上線更新116。 */

const PROGRAMS =
[
  {
    "id": "ncku-0",
    "school": "成功大學",
    "dept": "中國文學系中國文學碩士班",
    "group": "",
    "url": "https://adms-acad.ncku.edu.tw/p/406-1044-227147,r3265.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-29",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ncku-1",
    "school": "成功大學",
    "dept": "環境工程學系",
    "group": "",
    "url": "https://adms-acad.ncku.edu.tw/p/406-1044-227147,r3265.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-24",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ncku-2",
    "school": "成功大學",
    "dept": "外國語文學系",
    "group": "",
    "url": "https://adms-acad.ncku.edu.tw/p/406-1044-227147,r3265.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-17",
        "start": "13:30",
        "end": "",
        "type": "筆試",
        "note": "",
        "tentative": false
      },
      {
        "date": "2025-10-31",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ncku-3",
    "school": "成功大學",
    "dept": "測量及空間資訊學系",
    "group": "",
    "url": "https://adms-acad.ncku.edu.tw/p/406-1044-227147,r3265.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-24",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ncku-4",
    "school": "成功大學",
    "dept": "歷史學系",
    "group": "",
    "url": "https://adms-acad.ncku.edu.tw/p/406-1044-227147,r3265.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-29",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ncku-5",
    "school": "成功大學",
    "dept": "生物醫學工程學系 (含醫療器材創新國際碩士班)",
    "group": "",
    "url": "https://adms-acad.ncku.edu.tw/p/406-1044-227147,r3265.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-31",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ncku-6",
    "school": "成功大學",
    "dept": "藝術研究所",
    "group": "",
    "url": "https://adms-acad.ncku.edu.tw/p/406-1044-227147,r3265.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-24",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ncku-7",
    "school": "成功大學",
    "dept": "海洋科技與事務研究所",
    "group": "",
    "url": "https://adms-acad.ncku.edu.tw/p/406-1044-227147,r3265.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-25",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ncku-8",
    "school": "成功大學",
    "dept": "台灣文學系",
    "group": "",
    "url": "https://adms-acad.ncku.edu.tw/p/406-1044-227147,r3265.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-31",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ncku-9",
    "school": "成功大學",
    "dept": "自然災害減災及管理國際碩士學位學程",
    "group": "",
    "url": "https://adms-acad.ncku.edu.tw/p/406-1044-227147,r3265.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-25",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ncku-10",
    "school": "成功大學",
    "dept": "考古學研究所",
    "group": "",
    "url": "https://adms-acad.ncku.edu.tw/p/406-1044-227147,r3265.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-29",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ncku-11",
    "school": "成功大學",
    "dept": "能源工程國際碩士學位學程",
    "group": "",
    "url": "https://adms-acad.ncku.edu.tw/p/406-1044-227147,r3265.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-01",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ncku-12",
    "school": "成功大學",
    "dept": "戲劇碩士學位學程",
    "group": "",
    "url": "https://adms-acad.ncku.edu.tw/p/406-1044-227147,r3265.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-24",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ncku-13",
    "school": "成功大學",
    "dept": "太空系統工程研究所",
    "group": "",
    "url": "https://adms-acad.ncku.edu.tw/p/406-1044-227147,r3265.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-01",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ncku-14",
    "school": "成功大學",
    "dept": "數學系應用數學碩士班",
    "group": "",
    "url": "https://adms-acad.ncku.edu.tw/p/406-1044-227147,r3265.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-16",
        "start": "08:30",
        "end": "",
        "type": "筆試",
        "note": "",
        "tentative": false
      },
      {
        "date": "2025-10-30",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ncku-15",
    "school": "成功大學",
    "dept": "電機工程學系",
    "group": "",
    "url": "https://adms-acad.ncku.edu.tw/p/406-1044-227147,r3265.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-01",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ncku-16",
    "school": "成功大學",
    "dept": "物理學系",
    "group": "",
    "url": "https://adms-acad.ncku.edu.tw/p/406-1044-227147,r3265.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-27",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ncku-17",
    "school": "成功大學",
    "dept": "通訊工程研究所",
    "group": "",
    "url": "https://adms-acad.ncku.edu.tw/p/406-1044-227147,r3265.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-01",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ncku-18",
    "school": "成功大學",
    "dept": "光電科學與工程學系",
    "group": "",
    "url": "https://adms-acad.ncku.edu.tw/p/406-1044-227147,r3265.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-31",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ncku-19",
    "school": "成功大學",
    "dept": "資訊工程學系",
    "group": "",
    "url": "https://adms-acad.ncku.edu.tw/p/406-1044-227147,r3265.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-31",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ncku-20",
    "school": "成功大學",
    "dept": "化學系",
    "group": "",
    "url": "https://adms-acad.ncku.edu.tw/p/406-1044-227147,r3265.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-31",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ncku-21",
    "school": "成功大學",
    "dept": "醫學資訊研究所",
    "group": "",
    "url": "https://adms-acad.ncku.edu.tw/p/406-1044-227147,r3265.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-31",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ncku-22",
    "school": "成功大學",
    "dept": "地球科學系",
    "group": "",
    "url": "https://adms-acad.ncku.edu.tw/p/406-1044-227147,r3265.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-01",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ncku-23",
    "school": "成功大學",
    "dept": "製造資訊與系統研究所",
    "group": "",
    "url": "https://adms-acad.ncku.edu.tw/p/406-1044-227147,r3265.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-31",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ncku-24",
    "school": "成功大學",
    "dept": "生命科學系",
    "group": "",
    "url": "https://adms-acad.ncku.edu.tw/p/406-1044-227147,r3265.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-31",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ncku-25",
    "school": "成功大學",
    "dept": "人工智慧科技碩士學位學程",
    "group": "",
    "url": "https://adms-acad.ncku.edu.tw/p/406-1044-227147,r3265.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-31",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ncku-26",
    "school": "成功大學",
    "dept": "生物科技與產業科學系",
    "group": "",
    "url": "https://adms-acad.ncku.edu.tw/p/406-1044-227147,r3265.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-31",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ncku-27",
    "school": "成功大學",
    "dept": "智慧資訊安全碩士學位學程",
    "group": "",
    "url": "https://adms-acad.ncku.edu.tw/p/406-1044-227147,r3265.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-01",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ncku-28",
    "school": "成功大學",
    "dept": "熱帶植物與微生物科學研究所",
    "group": "",
    "url": "https://adms-acad.ncku.edu.tw/p/406-1044-227147,r3265.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-31",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ncku-29",
    "school": "成功大學",
    "dept": "建築學系",
    "group": "",
    "url": "https://adms-acad.ncku.edu.tw/p/406-1044-227147,r3265.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-02",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ncku-30",
    "school": "成功大學",
    "dept": "機械工程學系",
    "group": "",
    "url": "https://adms-acad.ncku.edu.tw/p/406-1044-227147,r3265.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-24",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ncku-31",
    "school": "成功大學",
    "dept": "都市計劃學系",
    "group": "",
    "url": "https://adms-acad.ncku.edu.tw/p/406-1044-227147,r3265.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-01",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ncku-32",
    "school": "成功大學",
    "dept": "化學工程學系",
    "group": "",
    "url": "https://adms-acad.ncku.edu.tw/p/406-1044-227147,r3265.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-24",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ncku-33",
    "school": "成功大學",
    "dept": "工業設計學系",
    "group": "",
    "url": "https://adms-acad.ncku.edu.tw/p/406-1044-227147,r3265.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-01",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ncku-34",
    "school": "成功大學",
    "dept": "資源工程學系",
    "group": "",
    "url": "https://adms-acad.ncku.edu.tw/p/406-1044-227147,r3265.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-01",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ncku-35",
    "school": "成功大學",
    "dept": "創意產業設計研究所",
    "group": "",
    "url": "https://adms-acad.ncku.edu.tw/p/406-1044-227147,r3265.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-01",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ncku-36",
    "school": "成功大學",
    "dept": "材料科學及工程學系碩士班",
    "group": "",
    "url": "https://adms-acad.ncku.edu.tw/p/406-1044-227147,r3265.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-26",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ncku-37",
    "school": "成功大學",
    "dept": "科技藝術碩士學位學程",
    "group": "",
    "url": "https://adms-acad.ncku.edu.tw/p/406-1044-227147,r3265.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-02",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ncku-38",
    "school": "成功大學",
    "dept": "土木工程學系",
    "group": "",
    "url": "https://adms-acad.ncku.edu.tw/p/406-1044-227147,r3265.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-27",
        "start": "09:00",
        "end": "",
        "type": "甲組",
        "note": "",
        "tentative": false
      },
      {
        "date": "2025-10-27",
        "start": "13:00",
        "end": "",
        "type": "乙組",
        "note": "",
        "tentative": false
      },
      {
        "date": "2025-10-31",
        "start": "09:00",
        "end": "",
        "type": "丙組",
        "note": "",
        "tentative": false
      },
      {
        "date": "2025-10-31",
        "start": "13:00",
        "end": "",
        "type": "丁組",
        "note": "",
        "tentative": false
      },
      {
        "date": "2025-10-29",
        "start": "09:00",
        "end": "",
        "type": "戊組",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ncku-39",
    "school": "成功大學",
    "dept": "高階管理碩士在職專班 (EMBA)",
    "group": "",
    "url": "https://adms-acad.ncku.edu.tw/p/406-1044-227147,r3265.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-25",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      },
      {
        "date": "2025-10-26",
        "start": "",
        "end": "",
        "type": "丙組",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ncku-40",
    "school": "成功大學",
    "dept": "水利及海洋工程學系",
    "group": "",
    "url": "https://adms-acad.ncku.edu.tw/p/406-1044-227147,r3265.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-24",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ncku-41",
    "school": "成功大學",
    "dept": "會計學系",
    "group": "",
    "url": "https://adms-acad.ncku.edu.tw/p/406-1044-227147,r3265.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-31",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ncku-42",
    "school": "成功大學",
    "dept": "工程科學系",
    "group": "",
    "url": "https://adms-acad.ncku.edu.tw/p/406-1044-227147,r3265.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-01",
        "start": "",
        "end": "",
        "type": "戊組",
        "note": "",
        "tentative": false
      },
      {
        "date": "2025-10-31",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ncku-43",
    "school": "成功大學",
    "dept": "財務金融研究所",
    "group": "",
    "url": "https://adms-acad.ncku.edu.tw/p/406-1044-227147,r3265.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-31",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ncku-44",
    "school": "成功大學",
    "dept": "系統及船舶機電工程學系",
    "group": "",
    "url": "https://adms-acad.ncku.edu.tw/p/406-1044-227147,r3265.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-27",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ncku-45",
    "school": "成功大學",
    "dept": "統計與資料科學學系",
    "group": "",
    "url": "https://adms-acad.ncku.edu.tw/p/406-1044-227147,r3265.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-31",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ncku-46",
    "school": "成功大學",
    "dept": "航空太空工程學系",
    "group": "",
    "url": "https://adms-acad.ncku.edu.tw/p/406-1044-227147,r3265.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-01",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ncku-47",
    "school": "成功大學",
    "dept": "工業與資訊管理學系",
    "group": "",
    "url": "https://adms-acad.ncku.edu.tw/p/406-1044-227147,r3265.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-30",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ncku-48",
    "school": "成功大學",
    "dept": "民航研究所",
    "group": "",
    "url": "https://adms-acad.ncku.edu.tw/p/406-1044-227147,r3265.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-01",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ncku-49",
    "school": "成功大學",
    "dept": "資訊管理研究所",
    "group": "",
    "url": "https://adms-acad.ncku.edu.tw/p/406-1044-227147,r3265.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-30",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ncku-50",
    "school": "成功大學",
    "dept": "企業管理學系",
    "group": "",
    "url": "https://adms-acad.ncku.edu.tw/p/406-1044-227147,r3265.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-31",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ncku-51",
    "school": "成功大學",
    "dept": "細胞生物與解剖學研究所",
    "group": "",
    "url": "https://adms-acad.ncku.edu.tw/p/406-1044-227147,r3265.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-29",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ncku-52",
    "school": "成功大學",
    "dept": "國際企業研究所",
    "group": "",
    "url": "https://adms-acad.ncku.edu.tw/p/406-1044-227147,r3265.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-31",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ncku-53",
    "school": "成功大學",
    "dept": "公共衛生學系",
    "group": "",
    "url": "https://adms-acad.ncku.edu.tw/p/406-1044-227147,r3265.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-31",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ncku-54",
    "school": "成功大學",
    "dept": "交通管理科學系",
    "group": "",
    "url": "https://adms-acad.ncku.edu.tw/p/406-1044-227147,r3265.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-27",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ncku-55",
    "school": "成功大學",
    "dept": "口腔醫學研究所",
    "group": "",
    "url": "https://adms-acad.ncku.edu.tw/p/406-1044-227147,r3265.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-31",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ncku-56",
    "school": "成功大學",
    "dept": "電信管理研究所",
    "group": "",
    "url": "https://adms-acad.ncku.edu.tw/p/406-1044-227147,r3265.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-27",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ncku-57",
    "school": "成功大學",
    "dept": "臨床醫學研究所",
    "group": "",
    "url": "https://adms-acad.ncku.edu.tw/p/406-1044-227147,r3265.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-30",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ncku-58",
    "school": "成功大學",
    "dept": "體育健康與休閒研究所",
    "group": "",
    "url": "https://adms-acad.ncku.edu.tw/p/406-1044-227147,r3265.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-27",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ncku-59",
    "school": "成功大學",
    "dept": "老年學研究所",
    "group": "",
    "url": "https://adms-acad.ncku.edu.tw/p/406-1044-227147,r3265.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-27",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ncku-60",
    "school": "成功大學",
    "dept": "數據科學研究所",
    "group": "",
    "url": "https://adms-acad.ncku.edu.tw/p/406-1044-227147,r3265.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-30",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ncku-61",
    "school": "成功大學",
    "dept": "食品安全衛生暨風險管理研究所",
    "group": "",
    "url": "https://adms-acad.ncku.edu.tw/p/406-1044-227147,r3265.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-31",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ncku-62",
    "school": "成功大學",
    "dept": "生物化學暨分子生物學研究所",
    "group": "",
    "url": "https://adms-acad.ncku.edu.tw/p/406-1044-227147,r3265.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-01",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ncku-63",
    "school": "成功大學",
    "dept": "政治學系政治經濟學碩士班",
    "group": "",
    "url": "https://adms-acad.ncku.edu.tw/p/406-1044-227147,r3265.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-31",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ncku-64",
    "school": "成功大學",
    "dept": "生理學研究所",
    "group": "",
    "url": "https://adms-acad.ncku.edu.tw/p/406-1044-227147,r3265.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-29",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ncku-65",
    "school": "成功大學",
    "dept": "教育研究所",
    "group": "",
    "url": "https://adms-acad.ncku.edu.tw/p/406-1044-227147,r3265.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-29",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ncku-66",
    "school": "成功大學",
    "dept": "藥理學研究所",
    "group": "",
    "url": "https://adms-acad.ncku.edu.tw/p/406-1044-227147,r3265.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-31",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ncku-67",
    "school": "成功大學",
    "dept": "經濟學系",
    "group": "",
    "url": "https://adms-acad.ncku.edu.tw/p/406-1044-227147,r3265.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-31",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ncku-68",
    "school": "成功大學",
    "dept": "微生物及免疫學研究所",
    "group": "",
    "url": "https://adms-acad.ncku.edu.tw/p/406-1044-227147,r3265.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-01",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ncku-69",
    "school": "成功大學",
    "dept": "心理學系",
    "group": "",
    "url": "https://adms-acad.ncku.edu.tw/p/406-1044-227147,r3265.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-31",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ncku-70",
    "school": "成功大學",
    "dept": "臨床藥學與藥物科技研究所",
    "group": "",
    "url": "https://adms-acad.ncku.edu.tw/p/406-1044-227147,r3265.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-28",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ncku-71",
    "school": "成功大學",
    "dept": "智慧科技系統碩士學位學程",
    "group": "",
    "url": "https://adms-acad.ncku.edu.tw/p/406-1044-227147,r3265.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-01",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ncku-72",
    "school": "成功大學",
    "dept": "環境醫學研究所",
    "group": "",
    "url": "https://adms-acad.ncku.edu.tw/p/406-1044-227147,r3265.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-31",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ncku-73",
    "school": "成功大學",
    "dept": "智慧運算碩士學位學程",
    "group": "",
    "url": "https://adms-acad.ncku.edu.tw/p/406-1044-227147,r3265.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-01",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ncku-74",
    "school": "成功大學",
    "dept": "行為醫學研究所",
    "group": "",
    "url": "https://adms-acad.ncku.edu.tw/p/406-1044-227147,r3265.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-01",
        "start": "",
        "end": "",
        "type": "甲組",
        "note": "",
        "tentative": false
      },
      {
        "date": "2025-10-30",
        "start": "",
        "end": "",
        "type": "乙組",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ncku-75",
    "school": "成功大學",
    "dept": "全校永續跨域國際碩士學位學程",
    "group": "",
    "url": "https://adms-acad.ncku.edu.tw/p/406-1044-227147,r3265.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-01",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ncku-76",
    "school": "成功大學",
    "dept": "分子醫學研究所",
    "group": "",
    "url": "https://adms-acad.ncku.edu.tw/p/406-1044-227147,r3265.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-28",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ncku-77",
    "school": "成功大學",
    "dept": "晶片設計碩士學位學程",
    "group": "",
    "url": "https://adms-acad.ncku.edu.tw/p/406-1044-227147,r3265.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-28",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ncku-78",
    "school": "成功大學",
    "dept": "護理學系",
    "group": "",
    "url": "https://adms-acad.ncku.edu.tw/p/406-1044-227147,r3265.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-31",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ncku-79",
    "school": "成功大學",
    "dept": "半導體封測碩士學位學程",
    "group": "",
    "url": "https://adms-acad.ncku.edu.tw/p/406-1044-227147,r3265.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-01",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ncku-80",
    "school": "成功大學",
    "dept": "醫學檢驗生物技術學系",
    "group": "",
    "url": "https://adms-acad.ncku.edu.tw/p/406-1044-227147,r3265.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-25",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ncku-81",
    "school": "成功大學",
    "dept": "關鍵材料碩士學位學程",
    "group": "",
    "url": "https://adms-acad.ncku.edu.tw/p/406-1044-227147,r3265.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-28",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ncku-82",
    "school": "成功大學",
    "dept": "物理治療學系",
    "group": "",
    "url": "https://adms-acad.ncku.edu.tw/p/406-1044-227147,r3265.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-01",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ncku-83",
    "school": "成功大學",
    "dept": "智慧與永續製造碩士學位學程",
    "group": "",
    "url": "https://adms-acad.ncku.edu.tw/p/406-1044-227147,r3265.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-01",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ncku-84",
    "school": "成功大學",
    "dept": "職能治療學系",
    "group": "",
    "url": "https://adms-acad.ncku.edu.tw/p/406-1044-227147,r3265.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-30",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ncku-85",
    "school": "成功大學",
    "dept": "半導體高階管理暨研發碩士在職專班",
    "group": "",
    "url": "https://adms-acad.ncku.edu.tw/p/406-1044-227147,r3265.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-25",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nycu-0",
    "school": "陽明交通大學",
    "dept": "生理學研究所",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-24",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nycu-1",
    "school": "陽明交通大學",
    "dept": "藥理學研究所(藥理學組",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-22",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nycu-2",
    "school": "陽明交通大學",
    "dept": "公共衛生研究所甲組（主修流行病學",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-21",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nycu-3",
    "school": "陽明交通大學",
    "dept": "解剖學及細胞生物學研究所",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-20",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nycu-4",
    "school": "陽明交通大學",
    "dept": "醫務管理研究所",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-20",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nycu-5",
    "school": "陽明交通大學",
    "dept": "傳統醫藥研究所",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-21",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nycu-6",
    "school": "陽明交通大學",
    "dept": "衛生福利研究所",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-22",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nycu-7",
    "school": "陽明交通大學",
    "dept": "環境與職業衛生研究所",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-20",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nycu-8",
    "school": "陽明交通大學",
    "dept": "生物醫學資訊研究所",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-21",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nycu-9",
    "school": "陽明交通大學",
    "dept": "臨床醫學研究所",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-21",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nycu-10",
    "school": "陽明交通大學",
    "dept": "急重症醫學研究所",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-23",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nycu-11",
    "school": "陽明交通大學",
    "dept": "腦科學研究所(臨床腦科學組",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-20",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "口試日期區間 2025-10-20～2025-10-26，確切日期另行公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "nycu-12",
    "school": "陽明交通大學",
    "dept": "腦科學研究所(神經工程暨腦資訊組",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-20",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "口試日期區間 2025-10-20～2025-10-26，確切日期另行公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "nycu-13",
    "school": "陽明交通大學",
    "dept": "腦科學研究所(基礎腦科學組",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-20",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "口試日期區間 2025-10-20～2025-10-26，確切日期另行公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "nycu-14",
    "school": "陽明交通大學",
    "dept": "口腔生物研究所",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-20",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nycu-15",
    "school": "陽明交通大學",
    "dept": "口腔組織工程暨生技材料研究所",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-22",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nycu-16",
    "school": "陽明交通大學",
    "dept": "生物藥學研究所（一般生組",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-23",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nycu-17",
    "school": "陽明交通大學",
    "dept": "食品安全及健康風險評估研究所(一般生",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-23",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nycu-18",
    "school": "陽明交通大學",
    "dept": "食品安全及健康風險評估研究所(在職生",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-23",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nycu-19",
    "school": "陽明交通大學",
    "dept": "藥學系碩士班甲組(藥物科技組",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-22",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nycu-20",
    "school": "陽明交通大學",
    "dept": "藥學系碩士班乙組(臨床藥學組",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-20",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "口試日期區間 2025-10-20～2025-10-26，確切日期另行公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "nycu-21",
    "school": "陽明交通大學",
    "dept": "藥學系碩士班丙組(社會與管理藥學組",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-22",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nycu-22",
    "school": "陽明交通大學",
    "dept": "臨床護理研究所(成人護理組",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-23",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nycu-23",
    "school": "陽明交通大學",
    "dept": "臨床護理研究所(婦兒護理組",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-23",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nycu-24",
    "school": "陽明交通大學",
    "dept": "臨床護理研究所(心理健康護理組",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-23",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nycu-25",
    "school": "陽明交通大學",
    "dept": "社區健康照護研究所",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-23",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nycu-26",
    "school": "陽明交通大學",
    "dept": "神經科學研究所乙組（認知神經科學組",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-23",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nycu-27",
    "school": "陽明交通大學",
    "dept": "神經科學研究所丙組（神經科技組",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-20",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nycu-28",
    "school": "陽明交通大學",
    "dept": "微生物及免疫學研究所",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-20",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "口試日期區間 2025-10-20～2025-10-26，確切日期另行公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "nycu-29",
    "school": "陽明交通大學",
    "dept": "生化暨分子生物研究所",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-22",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nycu-30",
    "school": "陽明交通大學",
    "dept": "生物醫學工程學系碩士班丁組（臨床工程組",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-21",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nycu-31",
    "school": "陽明交通大學",
    "dept": "醫學生物技術暨檢驗學系(一般生組",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-23",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nycu-32",
    "school": "陽明交通大學",
    "dept": "醫學生物技術暨檢驗學系(在職生組",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-23",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nycu-33",
    "school": "陽明交通大學",
    "dept": "生醫光電研究所甲組（理工組",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-23",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nycu-34",
    "school": "陽明交通大學",
    "dept": "生醫光電研究所乙組（生醫組",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-22",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nycu-35",
    "school": "陽明交通大學",
    "dept": "跨專業長期照顧與管理碩士學位學程",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-22",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nycu-36",
    "school": "陽明交通大學",
    "dept": "機器人碩士學位學程",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-05",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nycu-37",
    "school": "陽明交通大學",
    "dept": "人工智慧技術與應用碩士學位學程甲組",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "僅書面審查或日期未列，請見系所公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "nycu-38",
    "school": "陽明交通大學",
    "dept": "資訊安全研究所甲組",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "僅書面審查或日期未列，請見系所公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "nycu-39",
    "school": "陽明交通大學",
    "dept": "資訊安全研究所乙組、網路攻擊",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "僅書面審查或日期未列，請見系所公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "nycu-40",
    "school": "陽明交通大學",
    "dept": "科技與社會研究所",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-21",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nycu-41",
    "school": "陽明交通大學",
    "dept": "心智哲學研究所",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-20",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nycu-42",
    "school": "陽明交通大學",
    "dept": "視覺文化研究所",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-23",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nycu-43",
    "school": "陽明交通大學",
    "dept": "人文社會學系族群與文化碩士班",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-07",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nycu-44",
    "school": "陽明交通大學",
    "dept": "傳播與科技學系(一般生",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-07",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nycu-45",
    "school": "陽明交通大學",
    "dept": "傳播與科技學系(在職生",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-07",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nycu-46",
    "school": "陽明交通大學",
    "dept": "傳播研究所(一般生",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-07",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nycu-47",
    "school": "陽明交通大學",
    "dept": "傳播研究所(在職生",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-07",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nycu-48",
    "school": "陽明交通大學",
    "dept": "應用藝術研究所甲組",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-07",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nycu-49",
    "school": "陽明交通大學",
    "dept": "應用藝術研究所乙組域",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-07",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nycu-50",
    "school": "陽明交通大學",
    "dept": "社會與文化研究所",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-02",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "（日期取自考試方式表）",
        "tentative": false
      }
    ]
  },
  {
    "id": "nycu-51",
    "school": "陽明交通大學",
    "dept": "教育研究所甲組",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-06",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nycu-52",
    "school": "陽明交通大學",
    "dept": "教育研究所乙組",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-07",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nycu-53",
    "school": "陽明交通大學",
    "dept": "教育研究所丙組育、數學教",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-06",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nycu-54",
    "school": "陽明交通大學",
    "dept": "教育研究所丁組",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-07",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nycu-55",
    "school": "陽明交通大學",
    "dept": "建築研究所甲組究",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-08",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nycu-56",
    "school": "陽明交通大學",
    "dept": "建築研究所乙組建築",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-08",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nycu-57",
    "school": "陽明交通大學",
    "dept": "英語教學研究所",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-28",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nycu-58",
    "school": "陽明交通大學",
    "dept": "電機工程學系甲組系統晶片設",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "僅書面審查或日期未列，請見系所公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "nycu-59",
    "school": "陽明交通大學",
    "dept": "電機工程學系乙組",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "僅書面審查或日期未列，請見系所公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "nycu-60",
    "school": "陽明交通大學",
    "dept": "光電工程學系",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "僅書面審查或日期未列，請見系所公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "nycu-61",
    "school": "陽明交通大學",
    "dept": "電控工程研究所A組",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "僅書面審查或日期未列，請見系所公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "nycu-62",
    "school": "陽明交通大學",
    "dept": "電控工程研究所B組",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "僅書面審查或日期未列，請見系所公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "nycu-63",
    "school": "陽明交通大學",
    "dept": "電控工程研究所C組感測系統、",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "僅書面審查或日期未列，請見系所公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "nycu-64",
    "school": "陽明交通大學",
    "dept": "電信工程研究所甲組",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "僅書面審查或日期未列，請見系所公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "nycu-65",
    "school": "陽明交通大學",
    "dept": "電信工程研究所乙組傳能、半導",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "僅書面審查或日期未列，請見系所公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "nycu-66",
    "school": "陽明交通大學",
    "dept": "智慧醫電工程研究所甲組程",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-03",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "（日期取自考試方式表）",
        "tentative": false
      }
    ]
  },
  {
    "id": "nycu-67",
    "school": "陽明交通大學",
    "dept": "智慧醫電工程研究所乙組技",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-03",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "（日期取自考試方式表）",
        "tentative": false
      }
    ]
  },
  {
    "id": "nycu-68",
    "school": "陽明交通大學",
    "dept": "量子科學與工程碩士學位學程",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "僅書面審查或日期未列，請見系所公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "nycu-69",
    "school": "陽明交通大學",
    "dept": "腦科技跨領域工程碩士學位學程",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-10",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "（日期取自考試方式表）",
        "tentative": false
      }
    ]
  },
  {
    "id": "nycu-70",
    "school": "陽明交通大學",
    "dept": "資訊科學與工程研究所丙組",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-28",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nycu-71",
    "school": "陽明交通大學",
    "dept": "資訊科學與工程研究所丁組管理實務",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "僅書面審查或日期未列，請見系所公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "nycu-72",
    "school": "陽明交通大學",
    "dept": "資訊科學與工程研究所戊組",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-28",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nycu-73",
    "school": "陽明交通大學",
    "dept": "數據科學與工程研究所",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "僅書面審查或日期未列，請見系所公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "nycu-74",
    "school": "陽明交通大學",
    "dept": "生物科技學系(理化工程組",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-08",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nycu-75",
    "school": "陽明交通大學",
    "dept": "生物科技學系(生物醫農組",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-08",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nycu-76",
    "school": "陽明交通大學",
    "dept": "生物科技學系(國衛院合作組",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-08",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nycu-77",
    "school": "陽明交通大學",
    "dept": "分子醫學與生物工程研究所",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-08",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nycu-78",
    "school": "陽明交通大學",
    "dept": "生物資訊及系統生物研究所",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-08",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nycu-79",
    "school": "陽明交通大學",
    "dept": "土木工程學系甲組(主修結構及工程材料",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "僅書面審查或日期未列，請見系所公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "nycu-80",
    "school": "陽明交通大學",
    "dept": "土木工程學系乙組(主修營建管理",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-22",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nycu-81",
    "school": "陽明交通大學",
    "dept": "土木工程學系丙組(主修水利及海洋",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-22",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nycu-82",
    "school": "陽明交通大學",
    "dept": "土木工程學系丁組(主修大地",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-23",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nycu-83",
    "school": "陽明交通大學",
    "dept": "土木工程學系戊組(主修測量及空間資訊",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-23",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nycu-84",
    "school": "陽明交通大學",
    "dept": "土木工程學系己組(主修資訊科技",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-23",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nycu-85",
    "school": "陽明交通大學",
    "dept": "機械工程學系甲組造",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-06",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nycu-86",
    "school": "陽明交通大學",
    "dept": "機械工程學系乙組熱流",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-06",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nycu-87",
    "school": "陽明交通大學",
    "dept": "機械工程學系丙組",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-06",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nycu-88",
    "school": "陽明交通大學",
    "dept": "機械工程學系丁組",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-06",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nycu-89",
    "school": "陽明交通大學",
    "dept": "機械工程學系戊組工程",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-07",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nycu-90",
    "school": "陽明交通大學",
    "dept": "材料科學與工程學系甲組",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-05",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nycu-91",
    "school": "陽明交通大學",
    "dept": "材料科學與工程學系乙組",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-05",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nycu-92",
    "school": "陽明交通大學",
    "dept": "環境工程研究所",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-08",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "（日期取自考試方式表）",
        "tentative": false
      }
    ]
  },
  {
    "id": "nycu-93",
    "school": "陽明交通大學",
    "dept": "太空系統工程研究所",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-07",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nycu-94",
    "school": "陽明交通大學",
    "dept": "電子物理學系",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "僅書面審查或日期未列，請見系所公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "nycu-95",
    "school": "陽明交通大學",
    "dept": "物理研究所",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "僅書面審查或日期未列，請見系所公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "nycu-96",
    "school": "陽明交通大學",
    "dept": "應用化學系",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-07",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nycu-97",
    "school": "陽明交通大學",
    "dept": "應用化學系分子科學碩士班",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-06",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nycu-98",
    "school": "陽明交通大學",
    "dept": "應用數學系甲組動態系統、",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "僅書面審查或日期未列，請見系所公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "nycu-99",
    "school": "陽明交通大學",
    "dept": "應用數學系乙組學及最優化",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "僅書面審查或日期未列，請見系所公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "nycu-100",
    "school": "陽明交通大學",
    "dept": "統計學研究所",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-07",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nycu-101",
    "school": "陽明交通大學",
    "dept": "應用數學系數學建模與科學計算碩士班",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "僅書面審查或日期未列，請見系所公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "nycu-102",
    "school": "陽明交通大學",
    "dept": "工業工程與管理學系",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-27",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nycu-103",
    "school": "陽明交通大學",
    "dept": "管理科學系甲組",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-07",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nycu-104",
    "school": "陽明交通大學",
    "dept": "管理科學系乙組",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-07",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nycu-105",
    "school": "陽明交通大學",
    "dept": "經營管理研究所",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-07",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nycu-106",
    "school": "陽明交通大學",
    "dept": "資訊管理研究所",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-06",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nycu-107",
    "school": "陽明交通大學",
    "dept": "科技管理研究所",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-01",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nycu-108",
    "school": "陽明交通大學",
    "dept": "管理學院企業管理碩士學位學程",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-08",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nycu-109",
    "school": "陽明交通大學",
    "dept": "科技法律研究所甲組",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-09",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "（日期取自考試方式表）",
        "tentative": false
      }
    ]
  },
  {
    "id": "nycu-110",
    "school": "陽明交通大學",
    "dept": "科技法律研究所乙組",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-08",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "（日期取自考試方式表）",
        "tentative": false
      }
    ]
  },
  {
    "id": "nycu-111",
    "school": "陽明交通大學",
    "dept": "國際半導體產業學院碩士班",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "僅書面審查或日期未列，請見系所公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "nycu-112",
    "school": "陽明交通大學",
    "dept": "前瞻半導體研究所甲組製程",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "僅書面審查或日期未列，請見系所公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "nycu-113",
    "school": "陽明交通大學",
    "dept": "前瞻半導體研究所乙組自動化",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "僅書面審查或日期未列，請見系所公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "nycu-114",
    "school": "陽明交通大學",
    "dept": "電機學院聯招電子所固態電子組",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "僅書面審查或日期未列，請見系所公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "nycu-115",
    "school": "陽明交通大學",
    "dept": "資訊學院資訊聯招(網路工程研究所",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "僅書面審查或日期未列，請見系所公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "nycu-116",
    "school": "陽明交通大學",
    "dept": "管理學系交通運輸碩士班乙組)主修運輸規劃",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-08",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nycu-117",
    "school": "陽明交通大學",
    "dept": "產學創新研究學院智能系統研究所聯招(智",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "僅書面審查或日期未列，請見系所公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "nycu-118",
    "school": "陽明交通大學",
    "dept": "招(智慧系統與應用研究所",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "僅書面審查或日期未列，請見系所公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "nycu-119",
    "school": "陽明交通大學",
    "dept": "報考所組",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "僅書面審查或日期未列，請見系所公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "nycu-120",
    "school": "陽明交通大學",
    "dept": "光電系統研究所",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "學院聯招，複試日期請見系所公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "nycu-121",
    "school": "陽明交通大學",
    "dept": "多媒體工程研究所",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "學院聯招，複試日期請見系所公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "nycu-122",
    "school": "陽明交通大學",
    "dept": "智慧與綠能產學研究所",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "學院聯招，複試日期請見系所公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "nycu-123",
    "school": "陽明交通大學",
    "dept": "智慧計算與科技研究所",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "學院聯招，複試日期請見系所公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "nycu-124",
    "school": "陽明交通大學",
    "dept": "照明與能源光電研究所",
    "group": "",
    "url": "https://exam.nycu.edu.tw/ma-md.php",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "學院聯招，複試日期請見系所公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "nchu-0",
    "school": "中興大學",
    "dept": "中國文學系",
    "group": "",
    "url": "https://recruit.nchu.edu.tw/grade-exam/sele/index-sele.aspx?examc=A",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-13",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nchu-1",
    "school": "中興大學",
    "dept": "歷史學系",
    "group": "",
    "url": "https://recruit.nchu.edu.tw/grade-exam/sele/index-sele.aspx?examc=A",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-14",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nchu-2",
    "school": "中興大學",
    "dept": "圖書資訊學研究所",
    "group": "",
    "url": "https://recruit.nchu.edu.tw/grade-exam/sele/index-sele.aspx?examc=A",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-15",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nchu-3",
    "school": "中興大學",
    "dept": "財務金融學系",
    "group": "",
    "url": "https://recruit.nchu.edu.tw/grade-exam/sele/index-sele.aspx?examc=A",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-13",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nchu-4",
    "school": "中興大學",
    "dept": "會計學系",
    "group": "",
    "url": "https://recruit.nchu.edu.tw/grade-exam/sele/index-sele.aspx?examc=A",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-14",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nchu-5",
    "school": "中興大學",
    "dept": "資訊管理學系",
    "group": "",
    "url": "https://recruit.nchu.edu.tw/grade-exam/sele/index-sele.aspx?examc=A",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-14",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nchu-6",
    "school": "中興大學",
    "dept": "科技管理研究所電子商務碩士班",
    "group": "",
    "url": "https://recruit.nchu.edu.tw/grade-exam/sele/index-sele.aspx?examc=A",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-13",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nchu-7",
    "school": "中興大學",
    "dept": "運動與健康管理研究所",
    "group": "",
    "url": "https://recruit.nchu.edu.tw/grade-exam/sele/index-sele.aspx?examc=A",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-31",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nchu-8",
    "school": "中興大學",
    "dept": "國際政治研究所",
    "group": "",
    "url": "https://recruit.nchu.edu.tw/grade-exam/sele/index-sele.aspx?examc=A",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-30",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nchu-9",
    "school": "中興大學",
    "dept": "國家政策與公共事務研究所",
    "group": "",
    "url": "https://recruit.nchu.edu.tw/grade-exam/sele/index-sele.aspx?examc=A",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-17",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nchu-10",
    "school": "中興大學",
    "dept": "農藝學系甲組",
    "group": "",
    "url": "https://recruit.nchu.edu.tw/grade-exam/sele/index-sele.aspx?examc=A",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-14",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nchu-11",
    "school": "中興大學",
    "dept": "農藝學系丙組",
    "group": "",
    "url": "https://recruit.nchu.edu.tw/grade-exam/sele/index-sele.aspx?examc=A",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-14",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nchu-12",
    "school": "中興大學",
    "dept": "園藝學系乙組",
    "group": "",
    "url": "https://recruit.nchu.edu.tw/grade-exam/sele/index-sele.aspx?examc=A",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-13",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nchu-13",
    "school": "中興大學",
    "dept": "農業經濟與行銷碩士學位學程",
    "group": "",
    "url": "https://recruit.nchu.edu.tw/grade-exam/sele/index-sele.aspx?examc=A",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-15",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nchu-14",
    "school": "中興大學",
    "dept": "植物病理學系",
    "group": "",
    "url": "https://recruit.nchu.edu.tw/grade-exam/sele/index-sele.aspx?examc=A",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-07",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nchu-15",
    "school": "中興大學",
    "dept": "動物科學系",
    "group": "",
    "url": "https://recruit.nchu.edu.tw/grade-exam/sele/index-sele.aspx?examc=A",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-15",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nchu-16",
    "school": "中興大學",
    "dept": "土壤環境科學系乙組",
    "group": "",
    "url": "https://recruit.nchu.edu.tw/grade-exam/sele/index-sele.aspx?examc=A",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-14",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nchu-17",
    "school": "中興大學",
    "dept": "生物產業機電工程學系",
    "group": "",
    "url": "https://recruit.nchu.edu.tw/grade-exam/sele/index-sele.aspx?examc=A",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-14",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nchu-18",
    "school": "中興大學",
    "dept": "水土保持學系",
    "group": "",
    "url": "https://recruit.nchu.edu.tw/grade-exam/sele/index-sele.aspx?examc=A",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-14",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nchu-19",
    "school": "中興大學",
    "dept": "食品暨應用生物科技學系",
    "group": "",
    "url": "https://recruit.nchu.edu.tw/grade-exam/sele/index-sele.aspx?examc=A",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-14",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nchu-20",
    "school": "中興大學",
    "dept": "國際農學碩士學位學程",
    "group": "",
    "url": "https://recruit.nchu.edu.tw/grade-exam/sele/index-sele.aspx?examc=A",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-14",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nchu-21",
    "school": "中興大學",
    "dept": "食品安全研究所",
    "group": "",
    "url": "https://recruit.nchu.edu.tw/grade-exam/sele/index-sele.aspx?examc=A",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-13",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nchu-22",
    "school": "中興大學",
    "dept": "獸醫學系甲組",
    "group": "",
    "url": "https://recruit.nchu.edu.tw/grade-exam/sele/index-sele.aspx?examc=A",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-14",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nchu-23",
    "school": "中興大學",
    "dept": "微衛所暨獸病所聯招群",
    "group": "",
    "url": "https://recruit.nchu.edu.tw/grade-exam/sele/index-sele.aspx?examc=A",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-30",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nchu-24",
    "school": "中興大學",
    "dept": "生命科學系甲組",
    "group": "",
    "url": "https://recruit.nchu.edu.tw/grade-exam/sele/index-sele.aspx?examc=A",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-24",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nchu-25",
    "school": "中興大學",
    "dept": "分子生物學研究所",
    "group": "",
    "url": "https://recruit.nchu.edu.tw/grade-exam/sele/index-sele.aspx?examc=A",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-24",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nchu-26",
    "school": "中興大學",
    "dept": "生物化學研究所",
    "group": "",
    "url": "https://recruit.nchu.edu.tw/grade-exam/sele/index-sele.aspx?examc=A",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-31",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nchu-27",
    "school": "中興大學",
    "dept": "精準健康碩士學位學程",
    "group": "",
    "url": "https://recruit.nchu.edu.tw/grade-exam/sele/index-sele.aspx?examc=A",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-01",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nchu-28",
    "school": "中興大學",
    "dept": "生醫中醫藥暨臨床醫學聯招群",
    "group": "",
    "url": "https://recruit.nchu.edu.tw/grade-exam/sele/index-sele.aspx?examc=A",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-01",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nchu-29",
    "school": "中興大學",
    "dept": "臨床護理研究所",
    "group": "",
    "url": "https://recruit.nchu.edu.tw/grade-exam/sele/index-sele.aspx?examc=A",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-19",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nchu-30",
    "school": "中興大學",
    "dept": "化學系甲組",
    "group": "",
    "url": "https://recruit.nchu.edu.tw/grade-exam/sele/index-sele.aspx?examc=A",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-14",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nchu-31",
    "school": "中興大學",
    "dept": "應用數學系",
    "group": "",
    "url": "https://recruit.nchu.edu.tw/grade-exam/sele/index-sele.aspx?examc=A",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-13",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nchu-32",
    "school": "中興大學",
    "dept": "統計學研究所",
    "group": "",
    "url": "https://recruit.nchu.edu.tw/grade-exam/sele/index-sele.aspx?examc=A",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-13",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nchu-33",
    "school": "中興大學",
    "dept": "奈米科學研究所",
    "group": "",
    "url": "https://recruit.nchu.edu.tw/grade-exam/sele/index-sele.aspx?examc=A",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-10",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nchu-34",
    "school": "中興大學",
    "dept": "機械工程學系聯招群機械工程學系甲組",
    "group": "",
    "url": "https://recruit.nchu.edu.tw/grade-exam/sele/index-sele.aspx?examc=A",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-13",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nchu-35",
    "school": "中興大學",
    "dept": "土木工程學系甲組",
    "group": "",
    "url": "https://recruit.nchu.edu.tw/grade-exam/sele/index-sele.aspx?examc=A",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-13",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nchu-36",
    "school": "中興大學",
    "dept": "土木工程學系丙組",
    "group": "",
    "url": "https://recruit.nchu.edu.tw/grade-exam/sele/index-sele.aspx?examc=A",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-12",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nchu-37",
    "school": "中興大學",
    "dept": "環境工程學系",
    "group": "",
    "url": "https://recruit.nchu.edu.tw/grade-exam/sele/index-sele.aspx?examc=A",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-16",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nchu-38",
    "school": "中興大學",
    "dept": "材料科學與工程學系",
    "group": "",
    "url": "https://recruit.nchu.edu.tw/grade-exam/sele/index-sele.aspx?examc=A",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-12",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nchu-39",
    "school": "中興大學",
    "dept": "精密工程研究所",
    "group": "",
    "url": "https://recruit.nchu.edu.tw/grade-exam/sele/index-sele.aspx?examc=A",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-14",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nchu-40",
    "school": "中興大學",
    "dept": "資訊工程學系甲組",
    "group": "",
    "url": "https://recruit.nchu.edu.tw/grade-exam/sele/index-sele.aspx?examc=A",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-14",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nchu-41",
    "school": "中興大學",
    "dept": "電機工程學系甲組",
    "group": "",
    "url": "https://recruit.nchu.edu.tw/grade-exam/sele/index-sele.aspx?examc=A",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-13",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nchu-42",
    "school": "中興大學",
    "dept": "電機工程學系丙組",
    "group": "",
    "url": "https://recruit.nchu.edu.tw/grade-exam/sele/index-sele.aspx?examc=A",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-13",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nchu-43",
    "school": "中興大學",
    "dept": "光電工程研究所",
    "group": "",
    "url": "https://recruit.nchu.edu.tw/grade-exam/sele/index-sele.aspx?examc=A",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-13",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nchu-44",
    "school": "中興大學",
    "dept": "農學程聯招群",
    "group": "",
    "url": "https://recruit.nchu.edu.tw/grade-exam/sele/index-sele.aspx?examc=A",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-15",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nchu-45",
    "school": "中興大學",
    "dept": "生物與永續科技碩士學位學程",
    "group": "",
    "url": "https://recruit.nchu.edu.tw/grade-exam/sele/index-sele.aspx?examc=A",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-15",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "循環經濟研究學院農學程聯招群",
        "tentative": false
      }
    ]
  },
  {
    "id": "nchu-46",
    "school": "中興大學",
    "dept": "特用作物及代謝體碩士學位學程",
    "group": "",
    "url": "https://recruit.nchu.edu.tw/grade-exam/sele/index-sele.aspx?examc=A",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-15",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "循環經濟研究學院農學程聯招群",
        "tentative": false
      }
    ]
  },
  {
    "id": "nchu-47",
    "school": "中興大學",
    "dept": "植物保健碩士學位學程",
    "group": "",
    "url": "https://recruit.nchu.edu.tw/grade-exam/sele/index-sele.aspx?examc=A",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-15",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "循環經濟研究學院農學程聯招群",
        "tentative": false
      }
    ]
  },
  {
    "id": "nchu-48",
    "school": "中興大學",
    "dept": "國際精準農企業發展碩士學位學程",
    "group": "",
    "url": "https://recruit.nchu.edu.tw/grade-exam/sele/index-sele.aspx?examc=A",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-15",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "循環經濟研究學院農學程聯招群",
        "tentative": false
      }
    ]
  },
  {
    "id": "nccu-0",
    "school": "政治大學",
    "dept": "中國文學系",
    "group": "",
    "url": "https://www.nccu.edu.tw/p/403-1000-123.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-08",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nccu-1",
    "school": "政治大學",
    "dept": "歷史學系",
    "group": "",
    "url": "https://www.nccu.edu.tw/p/403-1000-123.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-10",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nccu-2",
    "school": "政治大學",
    "dept": "哲學系",
    "group": "",
    "url": "https://www.nccu.edu.tw/p/403-1000-123.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-12",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nccu-3",
    "school": "政治大學",
    "dept": "圖書資訊與檔案學研究所",
    "group": "圖書資訊學組",
    "url": "https://www.nccu.edu.tw/p/403-1000-123.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-10",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nccu-4",
    "school": "政治大學",
    "dept": "圖書資訊與檔案學研究所",
    "group": "檔案學組",
    "url": "https://www.nccu.edu.tw/p/403-1000-123.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-10",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nccu-5",
    "school": "政治大學",
    "dept": "宗教研究所",
    "group": "",
    "url": "https://www.nccu.edu.tw/p/403-1000-123.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-10",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nccu-6",
    "school": "政治大學",
    "dept": "台灣史研究所",
    "group": "",
    "url": "https://www.nccu.edu.tw/p/403-1000-123.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-07",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nccu-7",
    "school": "政治大學",
    "dept": "台灣文學研究所",
    "group": "",
    "url": "https://www.nccu.edu.tw/p/403-1000-123.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-08",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nccu-8",
    "school": "政治大學",
    "dept": "華語文教學碩士學位學程",
    "group": "",
    "url": "https://www.nccu.edu.tw/p/403-1000-123.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-08",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nccu-9",
    "school": "政治大學",
    "dept": "教育學系",
    "group": "",
    "url": "https://www.nccu.edu.tw/p/403-1000-123.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-07",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nccu-10",
    "school": "政治大學",
    "dept": "幼兒教育研究所",
    "group": "",
    "url": "https://www.nccu.edu.tw/p/403-1000-123.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-14",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nccu-11",
    "school": "政治大學",
    "dept": "教育行政與政策研究所",
    "group": "",
    "url": "https://www.nccu.edu.tw/p/403-1000-123.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-07",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nccu-12",
    "school": "政治大學",
    "dept": "輔導與諮商碩士學位學程",
    "group": "",
    "url": "https://www.nccu.edu.tw/p/403-1000-123.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-14",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nccu-13",
    "school": "政治大學",
    "dept": "政治學系",
    "group": "",
    "url": "https://www.nccu.edu.tw/p/403-1000-123.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-10",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nccu-14",
    "school": "政治大學",
    "dept": "社會學系",
    "group": "",
    "url": "https://www.nccu.edu.tw/p/403-1000-123.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-17",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nccu-15",
    "school": "政治大學",
    "dept": "財政學系",
    "group": "",
    "url": "https://www.nccu.edu.tw/p/403-1000-123.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-17",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nccu-16",
    "school": "政治大學",
    "dept": "公共行政學系",
    "group": "",
    "url": "https://www.nccu.edu.tw/p/403-1000-123.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-14",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nccu-17",
    "school": "政治大學",
    "dept": "地政學系",
    "group": "",
    "url": "https://www.nccu.edu.tw/p/403-1000-123.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-08",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nccu-18",
    "school": "政治大學",
    "dept": "經濟學系",
    "group": "",
    "url": "https://www.nccu.edu.tw/p/403-1000-123.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-14",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nccu-19",
    "school": "政治大學",
    "dept": "民族學系",
    "group": "",
    "url": "https://www.nccu.edu.tw/p/403-1000-123.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-08",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nccu-20",
    "school": "政治大學",
    "dept": "國家發展研究所",
    "group": "",
    "url": "https://www.nccu.edu.tw/p/403-1000-123.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-15",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nccu-21",
    "school": "政治大學",
    "dept": "勞工研究所",
    "group": "",
    "url": "https://www.nccu.edu.tw/p/403-1000-123.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-15",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nccu-22",
    "school": "政治大學",
    "dept": "社會工作研究所",
    "group": "",
    "url": "https://www.nccu.edu.tw/p/403-1000-123.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-14",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nccu-23",
    "school": "政治大學",
    "dept": "社會工作研究所",
    "group": "甲組",
    "url": "https://www.nccu.edu.tw/p/403-1000-123.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-14",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nccu-24",
    "school": "政治大學",
    "dept": "社會工作研究所",
    "group": "乙組",
    "url": "https://www.nccu.edu.tw/p/403-1000-123.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-14",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nccu-25",
    "school": "政治大學",
    "dept": "外交學系",
    "group": "",
    "url": "https://www.nccu.edu.tw/p/403-1000-123.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-11",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nccu-26",
    "school": "政治大學",
    "dept": "東亞研究所",
    "group": "",
    "url": "https://www.nccu.edu.tw/p/403-1000-123.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-08",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nccu-27",
    "school": "政治大學",
    "dept": "俄羅斯研究所",
    "group": "",
    "url": "https://www.nccu.edu.tw/p/403-1000-123.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-08",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nccu-28",
    "school": "政治大學",
    "dept": "日本研究碩士學位學程",
    "group": "",
    "url": "https://www.nccu.edu.tw/p/403-1000-123.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-15",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nccu-29",
    "school": "政治大學",
    "dept": "國際經營與貿易學系",
    "group": "",
    "url": "https://www.nccu.edu.tw/p/403-1000-123.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-15",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nccu-30",
    "school": "政治大學",
    "dept": "金融學系",
    "group": "金融管理組",
    "url": "https://www.nccu.edu.tw/p/403-1000-123.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-09",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nccu-31",
    "school": "政治大學",
    "dept": "金融學系",
    "group": "財務工程與金融科技組",
    "url": "https://www.nccu.edu.tw/p/403-1000-123.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-09",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nccu-32",
    "school": "政治大學",
    "dept": "會計學系",
    "group": "會計甲組",
    "url": "https://www.nccu.edu.tw/p/403-1000-123.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-15",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nccu-33",
    "school": "政治大學",
    "dept": "會計學系",
    "group": "會計乙組",
    "url": "https://www.nccu.edu.tw/p/403-1000-123.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-15",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nccu-34",
    "school": "政治大學",
    "dept": "會計學系",
    "group": "稅務組",
    "url": "https://www.nccu.edu.tw/p/403-1000-123.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-15",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nccu-35",
    "school": "政治大學",
    "dept": "統計學系",
    "group": "",
    "url": "https://www.nccu.edu.tw/p/403-1000-123.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-17",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nccu-36",
    "school": "政治大學",
    "dept": "資訊管理學系",
    "group": "資管組",
    "url": "https://www.nccu.edu.tw/p/403-1000-123.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-17",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nccu-37",
    "school": "政治大學",
    "dept": "資訊管理學系",
    "group": "科技組",
    "url": "https://www.nccu.edu.tw/p/403-1000-123.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-17",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nccu-38",
    "school": "政治大學",
    "dept": "財務管理學系",
    "group": "",
    "url": "https://www.nccu.edu.tw/p/403-1000-123.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-15",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nccu-39",
    "school": "政治大學",
    "dept": "風險管理與保險學系",
    "group": "法律組",
    "url": "https://www.nccu.edu.tw/p/403-1000-123.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-10",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nccu-40",
    "school": "政治大學",
    "dept": "風險管理與保險學系",
    "group": "管理組",
    "url": "https://www.nccu.edu.tw/p/403-1000-123.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-10",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nccu-41",
    "school": "政治大學",
    "dept": "風險管理與保險學系",
    "group": "精算科學組",
    "url": "https://www.nccu.edu.tw/p/403-1000-123.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-10",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nccu-42",
    "school": "政治大學",
    "dept": "風險管理與保險學系",
    "group": "",
    "url": "https://www.nccu.edu.tw/p/403-1000-123.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-10",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nccu-43",
    "school": "政治大學",
    "dept": "科技管理與智慧財產研究所",
    "group": "科技管理組",
    "url": "https://www.nccu.edu.tw/p/403-1000-123.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-16",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nccu-44",
    "school": "政治大學",
    "dept": "科技管理與智慧財產研究所",
    "group": "智慧財產組",
    "url": "https://www.nccu.edu.tw/p/403-1000-123.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-16",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nccu-45",
    "school": "政治大學",
    "dept": "傳播學院傳播碩士學位學程",
    "group": "甲組",
    "url": "https://www.nccu.edu.tw/p/403-1000-123.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-14",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nccu-46",
    "school": "政治大學",
    "dept": "傳播學院傳播碩士學位學程",
    "group": "乙組",
    "url": "https://www.nccu.edu.tw/p/403-1000-123.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-14",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nccu-47",
    "school": "政治大學",
    "dept": "國際傳播英語碩士學位學程",
    "group": "",
    "url": "https://www.nccu.edu.tw/p/403-1000-123.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-07",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nccu-48",
    "school": "政治大學",
    "dept": "數位內容碩士學位學程",
    "group": "",
    "url": "https://www.nccu.edu.tw/p/403-1000-123.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-08",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nccu-49",
    "school": "政治大學",
    "dept": "英國語文學系",
    "group": "文學組",
    "url": "https://www.nccu.edu.tw/p/403-1000-123.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-14",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nccu-50",
    "school": "政治大學",
    "dept": "英國語文學系",
    "group": "英語教學組",
    "url": "https://www.nccu.edu.tw/p/403-1000-123.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-14",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nccu-51",
    "school": "政治大學",
    "dept": "斯拉夫語文學系",
    "group": "",
    "url": "https://www.nccu.edu.tw/p/403-1000-123.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-10",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nccu-52",
    "school": "政治大學",
    "dept": "語言學研究所",
    "group": "",
    "url": "https://www.nccu.edu.tw/p/403-1000-123.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-14",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nccu-53",
    "school": "政治大學",
    "dept": "日本語文學系",
    "group": "",
    "url": "https://www.nccu.edu.tw/p/403-1000-123.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-14",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nccu-54",
    "school": "政治大學",
    "dept": "韓國語文學系",
    "group": "",
    "url": "https://www.nccu.edu.tw/p/403-1000-123.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-14",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nccu-55",
    "school": "政治大學",
    "dept": "中東與中亞研究碩士學位學程",
    "group": "",
    "url": "https://www.nccu.edu.tw/p/403-1000-123.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-08",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nccu-56",
    "school": "政治大學",
    "dept": "法律學系",
    "group": "民法組",
    "url": "https://www.nccu.edu.tw/p/403-1000-123.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-15",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nccu-57",
    "school": "政治大學",
    "dept": "法律學系",
    "group": "財經法組",
    "url": "https://www.nccu.edu.tw/p/403-1000-123.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-15",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nccu-58",
    "school": "政治大學",
    "dept": "法律學系",
    "group": "公法組",
    "url": "https://www.nccu.edu.tw/p/403-1000-123.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-15",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nccu-59",
    "school": "政治大學",
    "dept": "法律學系",
    "group": "刑法組",
    "url": "https://www.nccu.edu.tw/p/403-1000-123.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-15",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nccu-60",
    "school": "政治大學",
    "dept": "法律學系",
    "group": "勞工法與社會法組",
    "url": "https://www.nccu.edu.tw/p/403-1000-123.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-15",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nccu-61",
    "school": "政治大學",
    "dept": "法律學系",
    "group": "基礎法學組",
    "url": "https://www.nccu.edu.tw/p/403-1000-123.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-15",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nccu-62",
    "school": "政治大學",
    "dept": "法律科際整合研究所",
    "group": "",
    "url": "https://www.nccu.edu.tw/p/403-1000-123.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-16",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nccu-63",
    "school": "政治大學",
    "dept": "應用數學系",
    "group": "",
    "url": "https://www.nccu.edu.tw/p/403-1000-123.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-10",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nccu-64",
    "school": "政治大學",
    "dept": "心理學系",
    "group": "實驗與發展組",
    "url": "https://www.nccu.edu.tw/p/403-1000-123.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-15",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nccu-65",
    "school": "政治大學",
    "dept": "心理學系",
    "group": "社會與人格組",
    "url": "https://www.nccu.edu.tw/p/403-1000-123.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-15",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nccu-66",
    "school": "政治大學",
    "dept": "心理學系",
    "group": "工業與組織組",
    "url": "https://www.nccu.edu.tw/p/403-1000-123.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-15",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nccu-67",
    "school": "政治大學",
    "dept": "心理學系",
    "group": "臨床組",
    "url": "https://www.nccu.edu.tw/p/403-1000-123.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-15",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nccu-68",
    "school": "政治大學",
    "dept": "神經科學研究所",
    "group": "",
    "url": "https://www.nccu.edu.tw/p/403-1000-123.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-07",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nccu-69",
    "school": "政治大學",
    "dept": "資訊科學系",
    "group": "資訊科學與工程組",
    "url": "https://www.nccu.edu.tw/p/403-1000-123.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-15",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nccu-70",
    "school": "政治大學",
    "dept": "資訊科學系",
    "group": "",
    "url": "https://www.nccu.edu.tw/p/403-1000-123.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-13",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nccu-71",
    "school": "政治大學",
    "dept": "資訊科學系",
    "group": "智慧計算組",
    "url": "https://www.nccu.edu.tw/p/403-1000-123.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-15",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nccu-72",
    "school": "政治大學",
    "dept": "資訊安全碩士學位學程",
    "group": "",
    "url": "https://www.nccu.edu.tw/p/403-1000-123.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-07",
        "start": "",
        "end": "",
        "type": "面試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nsysu-0",
    "school": "中山大學",
    "dept": "中國文學系碩士班",
    "group": "",
    "url": "https://exam-oaa.nsysu.edu.tw/p/412-1065-2038.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-31",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nsysu-1",
    "school": "中山大學",
    "dept": "外國語文學系碩士班",
    "group": "甲組",
    "url": "https://exam-oaa.nsysu.edu.tw/p/412-1065-2038.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-31",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nsysu-2",
    "school": "中山大學",
    "dept": "外國語文學系碩士班",
    "group": "乙組",
    "url": "https://exam-oaa.nsysu.edu.tw/p/412-1065-2038.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-31",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nsysu-3",
    "school": "中山大學",
    "dept": "哲學研究所碩士班",
    "group": "",
    "url": "https://exam-oaa.nsysu.edu.tw/p/412-1065-2038.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-01",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nsysu-4",
    "school": "中山大學",
    "dept": "劇場藝術學系碩士班",
    "group": "",
    "url": "https://exam-oaa.nsysu.edu.tw/p/412-1065-2038.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-03",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nsysu-5",
    "school": "中山大學",
    "dept": "音樂學系碩士班",
    "group": "",
    "url": "https://exam-oaa.nsysu.edu.tw/p/412-1065-2038.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-31",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nsysu-6",
    "school": "中山大學",
    "dept": "生物科學系碩士班",
    "group": "甲組",
    "url": "https://exam-oaa.nsysu.edu.tw/p/412-1065-2038.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-07",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nsysu-7",
    "school": "中山大學",
    "dept": "生物科學系碩士班",
    "group": "乙組",
    "url": "https://exam-oaa.nsysu.edu.tw/p/412-1065-2038.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-07",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nsysu-8",
    "school": "中山大學",
    "dept": "化學系碩士班",
    "group": "",
    "url": "https://exam-oaa.nsysu.edu.tw/p/412-1065-2038.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-09",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nsysu-9",
    "school": "中山大學",
    "dept": "物理學系碩士班",
    "group": "",
    "url": "https://exam-oaa.nsysu.edu.tw/p/412-1065-2038.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-07",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nsysu-10",
    "school": "中山大學",
    "dept": "應用數學系碩士班",
    "group": "甲組",
    "url": "https://exam-oaa.nsysu.edu.tw/p/412-1065-2038.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-12",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nsysu-11",
    "school": "中山大學",
    "dept": "應用數學系碩士班",
    "group": "乙組",
    "url": "https://exam-oaa.nsysu.edu.tw/p/412-1065-2038.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-07",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nsysu-12",
    "school": "中山大學",
    "dept": "應用數學系碩士班",
    "group": "丙組",
    "url": "https://exam-oaa.nsysu.edu.tw/p/412-1065-2038.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-07",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nsysu-13",
    "school": "中山大學",
    "dept": "應用數學系碩士班",
    "group": "丁組",
    "url": "https://exam-oaa.nsysu.edu.tw/p/412-1065-2038.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-13",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nsysu-14",
    "school": "中山大學",
    "dept": "電機工程學系碩士班",
    "group": "甲組",
    "url": "https://exam-oaa.nsysu.edu.tw/p/412-1065-2038.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-07",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nsysu-15",
    "school": "中山大學",
    "dept": "電機工程學系碩士班",
    "group": "乙組",
    "url": "https://exam-oaa.nsysu.edu.tw/p/412-1065-2038.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-10",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nsysu-16",
    "school": "中山大學",
    "dept": "電機工程學系碩士班",
    "group": "丙組",
    "url": "https://exam-oaa.nsysu.edu.tw/p/412-1065-2038.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-09",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nsysu-17",
    "school": "中山大學",
    "dept": "電機工程學系碩士班",
    "group": "丁組",
    "url": "https://exam-oaa.nsysu.edu.tw/p/412-1065-2038.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-12",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nsysu-18",
    "school": "中山大學",
    "dept": "電機工程學系碩士班",
    "group": "戊組",
    "url": "https://exam-oaa.nsysu.edu.tw/p/412-1065-2038.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-12",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nsysu-19",
    "school": "中山大學",
    "dept": "電機工程學系碩士班",
    "group": "己組",
    "url": "https://exam-oaa.nsysu.edu.tw/p/412-1065-2038.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-09",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nsysu-20",
    "school": "中山大學",
    "dept": "電機工程學系碩士班",
    "group": "",
    "url": "https://exam-oaa.nsysu.edu.tw/p/412-1065-2038.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-07",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nsysu-21",
    "school": "中山大學",
    "dept": "環境工程研究所碩士班",
    "group": "",
    "url": "https://exam-oaa.nsysu.edu.tw/p/412-1065-2038.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-07",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nsysu-22",
    "school": "中山大學",
    "dept": "資訊工程學系碩士班",
    "group": "甲組",
    "url": "https://exam-oaa.nsysu.edu.tw/p/412-1065-2038.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-07",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nsysu-23",
    "school": "中山大學",
    "dept": "資訊工程學系碩士班",
    "group": "乙組",
    "url": "https://exam-oaa.nsysu.edu.tw/p/412-1065-2038.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-07",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nsysu-24",
    "school": "中山大學",
    "dept": "光電工程學系碩士班",
    "group": "",
    "url": "https://exam-oaa.nsysu.edu.tw/p/412-1065-2038.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-11",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nsysu-25",
    "school": "中山大學",
    "dept": "通訊工程研究所碩士班",
    "group": "甲組",
    "url": "https://exam-oaa.nsysu.edu.tw/p/412-1065-2038.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-09",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nsysu-26",
    "school": "中山大學",
    "dept": "通訊工程研究所碩士班",
    "group": "乙組",
    "url": "https://exam-oaa.nsysu.edu.tw/p/412-1065-2038.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-12",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nsysu-27",
    "school": "中山大學",
    "dept": "機械與機電工程學系碩士班",
    "group": "甲組",
    "url": "https://exam-oaa.nsysu.edu.tw/p/412-1065-2038.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-09",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nsysu-28",
    "school": "中山大學",
    "dept": "機械與機電工程學系碩士班",
    "group": "乙組",
    "url": "https://exam-oaa.nsysu.edu.tw/p/412-1065-2038.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-09",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nsysu-29",
    "school": "中山大學",
    "dept": "機械與機電工程學系碩士班",
    "group": "丙組",
    "url": "https://exam-oaa.nsysu.edu.tw/p/412-1065-2038.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-09",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nsysu-30",
    "school": "中山大學",
    "dept": "機械與機電工程學系碩士班",
    "group": "丁組",
    "url": "https://exam-oaa.nsysu.edu.tw/p/412-1065-2038.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-09",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nsysu-31",
    "school": "中山大學",
    "dept": "機械與機電工程學系碩士班",
    "group": "戊組",
    "url": "https://exam-oaa.nsysu.edu.tw/p/412-1065-2038.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-09",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nsysu-32",
    "school": "中山大學",
    "dept": "材料與光電科學學系碩士班",
    "group": "",
    "url": "https://exam-oaa.nsysu.edu.tw/p/412-1065-2038.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-07",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nsysu-33",
    "school": "中山大學",
    "dept": "積體電路設計研究所碩士班",
    "group": "",
    "url": "https://exam-oaa.nsysu.edu.tw/p/412-1065-2038.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-09",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nsysu-34",
    "school": "中山大學",
    "dept": "資訊工程學系資訊安全碩士班",
    "group": "",
    "url": "https://exam-oaa.nsysu.edu.tw/p/412-1065-2038.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-07",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nsysu-35",
    "school": "中山大學",
    "dept": "材料與光電科學學系前瞻應用材料碩士班",
    "group": "甲組",
    "url": "https://exam-oaa.nsysu.edu.tw/p/412-1065-2038.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-07",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nsysu-36",
    "school": "中山大學",
    "dept": "材料與光電科學學系前瞻應用材料碩士班",
    "group": "乙組",
    "url": "https://exam-oaa.nsysu.edu.tw/p/412-1065-2038.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-07",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nsysu-37",
    "school": "中山大學",
    "dept": "企業管理學系企業管理碩士班甲班",
    "group": "",
    "url": "https://exam-oaa.nsysu.edu.tw/p/412-1065-2038.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-07",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nsysu-38",
    "school": "中山大學",
    "dept": "資訊管理學系碩士班",
    "group": "",
    "url": "https://exam-oaa.nsysu.edu.tw/p/412-1065-2038.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-07",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nsysu-39",
    "school": "中山大學",
    "dept": "財務管理學系碩士班",
    "group": "",
    "url": "https://exam-oaa.nsysu.edu.tw/p/412-1065-2038.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-07",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nsysu-40",
    "school": "中山大學",
    "dept": "公共事務管理研究所碩士班",
    "group": "甲組",
    "url": "https://exam-oaa.nsysu.edu.tw/p/412-1065-2038.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-10",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nsysu-41",
    "school": "中山大學",
    "dept": "公共事務管理研究所碩士班",
    "group": "乙組",
    "url": "https://exam-oaa.nsysu.edu.tw/p/412-1065-2038.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-10",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nsysu-42",
    "school": "中山大學",
    "dept": "人力資源管理研究所碩士班",
    "group": "",
    "url": "https://exam-oaa.nsysu.edu.tw/p/412-1065-2038.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-10",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nsysu-43",
    "school": "中山大學",
    "dept": "行銷傳播管理研究所碩士班",
    "group": "甲組",
    "url": "https://exam-oaa.nsysu.edu.tw/p/412-1065-2038.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-11",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nsysu-44",
    "school": "中山大學",
    "dept": "行銷傳播管理研究所碩士班",
    "group": "乙組",
    "url": "https://exam-oaa.nsysu.edu.tw/p/412-1065-2038.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-11",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nsysu-45",
    "school": "中山大學",
    "dept": "企業管理學系企業管理碩士班乙班",
    "group": "",
    "url": "https://exam-oaa.nsysu.edu.tw/p/412-1065-2038.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-07",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nsysu-46",
    "school": "中山大學",
    "dept": "企業管理學系醫務管理碩士班",
    "group": "",
    "url": "https://exam-oaa.nsysu.edu.tw/p/412-1065-2038.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-07",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nsysu-47",
    "school": "中山大學",
    "dept": "國際經營管理碩士學程",
    "group": "",
    "url": "https://exam-oaa.nsysu.edu.tw/p/412-1065-2038.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-08",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nsysu-48",
    "school": "中山大學",
    "dept": "人力資源管理全英語碩士學位學程",
    "group": "",
    "url": "https://exam-oaa.nsysu.edu.tw/p/412-1065-2038.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-08",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nsysu-49",
    "school": "中山大學",
    "dept": "海洋生物科技暨資源學系碩士班",
    "group": "",
    "url": "https://exam-oaa.nsysu.edu.tw/p/412-1065-2038.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-01",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nsysu-50",
    "school": "中山大學",
    "dept": "海下科技研究所碩士班",
    "group": "",
    "url": "https://exam-oaa.nsysu.edu.tw/p/412-1065-2038.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-01",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nsysu-51",
    "school": "中山大學",
    "dept": "海洋環境及工程學系離岸風電海事工程碩士班",
    "group": "",
    "url": "https://exam-oaa.nsysu.edu.tw/p/412-1065-2038.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-31",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nsysu-52",
    "school": "中山大學",
    "dept": "海洋生態與保育研究所碩士班",
    "group": "",
    "url": "https://exam-oaa.nsysu.edu.tw/p/412-1065-2038.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-07",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nsysu-53",
    "school": "中山大學",
    "dept": "海洋事務研究所碩士班",
    "group": "",
    "url": "https://exam-oaa.nsysu.edu.tw/p/412-1065-2038.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-08",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nsysu-54",
    "school": "中山大學",
    "dept": "海洋科學系碩士班",
    "group": "甲組",
    "url": "https://exam-oaa.nsysu.edu.tw/p/412-1065-2038.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-28",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nsysu-55",
    "school": "中山大學",
    "dept": "海洋科學系碩士班",
    "group": "乙組",
    "url": "https://exam-oaa.nsysu.edu.tw/p/412-1065-2038.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-28",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nsysu-56",
    "school": "中山大學",
    "dept": "海洋環境及工程學系碩士班",
    "group": "甲組",
    "url": "https://exam-oaa.nsysu.edu.tw/p/412-1065-2038.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-31",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nsysu-57",
    "school": "中山大學",
    "dept": "海洋環境及工程學系碩士班",
    "group": "乙組",
    "url": "https://exam-oaa.nsysu.edu.tw/p/412-1065-2038.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-31",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nsysu-58",
    "school": "中山大學",
    "dept": "中國與亞太區域研究所碩士班",
    "group": "甲組",
    "url": "https://exam-oaa.nsysu.edu.tw/p/412-1065-2038.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-28",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nsysu-59",
    "school": "中山大學",
    "dept": "中國與亞太區域研究所碩士班",
    "group": "乙組",
    "url": "https://exam-oaa.nsysu.edu.tw/p/412-1065-2038.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-28",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nsysu-60",
    "school": "中山大學",
    "dept": "中國與亞太區域研究所碩士班",
    "group": "丙組",
    "url": "https://exam-oaa.nsysu.edu.tw/p/412-1065-2038.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-28",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nsysu-61",
    "school": "中山大學",
    "dept": "政治學研究所碩士班",
    "group": "",
    "url": "https://exam-oaa.nsysu.edu.tw/p/412-1065-2038.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-31",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nsysu-62",
    "school": "中山大學",
    "dept": "經濟學研究所碩士班",
    "group": "",
    "url": "https://exam-oaa.nsysu.edu.tw/p/412-1065-2038.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-31",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nsysu-63",
    "school": "中山大學",
    "dept": "教育研究所碩士班",
    "group": "甲組",
    "url": "https://exam-oaa.nsysu.edu.tw/p/412-1065-2038.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-27",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nsysu-64",
    "school": "中山大學",
    "dept": "教育研究所碩士班",
    "group": "乙組",
    "url": "https://exam-oaa.nsysu.edu.tw/p/412-1065-2038.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-27",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nsysu-65",
    "school": "中山大學",
    "dept": "社會學系碩士班",
    "group": "",
    "url": "https://exam-oaa.nsysu.edu.tw/p/412-1065-2038.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-31",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nsysu-66",
    "school": "中山大學",
    "dept": "社會創新研究所碩士班",
    "group": "",
    "url": "https://exam-oaa.nsysu.edu.tw/p/412-1065-2038.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-03",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nsysu-67",
    "school": "中山大學",
    "dept": "精準醫學研究所碩士班",
    "group": "",
    "url": "https://exam-oaa.nsysu.edu.tw/p/412-1065-2038.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-07",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nsysu-68",
    "school": "中山大學",
    "dept": "生技醫藥研究所碩士班",
    "group": "",
    "url": "https://exam-oaa.nsysu.edu.tw/p/412-1065-2038.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-07",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nsysu-69",
    "school": "中山大學",
    "dept": "生物醫學研究所碩士班",
    "group": "",
    "url": "https://exam-oaa.nsysu.edu.tw/p/412-1065-2038.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-07",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nsysu-70",
    "school": "中山大學",
    "dept": "醫學科技研究所碩士班",
    "group": "甲組",
    "url": "https://exam-oaa.nsysu.edu.tw/p/412-1065-2038.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-31",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nsysu-71",
    "school": "中山大學",
    "dept": "醫學科技研究所碩士班",
    "group": "乙組",
    "url": "https://exam-oaa.nsysu.edu.tw/p/412-1065-2038.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-31",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nsysu-72",
    "school": "中山大學",
    "dept": "數位與永續金融研究所碩士班",
    "group": "",
    "url": "https://exam-oaa.nsysu.edu.tw/p/412-1065-2038.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-12",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nsysu-73",
    "school": "中山大學",
    "dept": "國際資產管理研究所碩士班",
    "group": "",
    "url": "https://exam-oaa.nsysu.edu.tw/p/412-1065-2038.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-11",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ncu-0",
    "school": "中央大學",
    "dept": "中國文學系",
    "group": "",
    "url": "https://admission.ncu.edu.tw/zh-TW/content/82/13",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "口試日期由各系所考前公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "ncu-1",
    "school": "中央大學",
    "dept": "英美語文學系",
    "group": "",
    "url": "https://admission.ncu.edu.tw/zh-TW/content/82/13",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "口試日期由各系所考前公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "ncu-2",
    "school": "中央大學",
    "dept": "法國語文學系",
    "group": "",
    "url": "https://admission.ncu.edu.tw/zh-TW/content/82/13",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "口試日期由各系所考前公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "ncu-3",
    "school": "中央大學",
    "dept": "藝術學研究所",
    "group": "",
    "url": "https://admission.ncu.edu.tw/zh-TW/content/82/13",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "口試日期由各系所考前公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "ncu-4",
    "school": "中央大學",
    "dept": "學習與教學研究所",
    "group": "",
    "url": "https://admission.ncu.edu.tw/zh-TW/content/82/13",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "口試日期由各系所考前公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "ncu-5",
    "school": "中央大學",
    "dept": "亞際文化研究國際碩士學位學程",
    "group": "",
    "url": "https://admission.ncu.edu.tw/zh-TW/content/82/13",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "口試日期由各系所考前公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "ncu-6",
    "school": "中央大學",
    "dept": "數學系碩士班",
    "group": "",
    "url": "https://admission.ncu.edu.tw/zh-TW/content/82/13",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "口試日期由各系所考前公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "ncu-7",
    "school": "中央大學",
    "dept": "物理學系",
    "group": "",
    "url": "https://admission.ncu.edu.tw/zh-TW/content/82/13",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "口試日期由各系所考前公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "ncu-8",
    "school": "中央大學",
    "dept": "化學學系",
    "group": "",
    "url": "https://admission.ncu.edu.tw/zh-TW/content/82/13",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "口試日期由各系所考前公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "ncu-9",
    "school": "中央大學",
    "dept": "光電科學與工程學系",
    "group": "",
    "url": "https://admission.ncu.edu.tw/zh-TW/content/82/13",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "口試日期由各系所考前公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "ncu-10",
    "school": "中央大學",
    "dept": "化學工程與材料工程學系",
    "group": "",
    "url": "https://admission.ncu.edu.tw/zh-TW/content/82/13",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "口試日期由各系所考前公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "ncu-11",
    "school": "中央大學",
    "dept": "土木工程學系",
    "group": "",
    "url": "https://admission.ncu.edu.tw/zh-TW/content/82/13",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "口試日期由各系所考前公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "ncu-12",
    "school": "中央大學",
    "dept": "機械工程學系",
    "group": "",
    "url": "https://admission.ncu.edu.tw/zh-TW/content/82/13",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "口試日期由各系所考前公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "ncu-13",
    "school": "中央大學",
    "dept": "能源工程研究所",
    "group": "",
    "url": "https://admission.ncu.edu.tw/zh-TW/content/82/13",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "口試日期由各系所考前公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "ncu-14",
    "school": "中央大學",
    "dept": "環境工程研究所",
    "group": "",
    "url": "https://admission.ncu.edu.tw/zh-TW/content/82/13",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "口試日期由各系所考前公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "ncu-15",
    "school": "中央大學",
    "dept": "材料科學與工程研究所",
    "group": "",
    "url": "https://admission.ncu.edu.tw/zh-TW/content/82/13",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "口試日期由各系所考前公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "ncu-16",
    "school": "中央大學",
    "dept": "企業管理學系",
    "group": "",
    "url": "https://admission.ncu.edu.tw/zh-TW/content/82/13",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "口試日期由各系所考前公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "ncu-17",
    "school": "中央大學",
    "dept": "資訊管理學系",
    "group": "",
    "url": "https://admission.ncu.edu.tw/zh-TW/content/82/13",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "口試日期由各系所考前公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "ncu-18",
    "school": "中央大學",
    "dept": "財務金融學系",
    "group": "",
    "url": "https://admission.ncu.edu.tw/zh-TW/content/82/13",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "口試日期由各系所考前公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "ncu-19",
    "school": "中央大學",
    "dept": "經濟學系",
    "group": "",
    "url": "https://admission.ncu.edu.tw/zh-TW/content/82/13",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "口試日期由各系所考前公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "ncu-20",
    "school": "中央大學",
    "dept": "產業經濟研究所",
    "group": "",
    "url": "https://admission.ncu.edu.tw/zh-TW/content/82/13",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "口試日期由各系所考前公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "ncu-21",
    "school": "中央大學",
    "dept": "人力資源管理研究所",
    "group": "",
    "url": "https://admission.ncu.edu.tw/zh-TW/content/82/13",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "口試日期由各系所考前公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "ncu-22",
    "school": "中央大學",
    "dept": "工業管理研究所",
    "group": "",
    "url": "https://admission.ncu.edu.tw/zh-TW/content/82/13",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "口試日期由各系所考前公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "ncu-23",
    "school": "中央大學",
    "dept": "國際經營管理碩士學位學程",
    "group": "",
    "url": "https://admission.ncu.edu.tw/zh-TW/content/82/13",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "口試日期由各系所考前公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "ncu-24",
    "school": "中央大學",
    "dept": "資訊工程學系",
    "group": "",
    "url": "https://admission.ncu.edu.tw/zh-TW/content/82/13",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "口試日期由各系所考前公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "ncu-25",
    "school": "中央大學",
    "dept": "通訊工程學系",
    "group": "",
    "url": "https://admission.ncu.edu.tw/zh-TW/content/82/13",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "口試日期由各系所考前公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "ncu-26",
    "school": "中央大學",
    "dept": "網路學習科技研究所",
    "group": "",
    "url": "https://admission.ncu.edu.tw/zh-TW/content/82/13",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "口試日期由各系所考前公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "ncu-27",
    "school": "中央大學",
    "dept": "人工智慧國際碩士學位學程",
    "group": "",
    "url": "https://admission.ncu.edu.tw/zh-TW/content/82/13",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "口試日期由各系所考前公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "ncu-28",
    "school": "中央大學",
    "dept": "大氣科學學系",
    "group": "",
    "url": "https://admission.ncu.edu.tw/zh-TW/content/82/13",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "口試日期由各系所考前公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "ncu-29",
    "school": "中央大學",
    "dept": "水文與海洋科學研究所",
    "group": "",
    "url": "https://admission.ncu.edu.tw/zh-TW/content/82/13",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "口試日期由各系所考前公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "ncu-30",
    "school": "中央大學",
    "dept": "客家語文暨社會科學學系",
    "group": "",
    "url": "https://admission.ncu.edu.tw/zh-TW/content/82/13",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "口試日期由各系所考前公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "ncu-31",
    "school": "中央大學",
    "dept": "法律與政府學系",
    "group": "",
    "url": "https://admission.ncu.edu.tw/zh-TW/content/82/13",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "口試日期由各系所考前公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "ncu-32",
    "school": "中央大學",
    "dept": "生命科學系",
    "group": "",
    "url": "https://admission.ncu.edu.tw/zh-TW/content/82/13",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "口試日期由各系所考前公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "ncu-33",
    "school": "中央大學",
    "dept": "認知神經科學研究所",
    "group": "",
    "url": "https://admission.ncu.edu.tw/zh-TW/content/82/13",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "口試日期由各系所考前公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "ncu-34",
    "school": "中央大學",
    "dept": "生醫科學與工程學系",
    "group": "",
    "url": "https://admission.ncu.edu.tw/zh-TW/content/82/13",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "口試日期由各系所考前公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "ncu-35",
    "school": "中央大學",
    "dept": "永續去碳科技碩士學位學程",
    "group": "",
    "url": "https://admission.ncu.edu.tw/zh-TW/content/82/13",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "口試日期由各系所考前公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "ncu-36",
    "school": "中央大學",
    "dept": "永續綠能科技碩士學位學程",
    "group": "",
    "url": "https://admission.ncu.edu.tw/zh-TW/content/82/13",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "口試日期由各系所考前公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "ncu-37",
    "school": "中央大學",
    "dept": "永續領導力碩士學位學程",
    "group": "",
    "url": "https://admission.ncu.edu.tw/zh-TW/content/82/13",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "口試日期由各系所考前公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "ncu-38",
    "school": "中央大學",
    "dept": "電機工程學系",
    "group": "",
    "url": "https://admission.ncu.edu.tw/zh-TW/content/82/13",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "口試日期由各系所考前公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "ncu-39",
    "school": "中央大學",
    "dept": "太空科學與工程學系",
    "group": "",
    "url": "https://admission.ncu.edu.tw/zh-TW/content/82/13",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "口試日期由各系所考前公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "ntu-0",
    "school": "臺灣大學",
    "dept": "中國文學系",
    "group": "",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-04",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-1",
    "school": "臺灣大學",
    "dept": "外國語文學系",
    "group": "",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-07",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-2",
    "school": "臺灣大學",
    "dept": "歷史學系",
    "group": "",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-06",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-3",
    "school": "臺灣大學",
    "dept": "哲學系",
    "group": "甲組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-03",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-4",
    "school": "臺灣大學",
    "dept": "哲學系",
    "group": "乙組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-03",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-5",
    "school": "臺灣大學",
    "dept": "人類學系",
    "group": "",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-07",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-6",
    "school": "臺灣大學",
    "dept": "圖書資訊學系",
    "group": "甲組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-07",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-7",
    "school": "臺灣大學",
    "dept": "圖書資訊學系",
    "group": "乙組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-07",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-8",
    "school": "臺灣大學",
    "dept": "圖書資訊學系",
    "group": "丙組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-07",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-9",
    "school": "臺灣大學",
    "dept": "圖書資訊學系",
    "group": "丁組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-07",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-10",
    "school": "臺灣大學",
    "dept": "日本語文學系",
    "group": "",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-29",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-11",
    "school": "臺灣大學",
    "dept": "戲劇學系",
    "group": "",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-08",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-12",
    "school": "臺灣大學",
    "dept": "藝術史研究所",
    "group": "",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-07",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-13",
    "school": "臺灣大學",
    "dept": "語言學研究所",
    "group": "",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-03",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-14",
    "school": "臺灣大學",
    "dept": "音樂學研究所",
    "group": "",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-07",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-15",
    "school": "臺灣大學",
    "dept": "臺灣文學研究所",
    "group": "",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-01",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-16",
    "school": "臺灣大學",
    "dept": "華語教學碩士學位學程",
    "group": "",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-03",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-17",
    "school": "臺灣大學",
    "dept": "數學系",
    "group": "",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-31",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-18",
    "school": "臺灣大學",
    "dept": "物理學系",
    "group": "",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-08",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-19",
    "school": "臺灣大學",
    "dept": "化學系",
    "group": "化學組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-01",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-20",
    "school": "臺灣大學",
    "dept": "化學系",
    "group": "化學生物學組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-01",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-21",
    "school": "臺灣大學",
    "dept": "地質科學系",
    "group": "",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-30",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-22",
    "school": "臺灣大學",
    "dept": "心理學系",
    "group": "一般心理學組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-08",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-23",
    "school": "臺灣大學",
    "dept": "心理學系",
    "group": "臨床心理學組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-07",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-24",
    "school": "臺灣大學",
    "dept": "地理環境資源學系",
    "group": "",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-01",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-25",
    "school": "臺灣大學",
    "dept": "大氣科學系",
    "group": "甲組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-08",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-26",
    "school": "臺灣大學",
    "dept": "大氣科學系",
    "group": "乙組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-08",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-27",
    "school": "臺灣大學",
    "dept": "海洋研究所",
    "group": "海洋物理組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-03",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-28",
    "school": "臺灣大學",
    "dept": "海洋研究所",
    "group": "海洋地質及地球物理組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-31",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-29",
    "school": "臺灣大學",
    "dept": "海洋研究所",
    "group": "海洋化學組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-31",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-30",
    "school": "臺灣大學",
    "dept": "海洋研究所",
    "group": "海洋生物及漁業組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "簡章未明列口試日期，請見系所公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "ntu-31",
    "school": "臺灣大學",
    "dept": "天文物理研究所",
    "group": "",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-08",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-32",
    "school": "臺灣大學",
    "dept": "應用物理學研究所",
    "group": "",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-08",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-33",
    "school": "臺灣大學",
    "dept": "應用數學科學研究所",
    "group": "",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-31",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-34",
    "school": "臺灣大學",
    "dept": "氣候變遷與永續發展國際碩士學位學程",
    "group": "",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-01",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-35",
    "school": "臺灣大學",
    "dept": "統計與數據科學研究所",
    "group": "",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-30",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-36",
    "school": "臺灣大學",
    "dept": "政治學系",
    "group": "甲組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-04",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-37",
    "school": "臺灣大學",
    "dept": "政治學系",
    "group": "乙組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-04",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-38",
    "school": "臺灣大學",
    "dept": "經濟學系",
    "group": "",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-01",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-39",
    "school": "臺灣大學",
    "dept": "社會學系",
    "group": "",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-06",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-40",
    "school": "臺灣大學",
    "dept": "社會工作學系",
    "group": "甲組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-31",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-41",
    "school": "臺灣大學",
    "dept": "社會工作學系",
    "group": "乙組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-31",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-42",
    "school": "臺灣大學",
    "dept": "國家發展研究所",
    "group": "甲組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-05",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-43",
    "school": "臺灣大學",
    "dept": "國家發展研究所",
    "group": "乙組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-05",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-44",
    "school": "臺灣大學",
    "dept": "新聞研究所",
    "group": "",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-07",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-45",
    "school": "臺灣大學",
    "dept": "公共事務研究所",
    "group": "",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-28",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-46",
    "school": "臺灣大學",
    "dept": "臨床牙醫學研究所",
    "group": "甲組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-05",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-47",
    "school": "臺灣大學",
    "dept": "臨床牙醫學研究所",
    "group": "乙組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-05",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-48",
    "school": "臺灣大學",
    "dept": "臨床牙醫學研究所",
    "group": "丙組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-05",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-49",
    "school": "臺灣大學",
    "dept": "臨床牙醫學研究所",
    "group": "丁組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-05",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-50",
    "school": "臺灣大學",
    "dept": "臨床牙醫學研究所",
    "group": "戊組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-05",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-51",
    "school": "臺灣大學",
    "dept": "臨床牙醫學研究所",
    "group": "",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-05",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-52",
    "school": "臺灣大學",
    "dept": "藥學系",
    "group": "甲組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-31",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-53",
    "school": "臺灣大學",
    "dept": "藥學系",
    "group": "乙組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-31",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-54",
    "school": "臺灣大學",
    "dept": "藥學系",
    "group": "丙組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-31",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-55",
    "school": "臺灣大學",
    "dept": "醫學檢驗暨生物技術學系",
    "group": "",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-05",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-56",
    "school": "臺灣大學",
    "dept": "護理學系",
    "group": "甲組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-10",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-57",
    "school": "臺灣大學",
    "dept": "護理學系",
    "group": "乙組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-10",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-58",
    "school": "臺灣大學",
    "dept": "護理學系",
    "group": "丙組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-10",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-59",
    "school": "臺灣大學",
    "dept": "護理學系",
    "group": "丁組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-10",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-60",
    "school": "臺灣大學",
    "dept": "護理學系",
    "group": "戊組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-10",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-61",
    "school": "臺灣大學",
    "dept": "護理學系",
    "group": "",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-10",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-62",
    "school": "臺灣大學",
    "dept": "物理治療學系",
    "group": "",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-31",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-63",
    "school": "臺灣大學",
    "dept": "職能治療學系",
    "group": "",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-31",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-64",
    "school": "臺灣大學",
    "dept": "生理學研究所",
    "group": "",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-04",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-65",
    "school": "臺灣大學",
    "dept": "生物化學暨分子生物學研究所",
    "group": "",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-18",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-66",
    "school": "臺灣大學",
    "dept": "藥理學研究所",
    "group": "",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-07",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-67",
    "school": "臺灣大學",
    "dept": "病理學研究所",
    "group": "",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-20",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-68",
    "school": "臺灣大學",
    "dept": "微生物學研究所",
    "group": "微生物及免疫學組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-23",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-69",
    "school": "臺灣大學",
    "dept": "微生物學研究所",
    "group": "熱帶醫學暨寄生蟲學組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-21",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-70",
    "school": "臺灣大學",
    "dept": "解剖學暨細胞生物學研究所",
    "group": "",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-07",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-71",
    "school": "臺灣大學",
    "dept": "毒理學研究所",
    "group": "",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-31",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-72",
    "school": "臺灣大學",
    "dept": "分子醫學研究所",
    "group": "",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-07",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-73",
    "school": "臺灣大學",
    "dept": "免疫學研究所",
    "group": "",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-21",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-74",
    "school": "臺灣大學",
    "dept": "口腔生物科學研究所",
    "group": "",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-04",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-75",
    "school": "臺灣大學",
    "dept": "臨床藥學研究所",
    "group": "",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-05",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-76",
    "school": "臺灣大學",
    "dept": "法醫學研究所",
    "group": "甲組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-22",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-77",
    "school": "臺灣大學",
    "dept": "腦與心智科學研究所",
    "group": "",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-29",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-78",
    "school": "臺灣大學",
    "dept": "基因體暨蛋白體醫學研究所",
    "group": "",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-06",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-79",
    "school": "臺灣大學",
    "dept": "醫學教育暨生醫倫理研究所",
    "group": "",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-08",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-80",
    "school": "臺灣大學",
    "dept": "醫療器材與醫學影像研究所",
    "group": "",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-22",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-81",
    "school": "臺灣大學",
    "dept": "國際三校農業生技與健康醫療碩士學位學程",
    "group": "",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-05",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-82",
    "school": "臺灣大學",
    "dept": "醫藥法規科學碩士學位學程",
    "group": "",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-07",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-83",
    "school": "臺灣大學",
    "dept": "土木工程學系",
    "group": "大地工程組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-27",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-84",
    "school": "臺灣大學",
    "dept": "土木工程學系",
    "group": "測量及空間資訊組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-23",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-85",
    "school": "臺灣大學",
    "dept": "土木工程學系",
    "group": "結構工程組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-30",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-86",
    "school": "臺灣大學",
    "dept": "土木工程學系",
    "group": "水利工程組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-24",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-87",
    "school": "臺灣大學",
    "dept": "土木工程學系",
    "group": "交通工程組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-27",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-88",
    "school": "臺灣大學",
    "dept": "土木工程學系",
    "group": "電腦輔助工程組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-27",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-89",
    "school": "臺灣大學",
    "dept": "土木工程學系",
    "group": "",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-24",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-90",
    "school": "臺灣大學",
    "dept": "機械工程學系",
    "group": "",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "簡章未明列口試日期，請見系所公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "ntu-91",
    "school": "臺灣大學",
    "dept": "機械工程學系",
    "group": "流體力學組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "簡章未明列口試日期，請見系所公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "ntu-92",
    "school": "臺灣大學",
    "dept": "化學工程學系",
    "group": "",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-24",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-93",
    "school": "臺灣大學",
    "dept": "工程科學及海洋工程學系",
    "group": "甲組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "簡章未明列口試日期，請見系所公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "ntu-94",
    "school": "臺灣大學",
    "dept": "工程科學及海洋工程學系",
    "group": "乙組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "簡章未明列口試日期，請見系所公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "ntu-95",
    "school": "臺灣大學",
    "dept": "工程科學及海洋工程學系",
    "group": "丙組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "簡章未明列口試日期，請見系所公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "ntu-96",
    "school": "臺灣大學",
    "dept": "工程科學及海洋工程學系",
    "group": "丁組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "簡章未明列口試日期，請見系所公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "ntu-97",
    "school": "臺灣大學",
    "dept": "材料科學與工程學系",
    "group": "甲組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-27",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-98",
    "school": "臺灣大學",
    "dept": "材料科學與工程學系",
    "group": "乙組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-27",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-99",
    "school": "臺灣大學",
    "dept": "材料科學與工程學系",
    "group": "丙組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-27",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-100",
    "school": "臺灣大學",
    "dept": "材料科學與工程學系",
    "group": "",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-27",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-101",
    "school": "臺灣大學",
    "dept": "環境工程學研究所",
    "group": "",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-01",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-102",
    "school": "臺灣大學",
    "dept": "應用力學研究所",
    "group": "甲組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "簡章未明列口試日期，請見系所公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "ntu-103",
    "school": "臺灣大學",
    "dept": "應用力學研究所",
    "group": "乙組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "簡章未明列口試日期，請見系所公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "ntu-104",
    "school": "臺灣大學",
    "dept": "應用力學研究所",
    "group": "丙組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "簡章未明列口試日期，請見系所公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "ntu-105",
    "school": "臺灣大學",
    "dept": "建築與城鄉研究所",
    "group": "空間規劃設計專業組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-29",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-106",
    "school": "臺灣大學",
    "dept": "建築與城鄉研究所",
    "group": "其它專業組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-29",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-107",
    "school": "臺灣大學",
    "dept": "建築與城鄉研究所",
    "group": "原住民組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-29",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-108",
    "school": "臺灣大學",
    "dept": "建築與城鄉研究所",
    "group": "新住民組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-29",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-109",
    "school": "臺灣大學",
    "dept": "工業工程學研究所",
    "group": "甲組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-30",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-110",
    "school": "臺灣大學",
    "dept": "工業工程學研究所",
    "group": "乙組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-30",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-111",
    "school": "臺灣大學",
    "dept": "工業工程學研究所",
    "group": "丙組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-30",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-112",
    "school": "臺灣大學",
    "dept": "醫學工程學系",
    "group": "甲組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-28",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-113",
    "school": "臺灣大學",
    "dept": "醫學工程學系",
    "group": "乙組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-28",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-114",
    "school": "臺灣大學",
    "dept": "醫學工程學系",
    "group": "丙組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-28",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-115",
    "school": "臺灣大學",
    "dept": "醫學工程學系",
    "group": "丁組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-28",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-116",
    "school": "臺灣大學",
    "dept": "高分子科學與工程學研究所",
    "group": "",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-23",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-117",
    "school": "臺灣大學",
    "dept": "農藝學系",
    "group": "作物科學甲組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-18",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-118",
    "school": "臺灣大學",
    "dept": "農藝學系",
    "group": "作物科學乙組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-18",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-119",
    "school": "臺灣大學",
    "dept": "農藝學系",
    "group": "生物統計學組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-18",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-120",
    "school": "臺灣大學",
    "dept": "生物環境系",
    "group": "",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "簡章未明列口試日期，請見系所公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "ntu-121",
    "school": "臺灣大學",
    "dept": "農業化學系",
    "group": "甲組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-18",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-122",
    "school": "臺灣大學",
    "dept": "農業化學系",
    "group": "乙組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-18",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-123",
    "school": "臺灣大學",
    "dept": "農業化學系",
    "group": "丙組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-18",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-124",
    "school": "臺灣大學",
    "dept": "森林環境暨資源學系",
    "group": "",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-01",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-125",
    "school": "臺灣大學",
    "dept": "動物科學技術學系",
    "group": "",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-01",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-126",
    "school": "臺灣大學",
    "dept": "農業經濟學系",
    "group": "",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-07",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-127",
    "school": "臺灣大學",
    "dept": "園藝暨景觀學系",
    "group": "園藝作物組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-31",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-128",
    "school": "臺灣大學",
    "dept": "園藝暨景觀學系",
    "group": "園產品處理及利用組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-31",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-129",
    "school": "臺灣大學",
    "dept": "園藝暨景觀學系",
    "group": "景觀暨休憩組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-31",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-130",
    "school": "臺灣大學",
    "dept": "獸醫學系",
    "group": "甲組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-20",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-131",
    "school": "臺灣大學",
    "dept": "獸醫學系",
    "group": "乙組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-21",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-132",
    "school": "臺灣大學",
    "dept": "生物產業傳播暨發展學系",
    "group": "",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-03",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-133",
    "school": "臺灣大學",
    "dept": "生物機電工程學系",
    "group": "",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-04",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-134",
    "school": "臺灣大學",
    "dept": "生物機電工程學系",
    "group": "機械系統組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-04",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-135",
    "school": "臺灣大學",
    "dept": "生物機電工程學系",
    "group": "生物程序組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-04",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-136",
    "school": "臺灣大學",
    "dept": "昆蟲學系",
    "group": "",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-30",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-137",
    "school": "臺灣大學",
    "dept": "植物病理與微生物學系",
    "group": "",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-01",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-138",
    "school": "臺灣大學",
    "dept": "食品科技研究所",
    "group": "甲組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-01",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-139",
    "school": "臺灣大學",
    "dept": "食品科技研究所",
    "group": "乙組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-01",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-140",
    "school": "臺灣大學",
    "dept": "食品科技研究所",
    "group": "丙組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-01",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-141",
    "school": "臺灣大學",
    "dept": "食品科技研究所",
    "group": "丁組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-01",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-142",
    "school": "臺灣大學",
    "dept": "食品科技研究所",
    "group": "戊組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-01",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-143",
    "school": "臺灣大學",
    "dept": "生物科技研究所",
    "group": "",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-01",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-144",
    "school": "臺灣大學",
    "dept": "臨床動物醫學研究所",
    "group": "甲組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-21",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-145",
    "school": "臺灣大學",
    "dept": "臨床動物醫學研究所",
    "group": "乙組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-22",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-146",
    "school": "臺灣大學",
    "dept": "植物醫學碩士學位學程",
    "group": "",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-26",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-147",
    "school": "臺灣大學",
    "dept": "分子暨比較病理生物學研究所",
    "group": "",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-22",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-148",
    "school": "臺灣大學",
    "dept": "商學研究所",
    "group": "",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-07",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-149",
    "school": "臺灣大學",
    "dept": "會計學系",
    "group": "甲組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-04",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-150",
    "school": "臺灣大學",
    "dept": "會計學系",
    "group": "乙組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-04",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-151",
    "school": "臺灣大學",
    "dept": "財務金融學系",
    "group": "甲組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-07",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-152",
    "school": "臺灣大學",
    "dept": "財務金融學系",
    "group": "乙組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-07",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-153",
    "school": "臺灣大學",
    "dept": "財務金融學系",
    "group": "丙組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-07",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-154",
    "school": "臺灣大學",
    "dept": "國際企業學系",
    "group": "",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-31",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-155",
    "school": "臺灣大學",
    "dept": "資訊管理學系",
    "group": "",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-31",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-156",
    "school": "臺灣大學",
    "dept": "健康政策與管理研究所",
    "group": "",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-31",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-157",
    "school": "臺灣大學",
    "dept": "健康行為與社區科學研究所",
    "group": "",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-31",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-158",
    "school": "臺灣大學",
    "dept": "環境與職業健康科學研究所",
    "group": "",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-31",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-159",
    "school": "臺灣大學",
    "dept": "流行病學與預防醫學研究所",
    "group": "甲組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-04",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-160",
    "school": "臺灣大學",
    "dept": "流行病學與預防醫學研究所",
    "group": "乙組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-29",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-161",
    "school": "臺灣大學",
    "dept": "健康數據拓析統計研究所",
    "group": "",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-31",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-162",
    "school": "臺灣大學",
    "dept": "公共衛生碩士學位學程",
    "group": "",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-31",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-163",
    "school": "臺灣大學",
    "dept": "食品安全與健康研究所",
    "group": "",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-31",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-164",
    "school": "臺灣大學",
    "dept": "全球衛生碩士學位學程",
    "group": "",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-28",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-165",
    "school": "臺灣大學",
    "dept": "電機工程學系",
    "group": "甲組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "簡章未明列口試日期，請見系所公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "ntu-166",
    "school": "臺灣大學",
    "dept": "電機工程學系",
    "group": "乙組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "簡章未明列口試日期，請見系所公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "ntu-167",
    "school": "臺灣大學",
    "dept": "電機工程學系",
    "group": "丙組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "簡章未明列口試日期，請見系所公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "ntu-168",
    "school": "臺灣大學",
    "dept": "電機工程學系",
    "group": "",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "簡章未明列口試日期，請見系所公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "ntu-169",
    "school": "臺灣大學",
    "dept": "資訊工程學系",
    "group": "",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "簡章未明列口試日期，請見系所公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "ntu-170",
    "school": "臺灣大學",
    "dept": "光電工程學研究所",
    "group": "",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "簡章未明列口試日期，請見系所公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "ntu-171",
    "school": "臺灣大學",
    "dept": "電信工程學研究所",
    "group": "甲組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "簡章未明列口試日期，請見系所公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "ntu-172",
    "school": "臺灣大學",
    "dept": "電信工程學研究所",
    "group": "乙組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "簡章未明列口試日期，請見系所公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "ntu-173",
    "school": "臺灣大學",
    "dept": "電信工程學研究所",
    "group": "丙組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-06",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-174",
    "school": "臺灣大學",
    "dept": "電子工程學研究所",
    "group": "甲組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "簡章未明列口試日期，請見系所公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "ntu-175",
    "school": "臺灣大學",
    "dept": "電子工程學研究所",
    "group": "乙組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "簡章未明列口試日期，請見系所公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "ntu-176",
    "school": "臺灣大學",
    "dept": "電子工程學研究所",
    "group": "丙組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "簡章未明列口試日期，請見系所公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "ntu-177",
    "school": "臺灣大學",
    "dept": "電子工程學研究所",
    "group": "丁組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "簡章未明列口試日期，請見系所公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "ntu-178",
    "school": "臺灣大學",
    "dept": "資訊網路與多媒體研究所",
    "group": "",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "簡章未明列口試日期，請見系所公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "ntu-179",
    "school": "臺灣大學",
    "dept": "生醫電子與資訊學研究所",
    "group": "甲組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "簡章未明列口試日期，請見系所公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "ntu-180",
    "school": "臺灣大學",
    "dept": "生醫電子與資訊學研究所",
    "group": "乙組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "簡章未明列口試日期，請見系所公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "ntu-181",
    "school": "臺灣大學",
    "dept": "生醫電子與資訊學研究所",
    "group": "丙組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "簡章未明列口試日期，請見系所公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "ntu-182",
    "school": "臺灣大學",
    "dept": "資料科學碩士學位學程",
    "group": "",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-07",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-183",
    "school": "臺灣大學",
    "dept": "法律學系",
    "group": "甲組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "簡章未明列口試日期，請見系所公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "ntu-184",
    "school": "臺灣大學",
    "dept": "法律學系",
    "group": "乙組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "簡章未明列口試日期，請見系所公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "ntu-185",
    "school": "臺灣大學",
    "dept": "法律學系",
    "group": "丙組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "簡章未明列口試日期，請見系所公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "ntu-186",
    "school": "臺灣大學",
    "dept": "法律學系",
    "group": "丁組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "簡章未明列口試日期，請見系所公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "ntu-187",
    "school": "臺灣大學",
    "dept": "法律學系",
    "group": "戊組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "簡章未明列口試日期，請見系所公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "ntu-188",
    "school": "臺灣大學",
    "dept": "法律學系",
    "group": "",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "簡章未明列口試日期，請見系所公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "ntu-189",
    "school": "臺灣大學",
    "dept": "生命科學系",
    "group": "",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-01",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-190",
    "school": "臺灣大學",
    "dept": "植物科學研究所",
    "group": "",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-01",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-191",
    "school": "臺灣大學",
    "dept": "分子與細胞生物學研究所",
    "group": "",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-24",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-192",
    "school": "臺灣大學",
    "dept": "生態學與演化生物學研究所",
    "group": "",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-31",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-193",
    "school": "臺灣大學",
    "dept": "漁業科學研究所",
    "group": "",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-01",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-194",
    "school": "臺灣大學",
    "dept": "生化科學研究所",
    "group": "",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-03",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-195",
    "school": "臺灣大學",
    "dept": "生化科技學系",
    "group": "",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-01",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-196",
    "school": "臺灣大學",
    "dept": "基因體與系",
    "group": "",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-23",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-197",
    "school": "臺灣大學",
    "dept": "政治經濟碩士學位學程",
    "group": "",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-08",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-198",
    "school": "臺灣大學",
    "dept": "財金碩士學位學程",
    "group": "",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-08",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-199",
    "school": "臺灣大學",
    "dept": "領導與管理碩士學位學程",
    "group": "",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-08",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-200",
    "school": "臺灣大學",
    "dept": "統計碩士學位學程",
    "group": "",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-22",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-201",
    "school": "臺灣大學",
    "dept": "運動設施與健康管理碩士學位學程",
    "group": "運動管理組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-31",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-202",
    "school": "臺灣大學",
    "dept": "運動設施與健康管理碩士學位學程",
    "group": "健康管理組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-31",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-203",
    "school": "臺灣大學",
    "dept": "全球農業科技與基因體科學碩士學位學程",
    "group": "",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-01",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-204",
    "school": "臺灣大學",
    "dept": "生物多樣性國際碩士學位學程",
    "group": "",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-01",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-205",
    "school": "臺灣大學",
    "dept": "智慧醫療與健康資訊碩士學位學程",
    "group": "",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-20",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-206",
    "school": "臺灣大學",
    "dept": "防災減害與韌性碩士學位學程",
    "group": "",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "2025-10-20",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "ntu-207",
    "school": "臺灣大學",
    "dept": "積體電路設計與自動化碩士學位學程",
    "group": "甲組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "簡章未明列口試日期，請見系所公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "ntu-208",
    "school": "臺灣大學",
    "dept": "積體電路設計與自動化碩士學位學程",
    "group": "乙組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "簡章未明列口試日期，請見系所公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "ntu-209",
    "school": "臺灣大學",
    "dept": "積體電路設計與自動化碩士學位學程",
    "group": "丙組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "簡章未明列口試日期，請見系所公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "ntu-210",
    "school": "臺灣大學",
    "dept": "元件材料與異質整合碩士學位學程",
    "group": "甲組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "簡章未明列口試日期，請見系所公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "ntu-211",
    "school": "臺灣大學",
    "dept": "元件材料與異質整合碩士學位學程",
    "group": "乙組",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "簡章未明列口試日期，請見系所公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "ntu-212",
    "school": "臺灣大學",
    "dept": "奈米工程與科學碩士學位學程",
    "group": "",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "簡章未明列口試日期，請見系所公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "ntu-213",
    "school": "臺灣大學",
    "dept": "精準健康碩士學位學程",
    "group": "",
    "url": "https://www.aca.ntu.edu.tw/w/aca/LocalAdmissionClass_21072014105459968",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "口試",
        "note": "簡章未明列口試日期，請見系所公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "ccu-0",
    "school": "中正大學",
    "dept": "中國文學系",
    "group": "",
    "url": "https://exams.ccu.edu.tw/p/403-1032-2830.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "甄試日期請見系所公告(校方系統需登入)",
        "tentative": true
      }
    ]
  },
  {
    "id": "ccu-1",
    "school": "中正大學",
    "dept": "外國語文學系",
    "group": "",
    "url": "https://exams.ccu.edu.tw/p/403-1032-2830.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "甄試日期請見系所公告(校方系統需登入)",
        "tentative": true
      }
    ]
  },
  {
    "id": "ccu-2",
    "school": "中正大學",
    "dept": "外國語文學系英語教學",
    "group": "",
    "url": "https://exams.ccu.edu.tw/p/403-1032-2830.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "甄試日期請見系所公告(校方系統需登入)",
        "tentative": true
      }
    ]
  },
  {
    "id": "ccu-3",
    "school": "中正大學",
    "dept": "語言學研究所語言學組",
    "group": "",
    "url": "https://exams.ccu.edu.tw/p/403-1032-2830.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "甄試日期請見系所公告(校方系統需登入)",
        "tentative": true
      }
    ]
  },
  {
    "id": "ccu-4",
    "school": "中正大學",
    "dept": "語言學研究所華語教學",
    "group": "",
    "url": "https://exams.ccu.edu.tw/p/403-1032-2830.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "甄試日期請見系所公告(校方系統需登入)",
        "tentative": true
      }
    ]
  },
  {
    "id": "ccu-5",
    "school": "中正大學",
    "dept": "台灣文學與創意應用研究所",
    "group": "",
    "url": "https://exams.ccu.edu.tw/p/403-1032-2830.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "甄試日期請見系所公告(校方系統需登入)",
        "tentative": true
      }
    ]
  },
  {
    "id": "ccu-6",
    "school": "中正大學",
    "dept": "數學系應用數學",
    "group": "",
    "url": "https://exams.ccu.edu.tw/p/403-1032-2830.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "甄試日期請見系所公告(校方系統需登入)",
        "tentative": true
      }
    ]
  },
  {
    "id": "ccu-7",
    "school": "中正大學",
    "dept": "數學系統計科學",
    "group": "",
    "url": "https://exams.ccu.edu.tw/p/403-1032-2830.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "甄試日期請見系所公告(校方系統需登入)",
        "tentative": true
      }
    ]
  },
  {
    "id": "ccu-8",
    "school": "中正大學",
    "dept": "地球與環境科學系地震學",
    "group": "",
    "url": "https://exams.ccu.edu.tw/p/403-1032-2830.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "甄試日期請見系所公告(校方系統需登入)",
        "tentative": true
      }
    ]
  },
  {
    "id": "ccu-9",
    "school": "中正大學",
    "dept": "地球與環境科學系",
    "group": "",
    "url": "https://exams.ccu.edu.tw/p/403-1032-2830.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "甄試日期請見系所公告(校方系統需登入)",
        "tentative": true
      }
    ]
  },
  {
    "id": "ccu-10",
    "school": "中正大學",
    "dept": "物理學系",
    "group": "",
    "url": "https://exams.ccu.edu.tw/p/403-1032-2830.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "甄試日期請見系所公告(校方系統需登入)",
        "tentative": true
      }
    ]
  },
  {
    "id": "ccu-11",
    "school": "中正大學",
    "dept": "化學暨生物化學系",
    "group": "",
    "url": "https://exams.ccu.edu.tw/p/403-1032-2830.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "甄試日期請見系所公告(校方系統需登入)",
        "tentative": true
      }
    ]
  },
  {
    "id": "ccu-12",
    "school": "中正大學",
    "dept": "生物醫學科學系分子生物",
    "group": "",
    "url": "https://exams.ccu.edu.tw/p/403-1032-2830.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "甄試日期請見系所公告(校方系統需登入)",
        "tentative": true
      }
    ]
  },
  {
    "id": "ccu-13",
    "school": "中正大學",
    "dept": "生物醫學科學系生物醫學",
    "group": "",
    "url": "https://exams.ccu.edu.tw/p/403-1032-2830.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "甄試日期請見系所公告(校方系統需登入)",
        "tentative": true
      }
    ]
  },
  {
    "id": "ccu-14",
    "school": "中正大學",
    "dept": "社會福利學系",
    "group": "",
    "url": "https://exams.ccu.edu.tw/p/403-1032-2830.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "甄試日期請見系所公告(校方系統需登入)",
        "tentative": true
      }
    ]
  },
  {
    "id": "ccu-15",
    "school": "中正大學",
    "dept": "心理學系",
    "group": "",
    "url": "https://exams.ccu.edu.tw/p/403-1032-2830.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "甄試日期請見系所公告(校方系統需登入)",
        "tentative": true
      }
    ]
  },
  {
    "id": "ccu-16",
    "school": "中正大學",
    "dept": "心理學系臨床心理學",
    "group": "",
    "url": "https://exams.ccu.edu.tw/p/403-1032-2830.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "甄試日期請見系所公告(校方系統需登入)",
        "tentative": true
      }
    ]
  },
  {
    "id": "ccu-17",
    "school": "中正大學",
    "dept": "政治學系",
    "group": "",
    "url": "https://exams.ccu.edu.tw/p/403-1032-2830.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "甄試日期請見系所公告(校方系統需登入)",
        "tentative": true
      }
    ]
  },
  {
    "id": "ccu-18",
    "school": "中正大學",
    "dept": "傳播學系電訊傳播",
    "group": "",
    "url": "https://exams.ccu.edu.tw/p/403-1032-2830.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "甄試日期請見系所公告(校方系統需登入)",
        "tentative": true
      }
    ]
  },
  {
    "id": "ccu-19",
    "school": "中正大學",
    "dept": "戰略暨國際事務研究所",
    "group": "",
    "url": "https://exams.ccu.edu.tw/p/403-1032-2830.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "甄試日期請見系所公告(校方系統需登入)",
        "tentative": true
      }
    ]
  },
  {
    "id": "ccu-20",
    "school": "中正大學",
    "dept": "資訊工程學系",
    "group": "",
    "url": "https://exams.ccu.edu.tw/p/403-1032-2830.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "甄試日期請見系所公告(校方系統需登入)",
        "tentative": true
      }
    ]
  },
  {
    "id": "ccu-21",
    "school": "中正大學",
    "dept": "電機工程學系",
    "group": "",
    "url": "https://exams.ccu.edu.tw/p/403-1032-2830.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "甄試日期請見系所公告(校方系統需登入)",
        "tentative": true
      }
    ]
  },
  {
    "id": "ccu-22",
    "school": "中正大學",
    "dept": "機械工程學系",
    "group": "",
    "url": "https://exams.ccu.edu.tw/p/403-1032-2830.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "甄試日期請見系所公告(校方系統需登入)",
        "tentative": true
      }
    ]
  },
  {
    "id": "ccu-23",
    "school": "中正大學",
    "dept": "機械工程學系光機電整合工程",
    "group": "",
    "url": "https://exams.ccu.edu.tw/p/403-1032-2830.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "甄試日期請見系所公告(校方系統需登入)",
        "tentative": true
      }
    ]
  },
  {
    "id": "ccu-24",
    "school": "中正大學",
    "dept": "化學工程學系",
    "group": "",
    "url": "https://exams.ccu.edu.tw/p/403-1032-2830.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "甄試日期請見系所公告(校方系統需登入)",
        "tentative": true
      }
    ]
  },
  {
    "id": "ccu-25",
    "school": "中正大學",
    "dept": "通訊工程學系",
    "group": "",
    "url": "https://exams.ccu.edu.tw/p/403-1032-2830.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "甄試日期請見系所公告(校方系統需登入)",
        "tentative": true
      }
    ]
  },
  {
    "id": "ccu-26",
    "school": "中正大學",
    "dept": "前瞻工程全英語碩士學位學程",
    "group": "",
    "url": "https://exams.ccu.edu.tw/p/403-1032-2830.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "甄試日期請見系所公告(校方系統需登入)",
        "tentative": true
      }
    ]
  },
  {
    "id": "ccu-27",
    "school": "中正大學",
    "dept": "經濟學系國際經濟學",
    "group": "",
    "url": "https://exams.ccu.edu.tw/p/403-1032-2830.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "甄試日期請見系所公告(校方系統需登入)",
        "tentative": true
      }
    ]
  },
  {
    "id": "ccu-28",
    "school": "中正大學",
    "dept": "財務金融學系",
    "group": "",
    "url": "https://exams.ccu.edu.tw/p/403-1032-2830.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "甄試日期請見系所公告(校方系統需登入)",
        "tentative": true
      }
    ]
  },
  {
    "id": "ccu-29",
    "school": "中正大學",
    "dept": "企業管理學系",
    "group": "",
    "url": "https://exams.ccu.edu.tw/p/403-1032-2830.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "甄試日期請見系所公告(校方系統需登入)",
        "tentative": true
      }
    ]
  },
  {
    "id": "ccu-30",
    "school": "中正大學",
    "dept": "資訊科技學系",
    "group": "",
    "url": "https://exams.ccu.edu.tw/p/403-1032-2830.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "甄試日期請見系所公告(校方系統需登入)",
        "tentative": true
      }
    ]
  },
  {
    "id": "ccu-31",
    "school": "中正大學",
    "dept": "資訊管理學系",
    "group": "",
    "url": "https://exams.ccu.edu.tw/p/403-1032-2830.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "甄試日期請見系所公告(校方系統需登入)",
        "tentative": true
      }
    ]
  },
  {
    "id": "ccu-32",
    "school": "中正大學",
    "dept": "資訊管理學系醫療資訊管理",
    "group": "",
    "url": "https://exams.ccu.edu.tw/p/403-1032-2830.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "甄試日期請見系所公告(校方系統需登入)",
        "tentative": true
      }
    ]
  },
  {
    "id": "ccu-33",
    "school": "中正大學",
    "dept": "國際財務金融管理碩士學位學程",
    "group": "",
    "url": "https://exams.ccu.edu.tw/p/403-1032-2830.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "甄試日期請見系所公告(校方系統需登入)",
        "tentative": true
      }
    ]
  },
  {
    "id": "ccu-34",
    "school": "中正大學",
    "dept": "金融科技碩士學位學程",
    "group": "",
    "url": "https://exams.ccu.edu.tw/p/403-1032-2830.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "甄試日期請見系所公告(校方系統需登入)",
        "tentative": true
      }
    ]
  },
  {
    "id": "ccu-35",
    "school": "中正大學",
    "dept": "法律學系",
    "group": "",
    "url": "https://exams.ccu.edu.tw/p/403-1032-2830.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "甄試日期請見系所公告(校方系統需登入)",
        "tentative": true
      }
    ]
  },
  {
    "id": "ccu-36",
    "school": "中正大學",
    "dept": "財經法律學系",
    "group": "",
    "url": "https://exams.ccu.edu.tw/p/403-1032-2830.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "甄試日期請見系所公告(校方系統需登入)",
        "tentative": true
      }
    ]
  },
  {
    "id": "ccu-37",
    "school": "中正大學",
    "dept": "成人及繼續教育學系",
    "group": "",
    "url": "https://exams.ccu.edu.tw/p/403-1032-2830.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "甄試日期請見系所公告(校方系統需登入)",
        "tentative": true
      }
    ]
  },
  {
    "id": "ccu-38",
    "school": "中正大學",
    "dept": "成人及繼續教育學系高齡者教育",
    "group": "",
    "url": "https://exams.ccu.edu.tw/p/403-1032-2830.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "甄試日期請見系所公告(校方系統需登入)",
        "tentative": true
      }
    ]
  },
  {
    "id": "ccu-39",
    "school": "中正大學",
    "dept": "學研究所教育學",
    "group": "",
    "url": "https://exams.ccu.edu.tw/p/403-1032-2830.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "甄試日期請見系所公告(校方系統需登入)",
        "tentative": true
      }
    ]
  },
  {
    "id": "ccu-40",
    "school": "中正大學",
    "dept": "教育學研究所課程與教學",
    "group": "",
    "url": "https://exams.ccu.edu.tw/p/403-1032-2830.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "甄試日期請見系所公告(校方系統需登入)",
        "tentative": true
      }
    ]
  },
  {
    "id": "ccu-41",
    "school": "中正大學",
    "dept": "犯罪防治學系",
    "group": "",
    "url": "https://exams.ccu.edu.tw/p/403-1032-2830.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "甄試日期請見系所公告(校方系統需登入)",
        "tentative": true
      }
    ]
  },
  {
    "id": "ccu-42",
    "school": "中正大學",
    "dept": "運動競技學系運動與休閒教育",
    "group": "",
    "url": "https://exams.ccu.edu.tw/p/403-1032-2830.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "甄試",
        "note": "甄試日期請見系所公告(校方系統需登入)",
        "tentative": true
      }
    ]
  },
  {
    "id": "nthu-0",
    "school": "清華大學",
    "dept": "數學系碩士班",
    "group": "",
    "url": "https://adms.site.nthu.edu.tw/p/412-1207-17260.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-07",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nthu-1",
    "school": "清華大學",
    "dept": "統計與數據科學研究所",
    "group": "",
    "url": "https://adms.site.nthu.edu.tw/p/412-1207-17260.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-14",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nthu-2",
    "school": "清華大學",
    "dept": "計算與建模科學研究所",
    "group": "",
    "url": "https://adms.site.nthu.edu.tw/p/412-1207-17260.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "複試日期請見系所公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "nthu-3",
    "school": "清華大學",
    "dept": "物理學系",
    "group": "",
    "url": "https://adms.site.nthu.edu.tw/p/412-1207-17260.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "複試日期請見系所公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "nthu-4",
    "school": "清華大學",
    "dept": "天文研究所",
    "group": "",
    "url": "https://adms.site.nthu.edu.tw/p/412-1207-17260.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-07",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nthu-5",
    "school": "清華大學",
    "dept": "化學系碩士班",
    "group": "",
    "url": "https://adms.site.nthu.edu.tw/p/412-1207-17260.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-15",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nthu-6",
    "school": "清華大學",
    "dept": "半導體研究學院",
    "group": "",
    "url": "https://adms.site.nthu.edu.tw/p/412-1207-17260.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-07",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nthu-7",
    "school": "清華大學",
    "dept": "生命科學暨醫學院",
    "group": "",
    "url": "https://adms.site.nthu.edu.tw/p/412-1207-17260.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-15",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nthu-8",
    "school": "清華大學",
    "dept": "醫學資訊碩士學位學程",
    "group": "",
    "url": "https://adms.site.nthu.edu.tw/p/412-1207-17260.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-08",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nthu-9",
    "school": "清華大學",
    "dept": "材料科學工程學系",
    "group": "",
    "url": "https://adms.site.nthu.edu.tw/p/412-1207-17260.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "複試日期請見系所公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "nthu-10",
    "school": "清華大學",
    "dept": "化學工程學系",
    "group": "",
    "url": "https://adms.site.nthu.edu.tw/p/412-1207-17260.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-10",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nthu-11",
    "school": "清華大學",
    "dept": "生物醫學工程研究所",
    "group": "",
    "url": "https://adms.site.nthu.edu.tw/p/412-1207-17260.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "複試日期請見系所公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "nthu-12",
    "school": "清華大學",
    "dept": "動力機械工程學系",
    "group": "",
    "url": "https://adms.site.nthu.edu.tw/p/412-1207-17260.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "複試日期請見系所公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "nthu-13",
    "school": "清華大學",
    "dept": "工業工程與工程管理學系",
    "group": "",
    "url": "https://adms.site.nthu.edu.tw/p/412-1207-17260.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-06",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nthu-14",
    "school": "清華大學",
    "dept": "奈米工程與微系統研究所",
    "group": "",
    "url": "https://adms.site.nthu.edu.tw/p/412-1207-17260.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-03",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nthu-15",
    "school": "清華大學",
    "dept": "太空工程研究所",
    "group": "",
    "url": "https://adms.site.nthu.edu.tw/p/412-1207-17260.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-03",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nthu-16",
    "school": "清華大學",
    "dept": "電機工程學系",
    "group": "",
    "url": "https://adms.site.nthu.edu.tw/p/412-1207-17260.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "複試日期請見系所公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "nthu-17",
    "school": "清華大學",
    "dept": "光電工程研究所",
    "group": "",
    "url": "https://adms.site.nthu.edu.tw/p/412-1207-17260.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "複試日期請見系所公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "nthu-18",
    "school": "清華大學",
    "dept": "電子工程研究所",
    "group": "",
    "url": "https://adms.site.nthu.edu.tw/p/412-1207-17260.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "複試日期請見系所公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "nthu-19",
    "school": "清華大學",
    "dept": "通訊工程研究所",
    "group": "",
    "url": "https://adms.site.nthu.edu.tw/p/412-1207-17260.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "複試日期請見系所公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "nthu-20",
    "school": "清華大學",
    "dept": "資訊工程學系",
    "group": "",
    "url": "https://adms.site.nthu.edu.tw/p/412-1207-17260.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "複試日期請見系所公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "nthu-21",
    "school": "清華大學",
    "dept": "資訊工程學系",
    "group": "",
    "url": "https://adms.site.nthu.edu.tw/p/412-1207-17260.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-14",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nthu-22",
    "school": "清華大學",
    "dept": "資訊系統與應用研究所",
    "group": "",
    "url": "https://adms.site.nthu.edu.tw/p/412-1207-17260.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-14",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nthu-23",
    "school": "清華大學",
    "dept": "資訊安全研究所",
    "group": "",
    "url": "https://adms.site.nthu.edu.tw/p/412-1207-17260.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-10",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nthu-24",
    "school": "清華大學",
    "dept": "分析與環境科學研究所",
    "group": "",
    "url": "https://adms.site.nthu.edu.tw/p/412-1207-17260.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-07",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nthu-25",
    "school": "清華大學",
    "dept": "工程與系統科學系",
    "group": "",
    "url": "https://adms.site.nthu.edu.tw/p/412-1207-17260.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-15",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nthu-26",
    "school": "清華大學",
    "dept": "工程與系統科學系",
    "group": "",
    "url": "https://adms.site.nthu.edu.tw/p/412-1207-17260.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "複試日期請見系所公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "nthu-27",
    "school": "清華大學",
    "dept": "核子工程與科學研究所",
    "group": "",
    "url": "https://adms.site.nthu.edu.tw/p/412-1207-17260.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-08",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nthu-28",
    "school": "清華大學",
    "dept": "原子科學院",
    "group": "",
    "url": "https://adms.site.nthu.edu.tw/p/412-1207-17260.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-08",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nthu-29",
    "school": "清華大學",
    "dept": "歷史研究所",
    "group": "",
    "url": "https://adms.site.nthu.edu.tw/p/412-1207-17260.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-05",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nthu-30",
    "school": "清華大學",
    "dept": "語言學研究所",
    "group": "",
    "url": "https://adms.site.nthu.edu.tw/p/412-1207-17260.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-07",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nthu-31",
    "school": "清華大學",
    "dept": "台灣文學研究所",
    "group": "",
    "url": "https://adms.site.nthu.edu.tw/p/412-1207-17260.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-13",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nthu-32",
    "school": "清華大學",
    "dept": "中國文學系",
    "group": "",
    "url": "https://adms.site.nthu.edu.tw/p/412-1207-17260.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-07",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nthu-33",
    "school": "清華大學",
    "dept": "外國語文學系",
    "group": "",
    "url": "https://adms.site.nthu.edu.tw/p/412-1207-17260.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-05",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nthu-34",
    "school": "清華大學",
    "dept": "哲學研究所",
    "group": "",
    "url": "https://adms.site.nthu.edu.tw/p/412-1207-17260.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-01",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nthu-35",
    "school": "清華大學",
    "dept": "社會學研究所",
    "group": "",
    "url": "https://adms.site.nthu.edu.tw/p/412-1207-17260.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-07",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nthu-36",
    "school": "清華大學",
    "dept": "人類學研究所",
    "group": "",
    "url": "https://adms.site.nthu.edu.tw/p/412-1207-17260.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-14",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nthu-37",
    "school": "清華大學",
    "dept": "亞際文化研究國際碩士學位學程",
    "group": "",
    "url": "https://adms.site.nthu.edu.tw/p/412-1207-17260.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-10",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nthu-38",
    "school": "清華大學",
    "dept": "華文文學研究所",
    "group": "",
    "url": "https://adms.site.nthu.edu.tw/p/412-1207-17260.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-08",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nthu-39",
    "school": "清華大學",
    "dept": "華語文碩士學位學程",
    "group": "",
    "url": "https://adms.site.nthu.edu.tw/p/412-1207-17260.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-03",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nthu-40",
    "school": "清華大學",
    "dept": "經濟學系",
    "group": "",
    "url": "https://adms.site.nthu.edu.tw/p/412-1207-17260.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-06",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nthu-41",
    "school": "清華大學",
    "dept": "科技法律研究所",
    "group": "",
    "url": "https://adms.site.nthu.edu.tw/p/412-1207-17260.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-13",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nthu-42",
    "school": "清華大學",
    "dept": "科技法律研究所",
    "group": "",
    "url": "https://adms.site.nthu.edu.tw/p/412-1207-17260.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-21",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nthu-43",
    "school": "清華大學",
    "dept": "科技管理研究所",
    "group": "",
    "url": "https://adms.site.nthu.edu.tw/p/412-1207-17260.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-10",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nthu-44",
    "school": "清華大學",
    "dept": "服務科學研究所",
    "group": "",
    "url": "https://adms.site.nthu.edu.tw/p/412-1207-17260.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-13",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nthu-45",
    "school": "清華大學",
    "dept": "計量財務金融學系",
    "group": "",
    "url": "https://adms.site.nthu.edu.tw/p/412-1207-17260.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-13",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nthu-46",
    "school": "清華大學",
    "dept": "國際專業管理碩士班",
    "group": "",
    "url": "https://adms.site.nthu.edu.tw/p/412-1207-17260.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-10",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nthu-47",
    "school": "清華大學",
    "dept": "學習科學與科技研究所",
    "group": "",
    "url": "https://adms.site.nthu.edu.tw/p/412-1207-17260.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-14",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nthu-48",
    "school": "清華大學",
    "dept": "教育與學習科技學系",
    "group": "",
    "url": "https://adms.site.nthu.edu.tw/p/412-1207-17260.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-07",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nthu-49",
    "school": "清華大學",
    "dept": "教育與學習科技學系",
    "group": "",
    "url": "https://adms.site.nthu.edu.tw/p/412-1207-17260.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-08",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nthu-50",
    "school": "清華大學",
    "dept": "幼兒教育學系",
    "group": "",
    "url": "https://adms.site.nthu.edu.tw/p/412-1207-17260.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-07",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nthu-51",
    "school": "清華大學",
    "dept": "特殊教育學系",
    "group": "",
    "url": "https://adms.site.nthu.edu.tw/p/412-1207-17260.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-14",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nthu-52",
    "school": "清華大學",
    "dept": "教育心理與諮商學系",
    "group": "",
    "url": "https://adms.site.nthu.edu.tw/p/412-1207-17260.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-07",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nthu-53",
    "school": "清華大學",
    "dept": "英語教學系",
    "group": "",
    "url": "https://adms.site.nthu.edu.tw/p/412-1207-17260.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-07",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nthu-54",
    "school": "清華大學",
    "dept": "環境與文化資源學系",
    "group": "",
    "url": "https://adms.site.nthu.edu.tw/p/412-1207-17260.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-07",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nthu-55",
    "school": "清華大學",
    "dept": "臺灣語言研究與教學研究所",
    "group": "",
    "url": "https://adms.site.nthu.edu.tw/p/412-1207-17260.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-14",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nthu-56",
    "school": "清華大學",
    "dept": "數理教育研究所",
    "group": "",
    "url": "https://adms.site.nthu.edu.tw/p/412-1207-17260.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-07",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nthu-57",
    "school": "清華大學",
    "dept": "運動科學系",
    "group": "",
    "url": "https://adms.site.nthu.edu.tw/p/412-1207-17260.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-14",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nthu-58",
    "school": "清華大學",
    "dept": "藝術與設計學系",
    "group": "",
    "url": "https://adms.site.nthu.edu.tw/p/412-1207-17260.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-07",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nthu-59",
    "school": "清華大學",
    "dept": "科技藝術研究所",
    "group": "",
    "url": "https://adms.site.nthu.edu.tw/p/412-1207-17260.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-14",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nthu-60",
    "school": "清華大學",
    "dept": "跨院國際碩士學位學程",
    "group": "",
    "url": "https://adms.site.nthu.edu.tw/p/412-1207-17260.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-03",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nthu-61",
    "school": "清華大學",
    "dept": "台北政經學院",
    "group": "",
    "url": "https://adms.site.nthu.edu.tw/p/412-1207-17260.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "複試日期請見系所公告",
        "tentative": true
      }
    ]
  },
  {
    "id": "nthu-62",
    "school": "清華大學",
    "dept": "永續科技碩士學位學程",
    "group": "",
    "url": "https://adms.site.nthu.edu.tw/p/412-1207-17260.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-03",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  },
  {
    "id": "nthu-63",
    "school": "清華大學",
    "dept": "永續經營與氣候政策研究所",
    "group": "",
    "url": "https://adms.site.nthu.edu.tw/p/412-1207-17260.php?Lang=zh-tw",
    "reg": null,
    "exams": [
      {
        "date": "2025-11-05",
        "start": "",
        "end": "",
        "type": "複試",
        "note": "",
        "tentative": false
      }
    ]
  }
];
