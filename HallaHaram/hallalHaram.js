// 1. Hallal / Haram / Mariage
const souratesHallalHaramMariage = [
    "La polygamie", 4,
    "Le mariage temporaire",4,60,
    "La dot obligatoire", 4,
    "Les femmes interdites", 4,4,
    "Sexe avec les esclaves", 4,5,23,23,23,23,23,23,23,
    "Mariage entre fornicateurs (ices)", 24,
    "Mariage avec les non musulmanes", 2, 5, 60,
    "Remariage après divorce", 2,
];
const versetsHallalHaramMariage = [
    "", 3,
    "",24,10,
    "", 4,
    "", 22,23,
    "", 24,5,1,2,3,4,5,6,7,
    "", 3,
    "", 221, 5, 10,
    "",230,
    
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
    
    " La bonne nourriture ",2,5, 5, 5, 5, 6,16,
    " La nourriture interdite ",2, 5, 6,6, 16,
    " La viande du porc",2,5,6,16,
    " L'alcool",16,2,4,5,5, 



];
const versetsHallalHaramAlimentation = [
    "", 168, 4, 5, 88, 96, 118 ,114, 
    "", 173, 3, 121, 145, 115,
    "",173,3,145,115,
    "",67,219,43,90, 91,
    
];
const ahadithsHallalHaramAlimentation = [

];