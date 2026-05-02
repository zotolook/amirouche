// 1. La foi, la guidance et l’égarement
const souratesPffGuidance = [2, 5, 10, 39,];
const versetsPffGuidance = [137, 67, 94, 45,];
const ahadithsPffGuidance = [
  {
    sujet: "🕌 Crachats pendant la prière !",
    auteur: "El Boukhari صحيح البخاري",
    numero: 416,
    texteArabe:
      " إن أحدَكم إذا قام في صلاتِه فإنه يُناجي ربَّه ، و إنَّ ربَّه بينَه و بين القبلةِ ، فلا يبزُقنَّ أحدُكم قِبَلَ قبلتِه ، و لكن عن يسارِه أو تحتَ قدمِه",
    texteFrancais:
      "« Lorsque l’un de vous se met en prière, il est en train de s’entretenir avec son Seigneur, et son Seigneur est entre lui et la qibla. Qu’aucun de vous ne crache donc en direction de sa qibla, mais qu’il crache à sa gauche ou sous son pied. »",
    lien: "https://dorar.net/hadith/sharh/114172",
    autres: "",
  },
  {
    sujet: "🕌 Le prophète voit derrère son dos !  ",
    auteur: "El Boukhari صحيح البخاري",
    numero: 418,
    texteArabe:
      " أترونَ قِبلتي هاهُنا؟ فواللَّهِ ما يخفى عليَّ خشوعُكُم ولا رُكوعُكُم إنِّي لأراكم من وراءِ ظَهْري",
    texteFrancais:
      "« Pensez-vous que ma direction de prière est seulement ici ? Par Allah, rien de votre humilité ni de vos inclinations ne m’échappe. Je vous vois même derrière mon dos. »",
    lien: "https://dorar.net/hadith/sharh/112163",
  },
  {
    sujet: "😈 Le dable urine dans l'oreil des croyants !",
    auteur: "El Boukhari صحيح البخاري",
    numero: 1114,
    texteArabe:
      " ذَاكَ رَجُلٌ بَالَ الشَّيْطَانُ في أُذُنَيْهِ، أَوْ قالَ: في أُذُنِهِ.",
    texteFrancais:
      "« C’est un homme dans les oreilles duquel le diable a uriné — ou il a dit : dans son oreille. »",
    lien: "https://dorar.net/hadith/sharh/9598",
    autres: "",
  },
  {
    sujet: "Circoncision d'Abraham ! ",
    auteur: "  صحيح البخاري",
    numero: 3356,
    texteArabe:
      "اختَتَنَ إبراهيمُ النَّبيُّ عليه السَّلامُ، وهو ابنُ ثَمانينَ سَنةً بالقَدُومِ.",
    texteFrancais: "« Abraham se fit circoncire à l’âge de 80 ans. »",
    lien: "https://dorar.net/hadith/sharh/16636",
    autres: "مسلم (2370)",
  },
  {
    sujet: "⚔️ Les meilleurs anges !",
    auteur: "صحيح البخاري",
    numero: 3992,
    texteArabe:
      "مَنْ شهِدَ بدْرًا من الملائِكةِ همْ عِندَنا خِيارُ الملائِكةِ ",
    texteFrancais:
      "« Ceux des anges qui ont participé (à la bataille) de Badr sont, auprès de nous, les meilleurs des anges. »",
    lien: "https://dorar.net/hadith/sharh/10482",
    autres: "ابن ماجه (160)، وأحمد (15820)، وابن أبي شيبة (37886)",
  },
  {
    sujet: "Djibril participe à une bataille !",
    auteur: "صحيح البخاري",
    numero: 3995,
    texteArabe: " هذا جبريلُ آخِذٌ برأْسِ فرَسِهِ ، عليه أداةُ الحرْبِ ",
    texteFrancais:
      "« Voici Jibrîl (Gabriel), tenant la bride de son cheval, portant son équipement de guerre. »",
    lien: "https://dorar.net/hadith/sharh/68773",
    autres: "الطبراني (11/ 342) (11952)، والبيهقي في ((دلائل النبوة)) (3/ 54)",
    },
  
];

