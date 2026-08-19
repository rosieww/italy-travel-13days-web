import { DayItineraryDetail, SpotInfo, PracticalLinkItem, Master14DayCell, RestaurantItem, RestaurantRating, HotelStay, ExpenseCategory } from '../types';

export const ITALY_12_DAYS: DayItineraryDetail[] = [
  {
    dayNum: 1,
    dateStr: "",
    title: "Day 1｜米蘭 Milan ➔ 多洛米蒂 Dolomites",
    subtitle: "班機抵達、SIXT 取車、卡雷扎湖與 Gardena Card 兌換",
    heroImage: "/image/DSCF4319.webp",
    overview: "長榮 BR095 班機抵達米蘭，於 SIXT 櫃檯完成取車手續（備妥國內駕照正本與國際駕照），開車約 4 小時駛入多洛米蒂山區。下午遊覽卡雷扎湖 (Lago di Carezza / Karersee) 翡翠綠倒影，開車 1.5 小時前往 Selva – Ciampinoi 櫃檯於 17:00 前換取 Gardena Card 實體卡（確認次日生效）。晚間至 DESPAR 超市採買並享用 Pizzeria Restaurant L Ciamin 披薩晚餐。",
    timeline: [
      {
        time: "上午",
        title: "班機抵達 (長榮 BR095) 與 SIXT 取車出發",
        detail: "長榮航空 BR095 班機抵達米蘭，備妥本國駕照正本與國際駕照，完成 SIXT 取車並開車前往多洛米蒂（車程約 4 小時）。",
        location: "米蘭 SIXT 租車櫃檯",
        tag: "班機取車",
        isKeyMilestone: true
      },
      {
        time: "下午",
        title: "卡雷扎湖 (Lago di Carezza / Karersee)",
        detail: "漫步於彩虹高山寶石湖畔，欣賞 Latemar 鋸齒狀山峰倒映在清澈湖面的絕景。",
        location: "Lago di Carezza",
        tag: "湖泊秘境"
      },
      {
        time: "下午 (1.5小時車程)",
        title: "開車前往加爾代納山谷 Selva",
        detail: "沿山谷景觀公路開車 1.5 小時前往 Selva di Val Gardena。",
        location: "Selva di Val Gardena",
        tag: "景觀公路"
      },
      {
        time: "傍晚",
        title: "Selva – Ciampinoi 換取 Gardena Card 實體卡",
        detail: "纜車服務中心有機器可以直接取票，不需透過人工櫃檯。",
        location: "Ciampinoi 纜車服務中心",
        tag: "票券兌換",
        isKeyMilestone: true,
        googleMapsUrl: "https://maps.app.goo.gl/EnDS5m3y7QW56J2E9"
      },
      {
        time: "晚上",
        title: "超市採買 (Supermarket Valgardena Center DESPAR)",
        detail: "採買健行隨身補給品、高山零食、礦泉水與隔日早點。",
        location: "DESPAR Supermarket Selva",
        tag: "生活採買"
      },
      {
        time: "晚上",
        title: "晚餐：🍕 Pizzeria Restaurant L Ciamin",
        detail: "品嚐現烤經典義式窯烤披薩與道地南提洛高山料理。",
        location: "Pizzeria Restaurant L Ciamin",
        tag: "特色美食",
        restaurantInfo: {
          id: "r1-1",
          dayNum: 1,
          city: "Selva",
          name: "Pizzeria Restaurant L Ciamin",
          type: "晚餐",
          note: "經典窯烤披薩與道地南提洛特色菜",
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Pizzeria+Restaurant+L+Ciamin+Selva"
        }
      }
    ],
    keyRules: [
      "SIXT 取車必須同時出示：台灣本國駕照正本 + 國際駕照。",
    ],
    restaurantsAndShops: [
      "Supermarket Valgardena Center DESPAR",
      "Pizzeria Restaurant L Ciamin"
    ],
    restaurantsList: [
      {
        id: "r1-shop",
        dayNum: 1,
        city: "Selva",
        name: "Supermarket Valgardena Center DESPAR",
        type: "超市採買",
        note: "健行零食、礦泉水與麵包採買補給",
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Supermarket+Valgardena+Center+DESPAR"
      },
      {
        id: "r1-ciamin",
        dayNum: 1,
        city: "Selva",
        name: "Pizzeria Restaurant L Ciamin",
        type: "晚餐",
        note: "經典義式窯烤披薩與南提洛特色菜",
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Pizzeria+Restaurant+L+Ciamin+Selva"
      }
    ],
    hotelName: "Hotel & Residence Antares (Selva)",
    googleMapsUrl: "https://maps.app.goo.gl/EnDS5m3y7QW56J2E9"
  },
  {
    dayNum: 2,
    dateStr: "",
    title: "Day 2｜多洛米蒂 Dolomites (休斯高原 & 刀鋒山)",
    subtitle: "P2 停車管制、休斯高原、Seceda 刀鋒山與 Panorama 夕陽",
    heroImage: "/image/DSCF4912.webp",
    overview: "精華健行日！於 08:30 前抵達並停妥 Compatsch P2 停車場 (若有變動請依官方公告為準)，漫步於休斯高原 (Alpe di Siusi)。下午搭乘纜車登頂震撼的刀鋒山 (Seceda)（纜車 17:30 關閉），並在 Ortisei 小鎮散步。傍晚前往 Panorama Alpe Siusi 看夕陽（纜車 18:00 關閉，來回約 2 小時，需帶頭燈與厚外套）。",
    timeline: [
      {
        time: "上午",
        title: "Compatsch P2 停車場",
        detail: "08:30 前駛入停妥 Compatsch P2 停車場。",
        location: "Compatsch P2 停車場",
        tag: "關鍵管制",
        isKeyMilestone: true
      },
      {
        time: "上午",
        title: "休斯高原 (Alpe di Siusi) 健行",
        detail: "漫步歐洲最大高山草甸，欣賞 Sassolungo 巨石群與阿爾卑斯木屋群。",
        location: "Alpe di Siusi",
        tag: "高原健行"
      },
      {
        time: "下午",
        title: "刀鋒山 (Seceda)（纜車 17:30 關閉）",
        detail: "搭纜車登頂絕壁斷崖，俯瞰斜插垂直深谷的陡峭山脊絕景。",
        location: "Seceda 頂峰",
        tag: "地標絕景"
      },
      {
        time: "下午",
        title: "Ortisei - Val Gardena 小鎮散步",
        detail: "漫步於小鎮彩色木屋街道、手工木雕店與咖啡館。",
        location: "Ortisei 市中心",
        tag: "小鎮散步"
      },
      {
        time: "傍晚",
        title: "休斯高原 (Panorama Alpe Siusi) 看夕陽",
        detail: "來回約 2 小時，欣賞金黃色落日照耀高山草原。因纜車 18:00 關閉，下山需自備頭燈與保暖厚外套。",
        location: "Panorama Alpe Siusi",
        tag: "高原夕陽"
      },
      {
        time: "晚上",
        title: "休息與自由活動",
        detail: "返回飯店休息，舒緩一日健行肌肉。",
        location: "Hotel & Residence Antares",
        tag: "自由休息",
        googleMapsUrl: "https://maps.app.goo.gl/EnDS5m3y7QW56J2E9"
      }
    ],
    keyRules: [
      "Compatsch P2 停車場務必於 08:30 前抵達停妥。",
      "Seceda 刀鋒山纜車末班車於 17:30 關閉，請切勿錯過下山班次。",
      "Panorama 夕陽健行纜車於 18:00 關閉，下山步道需攜帶頭燈與保暖厚外套。"
    ],
    restaurantsAndShops: [],
    restaurantsList: [],
    hotelName: "Hotel & Residence Antares (Selva)",
    googleMapsUrl: "https://maps.app.goo.gl/EnDS5m3y7QW56J2E9"
  },
  {
    dayNum: 3,
    dateStr: "",
    title: "Day 3｜多洛米蒂 Dolomites (Sassolungo 長石山)",
    subtitle: "Sassolungo 長石山、Passo Sella 隘口與 Cortina 飯店 Check-in 晚餐",
    heroImage: "/image/DSCF5071.webp",
    overview: "前往 Sassolungo (長石山) Passo Sella 隘口欣賞巨石奇峰與龐大白雲石峭壁。傍晚開車 90 分鐘前往 Cortina 飯店 Check-in，晚間於飯店附設餐廳點餐享用晚餐。",
    timeline: [
      {
        time: "下午",
        title: "Sassolungo (長石山) 巨石陣與 Passo Sella",
        detail: "直面長石山垂直拔地的龐大白雲石峭壁，感受自然的壯麗尊嚴。",
        location: "Passo Sella / Sassolungo",
        tag: "巨石奇觀",
        isKeyMilestone: true
      },
      {
        time: "傍晚",
        title: "開車 90 分鐘前往飯店",
        detail: "沿高山公路開車 90 分鐘前往 Cortina 區飯店 Check-in。",
        location: "Hotel Menardi (Cortina)",
        tag: "公路自駕"
      },
      {
        time: "晚上",
        title: "飯店享用晚餐",
        detail: "於飯店附設餐廳享用晚餐。",
        location: "Hotel Menardi Restaurant",
        tag: "飯店晚餐"
      }
    ],
    keyRules: [
      "開車前往飯店山路約 90 分鐘，高山彎道較多請注意行車安全。"
    ],
    restaurantsAndShops: [
      "Hotel Menardi Restaurant"
    ],
    restaurantsList: [
      {
        id: "r3-hotel",
        dayNum: 3,
        city: "Cortina",
        name: "Hotel Menardi Restaurant",
        type: "晚餐",
        note: "飯店附設餐廳，依菜單自行單點晚餐",
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Hotel+Menardi+Cortina"
      }
    ],
    hotelName: "Hotel Menardi (Cortina d'Ampezzo)",
    googleMapsUrl: "https://maps.google.com/?q=Hotel+Menardi+Cortina+Italy"
  },
  {
    dayNum: 4,
    dateStr: "",
    title: "Day 4｜三尖峰 Tre Cime & 魔戒線路",
    subtitle: "Auronzo 停車管制、魔戒懸崖觀景台、三尖峰環山線與 Cortina 晚宴",
    heroImage: "/image/DSCF5853.webp",
    overview: "06:30 過後通過閘門進入 Auronzo 山屋停車場。上午先前往魔戒線路 (Cadini di Misurina Panoramic Viewpoint via Auronzo Hut)（約 2 小時）與 Vista Panoramica Tre Cime Lavaredo。下午展開三尖峰環山線路健行（約 4 小時）。結束後離開停車場，晚上前往 Cortina 享用 La Tavernetta di Cortina 晚餐。",
    timeline: [
      {
        time: "早晨 (06:30)",
        title: "進入 Auronzo 停車場",
        detail: "根據預約的時間，06:30 過後通過閘門進入 Auronzo 山屋停車場，可以超過預約時間進入，但需要在預約時間起算的12小時內離開。",
        location: "Rifugio Auronzo 停車場",
        tag: "關鍵管制",
        isKeyMilestone: true
      },
      {
        time: "上午",
        title: "魔戒線路 (Cadini di Misurina Panoramic Viewpoint)",
        detail: "經 Auronzo 山屋前往魔戒電影般震撼的懸崖觀景台（約 2 小時）。",
        location: "Cadini di Misurina",
        tag: "魔戒視角",
        isKeyMilestone: true
      },
      {
        time: "中午",
        title: "Vista Panoramica Tre Cime Lavaredo",
        detail: "停靠全景觀景點，留下三尖峰遠眺宏偉影像。",
        location: "Vista Panoramica",
        tag: "全景遠眺"
      },
      {
        time: "下午",
        title: "三尖峰環山線路健行（約 4 小時）",
        detail: "三尖峰經典大環線 (Trail 101/102/105)：Auronzo ➔ Lavaredo ➔ Locatelli ➔ Langalm。沿途山屋都設有廁所，記得準備 1 歐元零錢。",
        location: "Tre Cime di Lavaredo",
        tag: "核心大縱走"
      },
      {
        time: "傍晚",
        title: "離開 Auronzo 停車場",
        detail: "開車駛下山路前往 Cortina 鎮區。",
        location: "Rifugio Auronzo",
        tag: "下山公路"
      },
      {
        time: "晚上",
        title: "晚餐：La Tavernetta di Cortina",
        detail: "於 Cortina 名店享用熱騰騰的經典義式手工肉醬義大利麵。",
        location: "La Tavernetta di Cortina",
        tag: "名店晚宴",
        restaurantInfo: {
          id: "r4-tavernetta",
          dayNum: 4,
          city: "Cortina",
          name: "La Tavernetta di Cortina",
          type: "晚餐",
          note: "Cortina 名店，溫馨義式餐酒與傳統手工義大利麵",
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=La+Tavernetta+di+Cortina"
        }
      }
    ],
    keyRules: [
      "根據預約時間通過閘門進入 Auronzo 山屋停車場，可以超過預約時間進入，但需要在預約時間起算的12小時內離開。",
      "Cadini Viewpoint 懸崖兩側極深，強風或地面濕滑時請注意安全。"
    ],
    restaurantsAndShops: [
      "La Tavernetta di Cortina"
    ],
    restaurantsList: [
      {
        id: "r4-tavernetta",
        dayNum: 4,
        city: "Cortina",
        name: "La Tavernetta di Cortina",
        type: "晚餐",
        note: "Cortina 極具口碑的溫馨美饌義餐",
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=La+Tavernetta+di+Cortina"
      }
    ],
    hotelName: "Hotel Menardi (Cortina d'Ampezzo)",
    googleMapsUrl: "https://maps.google.com/?q=Tre+Cime+di+Lavaredo+Italy"
  },
  {
    dayNum: 5,
    dateStr: "",
    title: "Day 5｜布萊埃斯湖 ➔ 威尼斯 Venice",
    subtitle: "布萊埃斯湖晨光、威尼斯還車、Despar Teatro Italia 劇院超市與 TRATTORIA AL POGGIO",
    heroImage: "/image/DSCF6040.webp",
    overview: "上午退房後開車約 50 分鐘前往布萊埃斯湖 (Lago di Braies) 漫步。下午開車 2 小時前往威尼斯 (Venice Piazzale Roma / Mestre) 完成還車手續，並於火車站自助售票機取 Rolling Venice Card 通行票。傍晚至劇院改建的華麗超市 Despar Teatro Italia 採買，晚上於 TRATTORIA AL POGGIO 享用晚餐。",
    timeline: [
      {
        time: "上午",
        title: "退房並開車前往布萊埃斯湖",
        detail: "辦理 Check-out，開車約 50 分鐘前往 Lago di Braies。",
        location: "Hotel Menardi ➔ Lago di Braies",
        tag: "晨間車程"
      },
      {
        time: "上午",
        title: "布萊埃斯湖 (Lago di Braies)",
        detail: "漫步於湖畔松林與古典木船屋，感受千仞石壁倒映在碧綠湖面上的夢幻晨景。",
        location: "Lago di Braies",
        tag: "夢幻湖景",
        isKeyMilestone: true
      },
      {
        time: "下午",
        title: "開車 2 小時前往威尼斯",
        detail: "沿 A27 高速公路駛往威尼斯 (Venice)。",
        location: "A27 高速公路",
        tag: "長途自駕"
      },
      {
        time: "下午",
        title: "威尼斯辦理還車",
        detail: "於 Piazzale Roma / Mestre 還車據點順利歸還車輛。",
        location: "威尼斯租車點",
        tag: "還車結案",
        isKeyMilestone: true
      },
      {
        time: "下午",
        title: "火車站自助售票機取票（Rolling Venice card）",
        detail: "前往威尼斯火車站機台輸入碼領取 Rolling Venice Card 水上巴士通行證。",
        location: "Venezia Santa Lucia 火車站",
        tag: "票券領取"
      },
      {
        time: "傍晚",
        title: "劇院超市採買 (Despar Teatro Italia)",
        detail: "朝聖由 20 世紀劇院改建、充滿古典壁畫與璀璨燈飾的威尼斯最美超市 Despar Teatro Italia，採買零食、飲品與伴手禮。",
        location: "Despar Teatro Italia",
        tag: "劇院超市",
        isKeyMilestone: true,
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Despar+Teatro+Italia+Venice",
        restaurantInfo: {
          id: "r5-despar",
          dayNum: 5,
          city: "Venice",
          name: "Despar Teatro Italia",
          type: "超市採買",
          note: "百年劇院改建的威尼斯華麗超市",
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Despar+Teatro+Italia+Venice"
        }
      },
      {
        time: "晚上",
        title: "晚餐：🍽️ TRATTORIA AL POGGIO",
        detail: "享用美味的威尼斯傳統海鮮墨魚麵與義式料理。",
        location: "TRATTORIA AL POGGIO (Venice)",
        tag: "特色海鮮",
        restaurantInfo: {
          id: "r5-poggio",
          dayNum: 5,
          city: "Venice",
          name: "TRATTORIA AL POGGIO",
          type: "晚餐",
          note: "威尼斯運河邊道地義式餐廳",
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=TRATTORIA+AL+POGGIO+Venice"
        }
      }
    ],
    keyRules: [
      "還車前務必加滿油箱，並保留加油發票供租車公司查驗。",
      "火車站取票時請準備好 Rolling Venice Card 預約代碼。"
    ],
    restaurantsAndShops: [
      "Despar Teatro Italia",
      "TRATTORIA AL POGGIO"
    ],
    restaurantsList: [
      {
        id: "r5-despar",
        dayNum: 5,
        city: "Venice",
        name: "Despar Teatro Italia",
        type: "超市採買",
        note: "百年劇院改建的威尼斯最美超市",
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Despar+Teatro+Italia+Venice"
      },
      {
        id: "r5-poggio",
        dayNum: 5,
        city: "Venice",
        name: "TRATTORIA AL POGGIO",
        type: "晚餐",
        note: "威尼斯水道旁的傳統特調海鮮義麵",
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=TRATTORIA+AL+POGGIO+Venice"
      }
    ],
    hotelName: "Leone Hotel (Venice)",
    googleMapsUrl: "https://maps.google.com/?q=Venice+Italy"
  },
  {
    dayNum: 6,
    dateStr: "",
    title: "Day 6｜威尼斯 Venice 核心景點與美食探秘",
    subtitle: "聖馬可廣場、Suso 與 Gallonetto 冰淇淋、I Tre Mercanti 提拉米蘇、Da Mamo 與雙夕陽",
    heroImage: "/image/DSCF6490.webp",
    overview: "上午探索聖馬可廣場、聖馬可大教堂、總督宮與歎息橋。午餐於 Da Mamo 享用精緻義餐。下午品嚐 Suso 與 Gelateria Gallonetto 極品冰淇淋，以及 I Tre Mercanti 的現做提拉米蘇 (Tiramisù)，並於里阿爾托橋散步。傍晚先後至 Baia del re 與學院橋捕捉威尼斯絕美落日。",
    timeline: [
      {
        time: "上午",
        title: "聖馬可廣場、聖馬可大教堂、總督宮、嘆息橋",
        detail: "漫步於威尼斯心臟地帶，欣賞聖馬可大教堂的拜占庭黃金壁畫與總督宮古典拱廊。",
        location: "Piazza San Marco",
        tag: "世界遺產",
        isKeyMilestone: true
      },
      {
        time: "中午",
        title: "午餐：🍽️ Da Mamo",
        detail: "威尼斯極具人氣的美味義式小館，享用海鮮燉飯與薄餅披薩。",
        location: "Trattoria Da Mamo",
        tag: "美味午餐",
        isKeyMilestone: true,
        restaurantInfo: {
          id: "r6-mamo",
          dayNum: 6,
          city: "Venice",
          name: "Da Mamo",
          type: "午餐",
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Trattoria+Da+Mamo+Venice"
        }
      },
      {
        time: "下午",
        title: "冰淇淋 🍦 Suso、Gelateria Gallonetto & 甜點 🍰 I Tre Mercanti",
        detail: "品嚐 Suso 經典夾心 Gelato、Gallonetto 手工冰淇淋與 I Tre Mercanti 現做濃郁提拉米蘇。",
        location: "威尼斯舊城區",
        tag: "甜點冰淇淋"
      },
      {
        time: "下午",
        title: "里阿爾托橋 (Ponte di Rialto) 散步",
        detail: "漫步大運河最古老的石造巨橋，俯瞰運河船隻往來。",
        location: "Rialto Bridge",
        tag: "經典橋樑"
      },
      {
        time: "傍晚",
        title: "Baia del re 看夕陽",
        detail: "於 Baia del re 欣賞第一道夕陽金黃餘暉。",
        location: "Baia del re",
        tag: "第一夕陽點"
      }
    ],
    restaurantsAndShops: [
      "Da Mamo",
      "Suso Gelatoteca",
      "Gelateria Gallonetto",
      "I Tre Mercanti (Tiramisù)"
    ],
    restaurantsList: [
      {
        id: "r6-mamo",
        dayNum: 6,
        city: "Venice",
        name: "Da Mamo",
        type: "午餐",
        note: "威尼斯高人氣精緻義餐",
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Trattoria+Da+Mamo+Venice"
      },
      {
        id: "r6-suso",
        dayNum: 6,
        city: "Venice",
        name: "Suso Gelatoteca",
        type: "冰淇淋",
        note: "威尼斯最火紅排隊 Gelato 冰淇淋",
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Gelatoteca+Suso+Venice"
      },
      {
        id: "r6-gallonetto",
        dayNum: 6,
        city: "Venice",
        name: "Gelateria Gallonetto",
        type: "冰淇淋",
        note: "濃郁精緻手工 Gelato",
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Gelateria+Gallonetto+Venice"
      },
      {
        id: "r6-tre-mercanti",
        dayNum: 6,
        city: "Venice",
        name: "I Tre Mercanti (Tiramisù)",
        type: "甜點/點心",
        note: "威尼斯第一名的現做提拉米蘇專賣店",
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=I+Tre+Mercanti+Tiramisu+Venice"
      }
    ],
    hotelName: "Leone Hotel (Venice)",
    googleMapsUrl: "https://maps.google.com/?q=Piazza+San+Marco+Venice"
  },
  {
    dayNum: 7,
    dateStr: "",
    title: "Day 7｜威尼斯跳島 (Murano & Burano) & 大運河船遊",
    subtitle: "玻璃島、彩色島、Trattoria Bar Pontini 午餐、Acqua e Mais 炸海鮮與 1 號水上巴士",
    heroImage: "/image/DSCF6700.webp",
    overview: "上午搭水上巴士展開跳島：Murano 玻璃島欣賞吹玻璃工藝，Burano 彩色島拍攝繽紛彩虹小屋。下午返主島於 Trattoria Bar Pontini 享用海鮮麵午餐，二訪 Gelateria Gallonetto 冰淇淋，散步至沈船書店 (Libreria Acqua Alta) 並品嚐 Acqua e Mais 現炸海鮮。搭乘 1 號水上巴士悠閒巡遊大運河，傍晚於學院橋看夕陽。",
    timeline: [
      {
        time: "上午",
        title: "Murano 玻璃島",
        detail: "參觀百年玻璃工作坊，觀賞工匠現場吹製精美水晶玻璃藝品。",
        location: "Murano Island",
        tag: "玻璃工藝"
      },
      {
        time: "上午",
        title: "Burano 彩色島",
        detail: "漫步於如夢似幻的彩虹房屋小鎮，拍出童話風精彩照片。",
        location: "Burano Island",
        tag: "彩虹小鎮",
        isKeyMilestone: true
      },
      {
        time: "下午",
        title: "午餐：🍽️ Trattoria Bar Pontini",
        detail: "威尼斯超高人氣名店，大碗鮮美海鮮義大利麵與墨魚麵。",
        location: "Trattoria Bar Pontini",
        tag: "人氣海鮮",
        isKeyMilestone: true,
        restaurantInfo: {
          id: "r7-pontini",
          dayNum: 7,
          city: "Venice",
          name: "Trattoria Bar Pontini",
          type: "午餐",
          note: "大碗飽滿鮮美海鮮麵排隊名店",
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Trattoria+Bar+Pontini+Venice"
        }
      },
      {
        time: "下午",
        title: "冰淇淋 🍦 Gelateria Gallonetto（二訪）",
        detail: "再次品嚐高畫質質感的美味 Gelato。",
        location: "Gelateria Gallonetto",
        tag: "美味 Gelato"
      },
      {
        time: "下午",
        title: "沈船書店 (Libreria Acqua Alta) & 散步",
        detail: "探訪擺滿舊書貢多拉與浴缸的特色沈船書店。",
        location: "Libreria Acqua Alta",
        tag: "打卡景點"
      },
      {
        time: "下午",
        title: "點心：🍢 Acqua e Mais (炸海鮮)",
        detail: "品嚐用紙錐盒盛裝的現炸新鮮花枝、小蝦與魚塊傳統地道小吃。",
        location: "Acqua e Mais",
        tag: "地道小吃",
        restaurantInfo: {
          id: "r7-mais",
          dayNum: 7,
          city: "Venice",
          name: "Acqua e Mais",
          type: "特色小吃",
          note: "紙錐盒盛裝現炸海鮮小吃名店",
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Acqua+e+Mais+Venice"
        }
      },
      {
        time: "下午",
        title: "搭乘 1 號水上巴士（遊覽大運河經典公車船）",
        detail: "搭乘 1 號線沿大運河悠閒飄盪，欣賞沿岸兩側水上宮殿建築。",
        location: "Grand Canal (大運河)",
        tag: "大運河巡遊"
      },
      {
        time: "晚上",
        title: "學院橋 看夕陽",
        detail: "再次於學院橋俯瞰威尼斯大運河黃昏美景。",
        location: "Ponte dell'Accademia",
        tag: "水都夕陽"
      }
    ],
    keyRules: [
      "Trattoria Bar Pontini 生意極佳，建議提早於營業前 15 分鐘現場排隊。",
      "跳島水上巴士請隨身刷 Rolling Venice Card 通行證。"
    ],
    restaurantsAndShops: [
      "Trattoria Bar Pontini",
      "Gelateria Gallonetto",
      "Acqua e Mais (炸海鮮)"
    ],
    restaurantsList: [
      {
        id: "r7-pontini",
        dayNum: 7,
        city: "Venice",
        name: "Trattoria Bar Pontini",
        type: "午餐",
        note: "威尼斯大份量鮮美海鮮義大利麵名店",
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Trattoria+Bar+Pontini+Venice"
      },
      {
        id: "r7-gallonetto",
        dayNum: 7,
        city: "Venice",
        name: "Gelateria Gallonetto",
        type: "冰淇淋",
        note: "二訪精緻手工冰淇淋",
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Gelateria+Gallonetto+Venice"
      },
      {
        id: "r7-mais",
        dayNum: 7,
        city: "Venice",
        name: "Acqua e Mais",
        type: "特色小吃",
        note: "紙錐盒裝外帶現炸海鮮點心",
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Acqua+e+Mais+Venice"
      }
    ],
    hotelName: "Leone Hotel (Venice)",
    googleMapsUrl: "https://maps.google.com/?q=Burano+Venice"
  },
  {
    dayNum: 8,
    dateStr: "",
    title: "Day 8｜威尼斯 ➔ 佛羅倫斯 Florence",
    subtitle: "火車轉移、All’Antico Vinaio 三明治、烏菲茲美術館、Trattoria Zà Zà 大牛排與 GROM",
    heroImage: "/image/DSCF7135.webp",
    overview: "上午搭乘高鐵前往佛羅倫斯，飯店寄放行李。午餐排隊品嚐 All’Antico Vinaio 經典巨型帕尼尼。下午參觀烏菲茲美術館 (Uffizi Gallery, 預約)，順遊野豬噴泉、領主廣場、傭兵涼廊與 Giunti Odeon 影城劇院。晚上於預約名店 Trattoria Zà Zà 享用道地托斯卡尼丁骨大牛排，並品嚐 GROM 冰淇淋。",
    timeline: [
      {
        time: "上午",
        title: "搭乘火車前往佛羅倫斯",
        detail: "自威尼斯 Santa Lucia 搭乘高鐵抵達佛羅倫斯 SMN 火車站，前往飯店寄放行李。",
        location: "Firenze SMN 火車站",
        tag: "高鐵移動"
      },
      {
        time: "下午",
        title: "午餐：🥪 All’Antico Vinaio",
        detail: "全義大利最火紅的巨型帕尼尼，夾入現切托斯卡尼生火腿與松露起司醬。",
        location: "All’Antico Vinaio",
        tag: "排隊名店",
        isKeyMilestone: true,
        restaurantInfo: {
          id: "r8-vinaio",
          dayNum: 8,
          city: "Florence",
          name: "All’Antico Vinaio",
          type: "午餐",
          note: "全網爆紅巨型托斯卡尼生火腿帕尼尼",
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=All+Antico+Vinaio+Florence"
        }
      },
      {
        time: "下午",
        title: "烏菲茲美術館 (Uffizi Gallery, 預約)",
        detail: "入內欣賞達文西、波提切利《維納斯的誕生》等文藝復興大師真蹟。",
        location: "Uffizi Gallery",
        tag: "藝術殿堂",
        isKeyMilestone: true
      },
      {
        time: "下午",
        title: "野豬噴泉、領主廣場、傭兵涼廊 & Giunti Odeon",
        detail: "摸野豬鼻求好運，欣賞領主廣場雕塑與古典影城文創空間 Giunti Odeon。",
        location: "Piazza della Signoria",
        tag: "名勝巡禮"
      },
      {
        time: "晚上",
        title: "晚餐：🍽️ Trattoria Zà Zà（預約）",
        detail: "於百年人氣名店享用 1kg 托斯卡尼丁骨大牛排 (Bistecca alla Fiorentina)。",
        location: "Trattoria Zà Zà",
        tag: "必吃牛排",
        isKeyMilestone: true,
        restaurantInfo: {
          id: "r8-zaza",
          dayNum: 8,
          city: "Florence",
          name: "Trattoria Zà Zà",
          type: "晚餐",
          isReservationRequired: true,
          note: "必吃預約名店 1kg 托斯卡尼大牛排",
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Trattoria+ZaZa+Florence"
        }
      },
      {
        time: "晚上",
        title: "冰淇淋 🍦 GROM",
        detail: "飯後品嚐 GROM 濃郁手工義式冰淇淋。",
        location: "GROM Gelateria",
        tag: "經典冰淇淋",
        restaurantInfo: {
          id: "r8-grom",
          dayNum: 8,
          city: "Florence",
          name: "GROM",
          type: "冰淇淋",
          note: "義大利天然濃郁 Gelato 名店",
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Grom+Gelateria+Florence"
        }
      }
    ],
    keyRules: [
      "烏菲茲美術館入場需憑預約單換票，請提前 15 分鐘抵達專屬通道。",
      "Trattoria Zà Zà 為熱門名店，必須提前訂位以確保順利用餐。"
    ],
    restaurantsAndShops: [
      "All’Antico Vinaio",
      "Trattoria Zà Zà",
      "GROM"
    ],
    restaurantsList: [
      {
        id: "r8-vinaio",
        dayNum: 8,
        city: "Florence",
        name: "All’Antico Vinaio",
        type: "午餐",
        note: "佛羅倫斯排隊名店巨型三明治",
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=All+Antico+Vinaio+Florence"
      },
      {
        id: "r8-zaza",
        dayNum: 8,
        city: "Florence",
        name: "Trattoria Zà Zà",
        type: "晚餐",
        isReservationRequired: true,
        note: "必吃預約名店托斯卡尼大牛排",
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Trattoria+ZaZa+Florence"
      },
      {
        id: "r8-grom",
        dayNum: 8,
        city: "Florence",
        name: "GROM",
        type: "冰淇淋",
        note: "經典濃郁手工 Gelato",
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Grom+Gelateria+Florence"
      }
    ],
    hotelName: "Apollo Guest House (Florence)",
    googleMapsUrl: "https://maps.google.com/?q=Uffizi+Gallery+Florence"
  },
  {
    dayNum: 9,
    dateStr: "",
    title: "Day 9｜佛羅倫斯 Florence 藝術與奢華 (⚠️ 服裝規定)",
    subtitle: "中央市場、百花大教堂、Panini Toscani、老橋、La Strega Nocciola、SMN 修道院與學院美術館",
    heroImage: "/image/DSCF7274.webp",
    overview: "⚠️ 服裝警訊：進入聖母百花大教堂不能穿短褲、露肩！上午造訪中央市場與聖母百花大教堂。午餐品嚐 Panini Toscani 客製化三明治。下午至老橋散步、品嚐 La Strega Nocciola 榛果冰淇淋、逛 SMN 百年修道院香水坊與參觀學院美術館 (看大衛像, 預約)。晚上於中央市場美食廣場享用多樣化晚餐。",
    timeline: [
      {
        time: "上午",
        title: "中央市場 (Mercato Centrale)",
        detail: "體驗佛羅倫斯在地食材市場，欣賞起司、生火腿與火腿臘腸攤位。",
        location: "Mercato Centrale",
        tag: "在地市場"
      },
      {
        time: "上午",
        title: "聖母百花大教堂 (⚠️ 服裝規定)",
        detail: "仰望布魯內萊斯基宏偉圓頂與哥德式大理石外牆。注意：不能穿短褲、露肩！",
        location: "Duomo di Firenze",
        tag: "地標建築",
        isKeyMilestone: true
      },
      {
        time: "下午",
        title: "午餐：🥪 Panini Toscani",
        detail: "位於教堂旁邊，親自試吃選配托斯卡尼起司與臘腸的客製化三明治。",
        location: "Panini Toscani",
        tag: "客製三明治",
        isKeyMilestone: true,
        restaurantInfo: {
          id: "r9-toscani",
          dayNum: 9,
          city: "Florence",
          name: "Panini Toscani",
          type: "午餐",
          note: "店員熱情提供起司肉品試吃後客製三明治",
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Panini+Toscani+Florence"
        }
      },
      {
        time: "下午",
        title: "老橋 (Ponte Vecchio) / 冰淇淋 🍦 La Strega Nocciola",
        detail: "漫步阿諾河最老金飾老橋，並品嚐 La Strega Nocciola 的極致榛果冰淇淋。",
        location: "Ponte Vecchio",
        tag: "經典老橋",
        restaurantInfo: {
          id: "r9-strega",
          dayNum: 9,
          city: "Florence",
          name: "La Strega Nocciola",
          type: "冰淇淋",
          note: "主打濃郁高質感榛果冰淇淋",
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=La+Strega+Nocciola+Florence"
        }
      },
      {
        time: "下午",
        title: "SMN 百年修道院（香水）",
        detail: "造訪全世界最古老的藥妝修道院 Officina Profumo-Farmaceutica di Santa Maria Novella。",
        location: "Santa Maria Novella Pharmacy",
        tag: "百年香氛"
      },
      {
        time: "下午",
        title: "學院美術館（預約）",
        detail: "按預約時間入場親眼目睹米開朗基羅雕刻傑作《大衛像》。",
        location: "Accademia Gallery",
        tag: "大衛巨作",
        isKeyMilestone: true
      },
      {
        time: "晚上",
        title: "晚餐：🍽️ 中央市場 (Mercato Centrale)",
        detail: "於中央市場二樓熱鬧美食廣場品嚐牛膝包、現做義大利麵與熟食。",
        location: "Mercato Centrale 2F",
        tag: "美食廣場",
        restaurantInfo: {
          id: "r9-mercato",
          dayNum: 9,
          city: "Florence",
          name: "Mercato Centrale 中央市場二樓美食區",
          type: "晚餐",
          note: "熱鬧美食廣場，牛肚包與現做熱食",
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Mercato+Centrale+Florence"
        }
      }
    ],
    keyRules: [
      "⚠️ 服裝嚴格規定：進入聖母百花大教堂不能穿短褲、露肩。",
      "學院美術館大衛像入場時間固定，請按預約時段排隊。"
    ],
    restaurantsAndShops: [
      "Panini Toscani",
      "La Strega Nocciola",
      "Mercato Centrale 中央市場"
    ],
    restaurantsList: [
      {
        id: "r9-toscani",
        dayNum: 9,
        city: "Florence",
        name: "Panini Toscani",
        type: "午餐",
        note: "親自試吃起司肉品後現做經典帕尼尼",
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Panini+Toscani+Florence"
      },
      {
        id: "r9-strega",
        dayNum: 9,
        city: "Florence",
        name: "La Strega Nocciola",
        type: "冰淇淋",
        note: "高質感榛果風味 Gelato",
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=La+Strega+Nocciola+Florence"
      },
      {
        id: "r9-mercato",
        dayNum: 9,
        city: "Florence",
        name: "Mercato Centrale 中央市場",
        type: "晚餐",
        note: "熱鬧美食廣場，多樣在地美饌",
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Mercato+Centrale+Florence"
      }
    ],
    hotelName: "Apollo Guest House (Florence)",
    googleMapsUrl: "https://maps.google.com/?q=Accademia+Gallery+Florence"
  },
  {
    dayNum: 10,
    dateStr: "",
    title: "Day 10｜比薩 Pisa ➔ 佛羅倫斯 Florence",
    subtitle: "奇蹟廣場比薩斜塔、Sergio Gozzi 午餐、Hosteria del Bricco 與米開朗基羅廣場夜景",
    heroImage: "/image/DSCF7589.webp",
    overview: "上午搭乘火車前往比薩半日遊，遊覽奇蹟廣場與比薩斜塔。下午搭乘火車返抵佛羅倫斯（車程約 1 小時），午餐於老字號 Trattoria Sergio Gozzi 享用。午後至共和廣場逛街購物與老橋散步。晚上於 Hosteria del Bricco 享用精緻晚餐，隨後前往米開朗基羅廣場看夕陽與俯瞰全城璀璨夜景。",
    timeline: [
      {
        time: "上午",
        title: "比薩半日遊（奇蹟廣場、比薩斜塔）",
        detail: "搭火車至 Pisa Central，拍攝經典扶斜塔趣味照，欣賞奇蹟廣場主教堂與洗禮堂。",
        location: "Piazza dei Miracoli (Pisa)",
        tag: "奇蹟斜塔",
        isKeyMilestone: true
      },
      {
        time: "下午 (車程1小時)",
        title: "搭乘火車返回佛羅倫斯",
        detail: "搭火車約 1 小時回到佛羅倫斯 SMN 車站。",
        location: "Firenze SMN",
        tag: "火車返回"
      },
      {
        time: "下午",
        title: "午餐：🍽️ Trattoria Sergio Gozzi",
        detail: "位於聖洛倫佐廣場的老字號道地家常托斯卡尼午餐餐館。",
        location: "Trattoria Sergio Gozzi",
        tag: "老字號家常",
        isKeyMilestone: true,
        restaurantInfo: {
          id: "r10-gozzi",
          dayNum: 10,
          city: "Florence",
          name: "Trattoria Sergio Gozzi",
          type: "午餐",
          note: "僅限午餐營業的佛羅倫斯百年傳統老館",
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Trattoria+Sergio+Gozzi+Florence"
        }
      },
      {
        time: "下午",
        title: "共和廣場 (Piazza della Repubblica) & 逛街 / 老橋散步",
        detail: "漫步旋轉木馬廣場與精品街，並在老橋上欣賞阿諾河畔景緻。",
        location: "Piazza della Repubblica",
        tag: "市區逛街"
      },
      {
        time: "晚上",
        title: "晚餐：🍽️ Hosteria del Bricco",
        detail: "位於奧特拉諾區的精緻質感溫馨義式餐酒館。",
        location: "Hosteria del Bricco",
        tag: "質感餐酒",
        restaurantInfo: {
          id: "r10-bricco",
          dayNum: 10,
          city: "Florence",
          name: "Hosteria del Bricco",
          type: "晚餐",
          note: "河對岸氣氛極佳的純正托斯卡尼餐酒館",
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Hosteria+del+Bricco+Florence"
        }
      },
      {
        time: "晚上",
        title: "米開朗基羅廣場 (Piazzale Michelangelo) 看夕陽與夜景",
        detail: "登上全城最高觀景高地，俯瞰紅磚圓頂大教堂與阿諾河金黃落日與萬家燈火。",
        location: "Piazzale Michelangelo",
        tag: "絕美夜景",
        isKeyMilestone: true
      }
    ],
    keyRules: [
      "Trattoria Sergio Gozzi 僅提供午餐時段，建議提早前往。",
      "前往米開朗基羅廣場可搭乘 12/13 號公車或步行上山。"
    ],
    restaurantsAndShops: [
      "Trattoria Sergio Gozzi",
      "Hosteria del Bricco"
    ],
    restaurantsList: [
      {
        id: "r10-gozzi",
        dayNum: 10,
        city: "Florence",
        name: "Trattoria Sergio Gozzi",
        type: "午餐",
        note: "老字號傳統家常托斯卡尼美味午餐",
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Trattoria+Sergio+Gozzi+Florence"
      },
      {
        id: "r10-bricco",
        dayNum: 10,
        city: "Florence",
        name: "Hosteria del Bricco",
        type: "晚餐",
        note: "奧特拉諾區氣氛極佳的義式餐酒館",
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Hosteria+del+Bricco+Florence"
      }
    ],
    hotelName: "Apollo Guest House (Florence)",
    googleMapsUrl: "https://maps.google.com/?q=Piazzale+Michelangelo+Florence"
  },
  {
    dayNum: 11,
    dateStr: "",
    title: "Day 11｜佛羅倫斯 ➔ 米蘭 Milan (⚠️ 服裝規定)",
    subtitle: "最後的晚餐、Bentoteca Milano 午餐、米蘭大教堂、Chocolat 冰淇淋與 Sorbillo 炸披薩",
    heroImage: "/image/DSCF7837.webp",
    overview: "⚠️ 服裝警訊：進入米蘭大教堂不能穿短褲、露肩！上午搭乘火車前往米蘭 Check-in，參觀達文西名作《最後的晚餐》(預約須提前完成取票)。午餐於預約名店 Bentoteca Milano 享用日義結合創意料理。下午登頂米蘭大教堂並逛埃馬努埃萊二世拱廊。傍晚品嚐 Chocolat Milano 巧克力冰淇淋，晚餐享用 Zia Esterina Sorbillo 包餡炸披薩。",
    timeline: [
      {
        time: "上午",
        title: "搭乘火車前往米蘭，飯店 Check-in",
        detail: "搭高鐵抵達 Milano Centrale，前往 Residence De La Gare 辦理入住手續。",
        location: "Residence De La Gare",
        tag: "高鐵轉移",
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Residence+De+La+Gare+Milan"
      },
      {
        time: "上午",
        title: "達文西 《最後的晚餐》（預約須提前取票）",
        detail: "於 Santa Maria delle Grazie 憑預約信現場換票，進入修道院飯廳親眼觀賞達文西曠世真蹟。",
        location: "Santa Maria delle Grazie",
        tag: "世紀真蹟",
        isKeyMilestone: true
      },
      {
        time: "下午",
        title: "午餐：🍽️ Bentoteca Milano（預約）",
        detail: "米蘭超紅的現代日義融合餐館。",
        location: "Bentoteca Milano",
        tag: "預約名店",
        isKeyMilestone: true,
        restaurantInfo: {
          id: "r11-bentoteca",
          dayNum: 11,
          city: "Milan",
          name: "Bentoteca Milano",
          type: "午餐",
          isReservationRequired: true,
          note: "米蘭極受歡迎的現代日義創意料理",
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bentoteca+Milano"
        }
      },
      {
        time: "下午",
        title: "米蘭大教堂（預約登頂）(⚠️ 服裝規定)",
        detail: "搭乘電梯登上米蘭大教堂屋頂哥德式尖塔群。注意：不能穿短褲、露肩！",
        location: "Duomo di Milano",
        tag: "哥德地標",
        isKeyMilestone: true
      },
      {
        time: "下午",
        title: "埃馬努埃萊二世拱廊 (Galleria Vittorio Emanuele II)",
        detail: "漫步於奢華大理石地磚與玻璃圓頂購物拱廊街。",
        location: "Galleria Vittorio Emanuele II",
        tag: "時尚拱廊"
      },
      {
        time: "晚上",
        title: "點心：🍦 Chocolat Milano",
        detail: "品嚐米蘭最富盛名的濃郁巧克力 Gelato 冰淇淋。",
        location: "Chocolat Milano",
        tag: "頂級巧克力",
        restaurantInfo: {
          id: "r11-chocolat",
          dayNum: 11,
          city: "Milan",
          name: "Chocolat Milano",
          type: "甜點/點心",
          note: "米蘭最知名濃郁多款黑巧克力 Gelato",
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Chocolat+Milano"
        }
      },
      {
        time: "晚上",
        title: "晚餐：🥪 Zia Esterina Sorbillo",
        detail: "享用 Gino Sorbillo 旗下超火紅的經典拿坡里包餡炸披薩 (Pizza Fritta)。",
        location: "Zia Esterina Sorbillo",
        tag: "人氣炸披薩",
        restaurantInfo: {
          id: "r11-sorbillo",
          dayNum: 11,
          city: "Milan",
          name: "Zia Esterina Sorbillo",
          type: "晚餐",
          note: "爆餡現炸傳統拿坡里披薩餅包",
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Zia+Esterina+Sorbillo+Milan"
        }
      }
    ],
    keyRules: [
      "《最後的晚餐》必須提前 20 分鐘抵達專屬窗口核對預約資料換票。",
      "⚠️ 服裝嚴格規定：進入米蘭大教堂不能穿短褲、露肩。"
    ],
    restaurantsAndShops: [
      "Bentoteca Milano",
      "Chocolat Milano",
      "Zia Esterina Sorbillo"
    ],
    restaurantsList: [
      {
        id: "r11-bentoteca",
        dayNum: 11,
        city: "Milan",
        name: "Bentoteca Milano",
        type: "午餐",
        isReservationRequired: true,
        note: "米蘭預約名店，日義創意料理",
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bentoteca+Milano"
      },
      {
        id: "r11-chocolat",
        dayNum: 11,
        city: "Milan",
        name: "Chocolat Milano",
        type: "甜點/點心",
        note: "極濃純黑巧克力手工 Gelato",
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Chocolat+Milano"
      },
      {
        id: "r11-sorbillo",
        dayNum: 11,
        city: "Milan",
        name: "Zia Esterina Sorbillo",
        type: "晚餐",
        note: "Sorbillo 名店旗下拿坡里包餡炸披薩",
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Zia+Esterina+Sorbillo+Milan"
      }
    ],
    hotelName: "Residence De La Gare (Milano)",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Residence+De+La+Gare+Milan"
  },
  {
    dayNum: 12,
    dateStr: "",
    title: "Day 12｜米蘭 ➔ 科莫湖 Lake Como ➔ 米蘭",
    subtitle: "瓦倫納 Varenna、貝拉焦 Bellagio、Osteria Quatro Pass 午餐、市區採買與麥當勞",
    heroImage: "/image/DSCF8118.webp",
    overview: "上午由米蘭搭乘火車前往科莫湖東岸瓦倫納 (Varenna)，漫步於彩繪湖畔小鎮，搭船前往中心點珍珠貝拉焦 (Bellagio) 散步。下午返回瓦倫納，於 Osteria Quatro Pass 享用美味湖畔午餐。搭火車返回米蘭市區採買（L'Erbolario 蕾莉歐保養品、KIKO 彩妝等）。晚餐享用麥當勞，回到飯店整理行李，準備次日清晨前往機場返台。",
    timeline: [
      {
        time: "上午",
        title: "搭乘火車至瓦倫納 (Varenna) 進入科莫湖",
        detail: "自米蘭中央車站搭火車約 1 小時抵達 Varenna-Esino 車站。",
        location: "Varenna",
        tag: "火車鐵道"
      },
      {
        time: "上午",
        title: "瓦倫納小鎮散步 & 搭船至貝拉焦 (Bellagio)",
        detail: "漫步瓦倫納湖畔浪漫棧道，搭乘渡輪前往科莫湖珍珠貝拉焦 (Bellagio)。",
        location: "Bellagio",
        tag: "渡輪遊湖",
        isKeyMilestone: true
      },
      {
        time: "下午",
        title: "返回瓦倫納 & 午餐：🍽️ Osteria Quatro Pass",
        detail: "返回 Varenna 小鎮，於評價極高且氣氛溫馨的 Osteria Quatro Pass 享用湖畔義式午餐。",
        location: "Osteria Quatro Pass",
        tag: "湖畔午餐",
        isKeyMilestone: true,
        restaurantInfo: {
          id: "r12-quatro",
          dayNum: 12,
          city: "Lake Como",
          name: "Osteria Quatro Pass",
          type: "午餐",
          note: "Varenna 溫馨高評價湖畔風味小館",
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Osteria+Quatro+Pass+Varenna"
        }
      },
      {
        time: "下午",
        title: "(視情況) 搭快船至科莫 Como & 科莫大教堂",
        detail: "時間有餘裕時，可從貝拉焦搭快船前往科莫 (Como)，參觀科莫大教堂並於小鎮散步；否則直接返回瓦倫納搭火車回米蘭。",
        location: "Como",
        tag: "彈性加碼"
      },
      {
        time: "下午",
        title: "搭火車返回米蘭 & 市區逛街 (L'Erbolario, KIKO)",
        detail: "搭火車返回米蘭，採買 L'Erbolario 蕾莉歐保養品、KIKO 彩妝與紀念品，KIKO 在米蘭大教堂的分店可以刻字當紀念。",
        location: "米蘭市區購物街",
        tag: "購物採買"
      },
      {
        time: "晚上",
        title: "晚餐：🍽️ 麥當勞 (Milan McDonalds)",
        detail: "享用輕鬆迅速的義大利麥當勞，收拾整理行李準備明日返台航班。",
        location: "Milan McDonalds",
        tag: "速食晚餐",
      }
    ],
    keyRules: [
      "科莫湖渡輪班次固定，建議抵達碼頭時先拍攝船期表。",
      "返程火車班次密集，請留意離站時間。"
    ],
    restaurantsAndShops: [
      "Osteria Quatro Pass"
    ],
    restaurantsList: [
      {
        id: "r12-quatro",
        dayNum: 12,
        city: "Lake Como",
        name: "Osteria Quatro Pass",
        type: "午餐",
        note: "Varenna 溫馨風格湖畔小館",
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Osteria+Quatro+Pass+Varenna"
      }
    ],
    hotelName: "Residence De La Gare (Milano)",
    googleMapsUrl: "https://maps.google.com/?q=Varenna+Lake+Como"
  },
  {
    dayNum: 13,
    dateStr: "",
    title: "Day 13｜米蘭 Milan ✈️ 台灣 Taiwan",
    subtitle: "搭乘長榮航空 BR096 早班機啟程返航台灣",
    heroImage: "/image/DSCF5614.webp",
    overview: "清晨自米蘭市區前往馬爾彭薩機場 (MXP)，辦理 Check-in 登機與 Tax Free 海關退稅手續。搭乘長榮航空 BR096 早上的班機返航台灣，為 13 天精彩的義大利全景與多洛米蒂壯遊劃下完美句點！",
    timeline: [
      {
        time: "早晨",
        title: "前往米蘭馬爾彭薩機場 (MXP Terminal 1)",
        detail: "準備行李辦理退房，搭乘機場快捷火車或計程車前往馬爾彭薩機場 (MXP)。",
        location: "Milan Malpensa Airport (MXP)",
        tag: "機場交通",
        isKeyMilestone: true
      },
      {
        time: "上午",
        title: "長榮櫃檯 Check-in 報到 & 海關退稅 (Tax Free)",
        detail: "於長榮航空櫃檯辦理行李託運與登機證領取，憑購物發票與退稅單至海關櫃檯完成退稅。",
        location: "MXP T1 報到與退稅大廳",
        tag: "退稅登機",
        isKeyMilestone: true
      },
      {
        time: "上午",
        title: "✈️ 搭乘長榮航空 BR096 早班機返台",
        detail: "搭乘長榮航空 BR096 早班機順利起飛返台，享受機上舒適服務與餐點，安心返家。",
        location: "長榮航空 BR096 班機",
        tag: "返航航班",
        isKeyMilestone: true
      }
    ],
    keyRules: [
      "國際航班請務必於起飛前至少 3 小時抵達 MXP 機場辦理報到與海關退稅。",
      "護照正本、登機證與退稅單據請隨身攜帶。"
    ],
    restaurantsAndShops: [
      "米蘭馬爾彭薩機場免稅店 (MXP Duty Free)"
    ],
    restaurantsList: [],
    hotelName: "機上 / 抵達台灣",
    googleMapsUrl: "https://maps.google.com/?q=Milan+Malpensa+Airport"
  }
];

