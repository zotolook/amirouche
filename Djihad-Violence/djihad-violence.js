// 1- Le djihad offensif -->
const souratesDjihadOffensif = [2,  2,   2,   3,   3,   3,   4, 4,   4, 4,4,   4, 4,  4,   4,   4,   5, 8, 8, 8,    9, 9, 9,   9,  9,   9, 9,9,   9,  9,  9,  9,  9,   9, 9,   9, 9,   9, 9,  9,  9,  9, 9, 9,    9,  9,   9,   22, 29, 47, 47,49, 61, 61, 61, 66,];
const versetsDjihadOffensif = [190, 191, 216, 146, 155, 156, 71, 72, 73,74,77, 89, 91, 95, 102, 104, 33, 14,39, 44, 5, 12, 14, 25, 26, 29, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49,73, 74, 81, 82, 83, 88, 93, 111, 123, 78, 69, 4,  35, 15, 4, 10, 11,  9,];
const ahadithsDjihadOffensif = [
  {
    sujet: "",
    auteur: "El Boukhari صحيح البخاري",
    numero: 123,
    texteArabe:
      "مَن قَاتَلَ لِتَكُونَ كَلِمَةُ اللَّهِ هي العُلْيَا، فَهو في سَبيلِ اللَّهِ عزَّ وجلَّ. ",
    texteFrancais: "",
    lien: "https://dorar.net/hadith/sharh/8229",
    autres: "",
  },
  {
    sujet: "",
    auteur: "El Boukhari صحيح البخاري",
    numero: 428,
    texteArabe:
      "يا بَنِي النَّجَّارِ ثامِنُونِي بحائِطِكُمْ، قالوا: لا نَطْلُبُ ثَمَنَهُ، إلَّا إلى اللَّهِ. ",
    texteFrancais: "",
    lien: "https://dorar.net/hadith/sharh/15455",
    autres: "",
  },
  {
    sujet: "",
    auteur: "El Boukhari صحيح البخاري",
    numero: 3995,
    texteArabe: " هذا جِبْرِيلُ آخِذٌ برَأْسِ فَرَسِهِ عليه أدَاةُ الحَرْبِ.",
    texteFrancais: "",
    lien: "https://dorar.net/hadith/sharh/11475",
    autres: 4041,
  },
  {
    sujet: "",
    auteur: "El Boukhari صحيح البخاري",
    numero: 2541,
    texteArabe:
      " إنَّ النَّبيَّ صلَّى اللهُ عليه وسلَّمَ أغَارَ علَى بَنِي المُصْطَلِقِ وهُمْ غَارُّونَ، وأَنْعَامُهُمْ تُسْقَى علَى المَاءِ، فَقَتَلَ مُقَاتِلَتَهُمْ، وسَبَى ذَرَارِيَّهُمْ، وأَصَابَ يَومَئذٍ جُوَيْرِيَةَ.",
    texteFrancais: "",
    lien: "https://dorar.net/hadith/sharh/7139",
    autres: 3804,
  },
  {
    sujet: "",
    auteur: "El Boukhari صحيح البخاري",
    numero: 2926,
    texteArabe:
      " لا تَقُومُ السَّاعَةُ حتَّى تُقاتِلُوا اليَهُودَ، حتَّى يَقُولَ الحَجَرُ وراءَهُ اليَهُودِيُّ: يا مُسْلِمُ، هذا يَهُودِيٌّ وَرائي فاقْتُلْهُ.",
    texteFrancais: "",
    lien: "https://dorar.net/hadith/sharh/15003",
    autres: 3593,
  },
  {
    sujet: "",
    auteur: "El Boukhari صحيح البخاري",
    numero: 4032,
    texteArabe:
      " حرَّقَ رسولُ اللَّهِ صلَّى اللَّهُ علَيهِ وسلَّمَ نخلَ بَني النَّضيرِ وقطَّعَ، وَهيَ البوَيْرةُ، فأنزلَ اللَّهُ مَا قَطَعْتُمْ مِنْ لِينَةٍ أَوْ تَرَكْتُمُوهَا قَائِمَةً عَلَى أُصُولِهَا فَبِإِذْنِ اللَّهِ وَلِيُخْزِيَ الْفَاسِقِينَ",
    texteFrancais: "",
    lien: "https://dorar.net/hadith/sharh/5268",
    autres: 4028,
  },
  {
    sujet: "",
    auteur: "El Boukhari صحيح البخاري",
    numero: 2664,
    texteArabe:
      "  أنَّ النبيَّ صَلَّى اللهُ عليه وسلَّمَ: عَرَضَهُ يَومَ أُحُدٍ وهو ابنُ أرْبَعَ عَشْرَةَ سَنَةً، فَلَمْ يُجِزْهُ، وعَرَضَهُ يَومَ الخَنْدَقِ، وهو ابنُ خَمْسَ عَشْرَةَ سَنَةً، فأجَازَهُ.",
    texteFrancais: "",
    lien: "https://dorar.net/hadith/sharh/25633",
    autres: 4097,
  },
  {
    sujet: "",
    auteur: "El Boukhari صحيح البخاري",
    numero: 2813,
    texteArabe:
      "لَمَّا رَجَعَ النبيُّ صَلَّى اللهُ عليه وسلَّمَ مِنَ الخَنْدَقِ، ووَضَعَ السِّلَاحَ واغْتَسَلَ، أتَاهُ جِبْرِيلُ عليه السَّلَامُ، فَقالَ: قدْ وضَعْتَ السِّلَاحَ؟ واللَّهِ ما وضَعْنَاهُ، فَاخْرُجْ إليهِم قالَ: فَإِلَى أيْنَ؟ قالَ: هَا هُنَا، وأَشَارَ إلى بَنِي قُرَيْظَةَ، فَخَرَجَ النبيُّ صَلَّى اللهُ عليه وسلَّمَ إليهِم ",
    texteFrancais: "",
    lien: "https://dorar.net/hadith/sharh/21196",
    autres: 4117,
  },
  {
    sujet: "",
    auteur: "El Boukhari صحيح البخاري",
    numero: 4123,
    texteArabe:
      "قَالَ رَسولُ اللَّهِ صلَّى اللهُ عليه وسلَّمَ يَومَ قُرَيْظَةَ لِحَسَّانَ بنِ ثَابِتٍ: اهْجُ المُشْرِكِينَ؛ فإنَّ جِبْرِيلَ معكَ. ",
    texteFrancais: "",
    lien: "https://dorar.net/hadith/sharh/14401",
    autres: "",
  },
  {
    sujet: "",
    auteur: "El Boukhari صحيح البخاري",
    numero: 4197,
    texteArabe:
      " أنَّ رَسولَ اللَّهِ صَلَّى اللهُ عليه وسلَّمَ أتَى خَيْبَرَ لَيْلًا، وكانَ إذا أتَى قَوْمًا بلَيْلٍ لَمْ يُغِرْ بهِمْ حتَّى يُصْبِحَ، فَلَمَّا أصْبَحَ خَرَجَتِ اليَهُودُ بمَساحِيهِمْ، ومَكاتِلِهِمْ فَلَمَّا رَأَوْهُ قالوا: مُحَمَّدٌ واللَّهِ، مُحَمَّدٌ والخَمِيسُ، فقالَ النبيُّ صَلَّى اللهُ عليه وسلَّمَ: خَرِبَتْ خَيْبَرُ، إنَّا إذا نَزَلْنا بساحَةِ قَوْمٍ {فَساءَ صَباحُ المُنْذَرِينَ} [الصافات: 177]",
    texteFrancais: "",
    lien: "https://dorar.net/hadith/sharh/24120",
    autres: "371, 4200, 4201, 4211, 4213",
  },
  {
    sujet: "",
    auteur: "El Boukhari صحيح البخاري",
    numero: 3949,
    texteArabe:
      " كنتُ إلى جنبِ زيدِ بنِ أرقمَ فقيلَ لهُ : كم غزا النَّبيُّ صلَّى اللَّهُ عليهِ وسلَّمَ من غزوةٍ قالَ : تسعَ عشرةَ فقلتُ : كم غزوتَ أنتَ معهُ ؟قالَ : سبعَ عشرةَ ، قلتُ : وأيَّتُهنَّ كانَ أوَّلَ ؟ قالَ : ذاتُ العُشَيراءِ – أو العُسَيراءِ -",
    texteFrancais: "",
    lien: "https://dorar.net/hadith/sharh/12021",
    autres: 4471,
  },
  {
    sujet: "",
    auteur: "El Boukhari صحيح البخاري",
    numero: 4592,
    texteArabe:
      "لَا يَسْتَوِي الْقَاعِدُونَ مِنَ الْمُؤْمِنِينَ} {وَالْمُجَاهِدُونَ فِي سَبِيلِ اللَّهِ} [النساء: 95] ",
    texteFrancais: "",
    lien: "https://dorar.net/hadith/sharh/3173",
    autres: 4990,
  },
  {
    sujet: "",
    auteur: "El Boukhari صحيح البخاري",
    numero: 25,
    texteArabe:
      " أُمِرْتُ أنْ أُقَاتِلَ النَّاسَ حتَّى يَشْهَدُوا أنْ لا إلَهَ إلَّا اللَّهُ، وأنَّ مُحَمَّدًا رَسولُ اللَّهِ، ويُقِيمُوا الصَّلَاةَ، ويُؤْتُوا الزَّكَاةَ، فَإِذَا فَعَلُوا ذلكَ عَصَمُوا مِنِّي دِمَاءَهُمْ وأَمْوَالَهُمْ إلَّا بحَقِّ الإسْلَامِ، وحِسَابُهُمْ علَى اللَّهِ.",
    verset: "s9v5",
    texteFrancais: "",
    lien: "https://dorar.net/hadith/sharh/68099",
    autres: 1399,
  },
  {
    sujet: "",
    auteur: "El Boukhari صحيح البخاري",
    numero: 26,
    texteArabe: "أفضَلُ الأعمالِ الإيمانُ باللهِ وَحدَه ، ثمَّ الجهادُ... ",
    texteFrancais: "",
    lien: "https://dorar.net/hadith/sharh/141857",
    autres: 1519,
  },
  {
    sujet: "",
    auteur: "صحيح البخاري",
    numero: 3995,
    texteArabe: " هذا جبريلُ آخِذٌ برأْسِ فرَسِهِ ، عليه أداةُ الحرْبِ ",
    texteFrancais: "",
    lien: "https://dorar.net/hadith/sharh/68773",
    autres: "الطبراني (11/ 342) (11952)، والبيهقي في ((دلائل النبوة)) (3/ 54)",
  },
];

