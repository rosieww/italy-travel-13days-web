import React from 'react';
import { TicketCheck } from 'lucide-react';

export const TicketValidationNotice: React.FC = () => (
  <aside className="rounded-2xl border border-amber-800/20 bg-amber-50 p-5 text-amber-950 space-y-2" aria-label="紙本交通票券驗票提醒">
    <h3 className="flex items-center gap-2 font-bold text-base">
      <TicketCheck className="w-5 h-5 shrink-0" />
      紙本交通票券：買好票，上車前還要確認打卡！
    </h3>
    <p className="text-sm leading-relaxed">
      搭乘區域火車（例如佛羅倫斯往返比薩、米蘭前往科莫湖），若持需驗票的紙本票，請在上車前到車站驗票機打卡／啟用，並確認已蓋上日期時間或顯示驗票成功。買票不等於完成驗票；未依規定啟用，查票時可能被視為未持有效車票並受罰。
    </p>
    <p className="text-xs text-stone-600 leading-relaxed">
      是否需要打卡依票種與營運公司規定而定，不能只看是不是紙本；電子票列印本也不一定需要機台驗票。不確定或機台故障時，請在上車前詢問站務人員。
    </p>
    <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs font-bold pt-1">
      <a className="underline underline-offset-4" href="https://www.trenitalia.com/en/information/travelling-on-regional-trains.html" target="_blank" rel="noopener noreferrer">Trenitalia 區域火車驗票規定 ↗</a>
      <a className="underline underline-offset-4" href="https://www.trenord.it/en/tickets/travel-titles/tickets/" target="_blank" rel="noopener noreferrer">Trenord 票券啟用規定 ↗</a>
    </div>
  </aside>
);
