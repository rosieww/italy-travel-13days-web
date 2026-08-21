import React, { useState, useMemo } from 'react';
import { SPOTS_INFO } from '../data/italyData';
import { Search, Sparkles, ExternalLink, Camera, Video, AlertCircle, MapPin } from 'lucide-react';

/**
 * 分類的顯示名稱。篩選鈕本身由資料中實際出現的分類推導，
 * 因此新增景點不需要回來改這個元件；此處查無對應時直接顯示原始分類名。
 */
const CATEGORY_LABELS: Record<string, string> = {
  Dolomites: '🏔️ 多洛米蒂 (Dolomites)',
  Venice: '🛶 威尼斯 (Venice)',
  Florence: '🎨 佛羅倫斯 (Florence)',
  Pisa: '🗼 比薩 (Pisa)',
  Milan: '🏰 米蘭 (Milan)',
  LakeComo: '⛵ 科莫湖 (Lake Como)',
};

export const SpotLightView: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // 關鍵字先過濾一次，分類鈕的數量才會反映目前搜尋結果，而非永遠顯示總數
  const searchMatched = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return SPOTS_INFO;
    return SPOTS_INFO.filter(
      (spot) =>
        spot.name.toLowerCase().includes(q) ||
        spot.englishName.toLowerCase().includes(q) ||
        spot.description.toLowerCase().includes(q) ||
        spot.highlights.some((h) => h.toLowerCase().includes(q))
    );
  }, [searchQuery]);

  // 依資料實際出現的分類建立篩選鈕，順序沿用 CATEGORY_LABELS，未知分類排在最後
  const categories = useMemo(() => {
    const order = Object.keys(CATEGORY_LABELS);
    const present = Array.from(new Set(SPOTS_INFO.map((s) => s.category)));
    present.sort((a, b) => {
      const ia = order.indexOf(a);
      const ib = order.indexOf(b);
      return (ia === -1 ? order.length : ia) - (ib === -1 ? order.length : ib);
    });
    return [
      { id: 'All', label: '全部景點' },
      ...present.map((id) => ({ id, label: CATEGORY_LABELS[id] ?? id })),
    ];
  }, []);

  const countFor = (categoryId: string) =>
    categoryId === 'All'
      ? searchMatched.length
      : searchMatched.filter((s) => s.category === categoryId).length;

  const filteredSpots = useMemo(
    () =>
      selectedCategory === 'All'
        ? searchMatched
        : searchMatched.filter((spot) => spot.category === selectedCategory),
    [searchMatched, selectedCategory]
  );

  // 依地區分組排列，順序與篩選鈕一致；未列入標籤表的地區排在最後
  const groupedByRegion = useMemo(() => {
    const order = Object.keys(CATEGORY_LABELS);
    const regions = Array.from(new Set(filteredSpots.map((s) => s.category)));
    regions.sort((a, b) => {
      const ia = order.indexOf(a);
      const ib = order.indexOf(b);
      return (ia === -1 ? order.length : ia) - (ib === -1 ? order.length : ib);
    });
    return regions.map((region) => ({
      region,
      label: CATEGORY_LABELS[region] ?? region,
      spots: filteredSpots.filter((s) => s.category === region),
    }));
  }, [filteredSpots]);

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Title & Filter Header */}
      <div className="bg-gradient-to-r from-[#4a2c1d] via-[#5c3523] to-[#4a2c1d] text-amber-50 p-6 sm:p-8 rounded-3xl border border-amber-800/40 shadow-md space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-amber-300 text-xs font-bold px-3 py-1 bg-amber-500/20 border border-amber-500/30 rounded-full mb-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>頂級意境與地質人文勝景</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-amber-50 tracking-tight">
              精選景點深度全解
            </h2>
            <p className="text-amber-200/90 text-xs sm:text-sm mt-1">
              涵蓋休斯高原、刀鋒山、三尖峰，以及可選的富內斯山谷、聖馬達萊娜、威尼斯與佛羅倫斯深度導覽
            </p>
          </div>

          {/* Search Input */}
          <div className="relative min-w-[260px] sm:w-80">
            <Search className="w-4 h-4 text-amber-300/70 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              id="search-spots-input"
              type="text"
              placeholder="搜尋景點名稱、英譯或特色 (如: 刀鋒山)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-[#351e14]/80 border border-amber-800/50 rounded-2xl text-xs sm:text-sm text-amber-50 placeholder-amber-200/50 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-amber-800/40">
          {categories.map((cat) => (
            <button
              key={cat.id}
              id={`spot-cat-${cat.id}`}
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
                {countFor(cat.id)}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Spots grouped by region */}
      {groupedByRegion.map((group) => (
        <section key={group.region} className="space-y-4">
          <h3 className="flex items-baseline gap-2 text-base sm:text-lg font-black text-stone-900 pb-2 border-b-2 border-amber-800/20">
            <span>{group.label}</span>
            <span className="font-mono tabular-nums text-xs font-bold text-stone-400">
              {group.spots.length} 個景點
            </span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {group.spots.map((spot) => (
          <div
            key={spot.id}
            id={`spot-card-${spot.id}`}
            className="bg-white rounded-3xl border border-stone-200/90 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Card Header (No image) */}
              <div className="p-6 pb-4 border-b border-stone-100 bg-amber-50/40">
                <span className="text-[11px] font-bold text-amber-800 uppercase tracking-wider bg-amber-100/90 px-2.5 py-0.5 rounded-md border border-amber-200/80 inline-block">
                  {spot.englishName}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-stone-900 mt-2">
                  {spot.name}
                </h3>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4">
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {spot.description}
                </p>

                {/* Key Highlights */}
                <div>
                  <div className="text-xs font-bold text-stone-900 mb-2 flex items-center gap-1.5">
                    <Camera className="w-3.5 h-3.5 text-amber-700" />
                    <span>核心看點與特色：</span>
                  </div>
                  <ul className="space-y-1.5">
                    {spot.highlights.map((hl, hIdx) => (
                      <li key={hIdx} className="text-xs text-stone-700 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-1.5 shrink-0" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Practical Tips */}
                {spot.practicalTips && spot.practicalTips.length > 0 && (
                  <div className="p-3.5 rounded-2xl bg-amber-50/80 border border-amber-200/80 text-amber-950 text-xs leading-relaxed">
                    <div className="font-bold mb-1 flex items-center gap-1.5">
                      <AlertCircle className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                      <span>實戰提醒：</span>
                    </div>
                    {spot.practicalTips.length === 1 ? (
                      <p>{spot.practicalTips[0]}</p>
                    ) : (
                      <ul className="list-disc pl-4 space-y-1.5 marker:text-amber-700">
                        {spot.practicalTips.map((tip, i) => (
                          <li key={i}>{tip}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Card Footer Actions */}
            <div className="p-4 px-6 bg-stone-50 border-t border-stone-100 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2">
                {spot.mapPoints?.map((point) => (
                  <a
                    key={point.url}
                    href={point.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white text-amber-900 border border-amber-200 text-xs font-bold hover:bg-amber-50 transition-colors"
                  >
                    <MapPin className="w-3.5 h-3.5 text-amber-700" />
                    <span>{point.label}</span>
                  </a>
                ))}
                {spot.webcamUrl && (
                  <a
                    href={spot.webcamUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white text-amber-900 border border-amber-200 text-xs font-bold hover:bg-amber-50 transition-colors"
                  >
                    <Video className="w-3.5 h-3.5 text-amber-700" />
                    <span>即時影像 Webcam</span>
                  </a>
                )}
                {spot.reservationUrl && (
                  <a
                    href={spot.reservationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-800 text-white text-xs font-bold hover:bg-amber-900 transition-colors shadow-xs"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>官方預約通道</span>
                  </a>
                )}
              </div>
            </div>
          </div>
            ))}
          </div>
        </section>
      ))}

      {filteredSpots.length === 0 && (
        <div className="text-center py-16 bg-white rounded-3xl border border-stone-200 p-8">
          <p className="text-stone-500 font-medium text-sm">
            找不到符合條件的景點，請嘗試切換其他分類或關鍵字。
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All');
            }}
            className="mt-4 px-4 py-2 bg-amber-800 text-white rounded-xl text-xs font-bold cursor-pointer hover:bg-amber-900 transition-colors"
          >
            重置所有搜尋條件
          </button>
        </div>
      )}
    </div>
  );
};
