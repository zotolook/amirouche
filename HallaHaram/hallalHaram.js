// 1. Hallal / Haram / Mariage
const souratesHallalHaramMariage = [
  "La polygamie",
  4,
  "Le mariage temporaire",
  4,
  60,
  "La dot obligatoire",
  4,
  "Les femmes interdites",
  4,
  4,
  "Sexe avec les esclaves",
  4,
  5,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  "Mariage entre fornicateurs (ices)",
  24,
  "Mariage avec les non musulmanes",
  2,
  5,
  60,
  "Remariage après divorce",
  2,
];
const versetsHallalHaramMariage = [
  "",
  3,
  "",
  24,
  10,
  "",
  4,
  "",
  22,
  23,
  "",
  24,
  5,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  "",
  3,
  "",
  221,
  5,
  10,
  "",
  230,
];
const ahadithsHallalHaramMariage = [
  // La polygamie
  {
    sujet: " La polygamie",
    auteur: " صحيح أبي داود",
    numero: 2241,
    texte:
      " سلَمتُ وعندي ثمانِ نسوةٍ، فذَكرتُ ذلِكَ للنَّبيِّ صلَّى اللَّهُ عليْهِ وسلَّم، فقالَ النَّبيُّ صلَّى اللَّهُ عليْهِ وسلَّم: اختَر منْهنَّ أربعًا",
    lien: "https://dorar.net/hadith/sharh/65840",
    autres: " ابن ماجه (1952)",
  },
  {
    sujet: " La polygamie",
    auteur: " صحيح أبي داود",
    numero: 2133,
    texte:
      " مَنْ كانتْ له امرأتان فمال إلى إحداهما جاء يومَ القيامةِ وشِقُّه مائلٌ",
    lien: "https://dorar.net/hadith/sharh/81251",
    autres: " الترمذي (1141)، والنسائي (3942) ابن ماجه (1969)",
  },
  {
    sujet: " La polygamie",
    auteur: " صحيح البخاري",
    numero: 5215,
    texte:
      " أنَّ نَبيَّ اللهِ صلَّى اللهُ عليه وسلَّم كان يَطوفُ على نِسائِه في اللَّيلةِ الواحِدةِ، وله يَومَئذٍ تِسعُ نِسوةٍ.",
    lien: "https://dorar.net/hadith/sharh/24883",
    autres: " مسلم (309)",
  },

  // Le mariage temporaire
  {
    sujet: "Le mariage temporaire",
    auteur: "El Boukhari صحيح البخاري",
    numero: 5116,
    texte:
      "سَمِعْتُ ابْنَ عَبَّاسٍ: سُئِلَ عن مُتْعَةِ النِّسَاءِ فَرَخَّصَ، فَقالَ له مَوْلًى له: إنَّما ذلكَ في الحَالِ الشَّدِيدِ، وفي النِّسَاءِ قِلَّةٌ؟ أوْ نَحْوَهُ، فَقالَ ابنُ عَبَّاسٍ: نَعَمْ.",
    lien: "https://dorar.net/hadith/sharh/151313",
    autres: "",
  },
  {
    sujet: "Le mariage temporaire",
    auteur: "El Boukhari صحيح البخاري",
    numero: 4216,
    texte:
      "نهى عنْ مُتعةِ النساءِ يومَ خيبرَ ، وعنْ أكلِ لحومِ الحُمُرِ الإنسيِّةِ",
    lien: "https://dorar.net/hadith/sharh/116370",
    autres: "مسلم (1407) مالك (503) واللفظ لهم، والترمذي (1794)",
  },
  {
    sujet: "Le mariage temporaire",
    auteur: "El Boukhari صحيح البخاري",
    numero: 5117,
    texte: "  إنَّه قد أُذِنَ لَكُم أن تَستَمتِعوا، فاستَمتِعوا. ...",
    lien: "https://dorar.net/hadith/sharh/116370",
    autres: "مسلم (1405)، وأحمد (16534)، والنسائي في ((السنن الكبرى)) (5514)",
  },

  // La dot obligatoire
  {
    sujet: " La dot obligatoire",
    auteur: " صحيح البخاري",
    numero: 5871,
    texte: "... قد مَلَّكتُكَها بما معك مِنَ القُرآنِ. ...",
    lien: "https://dorar.net/hadith/sharh/20157",
    autres: " مسلم (1425)",
  },
  {
    sujet: " La dot obligatoire",
    auteur: " صحيح مسلم ",
    numero: 1426,
    texte: "... فهذا صَداقُ رَسولِ اللهِ صلَّى اللهُ عليه وسلَّم لأزواجِه. ...",
    lien: "https://dorar.net/hadith/sharh/139692",
    autres:
      " أحمد (24626)، والدارمي (2245) باختلاف يسير، وأبو داود (2105) مختصرًا.",
  },
  {
    sujet: " La dot obligatoire",
    auteur: " صحيح مسلم ",
    numero: 1418,
    texte: ".أحَقُّ الشُّروطِ أن توفوا به ما استَحلَلتُم به الفُروجَ..",
    lien: "https://dorar.net/hadith/sharh/139692",
    autres: " أبو داود (2139) واللفظ له، وأخرجه البخاري (2721)",
  },
  {
    sujet: " La dot obligatoire",
    auteur: " صحيح البخاري",
    numero: 371,
    texte:
      " أعتقَ رسولُ اللَّهِ صلَّى اللَّهُ عليهِ وسلَّمَ صفيَّةَ وجعلَ عِتقَها صداقَها",
    lien: "https://dorar.net/hadith/sharh/20157",
    autres: " مسلم (1365)",
  },
  // Les femmes interdites
  {
    sujet: " Les femmes interdites",
    auteur: " صحيح البخاري",
    numero: 2645,
    texte: " يَحْرُمُ مِنَ الرَّضَاعَةِ مَا يَحْرُمُ مِنَ النَّسَبِ ",
    lien: "https://dorar.net/hadith/sharh/16282",
    autres: " مسلم (1447)",
  },
  {
    sujet: " Les femmes interdites",
    auteur: " صحيح البخاري",
    numero: 5110,
    texte:
      " لا يُجْمَعُ بَيْنَ المَرْأَةِ وَعَمَّتِهَا، وَلا بَيْنَ المَرْأَةِ وَخَالَتِهَا ",
    lien: "https://dorar.net/hadith/sharh/20833",
    autres: " مسلم (1408)",
  },
  {
    sujet: " Les femmes interdites",
    auteur: " الطبري",
    numero: 8938,
    texte:
      " كانَ أهلُ الجاهِليَّةِ يُحَرِّمونَ ما حَرَّمَ اللهُ، إلَّا امرأةَ الأبِ، والجَمعَ بَينَ الأُختَيْنِ ",
    lien: "https://dorar.net/hadith/sharh/216239",
    autres: " ابن المنذر في ((التفسير)) (1523) باختلاف يسير",
  },

  // Sexe avec les esclaves
  {
    sujet: " Le sexe avec les esclaves",
    auteur: " صحيح البخاري",
    numero: 2542,
    texte:
      " ما عليكم أن لا تفعَلوا ، ما من نسمةٍ كائنةٍ إلى يومِ القيامةِ إلا وهي كائنةٌ ",
    lien: "https://dorar.net/hadith/sharh/64976",
    autres: " مسلم (1438)",
  },
  {
    sujet: " Le sexe avec les esclaves",
    auteur: " صحيح البخاري",
    numero: 2542,
    texte:
      " ما عليكم أن لا تفعَلوا ، ما من نسمةٍ كائنةٍ إلى يومِ القيامةِ إلا وهي كائنةٌ ",
    lien: "https://dorar.net/hadith/sharh/64976",
    autres: " مسلم (1438)",
  },
  {
    sujet: " Le sexe avec les esclaves",
    auteur: " صحيح مسلم",
    numero: 1456,
    texte: " أصبْنا سبيًا من سبيِ أوطاسَ ... ",
    lien: "https://dorar.net/hadith/sharh/73574",
    autres: "أحمد (11709) الطبري في ((تفسيره)) (8/153)",
  },

  // Mariage entre fornicateurs
  {
    sujet: " Le mariage des fornicateurs",
    auteur: " صحيح ابن ماجة",
    numero: 4250,
    texte: " التَّائِبُ مِنَ الذَّنْبِ كَمَنْ لا ذَنْبَ لهُ ",
    lien: "https://dorar.net/hadith/sharh/73574",
    autres:
      " ابن ماجه (2055) الطبراني في ((المعجم الكبير )) (10/ 150) (10281 )",
  },

  // Mariage avec des non musulmanes
  {
    sujet: " Le mariage avec des non musulmanes",
    auteur: " مِنَ الإجماعِ ",
    numero: "",
    texte: " يَحرُمُ نِكاحُ النِّساءِ الكافِراتِ  مِن غَيرِ أهلِ الكِتابِ. ",
    lien: "https://dorar.net/feqhia/4272/%D8%A7%D9%84%D9%85%D8%A8%D8%AD%D8%AB-%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB-%D9%86%D9%83%D8%A7%D8%AD-%D8%A7%D9%84%D9%83%D9%81%D8%A7%D8%B1-%D9%85%D9%86-%D8%BA%D9%8A%D8%B1-%D8%A3%D9%87%D9%84-%D8%A7%D9%84%D9%83%D8%AA%D8%A7%D8%A8",
    autres:
      " الشَّافِعيُّ ، وابنُ المُنذِر ، والبَغَويُّ ، وابنُ قُدامةَ ، والقرطبيُّ ، وابنُ تيميَّةَ  ",
  },

  // Remariage après divorce
  {
    sujet: " Le re-mariage après divorce",
    auteur: " صحيح البخاري",
    numero: 5261,
    texte:
      " إذا طلَّقَ الرَّجُلُ امرَأتَه ثلاثًا لم تَحِلَّ له حتى تَنكِحَ زَوجًا غَيرَه، ويَذوقَ كُلُّ واحدٍ منهما عُسَيلةَ صاحِبِه. ",
    lien: "https://dorar.net/hadith/sharh/137887",
    autres: " مسلم (1433)",
  },
];