// 2- Mourir en martyr -->
const souratesMourirEnMartyr = [2,  3,   3,   3,   3,   3,   3,   3,    3, 3,  3,   4,  4,   9, 47,47,47,];
const versetsMourirEnMartyr = [154, 140, 141, 142, 143, 147, 148, 157, 169,170,171, 74, 77,  111, 4,5,6,];
const ahadithsMourirEnMartyr = [
  {
    sujet: "",
    auteur: " صحيح الترمذي",
    numero: 1663,
    texteArabe: "للشهيدِ عندَ اللهِ ستُّ خصالٍ ...",
    texteFrancais: "",
    lien: "https://dorar.net/hadith/sharh/35616",
    autres: " ابن ماجه (2799)، وأحمد (17182)",
  },
  {
    sujet: "",
    auteur: "صحيح البخاري",
    numero: 2817,
    texteArabe:
      " ما مِن أحَدٍ يَدخُلُ الجَنَّةَ يُحِبُّ أن يَرجِعَ إلى الدُّنيا، وأنَّ له ما على الأرضِ مِن شيءٍ، غَيرُ الشَّهيدِ",
    texteFrancais: "",
    lien: "https://dorar.net/hadith/sharh/3054",
    autres: "مسلم (1877)",
  },
  {
    sujet: "",
    auteur: "صحيح البخاري",
    numero: 2829,
    texteArabe:
      "الشُّهداءُ خمسةٌ : المطعونُ والمبطونُ والغرِقُ وصاحبُ الهدمِ والشَّهيدُ في سبيلِ اللهِ ",
    texteFrancais: "",
    lien: "https://dorar.net/hadith/sharh/6985",
    autres: "مسلم (1914)",
  },
  {
    sujet: "",
    auteur: "ابن حبان",
    numero: 186,
    texteArabe: "سيِّدُ الشُّهداءِ حمزةُ بنُ عبدِ المطَّلبِ  ...",
    texteFrancais: "",
    lien: "https://dorar.net/hadith/sharh/112385",
    autres: "الحاكم (4884)، والديلمي في ((الفردوس)) (3472)",
  },
  {
    sujet: "",
    auteur: "صحيح أبي داود ",
    numero: 1520,
    texteArabe:
      "من سألَ اللَّهَ الشَّهادةَ صادقًا بلَّغَه اللَّهُ منازلَ الشُّهداءِ وإن ماتَ علَى فراشِه",
    texteFrancais: "",
    lien: "https://dorar.net/hadith/sharh/36993",
    autres: "مسلم (1909)",
  },
  {
    sujet: "",
    auteur: "صحيح مسلم",
    numero: 1886,
    texteArabe:
      "أولُ ما يُهراقُ مِنْ دمِ الشهيدِ ، يُغفَرُ له ذنبُهُ كلُّهُ إلَّا الدَّيْنَ",
    texteFrancais: "",
    lien: "https://dorar.net/hadith/sharh/131405",
    autres:
      "الطبراني (6/73) (5552) واللفظ له، والحاكم (2555)، والبيهقي (18992)",
  },
  {
    sujet: "",
    auteur: "صحيح البخاري",
    numero: 237,
    texteArabe:
      "ما مِن مَكلومٍ يُكلَمُ في سَبيلِ اللهِ إلَّا جاءَ يَومَ القيامةِ وكَلْمُه يَدمَى، اللَّونُ لَونُ دَمٍ، والرِّيحُ ريحُ مِسكٍ. ",
    texteFrancais: "",
    lien: "https://dorar.net/hadith/sharh/14597",
    autres: "مسلم (1876)",
  },
  {
    sujet: "",
    auteur: "صحيح البخاري",
    numero: 2797,
    texteArabe:
      " والَّذي نَفسِي بيدِهِ ، لولا أنَّ رِجالًا مِن المؤمنينَ لا تَطيبُ أنفسُهُم أن يتخلَّفُوا عنِّي ...",
    texteFrancais: "",
    lien: "https://dorar.net/hadith/sharh/14597",
    autres: " صحيح ابن حبان(4737)",
  },
  {
    sujet: "",
    auteur: "صحيح الجامع",
    numero: 912,
    texteArabe:
      "أرواحُ المؤمِنينَ في أجوافِ طيْرٍ خُضْرٍ تُعلَّقُ في أشْجارِ الجنةِ ، حتى يَرُدَّها اللهُ إلى أجْسادِها يومَ القيامةِ ",
    texteFrancais: "",
    lien: "https://dorar.net/hadith/sharh/146528",
    autres: " الطبراني (19/65) (122)، وأبو نعيم في ((معرفة الصحابة)) (8037) ",
  },
];

