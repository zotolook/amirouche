let pTitreThematique = document.createElement("p")
pTitreThematique.setAttribute('class', 'pTitreThematique')

// C'est beau
const souratesBeau = [2,3,4,5,         6,  6,  16,17,17,17,21, 25,25,29,31,31,31,41, 46, 49,49,49,49,53,53,83,83,83,];
const versetsBeau = [83,135,134,1,    151, 152,90,23,31,35,107,63,67,46,14,15,18,34, 15, 6, 11,12,13,38,39, 1,2,3,   ];
const ahadithsBeau = [
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 2409,
    texte: "كُلُّكُمْ رَاعٍ ومَسْؤُولٌ عن رَعِيَّتِهِ ",
    lien: "https://dorar.net/hadith/sharh/66037",
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
];// Fin c'est beau

// - Juifs Chrtiens Mécréants
const souratesJuifsChretiensMecreants= [2,2,4,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,6,17,18,18,18,18,19,19,19,19,19,21,27,27,45,45];
const versetsJuifsChretiensMecreants = [40,122,46,47,153,154,155,156,157,158,159,160,161,162,12,13,20,21,22,23,24,25,26,27,32,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,146,154,4,4,5,6,88,89,90,91,92,26,76,77,16,17];
const ahadithsJuifsChretiensMecreants = [
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 1375,
    texte:
      " خرج رسولُ اللهِ صلَّى اللَّهُ عليهِ وسلَّمَ بعدما غربَت الشمسُ فسمعَ صوتًا فقال يهودُ تعذَّبُ في قبورِها ",
    lien: "https://dorar.net/hadith/sharh/5738",
    autres: "مسلم (2869)",
  },

  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 3330,
    texte:
      "لَوْلَا بَنُو إِسْرَائِيلَ، لَمْ يَخْبُثِ الطَّعَامُ، وَلَمْ يَخْنَزِ اللَّحْمُ، وَلَوْلَا حَوَّاءُ لَمْ تَخُنْ أُنْثَى زَوْجَهَا الدَّهْرَ.",
    lien: "https://dorar.net/hadith/sharh/22158",
    autres: "مسلم (1470)",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 3462,
    texte: "إنَّ اليَهُودَ وَالنَّصَارَى لا يَصْبُغُونَ، فَخَالِفُوهُمْ.",
    lien: "https://dorar.net/hadith/sharh/34253",
    autres: ", النسائي (5069),أحمد (7533), مسلم (2103)",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 2926,
    texte: "تقاتِلُكمْ يهودُ فتُسلَّطونَ عليهِم حتى يقولَ الحجرُ : يا مسلمُ هذا يهوديٌّ ورائي فاقتُلْه",
    lien: "https://dorar.net/hadith/sharh/15003",
    autres: "مسلم (2922)",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 3812,
    texte: "ما سَمِعْتُ رَسولَ اللهِ صَلَّى اللَّهُ عليه وسلَّمَ يقولُ لِحَيٍّ يَمْشِي، إنَّه في الجَنَّةِ إلَّا لِعَبْدِ اللهِ بنِ سَلَامٍ.",
    lien: "https://dorar.net/hadith/sharh/6223",
    autres: "البزار (1094)، والطبري في ((التفسير)) (21/ 126)، والطحاوي في ((شرح مشكل الآثار)) (331)",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero:3453,
    texte: "لَعْنَةُ اللَّهِ علَى اليَهُودِ والنَّصارَى؛ اتَّخَذُوا قُبُورَ أنْبِيائِهِمْ مَساجِدَ. يُحَذِّرُ ما صَنَعُوا.",
    lien: "https://dorar.net/hadith/sharh/6223",
    autres: "مسلم (531)، والنسائي (703)، وابن الجارود (175)",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero:3453,
    texte: "لَعْنَةُ اللَّهِ علَى اليَهُودِ والنَّصارَى؛ اتَّخَذُوا قُبُورَ أنْبِيائِهِمْ مَساجِدَ. يُحَذِّرُ ما صَنَعُوا.",
    lien: "https://dorar.net/hadith/sharh/6223",
    autres: "مسلم (531)، والنسائي (703)، وابن الجارود (175)",
  },

];// Fin Juifs Chrtiens Mécréants

//- H E R I T A G E
const souratesHeritage = [2,2,2,      4,4,4,4,4,4,4,4,        5,5,5,      8,  33,  89,89 ];
const versetsHeritage = [180,181,182, 7,8,9,11,12,19,33,176, 106,107,108, 75, 6,   18,19];
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
  
];//- fin H E R I T A G E 

