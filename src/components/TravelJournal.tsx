import React from 'react';

const reels = ['DbvHEIhT8UT', 'Da5Fwv5zQb_', 'DcTO5ABzxyh', 'DewT00RsqQe', 'DejeRtrM4TT'];

export const TravelJournal: React.FC = () => <section className="journal-intro" aria-labelledby="journal-intro-title">
  <div><p className="journal-eyebrow">THE JOURNEY / 關於這趟旅行</p><h2 id="journal-intro-title">山的壯闊，<br/>城市的慢時光。</h2></div>
  <div><p>從米蘭出發，先把五天交給多洛米蒂。在湖畔停一停，走進高原與山徑；再搭上火車，串起威尼斯、佛羅倫斯與北義的城市風景。</p><p>這裡收錄完整的 13 日行程、沿途美食、住宿與預約功課。先看地圖找到旅程方向，再依每天的安排慢慢往下讀。</p><a href="#itinerary-sections">開始閱讀行程 <span aria-hidden="true">↘</span></a></div>
  <div className="journal-stats"><div><strong>13<small>天</small></strong><span>義大利旅程</span></div><div><strong>5<small>天</small></strong><span>多洛米蒂山間時光</span></div><div><strong>6<small>個篇章</small></strong><span>行程、美食到旅行花費</span></div><div><strong>01<small>份旅記</small></strong><span>留給下一次出發</span></div></div>
  <details className="journal-reels"><summary>旅行的另一種記錄 · 義大利影片 <span>Instagram ↗</span></summary><p>文字之外，也用影片留住沿途的片刻。</p><div>{reels.map((id, i) => <a key={id} href={`https://www.instagram.com/ro_c_diary/reel/${id}/`} target="_blank" rel="noopener noreferrer">旅行片段 {String(i+1).padStart(2, '0')} ↗</a>)}</div></details>
</section>;
