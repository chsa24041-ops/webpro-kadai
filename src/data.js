// src/data.js

// 基本ルールのデータ
export const basicRules = [
  {
    title: "麻雀の基本形",
    content: "「3枚1組が4組」＋「同じ牌2枚が1組（1アタマ）」＝「4メンツ ＋ 1アタマ」が基本です。\nただし、例外として「国士無双」と「七対子（チートイツ）」はこの形に当てはまりません。"
  },
  {
    title: "メンツ（面子）の種類",
    content: "メンツには「順子（シュンツ）：数字の連続」「刻子（コーツ）：同じ牌3枚」「槓子（カンツ）：カンで作った同じ牌4枚」の3種類があります。"
  },
  {
    title: "対局の流れ（1局の進み方）",
    content: [
      "① 準備（配牌）：山から13枚ずつ牌を配ります。親からスタートします。",
      "② 進行（自摸と打牌）：自分の番が来たら山から1枚引き（ツモ）、不要な1枚を捨てます（打牌）。これを反時計回りに繰り返して、役の完成を目指します。",
      "③ 鳴き（任意）：他人の捨て牌が欲しい時は「ポン」「チー」「カン」をして自分のメンツにできます（ただし門前ではなくなります）。",
      "④ 決着（和了）：あと1枚で完成する状態（テンパイ）で、必要な牌を自分で引く（ツモ）か、他人が捨てる（ロン）とアガリです。",
      "⑤ 流局：誰もアガらずに山がなくなるとその局は終了（引き分け）となります。"
    ].join("\n")
  },
  {
    title: "鳴きとは",
    content: [
      "鳴きとは、他人が捨てた牌を使って、自分のメンツを完成させることをいいます。",
      "【鳴きの種類】",
      "・ポン：同じ牌を2枚持っているとき、他人の捨て牌を使って3枚集めることです。誰からでも鳴くことができます。",
      "・チー：階段状の数字（例：2･3）を持っているとき、つながる牌（1か4）をもらって3枚のセットを作ることです。自分の左側の人からしか鳴けません。",
      "・カン：同じ牌を4枚揃えて1つのセットを作ることです。自分で4枚揃える場合と、他人の捨て牌を使う場合があります。",
      "カンをするとドラが1枚増えます。また、カンをすることで嶺上牌（リンシャンハイ）や嶺上開花（リンシャンカイホウ）という役ができる場合があります。",
      "【鳴きのメリットと注意点】",
      "・メリット：自分で牌を引くのを待たずに済むため、早くアガリに近づけます。",
      "・注意点：できる役が限られたり、点数が低くなることがあります。",
    ].join("\n")
  },
  {
    title: "自風（じかぜ）と読み方",
    content: [
      "自風とは、その局において自分が担当する方角（東・南・西・北）のことです。麻雀ではこれらを「トン・ナン・シャー・ペー」と呼びます。",
      "【読み方と配置】",
      "・東（トン）：親の人の風。",
      "・南（ナン）：親の右隣の人の風。",
      "・西（シャー）：親の正面の人の風。",
      "・北（ペー）：親の左隣の人の風。",
      "【自風のルール】",
      "・親が「東」となり、そこから反時計回りに割り振られます。親が交代すると、全員の自風も一つずつずれていきます。",
      "・自分の自風と同じ牌を3枚集めると「役（自風牌）」になり、アガリに近づけます。",
    ].join("\n")
  },
  {
    title: "用語集",
    content: [
      "アタマ（雀頭）：同じ牌2枚の組。",
      "ロン：他人の捨て牌でアガること。",
      "ツモ：自分で引いた牌でアガること。",
      "ポン：他人の捨て牌を使って、同じ牌3枚の組（刻子）をつくること。",
      "チー：自分の左隣の人の捨て牌を使って、数字の連続する三枚の組（順子）を作ること。",
      "カン：同じ牌4枚の組（槓子）を作ること。",
      "ドラ：持っているだけで点数が高くなる牌のこと。局ごとに変わる。",
      "聴牌（テンパイ）：あと1枚でアガれる状態。",
      "一向聴（イーシャンテン）：後1枚で聴牌になる状態のこと。",
      "門前（メンゼン）：他人の捨て牌を一切使わずに(鳴かずに)アガること。",
      "フリテン：自分のアガリ牌を過去に捨てている場合、ロンアガリができなくなるルールのこと",
      "翻（ハン）：役の強さ（点数の高さ）を表す単位。"
    ].join("\n")
  }
];