//- P F f  f f f  f  f
const souratesPfffff = [2,2,    5,5,5,5,        6,6,     7,7,7,       10,10,10,10, 16,17,18,20,22, 24,24,24,24,24,24, 25,25, 27,27,27, 33,33, 35, 36,36,36,36, 39,39,39,39, 40,40,40, 43,48, 49,49,50,55, 58,58, 59,59,97,103];
const versetsPfffff = [137,189, 67,106,107,108, 59,142, 145,148,154, 28,29,30,94, 80,64,25,71,18, 27,35,28,29,58,60, 24,47, 18,82,86, 56,72, 41, 71,72,73,80, 10,13,15,45, 67,79,80, 45,17, 4,5, 30,6,    3,4,   5,21,97,103];
const ahadithsPfffff = [
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 144,
    texte:
      "إِذَا أتَى أحَدُكُمُ الغَائِطَ، فلا يَسْتَقْبِلِ القِبْلَةَ ولَا يُوَلِّهَا ظَهْرَهُ، شَرِّقُوا أوْ غَرِّبُوا. ",
    lien: "https://dorar.net/hadith/sharh/22725",
  },
  {
    sujet: "L'entrée des maisons par leur porte",
    auteur: "El Boukhari صحيح البخاري",
    numero: 1803,
    texteArabe:
      " ولَيسَ البِرُّ بِأن تَأتوا البُيوتَ مِن ظُهورِها ولَكِنَّ البِرَّ مَنِ اتَّقى وأتوا البُيوتَ مِن أبوابِها",
    texteFrancais:
      "« La piété ne consiste pas à entrer dans les maisons par l’arrière, mais la piété est (celle de) celui qui craint Allah ; entrez donc dans les maisons par leurs portes. »",
    lien: "https://dorar.net/hadith/sharh/3083",
    autres: "مسلم (3026)",
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
    texte:
      " إذا ولغَ الكلبُ في الإناءِ فاغسِلوهُ سبعَ مرَّاتٍ وعفِّروهُ الثَّامنةَ بالتُّرابِ",
    lien: "https://dorar.net/hadith/sharh/32134",
  },

  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 218,
    texte:
      "  أمَّا أحدُهما فكان يسعى بالنَّميمةِ وأمَّا الآخَرُ فكان لا يستنزِهُ مِن بولِه إنَّهما ليُعذَّبانِ وما يُعذَّبانِ في كبيرٍ",
    lien: "https://dorar.net/hadith/sharh/12463",
    autres: "1361, 1378 ",
  },

  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 416,
    texte:
      " إن أحدَكم إذا قام في صلاتِه فإنه يُناجي ربَّه ، و إنَّ ربَّه بينَه و بين القبلةِ ، فلا يبزُقنَّ أحدُكم قِبَلَ قبلتِه ، و لكن عن يسارِه أو تحتَ قدمِه",
    lien: "https://dorar.net/hadith/sharh/114172",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 418,
    texte:
      " أترونَ قِبلتي هاهُنا؟ فواللَّهِ ما يخفى عليَّ خشوعُكُم ولا رُكوعُكُم إنِّي لأراكم من وراءِ ظَهْري",
    lien: "https://dorar.net/hadith/sharh/112163",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 1114,
    texte:
      " ذَاكَ رَجُلٌ بَالَ الشَّيْطَانُ في أُذُنَيْهِ، أَوْ قالَ: في أُذُنِهِ.",
    lien: "https://dorar.net/hadith/sharh/9598",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 3292,
    texte:
      "الرؤيَا الصالحةُ من اللهِ ، والحلمُ من الشيطانِ ، فإذا حلمَ أحدكم حلما يخافهُ ، فليبصقْ عن يسارهِ ثلاثَ مراتٍ ، وليستعذْ باللهِ من شرهِ ، فإنه لا يضرهُ ",
    lien: "https://dorar.net/hadith/sharh/121916",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 3297,
    texte:
      " اقْتُلُوا الحَيّاتِ، واقْتُلُوا ذا الطُّفْيَتَيْنِ والأبْتَرَ، فإنَّهُما يَطْمِسانِ البَصَرَ، ويَسْتَسْقِطانِ الحَبَلَ.",
    lien: "https://dorar.net/hadith/sharh/12143",
    autres: "3310",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 3306,
    texte:
      " أمَر رسولُ اللهِ صلَّى اللهُ عليه وسلَّم بقتلِ الوَزَغِ وسمَّاه فُوَيْسِقًا",
    lien: "https://dorar.net/hadith/sharh/16054",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 3314,
    texte:
      " خمسُ فواسِقَ يُقتَلْنَ في الحِلِّ والحَرَمِ الفأرةُ والعَقْرَبُ والحِدَأَةُ والكَلبُ العَقورُ والغُرَابُ",
    lien: "https://dorar.net/hadith/sharh/124358",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 3320,
    texte:
      "إذا وقَعَ الذُّبابُ في إناءِ أحَدِكم فامقُلُوه؛ فإنَّ في أحَدِ جَناحَيه داءً، وفي الآخَرِ شِفاءً، وإنَّه يتَّقي بجَناحِه الذي فيه الدَّاءُ، فلْيَغمِسْه كُلَّه ",
    lien: "https://dorar.net/hadith/sharh/117405",
  },
  {
    auteur: "Muslim صحيح مسلم",
    numero: 1572,
    texte:
      "أمرَ نبيُّ اللَّهِ صلَّى اللَّهُ عليْهِ وسلَّمَ بقتلِ الْكلابِ . حتَّى إن كانتِ المرأةُ تقدُمُ منَ الباديةِ يعني بالْكلبِ فنقتلُهُ ثمَّ نَهانا عن قتلِها وقالَ عليْكم بالأسوَدِ",
    lien: "https://dorar.net/hadith/sharh/37032",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 6227,
    texte: " خلَق اللهُ آدَمَ على صورتِه وطولُه سِتُّونَ ذراعًا",
    lien: "https://dorar.net/hadith/sharh/12845",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 3938,
    texte: " إنِّي سَائِلُكَ عن ثَلَاثٍ لا يَعْلَمُهُنَّ إلَّا نَبِيٌّ",
    lien: "https://dorar.net/hadith/sharh/14507",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 6223,
    texte:
      "إنَّ اللهَ يُحِبُّ العُطاسَ ويكرَهُ التَّثاؤبَ فإذا تثاءَب أحدُكم فليكظِمْ ما استطاع أو ليضَعْ يدَه على فيه فإنَّه إذا تثاءَب فقال: آه فإنَّما هو الشَّيطانُ يضحَكُ مِن جوفِه ",
    lien: "https://dorar.net/hadith/sharh/15100",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 3295,
    texte:
      " إذا استيقظ أحدُكم من منامِه فتوضَّأَ فلْيَسْتَنْثِرْ ثلاثَ مراتٍ ، فإنَّ الشيطانَ يبِيتُ على خياشيمِه",
    lien: "https://dorar.net/hadith/sharh/3551",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 3303,
    texte:
      "إذا سمعتُم صِياحَ الدِّيكةِ فسَلُوا الله تعالى من فَضْلِه؛ فإنَّها رأت مَلَكًا، وإذا سمعتُم نهيقَ الحِمارِ فتعَوَّذوا بالله من الشَّيطانِ؛ فإنَّها رأت شيطانًا ",
    lien: "https://dorar.net/hadith/sharh/10511",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 6227,
    texte:
      " فكُلُّ مَن يَدخلُ الجنةَ على صورةِ آدمَ في طُولِه سِتُّونَ ذِراعًا ، فلمْ تَزلْ الخَلْقُ تَنقُصُ بعدَه حتى الآنَ",
    lien: "https://dorar.net/hadith/sharh/12844",
  },
  {
    sujet: "Intercession de Nūḥ au Jour du Jugement ",
    auteur: "  صحيح البخاري",
    numero: 3356,
    texteArabe:
      "اختَتَنَ إبراهيمُ النَّبيُّ عليه السَّلامُ، وهو ابنُ ثَمانينَ سَنةً بالقَدُومِ.",
    texteFrancais: "« Abraham se fit circoncire à l’âge de 80 ans. »",
    lien: "https://dorar.net/hadith/sharh/16636",
    autres: "مسلم (2370)",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 3849,
    texte:
      " رَأَيْتُ في الجَاهِلِيَّةِ قِرْدَةً اجْتَمع عَلَيْهَا قِرَدَةٌ، قدْ زَنَتْ، فَرَجَمُوهَا، فَرَجَمْتُهَا معهُمْ.",
    lien: "https://dorar.net/hadith/sharh/150656",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 4512,
    texte:
      " كَانُوا إذَا أحْرَمُوا في الجَاهِلِيَّةِ أتَوْا البَيْتَ مِن ظَهْرِهِ فأنْزَلَ اللَّهُ: {وَليسَ البِرُّ بأَنْ تَأْتُوا البُيُوتَ مِن ظُهُورِهَا ولَكِنَّ البِرَّ مَنِ اتَّقَى وأْتُوا البُيُوتَ مِن أبْوَابِهَا}",
    lien: "https://dorar.net/hadith/sharh/3083",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 6542,
    texte:
      "يَدْخُلُ الجَنَّةَ مِن أُمَّتي زُمْرَةٌ هُمْ سَبْعُونَ ألْفًا، تُضِيءُ وُجُوهُهُمْ إضاءَةَ القَمَرِ لَيْلَةَ البَدْرِ ",
    lien: "https://dorar.net/hadith/sharh/26256",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 6249,
    texte:
      "يا عائِشَةُ هذا جِبْرِيلُ يَقْرَأُ عَلَيْكِ السَّلامَ قالَتْ: قُلتُ: وعليه السَّلامُ ورَحْمَةُ اللَّهِ، تَرَى ما لا نَرَى ",
    lien: "https://dorar.net/hadith/sharh/4741",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 5197,
    texte:
      "رأيتُ الجنةَ فتناولتُ منها عُنقودًا ولو أخذتُه لأكلتُم منه ما بَقِيَتِ الدنيا",
    lien: "https://dorar.net/hadith/sharh/67314",
  },
  {
    auteur: "صحيح البخاري",
    numero: 461,
    texte:
      " إنَّ عِفْرِيتًا مِنَ الجِنِّ جَعَلَ يَفْتِكُ عَلَيَّ البارِحَةَ، لِيَقْطَعَ عَلَيَّ الصَّلاةَ",
    lien: "https://dorar.net/hadith/sharh/12321",
    autres: "مسلم (541) ",
  },
  {
    auteur: "صحيح البخاري",
    numero: 3295,
    texte:
      " إذا استيقظ أحدُكم من منامِه فتوضَّأَ فلْيَسْتَنْثِرْ ثلاثَ مراتٍ ، فإنَّ الشيطانَ يبِيتُ على خياشيمِه ",
    lien: "https://dorar.net/hadith/sharh/3551",
    autres: "مسلم (238)",
  },
  {
    auteur: "صحيح البخاري",
    numero: 3303,
    texte:
      "  إذا سمعتُم صِياحَ الدِّيكةِ فسَلُوا الله تعالى من فَضْلِه؛ فإنَّها رأت مَلَكًا، وإذا سمعتُم نهيقَ الحِمارِ فتعَوَّذوا بالله من الشَّيطانِ؛ فإنَّها رأت شيطانًا",
    lien: "https://dorar.net/hadith/sharh/10511",
    autres: "مسلم (2729)، والترمذي (3459)",
  },
  {
    auteur: "صحيح البخاري",
    numero: 3992,
    texte: "مَنْ شهِدَ بدْرًا من الملائِكةِ همْ عِندَنا خِيارُ الملائِكةِ ",
    lien: "https://dorar.net/hadith/sharh/10482",
    autres: "ابن ماجه (160)، وأحمد (15820)، وابن أبي شيبة (37886)",
  },
  {
    auteur: "صحيح البخاري",
    numero: 3995,
    texte: " هذا جبريلُ آخِذٌ برأْسِ فرَسِهِ ، عليه أداةُ الحرْبِ ",
    lien: "https://dorar.net/hadith/sharh/68773",
    autres: "الطبراني (11/ 342) (11952)، والبيهقي في ((دلائل النبوة)) (3/ 54)",
  },
  {
    auteur: "صحيح البخاري",
    numero: 3217,
    texte: " يا عَائِشَةُ هذا جِبْرِيلُ يَقْرَأُ عَلَيْكِ السَّلَامَ ",
    lien: "https://dorar.net/hadith/sharh/4740",
    autres: "مسلم (2447)، وأبو داود (5232)، والنسائي (3953)",
  },
  {
    sujet: "Lapidation des singes",
    auteur: " صحيح البخاري ",
    numero: 3849,
    texteArabe:
      " رَأيتُ في الجاهِليَّةِ قِردةً اجتَمع عليها قِرَدةٌ، قد زَنَت، فرَجَموها، فرَجَمتُها معهُم. ",
    texteFrancais:
      "« J’ai vu à l’époque de l’ignorance (jāhiliyya) une guenon autour de laquelle s’étaient réunis des singes, car elle avait commis la fornication, et ils la lapidèrent, et je la lapidai avec eux. »",
    lien: "https://dorar.net/hadith/sharh/150656",
    autres:
      "  ابن أبي خيثمة في ((التاريخ)) (6137)، والخرائطي في ((مساوئ الأخلاق)) (469)، وأبو نعيم الأصبهاني في ((معرفة الصحابة)) (5139) جميعهم باختلاف يسير. ",
  },
  {
    sujet:
      "Combat eschatologique: La pierre qui montre un juif au musulman pour le tuer!",
    auteur: "El Boukhari صحيح البخاري",
    numero: 2926,
    texteArabe:
      " لا تَقُومُ السَّاعَةُ حتَّى تُقاتِلُوا اليَهُودَ، حتَّى يَقُولَ الحَجَرُ وراءَهُ اليَهُودِيُّ: يا مُسْلِمُ، هذا يَهُودِيٌّ وَرائي فاقْتُلْهُ.",
    texteFrancais:
      "« …jusqu’à ce que la pierre derrière laquelle se cache le Juif dise : “Ô musulman, voici un Juif derrière moi, tue-le.” »",
    lien: "https://dorar.net/hadith/sharh/15003",
    autres: 3593,
  },
  {
    sujet: "Danger et gravité de l’usure",
    auteur: "صحيح الجامع الألباني",
    numero: 3539,
    texteArabe:
      "الرِّبَا سَبْعُونَ حُوبًا، أَيْسَرُهَا أَنْ يَنْكِحَ الرَّجُلُ أُمَّهُ",
    texteFrancais:
      "“L’usure comporte soixante-dix péchés. Le moindre d’entre eux est comparable au fait qu’un homme épouse sa propre mère.”",
    lien: "https://dorar.net/hadith/sharh/119683",
    autres:
      " ابن ماجة (2275 )، وابن المنذر في ((الأوسط)) (8013 )، والحاكم (2259 )، والبيهقي في ((شعب الإيمان)) (5131 )",
  },
  {
    sujet: "Ribā al-faḍl (usure de surplus)",
    auteur: "صحيح النسائي",
    numero: 4557,
    texteArabe:
      " أَتَى بلالٌ رسولَ اللهِ صَلَّى اللهُ عليه وسلم بتَمْرٍ بَرْنِيٍّ فقال ما هذا ؟ قال : اشتَرَيْتُه صاعًا بصاعَيْنِ، فقال رسولُ اللهِ صلَّى اللهُ عليهِ وسلَّم : أَوَّهْ عَيْنُ الربا ولا تَقْرَبْهُ",
    texteFrancais:
      "Bilal apporta au Prophète ﷺ des dattes de qualité (barni). Le Prophète lui dit :“D’où cela vient-il ?”Bilal répondit :“Nous avions des dattes de mauvaise qualité, alors j’ai échangé deux mesures contre une seule (de bonne qualité) afin de nourrir le Prophète.”Le Prophète ﷺ dit alors :“Ah ! Ah ! C’est exactement l’usure (ribā), c’est exactement l’usure. Ne fais pas cela. Mais si tu veux acheter, vends d’abord les dattes contre une autre marchandise, puis achète ensuite.”",
    lien: "https://dorar.net/hadith/sharh/12352",
    autres: "البخاري (2312)، ومسلم (1594) ",
  },
  // https://dorar.net/hadith/sharh/26282
  // https://dorar.net/hadith/sharh/81685
  // https://dorar.net/hadith/sharh/150775

];//- fIN P F f  f f f  f  f

