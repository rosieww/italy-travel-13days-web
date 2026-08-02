import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;

  app.use(express.json());
  app.use("/image", express.static(path.join(process.cwd(), "public/image")));
  app.use("/image", express.static(path.join(process.cwd(), "image")));

  // API Routes
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // AI Assistant endpoint for Dolomites Travel Q&A
  app.post("/api/ai-chat", async (req, res) => {
    try {
      const { message, contextDay } = req.body;
      const apiKey = process.env.GEMINI_API_KEY;

      if (!apiKey) {
        return res.status(200).json({
          reply: "⚠️ 系統未偵測到 GEMINI_API_KEY 環境變數。請在 AI Studio 專案設定中提供 Gemini API Key 以啟用多洛米蒂 AI 隨行智囊服務。",
        });
      }

      const ai = new GoogleGenAI({ apiKey });

      const prompt = `你是一位精通義大利全境自駕與多洛米蒂 (Dolomites) 健行的專業旅遊嚮導與隨行智囊。
使用者正在參考「2026 義大利 14 日全景典藏攻略（含多洛米蒂 5 日精美精確時間表）」。

【14 日行程架構】：
- 6/17~6/18: BR095 飛抵米蘭 ➔ SIXT 08:30 取車 ➔ 卡雷扎湖 ➔ Selva (17:00 前至 Ciampinoi 換 Gardena Card)
- 6/19: 休斯高原 (08:30 前停 P2) ➔ 刀鋒山 Seceda (17:30 關閉) ➔ Panorama 看夕陽 (帶頭燈厚外套)
- 6/20: 富內斯山谷聖馬達萊娜 ➔ 長石山 Sassolungo
- 6/21: 06:30 前進 Auronzo 停車場 ➔ Cadini di Misurina 魔戒線路 ➔ 三尖峰環山健行 ➔ 18:29 離場 ➔ La Tavernetta 晚餐
- 6/22: 07:00 退房 ➔ 布萊埃斯湖 (Lago di Braies) ➔ Vista Panoramica 遠眺 ➔ 威尼斯還車
- 6/23~6/24: 威尼斯 (聖馬可、貢多拉、彩色島、嘆息橋)
- 6/25~6/26: 佛羅倫斯 (烏菲茲預約 13:45, 學院美術館預約 17:15, 聖母百花, 百年三明治, 比薩斜塔半日遊)
- 6/27: 米蘭 (達文西最後的晚餐預約 11:15, 米蘭大教堂預約 15:30)
- 6/28: 科莫湖 (瓦倫納, 貝拉焦, 快船至科莫)
- 6/29: 米蘭 / Serravalle Designer Outlet 購物
- 6/30~7/1: 07:20 前往機場 ➔ BR096 11:15 米蘭起飛 ➔ 7/1 06:05 抵達桃園

用戶目前的上下文：${contextDay ? `正在檢視 Day ${contextDay}` : "總覽/自由提問"}
用戶提問：${message}

請以繁體中文 (Traditional Chinese) 回答，提供精準、有條理、實用且親切的建議（包含時間管制提醒、交通指南、預約與換卡流程、美食與裝備建議等）。字數控制在 300-500 字內，條列清晰。`;

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
      });

      const replyText = response.text || "抱歉，目前無法取得回應，請稍後再試。";
      res.json({ reply: replyText });
    } catch (error: any) {
      console.error("Gemini API Error:", error);
      res.status(500).json({
        error: "處理 AI 請求時發生錯誤",
        details: error?.message || "Unknown error",
      });
    }
  });

  // Vite development middleware or static production serving
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`🏔️ Dolomites Travel Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
