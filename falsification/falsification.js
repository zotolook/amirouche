// 1- L'islam est infalsifiable
const souratesFalsificationInfalsifiable = [
  "Allah promet la préservation du coran",
  15,
  75,
  75,
  "Aucun changement n'est possible !",
  41,
  18,
  "Révélation claire et complète",
  6,
];
const versetsFalsificationInfalsifiable = ["", 9, 17, 18, "", 42, 27, "", 115];
const ahadithsFalsificationInfalsifiable = [];

// 2- Falsification des anciennes écritures
const souratesFalsificationAnciensLivres = [
  "1- L'islam confirme ...",
  2,
  2,
  3,
  5,
  5,
  "2- Le coran affirme la falsification ...",
  2,
  2,
  3,
  4,
  5,
];
const versetsFalsificationAnciensLivres = [
  "les anciennes écritures",
  41,
  97,
  3,
  46,
  48,
  "des anciennes écritures",
  75,
  79,
  78,
  46,
  13,
];
const ahadithsFalsificationAnciensLivres = [];

// 3- Ordre de révélation
const souratesFalsificationOrdreRevelation = [96];
const versetsFalsificationOrdreRevelation = [1];
const ahadithsFalsificationOrdreRevelation = [];

// 4- Le prophète oublie le coran
const souratesFalsificationOubli = [
  "Allah promet que ...",
  87,
  87,
  75,
  75,
  "Possibilité d’abrogation ...",
  2,
  18,
];
const versetsFalsificationOubli = [
  "le prophète n'oubliera pas... sauf...",
  6,
  7,
  17,
  19,
  "ou d’effacement",
  106,
  24,
];
const ahadithsFalsificationOubli = [
  {
    auteur: "El Boukhari  صحيح  البخاري",
    numero: 5042,
    texte: "أذكرَني آيةً كنتُ أُنسيتُها",
    lien: "https://dorar.net/hadith/sharh/84623",
    autres: "مسلم (788)",
  },
  {
    auteur: "El Boukhari  صحيح  البخاري",
    numero: 5032,
    texte: "بِئْسَ ما لأحَدِهِمْ أنْ يَقُولَ: نَسِيتُ آيَةَ",
    lien: "https://dorar.net/hadith/sharh/65237",
    autres: "مسلم (790)",
  },
  {
    auteur: "El Boukhari  صحيح  البخاري",
    numero: 401,
    texte: " إنما أنا بشرٌ ، أَنسى كما تنسَون ، فإذا نسيتُ فذَكِّروني",
    lien: "https://dorar.net/hadith/sharh/141819",
    autres: "مسلم (572)",
  },
  {
    auteur: "Ṭabarī, Tārīkh al-Rusul wa’l-Mulūk (vol. 2, p. 325-327)",
    numero: "vol2. p. 325-327",
    texte:
      "   .كَانَ عَبْدُ اللَّهِ بْنُ أَبِي سَرْحٍ يَكْتُبُ لِلرَّسُولِ ﷺ وَمَرَّتْ عَلَيْهِ آيَةٌ فَكَتَبَهَا فَقَالَ: لَقَدْ أَنْسَانِي رَسُولُ اللَّهِ ﷺ فَذَهَبَ إِلَى الْمُشْرِكِينَ فَأَبْرَزُوا عَلَيْهِ",
    lien: "https://ar.wikisource.org/wiki/%D8%AA%D8%A7%D8%B1%D9%8A%D8%AE_%D8%A7%D9%84%D8%B7%D8%A8%D8%B1%D9%8A/%D9%81%D9%87%D8%B1%D8%B3?utm_source=chatgpt.com",
    autres: "",
  },
];

