// 1- Le témoignage de foi
const souratesTemoignageFoi = [2,3,47,];
const versetsTemoignageFoi = [255,18,19,];
const ahadithsTemoignageFoi = [];

// 2- La prière
const souratesPriere = [2,4,5,11, 23, 24, 24, 24, 29, ];
const versetsPriere = [3,103,6,114, 2, 37, 56, 58, 45, ];
const ahadithsPriere = [
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
    texte:
      "حَافِظُوا علَى الصَّلَوَاتِ والصَّلَاةِ الوُسْطَى وقُومُوا لِلَّهِ قَانِتِينَ",
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
];

// 3- Le ramadhan
const souratesRamadhan = [2,2,2,2,2, 97,97,97,97,97,];
const versetsRamadhan = [183,184,185,186,187, 1,2,3,4,5,];
const ahadithsRamadhan = [
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
    texte:
      "عَلِمَ اللَّهُ أنَّكُمْ كُنْتُمْ تَخْتانُونَ أنْفُسَكُمْ فَتابَ علَيْكُم وعَفا عَنْكُمْ. أُحِلَّ لَكُمْ لَيْلَةَ الصِّيَامِ الرَّفَثُ إِلَى نِسَائِكُ. [البقرة: 187",
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
    texte:
      " أتِمُّوا الرُّكوعَ والسجودَ ، فواللهِ إنِّي لأراكم من خلفِ ظهري ، في ركوعِكم وسجودِكم",
    lien: "https://dorar.net/hadith/sharh/22692",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 1464,
    texte: "ليس على المُسلِمِ في عبدِه، ولا في فَرَسِه صَدَقةٌ.",
    lien: "https://dorar.net/hadith/sharh/135580",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 1901,
    texte:
      "مَن صَامَ رَمَضَانَ إيمَانًا واحْتِسَابًا غُفِرَ له ما تَقَدَّمَ مِن ذَنْبِهِ",
    lien: "https://dorar.net/hadith/sharh/10254",
    autres: "",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 1129,
    texte: " ... أنِّي خَشِيتُ أن تُفرَضَ عليكم، وذلك في رَمَضانَ",
    lien: "https://dorar.net/hadith/sharh/132100",
    autres: "",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 2016,
    texte:
      "... إنِّي أُرِيتُ لَيْلَةَ القَدْرِ، ثُمَّ أُنْسِيتُهَا - أوْ نُسِّيتُهَا - فَالْتَمِسُوهَا في العَشْرِ الأوَاخِرِ في الوَتْرِ ",
    lien: "https://dorar.net/hadith/sharh/7914",
    autres: "",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 1904,
    texte: " فَمِ الصَّائِمِ أطْيَبُ عِنْدَ اللَّهِ مِن رِيحِ المِسْكِ ...",
    lien: "https://dorar.net/hadith/sharh/142146",
    autres: "",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 1927,
    texte:
      " كانَ النبيُّ صَلَّى اللهُ عليه وسلَّمَ يُقَبِّلُ ويُبَاشِرُ وهو صَائِمٌ، وكانَ أمْلَكَكُمْ لِإِرْبِهِ....",
    lien: "https://dorar.net/hadith/sharh/24597",
    autres: "",
  },
  {
    auteur: "Muslim  صحيح مسلم ",
    numero: 1927,
    texte: " ....إنَّ في الجَنَّةِ بَابًا يُقَالُ له الرَّيَّانُ",
    lien: "https://dorar.net/hadith/sharh/21306",
    autres: "",
  },
];

// 4- L'aumône
const souratesAumone = [2,2,2,2,2,2,2,2,9,];
const versetsAumone = [177,267,268,269,270,271,272,273,60];
const ahadithsAumone = [
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 1503,
    texte: " زَكَاةَ الفِطْرِ",
    lien: "https://dorar.net/hadith/sharh/132064",
  },
];

// 5- Le pélerinage
const souratesPelerinage = [2,3,22,22,22,];
const versetsPelerinage = [196,97,27,28,29,];
const ahadithsPelerinage = [];