//- Miracles scientifiques
const souratesMiraclesScientifiques = ["Jésus et ...", 3,3,3,3,3,3,3,3, 5,5,5,5,5,5,5,5, 19,19,19,19,                       "Jonas et ...",37,37,37,37,37,37,37,37,37,   "La Terre et ...", 21, "Le toit et ...",21,21,21,22,27,        `L'embriologie...`, 23,23,23,             "Les djinns...", 55, "La lune est ...", 54, "Le voyage...", 17, "Les deux...", 55,55,55, ];
const versetsMiraclesScientifiques = ["les miracles", 45,46,47,48,49,54,55,59, 110,111,112,113,114,115,116,117, 28,29,30,31, "le poisson", 139,140,141,142,143,144,145,146,147,  "le big bang", 30,     "les piliers",31,32,33,65,61,   `l'Homme est créé ...d'argile!`, 12,13,14,"de feu", 15,        "brisée!", 1,          "nocturne", 1,      "mers...", 19,20,22,];
const ahadithsMiraclesScientifiques = [
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 3637,
    texte:
      "أنَّ أَهْلَ مَكَّةَ سَأَلُوا رَسُولَ اللهِ صَلَّى اللَّهُ عليه وَسَلَّمَ أَنْ يُرِيَهُمْ آيَةً فأرَاهُمُ انْشِقَاقَ القَمَرِ مَرَّتَيْنِ.",
    lien: "https://dorar.net/hadith/sharh/7746",
    lien2: "https://dorar.net/hadith/sharh/76795",
    lien3: "https://dorar.net/hadith/sharh/7744",
    autres: "",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 3887,
    texte: "رِحلةُ الإسْراءِ والمِعْراجِ",
    lien: "https://dorar.net/hadith/sharh/151389",
    autres: "",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 3888,
    texte: "شَجرةُ الزَّقُّومِ",
    lien: "https://dorar.net/hadith/sharh/14047",
    autres: "",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 4210,
    texte:
      "فَبَصَقَ رَسولُ اللَّهِ صلَّى اللهُ عليه وسلَّمَ في عَيْنَيْهِ ودَعَا له",
    lien: "https://dorar.net/hadith/sharh/72767",
    autres: "",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 4478,
    texte: "الْكَمْأَةُ مِنَ المَنِّ، وَمَاؤُهَا شِفَاءٌ لِلْعَيْنِ.",
    lien: "https://dorar.net/hadith/sharh/14881",
    autres: "",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 4622,
    texte:
      "يَا أَيُّهَا الَّذِينَ آَمَنُوا لَا تَسْأَلُوا عَنْ أَشْيَاءَ إِنْ تُبْدَ لَكُمْ تَسُؤْكُمْ",
    lien: "https://dorar.net/hadith/sharh/81685",
    autres: "",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 4649,
    texte: "قالَ أبو جَهْلٍ: اللَّهُمَّ إنْ كانَ هذا هو الحَقَّ مِن عِندِكَ فأمْطِرْ عَلَيْنَا حِجَارَةً مِنَ السَّمَاءِ، أوِ ائْتِنَا بعَذَابٍ ألِيمٍ، فَنَزَلَتْ: {وَما كانَ اللَّهُ لِيُعَذِّبَهُمْ وأَنْتَ فيهم، وما كانَ اللَّهُ مُعَذِّبَهُمْ وهُمْ يَسْتَغْفِرُونَ، وما لهمْ أنْ لا يُعَذِّبَهُمُ اللَّهُ وهُمْ يَصُدُّونَ عَنِ المَسْجِدِ الحَرَامِ} الآيَةَ.",
    lien: "https://dorar.net/hadith/sharh/24772",
    autres: "",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 7379,
    texte: "مفاتيحُ الغيبِ خَمْسٌ لا يعلَمُها إلَّا اللهُ : لا يعلَمُ ما تغيضُ الأرحامَ أحَدٌ إلَّا اللهُ ولا ما في غَدٍ إلَّا اللهُ ولا يعلَمُ متى يأتي المطَرُ إلَّا اللهُ ولا تدري نفسٌ بأيِّ أرضٍ تموتُ ولا يعلَمُ متى تقومُ السَّاعةُ أحَدٌ إلَّا اللهُ",
    lien: "https://dorar.net/hadith/sharh/12789",
    autres: "",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 4802,
    texte: "كُنْتُ مع النبيِّ صَلَّى اللهُ عليه وسلَّمَ في المَسْجِدِ عِنْدَ غُرُوبِ الشَّمْسِ، فَقالَ: يا أبَا ذَرٍّ أتَدْرِي أيْنَ تَغْرُبُ الشَّمْسُ؟ قُلتُ: اللَّهُ ورَسولُهُ أعْلَمُ، قالَ: فإنَّهَا تَذْهَبُ حتَّى تَسْجُدَ تَحْتَ العَرْشِ، فَذلكَ قَوْلُهُ تَعَالَى: {وَالشَّمْسُ تَجْرِي لِمُسْتَقَرٍّ لَهَا ذلكَ تَقْدِيرُ العَزِيزِ العَلِيمِ}.",
    lien: "https://dorar.net/hadith/sharh/6677",
    autres: "",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 5445,
    texte: "مَن تَصَبَّحَ بسَبْعِ تَمَراتٍ عَجْوَةً، لَمْ يَضُرَّهُ ذلكَ اليومَ سُمٌّ، ولا سِحْرٌ.",
    lien: "https://dorar.net/hadith/sharh/20979",
    autres: "",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 5687,
    texte: "الحَبَّةُ السَّوْدَاءُ شِفَاءٌ من كلِّ دَاءٍ إلَّا السَّامَ",
    lien: "https://dorar.net/hadith/sharh/79430",
    autres: "",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 5741,
    texte: "رخَّصَ رسولُ اللَّهِ صلَّى اللَّهُ عليهِ وسلَّمَ في الرُّقيةِ، مِن كلِّ ذي حُمَةٍ",
    lien: "https://dorar.net/hadith/sharh/88016",
    autres: "",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 3320,
    texte: "إذا وقَعَ الذُّبابُ في إناءِ أحَدِكم فامقُلُوه؛ فإنَّ في أحَدِ جَناحَيه داءً، وفي الآخَرِ شِفاءً، وإنَّه يتَّقي بجَناحِه الذي فيه الدَّاءُ، فلْيَغمِسْه كُلَّه",
    lien: "https://dorar.net/hadith/sharh/117405",
    autres: "",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 3208,
    texte: "إنَّ أحدَكم يُجْمَعُ خَلْقُهُ في بطنِ أمِّه أربعينَ يومًا نطفةً ، ثم يكونُ علقةً مثلَ ذلك ، ثم يكونُ مضغةً مثلَ ذلك ، ثم يبعثُ اللهُ إليه ملَكا ، ويُؤمرُ بأربعِ كلماتٍ ، ويُقالُ له : اكتبْ عملَه ، ورزقَه ، وأجلَه ، وشقيٌّ أو سعيدٌ ؛ ثم يُنفخُ فيه الروحَ",
    lien: "https://dorar.net/hadith/sharh/4724",
    autres: "",
  },
  
];//- fin Miracles scientifiques