/**
 * 實際造訪後的推薦指數（滿分 5 顆星），以店名為鍵。
 * 每間店在時間軸與當日餐廳清單中各出現一次，因此評分集中放在這裡，
 * 由顯示端查表取用，避免同一個數字散落在多處而失準。
 * 未列入者（超市、中央市場、麥當勞等補給點）不評分。
 */
export const RESTAURANT_RATINGS: Record<string, RestaurantRating> = {
  "Pizzeria Restaurant L Ciamin": { stars: 3.8 },
  "Hotel Menardi Restaurant": { stars: 4.2 },
  "La Tavernetta di Cortina": { stars: 3.8 },
  "TRATTORIA AL POGGIO": { stars: 4 },
  "Da Mamo": { stars: 4 },
  "Suso Gelatoteca": { stars: 4.5 },
  "Gelateria Gallonetto": { stars: 4.5 },
  "I Tre Mercanti (Tiramisù)": { stars: 3.5 },
  "Trattoria Bar Pontini": { stars: 4 },
  "Acqua e Mais": { stars: 3.9 },
  "All’Antico Vinaio": { stars: 3, note: "旅伴覺得有 4 星" },
  "Trattoria Zà Zà": { stars: 4.2 },
  "GROM": { stars: 4.5 },
  "Panini Toscani": { stars: 4 },
  "La Strega Nocciola": { stars: 4.5 },
  "Trattoria Sergio Gozzi": { stars: 3.9 },
  "Hosteria del Bricco": { stars: 3.9 },
  "Bentoteca Milano": { stars: 3.5 },
  "Chocolat Milano": { stars: 4.5 },
  "Zia Esterina Sorbillo": { stars: 4 },
  "Osteria Quatro Pass": { stars: 4.2 }
};

