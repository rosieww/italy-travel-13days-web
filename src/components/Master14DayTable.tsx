import React, { useState } from 'react';
import { MASTER_14_DAYS } from '../data/italyData';
import { Search, MapPin, Hotel, Plane } from 'lucide-react';
import { OverviewImage } from './OverviewImage';

/** 總表只顯示到年月；完整日期仍保留在資料中，星期即由它推算而來。 */
const yearMonth = (dateStr: string) => dateStr.split('/').slice(0, 2).join('/');

export const Master14DayTable: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredMasterDays = MASTER_14_DAYS.filter((d) => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return true;
    return (
      d.cityRegion.toLowerCase().includes(q) ||
      d.morning.toLowerCase().includes(q) ||
      d.afternoon.toLowerCase().includes(q) ||
      d.evening.toLowerCase().includes(q) ||
      d.hotel.toLowerCase().includes(q)
    );
  });

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Overview Image */}
      <OverviewImage />

      {/* Search */}
      <div className="bg-white p-4 sm:p-5 rounded-3xl border border-stone-200/90 shadow-xs flex flex-col sm:flex-row sm:items-center gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            id="search-14day-input"
            type="text"
            placeholder="搜尋城市、飯店、景點 (如: 烏菲茲)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-stone-50 border border-stone-200 rounded-2xl text-xs sm:text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-700"
          />
        </div>
        {searchQuery.trim() && (
          <span className="text-xs font-bold text-stone-500 shrink-0 sm:pr-1">
            找到 {filteredMasterDays.length} / {MASTER_14_DAYS.length} 天
          </span>
        )}
      </div>

      {/* Table */}
      <div className="bg-white rounded-3xl border border-stone-200/90 overflow-hidden shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse table-fixed min-w-[1080px]">
            <thead>
              <tr className="bg-[#4a2c1d] text-amber-100 text-xs uppercase tracking-wider font-bold">
                <th className="p-4 pl-6 w-[10%] min-w-[100px]">日程</th>
                <th className="p-4 w-[15%] min-w-[140px]">城市與區域</th>
                <th className="p-4 w-[21%]">🌅 上午行程</th>
                <th className="p-4 w-[21%]">☀️ 下午行程</th>
                <th className="p-4 w-[19%]">🌙 傍晚與晚餐</th>
                <th className="p-4 pr-6 w-[14%] min-w-[140px]">🏨 住宿飯店</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 text-xs sm:text-sm">
              {filteredMasterDays.map((row) => {
                const isDolomitesCore = row.dayNum >= 1 && row.dayNum <= 5;
                return (
                  <tr
                    key={row.dayNum}
                    className={`hover:bg-amber-50/40 transition-colors ${
                      isDolomitesCore ? 'bg-amber-50/20' : ''
                    }`}
                  >
                    {/* Day */}
                    <td className="p-4 pl-6 align-top">
                      <div className="flex items-center gap-1.5 font-black text-stone-900 text-base">
                        <span>Day {row.dayNum}</span>
                        {isDolomitesCore && (
                          <span className="w-2 h-2 rounded-full bg-amber-700 shrink-0" title="多洛米蒂精華段" />
                        )}
                      </div>
                      <div className="text-xs text-stone-500 font-mono tabular-nums mt-0.5">
                        {yearMonth(row.dateStr)}
                      </div>
                      {row.flightsOrTrains && (
                        <div className="mt-2 text-[10px] font-bold text-amber-900 bg-amber-100/70 p-1.5 rounded-md border border-amber-200/80">
                          <Plane className="w-3 h-3 inline mr-1 text-amber-800" />
                          {row.flightsOrTrains}
                        </div>
                      )}
                    </td>

                    {/* City / Region */}
                    <td className="p-4 align-top font-bold text-stone-800">
                      <div className="flex items-center gap-1.5 text-amber-900">
                        <MapPin className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                        <span>{row.cityRegion}</span>
                      </div>
                      {isDolomitesCore && (
                        <span className="inline-block mt-1 text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-200">
                          多洛米蒂 5 日精華
                        </span>
                      )}
                    </td>

                    {/* Morning */}
                    <td className="p-4 align-top text-stone-700 leading-relaxed">
                      {row.morning}
                    </td>

                    {/* Afternoon */}
                    <td className="p-4 align-top text-stone-700 leading-relaxed">
                      {row.afternoon}
                    </td>

                    {/* Evening */}
                    <td className="p-4 align-top text-stone-700 leading-relaxed">
                      {row.evening}
                    </td>

                    {/* Hotel */}
                    <td className="p-4 pr-6 align-top font-medium text-stone-800">
                      <div className="flex items-center gap-1.5 text-stone-700">
                        <Hotel className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                        <span>{row.hotel}</span>
                      </div>
                    </td>
                  </tr>
                );
              })}
              {filteredMasterDays.length === 0 && (
                <tr>
                  <td colSpan={6} className="p-10 text-center text-stone-500 text-xs sm:text-sm">
                    找不到符合「{searchQuery.trim()}」的行程，試試其他城市、飯店或景點名稱。
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
