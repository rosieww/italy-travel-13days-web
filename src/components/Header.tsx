import React from 'react';
import { Mountain, Calendar, Compass, ExternalLink, Utensils, Instagram, Wallet } from 'lucide-react';
import { assetUrl } from '../assetUrl';

export type MainTabType = 'itinerary' | 'spots' | 'links' | 'food' | 'expense';

interface HeaderProps {
  activeTab: MainTabType;
  setActiveTab: (tab: MainTabType) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  return (
    <header className="relative bg-[#4a2c1d] text-amber-50 overflow-hidden shadow-xl border-b border-amber-800/40">
      {/* Cover Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80 pointer-events-none"
        style={{ backgroundImage: `url('${assetUrl('/image/DSCF6854.webp')}')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#3b2014]/50 via-[#4a2c1d]/30 to-[#3b2014]/15 pointer-events-none" />

      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.05] pointer-events-none" />
      <div className="absolute -right-20 -top-20 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#351e14]/90 text-amber-300 text-xs font-medium tracking-wider border border-amber-700/50">
                <Mountain className="w-3.5 h-3.5 text-amber-400" />
                <span>義大利多洛米蒂自駕與北義經典行程指南</span>
              </div>
              <a
                href="https://www.instagram.com/ro_c_diary"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#351e14]/90 hover:bg-[#5c3523] text-amber-300 hover:text-amber-200 text-xs font-semibold border border-amber-500/30 transition-all cursor-pointer shadow-sm"
              >
                <Instagram className="w-3.5 h-3.5 text-pink-400" />
                <span>@ro_c_diary</span>
              </a>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-amber-50 flex flex-wrap items-center gap-3 drop-shadow-md">
              義大利<span className="text-amber-400 font-serif italic">13日</span>旅遊攻略
            </h1>
            <p className="mt-2 text-amber-100/95 text-sm sm:text-base max-w-2xl leading-relaxed flex items-center gap-2 drop-shadow-sm">
              <span className="inline-block w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
              收錄多洛米蒂 5 日精華路線、景點介紹、預約連結與美食地圖
            </p>
          </div>
        </div>

        {/* Primary Navigation Tabs */}
        <nav className="mt-8 flex flex-wrap gap-2.5 border-t border-amber-800/50 pt-4">
          <button
            id="nav-tab-itinerary"
            onClick={() => setActiveTab('itinerary')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-200 cursor-pointer ${
              activeTab === 'itinerary'
                ? 'bg-amber-800 text-stone-100 font-extrabold shadow-md shadow-amber-950/50 scale-[1.02]'
                : 'text-amber-200/90 hover:bg-[#5c3523] hover:text-amber-100'
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>1. 行程表 (多洛米蒂 5 日 / 13 日總表)</span>
          </button>

          <button
            id="nav-tab-spots"
            onClick={() => setActiveTab('spots')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-200 cursor-pointer ${
              activeTab === 'spots'
                ? 'bg-amber-800 text-stone-100 font-extrabold shadow-md shadow-amber-950/50 scale-[1.02]'
                : 'text-amber-200/90 hover:bg-[#5c3523] hover:text-amber-100'
            }`}
          >
            <Compass className="w-4 h-4" />
            <span>2. 景點深度指南</span>
          </button>

          <button
            id="nav-tab-links"
            onClick={() => setActiveTab('links')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-200 cursor-pointer ${
              activeTab === 'links'
                ? 'bg-amber-800 text-stone-100 font-extrabold shadow-md shadow-amber-950/50 scale-[1.02]'
                : 'text-amber-200/90 hover:bg-[#5c3523] hover:text-amber-100'
            }`}
          >
            <ExternalLink className="w-4 h-4" />
            <span>3. 預約與實用連結</span>
          </button>

          <button
            id="nav-tab-food"
            onClick={() => setActiveTab('food')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-200 cursor-pointer ${
              activeTab === 'food'
                ? 'bg-amber-800 text-stone-100 font-extrabold shadow-md shadow-amber-950/50 scale-[1.02]'
                : 'text-amber-200/90 hover:bg-[#5c3523] hover:text-amber-100'
            }`}
          >
            <Utensils className="w-4 h-4 text-amber-300" />
            <span>4. 餐廳與美饌地圖</span>
          </button>

          <button
            id="nav-tab-expense"
            onClick={() => setActiveTab('expense')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-200 cursor-pointer ${
              activeTab === 'expense'
                ? 'bg-amber-800 text-stone-100 font-extrabold shadow-md shadow-amber-950/50 scale-[1.02]'
                : 'text-amber-200/90 hover:bg-[#5c3523] hover:text-amber-100'
            }`}
          >
            <Wallet className="w-4 h-4 text-amber-300" />
            <span>5. 花費明細</span>
          </button>

          <div className="h-6 w-px bg-amber-800/60 mx-1 self-center hidden sm:block" />
        </nav>
      </div>
    </header>
  );
};
