// 1- Le mariage 
const souratesFemmesMariage = ["La polygamie", 4, "mariage avec non-musulmans",2, "mariages interdits",4, "Mariage avec les esclaves musulmanes",4, "Le mariage avec les orphelines", 4,"Le mariage avec des petites filles", 65,65];
const versetsFemmesMariage = ["", 3, "", 221, "", 23, "", 25,"", 127,"", 2,4];
const ahadithsFemmesMariage = [
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 5134,
    texte:
      "أنَّ النبيَّ صَلَّى اللهُ عليه وسلَّمَ تَزَوَّجَهَا وهي بنْتُ سِتِّ سِنِينَ، وبَنَى بهَا وهي بنْتُ تِسْعِ سِنِينَ ",
    lien: "https://dorar.net/hadith/sharh/15625",
    autres: "مسلم (1422)، وأبو داود (4935)، والنسائي (3379)",
  },
  {
    auteur: "أبو داود (2085)",
    numero: 2085,
    texte: "لا نِكاحَ إلَّا بوليٍّ. ",
    lien: "https://dorar.net/hadith/sharh/85239",
    autres: " أخرجه أبو داود (2085)، والترمذي (1101)، وابن ماجه (1881)",
  },
];

// 2- le divorce
const souratesFemmesDivorce = ["Le divorce avant consommation", 2,2, "La médiation avant le divorce",4, "Le divorce trois fois", 2,2,  "Période d'attente d'une femme divorcée", 2,"Autres cas de période d'attente", 65, "Droits d'une femme divorcée",2,2, 65,65,65,65,65, ];
const versetsFemmesDivorce = ["", 236,237,                            "",35,                            "", 229,230,                    "", 228,                                     "",4,                                  "", 231,232, 1,2,3,6,7,                             ];
const ahadithsFemmesDivorce = [
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 2639,
    texte:
      "أتريدينَ أن ترجِعي إلى رفاعةَ لا حتَّى تذوقي عُسَيلتَهُ ويذوقَ عُسَيلتَكِ",
    lien: "https://dorar.net/hadith/sharh/112150",
    autres: "",
  },
];

// 3. L'héritage
const souratesFemmesHeritage = ["La femme hérite la moitié de l'homme !", 4,4, ];
const versetsFemmesHeritage = ["", 11,176, ];
const ahadithsFemmesHeritage = [
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 6737,
    texte:
      "  ألحِقوا الفرائضَ بأصحابِها، فما أبقَت الفرائضُ فلأَولَى رجُلٍ ذَكَرٍ",
    lien: "https://dorar.net/hadith/sharh/85399",
  },
];

// 4. L'intélligence
const souratesFemmesIntelligence = ["la création",4, "Le témoignage", 2, ];
const versetsFemmesIntelligence = ["",1,              "", 282, ];
const ahadithsFemmesIntelligence = [
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 29,
    texte: " أُرِيتُ النَّارَ فَإِذَا أكْثَرُ أهْلِهَا النِّسَاءُ، يَكْفُرْنَ",
    lien: "https://dorar.net/hadith/sharh/3118",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 304,
    texte: " ما رَأَيْتُ مِن نَاقِصَاتِ عَقْلٍ ودِينٍ",
    lien: "https://dorar.net/hadith/sharh/26045",
  },
  {
    auteur: " صحيح مسلم",
    numero: 79,
    texte:
      "ما رأيتُ من ناقصاتِ عقلٍ ودينٍ أسلب لِلُبِّ الرَّجُلِ الحازِمِ منكن",
    lien: "https://dorar.net/hadith/sharh/68487",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 4425,
    texte: "لن يُفْلِحَ قومٌ ولَّوْا أمرَهَمُ امرأَةً",
    lien: "https://dorar.net/hadith/sharh/68355",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 5195,
    texte:
      "لا تَصُمِ المَرْأَةُ وبَعْلُها شاهِدٌ إلَّا بإذْنِهِ، ولا تَأْذَنْ في بَيْتِهِ وهو شاهِدٌ إلَّا بإذْنِهِ، وما أنْفَقَتْ مِن كَسْبِهِ مِن غيرِ أمْرِهِ، فإنَّ نِصْفَ أجْرِهِ له.",
    lien: "https://dorar.net/hadith/sharh/13201",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 6547,
    texte:
      "قُمْتُ علَى بابِ الجَنَّةِ، فَكانَ عامَّةُ مَن دَخَلَها المَساكِينَ، وأَصْحابُ الجَدِّ مَحْبُوسُونَ، غيرَ أنَّ أصْحابَ النَّارِ قدْ أُمِرَ بهِمْ إلى النَّارِ، وقُمْتُ علَى بابِ النَّارِ فإذا عامَّةُ مَن دَخَلَها النِّساءُ.",
    lien: "https://dorar.net/hadith/sharh/25697",
    autres: "5197. dorar:67314",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 3241,
    texte:
      "اطَّلَعْتُ في النَّارِ فرأَيْتُ أكثَرَ أهلِها النِّساءَ واطَّلَعْتُ في الجنَّةِ فرأَيْتُ أكثَرَ أهلِها الفُقراءَ",
    lien: "https://dorar.net/hadith/sharh/21365",
    autres: "",
  },
];

