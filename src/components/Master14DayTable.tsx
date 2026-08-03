import React, { useState } from 'react';
import { MASTER_14_DAYS } from '../data/italyData';
import { Search, MapPin, Hotel, Plane, Sparkles } from 'lucide-react';
import { OverviewImage } from './OverviewImage';

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
                      <div className="text-xs text-stone-500 font-sans mt-0.5">
                        {row.dayOfWeek}
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
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
