// 1. Achat et vente des esclaves
const souratesEsclavageAutorise = [ 2, 4,16, 16, 24, 24, 30,33,];
const versetsEsclavageAutorise = [ 178,3,  75,76,  32,33,28,50,];
const ahadithsEsclavageAutorise = [
  {
    sujet: " Le prophète achète des esclaves",
    auteur: " صحيح أبي داود",
    numero: 15001,
    texteArabe:
      " أنَّ النَّبيَّ صلَّى اللَّهُ عليْهِ وسلَّمَ اشترى عبدًا بعبدينِ",
    texteFrancais:
      " Le Prophète a acheté un esclave contre deux esclaves noirs.",
    lien: "https://dorar.net/hadith/sharh/33054",
    autres:
      "الترمذي (1596)، والنسائي (4184)، وابن ماجه (2869) أحمد (15001) مسلم (1602)",
  },
  {
    sujet: " Le prophète vend des esclaves",
    auteur: " صحيح البخاري",
    numero: 6716,
    texteArabe: " فقال النَّبيُّ صلَّى اللهُ عليه وسلَّم: مَن يَشتَريه مِنِّي؟",
    texteFrancais:
      " Le Prophète dit (à propos d’un esclave) : « Qui veut l’acheter de moi ? »",
    lien: "https://dorar.net/hadith/sharh/15197",
    autres: "مسلم (997) أبو داود (3957)، والنسائي (4652)",
  },
  {
    sujet: " Le prophète affranchit des esclaves!",
    auteur: " صحيح مسلم",
    numero: 1668,
    texteArabe: "  أقرعَ بينَهُم فأعتقَ اثنينِ وأرَقَّ أربعةً",
    texteFrancais:
      " Un homme affranchit six esclaves au moment de sa mort, sans avoir d’autres biens. Lorsque cela parvint au Prophète ﷺ, il le blâma sévèrement, puis fit venir les esclaves, les divisa en trois parts, et en affranchit deux, laissant quatre en esclavage.",
    lien: "https://dorar.net/hadith/sharh/85652",
    autres: "  ابن حزم 8/300",
  },
];

// 2. Le mariage avec les esclaves
const souratesEsclavageMariage = [2,4,4,24,];
const versetsEsclavageMariage = [221,3,25,32,];
const ahadithsEsclavageMariage = [
  {
    sujet: " Récompense pour celui qui épouse une esclave",
    auteur: " صحيح البخاري",
    numero: 3446,
    texteArabe: " إذا أدَّبَ الرَّجُلُ أمَتَه فأحسَنَ تَأديبَها ",
    texteFrancais:
      " Celui qui possède une esclave, l’éduque correctement, lui enseigne correctement, puis l’affranchit et l’épouse, aura deux récompenses.",
    lien: "https://dorar.net/hadith/sharh/7288",
    autres: "مسلم (154))",
  },
  {
    sujet: " Mariage des esclaves",
    auteur: " صحيح أبي داود ",
    numero: 2078,
    texteArabe: " أيُّما عبدٍ تزوَّجَ بغيرِ إذنِ مواليهِ فَهوَ عاهرٌ. ",
    texteFrancais:
      "Tout esclave qui se marie sans la permission de ses maîtres est considéré comme fornicateur. ",
    lien: "https://dorar.net/hadith/sharh/85240",
    autres: "الترمذي (1112)، وأحمد (15031)",
  },
  {
    sujet: " Mariage des esclaves",
    auteur: " صحيح أبي داود ",
    numero: 496,
    texteArabe:
      " إذا زوَّجَ أحدُكم جاريتَهُ عبدَهُ أو أجِيرَهُ فلا يَنظُرْ إلى ما دونَ السُّرَّةِ والرُّكبةِ فإنَّه عورةٌ ",
    texteFrancais:
      "Lorsque l’un de vous marie son esclave à sa servante, qu’il ne regarde pas entre le nombril et le genou.",
    lien: "https://dorar.net/hadith/sharh/65825",
    autres: "أحمد (6756) البيهقي (3345)",
  },
];

