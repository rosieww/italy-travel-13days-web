import React, { useState, useMemo } from 'react';
import { ITALY_12_DAYS } from '../data/italyData';
import { Master14DayTable } from './Master14DayTable';
import { assetUrl } from '../assetUrl';
import { MapPin, ShieldAlert, Sparkles, Clock, Utensils, Hotel, Navigation, Mountain, ArrowUpRight, ExternalLink } from 'lucide-react';

export const ItineraryView: React.FC = () => {
  const [subView, setSubView] = useState<'master' | '5day'>('master');

  const dolomitesDays = useMemo(() => {
    return ITALY_12_DAYS.filter((d) => d.dayNum <= 5);
  }, []);

  const filteredDays = dolomitesDays;

  const scrollToDay = (dayNum: number) => {
    const el = document.getElementById(`day-section-${dayNum}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Sub-View Switcher & Top Control Bar */}
      <div className="bg-white p-4 sm:p-6 rounded-3xl shadow-xs border border-stone-200/90 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        {/* View Switch Segmented Control */}
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-stone-100/90 rounded-2xl self-start md:self-auto">
          <button
            id="subview-master-btn"
            onClick={() => setSubView('master')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer flex items-center gap-2 ${
              subView === 'master'
                ? 'bg-amber-800 text-stone-100 shadow-md shadow-amber-950/20'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>📋 全景行程總表</span>
          </button>

          <button
            id="subview-5day-btn"
            onClick={() => setSubView('5day')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer flex items-center gap-2 ${
              subView === '5day'
                ? 'bg-amber-800 text-stone-100 shadow-md shadow-amber-950/20'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <Clock className="w-4 h-4" />
            <span>🏔️ 多洛米蒂 5 日精華逐日行程</span>
          </button>
        </div>

      </div>

      {/* Main Content Render */}
      {subView === 'master' ? (
        <Master14DayTable />
      ) : (
        <div className="space-y-10">
          {/* Continuous Flow Header Card for Dolomites 5 Days */}
          <div className="bg-gradient-to-br from-amber-50/90 via-orange-50/80 to-amber-100/60 text-amber-950 p-6 sm:p-8 rounded-3xl border border-amber-900/15 shadow-xs relative overflow-hidden">
            <div className="relative z-10 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-100 text-amber-900 text-xs font-bold rounded-full border border-amber-800/20">
                <Mountain className="w-3.5 h-3.5 text-amber-800" />
                <span>多洛米蒂 5 日精華行程</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-amber-950 tracking-tight">
                多洛米蒂 5 日詳細行程（Day 1 ➔ Day 5）
              </h2>
              <p className="text-stone-700 text-xs sm:text-sm max-w-3xl leading-relaxed font-medium">
                精選多洛米蒂 5 天核心絕景：米蘭取車出發、卡雷扎湖、休斯高原、Seceda 刀鋒山、Sassolungo 長石山、三尖峰魔戒步道與布萊埃斯湖，串聯阿爾卑斯山脈精華！
              </p>

              {/* Day Quick Jump Pill Buttons */}
              <div className="pt-2 border-t border-amber-900/10 flex flex-wrap gap-1.5">
                <span className="text-xs font-bold text-amber-900 shrink-0 self-center mr-1">快速跳轉：</span>
                {dolomitesDays.map((d) => (
                  <button
                    key={d.dayNum}
                    onClick={() => scrollToDay(d.dayNum)}
                    className="px-2.5 py-1 rounded-lg bg-amber-100/80 hover:bg-amber-200 text-amber-900 text-xs font-bold transition-all cursor-pointer border border-amber-300/80"
                  >
                    D{d.dayNum}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {filteredDays.map((day) => (
              <div
                key={day.dayNum}
                id={`day-section-${day.dayNum}`}
                className="bg-white rounded-3xl border border-stone-200/90 overflow-hidden shadow-xs space-y-0 scroll-mt-6 transition-all duration-300 hover:shadow-md"
              >
                {/* Hero Banner Header */}
                <div className="relative min-h-[200px] sm:min-h-[240px] flex flex-col justify-end p-6 sm:p-8 overflow-hidden group">
                  <img
                    src={assetUrl(day.heroImage)}
                    alt={day.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/65 to-transparent" />

                  <div className="relative z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-amber-700 text-white font-black px-3 py-1 rounded-full text-xs tracking-wider uppercase shadow-xs">
                          DAY {day.dayNum}
                        </span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight">
                        {day.title}
                      </h3>
                      <p className="text-stone-300 text-xs sm:text-sm mt-1">
                        {day.subtitle}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Day Details Body */}
                <div className="p-6 sm:p-8 space-y-8">
                  {/* Overview */}
                  <div className="bg-amber-50/60 p-5 rounded-2xl border border-amber-200/60 leading-relaxed text-stone-700 text-xs sm:text-sm">
                    <span className="font-extrabold text-stone-900 block mb-1">📌 本日行程概覽：</span>
                    {day.overview}
                  </div>

                  {/* Period Timeline */}
                  <div className="space-y-4">
                    <h4 className="text-base font-bold text-stone-900 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-amber-800" />
                      <span>分時段行程與地點動線表</span>
                    </h4>

                    <div className="relative border-l-2 border-amber-200/80 ml-4 pl-6 space-y-6">
                      {day.timeline.map((event, tIdx) => (
                        <div key={tIdx} className="relative group">
                          {/* Timeline Dot */}
                          <div className={`absolute -left-[31px] top-1.5 w-4 h-4 rounded-full border-2 border-white shadow-xs ${
                            event.isKeyMilestone ? 'bg-amber-600 ring-4 ring-amber-100' : 'bg-stone-700'
                          }`} />

                          <div className="bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-200/80 space-y-2 hover:bg-white hover:border-amber-300 transition-all">
                            <div className="flex flex-wrap items-center justify-between gap-2">
                              <div className="flex items-center gap-2">
                                <span className="font-sans font-extrabold text-xs sm:text-sm text-amber-900 bg-amber-100/90 px-3 py-1 rounded-lg">
                                  {event.time}
                                </span>
                                <h5 className="font-extrabold text-stone-900 text-sm sm:text-base">
                                  {event.title}
                                </h5>
                              </div>
                              {event.tag && (
                                <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-md ${
                                  event.isKeyMilestone ? 'bg-amber-100 text-amber-900 border border-amber-200' : 'bg-stone-200/80 text-stone-700'
                                }`}>
                                  {event.tag}
                                </span>
                              )}
                            </div>

                            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                              {event.detail}
                            </p>

                            {/* Direct Inline Restaurant Info Card with Google Maps */}
                            {event.restaurantInfo && (
                              <div className="mt-3 p-3 bg-amber-50/80 rounded-xl border border-amber-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                                <div>
                                  <div className="text-xs font-bold text-amber-950 flex items-center gap-1.5">
                                    <Utensils className="w-3.5 h-3.5 text-amber-700" />
                                    <span>{event.restaurantInfo.name}</span>
                                    <span className="text-[10px] bg-amber-200 text-amber-900 px-1.5 py-0.5 rounded font-extrabold">
                                      {event.restaurantInfo.type}
                                    </span>
                                  </div>
                                  {event.restaurantInfo.note && (
                                    <p className="text-[11px] text-amber-800 mt-0.5">
                                      {event.restaurantInfo.note}
                                    </p>
                                  )}
                                </div>

                                <a
                                  href={event.restaurantInfo.googleMapsUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 bg-amber-800 hover:bg-amber-900 text-white rounded-lg text-xs font-bold shrink-0 transition-colors"
                                >
                                  <MapPin className="w-3.5 h-3.5" />
                                  <span>Google Maps 導航</span>
                                  <ExternalLink className="w-3 h-3 ml-0.5" />
                                </a>
                              </div>
                            )}

                            {event.location && !event.restaurantInfo && (
                              <div className="text-xs font-semibold text-stone-500 flex items-center justify-between flex-wrap gap-2 mt-1">
                                <div className="flex items-center gap-1">
                                  <MapPin className="w-3.5 h-3.5 text-amber-700" />
                                  <span>{event.location}</span>
                                </div>
                                {event.googleMapsUrl && (
                                  <a
                                    href={event.googleMapsUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-800 hover:text-amber-950 underline"
                                  >
                                    <ExternalLink className="w-3 h-3" />
                                    <span>Google Maps 導航</span>
                                  </a>
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Important Notices & Rules */}
                  {day.keyRules && day.keyRules.length > 0 && (
                    <div className="p-5 rounded-2xl bg-amber-50/80 border border-amber-200/80 space-y-2">
                      <div className="font-extrabold text-sm text-amber-950 flex items-center gap-2">
                        <ShieldAlert className="w-4 h-4 text-amber-700" />
                        <span>關鍵管制與服裝/交通重要注意事項</span>
                      </div>
                      <ul className="space-y-1.5 pt-1">
                        {day.keyRules.map((rule, rIdx) => (
                          <li key={rIdx} className="text-xs sm:text-sm text-amber-900 flex items-start gap-2 leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-1.5 shrink-0" />
                            <span>{rule}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Footer Info: Restaurants with Google Maps & Hotel */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-stone-100">
                    {day.restaurantsList && day.restaurantsList.length > 0 && (
                      <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80">
                        <div className="text-xs font-bold text-stone-500 flex items-center justify-between gap-1.5 mb-2">
                          <div className="flex items-center gap-1.5">
                            <Utensils className="w-4 h-4 text-amber-700" />
                            <span>本日美饌與採買推薦</span>
                          </div>
                          <span className="text-[10px] text-stone-400 font-normal">點擊開啟地圖</span>
                        </div>
                        <ul className="space-y-2">
                          {day.restaurantsList.map((r) => (
                            <li key={r.id} className="text-xs text-stone-800 font-medium flex items-center justify-between gap-2 p-2 bg-white rounded-xl border border-stone-200/70 hover:border-amber-300">
                              <div className="min-w-0 flex-1">
                                <div className="font-bold text-stone-900 truncate flex items-center gap-1">
                                  <span>{r.name}</span>
                                  <span className="text-[9px] bg-amber-100 text-amber-900 px-1 py-0.2 rounded shrink-0">
                                    {r.type}
                                  </span>
                                </div>
                                {r.note && (
                                  <p className="text-[10px] text-stone-500 truncate mt-0.5">
                                    {r.note}
                                  </p>
                                )}
                              </div>

                              <a
                                href={r.googleMapsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-1.5 text-amber-800 hover:text-amber-950 hover:bg-amber-100/60 rounded-lg transition-colors shrink-0 flex items-center gap-1 text-[11px] font-extrabold"
                                title="開啟 Google Maps"
                              >
                                <MapPin className="w-3.5 h-3.5" />
                                <span className="hidden sm:inline">Maps</span>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {day.hotelName && (
                      <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 flex flex-col justify-between">
                        <div>
                          <div className="text-xs font-bold text-stone-500 flex items-center gap-1.5 mb-1">
                            <Hotel className="w-4 h-4 text-amber-800" />
                            <span>當晚住宿飯店 / 地點</span>
                          </div>
                          <p className="text-xs sm:text-sm font-extrabold text-stone-900">
                            {day.hotelName}
                          </p>
                        </div>

                        {day.googleMapsUrl && (
                          <a
                            href={day.googleMapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 hover:text-amber-950 mt-3"
                          >
                            <Navigation className="w-3.5 h-3.5" />
                            <span>開啟 Google Maps 定位</span>
                            <ArrowUpRight className="w-3 h-3 ml-0.5" />
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};