// 役のデータ
export const yakuData = [
　{
    category: "1翻役",
    name: "門前自摸",
    kana: "メンゼンツモ",
    description: "鳴かずに自分で引いた牌でアガる役です。",
    naki: false, // 鳴きNG
    tiles: ["p_ms1_1.gif", "p_ms2_1.gif", "p_ms3_1.gif", "p_ms5_1.gif", "p_ms6_1.gif", "p_ms7_1.gif", "p_ps2_1.gif", "p_ps3_1.gif", "p_ps4_1.gif", "p_ss5_1.gif", "p_ss6_1.gif", "p_ss7_1.gif", "p_ji_e_1.gif", "p_ji_e_1.gif"]
  },
  {
    category: "1翻役",
    name: "断么九",
    kana: "タンヤオ",
    description: "1、9、字牌を一切使わず、2〜8の数牌だけで作る役です。",
    naki: true, // 鳴きOK
    tiles: ["p_ms2_1.gif", "p_ms3_1.gif", "p_ms4_1.gif", "p_ps3_1.gif", "p_ps4_1.gif", "p_ps5_1.gif", "p_ss6_1.gif", "p_ss7_1.gif", "p_ss8_1.gif", "p_ms5_1.gif", "p_ms6_1.gif", "p_ms7_1.gif", "p_ss2_1.gif", "p_ss2_1.gif"] // 後で画像パスを入れます
  },
  {
    category: "1翻役",
    name: "立直",
    kana: "リーチ",
    description: "門前（メンゼン）でテンパイし、1000点払って「リーチ」と宣言することで成立する役です。",
    naki: false, // 鳴きNG
    tiles: []
  },
  {
    category: "1翻役",
    name: "一発",
    kana: "イッパツ",
    description: "リーチ後、一巡以内にアガると成立する役です。",
    naki: false,
    tiles: []
  },
  {
    category: "1翻役",
    name: "平和",
    kana: "ピンフ",
    description: "4つの順子と字牌以外のアタマで作る役です。",
    naki: false,
    tiles: ["p_ms2_1.gif", "p_ms3_1.gif", "p_ms4_1.gif", "p_ps3_1.gif", "p_ps4_1.gif", "p_ps5_1.gif", "p_ss6_1.gif", "p_ss7_1.gif", "p_ss8_1.gif", "p_ms6_1.gif", "p_ms7_1.gif", "p_ms8_1.gif", "p_ps1_1.gif", "p_ps1_1.gif"]
  },
  {
    category: "1翻役",
    name: "翻牌",
    kana: "ファンパイ",
    description: "三元牌（白・發・中）や自分の風の牌を3枚揃えることで成立する役です。",
    naki: true,
    tiles: ["p_ji_c_1.gif", "p_ji_c_1.gif", "p_ji_c_1.gif", "p_ms2_1.gif", "p_ms3_1.gif", "p_ms4_1.gif", "p_ps5_1.gif", "p_ps6_1.gif", "p_ps7_1.gif", "p_ss1_1.gif", "p_ss2_1.gif", "p_ss3_1.gif", "p_ms8_1.gif", "p_ms8_1.gif"]
  },
  {
    category: "1翻役",
    name: "一盃口",
    kana: "イーペイコー",
    description: "同じ順子が2つある役です。",
    naki: false,
    tiles: ["p_ms2_1.gif", "p_ms3_1.gif", "p_ms4_1.gif", "p_ms2_1.gif", "p_ms3_1.gif", "p_ms4_1.gif", "p_ps5_1.gif", "p_ps6_1.gif", "p_ps7_1.gif", "p_ss2_1.gif", "p_ss3_1.gif", "p_ss4_1.gif", "p_ji_e_1.gif", "p_ji_e_1.gif"]
  },
  {
    category: "1翻役",
    name: "嶺上開花",
    kana: "リンシャンカイホー",
    description: "槓（カン）をした際に、補充として引いた嶺上牌でアガると成立する役です。",
    naki: true,
    tiles: ["p_ji_bk_1.gif", "p_ms2_1.gif", "p_ms2_1.gif", "p_ji_bk_1.gif", "p_ms3_1.gif", "p_ms3_1.gif", "p_ps5_1.gif", "p_ps6_1.gif", "p_ps7_1.gif", "p_ss2_1.gif", "p_ss3_1.gif", "p_ss4_1.gif", "p_ji_e_1.gif", "p_ji_e_1.gif", "p_ms3_1.gif"]
  },
  {
    category: "1翻役",
    name: "槍槓",
    kana: "チャンカン",
    description: "他人が加槓（カカン）を宣言した牌が、自分のアガリ牌だった場合に成立する役です。\n加槓（カカン）：すでに3枚「ポン」して場に出しているところに、自分で引いてきた4枚目を合体させて「カン」に進化させること。",
    naki: true,
    tiles: []
  },
  {
    category: "1翻役",
    name: "海底摸月",
    kana: "ハイテイツモ",
    description: "その局の最後の一枚である海底牌（ハイテイハイ）でツモアガると成立する役です。\n海底牌（ハイテイハイ）：山の最後の一枚の牌。",
    naki: true,
    tiles: []
  },
  {
    category: "1翻役",
    name: "河底撈魚",
    kana: "ホウテイロン",
    description: "その局の最後の一枚である河底牌（ホウテイハイ）でロンアガリすると成立する役です。\n河底牌（ホウテイハイ）：場の最後の捨て牌。",
    naki: true,
    tiles: []
  },
{
    category: "2翻役",
    name: "七対子",
    kana: "チートイツ",
    description: "同じ牌2枚のペアを7組作る特殊な役です。麻雀の基本形（4メンツ・1アタマ）に当てはまらない例外的な役の一つです。",
    naki: false,
    tiles: ["p_ms1_1.gif", "p_ms1_1.gif", "p_ms9_1.gif", "p_ms9_1.gif", "p_ps2_1.gif", "p_ps2_1.gif", "p_ss5_1.gif", "p_ss5_1.gif", "p_ji_e_1.gif", "p_ji_e_1.gif", "p_ji_c_1.gif", "p_ji_c_1.gif", "p_ji_no_1.gif", "p_ji_no_1.gif"]
  },
  {
    category: "2翻役",
    name: "対々和",
    kana: "トイトイホー",
    description: "4つのメンツをすべて「刻子（同じ牌3枚）」で揃える役です。ポンをして揃えても成立するため、初心者の方にも作りやすい役です。",
    naki: true,
    tiles: ["p_ms2_1.gif", "p_ms2_1.gif", "p_ms2_1.gif", "p_ps4_1.gif", "p_ps4_1.gif", "p_ps4_1.gif", "p_ss8_1.gif", "p_ss8_1.gif", "p_ss8_1.gif", "p_ji_no_1.gif", "p_ji_no_1.gif", "p_ji_no_1.gif", "p_ji_c_1.gif", "p_ji_c_1.gif"]
  },
  {
    category: "2翻役",
    name: "三暗刻",
    kana: "サンアンコー",
    description: "ポンをせずに、自分で引き当てた「刻子（同じ牌3枚）」を3つ作る役です。",
    naki: false,
    tiles: ["p_ms3_1.gif", "p_ms3_1.gif", "p_ms3_1.gif", "p_ps7_1.gif", "p_ps7_1.gif", "p_ps7_1.gif", "p_ji_h_1.gif", "p_ji_h_1.gif", "p_ji_h_1.gif", "p_ss2_1.gif", "p_ss3_1.gif", "p_ss4_1.gif", "p_ms9_1.gif", "p_ms9_1.gif"]
  },
  {
    category: "2翻役",
    name: "一気通貫",
    kana: "イッキツウカン",
    description: "同じ種類の数牌で「123・456・789」の3つの順子（シュンツ）を揃える役です。",
    naki: true,
    tiles: ["p_ms1_1.gif", "p_ms2_1.gif", "p_ms3_1.gif", "p_ms4_1.gif", "p_ms5_1.gif", "p_ms6_1.gif", "p_ms7_1.gif", "p_ms8_1.gif", "p_ms9_1.gif", "p_ps4_1.gif", "p_ps5_1.gif", "p_ps6_1.gif", "p_ss2_1.gif", "p_ss2_1.gif"]
  },
  {
    category: "2翻役",
    name: "三色同順",
    kana: "サンショクドウジュン",
    description: "萬子・筒子・索子の3種類すべてで、同じ数字の順子（シュンツ）を作る役です。\n例：萬子の123、筒子の123、索子の123",
    naki: true,
    tiles: ["p_ms2_1.gif", "p_ms3_1.gif", "p_ms4_1.gif", "p_ps2_1.gif", "p_ps3_1.gif", "p_ps4_1.gif", "p_ss2_1.gif", "p_ss3_1.gif", "p_ss4_1.gif", "p_ms6_1.gif", "p_ms7_1.gif", "p_ms8_1.gif", "p_ji_s_1.gif", "p_ji_s_1.gif"]
  },
  {
    category: "2翻役",
    name: "混全帯么九",
    kana: "チャンタ",
    description: "すべてのメンツとアタマに、必ず「1・9・字牌」のいずれかが含まれている役です。",
    naki: true,
    tiles: ["p_ms1_1.gif", "p_ms2_1.gif", "p_ms3_1.gif", "p_ps7_1.gif", "p_ps8_1.gif", "p_ps9_1.gif", "p_ss1_1.gif", "p_ss1_1.gif", "p_ss1_1.gif", "p_ji_e_1.gif", "p_ji_e_1.gif", "p_ji_e_1.gif", "p_ji_s_1.gif", "p_ji_s_1.gif"]
  },
  {
    category: "2翻役",
    name: "小三元",
    kana: "ショウサンゲン",
    description: "「白・發・中」のうち2種類を3枚ずつ揃え、残りの1種類をアタマ（2枚）にすると成立する役です。",
    naki: true,
    tiles: ["p_ji_no_1.gif", "p_ji_no_1.gif", "p_ji_no_1.gif","p_ji_h_1.gif", "p_ji_h_1.gif", "p_ji_h_1.gif","p_ji_c_1.gif", "p_ji_c_1.gif","p_ms2_1.gif", "p_ms3_1.gif", "p_ms4_1.gif","p_ps6_1.gif", "p_ps7_1.gif", "p_ps8_1.gif"]
  },
  {
    category: "2翻役",
    name: "混老頭",
    kana: "ホンロウトウ",
    description: "手牌のすべてを「1・9・字牌」のみで構成する役です。必ず「対々和」か「七対子」とセットになります。",
    naki: true,
    tiles: ["p_ms1_1.gif", "p_ms1_1.gif", "p_ms1_1.gif", "p_ps9_1.gif", "p_ps9_1.gif", "p_ps9_1.gif", "p_ji_no_1.gif", "p_ji_no_1.gif", "p_ji_no_1.gif", "p_ji_h_1.gif", "p_ji_h_1.gif", "p_ji_h_1.gif", "p_ji_c_1.gif", "p_ji_c_1.gif"]
  },
  {
    category: "2翻役",
    name: "三色同刻",
    kana: "サンショクドウコー",
    description: "萬子・筒子・索子の3種類すべてで、同じ数字の「刻子（同じ牌3枚）」を作る役です。",
    naki: true,
    tiles: ["p_ms5_1.gif", "p_ms5_1.gif", "p_ms5_1.gif", "p_ps5_1.gif", "p_ps5_1.gif", "p_ps5_1.gif", "p_ss5_1.gif", "p_ss5_1.gif", "p_ss5_1.gif", "p_ms1_1.gif", "p_ms2_1.gif", "p_ms3_1.gif", "p_ps1_1.gif", "p_ps1_1.gif"]
  },
  {
    category: "2翻役",
    name: "三槓子",
    kana: "サンカンツ",
    description: "1人で「カン」を3回行うと成立する、非常に珍しい役です。",
    naki: true,
    tiles: ["p_ji_bk_1.gif", "p_ms2_1.gif", "p_ms2_1.gif", "p_ji_bk_1.gif", "p_ji_bk_1.gif", "p_ps5_1.gif", "p_ps5_1.gif", "p_ji_bk_1.gif", "p_ji_bk_1.gif", "p_ss8_1.gif", "p_ss8_1.gif", "p_ji_bk_1.gif", "p_ms3_1.gif", "p_ms4_1.gif", "p_ms5_1.gif", "p_ji_c_1.gif", "p_ji_c_1.gif"]
  },
  {
    category: "2翻役",
    name: "ダブル立直",
    kana: "ダブルリーチ",
    description: "誰一人として鳴いていない状態で、第1巡目に立直を宣言すると成立する役です。",
    naki: false,
    tiles: []
  },
  {
    category: "3翻役",
    name: "混一色",
    kana: "ホンイツ",
    description: "1種類の数牌（萬子・筒子・索子のどれか）と、字牌だけで構成する役です。見た目が鮮やかで狙いやすい高得点役です。",
    naki: true,
    tiles: ["p_ms1_1.gif", "p_ms2_1.gif", "p_ms3_1.gif", "p_ms4_1.gif", "p_ms5_1.gif", "p_ms6_1.gif", "p_ji_e_1.gif", "p_ji_e_1.gif", "p_ji_e_1.gif", "p_ji_c_1.gif", "p_ji_c_1.gif", "p_ji_c_1.gif", "p_ji_no_1.gif", "p_ji_no_1.gif"]
  },
  {
    category: "3翻役",
    name: "純全帯么九",
    kana: "ジュンチャン",
    description: "すべてのメンツとアタマに「1・9の数牌」が含まれている役です。字牌が含まれる「チャンタ」よりも難易度が高く、点数も高いです。",
    naki: true,
    tiles: ["p_ms1_1.gif", "p_ms2_1.gif", "p_ms3_1.gif", "p_ps7_1.gif", "p_ps8_1.gif", "p_ps9_1.gif", "p_ss1_1.gif", "p_ss2_1.gif", "p_ss3_1.gif", "p_ms9_1.gif", "p_ms9_1.gif", "p_ms9_1.gif", "p_ps1_1.gif", "p_ps1_1.gif"]
  },
  {
    category: "3翻役",
    name: "二盃口",
    kana: "リャンペイコー",
    description: "「一盃口（同じ順子2組）」を2セット作る役です。門前（メンゼン）のみ有効となる非常に難易度の高い役です。",
    naki: false,
    tiles: ["p_ms2_1.gif", "p_ms3_1.gif", "p_ms4_1.gif", "p_ms2_1.gif", "p_ms3_1.gif", "p_ms4_1.gif", "p_ps5_1.gif", "p_ps6_1.gif", "p_ps7_1.gif", "p_ps5_1.gif", "p_ps6_1.gif", "p_ps7_1.gif", "p_ss8_1.gif", "p_ss8_1.gif"]
  },
  {
    category: "6翻役",
    name: "清一色",
    kana: "チンイツ",
    description: "1種類の数牌のみで構成する役です。字牌も混ぜないため非常に難易度が高いですが、圧倒的な破壊力（高得点）を持ちます。",
    naki: true,
    tiles: ["p_ms1_1.gif", "p_ms1_1.gif", "p_ms1_1.gif", "p_ms2_1.gif", "p_ms3_1.gif", "p_ms4_1.gif", "p_ms5_1.gif", "p_ms6_1.gif", "p_ms7_1.gif", "p_ms7_1.gif", "p_ms7_1.gif", "p_ms8_1.gif", "p_ms8_1.gif", "p_ms8_1.gif"]
  },
  {
    category: "役満",
    name: "国士無双",
    kana: "コクシムソウ",
    description: "1・9・字牌を全13種類すべて1枚ずつ揃え、そのうちどれか1枚をアタマにした特殊な役です。麻雀で最も有名な役満の一つです。",
    naki: false,
    tiles: ["p_ms1_1.gif", "p_ms9_1.gif", "p_ps1_1.gif", "p_ps9_1.gif", "p_ss1_1.gif", "p_ss9_1.gif", "p_ji_e_1.gif", "p_ji_s_1.gif", "p_ji_w_1.gif", "p_ji_n_1.gif", "p_ji_no_1.gif", "p_ji_h_1.gif", "p_ji_c_1.gif", "p_ji_e_1.gif"]
  },
  {
    category: "役満",
    name: "四暗刻",
    kana: "スーアンコー",
    description: "門前（メンゼン）で、同じ牌3枚（刻子）を4組揃える役満です。最後をツモでアガる必要があります。",
    naki: false,
    tiles: ["p_ms2_1.gif", "p_ms2_1.gif", "p_ms2_1.gif", "p_ps5_1.gif", "p_ps5_1.gif", "p_ps5_1.gif", "p_ji_no_1.gif", "p_ji_no_1.gif", "p_ji_no_1.gif", "p_ji_h_1.gif", "p_ji_h_1.gif", "p_ji_h_1.gif", "p_ji_c_1.gif", "p_ji_c_1.gif"]
  },
  {
    category: "役満",
    name: "大三元",
    kana: "ダイサンゲン",
    description: "「白・發・中」をすべて3枚ずつの刻子で揃える役満です。初心者でも狙いどころがわかりやすい派手な役です。",
    naki: true,
    tiles: ["p_ji_no_1.gif", "p_ji_no_1.gif", "p_ji_no_1.gif", "p_ji_h_1.gif", "p_ji_h_1.gif", "p_ji_h_1.gif", "p_ji_c_1.gif", "p_ji_c_1.gif", "p_ji_c_1.gif", "p_ms1_1.gif", "p_ms2_1.gif", "p_ms3_1.gif", "p_ps5_1.gif", "p_ps5_1.gif"]
  },
  {
    category: "役満",
    name: "緑一色",
    kana: "リューイーソー",
    description: "索子の「2・3・4・6・8」と「發」の、緑色の牌だけで構成する非常に美しい役満です。",
    naki: true,
    tiles: ["p_ss2_1.gif", "p_ss2_1.gif", "p_ss3_1.gif", "p_ss3_1.gif", "p_ss4_1.gif", "p_ss4_1.gif", "p_ss6_1.gif", "p_ss6_1.gif", "p_ss8_1.gif", "p_ss8_1.gif", "p_ji_h_1.gif", "p_ji_h_1.gif", "p_ji_h_1.gif", "p_ji_h_1.gif"]
  },
  {
    category: "役満",
    name: "字一色",
    kana: "ツーイーソー",
    description: "手牌のすべてを字牌のみで構成する役満です。",
    naki: true,
    tiles: ["p_ji_e_1.gif", "p_ji_e_1.gif", "p_ji_e_1.gif", "p_ji_s_1.gif", "p_ji_s_1.gif", "p_ji_s_1.gif", "p_ji_w_1.gif", "p_ji_w_1.gif", "p_ji_w_1.gif", "p_ji_no_1.gif", "p_ji_no_1.gif", "p_ji_no_1.gif", "p_ji_h_1.gif", "p_ji_h_1.gif"]
  },
  {
    category: "役満",
    name: "四喜和",
    kana: "スーシーホー",
    description: "「東・南・西・北」の4種類をすべて揃える役満です。4種すべて3枚ずつなら大四喜、1種が2枚（アタマ）なら小四喜となります。",
    naki: true,
    tiles: ["p_ji_e_1.gif", "p_ji_e_1.gif", "p_ji_e_1.gif", "p_ji_s_1.gif", "p_ji_s_1.gif", "p_ji_s_1.gif", "p_ji_w_1.gif", "p_ji_w_1.gif", "p_ji_w_1.gif", "p_ji_n_1.gif", "p_ji_n_1.gif", "p_ms1_1.gif", "p_ms2_1.gif", "p_ms3_1.gif"]
  },
  {
    category: "役満",
    name: "清老頭",
    kana: "チンロウトウ",
    description: "手牌のすべてを「1・9の数牌」のみで構成する、非常に難易度の高い役満です。",
    naki: true,
    tiles: ["p_ms1_1.gif", "p_ms1_1.gif", "p_ms1_1.gif", "p_ms9_1.gif", "p_ms9_1.gif", "p_ms9_1.gif", "p_ps1_1.gif", "p_ps1_1.gif", "p_ps1_1.gif", "p_ps9_1.gif", "p_ps9_1.gif", "p_ps9_1.gif", "p_ss1_1.gif", "p_ss1_1.gif"]
  },
  {
    category: "役満",
    name: "九蓮宝燈",
    kana: "チュウレンポウトウ",
    description: "1種類の数牌で「111 2345678 999」＋「好きな数字をあと1枚」という形に、同じ種類の牌をどれか1枚加えた形でアガる、究極の役満の一つです。",
    naki: false,
    tiles: ["p_ms1_1.gif", "p_ms1_1.gif", "p_ms1_1.gif", "p_ms2_1.gif", "p_ms3_1.gif", "p_ms4_1.gif", "p_ms5_1.gif", "p_ms5_1.gif", "p_ms6_1.gif", "p_ms7_1.gif", "p_ms8_1.gif", "p_ms9_1.gif", "p_ms9_1.gif", "p_ms9_1.gif"]
  },
  {
    category: "役満",
    name: "四槓子",
    kana: "スーカンツ",
    description: "1人で4回「カン」を行うことで成立する、最も出現率が低いと言われる奇跡的な役満です。",
    naki: true,
    tiles: ["p_ji_bk_1.gif", "p_ms1_1.gif", "p_ms1_1.gif", "p_ji_bk_1.gif", 
      "p_ps9_1.gif", "p_ps9_1.gif", "p_ps9_1.gif", "p_ps9_1.gif",
      "p_ss5_1.gif", "p_ss5_1.gif", "p_ss5_1.gif", "p_ss5_1.gif",
      "p_ji_no_1.gif", "p_ji_no_1.gif", "p_ji_no_1.gif", "p_ji_no_1.gif",
      "p_ji_c_1.gif", "p_ji_c_1.gif"]
  },
  {
    category: "役満",
    name: "天和",
    kana: "テンホー",
    description: "親が配牌（最初に配られた時点）で、すでにアガリの形が完成している奇跡の役です。",
    naki: false,
    tiles: []
  },
  {
    category: "役満",
    name: "地和",
    kana: "チーホー",
    description: "子が、誰一人として鳴いていない状態の第1ツモでアガリの形を完成させる役です。",
    naki: false,
    tiles: []
  }
  // ここに他の役をどんどん追加してください
];

