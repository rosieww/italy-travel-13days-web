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
}

export interface PracticalLinkItem {
  id: string;
  title: string;
  category: 'Parking' | 'CableCar' | 'Webcam' | 'Pass' | 'Museum' | 'Transport';
  url: string;
  description: string;
  importantRule?: string;
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

