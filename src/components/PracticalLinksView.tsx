import React, { useState, useMemo } from 'react';
import { PRACTICAL_LINKS } from '../data/italyData';
import { ExternalLink, ShieldAlert, Check, Copy } from 'lucide-react';

/**
 * 分類的顯示名稱。篩選鈕本身由資料中實際出現的分類推導，
 * 因此新增一筆連結不需要回來改這個元件；此處查無對應時直接顯示原始分類名。
 */
const CATEGORY_LABELS: Record<string, string> = {
  Parking: '🅿️ 停車預約',
  CableCar: '🚡 纜車',
  Webcam: '📷 即時鏡頭',
  Pass: '🎟️ 通行證與套票',
  Museum: '🏛️ 博物館門票',
  Transport: '🚆 交通',
  Reference: '📖 參考攻略',
};

export const PracticalLinksView: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // 依資料實際出現的分類建立篩選鈕，順序沿用 CATEGORY_LABELS，未知分類排在最後
  const categories = useMemo(() => {
    const order = Object.keys(CATEGORY_LABELS);
    const present = Array.from(new Set(PRACTICAL_LINKS.map((l) => l.category)));
    present.sort((a, b) => {
      const ia = order.indexOf(a);
      const ib = order.indexOf(b);
      return (ia === -1 ? order.length : ia) - (ib === -1 ? order.length : ib);
    });
    return [
      { id: 'All', label: '全部連結', count: PRACTICAL_LINKS.length },
      ...present.map((id) => ({
        id,
        label: CATEGORY_LABELS[id] ?? id,
        count: PRACTICAL_LINKS.filter((l) => l.category === id).length,
      })),
    ];
  }, []);

  const filteredLinks = useMemo(
    () =>
      selectedCategory === 'All'
        ? PRACTICAL_LINKS
        : PRACTICAL_LINKS.filter((l) => l.category === selectedCategory),
    [selectedCategory]
  );

  const handleCopyLink = (id: string, url: string) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Title & Banner */}
      <div className="bg-gradient-to-r from-[#4a2c1d] via-[#5c3523] to-[#4a2c1d] text-amber-50 p-6 sm:p-8 rounded-3xl shadow-md border border-amber-800/40 relative overflow-hidden">
        <div className="relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 text-amber-300 text-xs font-bold px-3 py-1 bg-amber-500/20 rounded-full border border-amber-500/30">
            <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
            <span>官方預約、即時鏡頭與通行證樞紐</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight">
            實用連結與預約入口中心
          </h2>
          <p className="text-amber-200/90 text-xs sm:text-sm max-w-2xl leading-relaxed">
            收錄休斯高原 P2 預約、Selva 換卡窗口、Sassolevante Webcam與熱門預約門票通道。
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 pt-3 border-t border-amber-800/40">
            {categories.map((cat) => (
              <button
                key={cat.id}
                id={`link-cat-${cat.id}`}
                onClick={() => setSelectedCategory(cat.id)}
                aria-pressed={selectedCategory === cat.id}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  selectedCategory === cat.id
                    ? 'bg-amber-600 text-white shadow-md shadow-black/30'
                    : 'bg-[#351e14]/70 text-amber-200/80 hover:bg-amber-900/50 hover:text-amber-50'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`font-mono tabular-nums text-[10px] ${
                    selectedCategory === cat.id ? 'text-amber-100/90' : 'text-amber-200/50'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Links Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredLinks.map((link) => (
          <div
            key={link.id}
            id={`link-card-${link.id}`}
            className="bg-white p-6 rounded-3xl border border-stone-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-bold text-stone-900 text-base sm:text-lg flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-700 shrink-0" />
                  {link.title}
                </h3>
                <span className="text-[10px] font-extrabold px-2.5 py-1 rounded-md bg-stone-100 text-stone-600 tracking-wide shrink-0">
                  {CATEGORY_LABELS[link.category] ?? link.category}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {link.description}
              </p>

              {link.importantRule && (
                <div className="p-3 rounded-xl bg-amber-50/80 border border-amber-200/80 text-xs font-medium text-amber-950 flex items-start gap-2">
                  <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <span>{link.importantRule}</span>
                </div>
              )}
            </div>

            <div className="pt-3 border-t border-stone-100 flex items-center justify-between gap-2">
              <button
                id={`copy-link-${link.id}`}
                onClick={() => handleCopyLink(link.id, link.url)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-stone-100 text-stone-700 text-xs font-bold hover:bg-stone-200 transition-colors cursor-pointer"
              >
                {copiedId === link.id ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-amber-700" />
                    <span className="text-amber-800">已複製網址</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>複製連結</span>
                  </>
                )}
              </button>

              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-800 text-white text-xs font-bold hover:bg-amber-900 transition-colors shadow-xs"
              >
                <span>開啟官方網站</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