// 5- Les versets sataniques
const souratesFalsificationVersetsSataniques = [22, 53, 53, 53, 53];
const versetsFalsificationVersetsSataniques = [52, 19, 20, 21, 22];
const ahadithsFalsificationVersetsSataniques = [
  {
    auteur: "El Boukhari  صحيح  البخاري",
    numero: 4862,
    texte:
      "سجد رسولُ اللهِ صلَّى اللهُ عليه وسلَّم فيها – يعني النَّجْمَ – والمسلمونَ ، والمشركونَ ، والجنُّ ، والإنسُ",
    lien: "https://dorar.net/hadith/sharh/39582",
    autres: "الترمذي (575)",
  },
  {
    auteur: "El Boukhari  صحيح  البخاري",
    numero: 3972,
    texte:
      "أنَّهُ قَرَأَ والنَّجْمِ فَسَجَدَ بهَا، وسَجَدَ مَن معهُ، غيرَ أنَّ شيخًا أخَذَ كَفًّا مِن تُرَابٍ فَرَفَعَهُ إلى جَبْهَتِهِ، فَقَالَ: يَكْفِينِي هذا قَالَ عبدُ اللَّهِ: فَلقَدْ رَأَيْتُهُ بَعْدُ قُتِلَ كَافِرًا",
    lien: "https://dorar.net/hadith/sharh/5177",
    autres: "مسلم (576)",
  },

  {
    auteur: "Al-Tabari",
    numero:
      "Jāmiʿ al-Bayān ʿan Taʾwīl Āy al-Qurʾān  Volume : 17 Pages : env. 119–123 Sous le tafsīr de 22:52",
    texte:
      "  حدثنا ابن حميد، قال: حدثنا سلمة، قال: حدثني محمد بن إسحاق، عن يزيد بن زياد المدني، عن محمد بن كعب القرظي قال لما رأى رسول الله ﷺ تولي قومه عنه، وشق عليه ما يرى من مباعدتهم ما جاءهم به من عند الله، تمنى في نفسه أن يأتيه من الله ما يقارب بينه وبين قومه، وكان يسرّه، مع حبه هدايتهم، أن يلين لهم بعض ما غلظ عليهم من أمره، حتى حدثته نفسه بذلك وتمنّاه، فأنزل الله عز وجل: وَالنَّجْمِ إِذَا هَوَى فقرأها رسول الله ﷺ حتى بلغ: أَفَرَأَيْتُمُ اللَّاتَ وَالْعُزَّىٰ وَمَنَاةَ الثَّالِثَةَ الْأُخْرَىٰ فألقى الشيطان على لسانه فيما كان يحدّث به نفسه ويتمنى أن يأتيه به قومه: تلك الغرانيق العلى وإن شفاعتهن لترتجى فلما سمعت قريش ذلك فرحوا، وسرّهم ما ذكر من آلهتهم، فمضى رسول الله ﷺ في قراءته حتى ختم السورة، فسجد، وسجد من في المسجد من المسلمين والمشركين... فلما أمسى أتاه جبريل عليه السلام، فقال: ماذا صنعت؟ تلوت على الناس ما لم آتك به عن الله! فحزن رسول الله ﷺ حزنًا شديدًا، فأنزل الله عز وجل: وَمَا أَرْسَلْنَا مِن قَبْلِكَ مِن رَّسُولٍ وَلَا نَبِيٍّ إِلَّا إِذَا تَمَنَّىٰ أَلْقَى الشَّيْطَانُ فِي أُمْنِيَّتِهِ... (الحج: 52",
    lien: "https://tafsir.app/kashaf/22/52?utm_source=chatgpt.com",
    autres: "",
  },
];

