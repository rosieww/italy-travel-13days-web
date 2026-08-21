import React, { useState } from 'react';
import {
  EXPENSE_BREAKDOWN,
  EXPENSE_TOTAL,
  EXPENSE_PARTY_SIZE,
  expenseCategoryTotal,
} from '../data/italyData';
import { ExpenseItem } from '../types';
import { Wallet, Table2, BarChart3, Info, ChevronDown, Users } from 'lucide-react';

/**
 * 分類為 nominal categorical（互換順序不改變意義），因此所有長條共用同一個色，
 * 由長度承載量值、由列標籤承載識別，不以色階重複編碼金額大小。
 * #92400e 對白底 7.09:1、對 stone-100 軌道 6.50:1。
 */
const BAR_COLOR = '#92400e';

/** 一律四捨五入到整數元，不顯示小數。 */
const twd = (n: number) => `NT$${Math.round(n).toLocaleString('en-US')}`;
const eur = (n: number) => `€${n.toLocaleString('en-US', { maximumFractionDigits: 2 })}`;
/** 每人金額與總額的佔比相同（除以固定人數），因此比例仍以金額推算。 */
const pct = (n: number) => (n / EXPENSE_TOTAL) * 100;
const perPerson = (n: number) => n / EXPENSE_PARTY_SIZE;

/**
 * 單一分類的逐筆明細。原始帳目記的是 2 人合計實付，
 * 因此這裡直接照實呈現，不除以人數，並在標頭明確註記。
 */
const ItemDetails: React.FC<{ label: string; items: ExpenseItem[]; total: number }> = ({
  label,
  items,
  total,
}) => (
  <div className="bg-stone-50 rounded-2xl border border-stone-200/80 px-4 py-3">
    <div className="flex items-center gap-1.5 pb-2 text-[11px] font-bold text-stone-500">
      <Users className="w-3 h-3 shrink-0 text-stone-400" />
      <span>
        共 {items.length} 筆 · 以下金額皆為 <span className="text-stone-700">{EXPENSE_PARTY_SIZE} 人合計實付</span>，非每人金額
      </span>
    </div>

    <ul className="border-t border-stone-200 divide-y divide-stone-200/80">
      {items.map((item, index) => (
        <li
          key={`${item.label}-${index}`}
          className="flex items-baseline justify-between gap-4 py-2 text-xs sm:text-sm"
        >
          <span className="text-stone-700">{item.label}</span>
          <span className="shrink-0 text-right">
            <span className="font-mono tabular-nums font-bold text-stone-900">{twd(item.twd)}</span>
            {item.eur !== undefined && (
              <span className="ml-2 font-mono tabular-nums text-stone-400">{eur(item.eur)}</span>
            )}
          </span>
        </li>
      ))}
    </ul>

    <div className="flex items-baseline justify-between gap-4 mt-1 pt-2 border-t-2 border-stone-300 text-xs sm:text-sm font-black text-stone-900">
      <span>{label}小計（{EXPENSE_PARTY_SIZE} 人合計）</span>
      <span className="font-mono tabular-nums">{twd(total)}</span>
    </div>
    <div className="flex items-baseline justify-between gap-4 pt-1 text-[11px] font-bold text-stone-500">
      <span>平均每人</span>
      <span className="font-mono tabular-nums">{twd(perPerson(total))}</span>
    </div>
  </div>
);