//- Création de l'Univers
const souratesCreationUnivers = [
  "Création de … ", 2,7,10,11,14,15,15,15,17,17,25,25,37,37,37,88,88,40,41,50,50,41,64,65,67 ,79,79,
  "création de … ",4,6,6,7,15,15,15,15,16,16,18,22,22,30,32,32,32,38,39,53,55,78,80,80,80,86,86,95,
  "Création des … ", 15, 55,
  "Création des … ", 24, 88,
  "Création de … ",7,15,15,51,53,
];
const versetsCreationUnivers = [
  " la Terre et de 7 cieux! ", 29, 54, 3, 7, 33, 16, 19, 20, 12, 44, 59, 61, 4, 5, 6, 18, 19, 64, 9, 6, 7, 12, 3, 12, 3, 27, 28,
" l’Homme" ,1,2,98,189,26,28,29,33,4,72,37,66,54,20,7,8,9,71,6,46,14,8,17,18,19,6,7,4,
"anges et diables ! ",27,15,
"animaux", 45,17,
"tout ! " ,57,21,22,49,45,

];
const ahadithsCreationUnivers = [
  {
    auteur: "El Boukhari  صحيح  البخاري",
    numero: 1901,
    texte:
      "مَن صَامَ رَمَضَانَ إيمَانًا واحْتِسَابًا غُفِرَ له ما تَقَدَّمَ مِن ذَنْبِهِ",
    lien: "https://dorar.net/hadith/sharh/10254",
    autres: "",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 3208,
    texte:
      "أنَّ خَلْقَ أحَدِكُمْ يُجْمَعُ في بَطْنِ أُمِّهِ أرْبَعِينَ يَوْمًا",
    lien: "https://dorar.net/hadith/sharh/4722",
    autres: "مسلم (2643)",
  },
  {
    auteur: "صحيح البخاري",
    numero: 3276,
    texte:
      " يَأْتي الشَّيْطانُ أحَدَكُمْ فَيَقُولَ: مَن خَلَقَ كَذا وكَذا؟ حتَّى يَقُولَ له: مَن خَلَقَ رَبَّكَ؟ فإذا بَلَغَ ذلكَ، فَلْيَسْتَعِذْ باللَّهِ ولْيَنْتَهِ.",
    lien: "https://dorar.net/hadith/sharh/10522",
    autres: "مسلم (134)",
  },
  {
    auteur: "صحيح البخاري",
    numero: 3277,
    texte:"  إِذَا دَخَلَ رَمَضَانُ فُتِّحَتْ أبْوَابُ الجَنَّةِ، وغُلِّقَتْ أبْوَابُ جَهَنَّمَ، وسُلْسِلَتِ الشَّيَاطِينُ.",
    lien: "https://dorar.net/hadith/sharh/16089",
    autres: " (مسلم (1079",
  },

];// fin création