// 5. L'esclavage
const souratesFemmesEsclaves = ["Le sexe est permis avec les esclaves sans mariage", 4,23,23, 70,70,  ];
const versetsFemmesEsclaves = ["", 24,5,6, 29,30, ];
const ahadithsFemmesEsclaves = [
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 5210,
    texte:
      "أَصَبْنَا سَبْيًا، فَكُنَّا نَعْزِلُ، فَسَأَلْنَا رَسولَ اللَّهِ صَلَّى اللهُ عليه وسلَّمَ، فَقالَ: أوَإنَّكُمْ لَتَفْعَلُونَ - قالَهَا ثَلَاثًا - ما مِن نَسَمَةٍ كَائِنَةٍ إلى يَومِ القِيَامَةِ إلَّا هي كَائِنَةٌ.",
    lien: "https://dorar.net/hadith/sharh/11752",
    autres: "",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 4942,
    texte:
      "يَعْمِدُ أحَدُكُمْ، فَيَجْلِدُ امْرَأَتَهُ جَلْدَ العَبْدِ، فَلَعَلَّهُ يُضَاجِعُهَا مِن آخِرِ يَومِهِ. ثُمَّ وعَظَهُمْ في ضَحِكِهِمْ مِنَ الضَّرْطَةِ",
    lien: "https://dorar.net/hadith/sharh/207882",
    autres: "",
  },
];

// 6. Les comparaisons
const souratesFemmesComparaison = ["La femme ... débile !",4, "La femme ... diable!",4, "La femme ... les excréments !",5, "La femme est un labour pour les hommes...!",2,];
const versetsFemmesComparaison= ["", 5,                   "", 117,                       "",6,                              "", 223,];
const ahadithsFemmesComparaison = [
  {
    auteur: "صحيح مسلم",
    numero: 510,
    texte: "  يَقطعُ الصَّلاةَ ، المرأةُ ، والحمارُ ، والكَلبُ الأسوَدُ .",
    lien: "https://dorar.net/hadith/sharh/77949",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 511,
    texte: " لقَدْ جَعَلْتُمُونَا كِلَابًا!",
    lien: "https://dorar.net/hadith/sharh/11981",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 2858,
    texte: "إنَّما الشُّؤمُ في ثَلاثةٍ: في المرأَةِ والدَّارِ والدَّابَّةِ",
    lien: "https://dorar.net/hadith/sharh/77765",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 5753,
    texte:
      "لا عَدْوَى ولا طِيَرَةَ وإنَّما الشُّؤْمُ في ثَلاثَةٍ: المَرْأَةِ، والْفَرَسِ، والدَّارِ.",
    lien: "https://dorar.net/hadith/sharh/10085",
    autres: "",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 4942,
    texte:
      "يَعْمِدُ أحَدُكُمْ، فَيَجْلِدُ امْرَأَتَهُ جَلْدَ العَبْدِ، فَلَعَلَّهُ يُضَاجِعُهَا مِن آخِرِ يَومِهِ. ثُمَّ وعَظَهُمْ في ضَحِكِهِمْ مِنَ الضَّرْطَةِ",
    lien: "https://dorar.net/hadith/sharh/207882",
    autres: "",
  },
];

