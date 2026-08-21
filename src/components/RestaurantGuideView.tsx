import React, { useState, useMemo } from 'react';
import { ALL_RESTAURANTS } from '../data/italyData';
import { RestaurantStars } from './StarRating';
import { Utensils, MapPin, ExternalLink, Search, AlertCircle, IceCream, Pizza, ShoppingBag, Coffee } from 'lucide-react';

export const RestaurantGuideView: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');

  const cities = useMemo(() => {
    const list = Array.from(new Set(ALL_RESTAURANTS.map((r) => r.city)));
    return ['all', ...list];
  }, []);

  const mealTypes = ['all', '午餐', '晚餐', '冰淇淋', '甜點/點心', '特色小吃', '超市採買'];

  const filteredRestaurants = useMemo(() => {
    return ALL_RESTAURANTS.filter((item) => {
      const q = searchQuery.toLowerCase().trim();
      const matchQuery =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.city.toLowerCase().includes(q) ||
        (item.note && item.note.toLowerCase().includes(q)) ||
        `day ${item.dayNum}`.includes(q);

      const matchCity = selectedCity === 'all' || item.city === selectedCity;
      const matchType = selectedType === 'all' || item.type === selectedType;

      return matchQuery && matchCity && matchType;
    });
  }, [searchQuery, selectedCity, selectedType]);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case '冰淇淋':
        return <IceCream className="w-3.5 h-3.5 text-pink-600" />;
      case '晚餐':
      case '午餐':
        return <Utensils className="w-3.5 h-3.5 text-amber-700" />;
      case '甜點/點心':
        return <Coffee className="w-3.5 h-3.5 text-amber-800" />;
      case '超市採買':
        return <ShoppingBag className="w-3.5 h-3.5 text-emerald-700" />;
      default:
        return <Pizza className="w-3.5 h-3.5 text-amber-700" />;
    }
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-[#4a2c1d] via-[#5c3523] to-[#4a2c1d] text-amber-50 p-6 sm:p-8 rounded-3xl border border-amber-800/40 shadow-md relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-amber-500/20 text-amber-300 text-xs font-bold rounded-full border border-amber-500/30 mb-3">
              <Utensils className="w-3.5 h-3.5 text-amber-400" />
              <span>義大利 13 日美饌地圖彙整</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              行程美食與餐廳地圖指南 (含 Google Maps 一鍵連動)
            </h2>
            <p className="mt-1 text-amber-200/90 text-xs sm:text-sm max-w-2xl leading-relaxed">
              完整收錄 13 日行程中所有指定午餐、晚餐、人氣 Gelato 冰淇淋、排隊帕尼尼與超市採買點，點擊直達 Google Maps 查看導航與地圖定位！
            </p>
          </div>

          <div className="bg-[#351e14]/90 p-4 rounded-2xl border border-amber-800/50 shrink-0 text-center sm:text-left">
            <div className="text-xs text-amber-200/70 font-bold uppercase tracking-wider">
              精選美饌據點總數
            </div>
            <div className="text-2xl sm:text-3xl font-black text-amber-400 font-mono mt-0.5">
              {ALL_RESTAURANTS.length} <span className="text-xs text-amber-200/80 font-normal">間店家</span>
            </div>
          </div>
        </div>
      </div>

      {/* Control & Filter Bar */}
      <div className="bg-white p-4 sm:p-6 rounded-3xl border border-stone-200/90 shadow-xs space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              id="search-restaurant-input"
              type="text"
              placeholder="搜尋餐廳名稱、城市或關鍵字 (例如: Zà Zà, Suso, 威尼斯)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-stone-50 border border-stone-200 rounded-2xl text-xs sm:text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-700"
            />
          </div>

          {/* City Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 lg:pb-0">
            <span className="text-xs font-bold text-stone-400 shrink-0 mr-1">城市區域：</span>
            {cities.map((city) => (
              <button
                key={city}
                onClick={() => setSelectedCity(city)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  selectedCity === city
                    ? 'bg-amber-800 text-stone-100 shadow-sm'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                {city === 'all' ? '全部城市' : city}
              </button>
            ))}
          </div>
        </div>

        {/* Meal Type Filter */}
        <div className="flex items-center gap-2 overflow-x-auto pt-2 border-t border-stone-100">
          <span className="text-xs font-bold text-stone-400 shrink-0 mr-1">美饌類別：</span>
          {mealTypes.map((t) => (
            <button
              key={t}
              onClick={() => setSelectedType(t)}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                selectedType === t
                  ? 'bg-amber-100 text-amber-900 border border-amber-300'
                  : 'bg-stone-50 text-stone-600 border border-stone-200 hover:bg-stone-100'
              }`}
            >
              {t === 'all' ? '全部類別' : t}
            </button>
          ))}
        </div>
      </div>

      {/* Restaurant Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredRestaurants.map((res) => (
          <div
            key={res.id}
            className="bg-white rounded-2xl border border-stone-200/90 p-5 shadow-xs flex flex-col justify-between hover:shadow-md hover:border-amber-300 transition-all group"
          >
            <div>
              {/* Header Badges */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="bg-amber-800 text-white font-extrabold px-2.5 py-0.5 rounded-lg text-[11px] tracking-wide">
                  Day {res.dayNum}
                </span>

                <div className="flex items-center gap-1.5">
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-md bg-stone-100 text-stone-700 border border-stone-200">
                    {getTypeIcon(res.type)}
                    <span>{res.type}</span>
                  </span>

                  <span className="text-[11px] font-bold text-amber-900 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200/80">
                    {res.city}
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-base font-black text-stone-900 tracking-tight group-hover:text-amber-800 transition-colors flex items-center gap-1.5">
                <span>{res.name}</span>
              </h3>

              {/* 推薦指數 — 未評分的補給點（超市、中央市場等）不顯示 */}
              <RestaurantStars name={res.name} size="md" className="mt-1.5" />

              {/* Note / Description */}
              {res.note && (
                <p className="mt-2 text-xs text-stone-600 leading-relaxed font-sans">
                  {res.note}
                </p>
              )}

              {/* Reservation Required Warning */}
              {res.isReservationRequired && (
                <div className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-bold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200">
                  <AlertCircle className="w-3.5 h-3.5 text-amber-700" />
                  <span>⚠️ 建議提前預約座位</span>
                </div>
              )}
            </div>

            {/* Direct Google Maps Action Button */}
            <div className="mt-5 pt-3 border-t border-stone-100">
              <a
                href={res.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#4a2c1d] hover:bg-amber-800 text-amber-50 rounded-xl text-xs font-bold transition-all cursor-pointer shadow-xs group-hover:shadow-sm"
              >
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>開啟 Google Maps 導航與地圖</span>
                <ExternalLink className="w-3 h-3 text-stone-400 group-hover:text-amber-200 ml-auto" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {filteredRestaurants.length === 0 && (
        <div className="text-center py-16 bg-white rounded-3xl border border-stone-200 p-8">
          <p className="text-stone-500 font-medium text-sm">找不到符合條件的餐廳店家，請嘗試切換其他篩選或關鍵字。</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCity('all');
              setSelectedType('all');
            }}
            className="mt-4 px-4 py-2 bg-amber-800 text-white rounded-xl text-xs font-bold cursor-pointer"
          >
            重置所有搜尋條件
          </button>
        </div>
      )}
    </div>
  );
};