//- Forme de la terre
const souratesFormeTerre = [18,20,31,39,40,41,41,43,51,57,78,78,79,79,88];
const versetsFormeTerre = [86,53,29,5,64,10,11,10,48,4,6,7,30,32,20];
const ahadithsFormeTerre = [
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 1,
    texte: "",
    lien: "https://dorar.net/hadith/sharh/",
    autres: "",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 1,
    texte: "",
    lien: "https://dorar.net/hadith/sharh/",
    autres: "",
  },
];//- Fin Forme de la terre


// Les noms des sourates
const souratesNomsSourates = [17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114];
const versetsNomsSourates = [1,9,1,1,1,1,1,1,1,224,1,1,41,1,12,1,33,1,1,1,165,1,1,3,3,38,35,1,28,1,1,1,4,1,1,1,1,1,1,1,1,1,2,1,4,9,1,9,1,1,1,1,1,3,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,7,1,1,1,1,1,1,1];
const ahadithsNomsSourates = [
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 1,
    texte: "",
    lien: "https://dorar.net/hadith/sharh/",
    autres: "",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 1,
    texte: "",
    lien: "https://dorar.net/hadith/sharh/",
    autres: "",
  },
]; //fin noms des sourates

// Abrogation
const souratesAbrogation = [
 
 "Versets en lien avec ... ", 2, 13, 16, 22, 22,
  "Exemples de versets... ",
  
  "1. ",
  "Tolérance implicite ", 16,
  "Le mal est supérieur au bien", 2,
  "Interdiction partielle", 4,
  "Interdiction diffinitive", 5, 5,
  "Autres versets lié à l'alcool", 47,83,83,

];
const versetsAbrogation = [
  
  "l'abrogation", 106, 39, 101, 52, 53,
  "abrogeants et abrogés",

  "L'alcool",
  "(période mecquoise)", 67,
  "(période intermédiaire - médine)", 219,
  "pendant la prière", 43,
  "Selon l'interprétation majoritaire", 90, 91,
  "(le vin au paradis)", 15,25,26,

  
];
const ahadithsAbrogation = [
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 1,
    texte: "",
    lien: "https://dorar.net/hadith/sharh/",
    autres: "",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 1,
    texte: "",
    lien: "https://dorar.net/hadith/sharh/",
    autres: "",
  },
];