// 2. La responsabilité individuelle et le jugement
const souratesPffJugement = [10, 39, 50, 48,];
const versetsPffJugement = [30, 15, 30, 17,];
const ahadithsPffJugement = [
  {
    sujet: "⚖️ Morale, péchés et responsabilité spirituelle",
    auteur: "El Boukhari صحيح البخاري",
    numero: 218,
    texteArabe:
      "  أمَّا أحدُهما فكان يسعى بالنَّميمةِ وأمَّا الآخَرُ فكان لا يستنزِهُ مِن بولِه إنَّهما ليُعذَّبانِ وما يُعذَّبانِ في كبيرٍ",
    texteFrancais:
      "« L’un d’eux colportait la médisance (la calomnie), et l’autre ne se protégeait pas de son urine. Ils étaient tous deux en train d’être punis, et ils n’étaient pas punis pour une chose qu’ils considéraient comme grave. »",
    lien: "https://dorar.net/hadith/sharh/12463",
    autres: "1361, 1378 ",
  },
  {
    sujet: "🌌 70 000 croyants entreront au paradis!",
    auteur: "El Boukhari صحيح البخاري",
    numero: 6542,
    texteArabe:
      "يَدْخُلُ الجَنَّةَ مِن أُمَّتي زُمْرَةٌ هُمْ سَبْعُونَ ألْفًا، تُضِيءُ وُجُوهُهُمْ إضاءَةَ القَمَرِ لَيْلَةَ البَدْرِ ",
    texteFrancais:
      "« Un groupe de ma communauté entrera au Paradis : ils seront soixante-dix mille, leurs visages brilleront comme la lune la nuit de pleine lune. »",
    lien: "https://dorar.net/hadith/sharh/26256",
    autres: "",
  },
];

// 3. La connaissance et la puissance d’Allah
const souratesPffPuissanceAllah = [6, 35, 24,];
const versetsPffPuissanceAllah = [59, 41, 35,];
const ahadithsPffPuissanceAllah = [
  {
    sujet: "🌿 La taille des humains ne cesse de diminuer !",
    auteur: "El Boukhari صحيح البخاري",
    numero: 6227,
    texteArabe:
      " فكُلُّ مَن يَدخلُ الجنةَ على صورةِ آدمَ في طُولِه سِتُّونَ ذِراعًا ، فلمْ تَزلْ الخَلْقُ تَنقُصُ بعدَه حتى الآنَ",
    texteFrancais:
      "« Tous ceux qui entreront au Paradis seront à l’image d’Adam, avec une taille de soixante coudées. Et la création n’a cessé de diminuer en taille depuis lui jusqu’à maintenant. »",
    lien: "https://dorar.net/hadith/sharh/12844",
    autres: "",
    },
    
];

