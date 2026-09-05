import React from 'react';
import { HOTELS, hotelNights, EXPENSE_PARTY_SIZE } from '../data/italyData';
import { Hotel, MapPin, Moon, Wallet, ExternalLink, Info, Instagram } from 'lucide-react';

/** 一律四捨五入到整數元，與花費分頁的呈現一致。 */
const twd = (n: number) => `NT$${Math.round(n).toLocaleString('en-US')}`;
const perPerson = (n: number) => n / EXPENSE_PARTY_SIZE;

/** 兩筆無法歸屬到特定飯店的城市稅，於頁尾單獨說明。 */
const UNASSIGNED_CITY_TAX = [
  { label: '城市稅', twd: 904, eur: 24.4 },
  { label: '城市稅', twd: 778, eur: 21.0 },
];

export const HotelView: React.FC = () => {
  const totalNights = HOTELS.reduce((sum, hotel) => sum + hotelNights(hotel), 0);
  const roomTotal = HOTELS.reduce((sum, hotel) => sum + hotel.twd, 0);
  const hotelCityTax = HOTELS.reduce((sum, hotel) => sum + (hotel.cityTaxTwd ?? 0), 0);
  const otherCityTax = UNASSIGNED_CITY_TAX.reduce((sum, tax) => sum + tax.twd, 0);
  const lodgingTotal = roomTotal + hotelCityTax + otherCityTax;

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-[#4a2c1d] via-[#5c3523] to-[#4a2c1d] text-amber-50 p-6 sm:p-8 rounded-3xl border border-amber-800/40 shadow-md relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-amber-500/20 text-amber-300 text-xs font-bold rounded-full border border-amber-500/30 mb-3">
              <Hotel className="w-3.5 h-3.5 text-amber-400" />
              <span>義大利 13 日住宿彙整</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              飯店列表與入住日程
            </h2>
            <p className="mt-1 text-amber-200/90 text-xs sm:text-sm max-w-2xl leading-relaxed">
              全程共 {HOTELS.length} 間飯店、{totalNights} 晚，依入住順序排列，
              含對應行程日、晚數與住宿費。金額皆為 {EXPENSE_PARTY_SIZE} 人合計實付。
            </p>

            {/* 每間飯店的實住開箱另外放在 IG 精選動態，此處只彙整日程與花費 */}
            <a
              href="https://www.instagram.com/ro_c_diary"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#351e14]/90 hover:bg-[#5c3523] text-amber-200 hover:text-amber-100 text-xs font-bold border border-amber-500/30 transition-all cursor-pointer"
            >
              <Instagram className="w-3.5 h-3.5 text-pink-400 shrink-0" />
              <span>住宿開箱與心得可參考 IG 精選動態 @ro_c_diary</span>
              <ExternalLink className="w-3 h-3 text-amber-400/70 shrink-0" />
            </a>
          </div>

          <div className="bg-[#351e14]/90 p-4 rounded-2xl border border-amber-800/50 shrink-0 text-center sm:text-left">
            <div className="text-xs text-amber-200/70 font-bold uppercase tracking-wider">
              住宿總花費（含城市稅）
            </div>
            <div className="text-3xl sm:text-4xl font-black text-amber-400 mt-1 tracking-tight">
              {twd(lodgingTotal)}
            </div>
            <div className="mt-1.5 pt-1.5 border-t border-amber-800/50 text-xs text-amber-200/80 font-medium">
              平均每人{' '}
              <span className="font-bold text-amber-300">{twd(perPerson(lodgingTotal))}</span>
              　·　每晚約{' '}
              <span className="font-bold text-amber-300">{twd(lodgingTotal / totalNights)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hotel cards — 依入住順序，左側 Day 區間帶出行程節奏 */}
      <div className="space-y-4">
        {HOTELS.map((hotel) => {
          const nights = hotelNights(hotel);
          const stayTotal = hotel.twd + (hotel.cityTaxTwd ?? 0);

          return (
            <div
              key={hotel.id}
              className="bg-white rounded-3xl border border-stone-200/90 shadow-xs p-5 sm:p-6 hover:border-amber-300 hover:shadow-md transition-all group"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-5">
                {/* Day range + nights */}
                <div className="shrink-0 lg:w-40 flex lg:flex-col items-center lg:items-start gap-2.5">
                  <span className="bg-amber-800 text-white font-extrabold px-3 py-1 rounded-xl text-xs tracking-wide whitespace-nowrap">
                    Day {hotel.dayFrom}–{hotel.dayTo}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-stone-700 bg-stone-100 px-2.5 py-1 rounded-lg">
                    <Moon className="w-3.5 h-3.5 text-amber-700" />
                    <span>{nights} 晚</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-amber-900 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200/80">
                    {hotel.region}
                  </span>
                </div>

                {/* Main content */}
                <div className="min-w-0 flex-1">
                  <h3 className="text-base sm:text-lg font-black text-stone-900 tracking-tight group-hover:text-amber-800 transition-colors">
                    {hotel.name}
                    {hotel.nameZh && (
                      <span className="ml-2 text-sm font-bold text-stone-500">{hotel.nameZh}</span>
                    )}
                  </h3>

                  <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-stone-600 font-medium">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                      <span>{hotel.city}</span>
                    </span>
                  </div>

                  {hotel.note && (
                    <p className="mt-2.5 text-xs text-stone-600 leading-relaxed">{hotel.note}</p>
                  )}

                  <a
                    href={hotel.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3.5 inline-flex items-center gap-2 px-4 py-2 bg-[#4a2c1d] hover:bg-amber-800 text-amber-50 rounded-xl text-xs font-bold transition-all cursor-pointer shadow-xs"
                  >
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    <span>開啟 Google Maps 導航</span>
                    <ExternalLink className="w-3 h-3 text-stone-400" />
                  </a>
                </div>

                {/* Cost block */}
                <div className="shrink-0 lg:w-52 bg-stone-50 rounded-2xl border border-stone-200/80 p-4">
                  <div className="text-[11px] font-bold text-stone-500 uppercase tracking-wider">
                    住宿費（{EXPENSE_PARTY_SIZE} 人合計）
                  </div>
                  <div className="text-xl font-black text-stone-900 font-mono tabular-nums mt-0.5">
                    {twd(hotel.twd)}
                  </div>

                  {hotel.cityTaxTwd !== undefined && (
                    <div className="mt-1.5 flex items-baseline justify-between gap-2 text-[11px] font-bold text-stone-500">
                      <span>另付城市稅</span>
                      <span className="font-mono tabular-nums">{twd(hotel.cityTaxTwd)}</span>
                    </div>
                  )}

                  <dl className="mt-2 pt-2 border-t border-stone-200 space-y-1 text-[11px] font-bold text-stone-600">
                    <div className="flex items-baseline justify-between gap-2">
                      <dt>平均每晚</dt>
                      <dd className="font-mono tabular-nums text-stone-900">
                        {twd(stayTotal / nights)}
                      </dd>
                    </div>
                    <div className="flex items-baseline justify-between gap-2">
                      <dt>平均每人</dt>
                      <dd className="font-mono tabular-nums text-stone-900">
                        {twd(perPerson(stayTotal))}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Summary */}
      <div className="bg-white rounded-3xl border border-stone-200/90 shadow-xs p-5 sm:p-6">
        <div className="flex items-center gap-2 text-sm font-black text-stone-900 mb-3">
          <Wallet className="w-4 h-4 text-amber-800" />
          <span>住宿花費結算（{EXPENSE_PARTY_SIZE} 人合計）</span>
        </div>

        <dl className="space-y-2 text-xs sm:text-sm">
          <div className="flex items-baseline justify-between gap-4 py-1">
            <dt className="text-stone-700">
              {HOTELS.length} 間飯店住宿費 · 共 {totalNights} 晚
            </dt>
            <dd className="font-mono tabular-nums font-bold text-stone-900">{twd(roomTotal)}</dd>
          </div>
          <div className="flex items-baseline justify-between gap-4 py-1">
            <dt className="text-stone-700">Hotel Menardi 城市稅</dt>
            <dd className="font-mono tabular-nums font-bold text-stone-900">{twd(hotelCityTax)}</dd>
          </div>
          {UNASSIGNED_CITY_TAX.map((tax, index) => (
            <div key={index} className="flex items-baseline justify-between gap-4 py-1">
              <dt className="text-stone-700">
                {tax.label}
                <span className="ml-2 text-stone-400 font-mono tabular-nums">€{tax.eur}</span>
              </dt>
              <dd className="font-mono tabular-nums font-bold text-stone-900">{twd(tax.twd)}</dd>
            </div>
          ))}
          <div className="flex items-baseline justify-between gap-4 pt-2.5 mt-1 border-t-2 border-stone-300 text-sm font-black text-stone-900">
            <dt>住宿合計</dt>
            <dd className="font-mono tabular-nums">{twd(lodgingTotal)}</dd>
          </div>
          <div className="flex items-baseline justify-between gap-4 text-[11px] font-bold text-stone-500">
            <dt>平均每人</dt>
            <dd className="font-mono tabular-nums">{twd(perPerson(lodgingTotal))}</dd>
          </div>
        </dl>

        <div className="mt-4 pt-3 border-t border-stone-200 flex items-start gap-2 text-xs text-stone-500">
          <Info className="w-3.5 h-3.5 text-stone-400 shrink-0 mt-0.5" />
          <span>
            住宿費為此頁與「花費明細」共用的同一份資料，兩邊不會出現不一致。
            其中兩筆城市稅（€24.4、€21.0）在帳目上未註明所屬飯店，因此單獨列出、未攤入各間住宿費。
          </span>
        </div>
      </div>
    </div>
  );
};