// クイズ用データ
export const quizData = [
  {
    question: "この牌姿の役は何？",
    tiles: ["p_ms1_1.gif", "p_ms2_1.gif", "p_ms3_1.gif", "p_ps4_1.gif", "p_ps5_1.gif", "p_ps6_1.gif", "p_ss7_1.gif", "p_ss8_1.gif", "p_ss9_1.gif", "p_ss1_1.gif", "p_ss2_1.gif", "p_ss3_1.gif", "p_ms5_1.gif", "p_ms5_1.gif"],
    options: ["平和（ピンフ）", "断么九（タンヤオ）", "三色同順（サンショクドウジュン）", "一気通貫（イッキツウカン）"],
    answer: "平和（ピンフ）",
    hint: "すべて順子（階段）で、1・9が含まれていますが、役牌ではないアタマと両面待ちの条件を満たしています。"
  },
  {
    question: "すべて自分で引いた場合のこの役は？",
    tiles: ["p_ms2_1.gif", "p_ms2_1.gif", "p_ms2_1.gif", "p_ps5_1.gif", "p_ps5_1.gif", "p_ps5_1.gif", "p_ss4_1.gif", "p_ss4_1.gif", "p_ss4_1.gif", "p_ji_h_1.gif", "p_ji_h_1.gif", "p_ji_h_1.gif", "p_ji_c_1.gif", "p_ji_c_1.gif"],
    options: ["四暗刻（スーアンコー）", "対々和（トイトイホー）", "三暗刻（サンアンコー）", "大三元（ダイサンゲン）"],
    answer: "四暗刻（スーアンコー）",
    hint: "同じ牌3枚のセット（暗刻）が4つある役満です。"
  },
  {
    question: "2〜8の数牌だけで作られたこの役は？",
    tiles: ["p_ms2_1.gif", "p_ms3_1.gif", "p_ms4_1.gif", "p_ps5_1.gif", "p_ps6_1.gif", "p_ps7_1.gif", "p_ss2_1.gif", "p_ss2_1.gif", "p_ss2_1.gif", "p_ms8_1.gif", "p_ms8_1.gif", "p_ms8_1.gif", "p_ps3_1.gif", "p_ps3_1.gif"],
    options: ["断么九（タンヤオ）", "平和（ピンフ）", "一盃口（イーペイコー）", "混全帯么九（チャンタ）"],
    answer: "断么九（タンヤオ）",
    hint: "1・9・字牌を一切使わない、もっとも基本の役です。"
  },
  {
    question: "同じ種類の数牌で1〜9を揃えたこの役は？",
    tiles: ["p_ms1_1.gif", "p_ms2_1.gif", "p_ms3_1.gif", "p_ms4_1.gif", "p_ms5_1.gif", "p_ms6_1.gif", "p_ms7_1.gif", "p_ms8_1.gif", "p_ms9_1.gif", "p_ps2_1.gif", "p_ps3_1.gif", "p_ps4_1.gif", "p_ss5_1.gif", "p_ss5_1.gif"],
    options: ["一気通貫（イッキツウカン）", "三色同順（サンショクドウジュン）", "清一色（チンイーソー）", "純全帯么九（ジュンチャン）"],
    answer: "一気通貫（イッキツウカン）",
    hint: "萬子（マンズ）で123・456・789が揃っています。"
  },
  {
    question: "萬子・筒子・索子で同じ数字を作ったこの役は？",
    tiles: ["p_ms2_1.gif", "p_ms3_1.gif", "p_ms4_1.gif", "p_ps2_1.gif", "p_ps3_1.gif", "p_ps4_1.gif", "p_ss2_1.gif", "p_ss3_1.gif", "p_ss4_1.gif", "p_ms7_1.gif", "p_ms7_1.gif", "p_ms7_1.gif", "p_ji_e_1.gif", "p_ji_e_1.gif"],
    options: ["三色同順（サンショクドウジュン）", "三色同刻（サンショクドウコ）", "一盃口（イーペイコー）", "平和（ピンフ）"],
    answer: "三色同順（サンショクドウジュン）",
    hint: "3つの色すべてで「234」の順子ができています。"
  },
  {
    question: "ペアを7組作ったこの役は？",
    tiles: ["p_ms1_1.gif", "p_ms1_1.gif", "p_ps3_1.gif", "p_ps3_1.gif", "p_ss5_1.gif", "p_ss5_1.gif", "p_ji_e_1.gif", "p_ji_e_1.gif", "p_ji_s_1.gif", "p_ji_s_1.gif", "p_ji_no_1.gif", "p_ji_no_1.gif", "p_ji_c_1.gif", "p_ji_c_1.gif"],
    options: ["七対子（チートイツ）", "二盃口（リャンペイコー）", "対々和（トイトイホー）", "四暗刻（スーアンコー）"],
    answer: "七対子（チートイツ）",
    hint: "同じ牌2枚を7種類揃える特殊な役です。"
  },
  {
    question: "白・發・中をすべて刻子にしたこの役満は？",
    tiles: ["p_ji_no_1.gif", "p_ji_no_1.gif", "p_ji_no_1.gif", "p_ji_h_1.gif", "p_ji_h_1.gif", "p_ji_h_1.gif", "p_ji_c_1.gif", "p_ji_c_1.gif", "p_ji_c_1.gif", "p_ms1_1.gif", "p_ms2_1.gif", "p_ms3_1.gif", "p_ps9_1.gif", "p_ps9_1.gif"],
    options: ["大三元（ダイサンゲン）", "小三元（ショウサンゲン）", "字一色（ツーイーソー）", "役牌（ヤクハイ）"],
    answer: "大三元（ダイサンゲン）",
    hint: "三元牌をすべて3枚ずつ揃えると成立する役満です。"
  },
  {
    question: "すべて字牌だけで構成されたこの役満は？",
    tiles: ["p_ji_e_1.gif", "p_ji_e_1.gif", "p_ji_e_1.gif", "p_ji_s_1.gif", "p_ji_s_1.gif", "p_ji_s_1.gif", "p_ji_n_1.gif", "p_ji_n_1.gif", "p_ji_n_1.gif", "p_ji_h_1.gif", "p_ji_h_1.gif", "p_ji_h_1.gif", "p_ji_c_1.gif", "p_ji_c_1.gif"],
    options: ["字一色（ツーイーソー）", "清一色（チンイーソー）", "大四喜（ダイスーシー）", "混一色（ホンイーソー）"],
    answer: "字一色（ツーイーソー）",
    hint: "数牌を1枚も使わず、字牌（東南西北白發中）だけで作ります。"
  },
  {
    question: "同じ種類の順子が2組あるこの役は？",
    tiles: ["p_ss2_1.gif", "p_ss3_1.gif", "p_ss4_1.gif", "p_ss2_1.gif", "p_ss3_1.gif", "p_ss4_1.gif", "p_ps5_1.gif", "p_ps6_1.gif", "p_ps7_1.gif", "p_ms7_1.gif", "p_ms8_1.gif", "p_ms9_1.gif", "p_ji_c_1.gif", "p_ji_c_1.gif"],
    options: ["一盃口（イーペイコー）", "二盃口（リャンペイコー）", "三色同順（サンショクドウジュン）", "平和（ピンフ）"],
    answer: "一盃口（イーペイコー）",
    hint: "索子の234が2セットあります。門前（鳴いていない）限定の役です。"
  },
  {
    question: "1・9・字牌を全種類集めたこの役満は？",
    tiles: ["p_ms1_1.gif", "p_ms9_1.gif", "p_ps1_1.gif", "p_ps9_1.gif", "p_ss1_1.gif", "p_ss9_1.gif", "p_ji_e_1.gif", "p_ji_w_1.gif", "p_ji_s_1.gif", "p_ji_n_1.gif", "p_ji_no_1.gif", "p_ji_h_1.gif", "p_ji_c_1.gif", "p_ji_c_1.gif"],
    options: ["国士無双（コクシムソウ）", "九蓮宝燈（チュウレンポウトウ）", "清老頭（チンロウトウ）", "純全帯么九（ジュンチャン）"],
    answer: "国士無双（コクシムソウ）",
    hint: "バラバラの13種類と、どれか1つのペアで完成する特殊な役満です。"
  },
  {
    question: "索子の「2・3・4・6・8」と「發」だけで作る役満は？",
    tiles: ["p_ss2_1.gif", "p_ss2_1.gif", "p_ss3_1.gif", "p_ss3_1.gif", "p_ss4_1.gif", "p_ss4_1.gif", "p_ss6_1.gif", "p_ss6_1.gif", "p_ss6_1.gif", "p_ss8_1.gif", "p_ss8_1.gif", "p_ss8_1.gif", "p_ji_h_1.gif", "p_ji_h_1.gif"],
    options: ["緑一色（リューイーソー）", "清一色（チンイーソー）", "混一色（ホンイーソー）", "対々和（トイトイホー）"],
    answer: "緑一色（リューイーソー）",
    hint: "見た目がすべて緑色の牌だけで構成される美しい役満です。"
  },
  {
    question: "ポンをしても成立するする、すべて「同じ牌3枚」で揃えたこの役は？",
    tiles: ["p_ms1_1.gif", "p_ms1_1.gif", "p_ms1_1.gif", "p_ps5_1.gif", "p_ps5_1.gif", "p_ps5_1.gif", "p_ss9_1.gif", "p_ss9_1.gif", "p_ss9_1.gif", "p_ji_no_1.gif", "p_ji_no_1.gif", "p_ji_no_1.gif", "p_ms3_1.gif", "p_ms3_1.gif"],
    options: ["対々和（トイトイホー）", "四暗刻（スーアンコー）", "三暗刻（サンアンコー）", "平和（ピンフ）"],
    answer: "対々和（トイトイホー）",
    hint: "ポンをしても成立する、刻子（コーツ）を4つ作る役です。"
  },
  {
    question: "東・南・西を刻子、北をアタマにしたこの役満は？",
    tiles: ["p_ji_e_1.gif", "p_ji_e_1.gif", "p_ji_e_1.gif", "p_ji_s_1.gif", "p_ji_s_1.gif", "p_ji_s_1.gif", "p_ji_w_1.gif", "p_ji_w_1.gif", "p_ji_w_1.gif", "p_ji_n_1.gif", "p_ji_n_1.gif", "p_ms1_1.gif", "p_ms2_1.gif", "p_ms3_1.gif"],
    options: ["小四喜（ショウスーシー）", "大四喜（ダイスーシー）", "三風刻（サンプウコー）", "字一色（ツーイーソー）"],
    answer: "小四喜（ショウスーシー）",
    hint: "4つの風牌のうち、3つを刻子、1つを雀頭にすると小四喜です。"
  },
  {
    question: "1つの種類だけで「1112345678999＋どれか」を揃えた役満は？",
    tiles: ["p_ms1_1.gif", "p_ms1_1.gif", "p_ms1_1.gif", "p_ms2_1.gif", "p_ms3_1.gif", "p_ms4_1.gif", "p_ms5_1.gif", "p_ms6_1.gif", "p_ms7_1.gif", "p_ms8_1.gif", "p_ms9_1.gif", "p_ms9_1.gif", "p_ms9_1.gif", "p_ms5_1.gif"],
    options: ["九蓮宝燈（チュウレンポウトウ）", "清一色（チンイーソー）", "一気通貫（イッキツウカン）", "国士無双（コクシムソウ）"],
    answer: "九蓮宝燈（チュウレンポウトウ）",
    hint: "門前かつ、同じ種類の数牌だけで特定の形を作る非常に珍しい役満です。"
  },
  {
    question: "すべてのメンツに1・9・字牌を入れた役は？",
    tiles: ["p_ms1_1.gif", "p_ms2_1.gif", "p_ms3_1.gif", "p_ps7_1.gif", "p_ps8_1.gif", "p_ps9_1.gif", "p_ss1_1.gif", "p_ss2_1.gif", "p_ss3_1.gif", "p_ji_c_1.gif", "p_ji_c_1.gif", "p_ji_c_1.gif", "p_ps1_1.gif", "p_ps1_1.gif"],
    options: ["混全帯么九（チャンタ）", "純全帯么九（ジュンチャン）", "清老頭（チンロウトウ）", "混老頭（ホンロウトウ）"],
    answer: "混全帯么九（チャンタ）",
    hint: "通称「チャンタ」。字牌が混ざっているのがポイントです。"
  },
  {
    question: "数牌の1・9だけを4つの刻子にした役満は？",
    tiles: ["p_ms1_1.gif", "p_ms1_1.gif", "p_ms1_1.gif", "p_ms9_1.gif", "p_ms9_1.gif", "p_ms9_1.gif", "p_ps1_1.gif", "p_ps1_1.gif", "p_ps1_1.gif", "p_ss9_1.gif", "p_ss9_1.gif", "p_ss9_1.gif", "p_ps9_1.gif", "p_ps9_1.gif"],
    options: ["清老頭（チンロウトウ）", "混老頭（ホンロウトウ）", "純全帯么九（ジュンチャン）", "国士無双（コクシムソウ）"],
    answer: "清老頭（チンロウトウ）",
    hint: "字牌を使わず、1と9の数牌だけで作った対々和の形です。"
  },
  {
    question: "1つの種類の数牌と字牌だけで作った役は？",
    tiles: ["p_ps1_1.gif", "p_ps2_1.gif", "p_ps3_1.gif", "p_ps4_1.gif", "p_ps5_1.gif", "p_ps6_1.gif", "p_ji_no_1.gif", "p_ji_no_1.gif", "p_ji_no_1.gif", "p_ji_h_1.gif", "p_ji_h_1.gif", "p_ji_h_1.gif", "p_ps9_1.gif", "p_ps9_1.gif"],
    options: ["混一色（ホンイーソー）", "清一色（チンイーソー）", "字一色（ツーイーソー）", "小三元（ショウサンゲン）"],
    answer: "混一色（ホンイーソー）",
    hint: "特定の数牌1種類＋字牌で構成される役です。"
  },
  {
    question: "萬子・筒子・索子で同じ数字の刻子を作った役は？",
    tiles: ["p_ms5_1.gif", "p_ms5_1.gif", "p_ms5_1.gif", "p_ps5_1.gif", "p_ps5_1.gif", "p_ps5_1.gif", "p_ss5_1.gif", "p_ss5_1.gif", "p_ss5_1.gif", "p_ms1_1.gif", "p_ms2_1.gif", "p_ms3_1.gif", "p_ji_e_1.gif", "p_ji_e_1.gif"],
    options: ["三色同刻（サンショクドウコ）", "三色同順（サンショクドウジュン）", "三暗刻（サンアンコー）", "対々和（トイトイホー）"],
    answer: "三色同刻（サンショクドウコ）",
    hint: "順子（階段）ではなく、同じ数字の「3枚セット」を3色集める珍しい役です。"
  },
  {
    question: "すべてのメンツに1・9の数牌を入れ、字牌を使わない役は？",
    tiles: ["p_ms1_1.gif", "p_ms2_1.gif", "p_ms3_1.gif", "p_ms7_1.gif", "p_ms8_1.gif", "p_ms9_1.gif", "p_ps1_1.gif", "p_ps2_1.gif", "p_ps3_1.gif", "p_ss7_1.gif", "p_ss8_1.gif", "p_ss9_1.gif", "p_ps9_1.gif", "p_ps9_1.gif"],
    options: ["純全帯么九（ジュンチャン）", "混全帯么九（チャンタ）", "清一色（チンイーソー）", "一気通貫（イッキツウカン）"],
    answer: "純全帯么九（ジュンチャン）",
    hint: "通称「純チャン」。字牌を一切含まず、すべて1・9を含むメンツで構成します。"
  },
  {
    question: "白と發を刻子にし、中をアタマにしたこの役は？",
    tiles: ["p_ji_no_1.gif", "p_ji_no_1.gif", "p_ji_no_1.gif", "p_ji_h_1.gif", "p_ji_h_1.gif", "p_ji_h_1.gif", "p_ji_c_1.gif", "p_ji_c_1.gif", "p_ms2_1.gif", "p_ms3_1.gif", "p_ms4_1.gif", "p_ps5_1.gif", "p_ps6_1.gif", "p_ps7_1.gif"],
    options: ["小三元（ショウサンゲン）", "大三元（ダイサンゲン）", "三元牌（サンゲンパイ）", "混一色（ホンイーソー）"],
    answer: "小三元（ショウサンゲン）",
    hint: "三元牌のうち2つが3枚、1つが2枚の状態です。"
  },
  //追加のクイズ
  {
    question: "リーチ後、1周以内にアガるとつくこの役は？",
    tiles: ["p_ms2_1.gif", "p_ms3_1.gif", "p_ms4_1.gif", "p_ps5_1.gif", "p_ps6_1.gif", "p_ps7_1.gif", "p_ss2_1.gif", "p_ss3_1.gif", "p_ss4_1.gif", "p_ji_e_1.gif", "p_ji_e_1.gif", "p_ms8_1.gif", "p_ms8_1.gif", "p_ms8_1.gif"],
    options: ["一発（イッパツ）", "ダブル立直（ダブルリーチ）", "嶺上開花（リンシャンカイホウ）", "三色同順（サンショク）"],
    answer: "一発（イッパツ）",
    hint: "立直直後の1巡以内にアガる幸運の役。途中で鳴きが入ると無効になる。"
  },
  {
    question: "山の最後の牌を自分でツモってアガった時の役は？",
    tiles: ["p_ms1_1.gif", "p_ms2_1.gif", "p_ms3_1.gif", "p_ps4_1.gif", "p_ps5_1.gif", "p_ps6_1.gif", "p_ss7_1.gif", "p_ss8_1.gif", "p_ss9_1.gif", "p_ji_s_1.gif", "p_ji_s_1.gif", "p_ji_s_1.gif", "p_ji_no_1.gif", "p_ji_no_1.gif"],
    options: ["海底摸月（ハイテイツモ）", "河底撈魚（ホウテイロン）", "天和（テンホー）", "地和（チーホー）"],
    answer: "海底摸月（ハイテイツモ）",
    hint: "その局の最後、1枚しかない海底牌でツモアガる。通称「ハイテイ」。"
  },
  {
    question: "鳴かずに同じ牌3枚（暗刻）を3セット作った時につく役は？",
    tiles: ["p_ms2_1.gif", "p_ms2_1.gif", "p_ms2_1.gif", "p_ps5_1.gif", "p_ps5_1.gif", "p_ps5_1.gif", "p_ss8_1.gif", "p_ss8_1.gif", "p_ss8_1.gif", "p_ms1_1.gif", "p_ms2_1.gif", "p_ms3_1.gif", "p_ji_c_1.gif", "p_ji_c_1.gif"],
    options: ["三暗刻（サンアンコー）", "三色同刻（サンショクドウコ）", "四暗刻（スーアンコー）", "一盃口（イーペイコー）"],
    answer: "三暗刻（サンアンコー）",
    hint: "鳴かずに自力で揃えた刻子を3つ作る役。4つ揃えば役満の四暗刻になる。"
  },
  {
    question: "東・南・西・北をすべて3枚（刻子）で揃えた役満は？",
    tiles: ["p_ji_e_1.gif", "p_ji_e_1.gif", "p_ji_e_1.gif", "p_ji_s_1.gif", "p_ji_s_1.gif", "p_ji_s_1.gif", "p_ji_w_1.gif", "p_ji_w_1.gif", "p_ji_w_1.gif", "p_ji_n_1.gif", "p_ji_n_1.gif", "p_ji_n_1.gif", "p_ms1_1.gif", "p_ms1_1.gif"],
    options: ["大四喜（ダイスーシー）", "小四喜（ショウスーシー）", "大三元（ダイサンゲン）", "清一色（チンイーソー）"],
    answer: "大四喜（ダイスーシー）",
    hint: "東・南・西・北の4種すべてを刻子にする、風牌系の最高峰役満。"
  },
  {
    question: "門前で、同じ順子を2組ずつ作ったこの役は？",
    tiles: ["p_ms2_1.gif", "p_ms3_1.gif", "p_ms4_1.gif", "p_ms2_1.gif", "p_ms3_1.gif", "p_ms4_1.gif", "p_ps5_1.gif", "p_ps6_1.gif", "p_ps7_1.gif", "p_ps5_1.gif", "p_ps6_1.gif", "p_ps7_1.gif", "p_ss9_1.gif", "p_ss9_1.gif"],
    options: ["二盃口（リャンペイコー）", "一盃口（イーペイコー）", "対々和（トイトイホー）", "三色同順（サンショク）"],
    answer: "二盃口（リャンペイコー）",
    hint: "同じ順子2組を2セット（計4面子）作る。一盃口の強化版で門前限定役。"
  },
  {
    question: "親の最初の配牌で、すでにアガっていたら？",
    tiles: ["p_ms1_1.gif", "p_ms2_1.gif", "p_ms3_1.gif", "p_ms4_1.gif", "p_ms5_1.gif", "p_ms6_1.gif", "p_ps7_1.gif", "p_ps8_1.gif", "p_ps9_1.gif", "p_ss1_1.gif", "p_ss1_1.gif", "p_ss1_1.gif", "p_ji_h_1.gif", "p_ji_h_1.gif"],
    options: ["天和（テンホー）", "地和（チーホー）", "人和（レンホー）", "国士無双（コクシムソウ）"],
    answer: "天和（テンホー）",
    hint: "親の配牌14枚で既に完成している役。麻雀における究極の運が必要な役満。"
  },
  {
    question: "場風が東、自分の自風も東のとき、東を3枚持つと？",
    tiles: ["p_ji_e_1.gif", "p_ji_e_1.gif", "p_ji_e_1.gif", "p_ms2_1.gif", "p_ms3_1.gif", "p_ms4_1.gif", "p_ps5_1.gif", "p_ps6_1.gif", "p_ps7_1.gif", "p_ss8_1.gif", "p_ss8_1.gif", "p_ss8_1.gif", "p_ji_c_1.gif", "p_ji_c_1.gif"],
    options: ["ダブ東（ダブトン）", "東（トン）", "三元牌（サンゲンパイ）", "中（チュン）"],
    answer: "ダブ東（ダブトン）",
    hint: "場風と自風が重なった東を揃える。1つのセットで2翻分の価値がある強力な役。"
  },
  {
    question: "他人の最後の捨て牌でロンアガリした時の役は？",
    tiles: ["p_ms1_1.gif", "p_ms2_1.gif", "p_ms3_1.gif", "p_ps4_1.gif", "p_ps5_1.gif", "p_ps6_1.gif", "p_ss7_1.gif", "p_ss8_1.gif", "p_ss9_1.gif", "p_ji_w_1.gif", "p_ji_w_1.gif", "p_ji_w_1.gif", "p_ms5_1.gif", "p_ms5_1.gif"],
    options: ["河底撈魚（ホウテイロン）", "海底摸月（ハイテイツモ）", "一発（イッパツ）", "槍槓（チャンカン）"],
    answer: "河底撈魚（ホウテイロン）",
    hint: "局の最後、河に捨てられた「最後の1枚」でロンする。海底摸月のロン版。"
  },
  {
    question: "門前（一度も鳴かずに）で自力でアガり牌を引くと？",
    tiles: ["p_ms2_1.gif", "p_ms2_1.gif", "p_ms2_1.gif", "p_ps5_1.gif", "p_ps6_1.gif", "p_ps7_1.gif", "p_ss1_1.gif", "p_ss2_1.gif", "p_ss3_1.gif", "p_ms8_1.gif", "p_ms9_1.gif", "p_ji_s_1.gif", "p_ji_s_1.gif", "p_ms7_1.gif"],
    options: ["門前自模（メンゼンツモ）", "平和（ピンフ）", "断么九（タンヤオ）", "一発（イッパツ）"],
    answer: "門前自模（メンゼンツモ）",
    hint: "鳴かずにツモアガるだけで成立。基本1翻だが立直や平和ともよく複合する。"
  },
  {
    question: "子の最初のツモ（鳴きなし）で役満が完成していたら？",
    tiles: ["p_ms1_1.gif", "p_ms2_1.gif", "p_ms3_1.gif", "p_ms4_1.gif", "p_ms5_1.gif", "p_ms6_1.gif", "p_ps7_1.gif", "p_ps8_1.gif", "p_ps9_1.gif", "p_ss1_1.gif", "p_ss2_1.gif", "p_ss3_1.gif", "p_ji_c_1.gif", "p_ji_c_1.gif"],
    options: ["地和（チーホー）", "天和（テンホー）", "人和（レンホー）", "九蓮宝燈（チュウレンポウトウ）"],
    answer: "地和（チーホー）",
    hint: "子の第1ツモでアガる役満。自分のツモまでに誰も鳴いていないことが条件。"
  },
  {
    question: "1種類の色（萬子・筒子・索子いずれか）だけで揃えた役は？",
    tiles: ["p_ms1_1.gif", "p_ms2_1.gif", "p_ms3_1.gif", "p_ms4_1.gif", "p_ms5_1.gif", "p_ms6_1.gif", "p_ms7_1.gif", "p_ms8_1.gif", "p_ms9_1.gif", "p_ms1_1.gif", "p_ms2_1.gif", "p_ms3_1.gif", "p_ms5_1.gif", "p_ms5_1.gif"],
    options: ["清一色（チンイーソー）", "混一色（ホンイーソー）", "国士無双（コクシムソウ）", "三色同順（サンショクドウジュン）"],
    answer: "清一色（チンイーソー）",
    hint: "1種類の数牌だけで構成する高得点役。通称「チンイツ」。鳴いても5翻ある。"
  },
  {
    question: "白・發・中のいずれか1種類を3枚揃えるとつく役は？",
    tiles: ["p_ji_no_1.gif", "p_ji_no_1.gif", "p_ji_no_1.gif", "p_ms2_1.gif", "p_ms3_1.gif", "p_ms4_1.gif", "p_ps5_1.gif", "p_ps6_1.gif", "p_ps7_1.gif", "p_ss8_1.gif", "p_ss9_1.gif", "p_ss7_1.gif", "p_ms1_1.gif", "p_ms1_1.gif"],
    options: ["役牌（ヤクハイ）", "平和（ピンフ）", "断么九（タンヤオ）", "一発（イッパツ）"],
    answer: "役牌（ヤクハイ）",
    hint: "三元牌のいずれかを刻子にするだけで成立。アガリやすさを重視する際の基本。"
  },
  {
    question: "「123・123」を2セット、計4つの順子を門前で作ったこの役は？",
    tiles: ["p_ms1_1.gif", "p_ms2_1.gif", "p_ms3_1.gif", "p_ms1_1.gif", "p_ms2_1.gif", "p_ms3_1.gif", "p_ps4_1.gif", "p_ps5_1.gif", "p_ps6_1.gif", "p_ps4_1.gif", "p_ps5_1.gif", "p_ps6_1.gif", "p_ss8_1.gif", "p_ss8_1.gif"],
    options: ["二盃口（リャンペイコー）", "一盃口（イーペイコー）", "七対子（チートイツ）", "三色同順（サンショク）"],
    answer: "二盃口（リャンペイコー）",
    hint: "一盃口が2つ完成した形。門前限定の3翻役で、見た目は七対子に似ているが別物。"
  },
  {
    question: "1・9・字牌の刻子だけで構成され、字牌が含まれない役満は？",
    tiles: ["p_ms1_1.gif", "p_ms1_1.gif", "p_ms1_1.gif", "p_ps1_1.gif", "p_ps1_1.gif", "p_ps1_1.gif", "p_ss9_1.gif", "p_ss9_1.gif", "p_ss9_1.gif", "p_ms9_1.gif", "p_ms9_1.gif", "p_ms9_1.gif", "p_ps9_1.gif", "p_ps9_1.gif"],
    options: ["清老頭（チンロウトウ）", "混老頭（ホンロウトウ）", "国士無双（コクシムソウ）", "字一色（ツーイーソー）"],
    answer: "清老頭（チンロウトウ）",
    hint: "1と9の数牌のみで4面子1雀頭を作る。対々和の形になるのが一般的。"
  },
  {
    question: "すべてのメンツとアタマに「1・9」が含まれ、字牌がない役は？",
    tiles: ["p_ms1_1.gif", "p_ms2_1.gif", "p_ms3_1.gif", "p_ps7_1.gif", "p_ps8_1.gif", "p_ps9_1.gif", "p_ss1_1.gif", "p_ss2_1.gif", "p_ss3_1.gif", "p_ms9_1.gif", "p_ms9_1.gif", "p_ms9_1.gif", "p_ss7_1.gif", "p_ss7_1.gif"],
    options: ["純全帯么九（ジュンチャン）", "混全帯么九（チャンタ）", "混一色（ホンイーソー）", "一気通貫（イッキツウカン）"],
    answer: "純全帯么九（ジュンチャン）",
    hint: "通称「純チャン」。全てのセットに1か9の数牌を絡める、美しく難易度の高い役。"
  },
  {
    question: "東・南・西・北のうち、3種を刻子、1種を頭にした役満は？",
    tiles: ["p_ji_e_1.gif", "p_ji_e_1.gif", "p_ji_e_1.gif", "p_ji_s_1.gif", "p_ji_s_1.gif", "p_ji_s_1.gif", "p_ji_w_1.gif", "p_ji_w_1.gif", "p_ji_w_1.gif", "p_ji_n_1.gif", "p_ji_n_1.gif", "p_ms1_1.gif", "p_ms2_1.gif", "p_ms3_1.gif"],
    options: ["小四喜（ショウスーシー）", "大四喜（ダイスーシー）", "字一色（ツーイーソー）", "混一色（ホンイーソー）"],
    answer: "小四喜（ショウスーシー）",
    hint: "4つの風牌（東南西北）のうち3種を3枚、1種を2枚にする役満。"
  },
  {
    question: "東場（トンバ）において、自分の風が西の時に「東」を3枚揃えると？",
    tiles: ["p_ji_e_1.gif", "p_ji_e_1.gif", "p_ji_e_1.gif", "p_ms1_1.gif", "p_ms2_1.gif", "p_ms3_1.gif", "p_ps4_1.gif", "p_ps5_1.gif", "p_ps6_1.gif", "p_ss7_1.gif", "p_ss8_1.gif", "p_ss9_1.gif", "p_ms5_1.gif", "p_ms5_1.gif"],
    options: ["場風 東（バカゼ トン）", "自風 西（ジカゼ シャー）", "ダブ東（ダブトン）", "役牌 白（ハク）"],
    answer: "場風 東（バカゼ トン）",
    hint: "その時の「場」と同じ字牌を3枚揃えると1翻つく。東場なら東、南場なら南が対象。"
  },
  {
    question: "誰一人として鳴いていない第1巡目に、立直を宣言すると成立する役は？",
    tiles: [
      "p_ms2_1.gif", "p_ms3_1.gif", "p_ms4_1.gif", "p_ps5_1.gif", "p_ps6_1.gif", "p_ps7_1.gif", "p_ss2_1.gif", "p_ss3_1.gif", "p_ss4_1.gif", "p_ms1_1.gif", "p_ms1_1.gif", "p_ms1_1.gif", "p_ji_s_1.gif", "p_ji_s_1.gif"
    ],
    options: ["ダブル立直（ダブルリーチ）", "立直（リーチ）", "一発（イッパツ）", "天和（テンホー）"],
    answer: "ダブル立直（ダブルリーチ）",
    hint: "親の配牌、または子の第1ツモでテンパイしている時だけ使える、通常の2倍の価値があるリーチです。"
  }
];