/** 依店名取得推薦指數；查無評分（例如超市補給點）時回傳 undefined。 */
export const getRestaurantRating = (name: string): RestaurantRating | undefined =>
  RESTAURANT_RATINGS[name];

// Aggregate all restaurants with Google Maps links across the 12 days
export const ALL_RESTAURANTS: RestaurantItem[] = ITALY_12_DAYS.flatMap(
  (day) => day.restaurantsList || []
);

export const MASTER_14_DAYS: Master14DayCell[] = ITALY_12_DAYS.map((day) => {
  const morningEv = day.timeline.filter(t => t.time.includes('上午') || t.time.includes('早晨')).map(t => t.title).join('； ') || day.timeline[0]?.title || '';
  const afternoonEv = day.timeline.filter(t => t.time.includes('下午') || t.time.includes('中午')).map(t => t.title).join('； ') || day.timeline[1]?.title || '';
  const eveningEv = day.timeline.filter(t => t.time.includes('晚上') || t.time.includes('傍晚')).map(t => t.title).join('； ') || day.timeline[2]?.title || '';

  let flightOrTrain: string | undefined = undefined;
  if (day.dayNum === 1) flightOrTrain = '長榮航空 BR095';
  if (day.dayNum === 13) flightOrTrain = '長榮航空 BR096';

  return {
    dayNum: day.dayNum,
    dateStr: day.dateStr || "",
    dayOfWeek: `Day ${day.dayNum}`,
    cityRegion: day.title.replace(`Day ${day.dayNum}｜`, '').replace(`Day ${day.dayNum}：`, ''),
    morning: morningEv,
    afternoon: afternoonEv,
    evening: eveningEv,
    hotel: day.hotelName || "市區精選飯店",
    flightsOrTrains: flightOrTrain
  };
});