// 3- La violence conjugale -->
const souratesViolenceConjugale = [4,4,4,];
const versetsViolenceConjugale = [34,35,128];
const ahadithsViolenceConjugale = [
  {
    sujet: "",
    auteur: "El Boukhari صحيح البخاري",
    numero: 3377,
    texteArabe: "  لا يضربُ أحدُكم امرأتَه ضربَ الأمةِ ثم يضاجعُها",
    texteFrancais: "",
    lien: "https://dorar.net/hadith/sharh/138072",
    autres: 5204,
  },
  {
    sujet: "",
    auteur: " صحيح مسلم ",
    numero: 3377,
    texteArabe: " فلَهَدَني في صَدْري لَهْدَةً أوجَعَتْني ",
    texteFrancais: "",
    lien: "https://dorar.net/hadith/sharh/12880",
    autres: "أحمد (25855) واللفظ له، والنسائي (2037)، وعبد الرزاق (6712)",
  },
  {
    sujet: "",
    auteur: "  صحيح الأدب المفرد ",
    numero: 933,
    texteArabe:
      " عَلِّقُوا السَّوْطَ حيثُ يَرَاهُ أهلُ البيتِ , فإنه أَدَبٌ لهم ",
    texteFrancais: "",
    lien: "https://dorar.net/hadith/sharh/110399",
    autres:
      "الطبراني (10/344) (10671)، وابن عدي في ((الكامل في الضعفاء)) (3/90)، والخطيب في ((تاريخ بغداد)) (12/203) البخاري في ((الأدب المفرد)) (1229)، وابن أبي الدنيا في ((النفقة على العيال)) (322) واللفظ لهما، وعبد الرزاق (17963)",
  },
  {
    sujet: "",
    auteur: "  صحيح أبي داود ",
    numero: 2146,
    texteArabe: "لا تضرِبوا إماءَ اللَّهِ ... ",
    texteFrancais: "",
    lien: "https://dorar.net/hadith/sharh/73127",
    autres: " النسائي في ((السنن الكبرى)) (9167) ابن ماجه (1985)",
  },
  {
    sujet: "",
    auteur: "  صحيح أبي داود ",
    numero: 1905,
    texteArabe:
      " اتَّقوا اللهَ في النساءِ؛ فإنَّكم أخذتُموهنَّ بأمانةِ الله ... ",
    texteFrancais: "",
    lien: "https://dorar.net/hadith/sharh/91552",
    autres: " النسائي في ((الكبرى)) (9135)، وابن خزيمة (2809) ",
  },
];

// 4- La violence contre les enfants -->
const souratesViolenceEnfants = [18,18,18,37, ];
const versetsViolenceEnfants = [74,80,81,102, ];
const ahadithsViolenceEnfants = [
  {
    sujet: "",
    auteur: "  صحيح الأدب المفرد ",
    numero: 933,
    texteArabe:
      " عَلِّقُوا السَّوْطَ حيثُ يَرَاهُ أهلُ البيتِ , فإنه أَدَبٌ لهم ",
    texteFrancais: "",
    lien: "https://dorar.net/hadith/sharh/110399",
    autres:
      "الطبراني (10/344) (10671)، وابن عدي في ((الكامل في الضعفاء)) (3/90)، والخطيب في ((تاريخ بغداد)) (12/203) البخاري في ((الأدب المفرد)) (1229)، وابن أبي الدنيا في ((النفقة على العيال)) (322) واللفظ لهما، وعبد الرزاق (17963)",
  },

  {
    sujet: "",
    auteur: "  صحيح أبي داود ",
    numero: 495,
    texteArabe:
      "مُرُوا أولادَكُم بالصلاةِ وهُم أبناءُ سبعِ سنينَ ، واضرِبُوهُم عليهَا وهُمْ أبْنَاءُ عَشْرٍ وفرِّقُوا بينِهِم في المَضَاجِعِ ",
    texteFrancais: "",
    lien: "https://dorar.net/hadith/sharh/66400",
    autres: "أحمد (6689)",
  },
];