// 3. Le sexe avec les esclaves
const souratesEsclavageSexe = [4,6,23, 23, 23, 30, 33, 33, 33, 33, 70,];
const versetsEsclavageSexe = [24,5,5,  6,  7,  29, 50, 51, 52, 53, 29,];
const ahadithsEsclavageSexe = [
  {
    sujet: "Le sexe avec les esclaves",
    auteur: "El Boukhari صحيح البخاري",
    numero: 4139,
    texteArabe:
      "خَرَجْنَا مع رَسولِ اللَّهِ صَلَّى اللهُ عليه وسلَّمَ في غَزْوَةِ بَنِي المُصْطَلِقِ، فأصَبْنَا سَبْيًا مِن سَبْيِ العَرَبِ، فَاشْتَهَيْنَا النِّسَاءَ، فَاشْتَدَّتْ عَلَيْنَا العُزْبَةُ، وأَحْبَبْنَا العَزْلَ، فَسَأَلْنَا رَسولَ اللَّهِ صَلَّى اللهُ عليه وسلَّمَ، فَقالَ: ما علَيْكُم أنْ لا تَفْعَلُوا ما مِن نَسَمَةٍ كَائِنَةٍ إلى يَومِ القِيَامَةِ إلَّا وهي كَائِنَةٌ.",
    lien: "https://dorar.net/hadith/sharh/11750",
    autres: "",
  },
  {
    sujet: "Le sexe avec les esclaves",
    auteur: "El Boukhari صحيح البخاري",
    numero: 5075,
    texteArabe:
      "كُنَّا نَغْزُو مع النَّبيِّ صلَّى اللهُ عليه وسلَّم وليسَ معنَا نِسَاءٌ، فَقُلْنَا: ألَا نَخْتَصِي؟ فَنَهَانَا عن ذلكَ، فَرَخَّصَ لَنَا بَعْدَ ذلكَ أنْ نَتَزَوَّجَ المَرْأَةَ بالثَّوْبِ، ثُمَّ قَرَأَ: {يَا أَيُّهَا الَّذِينَ آمَنُوا لَا تُحَرِّمُوا طَيِّبَاتِ مَا أَحَلَّ اللَّهُ لَكُمْ} [المائدة: 87]",
    texteFrancais: "",
    lien: "https://dorar.net/hadith/sharh/14580",
    autres: "",
  },
  {
    sujet: "Le sexe avec les esclaves",
    auteur: "El Boukhari صحيح البخاري",
    numero: 5210,
    texteArabe:
      "أَصَبْنَا سَبْيًا، فَكُنَّا نَعْزِلُ، فَسَأَلْنَا رَسولَ اللَّهِ صَلَّى اللهُ عليه وسلَّمَ، فَقالَ: أوَإنَّكُمْ لَتَفْعَلُونَ - قالَهَا ثَلَاثًا - ما مِن نَسَمَةٍ كَائِنَةٍ إلى يَومِ القِيَامَةِ إلَّا هي كَائِنَةٌ.",
    texteFrancais:
      "Nous avons capturé des femmes lors de la bataille d’Awtas, alors qu’elles avaient des maris parmi leur peuple. Nous hésitions à avoir des rapports avec elles, alors nous avons interrogé le Prophète, et le verset fut révélé : “sauf celles que possède votre main droite”.",
    lien: "https://dorar.net/hadith/sharh/11752",
    autres: "",
  },
  {
    sujet: "Le sexe avec les esclaves",
    auteur: "El Boukhari صحيح البخاري",
    numero: 2229,
    texteArabe:
      "أنَّهُ بيْنَما هو جَالِسٌ عِنْدَ النبيِّ صَلَّى اللهُ عليه وسلَّمَ، قالَ: يا رَسولَ اللَّهِ، إنَّا نُصِيبُ سَبْيًا، فَنُحِبُّ الأثْمَانَ، فَكيفَ تَرَى في العَزْلِ؟ فَقالَ أوَإنَّكُمْ تَفْعَلُونَ ذلكَ؟ لا علَيْكُم أنْ لا تَفْعَلُوا ذَلِكُمْ، فإنَّهَا ليسَتْ نَسَمَةٌ كَتَبَ اللَّهُ أنْ تَخْرُجَ إلَّا هي خَارِجَةٌ.",
    texteFrancais: "",
    lien: "https://dorar.net/hadith/sharh/11749",
    autres: "",
  },
];