export const SPOTS_INFO: SpotInfo[] = [
  {
    id: "alpe-di-siusi",
    name: "休斯高原",
    englishName: "Alpe di Siusi / Seiser Alm",
    category: "Dolomites",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    description: "休斯高原是歐洲面積最大的高山草甸，擁有廣袤無垠的翠綠牧場與阿爾卑斯木屋。休斯高原下午時間面對 Sassolungo 山的方向才是順光，因此建議下午再過來，光線會比較好，遠景的 Sassolungo 才會是清楚的。",
    highlights: [
      "光線建議：下午時間面對 Sassolungo 山的方向才是順光，遠景的 Sassolungo 拍攝最清晰精緻。",
      "大景拍攝：下午順光時，一出纜車即可先在 Viewpoint Bench Panorama 拍到 Sassolungo 大景。",
      "ADLER Lodge ALPE：位置視野相當棒，可飽覽多洛米蒂山脈的壯麗景色。",
      "Sporthotel Sonne 交通：抵達 Sporthotel Sonne 之後，可選擇搭乘 Al sole Chairlift 滑雪吊椅直接回到上方的纜車站。"
    ],
    practicalTips: "【滑雪吊椅間隔提醒】如果你是購買 Super Summer Card 或 Val Gardena Card，雖然時間內可以無限次免費搭乘，但是 Al sole Chairlift 滑雪吊椅不能立刻連續上下搭乘，系統會要求間隔 45 分鐘之後才能再次搭乘！",
    mapPoints: [
      {
        label: "巨型木椅 Panchina Gigante",
        url: "https://maps.app.goo.gl/5YCdt8NfRnu89E3C6"
      }
    ]
  },
  {
    id: "seceda",
    name: "刀鋒山",
    englishName: "Seceda (2,518 m)",
    category: "Dolomites",
    image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=80",
    description: "多洛米蒂代表性地標！一側是高山坡地，另一側則是垂直切入深谷的傾斜鋸齒狀絕壁，極具視覺衝擊力。",
    highlights: [
      "傾斜斷崖與 Fermeda 尖峰連峰",
      "纜車 17:30 關閉（請留意末班車）",
      "Ortisei - Val Gardena 小鎮散步"
    ],
    practicalTips: " Seceda 纜車 17:30 關閉，請切勿錯過班次。"
  },
  {
    id: "val-di-funes",
    name: "富內斯山谷",
    englishName: "Val di Funes",
    category: "Dolomites",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    description: "富內斯山谷以牧場木屋、明亮綠地與背景一連串多洛米蒂石灰岩山峰著稱，是多洛米蒂最詩意的山谷之一。",
    highlights: [
      "經典拍照點：Santa Maddalena 教堂與教堂前的草地",
      "山谷步道：短距離散步即可看到多洛米蒂連峰與教堂倒影",
      "適合安排半日或下午行程，若有時間更能悠閒漫遊"
    ],
    practicalTips: "此為備選景點，尚未安排在 13 日主行程中；若行程柔性充裕，可安排上午或下午前往，散步地形平緩且適合全家旅遊。"
  },
  {
    id: "santa-maddalena",
    name: "聖馬達萊娜",
    englishName: "Santa Maddalena",
    category: "Dolomites",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80",
    description: "小山村聖馬達萊娜擁有典型多洛米蒂木屋與教堂景致，最廣為拍攝的是教堂前方的草坡與背後的 Odle 群峰。",
    highlights: [
      "必拍景點：教堂前方的草坡與 Odle 山峰背景",
      "小鎮寧靜，適合短暫停留與散步拍照",
      "可與富內斯山谷一同安排為半日或自由行備選行程"
    ],
    practicalTips: "此為備選景點，尚未安排在 13 日主行程中；建議從 Ortisei 開車約 40 分鐘，或從 Val di Funes 延伸成一段順時針小環線。"
  },
  {
    id: "tre-cime",
    name: "三尖峰 & 魔戒線路",
    englishName: "Tre Cime di Lavaredo & Cadini di Misurina",
    category: "Dolomites",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80",
    description: "多洛米蒂地標三座直立近 500 米的石灰岩巨峰，與 Cadini di Misurina 懸崖觀景點。",
    highlights: [
      "三座石灰岩巨峰 (Tre Cime)",
      "魔戒線路 Cadini di Misurina 懸崖 Viewpoint",
      "約 06:30 過後通過閘門進入 Auronzo 山屋停車場"
    ],
    practicalTips: "遵照預約時間通過閘門進入 Auronzo 山屋停車場，可以超過預約時間進入，但需要在預約時間起算的12小時內離開。"
  },
  {
    id: "venice",
    name: "水都威尼斯",
    englishName: "Venice / Venezia",
    category: "Venice",
    image: "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=800&q=80",
    description: "世界著名的水上都市，擁有聖馬可廣場、歎息橋、貢多拉、里阿爾托橋與跳島彩虹小屋。",
    highlights: [
      "聖馬可廣場、聖馬可大教堂與總督宮",
      "學院橋要看日落時間，個人覺得黃昏去最美",
      "Murano 玻璃島 & Burano 彩色島"
    ]
  },
  {
    id: "florence",
    name: "文藝復興之都 佛羅倫斯",
    englishName: "Florence / Firenze",
    category: "Florence",
    image: "https://images.unsplash.com/photo-1543429776-2782fc8e1acd?auto=format&fit=crop&w=800&q=80",
    description: "文藝復興發源地，擁有聖母百花大教堂、烏菲茲美術館與學院美術館大衛像。",
    highlights: [
      "All’Antico Vinaio & Panini Toscani 經典帕尼尼",
      "Trattoria Zà Zà 托斯卡尼大牛排",
      "⚠️ 服裝規定：進入聖母百花大教堂不能穿短褲、露肩"
    ]
  },
  {
    id: "milan",
    name: "時尚與藝術之都 米蘭",
    englishName: "Milan / Milano",
    category: "Milan",
    image: "https://images.unsplash.com/photo-1513581166391-887a96ddeafd?auto=format&fit=crop&w=800&q=80",
    description: "義大利現代時尚與歷史古蹟名城。哥德式米蘭大教堂、達文西《最後的晚餐》真蹟與 Bentoteca Milano 美食。",
    highlights: [
      "達文西 《最後的晚餐》(預約須提前取票)",
      "Bentoteca Milano 預約創意料理",
      "⚠️ 服裝規定：進入米蘭大教堂不能穿短褲、露肩"
    ]
  },
  {
    id: "lake-como",
    name: "科莫湖",
    englishName: "Lake Como / Lago di Como",
    category: "LakeComo",
    image: "/image/DSCF8118.JPG",
    description: "阿爾卑斯山腳下的冰蝕湖，Y 字形湖岸散布瓦倫納、貝拉焦與科莫等小鎮，以湖光山色、彩色屋與別墅花園聞名，是米蘭出發最經典的一日遊。",
    highlights: [
      "瓦倫納 (Varenna)：湖畔情人步道與彩色小鎮，火車直達的入湖門戶",
      "貝拉焦 (Bellagio)：位於 Y 字形分岔點的「科莫湖珍珠」，石階小巷與湖景並存",
      "科莫 (Como)：科莫大教堂與湖濱散步，可搭快船從貝拉焦前往",
      "午餐：Osteria Quatro Pass 湖畔義式料理"
    ],
    practicalTips: "米蘭中央車站搭火車約 1 小時抵達 Varenna-Esino 站，湖區小鎮之間靠渡輪往返。建議購買 Trenord「Treasures of Lake Como」套票，一次整合火車與船票，Day 12 實際花費為 2 人合計 NT$2,074 (€56.0)。從貝拉焦搭快船至科莫屬彈性行程，時間不夠可直接返回瓦倫納搭火車回米蘭。"
  }
];