// 4. Les signes dans la création (nature, animaux, cosmos)
const souratesPffCreation = [22, 36,36,36, 27, 40,];
const versetsPffCreation = [18, 71,72,73, 86, 67,];
const ahadithsPffCreation = [
  {
    sujet: "👁️‍🗨️ Les coqs voient des anges tant disque les âne des démons !",
    auteur: "El Boukhari صحيح البخاري",
    numero: 3303,
    texteArabe:
      "إذا سمعتُم صِياحَ الدِّيكةِ فسَلُوا الله تعالى من فَضْلِه؛ فإنَّها رأت مَلَكًا، وإذا سمعتُم نهيقَ الحِمارِ فتعَوَّذوا بالله من الشَّيطانِ؛ فإنَّها رأت شيطانًا ",
    texteFrancais:
      "« Lorsque vous entendez le chant du coq, demandez à Allah de Sa grâce, car il a vu un ange. Et lorsque vous entendez le braiment de l’âne, cherchez refuge auprès d’Allah contre le diable, car il a vu un diable. »",
    lien: "https://dorar.net/hadith/sharh/10511",
    autres: "",
  },
  {
    sujet: "🌄 Les singes lapidés !",
    auteur: "El Boukhari صحيح البخاري",
    numero: 3849,
    texteArabe:
      " رَأَيْتُ في الجَاهِلِيَّةِ قِرْدَةً اجْتَمع عَلَيْهَا قِرَدَةٌ، قدْ زَنَتْ، فَرَجَمُوهَا، فَرَجَمْتُهَا معهُمْ.",
    texteFrancais:
      "« J’ai vu, à l’époque de la جاهلية (avant l’islam), une guenon autour de laquelle des singes s’étaient rassemblés parce qu’elle avait commis la fornication ; ils l’ont lapidée, et je l’ai lapidée avec eux. »",
    lien: "https://dorar.net/hadith/sharh/150656",
    autres: "",
  },
  {
    sujet:
      "⚔️ Combat eschatologique: La pierre qui montre un juif au musulman pour le tuer!",
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
    sujet: "⚔️ Moïse le pudique et la pierre !",
    auteur: "El Boukhari صحيح البخاري",
    numero: 3404,
    texteArabe: "...ثَوبي حَجَرُ، ثَوبي حَجَرُ، ... ",
    texteFrancais: "« Moïse (Mūsā) était un homme très pudique et discret ...",
    lien: "https://dorar.net/hadith/sharh/26282",
    autres: "مسلم (339)",
  },
];

