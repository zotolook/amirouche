// 1. Cadre du mariage
const souratesSexeMariage = [];
const versetsSexeMariage = [];
const ahadithsSexeMariage = [];

// 2. La fornication
const souratesSexeFornication = [4, 4, 17, 24, 24, 24, 24, 24, 24, 25, 25, 25, 25, 70, 70, 70,];
const versetsSexeFornication = [15, 16, 32, 2, 4, 23, 24, 25, 26, 68, 69, 70, 71, 29, 30, 31,];
const ahadithsSexeFornication = [
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 6443,
    texte: ".مَن مات من أُمَّتِكَ لا يُشرِكُ باللهِ شيئًا دخل الجنَّةَ",
    lien: "https://dorar.net/hadith/sharh/9430",
    autres: "مسلم (94)",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 2234,
    texte: " إذا زَنَتْ أمَةُ أحَدِكُمْ ... ",
    lien: "https://dorar.net/hadith/sharh/15817",
    autres: "مسلم (1703)",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 2649,
    texte:
      " أنَّه أمَرَ فِيمَن زَنَى، ولَمْ يُحْصَنْ بجَلْدِ مِئَةٍ، وتَغْرِيبِ عَامٍ. ",
    lien: "https://dorar.net/hadith/sharh/14720",
    autres:
      "(مسند ابن الجعد)) (2890)، والنسائي في ((السنن الكبرى)) (7198)، والطبراني (5197) (5/ 237)",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 4747,
    texte: " البَيِّنَةُ أَوْ حَدٌّ في ظَهْرِكَ ",
    lien: "https://dorar.net/hadith/sharh/491",
    autres: "من أفراد البخاري على مسلم",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 6612,
    texte: " كتب على ابنِ آدمَ حظُّه من الزنا ",
    lien: "https://dorar.net/hadith/sharh/64033",
    autres: "مسلم (2657)، وأبو داود (2152)",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 526,
    texte:
      " أَقِمِ الصَّلاةَ طَرَفَيِ النَّهارِ وزُلَفًا مِنَ اللَّيْلِ، إنَّ الحَسَناتِ يُذْهِبْنَ السَّيِّئاتِ} [هود: 114] ",
    lien: "https://dorar.net/hadith/sharh/23950",
    autres: "مسلم (4687)",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 6633,
    texte:" أمَا والَّذي نَفْسِي بيَدِهِ، لَأَقْضِيَنَّ بيْنَكُما بكِتَابِ اللَّهِ ",
    lien: "https://dorar.net/hadith/sharh/564",
    autres: "مسلم (1697)",
  },
];

// 3. L'adultère
const souratesSexeAdultere = [4, 24, 24, 24, 24];
const versetsSexeAdultere = [25, 6, 7, 8, 9];
const ahadithsSexeAdultere = [
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 6633,
    texte:
      " أمَا والَّذي نَفْسِي بيَدِهِ، لَأَقْضِيَنَّ بيْنَكُما بكِتَابِ اللَّهِ ",
    lien: "https://dorar.net/hadith/sharh/564",
    autres: "مسلم (1697)",
  },
];

// 4. L'histoire du prophète Joseph
const souratesSexeJoseph = [ 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12,];
const versetsSexeJoseph = [  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35,];
const ahadithsSexeJoseph = [];

// 5. Le sexe au paradis
const souratesSexeParadis = [];
const versetsSexeParadis = [];
const ahadithsSexeParadis = [];

