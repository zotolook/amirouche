// 1. Le paradis d'Allah
const souratesParadis = [
  // 🌿 1. Jardins du Paradis (Jannāt) et paysages
    " 1. Jardins du Paradis (Jannāt) et paysages", 2, 3, 3, 3, 3, 4, 10, 15, 9, 18,  
    " 2. Rivières et sources", 2, 3, 3, 3, 3, 4, 10, 15,  47,
    " 3. Nourriture et fruits", 2, 55,55, 56,56,56,56,
    " 4. Épouses pures (compagnons)", 2, 3, 4, 55,55,
    " 5. Demeure éternelle et stabilité", 2, 3, 3, 3, 4, 15,  
    " 6. Paix, sécurité et absence de peur", 4, 15, 56,56,
    "7. Récompense spirituelle et proximité d’Allah", 3,3,3, 75,75,
];
const versetsParadis = [
    "🌿", 25, 15, 133, 136, 198, 57, 9, 45, 72, 31, 
    "💧", 25, 15, 133, 136, 198, 57, 9, 45,  15,
    "🍇", 25, 70,56, 20,21,32,33,
    "👥", 25, 15, 57, 70,56, 
    "🏡", 25, 15, 136, 198, 57, 48, 
    "😊", 57, 46, 25,26, 
    "🌟", 15,169,198, 22,23, 
    

];
const ahadithssParadis = [
  {
    sujet: " Description du paradis ",
    auteur: " صحيح مسلم",
    numero: 1901,
    texteArabe: " قوموا إلى جَنَّةٍ عَرضُها السَّمَواتُ والأرضُ،",
    texteFrancais: " ",
    lien: "https://dorar.net/hadith/sharh/33044",
    autres: " أحمد (12398) أبو داود (2618)",
  },
  {
    sujet: " Description du paradis ",
    auteur: " صحيح البخاري",
    numero: 2790,
    texteArabe:
      " إنَّ في الجنةِ مائةُ درجةٍ أعدَّها اللهُ للمجاهدِين في سبيلِه، ما بين كل درجَتينِ كما بين السماءِ والأرضِ",
    texteFrancais:
      " Au Paradis il y a cent degrés qu’Allah a préparés pour les combattants dans Son chemin.",
    lien: "https://dorar.net/hadith/sharh/68657",
    autres: " ",
  },
  {
    sujet: " 💧 Rivières et boissons ",
    auteur: " صحيح الترمذي",
    numero: 2790,
    texteArabe: "في الجنةِ أربعةُ أنهارٍ: ماءٌ، ولبنٌ، وخمرٌ، وعسلٌ",
    texteFrancais:
      " Au Paradis il y a quatre fleuves : d’eau, de lait, de vin et de miel.",
    lien: "https://dorar.net/hadith/sharh/120093",
    autres: " أحمد (20052)",
  },
  {
    sujet: "🍇 Nourriture et fruits (L'arbre au tronc d'or)",
    auteur: " صحيح الترمذي",
    numero: 2525,
    texteArabe: "ما في الجنةِ شجرةٌ إلا وساقُها من ذهب",
    texteFrancais:
      "Il n’y a pas un arbre au Paradis dont le tronc ne soit en or. ",
    lien: "https://dorar.net/hadith/sharh/149827",
    autres: " أبو يعلى (6195)، وابن حبان (7410)",
  },
  {
    sujet: "🍇 Nourriture (ni urine ni caca !)",
    auteur: "صحيح مسلم ",
    numero: 2835,
    texteArabe: "إن أهل الجنةِ يأكلون فيها ويشربون ولا يتغوّطون",
    texteFrancais:
      "Les gens du Paradis mangent et boivent sans aucune souillure. ",
    lien: "https://dorar.net/hadith/sharh/20820",
    autres: " من أفراد مسلم على البخاري",
  },
  {
    sujet: "👥 Les femmes du paradis",
    auteur: "صحيح مسلم ",
    numero: 1880,
    texteArabe: "إن أهل الجنةِ يأكلون فيها ويشربون ولا يتغوّطون",
    texteFrancais:
      "Si une femme du Paradis apparaissait sur terre, elle illuminerait tout ce qui est entre les deux.",
    lien: "https://dorar.net/hadith/sharh/13721",
    autres: " صحيح البخاري 6567",
  },
  {
    sujet: "👥 Deux houris pour chaque croyant!",
    auteur: "صحيح مسلم ",
    numero: 2834,
    texteArabe: " إن للمؤمنِ في الجنةِ زوجتين من الحور العين",
    texteFrancais: "Le croyant aura au Paradis deux épouses parmi les houris.",
    lien: "https://dorar.net/hadith/sharh/131297",
    autres: " صحيح البخاري 3246",
  },
  {
    sujet: "👥 Les croyants verront Allah ! ",
    auteur: "صحيح مسلم ",
    numero: 633,
    texteArabe: " إنكم سترون ربكم كما ترون القمر ليلة البدر",
    texteFrancais:
      "Vous verrez votre Seigneur comme vous voyez la pleine lune.",
    lien: "https://dorar.net/hadith/sharh/24478",
    autres: " صحيح البخاري 554",
  },

  // https://dorar.net/hadith/sharh/21709
  // https://dorar.net/hadith/sharh/33448
  // https://dorar.net/hadith/sharh/11591
  // https://dorar.net/hadith/sharh/61059
  // https://dorar.net/hadith/sharh/60801#:~:text=%D9%86%D8%A7%D8%B3%D8%AE%20%D8%A7%D9%84%D8%AD%D8%AF%D9%8A%D8%AB%20%D9%88%D9%85%D9%86%D8%B3%D9%88%D8%AE%D9%87-,%2D%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%AC%D9%86%D8%A9%20%D8%B4%D8%AC%D8%B1%D8%A9%D9%8C%20%D9%8A%D8%B3%D9%8A%D8%B1%20%D8%A7%D9%84%D8%B1%D8%A7%D9%83%D8%A8%D9%8F%20%D9%81%D9%8A%20%D8%B8%D9%84%D9%90%D9%91%D9%87%D8%A7%20%D9%85%D8%A7%D8%A6%D8%A9%D9%8F%20%D8%B9%D8%A7%D9%85%D9%8D%20%D9%85%D8%A7,%D9%88%D8%A7%D9%82%D8%B1%D8%A1%D9%88%D8%A7%20%D8%A5%D9%86%20%D8%B4%D8%A6%D8%AA%D9%8F%D9%85%20%D9%88%D9%8E%D8%B8%D9%90%D9%84%D9%8D%D9%91%20%D9%85%D9%8E%D9%85%D9%92%D8%AF%D9%8F%D9%88%D8%AF%D9%8D&text=%7C%20%D8%A7%D9%84%D8%AA%D8%AE%D8%B1%D9%8A%D8%AC%20%3A%20%D8%A3%D8%AE%D8%B1%D8%AC%D9%87%20%D8%A7%D9%84%D8%A8%D8%AE%D8%A7%D8%B1%D9%8A%20(4881,%D9%88%D9%85%D8%B3%D9%84%D9%85%20(2826)%20%D8%A8%D8%A7%D8%AE%D8%AA%D9%84%D8%A7%D9%81%20%D9%8A%D8%B3%D9%8A%D8%B1.
  // https://dorar.net/hadith/sharh/64080
  // https://dorar.net/hadith/sharh/5084
  // https://dorar.net/hadith/sharh/5811
  // https://dorar.net/hadith/sharh/21709
  // https://dorar.net/hadith/sharh/26605
  // https://dorar.net/hadith/sharh/6223
  // https://dorar.net/hadith/sharh/120306
  // https://dorar.net/hadith/sharh/15353
  // https://dorar.net/hadith/sharh/7419
  // https://dorar.net/hadith/sharh/86811
];

