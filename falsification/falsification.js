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
  {
    auteur: "صحيح أبي داود",
    numero: 1477,
    texte:
      " قرأ أبيٌّ آيةً وقرأ ابنُ مسعودٍ آيةً خلافَها وقرأ رجلٌ آخرُ خلافَهُما ...",
    lien: "https://dorar.net/hadith/sharh/138192",
    autres: "التمهيد | الصفحة أو الرقم : 8/282",
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

  // 1- Différences de voyelles
  `<span class="titreType"> 1- Différences de voyelles. (sens différent)</span>`,
  ` <span class="versets"> 📖 سورة الفاتحة (L’Ouverture) – 1:4 </span>`,
  ` <span class="versets"> 📖 سورة البقرة — Al-Baqara 2:222 </span>`,

  // 2- Différences de personne / pronom (ضمائر)
  `<span  class="titreType"> 2- Différences de personne / pronom </span >`,
  ` <span class="versets">📖 Maryam — سورة مريم — 19:19</span>`,
  ` <span class="versets"> 📖 Al Imran — سورة آل عمران — 3:81</span>`,
  ` <span class="versets"> 📖 Al-Baqara — سورة البقرة — 2:140 </span>`,
  ` <span class="versets"> 📖 Al-Hijr — سورة الحجر — 15:8 </span>`,
  ` <span class="versets"> 📖 سورة البقرة — Al-Baqara 2:85 </span>`,
  ` <span class="versets"> 📖 سورة الفتح — Al-Fatḥ 48:17 </span>`,
  ` <span class="versets"> 📖 سورة الأنبياء — Al-Anbiyā’ 21:4 </span>`,
  ` <span class="versets"> 📖 سورة سبأ — Saba’ 34:19 </span>`,
  ` <span class="versets"> 📖 سورة البقرة (La Vache) – 2:125 </span>`,
  ` <span class="versets"> 📖 Sourate آل عمران — Āl-‘Imrān (La Famille d’Imran) 3:146 </span>`,
  ` <span class="versets"> 📖 Sourate الحجر — Al‑Ḥijr 15:8 </span>`,
  ` <span class="versets"> 📖 Al-Baqara — سورة البقرة — 2:259 </span>`,

  // 3- Différences de consonne (lettres/mots différents)
  `<span  class="titreType"> 3- Différences de consonne (lettres/mots différents) </span >`,
  ` <span class="versets"> 📖 سورة الشورى — Ash-Shūrā 42:30</span>`,
  ` <span class="versets"> 📖 Az-Zukhruf — سورة الزخرف — 43:19 </span>`,
  ` <span class="versets"> 📖 سورة الأحزاب — Al-Aḥzāb 33:68 </span>`,
  ` <span class="versets"> 📖 سورة الحديد — Al-Ḥadīd 57:24 </span>`,
  ` <span class="versets"> 📖 سورة البقرة — Al-Baqara 2:10 </span>`,

  // 4- Différence d’ajout ou omission de lettre
  `<span  class="titreType"> 4- Différence d’ajout </span >`,
  ` <span class="versets"> 📖 سورة آل عمران — Āl-ʿImrān 3:133 </span>`,
  ` <span class="versets"> 📖 Al-Baqara — سورة البقرة — 2:125 </span>`,
  ` <span class="versets"> 📖 Sourate الأنفال — Al-Anfāl 8:60 </span>`,

  // 5- Différences singulier/pluriel
  `<span  class="titreType"> 5- Différences singulier/pluriel </span >`,
  ` <span class="versets"> 📖 سورة البقرة — Al-Baqara (La Vache) 2:184 </span>`,
  ` <span class="versets"> 📖 سورة البقرة — Al-Baqara (La Vache) 2:164 </span>`,
  ` <span class="versets"> 📖 سورة يونس — Yūnus (Jonas) 10:33 </span>`,
  ` <span class="versets"> 📖 سورة النور — An-Nūr (La Lumière) 24:36 </span>`,
  ` <span class="versets"> 📖 سورة المؤمنون — Al-Mu’minūn (Les Croyants) 23:8 </span>`,
  ` <span class="versets"> 📖 سورة الأنعام — Al-An‘ām (Les Bestiaux) 6:153 </span>`,
  ` <span class="versets"> 📖 سورة سبأ — Saba’ (Saba) 34:3 </span>`,
  ` <span class="versets"> 📖 سورة الأنعام — Al-An‘ām (Les Bestiaux) 6:124 </span>`,
  ` <span class="versets"> 📖 Sourate البقرة — Al-Baqara 2:285 </span>`,

  // 6- Différences / erreurs grammaticales
  `<span  class="titreType"> 6- Différences / erreurs grammaticales </span>`,
  ` <span class="versets"> 📖 سورة الأنبياء — Al-Anbiyā’ 21:105 </span>`,
  ` <span class="versets"> 📖 سورة الحج — Al-Ḥajj 22:19 </span>`,
  ` <span class="versets"> 📖 سورة النور — An-Nūr 24:4 </span>`,
  ` <span class="versets"> 📖 سورة سبأ — Saba’ 34:19 </span>`,
];
const versetsFalsificationDifferences = [
  ` <span class="titreDifferences">Exemples de dfférences entre Warch et Haf's </span>`,
  // 1- Différences de voyelles
  `<span  class="titreType"> حركات </span>`,
  ` Haf's: « Maître du Jour du Jugement » حفص: <span class="titreDifferences"> مَالِكِ</span> يَوْمِ الدِّينِ</br> Warch: « Roi du Jour du Jugement » ورش: <span class="titreDifferences"> مَلِكِ</span> يَوْمِ الدِّينِ`,

  `Haf's: « jusqu’à ce qu’elles deviennent pures » حفص: حَتَّىٰ <span class="titreDifferences"> يَطْهُرْنَ </span> </br>Warch: « jusqu’à ce qu’elles se purifient » ورش: حَتَّىٰ <span class="titreDifferences"> يَطَّهَّرْنَ </span> `,

  // 2- Différences de personne / pronom (ضمائر)
  `<span  class="titreType"> ضمائر</span>`,
  `Haf's: « afin que Je t’accorde » حفص:  <span class="titreDifferences">  لِأَهَبَ </span> لَكِ  </br> Warch: « afin qu’Il t’accorde » ورش:  <span class="titreDifferences"> لِيَهَبَ</span> لَكِ`,
  `Haf's: « Je vous ai donné » حفص: <span class="titreDifferences"> آتَيْتُكُمْ </span>  </br>Warch: « Nous vous avons donné » ورش: <span class="titreDifferences"> آتَيْنَاكُمْ </span> `,
  `Haf's: « vous dites » حفص: <span class="titreDifferences"> تَقُولُونَ </span> </br>Warch: « ils disent »  ورش: <span class="titreDifferences"> يَقُولُونَ </span> `,
  `Haf's: « Nous ne faisons pas descendre » حفص: <span class="titreDifferences"> مَا نُنَزِّلُ </span> </br>Warch: « Ils ne descendent pas » ورش: <span class="titreDifferences"> مَا تَنَزَّلُ </span> `,
  `Haf's: « pour ce que vous faisiez » حفص: بِمَا <span class="titreDifferences"> كُنتُمْ تَعْمَلُونَ </span> </br>Warch: « pour ce qu’ils faisaient » ورش: بِمَا <span class="titreDifferences"> كَانُوا يَعْمَلُونَ </span> `,
  `Haf's: « Il le fera entrer dans des jardins » حفص: <span class="titreDifferences"> يُدْخِلْهُ </span> جَنَّاتٍ </br>Warch: « Nous le ferons entrer dans des jardins » ورش: <span class="titreDifferences"> نُدْخِلْهُ </span> جَنَّاتٍ `,
  `Haf's: « Il dit : Mon Seigneur sait » حفص: <span class="titreDifferences"> قَالَ </span> رَبِّي يَعْلَمُ </br>Warch: « Dis : Mon Seigneur sait » ورش: <span class="titreDifferences"> قُل </span> رَبِّي يَعْلَمُ`,
  `Haf's: « Notre Seigneur, éloigne nos voyages » حفص: رَبَّنَا <span class="titreDifferences"> بَاعِدْ </span> بَيْنَ أَسْفَارِنَا </br>Warch: « Notre Seigneur a éloigné nos voyages » ورش: رَبُّنَا <span class="titreDifferences"> بَاعَدَ </span> بَيْنَ أَسْفَارِنَا `,
  `Haf's: « Prenez ! » حفص: <span class="titreDifferences"> وَاتَّخِذُوا</span> مِن مَّقَامِ إِبْرَاهِيمَ مُصَلًّى</br>Warch: « Ils ont pris » ورش: <span class="titreDifferences"> وَاتَّخَذُوا</span> مِن مَّقَامِ إِبْرَاهِيمَ مُصَلًّى`,
  `Haf's: « Combien de prophètes ont combattu avec eux… » حفص: <span class="titreDifferences"> قَاتَلَ </span> مَعَهُ رِبِّيُّونَ كَثِيرٌ </br>Warch: « Combien de prophètes furent tués avec eux… » ورش: <span class="titreDifferences"> قُتِلَ </span> مَعَهُ رِبِّيُّونَ كَثِيرٌ`,
  `Haf's: « Nous ne descendons pas vers eux… » حفص: <span class="titreDifferences"> مَا نُنَزِّلُ </span> إِلَيْهِم </br>Warch:« Tu ne descends pas vers eux… » ورش: <span class="titreDifferences"> مَا تَنَزَّلُ </span> إِلَيْهِم`,
  `Haf's: « Nous la reconstituons » حفص: <span class="titreDifferences"> نُنْشِزُهَا </span> </br>Warch: « Nous la ressuscitons / déployons » ورش: <span class="titreDifferences"> نُنْشِرُهَا </span> `,

  // 3- Différences de consonne (lettres/mots différents)
  `<span  class="titreType">(lettres/mots différents)</span>`,
  `Haf's: « Alors, à cause de ce que vos mains ont acquis » حفص: <span class="titreDifferences"> فَبِمَا </span> كَسَبَتْ أَيْدِيكُمْ </br>Warch: « À cause de ce que vos mains ont acquis » ورش: <span class="titreDifferences"> بِمَا </span> كَسَبَتْ أَيْدِيكُمْ`,
  `Haf's: « les serviteurs du Tout Miséricordieux » حفص: <span class="titreDifferences"> عِبَادُ الرَّحْمَٰنِ </span> </br>Warch: « auprès du Tout Miséricordieux » ورش: <span class="titreDifferences"> عِندَ الرَّحْمَٰنِ </span> `,
  `Haf's: « un grand châtiment » حفص: عَذَابًا<span class="titreDifferences"> كَبِيرًا </span> </br>Warch: « un châtiment abondant » ورش: عَذَابًا <span class="titreDifferences"> كَثِيرًا </span> `,
  `Haf's: « Car Allah est, Lui, le Riche » حفص: فَإِنَّ اللَّهَ<span class="titreDifferences"> هُوَ </span> الْغَنِيُّ </br>Warch: « Car Allah est le Riche » ورش: <span class="titreDifferences"> </span> فَإِنَّ اللَّهَ الْغَنِيُّ`,
  `Haf's: « pour ce qu’ils mentaient » حفص: بِمَا <span class="titreDifferences"> كَانُوا يَكْذِبُونَ </span> </br>Warch: « pour ce qu’ils mentaient » ورش: بِمَا <span class="titreDifferences"> كَذَّبُوا </span> `,

  // 4- Différence d’ajout ou omission de lettres / mots
  `<span  class="titreType">ou omission de lettre</span>`,
  `Haf's: « Et hâtez-vous vers » حفص: <span class="titreDifferences"> وَ </span> سَارِعُوا إِلَىٰ </br>Warch: « Hâtez-vous vers » ورش: <span class="titreDifferences"> </span> سَارِعُوا إِلَىٰ`,
  `حفص:فَإِنَّ اللَّهَ <span class="titreDifferences">هُوَ </span> الْغَنِيُّ الْحَمِيدُ</br> ورش: <span class="titreDifferences"> </span> فَإِنَّ اللَّهَ الْغَنِيُّ الْحَمِيدُ`,
  `Haf's: « Préparez pour eux tout ce que vous pouvez… » حفص: <span class="titreDifferences"> </span> وَأَعِدُّوا لَهُم مَا اسْتَطَعْتُم </br>Warch: « Préparez pour eux tout ce que vous pouvez de force… » ورش: وَأَعِدُّوا لَهُم مَا اسْتَطَعْتُم <span class="titreDifferences"> مِن قُوَّةٍ </span> `,

  // 5- Différences singulier/pluriel
  `<span  class="titreType"> مفرد / جمع </span>`,
  `Haf's: « une compensation, la nourriture d’un pauvre » حفص: فِدْيَةٌ طَعَامُ <span class="titreDifferences">مِسْكِينٍ  </span> </br> Warch: « … la nourriture de pauvres (plusieurs) ورش:  فِدْيَةٌ طَعَامُ<span class="titreDifferences"> مَسَاكِينَ</span> `,
  `Haf's: « les vents » حفص: وَتَصْرِيفِ <span class="titreDifferences"> الرِّيَاحِ </span> </br>Warch: « le vent »  ورش: وَتَصْرِيفِ<span class="titreDifferences"> الرِّيحِ </span> `,
  `Haf's: « la parole de ton Seigneur » حفص: <span class="titreDifferences"> كَلِمَةُ </span> رَبِّكَ </br> Warch: « les paroles de ton Seigneur » ورش:  <span class="titreDifferences">كَلِمَاتُ  </span> رَبِّكَ `,
  `Haf's: « dans des maisons » حفص: فِي <span class="titreDifferences"> بُيُوتٍ </span> </br>Warch: « dans une maison » ورش: فِي <span class="titreDifferences"> بَيْتٍ </span> `,
  `Haf's: « leurs dépôts (pluriel) » حفص: <span class="titreDifferences"> لِأَمَانَاتِهِمْ </span> </br>Warch: « leur dépôt (singulier collectif) » ورش: <span class="titreDifferences"> لِأَمَانَتِهِمْ </span> `,
  `Haf's: « ne suivez pas les chemins » حفص: وَلَا تَتَّبِعُوا <span class="titreDifferences"> السُّبُلَ </span> </br>Warch: « le chemin » ورش: <span class="titreDifferences"> السَّبِيل </span> `,
  `Haf's: « Connaisseur de l’invisible » حفص: عَالِمِ <span class="titreDifferences"> الْغَيْبِ </span> </br>Warch: « Connaisseur des invisibles » ورش: عَالِمِ <span class="titreDifferences"> الْغُيُوبِ </span> `,
  `Haf's: « Son message » حفص: <span class="titreDifferences">رِسَالَتَهُ  </span> </br>Warch: « Ses messages » ورش: <span class="titreDifferences"> رِسَالَاتِهِ </span> `,
  `Haf's: « le Messager de Dieu » حفص: <span class="titreDifferences"> رَسُولُ </span> اللَّهِ </br>Warch: « les Messagers de Dieu » ورش: <span class="titreDifferences">رَسُلُ </span> اللَّهِ`,

  // 6- Différences / erreurs grammaticales
  `<span  class="titreType"> مفرد / جمع </span>`,
  `Haf's: « Mes serviteurs vertueux » حفص: <span class="titreDifferences"> عِبَادِيَ </span> الصَّالِحُونَ </br>Warch: « Mon serviteur vertueux » ورش: <span class="titreDifferences"> عَبْدِيَ </span> الصَّالِحُونَ `,
  `Haf's: « Deux adversaires qui se disputèrent » حفص: خَصْمَانِ <span class="titreDifferences"> اخْتَصَمُوا </span> </br>Warch: « Deux adversaires qui se disputèrent » ورش: خَصْمَانِ <span class="titreDifferences"> اخْتَصَمَا </span> `,
  `Haf's: « avec quatre témoins » حفص: بِأَرْبَعَةِ <span class="titreDifferences"> شُهَدَاءَ </span> </br>Warch: « avec quatre témoins » ورش: بِأَرْبَعَةِ <span class="titreDifferences"> شَهِيدٍ </span> `,
  `Haf's: « entre nos voyages » حفص: بَيْنَ <span class="titreDifferences"> أَسْفَارِنَا </span> </br>Warch: « entre notre voyage » ورش: بَيْنَ <span class="titreDifferences">سَفَرِنَا  </span> `,
];
const ahadithsFalsificationDifferences = [];