// 5. Les lois sociales et morales
const souratesPffLois = [24,24,24, 5,5,5, 58,58, 24,];
const versetsPffLois = [27,28,29, 106,107,108, 3,4, 58, ];
const ahadithsPffLois = [
  {
    sujet: "🏠 Entrez vos maisons par leur porte !",
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
    sujet: "🐾 Tuez les serpents !",
    auteur: "El Boukhari صحيح البخاري",
    numero: 3297,
    texteArabe:
      " اقْتُلُوا الحَيّاتِ، واقْتُلُوا ذا الطُّفْيَتَيْنِ والأبْتَرَ، فإنَّهُما يَطْمِسانِ البَصَرَ، ويَسْتَسْقِطانِ الحَبَلَ.",
    texteFrancais:
      "« Tuez les serpents, et tuez celui qui a deux lignes sur le dos ainsi que le serpent sans queue, car ils peuvent faire perdre la vue et provoquer des fausses couches. »",
    lien: "https://dorar.net/hadith/sharh/12143",
    autres: "3310",
  },
  {
    sujet: "🐾 Tuez le lézard domestique !",
    auteur: "El Boukhari صحيح البخاري",
    numero: 3306,
    texteArabe:
      " أمَر رسولُ اللهِ صلَّى اللهُ عليه وسلَّم بقتلِ الوَزَغِ وسمَّاه فُوَيْسِقًا",
    texteFrancais:
      "« Le Messager d’Allah ﷺ a ordonné de tuer le gecko (lézard domestique) et l’a appelé un petit être nuisible (fuwaysiq). »",
    lien: "https://dorar.net/hadith/sharh/16054",
    autres: "",
  },
  {
    sujet: "🐾 5 animaux à tuer !",
    auteur: "El Boukhari صحيح البخاري",
    numero: 3314,
    texteArabe:
      " خمسُ فواسِقَ يُقتَلْنَ في الحِلِّ والحَرَمِ الفأرةُ والعَقْرَبُ والحِدَأَةُ والكَلبُ العَقورُ والغُرَابُ",
    texteFrancais:
      "« Cinq créatures nuisibles doivent être tuées, que ce soit en état de sacralisation (ihram) ou en dehors : la souris, le scorpion, le milan (rapace), le chien mordeur (dangereux), et le corbeau. »",
    lien: "https://dorar.net/hadith/sharh/124358",
    autres: "",
  },
  {
    sujet: "🐾 Hygiène et pratiques alimentaires !",
    auteur: "El Boukhari صحيح البخاري",
    numero: 3320,
    texteArabe:
      "إذا وقَعَ الذُّبابُ في إناءِ أحَدِكم فامقُلُوه؛ فإنَّ في أحَدِ جَناحَيه داءً، وفي الآخَرِ شِفاءً، وإنَّه يتَّقي بجَناحِه الذي فيه الدَّاءُ، فلْيَغمِسْه كُلَّه ",
    texteFrancais:
      "« Lorsque une mouche tombe dans le récipient de l’un de vous, qu’il l’y plonge entièrement (puis la retire), car dans l’une de ses ailes il y a une maladie et dans l’autre un remède. Elle se protège avec l’aile contenant la maladie, donc qu’il l’immerge entièrement. »",
    lien: "https://dorar.net/hadith/sharh/117405",
    autres: "",
  },
  {
    sujet: "🐾 Tuez les chiens !",
    auteur: "Muslim صحيح مسلم",
    numero: 1572,
    texteArabe:
      "أمرَ نبيُّ اللَّهِ صلَّى اللَّهُ عليْهِ وسلَّمَ بقتلِ الْكلابِ . حتَّى إن كانتِ المرأةُ تقدُمُ منَ الباديةِ يعني بالْكلبِ فنقتلُهُ ثمَّ نَهانا عن قتلِها وقالَ عليْكم بالأسوَدِ",
    texteFrancais:
      "« Le Prophète ﷺ a ordonné de tuer les chiens, au point que lorsqu’une femme venait de la campagne avec un chien, nous le tuions. Puis il nous a interdit de les tuer et a dit : “Occupez-vous du chien noir.” »",
    lien: "https://dorar.net/hadith/sharh/37032",
    autres: "",
  },
  {
    sujet: "😈 Le diable rit dans les ventres des bailleurs !",
    auteur: "El Boukhari صحيح البخاري",
    numero: 6223,
    texteArabe:
      "إنَّ اللهَ يُحِبُّ العُطاسَ ويكرَهُ التَّثاؤبَ فإذا تثاءَب أحدُكم فليكظِمْ ما استطاع أو ليضَعْ يدَه على فيه فإنَّه إذا تثاءَب فقال: آه فإنَّما هو الشَّيطانُ يضحَكُ مِن جوفِه ",
    texteFrancais:
      "« Allah aime l’éternuement et déteste le bâillement. Si l’un de vous bâille, qu’il essaie de le retenir autant que possible ou qu’il mette sa main sur sa bouche, car lorsque l’un de vous bâille en disant “ah”, c’est le diable qui rit dans son ventre. »",
    lien: "https://dorar.net/hadith/sharh/15100",
    autres: "",
  },
  {
    sujet: "😈 Le diable passe ses nuits dans les narines des croyants !",
    auteur: "El Boukhari صحيح البخاري",
    numero: 3295,
    texteArabe:
      " إذا استيقظ أحدُكم من منامِه فتوضَّأَ فلْيَسْتَنْثِرْ ثلاثَ مراتٍ ، فإنَّ الشيطانَ يبِيتُ على خياشيمِه",
    texteFrancais:
      "« Lorsque l’un de vous se réveille de son sommeil et fait ses ablutions, qu’il se mouche (et nettoie son nez) trois fois, car le diable passe la nuit sur ses narines. »",
    lien: "https://dorar.net/hadith/sharh/3551",
    autres: "",
  },
  {
    sujet: "🏠 Rentrez dans vos maisons par la porte d'entrée !",
    auteur: "El Boukhari صحيح البخاري",
    numero: 4512,
    texteArabe:
      " كَانُوا إذَا أحْرَمُوا في الجَاهِلِيَّةِ أتَوْا البَيْتَ مِن ظَهْرِهِ فأنْزَلَ اللَّهُ: {وَليسَ البِرُّ بأَنْ تَأْتُوا البُيُوتَ مِن ظُهُورِهَا ولَكِنَّ البِرَّ مَنِ اتَّقَى وأْتُوا البُيُوتَ مِن أبْوَابِهَا}",
    texteFrancais:
      "« Les gens, à l’époque de la jāhiliyya, lorsqu’ils entraient en état de sacralisation (ihram), entraient dans leurs maisons par l’arrière. Alors Allah a révélé :“Ce n’est pas un acte de piété que d’entrer dans les maisons par l’arrière, mais la piété est celle de celui qui craint Allah ; entrez donc dans les maisons par leurs portes.” »",
    lien: "https://dorar.net/hadith/sharh/3083",
    autres: "",
  },
  {
    sujet: "⚔️ Une comparaison absurde!",
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
    sujet: "⚔️ Une raison de révélation absurde!",
    auteur: "صحيح البخاري",
    numero: 4622,
    texteArabe:
      "كان قَومٌ يَسألونَ رَسولَ اللهِ صلَّى اللهُ عليه وسلَّم استِهزاءً ...",
    texteFrancais:
      "« Des gens interrogeaient le Messager d’Allah ﷺ par moquerie...",
    lien: "https://dorar.net/hadith/sharh/81685",
    autres: "من أفراد البخاري على مسلم ",
    },
  
];

