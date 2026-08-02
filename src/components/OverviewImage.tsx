import React from 'react';
import { Sparkles } from 'lucide-react';
import { assetUrl } from '../assetUrl';

export const OverviewImage: React.FC = () => {
  const imageSrc = assetUrl('/image/義大利行程概括.webp');

  return (
    <div className="bg-[#FAF7F2] border border-amber-900/15 rounded-3xl p-5 sm:p-7 shadow-xs space-y-4 relative overflow-hidden">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-amber-900/10 pb-4">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-900 bg-amber-100/80 px-3 py-1 rounded-full border border-amber-800/20 mb-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-800" />
            <span>義大利行程概括地圖導覽</span>
          </div>
          <h3 className="text-lg sm:text-xl font-black text-amber-950 flex items-center gap-2">
            <span>🗺️ 義大利行程概括地圖</span>
          </h3>
        </div>
      </div>

      {/* Image Box */}
      <div className="bg-white border border-amber-900/10 rounded-2xl overflow-hidden flex items-center justify-center min-h-[260px]">
        <div className="relative w-full flex justify-center">
          <img
            src={imageSrc}
            alt="義大利行程概括"
            className="max-h-[580px] w-full object-contain rounded-2xl shadow-xs"
          />
        </div>
      </div>
    </div>
  );
};
