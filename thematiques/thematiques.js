let pTitreThematique = document.createElement("p")
pTitreThematique.setAttribute('class', 'pTitreThematique')



// 2- Islam religion unique
const souratesIslamReligionUnique= [3,3,3,6,9,61,86,86];
const versetsIslamReligionUnique = [19,85,99,92,33,9,13,14];
const ahadithsIslamReligionUnique = [];
// Fin Islam Religion unique

// - A L L A H /  O M N I P O T E N T  /   O M N I S C i E N T
const souratesAllahOmnipotentOmniscient = [ 2, 2,  6, 6, 6, 7, 9, 40, 100 ]
const versetsAllahOmnipotentOmniscient = [ 181, 244, 18, 103, 115, 187, 79, 68, 6]

let ahadithsAllahOmnipotentOmniscient = [
  {
    auteur: "El Boukhari صحيح البخاري",
    numero:4584,
    texte:"أَطِيعُوا اللَّهَ وَأَطِيعُوا الرَّسُولَ وَأُولِي الْأَمْرِ مِنْكُمْ",
    lien: "https://dorar.net/hadith/sharh/65277",
  },
];
// - Piliers de l'Islam
const souratesPiliersIslam = [11, 23, 24, 24, 24, 29, 22]
const versetsPiliersIslam = [114, 2, 37, 56, 58, 45, 3]
const ahadithsPiliersIslam = [
  // La prière
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 7517,
    texte: " لَيْلَةَ أُسْرِيَ برَسولِ اللَّهِ صَلَّى اللهُ عليه وسلَّمَ ...",
    lien: "https://dorar.net/hadith/sharh/5828",
    autres: 3342,
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 135,
    texte: "لا يقبلُ اللَّهُ صلاةَ أحدِكُم إذا أحدَثَ حتَّى يتَوضَّأ ",
    lien: "https://dorar.net/hadith/sharh/36704",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 625,
    texte:
      " قالَ عمرُ رضيَ اللَّهُ عنهُ أوَلا تَبعثونَ رجلًا يُنادي بالصَّلاةِ فقالَ رسولُ اللَّهِ صلَّى اللَّهُ عليهِ وسلَّمَ : يا بلالُ قُم فَنادِ بالصَّلاةِ",
    lien: "https://dorar.net/hadith/sharh/2197",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 722,
    texte:
      " أَقِيمُوا الصَّفَّ في الصَّلاةِ؛ فإنَّ إقامَةَ الصَّفِّ مِن حُسْنِ الصَّلاةِ.",
    lien: "https://dorar.net/hadith/sharh/25329",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 854,
    texte:
      "مَن أَكَلَ مِن هذِهِ الشَّجرةِ. قالَ : أوَّلَ يومٍ ( الثُّومِ ) ثمَّ قالَ: الثُّومِ والبصلِ والكرَّاثِ - فلا يقربنا في مساجدنا؛ فإنَّ الملائِكَةَ تتأذَّى ممَّا يتأذَّى منهُ الإنسُ ",
    lien: "https://dorar.net/hadith/sharh/33240",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 4133,
    texte:
      " أنَّ النبيَّ صلَّى اللهُ عليه وسلم صلَّى صلاةَ الخوفِ بإحدَى الطائفتينِ ركعةً والطائفةُ الأخرَى مُواجِهةُ العدوِّ ، ثمَّ انصرفوا فقاموا في مقامِ أولئك وجاء أولئك فصلَّى بهم ركعةً أخرَى ثمَّ سلَّم ، فقام هؤلاءِ فقضَوا ركعتَهم [ وقام هؤلاءِ فقضَوا ركعتَهم",
    lien: "https://dorar.net/hadith/sharh/75539",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 1013,
    texte: " صلاة الإستسقاء",
    lien: "https://dorar.net/hadith/sharh/36909",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 4534,
    texte: "حَافِظُوا علَى الصَّلَوَاتِ والصَّلَاةِ الوُسْطَى وقُومُوا لِلَّهِ قَانِتِينَ",
    lien: "https://dorar.net/hadith/sharh/13786",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 4607,
    texte: "فأنْزَلَ اللَّهُ آيَةَ التَّيَمُّمِ",
    lien: "https://dorar.net/hadith/sharh/8175",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 6823,
    texte: "تُكفِّرُ السَّيِّئاتِ  الصَّلاةُ ",
    lien: "https://dorar.net/hadith/sharh/11770",
  },

  // La zakat
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 1503,
    texte: " زَكَاةَ الفِطْرِ",
    lien: "https://dorar.net/hadith/sharh/132064",
  },

  // Le ramadan
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 1658,
    texte: "صيامِ يومِ عرفةَ ",
    lien: "https://dorar.net/hadith/sharh/118226",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 4504,
    texte: " صِيامُ عاشوراءَ",
    lien: "https://dorar.net/hadith/sharh/13834",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 3277,
    texte:
      "  إذا جاءَ رَمَضانُ فُتِّحَتْ أبْوابُ الجَنَّةِ، وغُلِّقَتْ أبْوابُ النَّارِ، وصُفِّدَتِ الشَّياطِينُ.",
    lien: "https://dorar.net/hadith/sharh/16077",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 1900,
    texte:
      " إذا رَأَيْتُمُوهُ فَصُومُوا، وإذا رَأَيْتُمُوهُ فأفْطِرُوا، فإنْ غُمَّ علَيْكُم فاقْدِرُوا له.",
    lien: "https://dorar.net/hadith/sharh/16474",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 1917,
    texte:
      "... البقرة: 187  وَكُلُوا وَاشْرَبُوا حَتَّى يَتَبَيَّنَ لَكُمُ الْخَيْطُ الْأَبْيَضُ مِنَ الْخَيْطِ الْأَسْوَدِ ",
    lien: "https://dorar.net/hadith/sharh/88426",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 6709,
    texte: " وقَعْتُ علَى امْرَأَتي في رَمَضَانَ",
    lien: "https://dorar.net/hadith/sharh/7347",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 1949,
    texte: " فِدْيَةٌ طَعامُ مَساكِينَ... مَنْسُوخَةٌ.",
    lien: "https://dorar.net/hadith/sharh/151384",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 1955,
    texte:
      " إِذَا أقْبَلَ اللَّيْلُ مِن هَا هُنَا، وأَدْبَرَ النَّهَارُ مِن هَا هُنَا، وغَرَبَتِ الشَّمْسُ فقَدْ أفْطَرَ الصَّائِمُ.",
    lien: "https://dorar.net/hadith/sharh/21507",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 1915,
    texte: "عَلِمَ اللَّهُ أنَّكُمْ كُنْتُمْ تَخْتانُونَ أنْفُسَكُمْ فَتابَ علَيْكُم وعَفا عَنْكُمْ. أُحِلَّ لَكُمْ لَيْلَةَ الصِّيَامِ الرَّفَثُ إِلَى نِسَائِكُ. [البقرة: 187",
    lien: "https://dorar.net/hadith/sharh/5647",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 4509,
    texte: "كانَ الخَيْطُ الأبْيَضُ، والأسْوَدُ تَحْتَ وِسَادَتِكَ",
    lien: "https://dorar.net/hadith/sharh/8391",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 419,
    texte: " أتِمُّوا الرُّكوعَ والسجودَ ، فواللهِ إنِّي لأراكم من خلفِ ظهري ، في ركوعِكم وسجودِكم",
    lien: "https://dorar.net/hadith/sharh/22692",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 1464,
    texte: "ليس على المُسلِمِ في عبدِه، ولا في فَرَسِه صَدَقةٌ.",
    lien: "https://dorar.net/hadith/sharh/135580",
  },
];
// Fin piliers de l'islam

