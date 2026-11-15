import React from 'react';
import { Mountain, Calendar, Compass, ExternalLink, Utensils, Instagram, Hotel, Wallet, ArrowUpRight, ArrowDown } from 'lucide-react';
import { assetUrl } from '../assetUrl';

export type MainTabType = 'itinerary' | 'spots' | 'links' | 'food' | 'hotel' | 'expense';
interface HeaderProps { activeTab: MainTabType; setActiveTab: (tab: MainTabType) => void; }
const tabs = [
  {id: 'itinerary', label: '行程總覽', detail: '13 日總表・逐日行程', icon: Calendar},
  {id: 'spots', label: '景點指南', detail: '山間與城市的風景', icon: Compass},
  {id: 'links', label: '行前預約', detail: '票券・交通・實用連結', icon: ExternalLink},
  {id: 'food', label: '美食地圖', detail: '旅行中的每一餐', icon: Utensils},
  {id: 'hotel', label: '飯店住宿', detail: '沿途落腳的地方', icon: Hotel},
  {id: 'expense', label: '旅行花費', detail: '旅程預算與明細', icon: Wallet},
] as const;
export const Header: React.FC<HeaderProps> = ({activeTab, setActiveTab}) => {
  const startJourney = () => {
    setActiveTab('itinerary');
    document.getElementById('travel-content')?.scrollIntoView({behavior: 'smooth'});
  };
  return <>
    <header className="journal-masthead">
      <a href="#" className="journal-brand" aria-label="義大利旅記首頁"><Mountain size={27}/><span>走一趟，義大利<small>ROSIE’S TRAVEL JOURNAL</small></span></a>
      <span className="masthead-note">13 日旅程・多洛米蒂與北義城市</span>
    </header>
    <section className="journal-hero" aria-label="義大利旅記封面">
      <img src={assetUrl('/image/DSCF6854.webp')} alt="夕陽下的威尼斯大運河與聖母安康聖殿" fetchPriority="high"/>
      <div className="journal-hero-shade"/>
      <div className="journal-hero-copy">
        <p className="hero-greeting">Ciao, Italia.</p>
        <p className="journal-eyebrow">ITALY · DOLOMITES & NORTHERN ITALY</p>
        <h1>從山間出發，<br/>走進義大利的日常。</h1>
        <p className="hero-description">13 天，從多洛米蒂的山徑到威尼斯的水巷。<br/>把沿途的風景、美食與行前功課，收進一份旅記。</p>
        <div className="journal-hero-actions">
          <button onClick={startJourney}>跟我走一趟義大利 <ArrowDown size={17}/></button>
          <a href="https://www.instagram.com/ro_c_diary/" target="_blank" rel="noopener noreferrer"><span><strong>Instagram · @ro_c_diary</strong><small>影片與沿途的旅行片段</small></span><ArrowUpRight size={18}/></a>
        </div>
      </div>
      <div className="journal-hero-bottom"><span>VENEZIA · GRAND CANAL</span><span>義大利 13 日旅遊攻略 ↓</span></div>
    </section>
    <nav className="journal-navigation" aria-label="主要導覽"><div>
      {tabs.map(({id, label, detail, icon: Icon}, i) => <button key={id} id={`nav-tab-${id}`} aria-current={activeTab === id ? 'page' : undefined} onClick={() => setActiveTab(id)}><span className="nav-kicker">0{i+1} <Icon size={13}/></span><span>{label}</span><small>{detail}</small></button>)}
    </div></nav>
  </>;
};