export const PRACTICAL_LINKS: PracticalLinkItem[] = [
  {
    id: "seiser-alm-parking",
    title: "休斯高原 P2 停車場預約系統",
    category: "Parking",
    url: "https://www.seiseralm.it/it/info-e-service/mobilita/accesso-all-alpe-di-siusi/prenotazione-parcheggio-alpe-di-siusi.html",
    description: "休斯高原 Compatsch P2 停車場官方預約通道。",
    importantRule: "預約情況請依官方公告為準。"
  },
  {
    id: "gardena-card-info",
    title: "Gardena Card 纜車通行證官方網站",
    category: "Pass",
    url: "https://www.gardenacard.com/",
    description: "涵蓋 Val Gardena 區域內纜車通行證。",
    importantRule: "Day 1 至 Selva – Ciampinoi TICKET BOX 換已線上購票的實體卡 (注意：線上購票無法退款，也可現場購買)。"
  },
  {
    id: "auronzo-tre-cime",
    title: "三尖峰 Auronzo 山屋停車資訊",
    category: "Parking",
    url: "https://www.auronzomisurina.it/",
    description: "通往三尖峰與魔戒線路起點 Auronzo 山屋的高山停車場資訊。",
    importantRule: "Day 4 遵照預約時間通過閘門進入 Auronzo 山屋停車場，可以超過預約時間後進入，但需要在預約時間起算的12小時內離開。"
  },
  {
    id: "valgardena-webcams",
    title: "Val Gardena 官方即時影像總覽",
    category: "Webcam",
    url: "https://www.valgardena.it/en/webcams/",
    description: "Val Gardena 官方彙整的即時影像頁面，涵蓋 Ortisei、Selva 與 Seceda 等區域鏡頭。",
    importantRule: "出發前一晚可先確認雲層與能見度，再決定隔日纜車上山的順序。"
  },
  {
    id: "seiser-alm-panomax",
    title: "休斯高原 Seiser Alm 全景即時影像",
    category: "Webcam",
    url: "https://seiseralm.panomax.com/?cu=en-GB",
    description: "Panomax 高解析全景鏡頭，可拉近檢視休斯高原草甸與遠景 Sassolungo 的即時狀況。",
    importantRule: "Day 2 上山前先看，確認下午順光時段 Sassolungo 是否清晰無雲遮。"
  },
  {
    id: "sassolevante-panomax",
    title: "Sassolevante 長石山即時影像",
    category: "Webcam",
    url: "https://valgardena.panomax.com/sassolevante",
    description: "面向 Sassolungo（長石山）山群的 Panomax 全景鏡頭，可即時判斷山頭雲況。",
    importantRule: "Day 3 前往長石山前先確認，雲霧過厚時可調整為其他景點優先。"
  },
  {
    id: "ref-backpackers-tre-cime",
    title: "背包客棧：三尖峰健行紀錄",
    category: "Reference",
    url: "https://www.backpackers.com.tw/forum/showthread.php?t=10536421",
    description: "中文背包客實地健行紀錄，詳述拉瓦雷多三尖峰(Tre Cime di Lavaredo)環線的路況、時間分配與沿途景觀。",
    importantRule: "可搭配 Day 4 的魔戒線路行程對照，預先掌握體力與時間需求。"
  },
  {
    id: "ref-moonhoney-hikes",
    title: "Moon & Honey Travel：多洛米蒂 15 條最佳健行路線",
    category: "Reference",
    url: "https://www.moonhoneytravel.com/best-day-hikes-dolomites-italy/",
    description: "英文深度健行指南，涵蓋各路線難度、里程、起登點與停車資訊，是多洛米蒂健行最完整的參考來源之一。",
    importantRule: "行前可用來評估備案路線，遇天候不佳時替換原訂行程。"
  },
  {
    id: "ref-travelwithmiya-roadtrip",
    title: "Travel with Miya：多洛米蒂 11 城鎮自駕路線",
    category: "Reference",
    url: "https://travelwithmiya.com/dolomites-road-trip/#%E2%9D%99_%E7%B1%B3%E8%98%AD%E6%A9%9F%E5%A0%B4_MXP_%E2%AD%A2_%E5%A4%9A%E6%B4%9B%E7%B1%B3%E8%92%82%E5%A5%A7%E8%92%82%E5%A1%9E%E4%BC%8A%EF%BC%9A%E8%87%AA%E9%A7%95%E7%B4%84_4_%E5%B0%8F%E6%99%82",
    description: "中文自駕攻略，連結直接定位到「米蘭機場 MXP ⭢ 多洛米蒂奧蒂塞伊：自駕約 4 小時」段落，含詳細路線地圖。",
    importantRule: "對應 Day 1 米蘭取車後前往 Selva 的長途拉車，可先預覽路線與休息點。"
  },
  {
    id: "lake-como-pass",
    title: "義大利國鐵 Trenord：科莫湖套票 (Treasures of Lake Como)",
    category: "Pass",
    url: "https://giteintreno.trenord.it/en/trains/lombardia/Dbo9xPuBXUzdEKwjGWDG/treasures-of-lake-como?categoryName=lake-trip&categoryUID=srSbzA0HRjB80j041Nul&permalink=lake-trip",
    description: "Trenord 官方推出的科莫湖一日遊套票，整合米蘭往返的火車票與湖區渡輪船票，免去分段購票。",
    importantRule: "對應 Day 12 米蘭 ➔ 瓦倫納 ➔ 貝拉焦 ➔ 科莫的湖區行程，實際花費為 2 人合計 NT$2,074 (€56.0)。"
  },
  {
    id: "rolling-venice",
    title: "Venezia Unica：Rolling Venice 青年卡與 ACTV 水上巴士套票",
    category: "Pass",
    url: "https://www.veneziaunica.it/en/rolling-venice",
    description: "威尼斯官方票務網站的青年優惠方案，購卡後可用折扣價買 ACTV 水上巴士定期票，另含部分博物館與店家優惠。",
    importantRule: "有年齡限制（青年卡性質），購買前請於官網確認適用年齡與當期票價。對應 Day 6–7 威尼斯本島與跳島交通，帳目中的 ACTV 3 日票為 2 人合計 NT$2,424 (€66.0)。"
  }
];