// La Faune et la Flore
const souratesFauneFlore = [2,2, 7, 16,16,16, 18,18, 23,23, 27,27, 38,38, 44, 55, 56, 74, 80, 88, 95, 105];
const versetsFauneFlore = [67,259, 176, 8,11,14, 18,32, 19,20, 18,20, 23,31, 43, 11, 23, 51, 28, 17, 1, 1,];
const ahadithsFauneFlore = [
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 1,
    texte: "",
    lien: "https://dorar.net/hadith/sharh/",
    autres: "",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 1,
    texte: "",
    lien: "https://dorar.net/hadith/sharh/",
    autres: "",
  },
]; // Fin Faune et Flore

// Mariage & Divorce
const souratesMariageDivorce = [2,2,2,2,2, 4,4,4,4, 24,24, 33, 65,65,65,65,65];
const versetsMariageDivorce = [221,228,229,230,234, 22,23,24,25, 3,26, 49, 2,3,4,5,6];
const ahadithsMariageDivorce = [
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
    numero: 2494,
    texte:
      "أنَّ رَجُلًا كَانَتْ له يَتِيمَةٌ فَنَكَحَهَا، وكانَ لَهَا عَذْقٌ، وكانَ يُمْسِكُهَا عليه، ولَمْ يَكُنْ لَهَا مِن نَفْسِهِ شيءٌ فَنَزَلَتْ فِيهِ: {وَإنْ خِفْتُمْ أنْ لا تُقْسِطُوا في اليَتَامَى} أحْسِبُهُ قالَ: كَانَتْ شَرِيكَتَهُ في ذلكَ العَذْقِ وفي مَالِهِ",
    lien: "https://dorar.net/hadith/sharh/43494",
    autres: "dorar 735",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 5113,
    texte:
      " أما تستَحي المرأةُ أن تَهَبَ نفسَها للنَّبيِّ صلَّى اللَّهُ علَيهِ وسلَّمَ؟ حتَّى أنزلَ اللَّهُ: تُرْجِي مَنْ تَشَاءُ مِنْهُنَّ وَتُؤْوِي إِلَيْكَ مَنْ تَشَاءُ قالَت : فقلتُ إنَّ ربَّكَ ليسارِعُ في هواكَ",
    lien: "https://dorar.net/hadith/sharh/41605",
    autres: "4788",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 5065,
    texte:
      "يَا مَعْشَرَ الشَّبَابِ، مَنِ اسْتَطَاعَ مِنْكُمُ البَاءَةَ فَلْيَتَزَوَّجْ، فإنَّه أَغَضُّ لِلْبَصَرِ، وَأَحْصَنُ لِلْفَرْجِ، وَمَن لَمْ يَسْتَطِعْ فَعليه بالصَّوْمِ، فإنَّه له وِجَاءٌ.",
    lien: "https://dorar.net/hadith/sharh/13863",
    autres: "",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 5136,
    texte:
      "لا تُنكحُ الثيِّبُ حتى تُستأمرَ ، و لا تُنكحُ البكرُ حتى تُستأذنَ ، و إذْنُها الصموتُ",
    lien: "https://dorar.net/hadith/sharh/70482",
    autres: "",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 5213,
    texte:
      " السُّنَّةُ إذا تَزَوَّجَ البِكْرَ أقامَ عِنْدَها سَبْعًا، وإذا تَزَوَّجَ الثَّيِّبَ أقامَ عِنْدَها ثَلاثًا.",
    lien: "https://dorar.net/hadith/sharh/6525",
    autres: "",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 5273,
    texte: "اقْبَلِ الحَدِيقَةَ وطَلِّقْهَا تَطْلِيقَةً",
    lien: "https://dorar.net/hadith/sharh/1062",
    autres: "",
  },
]; // Fin Faune et Flore