// 5- Exécution des apostats-- >
const souratesExecutionApostats = [2,2,2,      3,3,3,3,3,       4,   5,  16,  47,47,47,];
const versetsExecutionApostats = [217,109,217, 86,87,88,89,90,  137, 54, 106, 25,26,27,];
const ahadithsExecutionApostats = [
  {
    sujet: "",
    auteur: "El Boukhari صحيح البخاري",
    numero: 3017,
    texteArabe: "مَن بدَّلَ دينَه فاقتُلوهُ",
    texteFrancais: "",
    lien: "https://dorar.net/hadith/sharh/5702",
    autres: "صحيح ابن ماجه | الصفحة أو الرقم : 2070",
  },
  {
    sujet: "",
    auteur: "El Boukhari صحيح البخاري",
    numero: 6878,
    texteArabe:
      "لا يحِلُّ دمُ امرءٍ مسلمٍ إلَّا بإحدَى ثلاثٍ , الزِّنَى , والنَّفسُ بالنَّفسِ , والتَّاركُ لدينِه المفارقُ للجماعةِ",
    texteFrancais: "",
    lien: "https://dorar.net/hadith/sharh/73887",
    autres: "مسلم (1676)",
  },
  {
    sujet: "",
    auteur: "El Boukhari صحيح البخاري",
    numero: 6922,
    texteArabe: "أُتيَ عَليٌّ رَضيَ اللهُ عنه بزَنادِقةٍ فأحرَقَهم ... ",
    texteFrancais: "",
    lien: "https://dorar.net/hadith/sharh/5704",
    autres: "من أفراد البخاري على مسلم",
  },
  {
    sujet: "",
    auteur: "El Boukhari صحيح البخاري",
    numero: 1399,
    texteArabe:
      "واللَّهِ لَأُقَاتِلَنَّ مَن فَرَّقَ بيْنَ الصَّلَاةِ والزَّكَاةِ ",
    texteFrancais: "",
    lien: "https://dorar.net/hadith/sharh/67078",
    autres:
      "البخاري (7284، 7285)، ومسلم (20)، وأبو داود (1556)، والترمذي (2607) واللفظ له، والنسائي (3970)، وأحمد (117)",
  },
  {
    sujet: "",
    auteur: "El Boukhari صحيح البخاري",
    numero: 4351,
    texteArabe: "« إني لم أومر أن أنقب عن قلوب الناس ولا أشق بطونهم » ",
    texteFrancais: "",
    lien: "https://dorar.net/hadith/sharh/984",
    autres: "مسلم (1064).",
  },
  {
    sujet: "",
    auteur: "صحيح النسائي",
    numero: 4079,
    texteArabe:
      "انَ رجلٌ منَ الأنصارِ أسلمَ ثمَّ ارتدَّ ولحقَ بالشِّرْكِ ثمَّ تندَّمَ ",
    texteFrancais: "",
    lien: "https://dorar.net/hadith/sharh/85639",
    autres: "أحمد (2218) بنحوه، والطبري في ((التفسير)) (7360)",
  },
  {
    sujet: "",
    auteur: "صحيح أبي داود",
    numero: 4359,
    texteArabe: " أما كان فيكم رجلٌ رشيدٌ ... عبدُ اللهِ بنُ أبي السَّرحِ",
    texteFrancais: "",
    lien: "https://dorar.net/hadith/sharh/30712",
    autres:
      " https://tafsir.app/tabari/6/92?utm_source=chatgpt.com النسائي (4067)، والحاكم (4360)",
    Tabari: "https://tafsir.app/tabari/6/92?utm_source=chatgpt.com",
  },
  {
    sujet: "",
    auteur: "El Boukhari صحيح البخاري",
    numero: 3518,
    texteArabe:
      "دَعْه، لا يَتَحَدَّثُ النَّاسُ أنَّ مُحَمَّدًا يَقتُلُ أصحابَه. ",
    texteFrancais: "",
    lien: "https://dorar.net/hadith/sharh/21796",
    autres: "مسلم (2584).",
  },
];