/**
 * 13 日行程實際入住的 5 間飯店，依入住順序排列，合計 12 晚。
 * 房費為此處的唯一來源，住宿類的花費明細由這份資料產生，不另外複製一份金額。
 */
export const HOTELS: HotelStay[] = [
  {
    id: "antares",
    name: "Hotel & Residence Antares",
    nameZh: "安塔爾住宅酒店",
    city: "塞爾瓦 Selva di Val Gardena",
    region: "多洛米蒂",
    dayFrom: 1,
    dayTo: 2,
    checkIn: "6/18",
    checkOut: "6/20",
    twd: 15976,
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Hotel+Residence+Antares+Selva+di+Val+Gardena",
    note: "多洛米蒂前兩晚據點，鄰近 Ciampinoi 纜車站，方便 Day 1 傍晚換 Gardena Card。"
  },
  {
    id: "menardi",
    name: "Hotel Menardi",
    nameZh: "梅娜蒂酒店",
    city: "科爾蒂納 Cortina d'Ampezzo",
    region: "多洛米蒂",
    dayFrom: 3,
    dayTo: 4,
    checkIn: "6/20",
    checkOut: "6/22",
    twd: 16962,
    cityTaxTwd: 509,
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Hotel+Menardi+Cortina+d%27Ampezzo",
    note: "百年家族經營旅館，附設餐廳，是 Day 4 前進三尖峰 Auronzo 停車場的最佳前哨。"
  },
  {
    id: "leone",
    name: "Leone Hotel",
    city: "威尼斯 Venice",
    region: "威尼斯",
    dayFrom: 5,
    dayTo: 7,
    checkIn: "6/22",
    checkOut: "6/25",
    twd: 20818,
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Leone+Hotel+Venice",
    note: "Day 5 威尼斯還車後入住，連住三晚涵蓋本島核心景點與跳島行程。"
  },
  {
    id: "apollo",
    name: "Apollo Guest House",
    city: "佛羅倫斯 Florence",
    region: "托斯卡尼",
    dayFrom: 8,
    dayTo: 10,
    checkIn: "6/25",
    checkOut: "6/28",
    twd: 20601,
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Apollo+Guest+House+Florence",
    note: "連住三晚，Day 10 前往比薩半日遊後仍回此處，不需換宿。"
  },
  {
    id: "delagare",
    name: "Residence De La Gare",
    city: "米蘭 Milan",
    region: "倫巴底",
    dayFrom: 11,
    dayTo: 12,
    checkIn: "6/28",
    checkOut: "6/30",
    twd: 9573,
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Residence+De+La+Gare+Milano",
    note: "最後兩晚，Day 12 科莫湖一日遊往返與 Day 13 前往機場都靠車站機能。"
  }
];