// 6- Omar et le coran
const souratesFalsificationOmarCoran = [
  "قالَ عُمَرُ بنُ الخَطَّابِ رَضِيَ اللَّهُ عنْه:  وافَقْتُ رَبِّي في ثَلَاثٍ",
  2,
  33,
  47,
];
const versetsFalsificationOmarCoran = ["", 125, 59, 38];
const ahadithsFalsificationOmarCoran = [
  {
    auteur: "El Boukhari  صحيح  البخاري",
    numero: 402,
    texte:
      " قالَ عُمَرُ بنُ الخَطَّابِ رَضِيَ اللَّهُ عنْه، وافَقْتُ رَبِّي في ثَلَاثٍ",
    lien: "https://dorar.net/hadith/sharh/130872",
    autres: "مسلم 2399, أحمد (157), ابن حبان (6896)",
  },

  {
    auteur: "El Boukhari  صحيح  البخاري",
    numero: 3285,
    texte:
      "إيهٍ يا ابْنَ الخَطَّابِ، والذي نَفْسِي بيَدِهِ، ما لَقِيَكَ الشَّيْطَانُ سَالِكًا فَجًّا إلَّا سَلَكَ فَجًّا غيرَ فَجِّكَ. ",
    lien: "https://dorar.net/hadith/sharh/14082",
    autres: " مسلم (2396)، وأحمد (1472)، والبزار (4/ 12)",
  },
  {
    auteur: "El Boukhari  صحيح  البخاري",
    numero: 4890,
    texte: " لا أدْرِي الآيَةَ في الحَديثِ أوْ قَوْلُ عَمْرٍو ",
    lien: "https://dorar.net/hadith/sharh/6334",
    autres: "4274, مسلم (2494)",
  },

  {
    auteur: "El Boukhari  صحيح  البخاري",
    numero: 4177,
    texte:
      " قال عمرُ فحرَّكْتُ بعيري ثم تقدَّمْتُ أمامَ الناسِ وخشيتُ أن ينزِلَ فيَّ القرآنُ ",
    lien: "https://dorar.net/hadith/sharh/83317",
    autres: "الترمذي (3262)، ومالك (693/ 224)، وابن حبان (3003)",
  },
  {
    auteur: "El Boukhari  صحيح  البخاري",
    numero: 3242,
    texte: " قُلتُ: لِمَن هذا القَصْرُ؟ قالوا: لِعُمَرَ بنِ الخَطَّابِ",
    lien: "https://dorar.net/hadith/sharh/9752",
    autres: "مسلم (2395)",
  },
  {
    auteur: "El Boukhari  صحيح  البخاري",
    numero: 4795,
    texte: " إنَّه قدْ أُذِنَ لَكُنَّ أنْ تَخْرُجْنَ لِحَاجَتِكُنَّ.",
    lien: "https://dorar.net/hadith/sharh/25946",
    autres: "مسلم (2170)",
  },
  {
    auteur: "El Boukhari  صحيح  البخاري",
    numero: 4432,
    texte:
      "قالَ عُمَرُ: إنَّ النبيَّ صَلَّى اللهُ عليه وسلَّمَ غَلَبَهُ الوَجَعُ وعِنْدَكُمُ القُرْآنُ فَحَسْبُنَا كِتَابُ اللَّهِ ",
    lien: "https://dorar.net/hadith/sharh/2314",
    autres: "مسلم (1637)",
  },
  {
    auteur: "El Boukhari  صحيح  البخاري",
    numero: 4795,
    texte:
      "كانَ عُمَرُ بنُ الخَطَّابِ يقولُ لِرَسولِ اللَّهِ صَلَّى اللهُ عليه وسلَّمَ: احْجُبْ نِسَاءَكَ، قالَتْ: فَلَمْ يَفْعَلْ",
    lien: "https://dorar.net/hadith/sharh/25945",
    autres: " مسلم (2170)، وأحمد (25866)، والبيهقي (13634)",
  },
  {
    auteur: "El Boukhari  صحيح  البخاري",
    numero: 1242,
    texte:
      "فمَن كانَ مِنكُم يَعْبُدُ مُحَمَّدًا صلَّى اللهُ عليه وسلَّمَ، فإنَّ مُحَمَّدًا صلَّى اللهُ عليه وسلَّمَ قدْ مَاتَ، ومَن كانَ يَعْبُدُ اللَّهَ، فإنَّ اللَّهَ حَيٌّ لا يَمُوتُ",
    lien: "https://dorar.net/h/iiQw421k?sims=1",
    autres: " ",
  },
  {
    auteur: "El Boukhari  صحيح  البخاري",
    numero: 3808,
    texte:
      "خُذوا القُرآنَ مِن أربعةٍ رجُلَيْنِ مِن المُهاجِرينَ ورجُلَيْنِ مِن الأنصارِ مِن عبدِ اللهِ بنِ مسعودٍ وسالِمٍ مولى أبي حُذَيْفةَ وأُبَيِّ بنِ كعبٍ ومُعاذِ بنِ جَبَلٍ",
    lien: "https://dorar.net/hadith/sharh/1694",
    autres: "مسلم (2464) ",
  },
];