// 6- Couper la main du voleur -->
const souratesCouperMainVoleurs = [5, ];
const versetsCouperMainVoleurs = [38, ];
const ahadithsCouperMainVoleurs = [
  {
    sujet: "",
    auteur: "El Boukhari صحيح البخاري",
    numero: 4304,
    texteArabe:
      " والذي نفسُ محمدٍ بيدِه لو أن فاطمةَ بنتَ محمدٍ سَرَقَتْ لقَطَعَتُ يدَها. ",
    texteFrancais: "",
    lien: "https://dorar.net/hadith/sharh/2028",
  },
  {
    sujet: "",
    auteur: "El Boukhari صحيح البخاري",
    numero: 2648,
    texteArabe:
      "كانت امرأةٌ مخزوميَّةٌ تستعيرُ المتاعَ وتجحَدُه  فقطع النَّبيُّ صلَّى اللهُ عليه وسلَّم يدَها ...  ",
    texteFrancais: "",
    lien: "https://dorar.net/hadith/sharh/33105",
    autres:
      " مسلم (1688)، وأبو داود (4397) واللفظ له، والنسائي (4898)، وأحمد (25297) ",
  },
  {
    sujet: "",
    auteur: "El Boukhari صحيح البخاري",
    numero: 6795,
    texteArabe: "  أن النبيَّ صلى الله عليه وسلم قَطَعَ يدَ سارقٍ ",
    texteFrancais: "",
    lien: "https://dorar.net/hadith/sharh/30720",
    autres: "مسلم (1686)  أبو داود (4386)  النسائي (4909)",
  },
  {
    sujet: "",
    auteur: "El Boukhari صحيح البخاري",
    numero: 6789,
    texteArabe:
      " لَا تُقْطَعُ يَدُ السَّارِقِ إلَّا في رُبْعِ دِينَارٍ فَصَاعِدًا.",
    texteFrancais: "",
    lien: "https://dorar.net/hadith/sharh/4920",
    autres: "",
  },
  {
    sujet: "",
    auteur: "El Boukhari صحيح البخاري",
    numero: 4304,
    texteArabe:
      "والذي نَفْسُ مُحَمَّدٍ بيَدِهِ، لو أنَّ فاطِمَةَ بنْتَ مُحَمَّدٍ سَرَقَتْ، لَقَطَعْتُ يَدَها. ثُمَّ أمَرَ رَسولُ اللَّهِ صلَّى اللهُ عليه وسلَّمَ بتِلْكَ المَرْأَةِ، فَقُطِعَتْ يَدُها، فَحَسُنَتْ تَوْبَتُها بَعْدَ ذلكَ وتَزَوَّجَتْ. قالَتْ عائِشَةُ: فَكانَتْ تَأْتي بَعْدَ ذلكَ فأرْفَعُ حاجَتَها إلى رَسولِ اللَّهِ صلَّى اللهُ عليه وسلَّمَ. ",
    texteFrancais: "",
    lien: "https://dorar.net/hadith/sharh/82722",
    autres: "",
  },
  {
    sujet: "",
    auteur: "El Boukhari صحيح البخاري",
    numero: 5357,
    texteArabe: " كان يبيعُ نخلَ بني النضيرِ ، ويحبِسُ لأهْلِهِ قوتَ سنتِهم",
    texteFrancais: "",
    lien: "https://dorar.net/hadith/sharh/24736",
    autres: "",
  },
  {
    sujet: "",
    auteur: "El Boukhari صحيح البخاري",
    numero: 6783,
    texteArabe:
      " لعن اللهُ السارقَ يسرقُ البيضةَ فتُقطَعُ يدُه ويسرقُ الحبلَ فتُقطَعُ يدُه ",
    texteFrancais: "",
    lien: "https://dorar.net/hadith/sharh/12804",
    autres: "مسلم (1687)",
  },
  {
    sujet: "",
    auteur: " أبو داود ",
    numero: 4410,
    texteArabe:
      "  جيءَ بِسارقٍ إلى النَّبيِّ صلَّى اللَّهُ عليهِ وسلَّمَ فَقالَ : اقتُلوهُ ",
    texteFrancais: "",
    lien: "https://dorar.net/h/INaGhEMw?osoul=1",
    autres: " النسائي (4978) ",
  },
  {
    sujet: "",
    auteur: "  إرواء الغليل",
    numero: 2425,
    texteArabe: " لا يُقطعُ السارقُ حتى يشهدَ على نفسه مرتينِ ",
    texteFrancais: "",
    lien: "https://dorar.net/h/ka92o90C?osoul=1",
    autres:
      " أخرجه البيهقي في ((معرفة السنن والآثار)) (17223) بنحوه، وعبد الرزاق (18783)، والطحاوي في ((معاني الآثار)) (4980) ",
  },
  {
    sujet: "",
    auteur: "El Boukhari صحيح البخاري",
    numero: 6794,
    texteArabe:
      "  أن رسولَ اللهِ صلى الله عليه وسلم قَطَعَ في مَجِنٍّ ثمنُه ثلاثةُ دراهمَ. ",
    texteFrancais: "",
    lien: "https://dorar.net/hadith/sharh/15677",

    autres: "  النسائي (4908)  مسلم (1685)",
  },
  {
    sujet: "",
    auteur: "صحيح أبي داود",
    numero: 4394,
    texteArabe: "  فهلَّا كان هذا قبل أن تأتيَني به ",
    texteFrancais: "",
    lien: "https://dorar.net/hadith/sharh/72363",
    autres: " ابن ماجه (2595) النسائي (4883) ",
  },
  {
    sujet: "",
    auteur: " الترمذي",
    numero: 1450,
    texteArabe: " لا تُقطَعُ الأيدي في الغَزوِ. ",
    texteFrancais: "",
    lien: "https://dorar.net/h/3G96HTOC",
    autres: "  النسائي (4979) ",
  },
  {
    sujet: "",
    auteur: " صحيح أبي داود ",
    numero: 4408,
    texteArabe: "  لا تُقطَعُ الأيدي في السَّفَرِ",
    texteFrancais: "",
    lien: "https://dorar.net/hadith/sharh/30811",
    autres: "  النسائي (4979) الترمذي (1450)، وأحمد (17626)",
  },
  {
    auteur: " صحيح أبي داود ",
    numero: 4388,
    texte: " لا قَطْعَ في ثَمَرٍ ولا كَثَرٍ ",
    lien: "https://dorar.net/hadith/sharh/30728",
    autres:
      " الترمذي (1449)، والنسائي (4960)، وابن ماجه (2593)، وأحمد (15804) ",
  },
  {
    sujet: "",
    auteur: " البدر المنير",
    numero: 8 / 679,
    texteArabe: " عن عمرَ رضيَ اللهُ عنهُ أنَّه لا قطْعَ في عامِ المجاعةِ ",
    texteFrancais: "",
    lien: "https://dorar.net/h/1Qj8cRvg",
    autres:
      "  تاريخ أصبهان (1/162)   ضعف الحديث الألباني في السلسلة الضعيفة (1673)",
  },
];

// 7- Fouettement des fornicateurs et alccol -->

const souratesFouettementFornicateurs = [4, 24,24,24,24,24,];
const versetsFouettementFornicateurs = [25, 2,3,4,13,14,];
const ahadithsFouettementFornicateurs = [
  {
    sujet: "",
    auteur: "El Boukhari صحيح البخاري",
    numero: 6779,
    texteArabe:
      "أنَّ نَبِيَّ اللهِ صَلَّى اللَّهُ عليه وسلَّمَ جَلَدَ في الخَمْرِ بالجَرِيدِ، وَالنِّعَالِ",
    texteFrancais: "",
    lien: "https://dorar.net/hadith/sharh/11200",
    autres: "أبو داود (4479)، والترمذي (1443)",
  },
  {
    sujet: "",
    auteur: "El Boukhari صحيح البخاري",
    numero: 2234,
    texteArabe:
      " إذا زَنَت أمةُ أحَدِكُم، فتَبَيَّنَ زِناها، فليَجلِدْها الحَدَّ ...",
    texteFrancais: "",
    lien: "https://dorar.net/hadith/sharh/15817",
    autres: " مسلم (1703)",
  },

  {
    sujet: "",
    auteur: "صحيح أبي داود",
    numero: 4413,
    texteArabe:
      " وَاللَّاتِي يَأْتِينَ الْفَاحِشَةَ مِنْ نِسَائِكُمْ فَاسْتَشْهِدُوا عَلَيْهِنَّ أَرْبَعَةً مِنْكُمْ ...",
    texteFrancais: "",
    lien: "https://dorar.net/hadith/sharh/126384",
    autres: " البيهقي (17357)",
  },
  {
    sujet: "",
    auteur: " الترمذي ",
    numero: 1438,
    texteArabe:
      "أنَّ النَّبيَّ صلَّى اللَّهُ عليهِ وسلَّمَ ضربَ وغرَّب ، وأنَّ أبا بَكرٍ ضربَ وغرَّبَ ، وأنَّ عُمَرَ ضربَ وغرَّبَ ",
    texteFrancais: "",
    lien: "https://dorar.net/hadith/sharh/110828",
    autres: " النسائي في ((السنن الكبرى)) (7342)، والحاكم (8105)",
  },

  {
    sujet:"",
    auteur: "El Boukhari صحيح البخاري",
    numero: 6777,
    texteArabe:
      " أنَّ النبيَّ صَلَّى اللهُ عليه وسلَّمَ ضَرَبَ في الخَمْرِ بالجَرِيدِ والنِّعالِ، وجَلَدَ أبو بَكْرٍ أرْبَعِينَ.",
     texteFrancais:"",
    lien: "https://dorar.net/hadith/sharh/11762",
    autres:"",
  },
];