// - Obéir à Allah et au prophète
const souratesObeirAllahProphete = [3,3,4,4,6,24,24,24,33,33,47,48,49,49,57,57]
const versetsObeirAllahProphete = [32,132,59,80,50,51,54,56,21,36,33,17,1,2,7,8]
const ahadithsObeirAllahProphete = [
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 4584,
    texte:
      "أَطِيعُوا اللَّهَ وَأَطِيعُوا الرَّسُولَ وَأُولِي الْأَمْرِ مِنْكُمْ ",
    lien: "https://dorar.net/hadith/sharh/65277",
  },
  {
    auteur: "Abou Daoud أبو داود",
    numero: 4607,
    texte: "فعليكم بسنتي.  أوصيكم بتقوى اللهِ، والسَّمعِ والطاعةِ. ",
    lien: "https://dorar.net/hadith/sharh/72777",
  },
];
// Fin Obéir à Allah

// Aimer le prophète
const souratesAimerProphete = [33];
const versetsAimerProphete = [6];
const ahadithsAimerProphete = [
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 15,
    texte: "والذي نفسي بيدهِ لا يؤمنُ أحدُكم حتَّى أكونَ أحبَّ إليه من والدهِ وولدهِ والناسِ أجمعينَ",
    lien: "https://dorar.net/hadith/sharh/74978",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 6632,
    texte: "والَّذي نَفْسِي بيَدِهِ، حتَّى أكُونَ أحَبَّ إلَيْكَ مِن نَفْسِكَ. الآنَ يا عُمَرُ.  ",
    lien: "https://dorar.net/hadith/sharh/13097",
  },
];
// Fin aimer le prophète

// Aimer le prophète
const souratesBeau = [6,6,16,17,17,21,29,31,31,46,49,49,53,53];
const versetsBeau = [151,152,90,31,35,107,46,14,15,15,6,13,38,39];
const ahadithsBeau = [
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 2409,
    texte: "كُلُّكُمْ رَاعٍ ومَسْؤُولٌ عن رَعِيَّتِهِ ",
    lien: "https://dorar.net/hadith/sharh/66037",
  },
  
];
// Fin aimer le prophète

// - E S C L A V A) G E

