# 2026 義大利 13 日經典行程與美食地圖指南

一份可直接在手機上瀏覽的義大利自助行程表。涵蓋米蘭、多洛米蒂、威尼斯、佛羅倫斯、比薩與科莫湖，每個景點與餐廳都附 Google Maps 一鍵導航。

**🔗 線上瀏覽：<https://rosieww.github.io/italy-travel-13days-web/>**

---

## 功能

網站分成四個分頁：

| 分頁 | 內容 |
| --- | --- |
| **每日行程** | 13 天逐日時間軸，含交通、住宿、關鍵時間管制提醒，以及橫跨全程的總覽表 |
| **亮點景點** | 8 個重點景點的攝影建議、順光時段、纜車與交通細節 |
| **美食指南** | 46 間餐廳與店家，依日期與城市分類，標示需訂位者 |
| **實用連結** | 停車預約、通行證等官方頁面與其使用規則 |

## 內容規模

| 項目 | 數量 |
| --- | --- |
| 行程天數 | 13 |
| 住宿 | 13 |
| 景點介紹 | 8（多洛米蒂 5，威尼斯 / 佛羅倫斯 / 米蘭各 1） |
| 餐廳與店家 | 46（晚餐 17、午餐 14、冰淇淋 7、超市採買 3、甜點 3、小吃 2） |
| 需訂位標記 | 4 |
| Google Maps 連結 | 63 |

## 技術

React 19 · TypeScript · Vite 6 · Tailwind CSS 4 · Express 4 · lucide-react

所有行程資料集中在 [`src/data/italyData.ts`](src/data/italyData.ts)，型別定義於 [`src/types.ts`](src/types.ts)。要修改行程內容，改這一個檔案即可，不需要動元件。

## 快速開始

需求：Node.js 20 以上（開發環境使用 v24）。

```bash
npm install
npm run dev
```

開啟 <http://localhost:3000>。要換埠號用 `PORT=3100 npm run dev`。

## 可用指令

| 指令 | 說明 |
| --- | --- |
| `npm run dev` | 開發模式，Express 掛載 Vite middleware |
| `npm run build` | 建置前端至 `dist/`，並打包伺服器為 `dist/server.cjs` |
| `npm start` | 以 production 模式執行建置後的伺服器 |
| `npm run lint` | TypeScript 型別檢查（`tsc --noEmit`） |

## 專案結構

```
src/
  components/          四個分頁的畫面與共用元件
  data/italyData.ts    所有行程、景點、餐廳、連結資料
  types.ts             資料型別定義
  assetUrl.ts          對齊 Vite base 的資源路徑解析
public/image/          行程相片（1600px WebP）
server.ts              Express 伺服器
.github/workflows/     GitHub Pages 自動部署
```

## 部署

推送到 `main` 後，GitHub Actions 會自動建置並發布到 GitHub Pages，不需要手動操作。

由於 Pages 專案站台位於子路徑，建置時需指定 base：

```bash
BASE_PATH=/italy-travel-13days-web/ npx vite build
```

程式碼中的 `public/` 資源一律透過 `assetUrl()` 解析，否則在子路徑下會 404。

## 備註

- **前端是純靜態的**，沒有任何 API 呼叫，因此可直接託管於 GitHub Pages 等靜態空間。
- `server.ts` 保留了一個 Gemini 問答端點 `/api/ai-chat`（源自 AI Studio 樣板），但**目前前端並未使用**。它需要 `GEMINI_API_KEY` 環境變數；專案沒有載入 `dotenv`，因此 `.env` 檔不會被讀取，須直接設定於環境變數。
- 相片皆為 1600px WebP（原始相機檔約 78MB，壓縮後約 1.4MB）。
