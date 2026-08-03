import React, { useState, useMemo } from 'react';
import { SPOTS_INFO } from '../data/italyData';
import { Search, Sparkles, ExternalLink, Camera, Video, AlertCircle } from 'lucide-react';

export const SpotLightView: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'All', label: '全部景點' },
    { id: 'Dolomites', label: '🏔️ 多洛米蒂 (Dolomites)' },
    { id: 'Venice', label: '🛶 威尼斯 (Venice)' },
    { id: 'Florence', label: '🎨 佛羅倫斯 (Florence)' },
    { id: 'Milan', label: '🏰 米蘭 (Milan)' },
  ];

  const filteredSpots = useMemo(() => {
    return SPOTS_INFO.filter((spot) => {
      const matchesCategory = selectedCategory === 'All' || spot.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCategory;

      const matchesQuery =
        spot.name.toLowerCase().includes(q) ||
        spot.englishName.toLowerCase().includes(q) ||
        spot.description.toLowerCase().includes(q) ||
        spot.highlights.some((h) => h.toLowerCase().includes(q));

      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

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
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-amber-600 text-white shadow-md shadow-black/30'
                  : 'bg-[#351e14]/70 text-amber-200/80 hover:bg-amber-900/50 hover:text-amber-50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Spots Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredSpots.map((spot) => (
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
                {spot.practicalTips && (
                  <div className="p-3.5 rounded-2xl bg-amber-50/80 border border-amber-200/80 text-amber-950 text-xs leading-relaxed">
                    <div className="font-bold mb-1 flex items-center gap-1.5">
                      <AlertCircle className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                      <span>實戰提醒：</span>
                    </div>
                    {spot.practicalTips}
                  </div>
                )}
              </div>
            </div>

            {/* Card Footer Actions */}
            <div className="p-4 px-6 bg-stone-50 border-t border-stone-100 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
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
    </div>
  );
};