/** 入住晚數＝結束日 − 起始日 + 1。 */
export const hotelNights = (hotel: HotelStay) => hotel.dayTo - hotel.dayFrom + 1;

/** 花費明細用的房費項目標籤，與飯店分頁顯示的名稱維持一致。 */
const hotelExpenseLabel = (hotel: HotelStay) =>
  `${hotel.name}${hotel.nameZh ? ` ${hotel.nameZh}` : ""}（Day ${hotel.dayFrom}–${hotel.dayTo}，${hotelNights(hotel)} 晚）`;

/**
 * 花費分類明細（不含購物）。所有 twd 金額皆為 2 人合計實付，
 * 分類總額、占比與每人平均一律於使用端由明細推算，不另存以免兩者失準。
 */
export const EXPENSE_BREAKDOWN: ExpenseCategory[] = [
  {
    id: "transport",
    label: "交通",
    note: "機票、租車、火車票、通行卡等",
    items: [
      { label: "機票", twd: 120298 },
      { label: "italo 去佛羅倫斯", twd: 2830 },
      { label: "italo 去米蘭", twd: 2830 },
      { label: "租車代訂服務費", twd: 2200 },
      { label: "多洛米蒂停車費", twd: 1470, eur: 40.0 },
      { label: "ACTV trasporto pubblico 3 giorni", twd: 2424, eur: 66.0 },
      { label: "Uber", twd: 561 },
      { label: "選位費", twd: 2051 },
      { label: "租車", twd: 19035, eur: 514.05 },
      { label: "加油", twd: 2227, eur: 60.15 },
      { label: "加油", twd: 1863, eur: 50.32 },
      { label: "過路費", twd: 316 },
      { label: "火車票", twd: 110 },
      { label: "加油", twd: 1829, eur: 49.0 },
      { label: "公車", twd: 126, eur: 3.4 },
      { label: "火車", twd: 689, eur: 18.6 },
      { label: "火車", twd: 689, eur: 18.6 },
      { label: "車票", twd: 163, eur: 4.4 },
      { label: "機場快線", twd: 1111, eur: 30.0 },
      { label: "科莫湖套票", twd: 2074, eur: 56.0 },
      { label: "車票", twd: 160 },
      { label: "車票", twd: 163, eur: 4.4 }
    ]
  },
  {
    id: "lodging",
    label: "住宿",
    note: "飯店／民宿、城市稅",
    items: [
      // 房費直接取自 HOTELS，改飯店資料就會同步反映到花費統計
      ...HOTELS.map((hotel) => ({ label: hotelExpenseLabel(hotel), twd: hotel.twd })),
      // 這兩筆城市稅無法從帳目判斷屬於哪一間飯店，維持獨立列出
      { label: "城市稅", twd: 904, eur: 24.4 },
      { label: "城市稅", twd: 778, eur: 21.0 },
      ...HOTELS.filter((hotel) => hotel.cityTaxTwd !== undefined).map((hotel) => ({
        label: `${hotel.name} 城市稅`,
        twd: hotel.cityTaxTwd as number
      }))
    ]
  },
  {
    id: "food",
    label: "飲食",
    note: "餐廳、Gelato、星巴克、超市採買等",
    items: [
      { label: "休息站午餐", twd: 355, eur: 9.6 },
      { label: "超市採買", twd: 987 },
      { label: "Pizza 和義大利麵", twd: 1422 },
      { label: "蘋果汁和可樂", twd: 328 },
      { label: "飲料", twd: 47 },
      { label: "超市採買", twd: 1687 },
      { label: "晚餐", twd: 1635 },
      { label: "晚餐", twd: 1851, eur: 50.0 },
      { label: "超市", twd: 113 },
      { label: "可樂", twd: 291 },
      { label: "超市採買", twd: 1210 },
      { label: "瑪格麗特 pizza 和炸魷魚", twd: 1454 },
      { label: "星巴克", twd: 404, eur: 10.9 },
      { label: "Gelato", twd: 159, eur: 4.3 },
      { label: "SUSO Gelato", twd: 200 },
      { label: "提拉米蘇", twd: 481, eur: 13.0 },
      { label: "Da mamoo 晚餐", twd: 1929, eur: 52.1 },
      { label: "飲料", twd: 218 },
      { label: "Gelato", twd: 141, eur: 3.8 },
      { label: "午餐", twd: 1574, eur: 42.5 },
      { label: "佛卡夏", twd: 407, eur: 11.0 },
      { label: "GROM", twd: 437, eur: 11.8 },
      { label: "飲料", twd: 375 },
      { label: "晚餐", twd: 4462, eur: 120.5 },
      { label: "柳橙汁和拿鐵", twd: 281, eur: 7.6 },
      { label: "帕尼尼", twd: 481, eur: 13.0 },
      { label: "冰淇淋", twd: 167, eur: 4.5 },
      { label: "冰淇淋", twd: 163 },
      { label: "芬達", twd: 118, eur: 3.2 },
      { label: "冰淇淋", twd: 178, eur: 4.8 },
      { label: "晚餐", twd: 663, eur: 17.9 },
      { label: "飲料", twd: 278, eur: 7.5 },
      { label: "開心果提拉米蘇", twd: 217 },
      { label: "超市", twd: 685, eur: 18.5 },
      { label: "麥當勞", twd: 741, eur: 20.0 },
      { label: "難吃早餐", twd: 555, eur: 15.0 },
      { label: "義大利麵", twd: 1203, eur: 33.0 },
      { label: "麥當勞飲料", twd: 311, eur: 8.4 },
      { label: "晚餐", twd: 1648, eur: 44.5 },
      { label: "Gelato", twd: 167, eur: 4.5 },
      { label: "早餐", twd: 274, eur: 7.4 },
      { label: "Gelato", twd: 164 },
      { label: "麥當勞", twd: 185, eur: 5.0 },
      { label: "超市", twd: 1072, eur: 28.95 },
      { label: "Omakase", twd: 7730, eur: 212.0 },
      { label: "星巴克早餐", twd: 314 },
      { label: "午餐", twd: 1963, eur: 53.0 },
      { label: "麥當勞", twd: 635, eur: 17.15 },
      { label: "超市", twd: 2002, eur: 54.07 }
    ]
  },
  {
    id: "tickets",
    label: "門票",
    note: "美術館、大教堂、導覽、划船等",
    items: [
      { label: "最後的晚餐", twd: 1115 },
      { label: "米蘭大教堂", twd: 1920, eur: 52.0 },
      { label: "學院美術館", twd: 1754, eur: 48.0 },
      { label: "烏菲茲美術館", twd: 2125, eur: 58.0 },
      { label: "Gardena Card 3 日票", twd: 9124 },
      { label: "划船", twd: 2037, eur: 55.0 },
      { label: "導覽", twd: 222, eur: 6.0 }
    ]
  },
  {
    id: "misc",
    label: "其他",
    note: "eSIM、保險、200 歐元現金",
    items: [
      { label: "eSIM", twd: 435 },
      { label: "eSIM", twd: 970 },
      { label: "保險", twd: 2360 },
      { label: "保險", twd: 2360 },
      { label: "200 歐元現金", twd: 7412 }
    ]
  }
];

/** 同行人數，用於推算平均每人花費。 */
export const EXPENSE_PARTY_SIZE = 2;

/** 分類總額＝該分類所有明細之和（2 人合計）。 */
export const expenseCategoryTotal = (category: ExpenseCategory) =>
  category.items.reduce((sum, item) => sum + item.twd, 0);

export const EXPENSE_TOTAL = EXPENSE_BREAKDOWN.reduce(
  (sum, category) => sum + expenseCategoryTotal(category),
  0
);