export const ExpenseView: React.FC = () => {
  const [showTable, setShowTable] = useState(false);
  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  const toggle = (id: string) =>
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });

  const rows = EXPENSE_BREAKDOWN.map((category) => ({
    ...category,
    amount: expenseCategoryTotal(category),
  })).sort((a, b) => b.amount - a.amount);

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-[#4a2c1d] via-[#5c3523] to-[#4a2c1d] text-amber-50 p-6 sm:p-8 rounded-3xl border border-amber-800/40 shadow-md relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-amber-500/20 text-amber-300 text-xs font-bold rounded-full border border-amber-500/30 mb-3">
              <Wallet className="w-3.5 h-3.5 text-amber-400" />
              <span>義大利 13 日花費結算</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              每人花費明細與分類佔比
            </h2>
            <p className="mt-1 text-amber-200/90 text-xs sm:text-sm max-w-2xl leading-relaxed">
              依交通、住宿、飲食、門票與其他五大類彙整，金額為新台幣。
              帳目原始明細記錄的是 {EXPENSE_PARTY_SIZE} 人合計實付金額，
              分類總額由明細加總，再除以 {EXPENSE_PARTY_SIZE} 人得到單人花費。
            </p>
          </div>

          <div className="bg-[#351e14]/90 p-4 rounded-2xl border border-amber-800/50 shrink-0 text-center sm:text-left">
            <div className="text-xs text-amber-200/70 font-bold uppercase tracking-wider">
              每人總花費（不含購物）
            </div>
            {/* Hero figure — proportional figures; tabular-nums is for aligned columns only */}
            <div className="text-4xl sm:text-5xl font-black text-amber-400 mt-1 tracking-tight">
              {twd(perPerson(EXPENSE_TOTAL))}
            </div>
            <div className="mt-1.5 pt-1.5 border-t border-amber-800/50 text-xs text-amber-200/80 font-medium">
              {EXPENSE_PARTY_SIZE} 人合計{' '}
              <span className="font-bold text-amber-300">{twd(EXPENSE_TOTAL)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Chart / Table toggle */}
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <h3 className="text-base sm:text-lg font-black text-stone-900">
          各分類每人花費與佔比
        </h3>
        <div className="flex items-center gap-1.5 p-1.5 bg-stone-100/90 rounded-2xl">
          <button
            onClick={() => setShowTable(false)}
            aria-pressed={!showTable}
            className={`px-3 py-1.5 rounded-xl text-xs font-extrabold transition-all cursor-pointer flex items-center gap-1.5 ${
              !showTable ? 'bg-amber-800 text-stone-100 shadow-xs' : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5" />
            <span>圖表</span>
          </button>
          <button
            onClick={() => setShowTable(true)}
            aria-pressed={showTable}
            className={`px-3 py-1.5 rounded-xl text-xs font-extrabold transition-all cursor-pointer flex items-center gap-1.5 ${
              showTable ? 'bg-amber-800 text-stone-100 shadow-xs' : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <Table2 className="w-3.5 h-3.5" />
            <span>表格</span>
          </button>
        </div>
      </div>

      {showTable ? (
        /* Table view — same numbers, for screen readers, copy-paste and print */
        <div className="bg-white rounded-3xl border border-stone-200/90 overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[660px]">
              <caption className="sr-only">
                義大利 13 日花費分類統計，不含購物。明細與總金額欄為 {EXPENSE_PARTY_SIZE} 人合計實付，
                平均每人欄為其除以 {EXPENSE_PARTY_SIZE} 人後的金額
              </caption>
              <thead>
                <tr className="bg-[#4a2c1d] text-amber-100 text-xs uppercase tracking-wider font-bold">
                  <th scope="col" className="p-4 pl-6">分類</th>
                  <th scope="col" className="p-4 text-right">平均每人 (TWD)</th>
                  <th scope="col" className="p-4 text-right">占比</th>
                  <th scope="col" className="p-4 text-right">{EXPENSE_PARTY_SIZE} 人合計 (TWD)</th>
                  <th scope="col" className="p-4 pr-6">說明</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-xs sm:text-sm">
                {rows.map((row) => {
                  const isOpen = expanded.has(row.id);
                  return (
                    <React.Fragment key={row.id}>
                      <tr className="hover:bg-amber-50/50 transition-colors">
                        <th scope="row" className="p-4 pl-6 font-black text-stone-900 text-left">
                          <button
                            onClick={() => toggle(row.id)}
                            aria-expanded={isOpen}
                            className="flex items-center gap-1.5 cursor-pointer hover:text-amber-800 transition-colors"
                          >
                            <ChevronDown
                              className={`w-3.5 h-3.5 text-stone-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                            />
                            <span>{row.label}</span>
                            <span className="font-bold text-stone-400 text-[11px]">
                              ({row.items.length} 筆)
                            </span>
                          </button>
                        </th>
                        <td className="p-4 text-right font-mono tabular-nums font-bold text-stone-900">
                          {twd(perPerson(row.amount))}
                        </td>
                        <td className="p-4 text-right font-mono tabular-nums text-stone-800">
                          {pct(row.amount).toFixed(1)}%
                        </td>
                        <td className="p-4 text-right font-mono tabular-nums text-stone-500">
                          {twd(row.amount)}
                        </td>
                        <td className="p-4 pr-6 text-stone-600">{row.note}</td>
                      </tr>
                      {isOpen && (
                        <tr>
                          <td colSpan={5} className="px-6 pb-4 pt-0 bg-white">
                            <ItemDetails label={row.label} items={row.items} total={row.amount} />
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  );
                })}
                <tr className="bg-amber-50/70 font-black text-stone-900">
                  <th scope="row" className="p-4 pl-6 text-left">總計</th>
                  <td className="p-4 text-right font-mono tabular-nums">
                    {twd(perPerson(EXPENSE_TOTAL))}
                  </td>
                  <td className="p-4 text-right font-mono tabular-nums">100.0%</td>
                  <td className="p-4 text-right font-mono tabular-nums text-stone-600">
                    {twd(EXPENSE_TOTAL)}
                  </td>
                  <td className="p-4 pr-6 font-medium text-stone-600">不含購物費用</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        /* Bar chart — bar length is the share of the total, so it matches the % label */
        <div className="bg-white rounded-3xl border border-stone-200/90 shadow-xs p-5 sm:p-7 space-y-5">
          {rows.map((row) => {
            const share = pct(row.amount);
            const isOpen = expanded.has(row.id);
            return (
              <div
                key={row.id}
                className="group"
                title={`${row.label}：每人 ${twd(perPerson(row.amount))}（${share.toFixed(1)}%）｜${EXPENSE_PARTY_SIZE} 人合計 ${twd(row.amount)} — ${row.note}`}
              >
                <div className="flex items-baseline justify-between gap-3 mb-1.5">
                  <span className="font-black text-stone-900 text-sm sm:text-base">
                    {row.label}
                  </span>
                  <span className="font-mono tabular-nums text-stone-900 font-bold text-sm sm:text-base shrink-0">
                    {twd(perPerson(row.amount))}
                    <span className="ml-2 font-sans font-bold text-stone-500 text-xs sm:text-sm">
                      {share.toFixed(1)}%
                    </span>
                  </span>
                </div>

                {/* Track + bar. 4px rounded data-end, square at the baseline. */}
                <div className="h-5 w-full bg-stone-100 rounded-sm overflow-hidden">
                  <div
                    className="h-full rounded-r-[4px] transition-[filter] duration-200 group-hover:brightness-110"
                    style={{ width: `${share}%`, backgroundColor: BAR_COLOR }}
                  />
                </div>

                <div className="mt-1.5 flex items-start justify-between gap-3 flex-wrap">
                  <p className="text-xs text-stone-500 leading-relaxed">
                    {row.note}
                    <span className="text-stone-400">
                      　·　{EXPENSE_PARTY_SIZE} 人合計 {twd(row.amount)}
                    </span>
                  </p>
                  <button
                    onClick={() => toggle(row.id)}
                    aria-expanded={isOpen}
                    className="shrink-0 flex items-center gap-1 text-xs font-extrabold text-amber-800 hover:text-amber-900 cursor-pointer transition-colors"
                  >
                    <span>{isOpen ? '收合明細' : `展開明細 (${row.items.length} 筆)`}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                </div>

                {isOpen && (
                  <div className="mt-2.5">
                    <ItemDetails label={row.label} items={row.items} total={row.amount} />
                  </div>
                )}
              </div>
            );
          })}

          <div className="pt-4 border-t border-stone-200 flex items-start gap-2 text-xs text-stone-500">
            <Info className="w-3.5 h-3.5 text-stone-400 shrink-0 mt-0.5" />
            <span>
              長條長度即為該分類佔總花費的比例，長條上方標示的是每人分攤後的金額；
              展開明細後的逐筆金額則為 {EXPENSE_PARTY_SIZE} 人合計實付。
              每人總計 {twd(perPerson(EXPENSE_TOTAL))}，{EXPENSE_PARTY_SIZE} 人合計{' '}
              {twd(EXPENSE_TOTAL)}，不含購物費用。
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