// 8- Lapidation des adultères -->

const souratesLapidationAdulteres = [4,24,24,24,24,115];
const versetsLapidationAdulteres = [25,6,7,8,9,1];
const ahadithsLapidationAdulteres = [
  {
    sujet: "",
    auteur: "El Boukhari صحيح البخاري",
    numero: 6812,
    texteArabe:
      " عَنْ عَلِيٍّ رَضِيَ اللَّهُ عنْه حِينَ رَجَمَ المَرْأَةَ يَومَ الجُمُعَةِ، وقالَ: قدْ رَجَمْتُهَا بسُنَّةِ رَسولِ اللَّهِ صَلَّى اللهُ عليه وسلَّمَ.",
    texteFrancais: "",
    lien: "https://dorar.net/hadith/sharh/67065",
    autres: "",
  },
  {
    sujet: "",
    auteur: "El Boukhari صحيح البخاري",
    numero: 6841,
    texteArabe:
      " أنَّ اليَهودَ جاؤوا إلى النَّبيِّ صلَّى اللهُ عليه وسلَّم برَجُلٍ منهم وامرَأةٍ قد زَنَيا ...  فأمَرَ بهِما فرُجِما",
    texteFrancais: "",
    lien: "https://dorar.net/hadith/sharh/11200",
    autres: "أبو داود (4479)، والترمذي (1443)",
  },
  {
    sujet: "",
    auteur: "El Boukhari صحيح البخاري",
    numero: 6840,
    texteArabe:
      " رَجَمَ النبيُّ صَلَّى اللهُ عليه وسلَّمَ فَقُلتُ: أقَبْلَ النُّورِ أمْ بَعْدَهُ؟ قالَ: لا أدْرِي.",
    texteFrancais: "",
    lien: "https://dorar.net/hadith/sharh/11551",
    autres: "",
  },
  {
    sujet: "",
    auteur: "El Boukhari صحيح البخاري",
    numero: 6830,
    texteArabe:
      " فَكانَ فيما أُنزِلَ عليهِ آيةُ الرَّجمِ، فقرأناها ووَعيناها، ورجمَ رسولُ اللَّهِ صلَّى اللَّهُ عليهِ وسلَّمَ، ورجمنا من بعدِهِ ... ",
    texteFrancais: "",
    lien: "https://dorar.net/hadith/sharh/36779",
    autres: " مسلم (1691) أبو داود (4418) أحمد (156)",
  },
  {
    sujet: "",
    auteur: "El Boukhari صحيح البخاري",
    numero: 6824,
    texteArabe:
      " « أَنَّ مَاعِزَ بْنَ مَالِكٍ أَتَى النَّبِيَّ ﷺ فَأَقَرَّ بِالزِّنَا… فَأَمَرَ بِهِ فَرُجِمَ ",
    texteFrancais: "",
    lien: "https://dorar.net/hadith/sharh/139921",
    autres: "  النسائي (7204)، وأحمد (9809)",
  },
  {
    sujet: "",
    auteur: "El Boukhari صحيح البخاري",
    numero: 5271,
    texteArabe: "  اذهَبوا به فارجُموه. وكان قد أُحصِنَ. ",
    texteFrancais: "",
    lien: "https://dorar.net/hadith/sharh/3878",
    autres: " مسلم (1691) ",
  },
  {
    sujet: "",
    auteur: " صحيح أبي داود ",
    numero: 4440,
    texteArabe:
      " « أَنَّ امْرَأَةً مِنْ جُهَيْنَةَ أَتَتِ النَّبِيَّ ﷺ وَهِيَ حُبْلَى مِنَ الزِّنَا… فَأَمَرَ بِهَا فَرُجِمَتْ ",
    texteFrancais: "",
    lien: "https://dorar.net/hadith/sharh/17250",
    autres:
      " مسلم (1696)، والنسائي (1957)، بلفظ مقارب، وابن ماجه (2555)، مختصرا. ",
  },
  {
    sujet: "",
    auteur: " صحيح مسل ",
    numero: 1690,
    texteArabe:
      " خُذُوا عَنِّي، خُذُوا عَنِّي، قَدْ جَعَلَ اللَّهُ لَهُنَّ سَبِيلًا،البِكْرُ بِالبِكْرِ جَلْدُ مِائَةٍ وَنَفْيُ سَنَةٍ،وَالثَّيِّبُ بِالثَّيِّبِ جَلْدُ مِائَةٍ وَالرَّجْمُ » ",
    texteFrancais: "",
    lien: "https://dorar.net/hadith/sharh/17294",
    autres:
      "  أحمد (22703)، والنسائي في ((الكبرى)) (7926)، وابن حبان (4443) باختلاف يسير. ",
  },
  {
    sujet: "",
    auteur: " صحيح البخاري ",
    numero: 3849,
    texteArabe:
      " رَأيتُ في الجاهِليَّةِ قِردةً اجتَمع عليها قِرَدةٌ، قد زَنَت، فرَجَموها، فرَجَمتُها معهُم. ",
    texteFrancais: "",
    lien: "https://dorar.net/hadith/sharh/150656",
    autres:
      "  ابن أبي خيثمة في ((التاريخ)) (6137)، والخرائطي في ((مساوئ الأخلاق)) (469)، وأبو نعيم الأصبهاني في ((معرفة الصحابة)) (5139) جميعهم باختلاف يسير. ",
  },
  {
    sujet: "",
    auteur: " صحيح البخاري ",
    numero: 6633,
    texteArabe:
      " ... أما والذي نَفسي بيَدِه، لَأقضيَنَّ بينَكُما بكِتابِ اللهِ،  ... ",
    texteFrancais: "",
    lien: "https://dorar.net/hadith/sharh/559",
    autres: " مسلم  1697  أبو داود (4445)، والترمذي (1433)",
  },
];