// 2. Hallal / Haram / Alimentation
const souratesHallalHaramAlimentation = [
  " La bonne nourriture ",
  2,
  5,
  5,
  5,
  5,
  6,
  16,
  " La nourriture interdite ",
  2,
  5,
  6,
  6,
  16,
  " La viande du porc",
  2,
  5,
  6,
  16,
  " L'alcool",
  16,
  2,
  4,
  5,
  5,
];
const versetsHallalHaramAlimentation = [
  "",
  168,
  4,
  5,
  88,
  96,
  118,
  114,
  "",
  173,
  3,
  121,
  145,
  115,
  "",
  173,
  3,
  145,
  115,
  "",
  67,
  219,
  43,
  90,
  91,
];
const ahadithsHallalHaramAlimentation = [
  // Produits hallal
  {
    sujet: "Produits de la mer",
    auteur: " صحيح الترمذي ",
    numero: 69,
    texte: " كلُّ ما خرَج مِن البحرِ حلالٌ",
    lien: "https://dorar.net/hadith/sharh/86657",
    autres: " أبو داود (83)، وابن ماجه (386)، وأحمد (8720)",
  },
  {
    sujet: "الضب",
    auteur: " صحيح البخاري",
    numero: 5391,
    texte:
      " قال خالِدُ بنُ الوليدِ: أحَرامٌ الضَّبُّ يا رَسولَ اللهِ؟ قال: لا ",
    lien: "https://dorar.net/hadith/sharh/86657",
    autres: " مسلم (1946)",
  },
  // Interdits alimentaires
  {
    sujet: "Interdits alimentares",
    auteur: " صحيح مسلم ",
    numero: 1934,
    texte:
      " نهَى رسولُ اللهِ صلَّى اللهُ عليه وسلَّم عن أكلِ كلِّ ذي نابٍ من السِّباعِ وعن كلِّ ذي مِخلَبٍ من الطَّيرِ",
    lien: "https://dorar.net/hadith/sharh/131062",
    autres: " الترمذي (1474)، والطبراني (648)",
  },
  {
    sujet: "Interdits alimentares",
    auteur: " صحيح مسلم ",
    numero: 1940,
    texte: " إنَّ اللهَ ورَسوله يَنهَيانِكُم عن لُحومِ الحُمُرِ؛ فإنَّها رِجسٌ",
    lien: "https://dorar.net/hadith/sharh/25471",
    autres: " البخاري (4198)",
  },
  {
    sujet: "Interdits alimentares",
    auteur: " صحيح أبو داود ",
    numero: 3785,
    texte:
      " نهَى النبيُّ عن أكلِ الجلالةِ وألبانِها وفي روايةٍ : نهَى عن ركوبِ جلالةِ الإبلِ",
    lien: "https://dorar.net/hadith/sharh/119880",
    autres: " الترمذي (1824)، وابن ماجه (3189) ",
  },
  // Alcool
  {
    sujet: "L'alcool",
    auteur: "El Boukhari صحيح البخاري",
    numero: 5585,
    texte: " كلُّ شرابٍ أسكرَ فهو حرامٌ.",
    lien: "https://dorar.net/hadith/sharh/2072",
    autres: "مسلم (2001)، وأبو داود (3682)، والترمذي (1863)، والنسائي (559)",
  },
  {
    sujet: "L'alcool",
    auteur: "El Boukhari صحيح البخاري",
    numero: 5575,
    texte:
      " مَن شَرِبَ الخَمرَ في الدُّنيا، ثُمَّ لم يَتُبْ مِنها؛ حُرِمَها في الآخِرةِ.",
    lien: "https://dorar.net/hadith/sharh/34714",
    autres: " مسلم (2003) ",
  },
  {
    sujet: " vente d'alcool ",
    auteur: "  صحيح مسلم",
    numero: 1581,
    texte1:
      " إِنَّ اللَّهَ وَرَسُولَهُ حَرَّمَا بَيْعَ الْخَمْرِ وَالْمَيْتَةِ وَالْخِنْزِيرِ وَالأَصْنَامِ",
    texte2:
      " Allah et Son Messager ont interdit la vente de l’alcool, de la bête morte, du porc et des idoles.",
    lien: "https://dorar.net/hadith/sharh/118846",
    autres: " أبو داود (3490)  الترمذي (1297)، والنسائي (4256)",
  },
  // Rituels
  {
    sujet: "Rituel alimentaire",
    auteur: "El Boukhari صحيح البخاري",
    numero: 5376,
    texte: " ... سَمِّ اللهَ، وكُلْ بيَمينِكَ، وكُلْ ممَّا يَليكَ ...",
    lien: "https://dorar.net/hadith/sharh/130676",
    autres: " مسلم (2022) ",
  },
  {
    sujet: "Rituel alimentaire",
    auteur: "El Boukhari صحيح البخاري",
    numero: 5376,
    texte: " ... لا تَشرَبوا في آنيةِ الذَّهَبِ والفِضَّةِ ...",
    lien: "https://dorar.net/hadith/sharh/12558",
    autres: " مسلم (2067)  أبو داود (3723) البيهقي (102)",
  },
  {
    sujet: "Rituel alimentaire",
    auteur: "El Boukhari صحيح البخاري",
    numero: 5456,
    texte:
      " إذا أكَلَ أحَدُكُم فلا يَمسَحْ يَدَه حتَّى يَلعَقَها أو يُلعِقَها.",
    lien: "https://dorar.net/hadith/sharh/37253",
    autres: " مسلم (2031) )",
  },
  // Superstition
  {
    sujet: "Alimentation & superstition",
    auteur: "El Boukhari صحيح البخاري",
    numero: 5445,
    texte:
      " مَن تَصَبَّحَ كُلَّ يَومٍ سَبعَ تَمَراتٍ عَجوةً، لم يَضُرَّه في ذلك اليَومِ سُمٌّ ولا سِحرٌ.",
    lien: "https://dorar.net/hadith/sharh/20979",
    autres: " مسلم (2047) ) أبو داود (3876)",
  },
];