// 6. Les récits des prophètes et des peuples
const souratesPffRecits = [7, 20, 27, 18, ];
const versetsPffRecits = [148, 71, 18, 25, ];
const ahadithsPffRecits = [
  {
    sujet: "🧑‍🤝‍🧑 La taille d'Adam !",
    auteur: "El Boukhari صحيح البخاري",
    numero: 6227,
    texteArabe: " خلَق اللهُ آدَمَ على صورتِه وطولُه سِتُّونَ ذراعًا",
    texteFrancais:
      "« Allah a créé Adam à Son image, et sa taille était de soixante coudées. »",
    lien: "https://dorar.net/hadith/sharh/12845",
    autres: "",
  },
  {
    sujet: "📖 Les questions impossbles au prophète !",
    auteur: "El Boukhari صحيح البخاري",
    numero: 3938,
    texteArabe: " إنِّي سَائِلُكَ عن ثَلَاثٍ لا يَعْلَمُهُنَّ إلَّا نَبِيٌّ",
    texteFrancais:
      "« Je vais te poser trois questions que seul un prophète peut connaître. »",
    lien: "https://dorar.net/hadith/sharh/14507",
    autres: "",
  },
  {
    sujet: "👁️‍🗨️ Gabriel salue Aisha !",
    auteur: "El Boukhari صحيح البخاري",
    numero: 6249,
    texteArabe:
      "يا عائِشَةُ هذا جِبْرِيلُ يَقْرَأُ عَلَيْكِ السَّلامَ قالَتْ: قُلتُ: وعليه السَّلامُ ورَحْمَةُ اللَّهِ، تَرَى ما لا نَرَى ",
    texteFrancais:
      "« Ô ‘Aïcha, voici Jibril (Gabriel) qui te transmet le salut. » Elle dit : « J’ai répondu : “Et sur lui la paix et la miséricorde d’Allah.” Tu vois ce que nous ne voyons pas. »",
    lien: "https://dorar.net/hadith/sharh/4741",
    autres: "",
  },
  {
    sujet: "🌌 Une énorme rappe de raisin du paradis !",
    auteur: "El Boukhari صحيح البخاري",
    numero: 5197,
    texteArabe:
      "رأيتُ الجنةَ فتناولتُ منها عُنقودًا ولو أخذتُه لأكلتُم منه ما بَقِيَتِ الدنيا",

    texteFrancais:
      "« J’ai vu le Paradis et j’ai voulu en saisir une grappe (de raisin). Si je l’avais prise, vous en auriez mangé tant que le monde aurait duré. »",
    lien: "https://dorar.net/hadith/sharh/67314",
    autres: "",
    },
  
];