// 6. Le sexe avec les esclaves
const souratesSexeEsclaves = [23, 23, 23, 23, 23, 23, 23];
const versetsSexeEsclaves = [1, 2, 3, 4, 5, 6, 7];
const ahadithsSexeEsclaves = [
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 4139,
    texte:"خَرَجْنَا مع رَسولِ اللَّهِ صَلَّى اللهُ عليه وسلَّمَ في غَزْوَةِ بَنِي المُصْطَلِقِ، فأصَبْنَا سَبْيًا مِن سَبْيِ العَرَبِ، فَاشْتَهَيْنَا النِّسَاءَ، فَاشْتَدَّتْ عَلَيْنَا العُزْبَةُ، وأَحْبَبْنَا العَزْلَ، فَسَأَلْنَا رَسولَ اللَّهِ صَلَّى اللهُ عليه وسلَّمَ، فَقالَ: ما علَيْكُم أنْ لا تَفْعَلُوا ما مِن نَسَمَةٍ كَائِنَةٍ إلى يَومِ القِيَامَةِ إلَّا وهي كَائِنَةٌ.",
    lien: "https://dorar.net/hadith/sharh/11750",
    autres: "",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 5075,
    texte:"كُنَّا نَغْزُو مع النَّبيِّ صلَّى اللهُ عليه وسلَّم وليسَ معنَا نِسَاءٌ، فَقُلْنَا: ألَا نَخْتَصِي؟ فَنَهَانَا عن ذلكَ، فَرَخَّصَ لَنَا بَعْدَ ذلكَ أنْ نَتَزَوَّجَ المَرْأَةَ بالثَّوْبِ، ثُمَّ قَرَأَ: {يَا أَيُّهَا الَّذِينَ آمَنُوا لَا تُحَرِّمُوا طَيِّبَاتِ مَا أَحَلَّ اللَّهُ لَكُمْ} [المائدة: 87]",
    lien: "https://dorar.net/hadith/sharh/14580",
    autres: "",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 5210,
    texte:"أَصَبْنَا سَبْيًا، فَكُنَّا نَعْزِلُ، فَسَأَلْنَا رَسولَ اللَّهِ صَلَّى اللهُ عليه وسلَّمَ، فَقالَ: أوَإنَّكُمْ لَتَفْعَلُونَ - قالَهَا ثَلَاثًا - ما مِن نَسَمَةٍ كَائِنَةٍ إلى يَومِ القِيَامَةِ إلَّا هي كَائِنَةٌ.",
    lien: "https://dorar.net/hadith/sharh/11752",
    autres: "",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 2229,
    texte:
      "أنَّهُ بيْنَما هو جَالِسٌ عِنْدَ النبيِّ صَلَّى اللهُ عليه وسلَّمَ، قالَ: يا رَسولَ اللَّهِ، إنَّا نُصِيبُ سَبْيًا، فَنُحِبُّ الأثْمَانَ، فَكيفَ تَرَى في العَزْلِ؟ فَقالَ أوَإنَّكُمْ تَفْعَلُونَ ذلكَ؟ لا علَيْكُم أنْ لا تَفْعَلُوا ذَلِكُمْ، فإنَّهَا ليسَتْ نَسَمَةٌ كَتَبَ اللَّهُ أنْ تَخْرُجَ إلَّا هي خَارِجَةٌ.",
    lien: "https://dorar.net/hadith/sharh/11749",
    autres: "",
  },
];

// 7. Le prophète Muhammad et le sexe
const souratesSexeMuhammad = [];
const versetsSexeMuhammad = [];
const ahadithsSexeMuhammad = [
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 284,
    texte:
      "أنَّ النَّبِيَّ صلَّى اللَّهُ عليهِ وسلَّمَ كان يطوفُ على نسائِهِ بِغُسلٍ واحِدٍ",
    lien: "https://dorar.net/hadith/sharh/24883",
    autres: "5215",
  },
];

// 8. L'homosexualité
const souratesSexeHomosexualite = [];
const versetsSexeHomosexualite = [];
const ahadithsSexeHomosexualite = [];

// 9. Le mariage de jouissance
const souratesSexeJouissance = [];
const versetsSexeJouissance = [];
const ahadithsSexeJouissance = [
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 4216,
    texte:
      "أنَّ رَسولَ اللَّهِ صلَّى اللهُ عليه وسلَّمَ نَهَى عن مُتْعَةِ النِّسَاءِ يَومَ خَيْبَرَ، وعَنْ أكْلِ لُحُومِ الحُمُرِ الإنْسِيَّةِ.",
    lien: "https://dorar.net/hadith/sharh/116370",
    autres: "",
  },

  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 5116,
    texte:
      "سَمِعْتُ ابْنَ عَبَّاسٍ: سُئِلَ عن مُتْعَةِ النِّسَاءِ فَرَخَّصَ، فَقالَ له مَوْلًى له: إنَّما ذلكَ في الحَالِ الشَّدِيدِ، وفي النِّسَاءِ قِلَّةٌ؟ أوْ نَحْوَهُ، فَقالَ ابنُ عَبَّاسٍ: نَعَمْ.",
    lien: "https://dorar.net/hadith/sharh/151313",
    autres: "",
  },
];

// 10. L'allaitement de l'adulte
const souratesSexeAllaitementAdultes = [];
const versetsSexeAllaitementAdultes = [];
const ahadithsSexeAllaitementAdultes = [];