// 9- La violence contre les homosexuels -->
const souratesViolenceHomosexuels = [7,7, 11,11,11, 26,26, 27,27, 29,29, 21];
const versetsViolenceHomosexuels = [80,81, 77,78,79, 165,166, 54,55, 28,29, 74, ];
const ahadithsViolenceHomosexuels = [
  {
    sujet: "",
    auteur: "صحيح الجامع",
    numero: 5891,
    texteArabe: " لَعَنَ اللَّهُ مَنْ عَمِلَ عَمَلَ قَوْمِ لُوطٍ ...",
    texteFrancais: "",
    lien: "https://dorar.net/hadith/sharh/116214",
    autres: " أحمد (1875)  ابن حبان (4417)، والطبراني (11/218) (11546)",
  },
  {
    sujet: "",
    auteur: "  صحيح الترمذي ",
    numero: 1457,
    texteArabe: "  إنَّ أخوَفَ ما أخافُ على أمَّتي من عملِ قومِ لوطٍ",
    texteFrancais: "",
    lien: "https://dorar.net/hadith/sharh/72929",
    autres: " ابن ماجه (2563)، وأحمد (15093) ",
  },

  {
    sujet: "",
    auteur: " صحيح أبي داود",
    numero: 4462,
    texteArabe:
      " مَنْ وجدتُموهُ يعملُ عملَ قومِ لوطٍ ، فاقتلوا الفاعلَ والمفعولَ بهِ",
    texteFrancais: "",
    lien: "https://dorar.net/hadith/sharh/120445",
    autres: " الترمذي (1456)، وابن ماجه (2561)، وأحمد (2732) ",
  },
  {
    sujet: "",
    auteur: "  التعليقات الرضية",
    numero: 284,
    texteArabe:
      " ينظرُ أعلى بناءٍ في القريةِ ؛ فيرمى به مُنكََّسًا ، ثم يُتْبَعُ الحجارةَ .",
    texteFrancais: "",
    lien: "https://dorar.net/h/PNKHTUsX?sims=1",
    autres:
      " الراوي : [أبو نضرة المنذر بن مالك] | المحدث : ابن حجر العسقلاني | المصدر : الدراية تخريج أحاديث الهداية الصفحة أو الرقم : 2/103 ",
  },
];