// 2. L'enfer' d'Allah
const souratesEnfer = [
    "🔥 1. Le feu et la fournaise", 4, 14,14, 18, 22, 37,37,37,37,37,37,37, 44,44,44,44, 47, 56,56,56, 82,  
    "🔁 2. Impossibilité de sortir de l’Enfer", 5, 22, 32, 
    "💥 3. Intensité et continuité du châtiment", 22, 56, 56, 56, 78, 78, 78, 
    "🌍 4. Diversité des châtiments", 14, 14, 37, 37, 37, 37, 37, 37, 37, 44, 44, 44, 44, 47, 
    "⚖️ 5. Rétribution selon les actes", 16, 18, 32, 78, 78, 78, 99, 99, 
    ];
const versetsEnfer = [
    "النار والعذاب بالنار", 56, 16,17, 29, 22, 62,63,64,65,66,67,68, 43,44,45,46, 15, 42,43,44, 14, 
    " عدم الخروج من النار", 37, 22, 20, 
    "شدة العذاب واستمراريته ", 22, 42, 43, 44, 24, 25, 26, 
    " أنواع العذاب المختلفة", 16, 17, 62, 63, 64, 65, 66, 67, 68, 43, 44, 45, 46, 15, 
    " الجزاء حسب الأعمال ", 34, 29, 20, 24, 25, 26, 7, 8, 
];
const ahadithssEnfer = [
  // https://dorar.net/hadith/sharh/123620
  // https://dorar.net/hadith/sharh/21365
  // https://dorar.net/hadith/sharh/5113
  // https://dorar.net/hadith/sharh/61988
  // https://dorar.net/hadith/sharh/37248
  // https://dorar.net/hadith/sharh/9662
  // https://dorar.net/hadith/sharh/5105
  // https://dorar.net/hadith/sharh/1639
  // https://dorar.net/hadith/sharh/74177
  // https://dorar.net/hadith/sharh/15115
  // https://dorar.net/hadith/sharh/5415
];