// Les versets de l'esclavage
const souratesEsclavage = [2, 2, 4, 4, 4, 4, 5, 8, 8, 8, 8, 8, 16, 17, 24, 24, 30, 33, 33, 33, 48, 48, 48, 58, 58, 59, 59, 59, 59]
const versetsEsclavage = [178, 221, 24, 25, 36, 92, 89, 1, 41, 69, 70, 71, 75, 72, 32, 33, 28, 26, 27, 50, 19, 20, 21, 3, 4, 5, 6, 7, 8]
let ahadithsEsclavage = [
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 2565,
    texte: " الوَلَاءَ لِمَن أَعْتَقَ",
    lien: "https://dorar.net/hadith/sharh/12301",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 2403,
    texte:
      "أَعْتَقَ رَجُلٌ غُلَامًا له عن دُبُرٍ، فَقالَ النبيُّ صَلَّى اللهُ عليه وسلَّمَ: مَن يَشْتَرِيهِ مِنِّي؟، فَاشْتَرَاهُ نُعَيْمُ بنُ عبدِ اللَّهِ، فأخَذَ ثَمَنَهُ، فَدَفَعَهُ إلَيْهِ",
    lien: "https://dorar.net/hadith/sharh/15197",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 1054,
    texte:
      "أمَرَ النبيُّ صَلَّى اللهُ عليه وسلَّمَ بالعَتَاقَةِ في كُسُوفِ الشَّمْسِ.",
    lien: "https://dorar.net/hadith/sharh/13088",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 2522,
    texte:
      "مَن أعْتَقَ شِرْكًا له في عَبْدٍ، فَكانَ له مَالٌ يَبْلُغُ ثَمَنَ العَبْدِ قُوِّمَ العَبْدُ عليه قِيمَةَ عَدْلٍ، فأعْطَى شُرَكَاءَهُ حِصَصَهُمْ، وعَتَقَ عليه العَبْدُ، وإلَّا فقَدْ عَتَقَ منه ما عَتَقَ.",
    lien: "https://dorar.net/hadith/sharh/1779",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 2539,
    texte: " إمَّا المَالَ وإمَّا السَّبْيَ ",
    lien: "https://dorar.net/hadith/sharh/3449",
    autres: 2540,
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 2541,
    texte:" فَقَتَلَ مُقَاتِلَتَهُمْ، وسَبَى ذَرَارِيَّهُمْ، وأَصَابَ يَومَئذٍ جُوَيْرِيَةَ",
    lien: "https://dorar.net/hadith/sharh/7139",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 2542,
    texte:
      " في غَزْوَةِ بَنِي المُصْطَلِقِ، فأصَبْنَا سَبْيًا مِن سَبْيِ العَرَبِ، فَاشْتَهَيْنَا النِّسَاءَ، واشْتَدَّتْ عَلَيْنَا العُزْبَةُ، وأَحْبَبْنَا العَزْلَ، فأرَدْنَا أنْ نَعْزِلَ، وقُلْنَا: نَعْزِلُ ورَسولُ اللَّهِ صلَّى اللهُ عليه وسلَّمَ بيْنَ أظْهُرِنَا قَبْلَ أنْ نَسْأَلَهُ؟! فَسَأَلْنَاهُ عن ذلكَ، فَقَالَ: ما علَيْكُم أنْ لا تَفْعَلُوا، ما مِن نَسَمَةٍ كَائِنَةٍ إلى يَومِ القِيَامَةِ إلَّا وهي كَائِنَةٌ ",
    lien: "https://dorar.net/hadith/sharh/11750",
  },

  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 2545,
    texte:
      "  هُم إخوانُكم خَوَلُكم، جَعَلَهم اللهُ تحت أيْديكم، فمَن كان أخُوه تحت يَدِه فلْيُطعِمْه ممَّا يَأكُلُ، ويُلبِسْه ممَّا يَلبَسُ، ولا تُكلِّفوهم ما يَغلِبُهم، فإنْ كَلَّفتُموهم فأعينُوهم، ومَن لم يُلائِمْكم منهم فبِيعوهم، ولا تُعذِّبوا خَلْقَ اللهِ.",
    lien: "https://dorar.net/hadith/sharh/89125",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 2547,
    texte:
      "أَيُّما رَجُلٍ كانَتْ له جارِيَةٌ، فأدَّبَها فأحْسَنَ تَأْدِيبَها، وأَعْتَقَها، وتَزَوَّجَها فَلَهُ أجْرانِ، وأَيُّما عَبْدٍ أدَّى حَقَّ اللَّهِ وحَقَّ مَوالِيهِ فَلَهُ أجْرانِ. ",
    lien: "https://dorar.net/hadith/sharh/7285",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 2548,
    texte:
      "لِلْعَبْدِ المَمْلُوكِ الصَّالِحِ أجْرانِ. والذي نَفْسِي بيَدِهِ، لَوْلا الجِهادُ في سَبيلِ اللَّهِ، والحَجُّ، وبِرُّ أُمِّي؛ لَأَحْبَبْتُ أنْ أمُوتَ وأنا مَمْلُوكٌ. ",
    lien: "https://dorar.net/hadith/sharh/118993",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 2549,
    texte:
      " نِعْمَ ما لأحَدِهِمْ يُحْسِنُ عِبادَةَ رَبِّهِ ويَنْصَحُ لِسَيِّدِهِ.",
    lien: "https://dorar.net/hadith/sharh/4819",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 2552,
    texte: "لا يقولَنَّ أحدُكم عبدي وأمتي ولكن ليقُلْ فتاي وفتاتي ",
    lien: "https://dorar.net/hadith/sharh/110854",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 2557,
    texte:
      "إذا أتَى أحَدَكُمْ خادِمُهُ بطَعامِهِ، فإنْ لَمْ يُجْلِسْهُ معهُ، فَليُناوِلْهُ لُقْمَةً أوْ لُقْمَتَيْنِ، أوْ أُكْلَةً أوْ أُكْلَتَيْنِ؛ فإنَّه ولِيَ عِلاجَهُ.",
    lien: "https://dorar.net/hadith/sharh/33060",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 2592,
    texte: "أَمَا إنَّكِ لو أَعْطَيْتِهَا أَخْوَالَكِ كانَ أَعْظَمَ لأجْرِكِ.",
    lien: "https://dorar.net/hadith/sharh/16247",
    autres: 2594,
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 3754,
    texte:
      "كانَ عُمَرُ يقولُ: أبو بَكْرٍ سَيِّدُنَا، وأَعْتَقَ سَيِّدَنَا. يَعْنِي بلَالًا.",
    lien: "https://dorar.net/hadith/sharh/68882",
    autres: 3755,
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 3804,
    texte:
      "فإنِّي أحْكُمُ فيهم أنْ تُقْتَلَ مُقَاتِلَتُهُمْ وتُسْبَى ذَرَارِيُّهُمْ، قالَ: حَكَمْتَ بحُكْمِ اللَّهِ ",
    lien: "https://dorar.net/hadith/sharh/7125",
    autres: 4122,
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 6716,
    texte:" مَن يَشْتَرِيهِ مِنِّي؟ فاشْتَراهُ نُعَيْمُ بنُ النَّحَّامِ بثَمانِ مِائَةِ دِرْهَمٍ.",
    lien: "https://dorar.net/hadith/sharh/15197",
  },
];  
// Fin Esclavage

// Djihad / Violence