// 7. Le combat intérieur : bien vs mal
const souratesPffCombatInterieur = [17, 6, ];
const versetsPffCombatInterieur = [64, 142, ];
const ahadithsPffCombatInterieur = [
  {
    sujet: "👁️‍🗨️ Les djinns essayent d'interrompre la prière !",
    auteur: "صحيح البخاري",
    numero: 461,
    texteArabe:
      " إنَّ عِفْرِيتًا مِنَ الجِنِّ جَعَلَ يَفْتِكُ عَلَيَّ البارِحَةَ، لِيَقْطَعَ عَلَيَّ الصَّلاةَ",
    texteFrancais:
      "« Un ‘ifrit parmi les djinns s’est attaqué à moi la nuit dernière pour interrompre ma prière. »",
    lien: "https://dorar.net/hadith/sharh/12321",
    autres: "مسلم (541) ",
    },
    
];

// 8. Spiritualité et rappel
const souratesPffSpiritualite = [33, 39, 59, ];
const versetsPffSpiritualite = [56, 10, 21, ];
const ahadithsPffSpiritualite = [
  {
    sujet: "Comment faire ses besoins !",
    auteur: "El Boukhari صحيح البخاري",
    numero: 144,
    texteArabe:
      "إِذَا أتَى أحَدُكُمُ الغَائِطَ، فلا يَسْتَقْبِلِ القِبْلَةَ ولَا يُوَلِّهَا ظَهْرَهُ، شَرِّقُوا أوْ غَرِّبُوا. ",
    texteFrancais:
      "« Lorsque l’un de vous va faire ses besoins, qu’il ne se mette pas face à la qibla ni ne lui tourne le dos ; orientez-vous plutôt vers l’est ou vers l’ouest. »",
    lien: "https://dorar.net/hadith/sharh/22725",
  },
  {
    sujet: "Comment faire ses besoins !",
    auteur: "El Boukhari صحيح البخاري",
    numero: 153,
    texteArabe:
      " لا يُمْسِكَنَّ أحَدُكُمْ ذَكَرَهُ بيَمِينِهِ وهو يَبُولُ، ولا يَتَمَسَّحْ مِنَ الخَلاءِ بيَمِينِهِ، ولا يَتَنَفَّسْ في الإناءِ.",
    texteFrancais:
      "« Que l’un de vous ne tienne pas son organe avec sa main droite lorsqu’il urine, qu’il ne s’essuie pas après les toilettes avec sa main droite, et qu’il ne souffle pas dans le récipient (où il boit). »",
    lien: "https://dorar.net/hadith/sharh/17634",
  },
  {
    sujet:
      "hygiène et purification des ustensiles contaminés par les animaux 🐶",
    auteur: "Muslim صحيح مسلم",
    numero: 280,
    texte:
      " إذا ولغَ الكلبُ في الإناءِ فاغسِلوهُ سبعَ مرَّاتٍ وعفِّروهُ الثَّامنةَ بالتُّرابِ",

    texteFrancais:
      "« Lorsque le chien lèche un récipient, lavez-le sept fois, et la huitième fois frottez-le avec de la terre. »",
    lien: "https://dorar.net/hadith/sharh/32134",
  },
  {
    sujet: "😈 Cracher après un mauvais rêve !",
    auteur: "El Boukhari صحيح البخاري",
    numero: 3292,
    texteArabe:
      "الرؤيَا الصالحةُ من اللهِ ، والحلمُ من الشيطانِ ، فإذا حلمَ أحدكم حلما يخافهُ ، فليبصقْ عن يسارهِ ثلاثَ مراتٍ ، وليستعذْ باللهِ من شرهِ ، فإنه لا يضرهُ ",
    texteFrancais: "",
    lien: "https://dorar.net/hadith/sharh/121916",
    autres: "",
    },
  
];