// 7- Les versets perdus
const souratesFalsificationVersetsPerdus = [
  "1.L'adultère",
  115,

  "2.L'allaitement de l'adulte",
  115,
  "",
];
const versetsFalsificationVersetsPerdus = [
  "آيَةُ الرَّجْمِ ",
  1,

  "  آيَةُ رضاع الكبير ",
  2,

  "Pour plus de détails, voir les hadiths!",
];
const ahadithsFalsificationVersetsPerdus = [
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 6829,
    texte:
      " والشَّيْخُ وَالشَّيخةُ إذا زَنَيَا فارْجُموهما الْبتَّةَ نَكالًا مِن اللهِ",
    lien: "https://dorar.net/hadith/sharh/11777",
    autres: "مسلم (1691)",
  },
  {
    auteur: "El Boukhari  صحيح  البخاري",
    numero: 4862,
    texte:
      "سجد رسولُ اللهِ صلَّى اللهُ عليه وسلَّم فيها – يعني النَّجْمَ – والمسلمونَ ، والمشركونَ ، والجنُّ ، والإنسُ",
    lien: "https://dorar.net/hadith/sharh/39582",
    autres: "الترمذي (575)",
  },
  {
    auteur: "El Boukhari  صحيح  البخاري",
    numero: 3972,
    texte:
      "أنَّهُ قَرَأَ والنَّجْمِ فَسَجَدَ بهَا، وسَجَدَ مَن معهُ، غيرَ أنَّ شيخًا أخَذَ كَفًّا مِن تُرَابٍ فَرَفَعَهُ إلى جَبْهَتِهِ، فَقَالَ: يَكْفِينِي هذا قَالَ عبدُ اللَّهِ: فَلقَدْ رَأَيْتُهُ بَعْدُ قُتِلَ كَافِرًا",
    lien: "https://dorar.net/hadith/sharh/5177",
    autres: "مسلم (576)",
  },

  {
    auteur: "Al-Tabari",
    numero:
      "Jāmiʿ al-Bayān ʿan Taʾwīl Āy al-Qurʾān  Volume : 17 Pages : env. 119–123 Sous le tafsīr de 22:52",
    texte:
      "  حدثنا ابن حميد، قال: حدثنا سلمة، قال: حدثني محمد بن إسحاق، عن يزيد بن زياد المدني، عن محمد بن كعب القرظي قال لما رأى رسول الله ﷺ تولي قومه عنه، وشق عليه ما يرى من مباعدتهم ما جاءهم به من عند الله، تمنى في نفسه أن يأتيه من الله ما يقارب بينه وبين قومه، وكان يسرّه، مع حبه هدايتهم، أن يلين لهم بعض ما غلظ عليهم من أمره، حتى حدثته نفسه بذلك وتمنّاه، فأنزل الله عز وجل: وَالنَّجْمِ إِذَا هَوَى فقرأها رسول الله ﷺ حتى بلغ: أَفَرَأَيْتُمُ اللَّاتَ وَالْعُزَّىٰ وَمَنَاةَ الثَّالِثَةَ الْأُخْرَىٰ فألقى الشيطان على لسانه فيما كان يحدّث به نفسه ويتمنى أن يأتيه به قومه: تلك الغرانيق العلى وإن شفاعتهن لترتجى فلما سمعت قريش ذلك فرحوا، وسرّهم ما ذكر من آلهتهم، فمضى رسول الله ﷺ في قراءته حتى ختم السورة، فسجد، وسجد من في المسجد من المسلمين والمشركين... فلما أمسى أتاه جبريل عليه السلام، فقال: ماذا صنعت؟ تلوت على الناس ما لم آتك به عن الله! فحزن رسول الله ﷺ حزنًا شديدًا، فأنزل الله عز وجل: وَمَا أَرْسَلْنَا مِن قَبْلِكَ مِن رَّسُولٍ وَلَا نَبِيٍّ إِلَّا إِذَا تَمَنَّىٰ أَلْقَى الشَّيْطَانُ فِي أُمْنِيَّتِهِ... (الحج: 52",
    lien: "https://tafsir.app/kashaf/22/52?utm_source=chatgpt.com",
    autres: "",
  },
];