const souratesDjihadViolence = [2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 6, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8,9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9,22,24,33,33,33,33,47,47,49,61,61,61,66];
const versetsDjihadViolence = [154, 191, 216, 217, 140, 141, 142, 143, 146, 147, 148, 154, 155, 156, 157, 34, 71, 72, 73, 74, 77, 85, 89, 90, 91, 94, 95, 102, 103, 104, 33, 65, 1, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 39, 43, 44, 45, 57, 58, 60, 65, 66, 67,2, 5, 12, 14, 25, 26, 29, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 73, 74, 81, 82, 83, 88, 93, 111, 123, 78,4,19,20,60,61,4,35,15,4,10,11,9];
const ahadithsDjihadViolence = [
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 25,
    texte:
      " أُمِرْتُ أنْ أُقَاتِلَ النَّاسَ حتَّى يَشْهَدُوا أنْ لا إلَهَ إلَّا اللَّهُ، وأنَّ مُحَمَّدًا رَسولُ اللَّهِ، ويُقِيمُوا الصَّلَاةَ، ويُؤْتُوا الزَّكَاةَ، فَإِذَا فَعَلُوا ذلكَ عَصَمُوا مِنِّي دِمَاءَهُمْ وأَمْوَالَهُمْ إلَّا بحَقِّ الإسْلَامِ، وحِسَابُهُمْ علَى اللَّهِ.",
    verset: "s9v5",
    lien: "https://dorar.net/hadith/sharh/68099",
    autres: 1399,
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 26,
    texte: "أفضَلُ الأعمالِ الإيمانُ باللهِ وَحدَه ، ثمَّ الجهادُ... ",
    lien: "https://dorar.net/hadith/sharh/141857",
    autres: 1519,
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 123,
    texte:
      "مَن قَاتَلَ لِتَكُونَ كَلِمَةُ اللَّهِ هي العُلْيَا، فَهو في سَبيلِ اللَّهِ عزَّ وجلَّ. ",
    lien: "https://dorar.net/hadith/sharh/8229",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 1399,
    texte: "واللَّهِ لَأُقَاتِلَنَّ مَن فَرَّقَ بيْنَ الصَّلَاةِ والزَّكَاةِ ",
    lien: "https://dorar.net/hadith/sharh/67078",
    autres: 1456,
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 1501,
    texte:
      " فَأُتِيَ بهِمْ، فَقَطَّعَ أيْدِيَهُمْ وأَرْجُلَهُمْ، وسَمَرَ أعْيُنَهُمْ، وتَرَكَهُمْ بالحَرَّةِ يَعَضُّونَ الحِجَارَةَ.",
    lien: "https://dorar.net/hadith/sharh/33629",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 428,
    texte:
      "يا بَنِي النَّجَّارِ ثامِنُونِي بحائِطِكُمْ، قالوا: لا نَطْلُبُ ثَمَنَهُ، إلَّا إلى اللَّهِ. ",
    lien: "https://dorar.net/hadith/sharh/15455",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 3995,
    texte:
      " هذا جِبْرِيلُ آخِذٌ برَأْسِ فَرَسِهِ عليه أدَاةُ الحَرْبِ.",
    lien: "https://dorar.net/hadith/sharh/11475",
    autres: 4041,
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 4037,
    texte: "مَن لِكَعْبِ بنِ الأشْرَفِ؛ فإنَّه قدْ آذَى اللَّهَ ورَسولَهُ؟ ",
    lien: "https://dorar.net/hadith/sharh/4176",
    autres: 2510,
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 2541,
    texte:
      " إنَّ النَّبيَّ صلَّى اللهُ عليه وسلَّمَ أغَارَ علَى بَنِي المُصْطَلِقِ وهُمْ غَارُّونَ، وأَنْعَامُهُمْ تُسْقَى علَى المَاءِ، فَقَتَلَ مُقَاتِلَتَهُمْ، وسَبَى ذَرَارِيَّهُمْ، وأَصَابَ يَومَئذٍ جُوَيْرِيَةَ.",
    lien: "https://dorar.net/hadith/sharh/7139",
    autres: 3804
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 4304,
    texte:
      " والذي نفسُ محمدٍ بيدِه لو أن فاطمةَ بنتَ محمدٍ سَرَقَتْ لقَطَعَتُ يدَها. ",
    lien: "https://dorar.net/hadith/sharh/2028",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 2926,
    texte: " لا تَقُومُ السَّاعَةُ حتَّى تُقاتِلُوا اليَهُودَ، حتَّى يَقُولَ الحَجَرُ وراءَهُ اليَهُودِيُّ: يا مُسْلِمُ، هذا يَهُودِيٌّ وَرائي فاقْتُلْهُ.",
    lien: "https://dorar.net/hadith/sharh/15003",
    autres: 3593
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 4032,
    texte: " حرَّقَ رسولُ اللَّهِ صلَّى اللَّهُ علَيهِ وسلَّمَ نخلَ بَني النَّضيرِ وقطَّعَ، وَهيَ البوَيْرةُ، فأنزلَ اللَّهُ مَا قَطَعْتُمْ مِنْ لِينَةٍ أَوْ تَرَكْتُمُوهَا قَائِمَةً عَلَى أُصُولِهَا فَبِإِذْنِ اللَّهِ وَلِيُخْزِيَ الْفَاسِقِينَ",
    lien: "https://dorar.net/hadith/sharh/5268",
    autres: 4028
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 4039,
    texte: "  بَعَثَ رَسولُ اللَّهِ صَلَّى اللهُ عليه وسلَّمَ رَهْطًا مِنَ الأنْصَارِ إلى أبِي رَافِعٍ فَدَخَلَ عليه عبدُ اللَّهِ بنُ عَتِيكٍ بَيْتَهُ لَيْلًا فَقَتَلَهُ وهو نَائِمٌ.",
    lien: "https://dorar.net/hadith/sharh/24040",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 4050,
    texte: " أنَّ النبيَّ صَلَّى اللَّهُ عليه وَسَلَّمَ خَرَجَ إلى أُحُدٍ، فَرَجَعَ نَاسٌ مِمَّنْ كانَ معهُ، فَكانَ أَصْحَابُ النبيِّ صَلَّى اللَّهُ عليه وَسَلَّمَ فيهم فِرْقَتَيْنِ، قالَ بَعْضُهُمْ: نَقْتُلُهُمْ، وَقالَ بَعْضُهُمْ: لَا، فَنَزَلَتْ {فَما لَكُمْ في المُنَافِقِينَ فِئَتَيْنِ} [النساء: 88].",
    lien: "https://dorar.net/hadith/sharh/6074",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 2664,
    texte: "  أنَّ النبيَّ صَلَّى اللهُ عليه وسلَّمَ: عَرَضَهُ يَومَ أُحُدٍ وهو ابنُ أرْبَعَ عَشْرَةَ سَنَةً، فَلَمْ يُجِزْهُ، وعَرَضَهُ يَومَ الخَنْدَقِ، وهو ابنُ خَمْسَ عَشْرَةَ سَنَةً، فأجَازَهُ.",
    lien: "https://dorar.net/hadith/sharh/25633",
    autres: 4097
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 2813,
    texte: "لَمَّا رَجَعَ النبيُّ صَلَّى اللهُ عليه وسلَّمَ مِنَ الخَنْدَقِ، ووَضَعَ السِّلَاحَ واغْتَسَلَ، أتَاهُ جِبْرِيلُ عليه السَّلَامُ، فَقالَ: قدْ وضَعْتَ السِّلَاحَ؟ واللَّهِ ما وضَعْنَاهُ، فَاخْرُجْ إليهِم قالَ: فَإِلَى أيْنَ؟ قالَ: هَا هُنَا، وأَشَارَ إلى بَنِي قُرَيْظَةَ، فَخَرَجَ النبيُّ صَلَّى اللهُ عليه وسلَّمَ إليهِم ",
    lien: "https://dorar.net/hadith/sharh/21196",
    autres: 4117
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 4123,
    texte: "قَالَ رَسولُ اللَّهِ صلَّى اللهُ عليه وسلَّمَ يَومَ قُرَيْظَةَ لِحَسَّانَ بنِ ثَابِتٍ: اهْجُ المُشْرِكِينَ؛ فإنَّ جِبْرِيلَ معكَ. ",
    lien: "https://dorar.net/hadith/sharh/14401",
    
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 4138,
    texte: " خَرَجْنَا مع رَسولِ اللَّهِ صَلَّى اللهُ عليه وسلَّمَ في غَزْوَةِ بَنِي المُصْطَلِقِ، فأصَبْنَا سَبْيًا مِن سَبْيِ العَرَبِ، فَاشْتَهَيْنَا النِّسَاءَ، فَاشْتَدَّتْ عَلَيْنَا العُزْبَةُ، وأَحْبَبْنَا العَزْلَ، فَسَأَلْنَا رَسولَ اللَّهِ صَلَّى اللهُ عليه وسلَّمَ، فَقالَ: ما علَيْكُم أنْ لا تَفْعَلُوا ما مِن نَسَمَةٍ كَائِنَةٍ إلى يَومِ القِيَامَةِ إلَّا وهي كَائِنَةٌ.",
    lien: "https://dorar.net/hadith/sharh/11750",
    
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 4192,
    texte: " ... فأمرَ بِهِم فقُطِعَت أيديهم وأرجلُهُم وسمرَ أعينُهُم ، وألقَوا في الحرَّةِ يستَسقونَ فلا يُسقونَ",
    lien: "https://dorar.net/hadith/sharh/10926",
    
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 4197 ,
    texte: " أنَّ رَسولَ اللَّهِ صَلَّى اللهُ عليه وسلَّمَ أتَى خَيْبَرَ لَيْلًا، وكانَ إذا أتَى قَوْمًا بلَيْلٍ لَمْ يُغِرْ بهِمْ حتَّى يُصْبِحَ، فَلَمَّا أصْبَحَ خَرَجَتِ اليَهُودُ بمَساحِيهِمْ، ومَكاتِلِهِمْ فَلَمَّا رَأَوْهُ قالوا: مُحَمَّدٌ واللَّهِ، مُحَمَّدٌ والخَمِيسُ، فقالَ النبيُّ صَلَّى اللهُ عليه وسلَّمَ: خَرِبَتْ خَيْبَرُ، إنَّا إذا نَزَلْنا بساحَةِ قَوْمٍ {فَساءَ صَباحُ المُنْذَرِينَ} [الصافات: 177]",
    lien: "https://dorar.net/hadith/sharh/24120",
    autres: "371, 4200, 4201, 4211, 4213"
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero:4286 ,
    texte: " عن أنسِ بنِ مالكٍ, أنَّ رسولَ اللهِ صلَّى اللهُ عليهِ وسلَّم دخل مكةَ عامَ الفتحِ, وعلى رأسِه المغفَرُ, فلما نزعَه, جاءَه رجلٌ فقال : ابنُ خطلٍ متعلِّقٌ بأستارِ الكعبةِ, فقال ( رسولُ اللهِ صلَّى اللهُ عليهِ وسلَّم ) اقتلوهُ",
    lien: "https://dorar.net/hadith/sharh/79443",
    
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 4274,
    texte: " فَقالَ عُمَرُ: يا رَسولَ اللَّهِ، دَعْنِي أضْرِبْ عُنُقَ هذا المُنَافِقِ، فَقالَ: إنَّه قدْ شَهِدَ بَدْرًا، وما يُدْرِيكَ لَعَلَّ اللَّهَ اطَّلَعَ علَى مَن شَهِدَ بَدْرًا، فَقالَ: اعْمَلُوا ما شِئْتُمْ؛ فقَدْ غَفَرْتُ لَكُمْ. فأنْزَلَ اللَّهُ السُّورَةَ: {يَاأَيُّهَا الَّذِينَ آمَنُوا لَا تَتَّخِذُوا عَدُوِّي وَعَدُوَّكُمْ أَوْلِيَاءَ تُلْقُونَ إِلَيْهِمْ بِالْمَوَدَّةِ وَقَدْ كَفَرُوا بِمَا جَاءَكُمْ مِنَ الْحَقِّ} إلى قَوْلِهِ: {فقَدْ ضَلَّ سَوَاءَ السَّبِيلِ} [الممتحنة: 1]",
    lien: "https://dorar.net/hadith/sharh/117689",
    autres: 2494
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 4304,
    texte: "والذي نَفْسُ مُحَمَّدٍ بيَدِهِ، لو أنَّ فاطِمَةَ بنْتَ مُحَمَّدٍ سَرَقَتْ، لَقَطَعْتُ يَدَها. ثُمَّ أمَرَ رَسولُ اللَّهِ صلَّى اللهُ عليه وسلَّمَ بتِلْكَ المَرْأَةِ، فَقُطِعَتْ يَدُها، فَحَسُنَتْ تَوْبَتُها بَعْدَ ذلكَ وتَزَوَّجَتْ. قالَتْ عائِشَةُ: فَكانَتْ تَأْتي بَعْدَ ذلكَ فأرْفَعُ حاجَتَها إلى رَسولِ اللَّهِ صلَّى اللهُ عليه وسلَّمَ. ",
    lien: "https://dorar.net/hadith/sharh/82722",
    
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 4339,
    texte: " اللَّهُمَّ إنِّي أبْرَأُ إلَيْكَ ممَّا صَنَعَ خَالِدُ بنُ الوَلِيدِ مَرَّتَيْنِ.",
    lien: "https://dorar.net/hadith/sharh/24160",
    
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 3949,
    texte: " كنتُ إلى جنبِ زيدِ بنِ أرقمَ فقيلَ لهُ : كم غزا النَّبيُّ صلَّى اللَّهُ عليهِ وسلَّمَ من غزوةٍ قالَ : تسعَ عشرةَ فقلتُ : كم غزوتَ أنتَ معهُ ؟قالَ : سبعَ عشرةَ ، قلتُ : وأيَّتُهنَّ كانَ أوَّلَ ؟ قالَ : ذاتُ العُشَيراءِ – أو العُسَيراءِ -",
    lien: "https://dorar.net/hadith/sharh/12021",
    autres: 4471
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 1884,
    texte: " رَجَعَ نَاسٌ مِن أصْحَابِ النبيِّ صَلَّى اللهُ عليه وسلَّمَ مِن أُحُدٍ، وكانَ النَّاسُ فيهم فِرْقَتَيْنِ: فَرِيقٌ يقولُ: اقْتُلْهُمْ، وفَرِيقٌ يقولُ: لَا، فَنَزَلَتْ: {فَما لَكُمْ في المُنَافِقِينَ فِئَتَيْنِ}",
    lien: "https://dorar.net/hadith/sharh/6072",
    autres: 4589
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 4592,
    texte: "لَا يَسْتَوِي الْقَاعِدُونَ مِنَ الْمُؤْمِنِينَ} {وَالْمُجَاهِدُونَ فِي سَبِيلِ اللَّهِ} [النساء: 95] ",
    lien: "https://dorar.net/hadith/sharh/3173",
    autres: 4990
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 3377,
    texte: "  لا يضربُ أحدُكم امرأتَه ضربَ الأمةِ ثم يضاجعُها",
    lien: "https://dorar.net/hadith/sharh/138072",
    autres: 5204
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 5295,
    texte: " أنَّ يَهُودِيًّا قَتَلَ جَارِيَةً علَى أوْضَاحٍ لَهَا، فَقَتَلَهَا بحَجَرٍ، فَجِيءَ بهَا إلى النبيِّ صَلَّى اللهُ عليه وسلَّمَ وبِهَا رَمَقٌ، فَقالَ: أقَتَلَكِ فُلَانٌ؟ فأشَارَتْ برَأْسِهَا: أنْ لَا، ثُمَّ قالَ الثَّانِيَةَ، فأشَارَتْ برَأْسِهَا: أنْ لَا، ثُمَّ سَأَلَهَا الثَّالِثَةَ، فأشَارَتْ برَأْسِهَا: أنْ نَعَمْ، فَقَتَلَهُ النبيُّ صَلَّى اللهُ عليه وسلَّمَ بحَجَرَيْنِ.",
    lien: "https://dorar.net/hadith/sharh/8019",
    
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 5357,
    texte: " كان يبيعُ نخلَ بني النضيرِ ، ويحبِسُ لأهْلِهِ قوتَ سنتِهم",
    lien: "https://dorar.net/hadith/sharh/24736",
    
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 6777,
    texte: " أنَّ النبيَّ صَلَّى اللهُ عليه وسلَّمَ ضَرَبَ في الخَمْرِ بالجَرِيدِ والنِّعالِ، وجَلَدَ أبو بَكْرٍ أرْبَعِينَ.",
    lien: "https://dorar.net/hadith/sharh/11762",
    
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 6789,
    texte: " لَا تُقْطَعُ يَدُ السَّارِقِ إلَّا في رُبْعِ دِينَارٍ فَصَاعِدًا.",
    lien: "https://dorar.net/hadith/sharh/4920",
    
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 6812,
    texte: " عَنْ عَلِيٍّ رَضِيَ اللَّهُ عنْه حِينَ رَجَمَ المَرْأَةَ يَومَ الجُمُعَةِ، وقالَ: قدْ رَجَمْتُهَا بسُنَّةِ رَسولِ اللَّهِ صَلَّى اللهُ عليه وسلَّمَ.",
    lien: "https://dorar.net/hadith/sharh/67065",
    
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 6840,
    texte: " رَجَمَ النبيُّ صَلَّى اللهُ عليه وسلَّمَ فَقُلتُ: أقَبْلَ النُّورِ أمْ بَعْدَهُ؟ قالَ: لا أدْرِي.",
    lien: "https://dorar.net/hadith/sharh/11551",
    
  },];
