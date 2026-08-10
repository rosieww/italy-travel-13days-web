import React, { useState } from 'react';
import { Header, MainTabType } from './components/Header';
import { ItineraryView } from './components/ItineraryView';
import { SpotLightView } from './components/SpotLightView';
import { PracticalLinksView } from './components/PracticalLinksView';
import { RestaurantGuideView } from './components/RestaurantGuideView';
import { Mountain, Compass, ExternalLink, Calendar, Utensils, Sparkles } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<MainTabType>('itinerary');

  return (
    <div className="min-h-screen bg-[#F8F6F0] text-stone-800 font-sans selection:bg-amber-800 selection:text-white flex flex-col justify-between">
      <div>
        {/* Header & Navigation */}
        <Header
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        {/* Main Content Viewport */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {/* Usage Notice — shown above every tab */}
          <div className="mb-8 bg-amber-100/70 border-2 border-amber-500/50 rounded-2xl p-4 sm:p-5 shadow-xs">
            <div className="font-black text-amber-900 text-sm sm:text-base mb-1.5">
              💡 溫馨提醒
            </div>
            <p className="text-amber-950/90 text-xs sm:text-sm leading-relaxed font-medium">
              本站內容均為個人整理的分享記錄。僅供私人瀏覽，請勿擅自轉載至其他公開平台或作任何商業用途。
            </p>
            <p className="mt-2 pt-2 border-t border-amber-600/25 text-amber-900/75 text-[11px] sm:text-xs leading-relaxed" lang="en">
              This website and its contents are for personal sharing only. Unauthorized reproduction,
              redistribution, or commercial use is strictly prohibited.
            </p>
          </div>

          {activeTab === 'itinerary' && <ItineraryView />}

          {activeTab === 'spots' && <SpotLightView />}

          {activeTab === 'links' && <PracticalLinksView />}

          {activeTab === 'food' && <RestaurantGuideView />}
        </main>
      </div>

      {/* Footer */}
      <footer className="mt-16 bg-[#4a2c1d] text-amber-200/80 border-t border-amber-800/40 py-10 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-800/30 border border-amber-600/30 text-amber-400">
              <Mountain className="w-5 h-5" />
            </div>
            <div>
              <div className="text-amber-100 font-bold text-sm sm:text-base tracking-wide">
                義大利13日旅遊攻略
              </div>
              <div className="text-xs text-amber-400 font-medium mt-0.5">
                @ro_c_diary
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs">
            <button
              onClick={() => setActiveTab('itinerary')}
              className="hover:text-amber-300 transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>行程表</span>
            </button>
            <span className="text-amber-900/80">•</span>
            <button
              onClick={() => setActiveTab('spots')}
              className="hover:text-amber-300 transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <Compass className="w-3.5 h-3.5" />
              <span>景點介紹</span>
            </button>
            <span className="text-amber-900/80">•</span>
            <button
              onClick={() => setActiveTab('links')}
              className="hover:text-amber-300 transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>實用連結</span>
            </button>
            <span className="text-amber-900/80">•</span>
            <button
              onClick={() => setActiveTab('food')}
              className="hover:text-amber-300 transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <Utensils className="w-3.5 h-3.5 text-amber-400" />
              <span>美饌地圖</span>
            </button>
          </div>
        </div>

        {/* AI Disclaimer Warning */}
        <div className="max-w-7xl mx-auto pt-6 mt-6 border-t border-amber-900/40 text-center text-xs text-amber-300/60 flex flex-wrap items-center justify-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-amber-500/80 shrink-0" />
          <span>聲明：本行程與攻略資訊由 AI 輔助規劃整理，景點開放時間、票價與交通管制請以各官方機構最新公告為準。</span>
        </div>
      </footer>
    </div>
  );
}