// 7. Le sexe
const souratesFemmesSexe = [2, "Période de privation de sexe avec l'épouse",2,2, "Le sexe est permis avec les esclaves sans mariage", 4,];
const versetsFemmesSexe = [223, "",226,227, "", 24, ];
const ahadithsFemmesSexe = [
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 4615,
    texte:
      "نَّا نَغْزُو مع النَّبيِّ صلَّى اللهُ عليه وسلَّم وليسَ معنَا نِسَاءٌ، فَقُلْنَا: ألَا نَخْتَصِي؟ فَنَهَانَا عن ذلكَ، فَرَخَّصَ لَنَا بَعْدَ ذلكَ أنْ نَتَزَوَّجَ المَرْأَةَ بالثَّوْبِ، ثُمَّ قَرَأَ: {يَا أَيُّهَا الَّذِينَ آمَنُوا لَا تُحَرِّمُوا طَيِّبَاتِ مَا أَحَلَّ اللَّهُ لَكُمْ} [المائدة: 87]",
    lien: "https://dorar.net/hadith/sharh/14580",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 3237,
    texte:
      " إذا دعا أحدُكم امرأتَه إلى فراشِه فأبتْ أنْ تجيءَ لعَنتْها الملائكةُ حتَّى تُصبِحَ",
    lien: "https://dorar.net/hadith/sharh/10597",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 5210,
    texte:
      "أَصَبْنَا سَبْيًا، فَكُنَّا نَعْزِلُ، فَسَأَلْنَا رَسولَ اللَّهِ صَلَّى اللهُ عليه وسلَّمَ، فَقالَ: أوَإنَّكُمْ لَتَفْعَلُونَ - قالَهَا ثَلَاثًا - ما مِن نَسَمَةٍ كَائِنَةٍ إلى يَومِ القِيَامَةِ إلَّا هي كَائِنَةٌ.",
    lien: "https://dorar.net/hadith/sharh/11752",
    autres: "",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 5240,
    texte: "لا تُباشِرِ المرأةُ المرأةَ فتَنعتَها لزوجِها كأنَّهُ ينظرُ إليها",
    lien: "https://dorar.net/hadith/sharh/73809",
    autres: "",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 1800,
    texte: "إذا أطالَ أحَدُكُمُ الغَيْبَةَ فلا يَطْرُقْ أهْلَهُ لَيْلًا.",
    lien: "https://dorar.net/hadith/sharh/13452",
    autres: "",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 2639,
    texte:
      "أتريدينَ أن ترجِعي إلى رفاعةَ لا حتَّى تذوقي عُسَيلتَهُ ويذوقَ عُسَيلتَكِ",
    lien: "https://dorar.net/hadith/sharh/112150",
    autres: "",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 3237,
    texte:
      " إذا دعا أحدُكم امرأتَه إلى فراشِه فأبتْ أنْ تجيءَ لعَنتْها الملائكةُ حتَّى تُصبِحَ",
    lien: "https://dorar.net/hadith/sharh/10597",
  },
];

// 8- le voile
const souratesFemmesVoile = ["La chasteté", 24,24,      "Maharims", 33,                                    "histoire de Saouda",33,33,];
const versetsFemmesVoile = ["mot utilisé: khimar", 30,31, "La femme est autorisée à enlever son voile", 55, "Mots utilisé: djilbab et voile", 53,59, ];
const ahadithsFemmesVoile = [
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 5235,
    texte: "لا يَدْخُلَنَّ هذا عَلَيْكُنَّ.",
    lien: "https://dorar.net/hadith/sharh/14199",
    autres: "",
  },
  

];