// 4. Le fouttement des esclaves
const souratesEsclavageFouettement = [4,];
const versetsEsclavageFouettement = [25,];
const ahadithsEsclavageFouttement = [
  {
    sujet: " Fouettement ou vente d'esclaves",
    auteur: " صحيح البخاري",
    numero: 2234,
    texteArabe:
      "في جَلدِ الأمةِ إذا زَنَت ثَلاثًا، ثُمَّ ليَبِعْها في الرَّابِعةِ. ",
    texteFrancais:
      " Si la servante de l’un de vous commet la fornication, qu’il la fouette. Si elle recommence, qu’il la fouette. Si elle recommence une troisième fois, qu’il la vende, même pour une corde de cheveux.",
    lien: "https://dorar.net/hadith/sharh/15817",
    autres: " مسلم (1703)",
  },
  {
    sujet: " Fouettement ou vente d'esclaves",
    auteur: "  صحيح أبي داود",
    numero: 4473,
    texteArabe: " وأقيموا الحدودَ علَى ما ملَكَتْ أيمانُكُم",
    texteFrancais: " Appliquez les peines légales à ceux que vous possédez.",
    lien: "https://dorar.net/hadith/sharh/138146",
    autres: " النسائي في ((السنن الكبرى)) (7268)، وأحمد (736)",
  },
];

// 5. Libération des esclaves
const souratesEsclavageLiberation = [2,4,   5, 24,58,90,90,];
const versetsEsclavageLiberation = [177,92, 89, 33, 3,12,13,];
const ahadithsEsclavageLiberation = [
  {
    sujet: " Affranchissement d'esclaves",
    auteur: " صحيح البخاري",
    numero: 6715,
    texteArabe:
      " مَنْ أعتقَ رقبةً مسلِمَةً ، أَعْتَقَ اللهُ لَهُ بِكُلِّ عضْوٍ منها عضْوًا منه مِنَ النارِ",
    texteFrancais:
      " Quiconque affranchit un musulman, Allah le préservera du Feu",
    lien: "https://dorar.net/hadith/sharh/135960",
    autres: " مسلم (1509)",
  },
  {
    sujet: " Affranchissement d'esclaves",
    auteur: " صحيح البخاري",
    numero: 2503,
    texteArabe: " مَن أعتَقَ شِركًا له في مَملوكٍ وجَبَ عليه أن يُعتِقَ كُلَّه",
    texteFrancais: " Celui qui affranchit une part d’un esclave…",
    lien: "https://dorar.net/hadith/sharh/1779",
    autres: " مسلم (1501)",
  },
  {
    sujet: " Affranchissement d'esclaves",
    auteur: " صحيح البخاري",
    numero: 3446,
    texteArabe: "  إذا أدَّبَ الرَّجُلُ أمَتَه فأحسَنَ تَأديبَها ...",
    texteFrancais:
      "Trois personnes auront deux récompenses…  un homme qui possédait une esclave, l’a bien éduquée, puis l’a affranchie et épousée",
    lien: "https://dorar.net/hadith/sharh/7288",
    autres: " مسلم (154)",
  },
  {
    sujet: " Affranchissement d'esclaves",
    auteur: " صحيح مسلم",
    numero: 1657,
    texteArabe: " من ضرب عبدَه حدًّا لم يأته ، أو لطمه ، فكفَّارتُه أن يعتقَه",
    texteFrancais:
      " Celui qui frappe son esclave ou le gifle doit l’affranchir en expiation.",
    lien: "https://dorar.net/hadith/sharh/126050",
    autres: " تفسير القرطبي 6/315",
  },
  {
    sujet: " Le prophète affranchit des esclaves!",
    auteur: " صحيح مسلم",
    numero: 1668,
    texteArabe: "  أقرعَ بينَهُم فأعتقَ اثنينِ وأرَقَّ أربعةً",
    texteFrancais:
      " Un homme affranchit six esclaves au moment de sa mort, sans avoir d’autres biens. Lorsque cela parvint au Prophète ﷺ, il le blâma sévèrement, puis fit venir les esclaves, les divisa en trois parts, et en affranchit deux, laissant quatre en esclavage.",
    lien: "https://dorar.net/hadith/sharh/85652",
    autres: "  ابن حزم 8/300",
  },
  {
    sujet: " La femme du prophète affranchit une esclave!",
    auteur: " صحيح البخاري",
    numero: 2536,
    texteArabe: "اشتَرَيتُ بَريرةَ، فاشتَرَطَ أهلُها ولاءَها...",
    texteFrancais: " ",
    lien: "https://dorar.net/h/Upd3sK7F?sims=1",
    autres: "صحيح أبي داود 2233",
  },
];