// 11- Les erreurs d'orthographe الأخطاء الإملائية
const souratesFalsificationOrthographe = [
  ` <span class="versets"> 📖 Sourate 20 (طه), verset 63 </span>`,
  ` <span class="versets"> 📖 Sourate 5 (المائدة), verset 69 </span>`,
  ` <span class="versets"> 📖 Sourate 4 (النساء), verset 162 </span>`,
  ` <span class="versets"> 📖 Sourate 2 (البقرة), verset 43 </span>`,
  ` <span class="versets"> 📖 Sourate 51 (الذاريات), verset 47 </span>`,

  ` <span class="versets"> 📖 Sourate 2 (البقرة), verset 29 </span>`,
  ` <span class="versets"> 📖 Sourate 4 (النساء), verset 103 </span>`,
  ` <span class="versets"> 📖 Sourate 22 – الحج (Al-Ḥajj) Verset 19 </span>`,
  ` <span class="versets"> 📖 Sourate 2 (البقرة), verset 124 </span>`,
  ` <span class="versets"> 📖 Sourate 7 (الأعراف), verset 160 </span>`,

  ` <span class="versets"> 📖 Sourate 24 (النور), verset 31 </span>`,
  ` <span class="versets"> 📖 Sourate 2 (البقرة), verset 177 </span>`,
  ` <span class="versets"> 📖 </span>`,
  ` <span class="versets"> 📖 </span>`,
];
const versetsFalsificationOrthographe = [
  ` إِنْ هَذَانِ لَسَاحِرَانِ / <span class="titreDifferences"> إِنَّ هذين لساحرين </span> `,
  ` وَالصَّابِئُونَ وَالنَّصَارَى / <span class="titreDifferences"> وَالصَّابئينَ وَالنَّصَارَى </span> `,
  `  وَالْمُقِيمِينَ الصَّلَاةَ / <span class="titreDifferences"> وَالْمُقِيمُونَ الصَّلَاةَ </span> `,
  ` وَأَقِيمُوا الصَّلْوَةَ وَآتُوا الزَّكْوَةَ / <span class="titreDifferences"> وَأَقِيمُوا الصَّلَاةَ وَآتُوا الزَّكَاةَ </span> `,
  ` وَالسَّمَاءَ بَنَيْنَاهَا بِأَيِّيْدٍ / <span class="titreDifferences"> وَالسَّمَاءَ بَنَيْنَاهَا </span> `,

  `  هُوَ الَّذِي خَلَقَ السَّمَاوَاتِ وَالأَرْضَ وَمَا بَيْنَهُمَا / <span class="titreDifferences"> هُوَ الَّذِي خَلَقَ السَّمَاءَ وَالأَرْضَ وَمَا بَيْنَهُمَا </span> `,
  ` إِنَّ الصَّلْوَةَ كَانَتْ عَلَى الْمُؤْمِنِينَ كِتَابًا مَوْقُوتًا / <span class="titreDifferences"> إِنَّ الصَّلَاةَ كَانَتْ عَلَى الْمُؤْمِنِينَ كِتَابًا مَوْقُوتًا </span> `,
  ` هَذَانِ خَصْمَانِ اخْتَصَمُوا / <span class="titreDifferences"> هَذَانِ خَصْمَانِ اخْتَصَمَا </span> `,
  `  لَا يَنَالُ عَهْدِي الظَّالِمِينَ/ <span class="titreDifferences">  لَا يَنَالُ عَهْدِي الظَّالِمُونَ </span> `,
  `   اثْنَتَيْ عَشْرَةَ أَسْبَاطًا /  <span class="titreDifferences"> اثْنَتَيْ عَشْرَةَ سِبْطًا </span> `,

  ` أَوِ الطِّفْلِ الَّذِينَ لَمْ يَظْهَرُوا / <span class="titreDifferences"> أَوِ الطِّفْلِ الَّذِي لَمْ يَظْهَرْ</span> `,
  ` وَالْمُوفُونَ بِعَهْدِهِمْ / <span class="titreDifferences"> وَالْمُوفِينَ بِعَهْدِهِمْ</span> `,
  `  / <span class="titreDifferences">  </span> `,
  `  / <span class="titreDifferences">  </span> `,
];
const ahadithsFalsificationOrthographe = [];

// 12- L'apostasie de Abd ellah ibn sarh
const souratesFalsificationApostasie = [23,23,23, 6,];
const versetsFalsificationApostasie = [12,13,14, 93,];
const ahadithsFalsificationApostasie = [
  {
    auteur: "صحيح أبي داود",
    numero: 4359,
    texte: " أما كان فيكم رجلٌ رشيدٌ ... عبدُ اللهِ بنُ أبي السَّرحِ",
    lien: "https://dorar.net/hadith/sharh/30712",
    autres:
      " https://tafsir.app/tabari/6/92?utm_source=chatgpt.com النسائي (4067)، والحاكم (4360)",
    Tabari: "https://tafsir.app/tabari/6/92?utm_source=chatgpt.com",
  },
];