// Erreurs ...?
const souratesErreurs = [2,2,   6,6,     7,  9,  10, 12,12,12, 16,16,16,16, 19, 23,23,23, 26, 30,30, 31, 35, 36,36,36, 54, 61, 66,66, 67, 94, "Erreurs de langue", 88, 109,109,109,109,109,109,];
const versetsErreurs = [22,258, 143,144, 57, 36, 22, 2,3,4,    15,16,48,49, 28, 12,13,14, 7,  2,3,   10, 11, 38,39,40, 1,  6,  11,12, 3,  1, "", 22, 1,2,3,4,5,6,];
const ahadithsErreurs = [
{
    auteur: "El Boukhari صحيح البخاري",
    numero: 1,
    texte: "",
    lien: "https://dorar.net/hadith/sharh/",
    autres: "",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 1,
    texte: "",
    lien: "https://dorar.net/hadith/sharh/",
    autres: "",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 1,
    texte: "",
    lien: "https://dorar.net/hadith/sharh/",
    autres: "",
  },
]; // Fin Erreurs....?

// Clair ou Incompréhensible?
const souratesClairesIncomprehensibles = ["Versets...",2,2, 5,5,   6,   7,  10,10, 11, 12,12,12, 15, 16, 18, 19, 22, 24,24, 26,26, 27,27, 28, 32, 39, 43,43, 44, 45, 54,  "Versets ...",2,3,7,10,11,12,13,14,19,20,26,26,27,28,28,30,32,38,40,41,42,42,43,44,45,50,68,];
const versetsClairsIncomprehensibles = ["clairs!", 2,99,    15,19, 114, 52, 1,15,  1,  1,2,37,   1,  44, 1,  97, 16, 1,36,  2,195, 1,2,   2,  2,  28, 2,3,   2,  20, 17,  "Incompréhensibles!", 1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1 ]

const ahadithsclaires = [
  // https://dorar.net/hadith/sharh/111819
];// Clair ou incompréhensible?

// La carotte et le baton
const souratesCarotteEtBaton = [ "La carotte", 2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,                        3,  4,  5,5,  6,6,6,    7,7,7,7,     8,8,   9,  13, 14,14,14,14,14,14, 15,15,15,15,15,15,15,15,15, 16,16,16,16,16,16,  17,17, 18,18,18, 19,19,19,19,19,19, 21,21,21, 22,22,22,22,  24, 28, 29,29,29,29, 31,31,31, 32,32,32,32, 33,33, 34,34,34, 35,35, 37,37,37,37,37,37,37,37,37,37, 38,38,38,38,38,38,38,38,38,38, 39,39,39,39, 40,40,40,40,40,40,40,40,40,40,40,40,  43,43,43,43,43,43,43,  44,44,44,44,44,44,44,44,  48, 50,50,50, 52,52,52,52,52,52,52,52,52,52, 66, 67,67,67,67,67,67,67, 69,69,69,69,69,69,69,69,69, 70,70, 70,70,70,70,70,70,70,70,70,70,  75, 76, 77,77,77,77,77,77,77,77,77,77,77,77,77,77, 78,78,78,78,78,78,78,78,78,78, 82,82, 83,83,83,83,83, 87,87, 88,88,88,88,88,88,88, 92,92,92,92,92,92,92,92, 95, 98,98, 104,104,104,104,104 ];
const versetsCarotteEtBaton = ["", 21,28,38,39,81,103,104,105,110,112,114,126,145,151,152,161,162,165,174,257, 30, 56, 9,10, 31,32,70, 46,50,51,53, 37,38, 35, 35, 16,17,18,49,50,51, 42,43,44,45,46,47,48,49,50,  28,29,30,32,33,41,  97,98, 2,3,106, 68,69,70,71,72,73, 98,99,100, 19,20,21,22, 57, 60, 53,54,55,64, 8,9,21,   19,20,21,22, 8,56,  3,33,38,  36,37, 62,63,64,65,66,67,68,69,70,71, 55,56,57,58,59,60,61,62,63,64, 16,32,71,72, 18,22,49,60,70,71,72,73,74,75,76,77,  74,75,76,77,78,79,80,  43,44,45,46,47,48,49,50,  13, 19,20,30,  7,8,9,10,11,12,13,14,15,16,   10, 6,7,8,9,10,11,12,     25,26,27,28,29,30,31,32,33, 15,16,  35,36,37,38,39,40,41,42,43,44, 24,  4, 32,33,34,35,36,37,38,39,40,45,46,47,48,49, 21,22,23,24,25,26,27,28,29,30, 13,14, 29,30,31,32,33, 12,13, 1,2,3,4,5,6,7,        14,15,16,17,18,19,20,21, 6,  6,7,   5,6,7,8,9,]
const ahadithsCarottesEtBaton = [];// La carotte et le baton,


// Allah humain?
const souratesAllahHumain = ["Allah a ...", 4, "Allah...", 4,       "Allah a ...", 5,39,48, "Allah ...", 6, 3,                                "Allah...",11,13,20,69,            "Allah...",7, 15,30,32,43,43,44,86,86,   "Allah...", 16, 51, 25,         "Allah...", 2, 5, 57,57, 64,        "Allah...", 75,75, 81,84,85,85,85,85, 86,86, 90,92,92,92, 93,93, "Allah ...", 7,7,7,7,7, "Allah converse avec...", 38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,];
const versetsAllahHumain = ["un ami!", 125,    "le trompeur!", 142, "deux mains!", 64,67,10, "n'a pas de compagne, mais préfère...!", 101,42, "a un trône, sur l'eau!",7,2,5,17, "le vengeur!",136,79,47,22,25,55,16,15,16, "a des sentiments!", 23, 57,61, "demande un prêt", 245, 12, 11,18, 17, "jure!", 1,2, 15,16,1,2,3,5, 1,11, 1,1,2,3, 1,2,            "parle, écrit, compte...!",142,143,144,145,154, " les anges et Iblis",71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88  ];
const ahadithsAllahHumain = [
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 5223,
    texte:
      "إنَّ اللَّهَ يَغَارُ، وإنَّ المُؤْمِنَ يَغَارُ، وَغَيْرَةُ اللهِ أَنْ يَأْتِيَ المُؤْمِنُ ما حَرَّمَ عليه.",
    lien: "https://dorar.net/hadith/sharh/16273",
    autres: "مسلم (2761)",
  },
];// Fin Allah humain,

// Coeur ou cerveau?
const souratesCoeurCerveau = [2, 22, 47, ];
const versetsCoeurCerveau = [118, 46, 24, ];
const ahadithsCoeurCerveau = [];// Fin coeur ou cerveau,