// 6. Traitement des esclaves
const souratesEsclavageEgalite = [2,  4, 4,4,  16, 16, 23,23, 24, 30, ];
const versetsEsclavageEgalite = [178, 36,24,25, 75, 76, 5,6,  33, 28];
const ahadithsEsclavageEgalite = [
  {
    sujet: " Egalité  avec les esclaves",
    auteur: " صحيح البخاري",
    numero: 30,
    texteArabe: "... هُم إخوانُكم خَوَلُكم، جَعَلَهم اللهُ تحت أيْديكم",
    texteFrancais:" Vos esclaves sont vos frères qu’Allah a placés sous votre autorité. Que celui qui a son frère sous sa main le nourrisse de ce qu’il mange et l’habille comme il s’habille…",
    lien: "https://dorar.net/hadith/sharh/89125",
    autres: " مسلم (1661)",
  },
  {
    sujet: " Frapper ",
    auteur: "El Boukhari صحيح البخاري",
    numero: 2559,
    texteArabe: " إذا ضربَ أحدُكُم فليتَّقِ الوجهَ",
    texteFrancais: " Lorsque l’un de vous frappe, qu’il évite le visage. ",
    lien: "https://dorar.net/hadith/sharh/43205",
    autres: "مسلم (2612)",
  },
  {
    sujet: " Comment appeler ses esclaves ",
    auteur: "El Boukhari صحيح البخاري",
    numero: 2552,
    texteArabe:"لا يَقُلْ أحَدُكُم: عَبدي، أَمَتي، وليَقُلْ: فتايَ، وفَتاتي، وغُلامي.",
    texteFrancais:" Que l’un de vous ne dise pas “mon esclave” ou “ma servante”, mais plutôt “mon jeune homme” et “ma jeune femme”. ",
    lien: "https://dorar.net/hadith/sharh/110854",
    autres: "مسلم (2249)",
    },
  
];

// 7- L'esclave qui fuit son maître
const souratesEsclavageFuite = [];
const versetsEsclavageFuite = [];
const ahadithsEsclavageFuite = [
  {
    sujet: " L'esclave qui fuit son maître",
    auteur: "صحيح مسلم",
    numero: 68,
    texteArabe:
      "أيُّما عَبدٍ أبَقَ مِن مَواليه فقد كَفَرَ حتَّى يَرجِعَ إليهم.",
    texteFrancais:
      " « Tout esclave qui fuit ses maîtres a commis une faute grave jusqu’à ce qu’il retourne vers eux. » ",
    lien: "https://dorar.net/hadith/sharh/78481",
    autres: "أحمد (19243)",
  },
];