// Fin Djihad / Violence

//- Insultes et moqueries
const souratesInsultesMoqueries = [1,2,2,2,5,5,7,7,7,9,9,9,10,10,25,31,39,54,54,62,68,68,111,111,111,111,111];
const versetsInsultesMoqueries = [7,18,65,171,60,64,166,176,179,28,29,95,26,43,44,19,64,7,31,5,13,16,1,2,3,4,5];
const ahadithsInsultesMoqueries = [
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 691,
    texte:
      " أما يخشى الَّذي يرفَعُ رأسَهُ قبلَ الإمامِ راكعًا أو ساجدًا أن يحوِّلَ اللَّهُ رأسَهُ رأسَ حمارٍ أو صورتَهُ صورةَ حمارٍ",
    lien: "https://dorar.net/hadith/sharh/72198",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 797,
    texte: "فيدعو للمؤمنينَ ويلعنُ الْكافرينَ",
    lien: "https://dorar.net/hadith/sharh/36802",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 3453,
    texte:
      "لَعْنَةُ اللَّهِ علَى اليَهُودِ والنَّصارَى؛ اتَّخَذُوا قُبُورَ أنْبِيائِهِمْ مَساجِدَ. يُحَذِّرُ ما صَنَعُوا.",
    lien: "https://dorar.net/hadith/sharh/347",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 1358,
    texte:
      "كُلُّ مَوْلُودٍ يُولَدُ علَى الفِطْرَةِ، فأبَوَاهُ يُهَوِّدَانِهِ، أوْ يُنَصِّرَانِهِ، أوْ يُمَجِّسَانِهِ، كَمَثَلِ البَهِيمَةِ تُنْتَجُ البَهِيمَةَ هلْ تَرَى فِيهَا جَدْعَاءَ.",
    lien: "https://dorar.net/hadith/sharh/11465",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 1394,
    texte:
      "قالَ أبو لَهَبٍ عليه لَعْنَةُ اللَّهِ للنبيِّ صَلَّى اللهُ عليه وسلَّمَ: تَبًّا لكَ سَائِرَ اليَومِ فَنَزَلَتْ: {تَبَّتْ يَدَا أبِي لَهَبٍ وتَبَّ} [المسد: 1]",
    lien: "https://dorar.net/hadith/sharh/4292",
    autres: "4770, 4801",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 3330,
    texte:
      " لَوْلَا بَنُو إِسْرَائِيلَ، لَمْ يَخْبُثِ الطَّعَامُ، وَلَمْ يَخْنَزِ اللَّحْمُ، وَلَوْلَا حَوَّاءُ لَمْ تَخُنْ أُنْثَى زَوْجَهَا الدَّهْرَ.",
    lien: "https://dorar.net/hadith/sharh/22158",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 3462,
    texte: "إنَّ اليَهُودَ وَالنَّصَارَى لا يَصْبُغُونَ، فَخَالِفُوهُمْ.",
    lien: "https://dorar.net/hadith/sharh/34253",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 4475,
    texte:
      "إذا قالَ الإمامُ: {غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ} [الفاتحة: 7] فَقُولوا آمِينَ، فمَن وافَقَ قَوْلُهُ قَوْلَ المَلائِكَةِ غُفِرَ له ما تَقَدَّمَ مِن ذَنْبِهِ",
    lien: "https://dorar.net/hadith/sharh/11383",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 5395,
    texte:
      "إنَّ الكَافِرَ يَأْكُلُ في سَبْعَةِ أمْعَاءٍ فَقالَ: فأنَا أُومِنُ باللَّهِ ورَسولِهِ. ",
    lien: "https://dorar.net/hadith/sharh/5157",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 5885,
    texte:
      "لعن اللهُ المتشبهين بالنساءِ من الرجالِ والمتشبهاتِ من النساءِ بالرجالِ. ",
    lien: "https://dorar.net/hadith/sharh/80461",
  },
];