// 3. Hallal / Haram / Habits
const souratesHallalHaramHabits = [
  " Les vêtements en général ",
  7,
  7,
  " Le voile ",
  24,
  24,
  33,
  33,
  33,
  24,
  33,
];
const versetsHallalHaramHabits = ["", 26, 31, "", 30, 31, 33, 53, 59, 60, 55];
const ahadithsHallalHaramHabits = [
  {
    sujet: " Le vêtement blanc recommandé ",
    auteur: " صحيح أبي داود ",
    numero: 3878,
    texte1: " البِسوا من ثيابِكُمُ البياضَ فإنَّها مِن خيرِ ثيابِكُم ",
    texte2:
      " Portez des vêtements blancs, car ce sont parmi vos meilleurs vêtements.",
    lien: "https://dorar.net/hadith/sharh/124154",
    autres: " الترمذي (994)، وابن ماجه (3566)، وأحمد (3426) ",
  },
  {
    sujet: " Allah est beau ! ",
    auteur: " صحيح مسلم ",
    numero: 91,
    texte1: " ... إنَّ اللهَ جَميلٌ يُحِبُّ الجَمالَ ... ",
    texte2: "Allah est Beau et Il aime la beauté.",
    lien: "https://dorar.net/hadith/sharh/26239",
    autres: " من أفراد مسلم على البخاري ",
  },
  {
    sujet: "عورَةٌ Parties intimes",
    auteur: " صحيح أبو داود ",
    numero: 495,
    texte1: " ما بينَ السُّرَّةِ والرُّكْبَةِ عورَةٌ ",
    texte2: " Ce qui est entre le nombril et les genoux est une ʿawra.",
    lien: "https://dorar.net/hadith/sharh/140409",
    autres: "  أحمد (6756) ",
  },
  {
    sujet: " Vêtements sous les chevilles (izar) ",
    auteur: " صحيح  البخاري ",
    numero: 5787,
    texte1: " ما أسفَلَ مِنَ الكَعبَينِ مِنَ الإزارِ ففي النَّارِ. ",
    texte2: "Ce qui descend sous les chevilles du vêtement est en Enfer.",
    lien: "https://dorar.net/hadith/sharh/16342",
    autres: "   ",
  },
  {
    sujet: " L’orgueil dans le vêtement ",
    auteur: " صحيح  البخاري ",
    numero: 3665,
    texte1: " لا ينظرُ اللهُ يومَ القيامةِ إلى من جرَّ ثوبَه من الخُيلاءِ",
    texte2:
      "Allah ne regardera pas celui qui laisse traîner son vêtement par orgueil.",
    lien: "https://dorar.net/hadith/sharh/4841",
    autres: " مسلم (2085)  ",
  },
  {
    sujet: " Interdiction de la soie et de l’or aux hommes ",
    auteur: " صحيح أبي داود ",
    numero: 3665,
    texte1:
      " حُرِّمَ لباسُ الحريرِ والذَّهبِ على ذُكورِ أمَّتي وأُحلَّ لإناثِهم",
    texte2: "La soie et l’or ont été interdits aux hommes de ma communauté…",
    lien: "https://dorar.net/hadith/sharh/28058",
    autres: " أحمد (935) ",
  },
  {
    sujet: " Interdiction des vêtements ostentatoires  شُهْرَةٍ",
    auteur: " صحيح أبي داود ",
    numero: 4029,
    texte1:
      " مَن لَبِسَ ثوبَ شُهرةٍ في الدُّنيا، ألْبَسَهُ اللهُ ثوبَ مَذلَّةٍ يومَ القيامةِ.",
    texte2: "",
    lien: "https://dorar.net/hadith/sharh/88187",
    autres: " النسائي 9560, ابن ماجه (3607)",
  },
  {
    sujet: " Interdiction de s’envelopper de manière indécente ",
    auteur: " صحيح البخاري ",
    numero: 584,
    texte1:
      " نَهَى عَنِ اشْتِمَالِ الصَّمَّاءِ وَالِاحْتِبَاءِ فِي ثَوْبٍ وَاحِدٍ",
    texte2:
      "Le Prophète a interdit de s’envelopper entièrement dans un seul vêtement (de façon à exposer la ʿawra)",
    lien: "https://dorar.net/hadith/sharh/7709",
    autres: " مسلم (825، 1511)",
  },
  {
    sujet: " Interdiction des vêtements teints au safran ",
    auteur: " صحيح مسلم ",
    numero: 2078,
    texte1: " نَهَى النَّبِيُّ ﷺ عَنْ الْمُعَصْفَرِ",
    texte2: " Le Prophète ﷺ a interdit les vêtements teints au safran",
    lien: "https://dorar.net/hadith/sharh/34242",
    autres: " الترمذي (1737)، وأحمد (924)",
  },
  {
    sujet: " Couvrir la ʿawra ",
    auteur: " صحيح مسلم ",
    numero: 338,
    texte1:
      " لَا يَنْظُرُ الرَّجُلُ إِلَى عَوْرَةِ الرَّجُلِ وَلَا الْمَرْأَةُ إِلَى عَوْرَةِ الْمَرْأَةِ",
    texte2: " Qu’un homme ne regarde pas la ʿawra d’un autre homme… ",
    lien: "https://dorar.net/hadith/sharh/21397",
    autres: " الترمذي(2793) أبو داود (4018)",
  },
];

