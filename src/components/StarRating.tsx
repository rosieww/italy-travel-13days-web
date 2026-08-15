import React from 'react';
import { Star } from 'lucide-react';
import { getRestaurantRating } from '../data/italyData';

const MAX_STARS = 5;
const POSITIONS = [0, 1, 2, 3, 4];

/**
 * 推薦指數（滿分 5 顆星）。
 * 小數以「裁切上層星列寬度」呈現，因此 3.8 與 4.0 在形狀上就有差異；
 * 同時固定附上數值，不讓星形單獨承載資訊，也方便直接比較。
 * 實心色 #d97706 對白底 3.18:1，達 WCAG 非文字元素 3:1 門檻。
 */
export const StarRating: React.FC<{
  stars: number;
  note?: string;
  size?: 'sm' | 'md';
  className?: string;
}> = ({ stars, note, size = 'sm', className = '' }) => {
  const value = Math.max(0, Math.min(MAX_STARS, stars));
  const starSize = size === 'md' ? 'w-4 h-4' : 'w-3.5 h-3.5';
  const label = `推薦指數 ${value} 顆星，滿分 ${MAX_STARS} 顆星${note ? `（${note}）` : ''}`;

  return (
    <span className={`inline-flex items-center gap-1.5 flex-wrap ${className}`} title={label}>
      <span className="sr-only">{label}</span>

      <span className="relative inline-flex shrink-0" aria-hidden="true">
        <span className="flex">
          {POSITIONS.map((i) => (
            <Star
              key={i}
              className={`${starSize} text-stone-300 shrink-0`}
              fill="currentColor"
              strokeWidth={0}
            />
          ))}
        </span>
        {/* Overlay clipped to the score — carries the fractional part */}
        <span
          className="absolute inset-y-0 left-0 flex overflow-hidden"
          style={{ width: `${(value / MAX_STARS) * 100}%` }}
        >
          {POSITIONS.map((i) => (
            <Star
              key={i}
              className={`${starSize} text-[#d97706] shrink-0`}
              fill="currentColor"
              strokeWidth={0}
            />
          ))}
        </span>
      </span>

      <span
        aria-hidden="true"
        className={`font-mono tabular-nums font-black text-stone-900 ${size === 'md' ? 'text-xs' : 'text-[11px]'}`}
      >
        {value.toFixed(1)}
      </span>

      {note && (
        <span aria-hidden="true" className="text-[10px] font-bold text-stone-500">
          （{note}）
        </span>
      )}
    </span>
  );
};

/**
 * 依店名查表顯示推薦指數；未評分的補給點（超市、中央市場、麥當勞等）不渲染任何內容。
 */
export const RestaurantStars: React.FC<{
  name: string;
  size?: 'sm' | 'md';
  className?: string;
}> = ({ name, size, className }) => {
  const rating = getRestaurantRating(name);
  if (!rating) return null;
  return <StarRating stars={rating.stars} note={rating.note} size={size} className={className} />;
};
