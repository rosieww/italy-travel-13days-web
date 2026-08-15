export interface RestaurantRating {
  /** 推薦指數，滿分 5 顆星 */
  stars: number;
  /** 評分的補充說明，例如同行者意見不同 */
  note?: string;
}

export interface RestaurantItem {
  id: string;
  dayNum: number;
  city: string;
  name: string;
  type: '晚餐' | '午餐' | '冰淇淋' | '甜點/點心' | '超市採買' | '特色小吃';
  note?: string;
  isReservationRequired?: boolean;
  googleMapsUrl: string;
}

export interface TimeSlotEvent {
  time: string;
  title: string;
  detail: string;
  location?: string;
  tag?: string;
  isKeyMilestone?: boolean;
  restaurantInfo?: RestaurantItem;
  googleMapsUrl?: string;
}

export interface DayItineraryDetail {
  dayNum: number;
  dateStr: string;
  title: string;
  subtitle: string;
  heroImage: string;
  overview: string;
  timeline: TimeSlotEvent[];
  keyRules: string[];
  restaurantsAndShops: string[];
  restaurantsList?: RestaurantItem[];
  hotelName?: string;
  googleMapsUrl?: string;
}

export interface SpotInfo {
  id: string;
  name: string;
  englishName: string;
  category: 'Dolomites' | 'Venice' | 'Florence' | 'Milan' | 'LakeComo' | 'Pisa';
  image: string;
  description: string;
  highlights: string[];
  practicalTips?: string;
  webcamUrl?: string;
  reservationUrl?: string;
  /** 景點內值得單獨定位的地標，例如觀景長椅、纜車站。 */
  mapPoints?: { label: string; url: string }[];
}

export interface PracticalLinkItem {
  id: string;
  title: string;
  category: 'Parking' | 'CableCar' | 'Webcam' | 'Pass' | 'Museum' | 'Transport' | 'Reference';
  url: string;
  description: string;
  importantRule?: string;
}

export interface ExpenseItem {
  /** 項目名稱 */
  label: string;
  /** 新台幣金額，為 2 人合計實付 */
  twd: number;
  /** 現場刷卡／付現的歐元原幣，僅部分項目有記錄 */
  eur?: number;
}

export interface ExpenseCategory {
  id: string;
  label: string;
  /** 該分類涵蓋的項目說明 */
  note: string;
  /** 逐筆明細（2 人合計）。分類總額由此加總推算，不另存以免兩者失準。 */
  items: ExpenseItem[];
}

export interface Master14DayCell {
  dayNum: number;
  dateStr: string;
  dayOfWeek: string;
  cityRegion: string;
  morning: string;
  afternoon: string;
  evening: string;
  hotel: string;
  flightsOrTrains?: string;
}