//- Insultes et moqueries
const souratesHeritage = [2,2,4,4,4,4];
const versetsHeritage = [180,181,7,11,12,176];
const ahadithsHeritage = [
  
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 4240,
    texte:" .  إنَّما يأكُلُ آلُ محمَّدٍ مِن هذا المالِ ليس لهم أنْ يزيدوا على المأكَلِ وإنِّي واللهِ لا أُغيِّرُ شيئًا مِن صدقاتِ رسولِ اللهِ لا نُورَثُ ما ترَكْناه صدقةٌ ",
    lien: "https://dorar.net/hadith/sharh/290",
    autres: "4035"
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 6764,
    texte:" لا يرِثُ المُسلِمُ الكافرَ ولا الكافرُ المُسلِمَ",
    lien: "https://dorar.net/hadith/sharh/128959",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 3936,
    texte:" الثلثُ والثلثُ كثيرٌ أو كبيرٌ",
    lien: "https://dorar.net/hadith/sharh/67035",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 6737,
    texte:" ألحِقوا الفرائضَ بأصحابِها، فما أبقَت الفرائضُ فلأَولَى رجُلٍ ذَكَرٍ",
    lien: "https://dorar.net/hadith/sharh/85399",
    autres: "6732"
  },
  
];

//- Insultes et moqueries
const souratesPfffff = [2,5,5,5,5,6,6,10,10,10,10,16,17,18,20,22,24,24,24,24,24,25,25,27,27,27,33,33,35,36,36,36,36,39,39,39,39,40,40,40,43,48,49,49,50,55,59,97,103];
const versetsPfffff = [189,67,106,107,108,59,142,28,29,30,94,80,64,25,71,18,27,28,29,58,60,24,47,18,82,86,56,72,41,71,72,73,80,10,13,15,45,67,79,80,45,17,4,5,30,6,21,97,103];
const ahadithsPfffff = [
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 144,
    texte:
      "إِذَا أتَى أحَدُكُمُ الغَائِطَ، فلا يَسْتَقْبِلِ القِبْلَةَ ولَا يُوَلِّهَا ظَهْرَهُ، شَرِّقُوا أوْ غَرِّبُوا. ",
    lien: "https://dorar.net/hadith/sharh/22725",
  },

  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 153,
    texte:
      " لا يُمْسِكَنَّ أحَدُكُمْ ذَكَرَهُ بيَمِينِهِ وهو يَبُولُ، ولا يَتَمَسَّحْ مِنَ الخَلاءِ بيَمِينِهِ، ولا يَتَنَفَّسْ في الإناءِ.",
    lien: "https://dorar.net/hadith/sharh/17634",
  },

  {
    auteur: "Muslim صحيح مسلم",
    numero: 280,
    texte:" إذا ولغَ الكلبُ في الإناءِ فاغسِلوهُ سبعَ مرَّاتٍ وعفِّروهُ الثَّامنةَ بالتُّرابِ",
    lien: "https://dorar.net/hadith/sharh/32134",
  },

  {
    auteur: "El Boukhari صحيح البخاري",
    numero:218 ,
    texte:"  أمَّا أحدُهما فكان يسعى بالنَّميمةِ وأمَّا الآخَرُ فكان لا يستنزِهُ مِن بولِه إنَّهما ليُعذَّبانِ وما يُعذَّبانِ في كبيرٍ",
    lien: "https://dorar.net/hadith/sharh/12463",
    autres: "1361, 1378 "
  },

  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 416,
    texte:" إن أحدَكم إذا قام في صلاتِه فإنه يُناجي ربَّه ، و إنَّ ربَّه بينَه و بين القبلةِ ، فلا يبزُقنَّ أحدُكم قِبَلَ قبلتِه ، و لكن عن يسارِه أو تحتَ قدمِه",
    lien: "https://dorar.net/hadith/sharh/114172",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 418,
    texte:" أترونَ قِبلتي هاهُنا؟ فواللَّهِ ما يخفى عليَّ خشوعُكُم ولا رُكوعُكُم إنِّي لأراكم من وراءِ ظَهْري",
    lien: "https://dorar.net/hadith/sharh/112163",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero:1114 ,
    texte:" ذَاكَ رَجُلٌ بَالَ الشَّيْطَانُ في أُذُنَيْهِ، أَوْ قالَ: في أُذُنِهِ.",
    lien: "https://dorar.net/hadith/sharh/9598",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 3292,
    texte:"الرؤيَا الصالحةُ من اللهِ ، والحلمُ من الشيطانِ ، فإذا حلمَ أحدكم حلما يخافهُ ، فليبصقْ عن يسارهِ ثلاثَ مراتٍ ، وليستعذْ باللهِ من شرهِ ، فإنه لا يضرهُ ",
    lien: "https://dorar.net/hadith/sharh/121916",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 3297,
    texte:" اقْتُلُوا الحَيّاتِ، واقْتُلُوا ذا الطُّفْيَتَيْنِ والأبْتَرَ، فإنَّهُما يَطْمِسانِ البَصَرَ، ويَسْتَسْقِطانِ الحَبَلَ.",
    lien: "https://dorar.net/hadith/sharh/12143",
    autres: "3310"
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 3306,
    texte:" أمَر رسولُ اللهِ صلَّى اللهُ عليه وسلَّم بقتلِ الوَزَغِ وسمَّاه فُوَيْسِقًا",
    lien: "https://dorar.net/hadith/sharh/16054",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 3314,
    texte:" خمسُ فواسِقَ يُقتَلْنَ في الحِلِّ والحَرَمِ الفأرةُ والعَقْرَبُ والحِدَأَةُ والكَلبُ العَقورُ والغُرَابُ",
    lien: "https://dorar.net/hadith/sharh/124358",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero:3320 ,
    texte:"إذا وقَعَ الذُّبابُ في إناءِ أحَدِكم فامقُلُوه؛ فإنَّ في أحَدِ جَناحَيه داءً، وفي الآخَرِ شِفاءً، وإنَّه يتَّقي بجَناحِه الذي فيه الدَّاءُ، فلْيَغمِسْه كُلَّه ",
    lien: "https://dorar.net/hadith/sharh/117405",
  },
  {
    auteur: "Muslim صحيح مسلم",
    numero: 1572,
    texte:"أمرَ نبيُّ اللَّهِ صلَّى اللَّهُ عليْهِ وسلَّمَ بقتلِ الْكلابِ . حتَّى إن كانتِ المرأةُ تقدُمُ منَ الباديةِ يعني بالْكلبِ فنقتلُهُ ثمَّ نَهانا عن قتلِها وقالَ عليْكم بالأسوَدِ",
    lien: "https://dorar.net/hadith/sharh/37032",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 6227,
    texte:" خلَق اللهُ آدَمَ على صورتِه وطولُه سِتُّونَ ذراعًا",
    lien: "https://dorar.net/hadith/sharh/12845",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 3938,
    texte:" إنِّي سَائِلُكَ عن ثَلَاثٍ لا يَعْلَمُهُنَّ إلَّا نَبِيٌّ",
    lien: "https://dorar.net/hadith/sharh/14507",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero:6223,
    texte:"إنَّ اللهَ يُحِبُّ العُطاسَ ويكرَهُ التَّثاؤبَ فإذا تثاءَب أحدُكم فليكظِمْ ما استطاع أو ليضَعْ يدَه على فيه فإنَّه إذا تثاءَب فقال: آه فإنَّما هو الشَّيطانُ يضحَكُ مِن جوفِه ",
    lien: "https://dorar.net/hadith/sharh/15100",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 3295,
    texte:" إذا استيقظ أحدُكم من منامِه فتوضَّأَ فلْيَسْتَنْثِرْ ثلاثَ مراتٍ ، فإنَّ الشيطانَ يبِيتُ على خياشيمِه",
    lien: "https://dorar.net/hadith/sharh/3551",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 3303,
    texte:"إذا سمعتُم صِياحَ الدِّيكةِ فسَلُوا الله تعالى من فَضْلِه؛ فإنَّها رأت مَلَكًا، وإذا سمعتُم نهيقَ الحِمارِ فتعَوَّذوا بالله من الشَّيطانِ؛ فإنَّها رأت شيطانًا ",
    lien: "https://dorar.net/hadith/sharh/10511",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero:6227 ,
    texte:" فكُلُّ مَن يَدخلُ الجنةَ على صورةِ آدمَ في طُولِه سِتُّونَ ذِراعًا ، فلمْ تَزلْ الخَلْقُ تَنقُصُ بعدَه حتى الآنَ",
    lien: "https://dorar.net/hadith/sharh/12844",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 3356,
    texte:"اخْتَتَنَ إِبْرَاهِيمُ النبيُّ عليه السَّلَامُ، وَهو ابنُ ثَمَانِينَ سَنَةً بالقَدُومِ. ",
    lien: "https://dorar.net/hadith/sharh/16636",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 3849,
    texte:" رَأَيْتُ في الجَاهِلِيَّةِ قِرْدَةً اجْتَمع عَلَيْهَا قِرَدَةٌ، قدْ زَنَتْ، فَرَجَمُوهَا، فَرَجَمْتُهَا معهُمْ.",
    lien: "https://dorar.net/hadith/sharh/150656",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 4512,
    texte:" كَانُوا إذَا أحْرَمُوا في الجَاهِلِيَّةِ أتَوْا البَيْتَ مِن ظَهْرِهِ فأنْزَلَ اللَّهُ: {وَليسَ البِرُّ بأَنْ تَأْتُوا البُيُوتَ مِن ظُهُورِهَا ولَكِنَّ البِرَّ مَنِ اتَّقَى وأْتُوا البُيُوتَ مِن أبْوَابِهَا}",
    lien: "https://dorar.net/hadith/sharh/3083",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero:6542 ,
    texte:"يَدْخُلُ الجَنَّةَ مِن أُمَّتي زُمْرَةٌ هُمْ سَبْعُونَ ألْفًا، تُضِيءُ وُجُوهُهُمْ إضاءَةَ القَمَرِ لَيْلَةَ البَدْرِ ",
    lien: "https://dorar.net/hadith/sharh/26256",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 6249,
    texte:"يا عائِشَةُ هذا جِبْرِيلُ يَقْرَأُ عَلَيْكِ السَّلامَ قالَتْ: قُلتُ: وعليه السَّلامُ ورَحْمَةُ اللَّهِ، تَرَى ما لا نَرَى ",
    lien: "https://dorar.net/hadith/sharh/4741",
  },

];