// 4- Le comportement d'un musulman
const souratesHallalHaramComportements = [
    "Discipline conjugale", 4,
    "Réponse au mal", 42,
    "L'alliance et le désaveu", 5,
    "Combat et violence", 9,
    "Autorité et obéissance", 4,
  
];
const versetsHallalHaramComportements = [
    "", 34,
    "", 40,
    "", 51,
    "", 5,
    "", 59,
];
const ahadithsHallalHaramComportements = [
  {
    sujet: " Allah a prescrit des limites",
    auteur: " الدارقطني",
    numero: 183 - 4,
    texte1:
      " إنَّ اللهَ تعالى فَرَضَ فرائِضَ فلا تُضَيِّعوها، وحَدَّ حُدودًا فلا تَعْتَدوها، وحرَّم أشياءَ فلا تَنْتَهكوها",
    texte2:
      "Allah a prescrit des obligations… et interdit des choses, alors ne les transgressez pas…",
    lien: "https://dorar.net/hadith/sharh/151586",
    autres: " الحاكم (7114)، والبيهقي (20217)",
  },
  {
    sujet: " Interdiction d’imiter le sexe opposé",
    auteur: " صحيح البخاري",
    numero: 5886,
    texte1:
      " لَعَنَ رَسُولُ اللَّهِ ﷺ الْمُتَشَبِّهِينَ مِنَ الرِّجَالِ بِالنِّسَاءِ",
    texte2: "Le Messager d’Allah ﷺ a maudit les hommes qui imitent les femmes…",
    lien: "https://dorar.net/hadith/sharh/15192",
    autres: " من أفراد البخاري على مسلم",
  },
  {
    sujet: " Couvrir la ʿawra ",
    auteur: " صحيح مسلم ",
    numero: 338,
    texte1:
      " لَا يَنْظُرُ الرَّجُلُ إِلَى عَوْرَةِ الرَّجُلِ وَلَا الْمَرْأَةُ إِلَى عَوْرَةِ الْمَرْأَةِ",
    texte2: " Qu’un homme ne regarde pas la ʿawra d’un autre homme… ",
    lien: "https://dorar.net/hadith/sharh/21397",
    autres: " الترمذي(2793) أبو داود (4018)",
  },
  {
    sujet: " Couvrir la ʿawra ",
    auteur: " صحيح الترمذي ",
    numero: 1173,
    texte1: " إنَّ المرأةَ عورةٌ ، فإذا خرجتِ استشرفها الشَّيطانُ",
    texte2:
      " La femme est ʿawra ; lorsqu’elle sort, le diable la rend séduisante (aux yeux des hommes).",
    lien: "https://dorar.net/hadith/sharh/119924",
    autres: "ابن خزيمة (1685)، وابن حبان (5598) ",
  },
  {
    sujet: " Abandonner ce qui est douteux ",
    auteur: " صحيح الترمذي ",
    numero: 2518,
    texte1:
      " دعْ ما يَريبُكَ إلى ما لا يُريبُكَ فإنَّ الصدقَ طُمأنينةٌ وإنَّ الكذبَ رِيبَةٌ",
    texte2:
      " Délaisse ce qui te met dans le doute pour ce qui ne te met pas dans le doute.",
    lien: "https://dorar.net/hadith/sharh/66595",
    autres: " النسائي (5711) أحمد (1723)",
  },
  {
    sujet: " La triche ",
    auteur: " صحيح مسلم ",
    numero: 102,
    texte1: " مَن غَشَّ فليسَ مِنِّي. ",
    texte2: " Celui qui trompe n’est pas des nôtres.",
    lien: "https://dorar.net/hadith/sharh/60453",
    autres: " من أفراد مسلم على البخاري",
  },
  {
    sujet: " l’insulte et l’obscénité ",
    auteur: " صحيح الترمذي ",
    numero: 1977,
    texte1:
      " لَيْسَ الْمُؤْمِنُ بِالطَّعَّانِ وَلَا اللَّعَّانِ وَلَا الْفَاحِشِ",
    texte2: " Le croyant n’est pas insultant, ni grossier, ni obscène.",
    lien: "https://dorar.net/hadith/sharh/119924",
    autres: "أحمد (3839)",
  },
  {
    sujet: " Aimer son frère ",
    auteur: " صحيح مسلم ",
    numero: 45,
    texte1:
      " لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لِأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ ",
    texte2:
      "Aucun de vous ne croit vraiment jusqu’à ce qu’il aime pour son frère ce qu’il aime pour lui-même.",
    lien: "https://dorar.net/hadith/sharh/60453",
    autres: " البخاري (13) النسائي (5017)",
  },
  {
    sujet: " Importance de l’intention ",
    auteur: " صحيح مسلم ",
    numero: 1907,
    texte1: " إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ ",
    texte2: "Les actes ne valent que par les intentions.",
    lien: "https://dorar.net/hadith/sharh/60453",
    autres: " البخاري (54) أبو داود (2201))",
  },
  {
    sujet: " Malédiction des imageurs ",
    auteur: " صحيح مسلم ",
    numero: 2109,
    texte1: " إِنَّ أَشَدَّ النَّاسِ عَذَابًا... الَّذِينَ يُصَوِّرُونَ",
    texte2:
      "Les gens les plus sévèrement châtiés… sont ceux qui font des images.",
    lien: "https://dorar.net/hadith/sharh/123620",
    autres: " النسائي (5364)",
  },
  {
    sujet: " Suivre aveuglément les dirigeants ",
    auteur: " صحيح مسلم ",
    numero: 1847,
    texte1: "تَسْمَعُ وَتُطِيعُ لِلْأَمِيرِ... ",
    texte2: " Tu écoutes et tu obéis au dirigeant…",
    lien: "https://dorar.net/hadith/sharh/14801",
    autres: " ",
  },
  {
    sujet: " Laisser pousser la barbe ",
    auteur: " صحيح مسلم ",
    numero: 259,
    texte1: " أَعْفُوا اللِّحَى وَقُصُّوا الشَّوَارِبَ ",
    texte2: " Laissez pousser les barbes et taillez les moustaches.",
    lien: "https://dorar.net/hadith/sharh/1088",
    autres: "  البخاري (5892)",
  },
  {
    sujet: " La circoncision ",
    auteur: " صحيح مسلم ",
    numero: 257,
    texte1:
      " الْفِطْرَةُ خَمْسٌ: الْخِتَانُ وَالِاسْتِحْدَادُ وَقَصُّ الشَّارِبِ وَتَقْلِيمُ الْأَظْفَارِ وَنَتْفُ الْإِبْطِ ",
    texte2:
      " Cinq choses font partie de la nature : la circoncision, le rasage des poils pubiens, couper la moustache, couper les ongles et épiler les aisselles.",
    lien: "https://dorar.net/hadith/sharh/73032",
    autres: "  (البخاري (5889",
  },
  {
    sujet: " Teindre les cheveux blancs ",
    auteur: "  صحيح الترمذي ",
    numero: 1752,
    texte1: " غَيِّرُوا الشَّيْبَ وَلَا تَشَبَّهُوا بِالْيَهُودِ",
    texte2: " Changez les cheveux blancs et ne ressemblez pas aux juifs.",
    lien: "https://dorar.net/hadith/sharh/67922",
    autres: " أحمد (7545) ",
  },
  {
    sujet: " Teindre les cheveux blancs ",
    auteur: "  صحيح مسلم",
    numero: 2102,
    texte1: "اجتَنِبوا السَّوادَ. ",
    texte2: " Évitez le noir.",
    lien: "https://dorar.net/hadith/sharh/16984",
    autres: " من أفراد مسلم على البخاري",
  },
  {
    sujet: " Interdiction de raser partiellement (qaza‘) ",
    auteur: "  صحيح مسلم",
    numero: 2120,
    texte1: " نَهَى رَسُولُ اللَّهِ ﷺ عَنِ الْقَزَعِ",
    texte2: " Le Messager d’Allah a interdit le rasage partiel des cheveux.",
    lien: "https://dorar.net/hadith/sharh/62827",
    autres: "  5920 البخاري",
  },
  {
    sujet: " Interdiction de s’épiler les sourcils ",
    auteur: "  صحيح مسلم",
    numero: 2125,
    texte1: " لَعَنَ اللَّهُ النَّامِصَاتِ وَالْمُتَنَمِّصَاتِ ",
    texte2: " Allah a maudit celles qui épilent les sourcils…",
    lien: "https://dorar.net/hadith/sharh/121832",
    autres: " أبو داود (4170) ",
  },
  {
    sujet: " vente d'alcool ",
    auteur: "  صحيح مسلم",
    numero: 1581,
    texte1:
      " إِنَّ اللَّهَ وَرَسُولَهُ حَرَّمَا بَيْعَ الْخَمْرِ وَالْمَيْتَةِ وَالْخِنْزِيرِ وَالأَصْنَامِ",
    texte2:
      " Allah et Son Messager ont interdit la vente de l’alcool, de la bête morte, du porc et des idoles.",
    lien: "https://dorar.net/hadith/sharh/118846",
    autres: " أبو داود (3490)  الترمذي (1297)، والنسائي (4256)",
  },
];