// Les défis
const souratesDefis = ["Les mequois...", 17,17,17,17,     "Allah défie ...",2,2,10, 11,11, 17,17,17,17, 28, 52, 37,37,37,37];
const versetsDefis = ["défient le prophète",90,91,92,93,  "les mequois", 23,24,38, 13,14, 88,94,95,96, 49, 34, 154,155,156,157,];
const ahadithsDefis = [];// Fin les défis,

// La Hidjra
const souratesHijra = [3, 4,4,4,4,4, 8, 9,9,9,9, 16,16, 22,22, 24];
const versetsHijra = [195, 97,98,99,100,101, 26, 20,38,39,40, 41,42, 58,59, 22];
const ahadithsHijra = [];// Fin la Hidjra,

// La logique // Contradiction
const souratesLogiqueContradictions = ["Logique et ...",4,  "Je n'ai ...",14,  24,24, 89, 105, "Le coran en ...", 12,];
const versetsLogiqueContradictions = ["contradictions", 82, "rien vu!",    28,  41,43, 6,  1,   "langue arabe!",   2, ];
const ahadithsLogiqueContradictions = [
  // https://dorar.net/hadith/sharh/122862
];// Fin la logique,

// Répétition / Redondance / Logique / Pas de questions
const souratesRedondances = ["Redondances...", 2,7,17,18,38,38,"Le sexe avec les esclaves",23,23,70,70,  "Menaces de ...", 7, "Menaces de ...",5, "Ne posez pas de ...", 5,24,];
const versetsRedondances = ["Répetitions",34,11,61,50,73,74, "",5,6,29,30, "Pharaon", 124, "Allah", 33,                "questions...", 101, 51];
const ahadithsRedondances = [];// Fin Redondance,

// Temporalité
const souratesTemporel = [17,17,17,17,17,17,17,17,17, 24,24, 33,33,33, 93, 94,106, ];
const versetsTemporel = [ 47,48,50,51,73,74,75,76,77, 62,63, 50,51,52,  1,1,1];
const ahadithsTemporel = [];// Fin temporalité,


// Ils ont mécru
const souratesMecru = [
  "Ils ont mécru ... ", 7, 7, 10, 11, 11, 21, 23, 26, 26, 54,
  "Ils ont mécru ...", 19,
  "Ils ont mécru ...", 7,
  "Ils ont mécru ...", 17,
  "Ils ont mécru ...", 16, 17,17,17,17,17,17, 31,31, 38,38,
];

const versetsMecru = [
  "Noé", 60, 64, 73, 27, 32, 77, 24, 105, 111, 9,
  "Abraham", 46,
  "les preuves d'Allah !", 146,
  "Salah", 59,
  "Muhammad", 101, 89,90,91,92,93,94, 7,21, 67,68,
  
];

const ahadithsMecru = [
  // https://dorar.net/hadith/sharh/12039
  // https://dorar.net/hadith/sharh/24772
  // https://dorar.net/hadith/sharh/7243

];// ils ont mécru,

// LEs fêtes
// https://dorar.net/h/0qnMuTLh?sims=1
// https://dorar.net/hadith/sharh/1


// Raisons de révélation
// https://dorar.net/hadith/sharh/41605
// 
//////////////////,142,255, ,
// Fonction injecter les sourates selon le thème
function injecteVersets (titreThematique, sourates, versets) {
  tableau.innerHTML = "";
  
   pTitreThematique.textContent = `Versets sur ${titreThematique}`;
  tableau.appendChild(pTitreThematique)
    
  for (let index = 0; index < sourates.length; index++) {
       let divVersets = document.createElement("div");
      divVersets.setAttribute('class', 'divVerset')
      let pVerset = document.createElement("p");
    pVerset.setAttribute("class", "pVerset");
    divVersets.appendChild(pVerset);
    tableau.appendChild(divVersets)
    
    if (typeof (sourates[index]) != "number") {
      pVerset.innerHTML = `<span class="numeroVerset histoireJoseph" id='${sourates[index]}'>  ${sourates[index]}  </br> ${versets[index]}</span>`;
    } else {
      numeroSourate = sourates[index]
      numeroVerset = `s${numeroSourate}v${versets[index]}`;
    
     let sourate = coran[numeroSourate - 1]
     let verset = sourate[numeroVerset]
  
      pVerset.innerHTML = `<span class="numeroVerset ">  ${numeroVerset}. </span> </br> ${verset}`;
      
    }
  }

  // Exemple versets abrogation
  /*
  if (exemples) {
    let divExemples = document.createElement("div")
    divExemples.setAttribute('class', 'divSourate')
    tableau.appendChild(divExemples)
    divExemples.innerHTML = `<h3 class = 'titreSourate'> Exemples de versets abrogés</h3> `
    exemples.forEach(exemple=> {
      let verset = "s" + exemple.s + "v" + exemple.v;
      sourate = coran[exemple.s-1]
      verset =sourate[verset]
     
      let pVerset = document.createElement('p')
      pVerset.setAttribute('class', 'pVerset')
      pVerset.innerHTML = `<span class="numeroVerset">S${exemple.s - 1}. V${
        exemple.v
      }. </span></br> ${verset}`;
      divExemples.appendChild(pVerset)
      
    })    
  }*/
  // fin exemples
}

// Fonction injecter les Ahadiths selon le thème
function injecteAhadiths(titreThematique, ahadiths) {
  tableau.innerHTML = "";

  pTitreThematique.textContent = `Ahadiths authentiques sur ${titreThematique}`;
  tableau.appendChild(pTitreThematique);
  ahadiths.forEach(hadith => {
    
    let divHadith = document.createElement('div')
    divHadith.setAttribute('class', 'carteHadith')
    divHadith.innerHTML = `
  <h4 class = "couleurSujet"> Sujet: ${hadith.sujet}  </h3>
  <p> Auteur: <span class="fst-italic">${hadith.auteur} </span></p>
  <p> Numéro du hadith: <span class="fst-italic">${hadith.numero} </span></p>
  <p> Hadith en arabe: <span class="fst-italic">${hadith.texteArabe} </span></p>
  <p> Hadith en français: <span class="fst-italic">${hadith.texteFrancais} </span></p>
  <p> Plus d'infos: <span class="fst-italic"><a href= '${hadith.lien}'  target='_blank'> Dorar الدرر السنية</a> </span></p>
  <p> Autres Ahadiths:<span class="fst-italic"> ${hadith.autres} </span></p>
  `;
   tableau.appendChild(divHadith)
  })
}