// Fonction injecter les sourates selon le thème

function injecteVersets (titreThematique, sourates, versets) {
  
  tableau.innerHTML = "";
  
   pTitreThematique.textContent = `Versets sur ${titreThematique}`;
  tableau.appendChild(pTitreThematique)
    
  for (let index = 0; index < sourates.length; index++) {
    numeroSourate = sourates[index]
    numeroVerset = `s${numeroSourate}v${versets[index]}`;
    
    sourate = coran[numeroSourate-1] 
     
    verset = sourate[numeroVerset]
  
      let divVersets = document.createElement("div");
      let pVerset = document.createElement("p");
      pVerset.setAttribute("class", "pVerset");
      divVersets.appendChild(pVerset);
  
    pVerset.innerHTML = `<span class="numeroVerset">  ${numeroVerset}. </span> </br> ${verset}`;
        tableau.appendChild(divVersets)
    }
}

// Fonction injecter les Ahadiths selon le thème

function injecteAhadiths(titreThematique, ahadiths) {
  tableau.innerHTML = "";

  pTitreThematique.textContent = `Ahadiths authentiques sur ${titreThematique}`;
  tableau.appendChild(pTitreThematique);
  ahadiths.forEach(hadith => {
    console.log(hadith);
    
  
    let divHadith = document.createElement('div')
    divHadith.setAttribute('class', 'carteHadith')
  divHadith.innerHTML = `
  <p> Auteur: ${hadith.auteur} </p>
  <p> Numéro du hadith: ${hadith.numero} </p>
  <p> Résumé du texte: ${hadith.texte} </p>
  <p> Plus d'infos: <a href= '${hadith.lien}'  target='_blank'> Dorar الدرر السنية</a> </p>
  `;
   tableau.appendChild(divHadith)
  })
}