// 8- Les sept lectures
const souratesFalsificationSeptLectures = [];
const versetsFalsificationSeptLectures = [];
const ahadithsFalsificationSeptLectures = [
  {
    auteur: "El Boukhari  صحيح  البخاري",
    numero: 6936,
    texte:
      " إنَّ هذا القُرْآنَ أُنْزِلَ علَى سَبْعَةِ أحْرُفٍ، فاقْرَؤُوا ما تَيَسَّرَ منه.",
    lien: "https://dorar.net/hadith/sharh/626",
    autres: "مسلم (818)",
  },
];

// 9- Le coran incomplet
const souratesFalsificationCoranIncomplet = [
  "سورة الأحزاب كانت تعدل البقرة",
  115,
  115,
  1115,
  " المعوذتين ليستا من كتاب الله",
  "",
];
const versetsFalsificationCoranIncomplet = [
  "",
  3,
  4,
  5,
  "Pour plus d'infos: voir les ahadiths",
  "voir: Tafsir al-Tabari (Jāmiʿ al-Bayān), au début du tafsīr de سورة الفلق et سورة الناس ",
];
const ahadithsFalsificationCoranIncomplet = [
  {
    auteur: "صحيح مسلم",
    numero: 1050,
    texte:
      "... وإنَّا كُنَّا نَقْرَأُ سُورَةً كُنَّا نُشَبِّهُهَا في الطُّولِ وَالشِّدَّةِ ببَرَاءَةَ ... ",
    lien: "https://dorar.net/hadith/sharh/21256",
    autres: "كتاب الزكاة – باب لو أن لابن آدم واديين من مالحديث رقم 1050",
  },
  {
    auteur: "أخرجه أحمد",
    numero: 21207,
    texte:
      " كم تَعدونَ سورةَ الأحزابِ ؟ قلْتُ : إمَّا ثلاثًا وسبعينَ آيةً أو أربعًا وسبعينَ آيةً قال : إن كانَتْ لتُقارنُ سورةَ البقرةِ... ",
    lien: "https://dorar.net/hadith/sharh/215758#:~:text=%D9%86%D8%A7%D8%B3%D8%AE%20%D8%A7%D9%84%D8%AD%D8%AF%D9%8A%D8%AB%20%D9%88%D9%85%D9%86%D8%B3%D9%88%D8%AE%D9%87-,%2D%20%D9%82%D8%A7%D9%84%20%D9%84%D9%8A%20%D8%A3%D8%A8%D9%8A%20%D8%A8%D9%86%D9%8F%20%D9%83%D8%B9%D8%A8%D9%8D%20%D9%83%D9%85%20%D8%AA%D9%8E%D8%B9%D8%AF%D9%88%D9%86%D9%8E%20%D8%B3%D9%88%D8%B1%D8%A9%D9%8E%20%D8%A7%D9%84%D8%A3%D8%AD%D8%B2%D8%A7%D8%A8%D9%90%20%D8%9F,%D9%85%D9%86%D9%8E%20%D8%A7%D9%84%D9%84%D9%87%D9%90%20%D9%88%D8%A7%D9%84%D9%84%D9%87%D9%8F%20%D8%B9%D8%B2%D9%8A%D8%B2%D9%8C%20%D8%AD%D9%83%D9%8A%D9%85%D9%8C",
    autres: "النسائي في ((الكبرى)) (7112)، والحاكم (8068)",
  },
  {
    auteur: "El Boukhari  صحيح  البخاري",
    numero: 6838,
    texte: " لا ترغَبوا عن آبائِكم فإنَّ كفرًا بكم أنْ ترغَبوا عن آبائِكم ",
    lien: "https://dorar.net/hadith/sharh/7681",
    autres: "مسلم (1691)",
  },
  {
    auteur: "Tafsir al-Tabari تفسير الطبري",
    numero: "أواخر التفسير – الجزء الثلاثون",
    texte: "المعوذتين ليستا من كتاب الله",
    lien: "chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/https://www.emaanlibrary.com/wp-content/uploads/2019/05/113-114FalaqNas.pdf?utm_source=chatgpt.com",
    autres:
      " مسند أحمد – مسند عبد الله بن مسعودتفسير الطبري – تفسير سورتي الفلق والناس",
  },
];