// 9- L'autorité de l'homme sur la femme
const souratesFemmesAutorite = ["L'homme a autorité sur la femme...", 4,2,];
const versetsFemmesAutorite = ["L'homme peut frapper son épouse", 34,228,];
const ahadithsFemmesAutorite = [
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 3006,
    texte:
      " لا تُسافِرِ المرأةُ إلَّا مع ذي مَحْرَمٍ، ولا يُدْخَلْ عليها إلَّا ومعها مَحْرَمٌ",
    lien: "https://dorar.net/hadith/sharh/76155",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 1203,
    texte: "التَّسْبِيحُ لِلرِّجَالِ، والتَّصْفِيقُ لِلنِّسَاءِ.",
    lien: "https://dorar.net/hadith/sharh/13733",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 362,
    texte: "لا تَرْفَعْنَ رُؤُوسَكُنَّ حتَّى يَسْتَوِيَ الرِّجَالُ جُلُوسًا.",
    lien: "https://dorar.net/hadith/sharh/22733",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 1864,
    texte:
      "أَلَّا تُسَافِرَ امْرَأَةٌ مَسِيرَةَ يَوْمَيْنِ لَيْسَ مَعَهَا زَوْجُهَا أَوْ ذُو مَحْرَمٍ، وَلا صَوْمَ يَوْمَيْنِ: الفِطْرِ وَالأَضْحَى، وَلا صَلاةَ بَعْدَ صَلاتَيْنِ: بَعْدَ العَصْرِ حَتَّى تَغْرُبَ الشَّمْسُ، وَبَعْدَ الصُّبْحِ حَتَّى تَطْلُعَ الشَّمْسُ، وَلا تُشَدُّ الرِّحَالُ إِلَّا إِلَى ثَلاثَةِ مَسَاجِدَ: مَسْجِدِ الحَرَامِ، وَمَسْجِدِي، وَمَسْجِدِ الأَقْصَى.",
    lien: "https://dorar.net/hadith/sharh/61335",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 5185,
    texte:
      "إنَّ المرأةَ خُلِقَتْ من ضِلَعٍ ، فإن أقمتَها كسرتَها ، فدارِها تعِشْ بها .",
    lien: "https://dorar.net/hadith/sharh/61112",
    autres: " البخاري (5185، 5186)، ومسلم (47، 1468)",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 5186,
    texte:
      "واسْتَوْصُوا بالنِّساءِ خَيْرًا؛ فإنَّهُنَّ خُلِقْنَ مِن ضِلَعٍ، وإنَّ أعْوَجَ شَيءٍ في الضِّلَعِ أعْلاهُ، فإنْ ذَهَبْتَ تُقِيمُهُ كَسَرْتَهُ، وإنْ تَرَكْتَهُ لَمْ يَزَلْ أعْوَجَ، فاسْتَوْصُوا بالنِّساءِ خَيْرًا.",
    lien: "https://dorar.net/hadith/sharh/151208",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 4425,
    texte: "لن يُفْلِحَ قومٌ ولَّوْا أمرَهَمُ امرأَةً",
    lien: "https://dorar.net/hadith/sharh/68355",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 3377,
    texte: "لا يضربُ أحدُكم امرأتَه ضربَ الأمةِ ثم يضاجعُها",
    lien: "https://dorar.net/hadith/sharh/138072",
    autres: "",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 5237,
    texte: "قدْ أذِنَ اللَّهُ لَكُنَّ أنْ تَخْرُجْنَ لِحَوائِجِكُنَّ.",
    lien: "https://dorar.net/hadith/sharh/25946",
    autres: "",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 4942,
    texte:
      "يَعْمِدُ أحَدُكُمْ، فَيَجْلِدُ امْرَأَتَهُ جَلْدَ العَبْدِ، فَلَعَلَّهُ يُضَاجِعُهَا مِن آخِرِ يَومِهِ. ثُمَّ وعَظَهُمْ في ضَحِكِهِمْ مِنَ الضَّرْطَةِ",
    lien: "https://dorar.net/hadith/sharh/207882",
    autres: "",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 3411,
    texte:
      "كَمَلَ مِنَ الرِّجَالِ كَثِيرٌ، وَلَمْ يَكْمُلْ مِنَ النِّسَاءِ: إِلَّا آسِيَةُ امْرَأَةُ فِرْعَوْنَ، وَمَرْيَمُ بنْتُ عِمْرَانَ، وإنَّ فَضْلَ عَائِشَةَ علَى النِّسَاءِ كَفَضْلِ الثَّرِيدِ علَى سَائِرِ الطَّعَامِ.",
    lien: "https://dorar.net/hadith/sharh/20906",
    autres: "",
  },
  {
    auteur: "أبو داود (2140)",
    numero: 2141,
    texte:
      "لو كنتُ آمِرًا أحدًا أن يسجدَ لأحدٍ، لأمرتُ المرأةَ أن تسجدَ لزوجِها",
    lien: "https://dorar.net/hadith/sharh/79090",
    autres: "Sunan al-Tirmidhi (1159),  Sunan Ibn Majah (1853)",
  },
];

