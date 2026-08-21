import React, { useState } from 'react';
import { MASTER_14_DAYS } from '../data/italyData';
import { Master14DayCell } from '../types';
import { Search, MapPin, Hotel } from 'lucide-react';
import { OverviewImage } from './OverviewImage';

/** 總表只顯示到年月；資料中不記錄到日的日期。 */
const yearMonth = (dateStr: string) => dateStr.split('/').slice(0, 2).join('/');

const isDolomitesCore = (dayNum: number) => dayNum >= 1 && dayNum <= 5;

/**
 * 表格以 Day 為欄、項目為列。列的定義集中在這裡，
 * 之後要增減一個項目（例如交通、預算）只需加一筆，不用動表格結構。
 */
const ROWS: { key: string; label: string; render: (day: Master14DayCell) => React.ReactNode }[] = [
  {
    key: 'city',
    label: '城市',
    render: (day) => (
      <div className="flex items-start gap-1.5 font-bold text-amber-900">
        <MapPin className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
        <span>{day.cityRegion}</span>
      </div>
    ),
  },
  { key: 'morning', label: '🌅 上午', render: (day) => day.morning },
  { key: 'afternoon', label: '☀️ 下午', render: (day) => day.afternoon },
  { key: 'evening', label: '🌙 晚間', render: (day) => day.evening },
  {
    key: 'hotel',
    label: '🏨 住宿',
    render: (day) => (
      <div className="flex items-start gap-1.5 font-medium text-stone-800">
        <Hotel className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
        <span>{day.hotel}</span>
      </div>
    ),
  },
];

export const Master14DayTable: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [hoveredDay, setHoveredDay] = useState<number | null>(null);

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

      {filteredMasterDays.length === 0 ? (
        <div className="bg-white rounded-3xl border border-stone-200/90 shadow-xs p-10 text-center text-stone-500 text-xs sm:text-sm">
          找不到符合「{searchQuery.trim()}」的行程，試試其他城市、飯店或景點名稱。
        </div>
      ) : (
        <div className="bg-white rounded-3xl border border-stone-200/90 overflow-hidden shadow-xs">
          {/* Day 為欄，因此橫向捲動；首欄的項目名稱固定不動 */}
          <div className="overflow-x-auto">
            <table className="text-left border-collapse">
              <caption className="sr-only">
                義大利 13 日行程總表，每一欄為一天，每一列為城市、各時段行程與住宿飯店
              </caption>
              <thead>
                <tr className="bg-[#4a2c1d] text-amber-100">
                  <th
                    scope="col"
                    className="sticky left-0 z-20 bg-[#4a2c1d] p-2 pl-3 sm:p-2.5 sm:pl-4 w-[58px] min-w-[58px] sm:w-[76px] sm:min-w-[76px] text-[11px] sm:text-xs uppercase tracking-wider font-bold align-middle text-center text-amber-100"
                  >
                    項目
                  </th>
                  {filteredMasterDays.map((day) => (
                    <th
                      key={day.dayNum}
                      scope="col"
                      onMouseEnter={() => setHoveredDay(day.dayNum)}
                      onMouseLeave={() => setHoveredDay(null)}
                      className={`p-1.5 sm:p-2 w-[128px] min-w-[128px] sm:w-[176px] sm:min-w-[176px] align-middle font-bold border-l border-amber-900/30 transition-all duration-200 ${
                        hoveredDay === day.dayNum ? 'bg-[#5c3523]' : 'bg-[#4a2c1d]'
                      }`}
                    >
                      <div className="flex justify-center">
                        <div className="inline-flex min-w-0 w-full justify-center">
                          <div className="flex flex-col items-start min-w-0 text-left leading-none">
                            <div className="text-white text-sm sm:text-base font-black tracking-tight">
                              Day {day.dayNum}
                            </div>
                            <div className="text-[10px] sm:text-[11px] text-amber-200/80 font-mono tabular-nums mt-1 leading-none">
                              {yearMonth(day.dateStr)}
                            </div>
                          </div>
                        </div>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody className="divide-y divide-stone-200 text-xs sm:text-sm">
                {ROWS.map((row) => (
                  <tr key={row.key} className="group">
                    <th
                      scope="row"
                      className="sticky left-0 z-10 bg-amber-50/40 group-hover:bg-amber-100/60 transition-colors p-1.5 pl-2 sm:p-2 sm:pl-3 align-middle text-center text-[11px] sm:text-xs font-bold text-stone-600 border-r border-stone-200 leading-snug whitespace-nowrap"
                    >
                      {row.label}
                    </th>
                    {filteredMasterDays.map((day) => (
                      <td
                        key={day.dayNum}
                        onMouseEnter={() => setHoveredDay(day.dayNum)}
                        onMouseLeave={() => setHoveredDay(null)}
                        className={`p-2 sm:p-2.5 align-top text-stone-700 leading-relaxed border-l border-stone-100 transition-colors ${
                          hoveredDay === day.dayNum ? 'bg-amber-50/70 shadow-[inset_0_0_0_1px_rgba(120,53,15,0.08)]' : 'bg-white'
                        }`}
                        data-day={day.dayNum}
                      >
                        {row.render(day)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