// 10- Exécutions
const souratesDjihadViolencesExecutions = [2,2,    4,4,   5,5,  6, 17,  60];
const versetsDjihadViolencesExecutions = [178,179, 88,93, 33,45, 151,33, 1];
const ahadithsDjihadViolencesExecutions = [
  {
    sujet: "",
    auteur: "El Boukhari صحيح البخاري",
    numero: 5295,
    texteArabe:
      " أنَّ يَهُودِيًّا قَتَلَ جَارِيَةً علَى أوْضَاحٍ لَهَا، فَقَتَلَهَا بحَجَرٍ، فَجِيءَ بهَا إلى النبيِّ صَلَّى اللهُ عليه وسلَّمَ وبِهَا رَمَقٌ، فَقالَ: أقَتَلَكِ فُلَانٌ؟ فأشَارَتْ برَأْسِهَا: أنْ لَا، ثُمَّ قالَ الثَّانِيَةَ، فأشَارَتْ برَأْسِهَا: أنْ لَا، ثُمَّ سَأَلَهَا الثَّالِثَةَ، فأشَارَتْ برَأْسِهَا: أنْ نَعَمْ، فَقَتَلَهُ النبيُّ صَلَّى اللهُ عليه وسلَّمَ بحَجَرَيْنِ.",
    texteFrancais: "",
    lien: "https://dorar.net/hadith/sharh/8019",
    autres: "",
  },
  {
    sujet: "",
    auteur: "El Boukhari صحيح البخاري",
    numero: 1884,
    texteArabe:
      " رَجَعَ نَاسٌ مِن أصْحَابِ النبيِّ صَلَّى اللهُ عليه وسلَّمَ مِن أُحُدٍ، وكانَ النَّاسُ فيهم فِرْقَتَيْنِ: فَرِيقٌ يقولُ: اقْتُلْهُمْ، وفَرِيقٌ يقولُ: لَا، فَنَزَلَتْ: {فَما لَكُمْ في المُنَافِقِينَ فِئَتَيْنِ}",
    texteFrancais: "",
    lien: "https://dorar.net/hadith/sharh/6072",
    autres: 4589,
  },
  {
    sujet: "",
    auteur: "El Boukhari صحيح البخاري",
    numero: 4339,
    texteArabe:
      " اللَّهُمَّ إنِّي أبْرَأُ إلَيْكَ ممَّا صَنَعَ خَالِدُ بنُ الوَلِيدِ مَرَّتَيْنِ.",
    texteFrancais: "",
    lien: "https://dorar.net/hadith/sharh/24160",
    autres: "",
  },
  {
    sujet: "",
    auteur: "El Boukhari صحيح البخاري",
    numero: 4274,
    texteArabe:
      " فَقالَ عُمَرُ: يا رَسولَ اللَّهِ، دَعْنِي أضْرِبْ عُنُقَ هذا المُنَافِقِ، فَقالَ: إنَّه قدْ شَهِدَ بَدْرًا، وما يُدْرِيكَ لَعَلَّ اللَّهَ اطَّلَعَ علَى مَن شَهِدَ بَدْرًا، فَقالَ: اعْمَلُوا ما شِئْتُمْ؛ فقَدْ غَفَرْتُ لَكُمْ. فأنْزَلَ اللَّهُ السُّورَةَ: {يَاأَيُّهَا الَّذِينَ آمَنُوا لَا تَتَّخِذُوا عَدُوِّي وَعَدُوَّكُمْ أَوْلِيَاءَ تُلْقُونَ إِلَيْهِمْ بِالْمَوَدَّةِ وَقَدْ كَفَرُوا بِمَا جَاءَكُمْ مِنَ الْحَقِّ} إلى قَوْلِهِ: {فقَدْ ضَلَّ سَوَاءَ السَّبِيلِ} [الممتحنة: 1]",
    texteFrancais: "",
    lien: "https://dorar.net/hadith/sharh/117689",
    autres: 2494,
  },
  {
    sujet: "",
    auteur: "El Boukhari صحيح البخاري",
    numero: 4286,
    texteArabe:
      " عن أنسِ بنِ مالكٍ, أنَّ رسولَ اللهِ صلَّى اللهُ عليهِ وسلَّم دخل مكةَ عامَ الفتحِ, وعلى رأسِه المغفَرُ, فلما نزعَه, جاءَه رجلٌ فقال : ابنُ خطلٍ متعلِّقٌ بأستارِ الكعبةِ, فقال ( رسولُ اللهِ صلَّى اللهُ عليهِ وسلَّم ) اقتلوهُ",
    texteFrancais: "",
    lien: "https://dorar.net/hadith/sharh/79443",
    autres: "",
  },
  {
    sujet: "",
    auteur: "El Boukhari صحيح البخاري",
    numero: 4192,
    texteArabe:
      " ... فأمرَ بِهِم فقُطِعَت أيديهم وأرجلُهُم وسمرَ أعينُهُم ، وألقَوا في الحرَّةِ يستَسقونَ فلا يُسقونَ",
    texteFrancais: "",
    lien: "https://dorar.net/hadith/sharh/10926",
    autres: "",
  },
  {
    sujet: "",
    auteur: "El Boukhari صحيح البخاري",
    numero: 1501,
    texteArabe:
      " فَأُتِيَ بهِمْ، فَقَطَّعَ أيْدِيَهُمْ وأَرْجُلَهُمْ، وسَمَرَ أعْيُنَهُمْ، وتَرَكَهُمْ بالحَرَّةِ يَعَضُّونَ الحِجَارَةَ.",
    texteFrancais: "",
    lien: "https://dorar.net/hadith/sharh/33629",
    autres: "",
  },
  {
    sujet: "",
    auteur: "El Boukhari صحيح البخاري",
    numero: 4037,
    texteArabe:
      "مَن لِكَعْبِ بنِ الأشْرَفِ؛ فإنَّه قدْ آذَى اللَّهَ ورَسولَهُ؟ ",
    texteFrancais: "",
    lien: "https://dorar.net/hadith/sharh/4176",
    autres: 2510,
  },
  {
    sujet: "",
    auteur: "El Boukhari صحيح البخاري",
    numero: 2541,
    texteArabe:
      " إنَّ النَّبيَّ صلَّى اللهُ عليه وسلَّمَ أغَارَ علَى بَنِي المُصْطَلِقِ وهُمْ غَارُّونَ، وأَنْعَامُهُمْ تُسْقَى علَى المَاءِ، فَقَتَلَ مُقَاتِلَتَهُمْ، وسَبَى ذَرَارِيَّهُمْ، وأَصَابَ يَومَئذٍ جُوَيْرِيَةَ.",
    texteFrancais: "",
    lien: "https://dorar.net/hadith/sharh/7139",
    autres: 3804,
  },
  {
    sujet:"",
    auteur: "El Boukhari صحيح البخاري",
    numero: 2926,
    texteArabe:
      " لا تَقُومُ السَّاعَةُ حتَّى تُقاتِلُوا اليَهُودَ، حتَّى يَقُولَ الحَجَرُ وراءَهُ اليَهُودِيُّ: يا مُسْلِمُ، هذا يَهُودِيٌّ وَرائي فاقْتُلْهُ.",
    texteFrancais: "",
    lien: "https://dorar.net/hadith/sharh/15003",
    autres: 3593,
  },
  {
    sujet: "",
    auteur: "El Boukhari صحيح البخاري",
    numero: 4039,
    texteArabe:
      "  بَعَثَ رَسولُ اللَّهِ صَلَّى اللهُ عليه وسلَّمَ رَهْطًا مِنَ الأنْصَارِ إلى أبِي رَافِعٍ فَدَخَلَ عليه عبدُ اللَّهِ بنُ عَتِيكٍ بَيْتَهُ لَيْلًا فَقَتَلَهُ وهو نَائِمٌ.",
    texteFrancais: "",
    lien: "https://dorar.net/hadith/sharh/24040",
    autres: "",
  },
  {
    sujet: "",
    auteur: "El Boukhari صحيح البخاري",
    numero: 4050,
    texteArabe:
      " أنَّ النبيَّ صَلَّى اللَّهُ عليه وَسَلَّمَ خَرَجَ إلى أُحُدٍ، فَرَجَعَ نَاسٌ مِمَّنْ كانَ معهُ، فَكانَ أَصْحَابُ النبيِّ صَلَّى اللَّهُ عليه وَسَلَّمَ فيهم فِرْقَتَيْنِ، قالَ بَعْضُهُمْ: نَقْتُلُهُمْ، وَقالَ بَعْضُهُمْ: لَا، فَنَزَلَتْ {فَما لَكُمْ في المُنَافِقِينَ فِئَتَيْنِ} [النساء: 88].",
    texteFrancais: "",
    lien: "https://dorar.net/hadith/sharh/6074",
    autres: "",
  },
  {
    sujet: "",
    auteur: "El Boukhari صحيح البخاري",
    numero: 2813,
    texteArabe:
      "لَمَّا رَجَعَ النبيُّ صَلَّى اللهُ عليه وسلَّمَ مِنَ الخَنْدَقِ، ووَضَعَ السِّلَاحَ واغْتَسَلَ، أتَاهُ جِبْرِيلُ عليه السَّلَامُ، فَقالَ: قدْ وضَعْتَ السِّلَاحَ؟ واللَّهِ ما وضَعْنَاهُ، فَاخْرُجْ إليهِم قالَ: فَإِلَى أيْنَ؟ قالَ: هَا هُنَا، وأَشَارَ إلى بَنِي قُرَيْظَةَ، فَخَرَجَ النبيُّ صَلَّى اللهُ عليه وسلَّمَ إليهِم ",
    texteFrancais: "",
    lien: "https://dorar.net/hadith/sharh/21196",
    autres: 4117,
  },
  {
    sujet: "",
    auteur: "صحيح النسائي",
    numero: 4078,
    texteArabe: " اقتُلوهم وإن وجَدتُموهم متَعلِّقينَ بأَستارِ الكَعبةِ ",
    texteFrancais: "",
    lien: "https://dorar.net/hadith/sharh/138269",
    autres: "أبو داود (2683)",
  },
];