// 10- Les différences entre les corans
const souratesFalsificationDifferences = [
  ` <span class="titreDifferences"> أمثلة لِلفروق بين رواية ورش و حفص </span>`,
  
  ` <span class="versets">سورة الفاتحة (L’Ouverture) – 1:4 </span>`,
  ` <span class="versets">  سورة البقرة (La Vache) – 2:125 </span>`,
  ` <span class="versets">  سورة البقرة (La Vache) – 2:184 </span>`,
  ` <span class="versets"> سورة الأنبياء (Les Prophètes) – 21:4</span>`,
  ` <span class="versets"> سورة الزخرف (L’Ornement) – 43:19 </span>`,
  ` <span class="versets"> سورة الحديد (Le Fer) – 57:24 </span>`,
  
  ` <span class="versets"> </span>`,
  ` <span class="versets"> </span>`,
  ` <span class="versets"> </span>`,
  ` <span class="versets"> </span>`,
  ` <span class="versets"> </span>`,
];
const versetsFalsificationDifferences = [
  ` <span class="titreDifferences">Exemples de dfférences entre Warch et Haf's </span>`,
  
  
  `حفص: <span class="titreDifferences">Maître مَالِكِ</span> يَوْمِ الدِّينِ</br> ورش: <span class="titreDifferences">Roi مَلِكِ</span> يَوْمِ الدِّينِ`,
  `حفص: <span class="titreDifferences"> وَاتَّخِذُوا</span> مِن مَّقَامِ إِبْرَاهِيمَ مُصَلًّى</br> ورش: <span class="titreDifferences"> وَاتَّخَذُوا</span> مِن مَّقَامِ إِبْرَاهِيمَ مُصَلًّى`,

  `حفص: فِدْيَةٌ طَعَامُ <span class="titreDifferences">مِسْكِينٍ  </span> </br> ورش:  فِدْيَةٌ طَعَامُ<span class="titreDifferences"> مَسَاكِينَ</span> `,
  `حفص: <span class="titreDifferences"> قَالَ</span> رَبِّي يَعْلَمُ</br> ورش: <span class="titreDifferences"> قُلْ</span> رَبِّي يَعْلَمُ`,
  `حفص: <span class="titreDifferences">عِبَادُ </span> الرَّحْمَٰنِ </br> ورش: <span class="titreDifferences"> عِندَ</span> الرَّحْمَٰنِ`,
  `حفص:فَإِنَّ اللَّهَ <span class="titreDifferences">هُوَ </span> الْغَنِيُّ الْحَمِيدُ</br> ورش: <span class="titreDifferences"> </span> فَإِنَّ اللَّهَ الْغَنِيُّ الْحَمِيدُ`,
  `حفص: <span class="titreDifferences"> </span> </br> ورش: <span class="titreDifferences"> </span> `,
  `حفص: <span class="titreDifferences"> </span> </br> ورش: <span class="titreDifferences"> </span> `,
  `حفص: <span class="titreDifferences"> </span> </br> ورش: <span class="titreDifferences"> </span> `,
];
const ahadithsFalsificationDifferences = [];

