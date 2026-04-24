// 1- Le djihad offensif -->
const souratesDjihadOffensif = [2,  2,   2,   3,   3,   3,   4, 4,   4, 4,4,   4, 4,  4,   4,   4,   5, 8, 8, 8,    9, 9, 9,   9,  9,   9, 9,9,   9,  9,  9,  9,  9,   9, 9,   9, 9,   9, 9,  9,  9,  9, 9, 9,    9,  9,   9,   22, 29, 47, 47,49, 61, 61, 61, 66,];
const versetsDjihadOffensif = [190, 191, 216, 146, 155, 156, 71, 72, 73,74,77, 89, 91, 95, 102, 104, 33, 14,39, 44, 5, 12, 14, 25, 26, 29, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49,73, 74, 81, 82, 83, 88, 93, 111, 123, 78, 69, 4,  35, 15, 4, 10, 11,  9,];
const ahadithsDjihadOffensif = [
  {
    sujet: "Le combat pour élever la parole d’Allah",
    auteur: "El Boukhari صحيح البخاري",
    numero: 123,
    texteArabe:
      "مَن قَاتَلَ لِتَكُونَ كَلِمَةُ اللَّهِ هي العُلْيَا، فَهو في سَبيلِ اللَّهِ عزَّ وجلَّ. ",
    texteFrancais:
      "« Celui qui combat afin que la parole d’Allah soit la plus élevée, celui-là est dans le chemin d’Allah. »",
    lien: "https://dorar.net/hadith/sharh/8229",
    autres: "",
  },
  {
    sujet: "Terrain de la mosquée",
    auteur: "El Boukhari صحيح البخاري",
    numero: 428,
    texteArabe:
      "يا بَنِي النَّجَّارِ ثامِنُونِي بحائِطِكُمْ، قالوا: لا نَطْلُبُ ثَمَنَهُ، إلَّا إلى اللَّهِ. ",
    texteFrancais: "“... Nous n’en demandons le prix qu’à Allah.” ",
    lien: "https://dorar.net/hadith/sharh/15455",
    autres: "",
  },
  {
    sujet: "Descente de Jibril",
    auteur: "El Boukhari صحيح البخاري",
    numero: 3995,
    texteArabe: " هذا جِبْرِيلُ آخِذٌ برَأْسِ فَرَسِهِ عليه أدَاةُ الحَرْبِ.",
    texteFrancais:
      "« Jibril tenait la tête de son cheval, portant les marques de la poussière… »",
    lien: "https://dorar.net/hadith/sharh/11475",
    autres: 4041,
  },
  {
    sujet: "Châtiment de Bani El Moustaliq",
    auteur: "El Boukhari صحيح البخاري",
    numero: 2541,
    texteArabe:
      " إنَّ النَّبيَّ صلَّى اللهُ عليه وسلَّمَ أغَارَ علَى بَنِي المُصْطَلِقِ وهُمْ غَارُّونَ، وأَنْعَامُهُمْ تُسْقَى علَى المَاءِ، فَقَتَلَ مُقَاتِلَتَهُمْ، وسَبَى ذَرَارِيَّهُمْ، وأَصَابَ يَومَئذٍ جُوَيْرِيَةَ.",
    texteFrancais:
      "« …leurs troupeaux étaient abreuvés à l’eau. Il combattit leurs combattants, fit des captifs parmi leurs enfants, puis… »",
    lien: "https://dorar.net/hadith/sharh/7139",
    autres: 3804,
  },
  {
    sujet: "Combat contre Juifs",
    auteur: "El Boukhari صحيح البخاري",
    numero: 2926,
    texteArabe:
      " لا تَقُومُ السَّاعَةُ حتَّى تُقاتِلُوا اليَهُودَ، حتَّى يَقُولَ الحَجَرُ وراءَهُ اليَهُودِيُّ: يا مُسْلِمُ، هذا يَهُودِيٌّ وَرائي فاقْتُلْهُ.",
    texteFrancais:
      "« Vous combattrez les Juifs, jusqu’à ce que la pierre derrière laquelle se cache un Juif dise : “Ô musulman, voici un Juif derrière moi, viens-le tuer.” »",
    lien: "https://dorar.net/hadith/sharh/15003",
    autres: 3593,
  },
  {
    sujet: "Le prophète coupe et brule les palmiers de Banu Nadhir",
    auteur: "El Boukhari صحيح البخاري",
    numero: 4032,
    texteArabe:
      " حرَّقَ رسولُ اللَّهِ صلَّى اللَّهُ علَيهِ وسلَّمَ نخلَ بَني النَّضيرِ وقطَّعَ، وَهيَ البوَيْرةُ، فأنزلَ اللَّهُ مَا قَطَعْتُمْ مِنْ لِينَةٍ أَوْ تَرَكْتُمُوهَا قَائِمَةً عَلَى أُصُولِهَا فَبِإِذْنِ اللَّهِ وَلِيُخْزِيَ الْفَاسِقِينَ",
    texteFrancais:
      "« …et Allah fit descendre (le verset) : “Tout palmier que vous avez coupé ou laissé debout sur ses racines, c’est par permission d’Allah…” »",
    lien: "https://dorar.net/hadith/sharh/5268",
    autres: 4028,
  },
  {
    sujet: "Le prophète refuse le combat à un adolescent de 14 ans",
    auteur: "El Boukhari صحيح البخاري",
    numero: 2664,
    texteArabe:
      "  أنَّ النبيَّ صَلَّى اللهُ عليه وسلَّمَ: عَرَضَهُ يَومَ أُحُدٍ وهو ابنُ أرْبَعَ عَشْرَةَ سَنَةً، فَلَمْ يُجِزْهُ، وعَرَضَهُ يَومَ الخَنْدَقِ، وهو ابنُ خَمْسَ عَشْرَةَ سَنَةً، فأجَازَهُ.",
    texteFrancais:
      "« Le Prophète ﷺ le présenta (pour le combat) le jour de Uhud alors qu’il avait 14 ans, mais il ne l’accepta pas. Puis il le présenta le jour de al-Khandaq alors qu’il était… »",
    lien: "https://dorar.net/hadith/sharh/25633",
    autres: 4097,
  },
  {
    sujet: "Expédition Banu Qurayza",
    auteur: "El Boukhari صحيح البخاري",
    numero: 2813,
    texteArabe:
      "لَمَّا رَجَعَ النبيُّ صَلَّى اللهُ عليه وسلَّمَ مِنَ الخَنْدَقِ، ووَضَعَ السِّلَاحَ واغْتَسَلَ، أتَاهُ جِبْرِيلُ عليه السَّلَامُ، فَقالَ: قدْ وضَعْتَ السِّلَاحَ؟ واللَّهِ ما وضَعْنَاهُ، فَاخْرُجْ إليهِم قالَ: فَإِلَى أيْنَ؟ قالَ: هَا هُنَا، وأَشَارَ إلى بَنِي قُرَيْظَةَ، فَخَرَجَ النبيُّ صَلَّى اللهُ عليه وسلَّمَ إليهِم ",
    texteFrancais:
      "« Il dit : “Avez-vous déposé les armes ?” Ils répondirent : “Par Allah, nous ne les avons pas déposées.” Alors il dit : “Sors vers eux.” Il demanda : “Où cela ?” Il répondit en désignant Banū Qurayza. Alors le Prophète ﷺ sortit vers eux. »",
    lien: "https://dorar.net/hadith/sharh/21196",
    autres: 4117,
  },
  {
    sujet: "Poésie contre ennemis",
    auteur: "El Boukhari صحيح البخاري",
    numero: 4123,
    texteArabe:
      "قَالَ رَسولُ اللَّهِ صلَّى اللهُ عليه وسلَّمَ يَومَ قُرَيْظَةَ لِحَسَّانَ بنِ ثَابِتٍ: اهْجُ المُشْرِكِينَ؛ فإنَّ جِبْرِيلَ معكَ. ",
    texteFrancais:
      "« Le Messager d’Allah ﷺ, le jour de (Banū) Qurayza, dit à Ḥassān ibn Thābit : “Satirise les polythéistes.” »",
    lien: "https://dorar.net/hadith/sharh/14401",
    autres: "",
  },
  {
    sujet: "Annonce de Khaybar",
    auteur: "El Boukhari صحيح البخاري",
    numero: 4197,
    texteArabe:
      " أنَّ رَسولَ اللَّهِ صَلَّى اللهُ عليه وسلَّمَ أتَى خَيْبَرَ لَيْلًا، وكانَ إذا أتَى قَوْمًا بلَيْلٍ لَمْ يُغِرْ بهِمْ حتَّى يُصْبِحَ، فَلَمَّا أصْبَحَ خَرَجَتِ اليَهُودُ بمَساحِيهِمْ، ومَكاتِلِهِمْ فَلَمَّا رَأَوْهُ قالوا: مُحَمَّدٌ واللَّهِ، مُحَمَّدٌ والخَمِيسُ، فقالَ النبيُّ صَلَّى اللهُ عليه وسلَّمَ: خَرِبَتْ خَيْبَرُ، إنَّا إذا نَزَلْنا بساحَةِ قَوْمٍ {فَساءَ صَباحُ المُنْذَرِينَ} [الصافات: 177]",
    texteFrancais:
      "... « Le Prophète ﷺ dit : “Khaybar est détruite. Lorsque nous descendons dans le territoire d’un peuple…” »",
    lien: "https://dorar.net/hadith/sharh/24120",
    autres: "371, 4200, 4201, 4211, 4213",
  },
  {
    sujet: "Ghazawāt du Prophète",
    auteur: "El Boukhari صحيح البخاري",
    numero: 3949,
    texteArabe:
      " كنتُ إلى جنبِ زيدِ بنِ أرقمَ فقيلَ لهُ : كم غزا النَّبيُّ صلَّى اللَّهُ عليهِ وسلَّمَ من غزوةٍ قالَ : تسعَ عشرةَ فقلتُ : كم غزوتَ أنتَ معهُ ؟قالَ : سبعَ عشرةَ ، قلتُ : وأيَّتُهنَّ كانَ أوَّلَ ؟ قالَ : ذاتُ العُشَيراءِ – أو العُسَيراءِ -",
    texteFrancais:
      "... Combien de campagnes militaires le Prophète ﷺ a-t-il menées ?” Il répondit : “Dix-neuf.”",
    lien: "https://dorar.net/hadith/sharh/12021",
    autres: 4471,
  },
  {
    sujet: "Supériorité des combattants",
    auteur: "El Boukhari صحيح البخاري",
    numero: 4592,
    texteArabe:
      "لَا يَسْتَوِي الْقَاعِدُونَ مِنَ الْمُؤْمِنِينَ} {وَالْمُجَاهِدُونَ فِي سَبِيلِ اللَّهِ} [النساء: 95] ",
    texteFrancais:
      "« Ne sont pas égaux les croyants qui restent chez eux et ceux qui luttent dans le chemin d’Allah… »",
    lien: "https://dorar.net/hadith/sharh/3173",
    autres: 4990,
  },
  {
    sujet: "Combat et foi",
    auteur: "El Boukhari صحيح البخاري",
    numero: 25,
    texteArabe:
      " أُمِرْتُ أنْ أُقَاتِلَ النَّاسَ حتَّى يَشْهَدُوا أنْ لا إلَهَ إلَّا اللَّهُ، وأنَّ مُحَمَّدًا رَسولُ اللَّهِ، ويُقِيمُوا الصَّلَاةَ، ويُؤْتُوا الزَّكَاةَ، فَإِذَا فَعَلُوا ذلكَ عَصَمُوا مِنِّي دِمَاءَهُمْ وأَمْوَالَهُمْ إلَّا بحَقِّ الإسْلَامِ، وحِسَابُهُمْ علَى اللَّهِ.",
    verset: "s9v5",
    texteFrancais: "« J’ai été ordonné de combattre les gens ...",
    lien: "https://dorar.net/hadith/sharh/68099",
    autres: 1399,
  },
  {
    sujet: "Foi et jihad",
    auteur: "El Boukhari صحيح البخاري",
    numero: 26,
    texteArabe: "أفضَلُ الأعمالِ الإيمانُ باللهِ وَحدَه ، ثمَّ الجهادُ... ",
    texteFrancais:
      "« Les meilleures actions sont la foi en Allah seul, puis le combat dans le chemin d’Allah… »",
    lien: "https://dorar.net/hadith/sharh/141857",
    autres: 1519,
  },
  {
    sujet: "Djibril fait le djihad",
    auteur: "صحيح البخاري",
    numero: 3995,
    texteArabe: " هذا جبريلُ آخِذٌ برأْسِ فرَسِهِ ، عليه أداةُ الحرْبِ ",
    texteFrancais:
      "« Voici Jibril, tenant la tête de son cheval, portant ses armes de guerre. »",
    lien: "https://dorar.net/hadith/sharh/68773",
    autres: "الطبراني (11/ 342) (11952)، والبيهقي في ((دلائل النبوة)) (3/ 54)",
  },
  {
    sujet: " Les cinq caractéristiques",
    auteur: "صحيح البخاري ",
    numero: 335,
    texteArabe: "أُعطيتُ خَمسًا لَم يُعطَهنَّ أحَدٌ قَبلي ...",
    texteFrancais:
      "“Cinq choses m’ont été accordées, qui n’ont été accordées à personne avant moi :...",
    lien: "https://dorar.net/hadith/sharh/15781",
    autres: "مسلم (521)، والنسائي (432)، وأحمد (14264)",
  },
  // غدوةٌ في سبيلِ الله أو روحةٌ خيرٌ من الدنيا وما فيها ولَقَابُ قوْسِ أحدِكم أو موضِعِ قَدَمٍ من الجنةِ خيرٌ من الدنيا
  // https://dorar.net/hadith/sharh/26605
  // https://dorar.net/hadith/sharh/122862
  
];

// 2- Mourir en martyr -->
const souratesMourirEnMartyr = [2,  3,   3,   3,   3,   3,   3,   3,    3, 3,  3,   4,  4,   9, 47,47,47,];
const versetsMourirEnMartyr = [154, 140, 141, 142, 143, 147, 148, 157, 169,170,171, 74, 77,  111, 4,5,6,];
const ahadithsMourirEnMartyr = [
  {
    sujet: "Vertus du martyr",
    auteur: " صحيح الترمذي",
    numero: 1663,
    texteArabe: "للشهيدِ عندَ اللهِ ستُّ خصالٍ ...",
    texteFrancais: "« Le martyr auprès d’Allah possède six qualités… »",
    lien: "https://dorar.net/hadith/sharh/35616",
    autres: " ابن ماجه (2799)، وأحمد (17182)",
  },
  {
    sujet: "Désir du martyr",
    auteur: "صحيح البخاري",
    numero: 2817,
    texteArabe:
      " ما مِن أحَدٍ يَدخُلُ الجَنَّةَ يُحِبُّ أن يَرجِعَ إلى الدُّنيا، وأنَّ له ما على الأرضِ مِن شيءٍ، غَيرُ الشَّهيدِ",
    texteFrancais:
      "« Aucun homme n’entre au Paradis sans souhaiter retourner sur terre et posséder tout ce qu’il y a sur elle, sauf le martyr. »",
    lien: "https://dorar.net/hadith/sharh/3054",
    autres: "مسلم (1877)",
  },
  {
    sujet: "Catégories de martyrs",
    auteur: "صحيح البخاري",
    numero: 2829,
    texteArabe:
      "الشُّهداءُ خمسةٌ : المطعونُ والمبطونُ والغرِقُ وصاحبُ الهدمِ والشَّهيدُ في سبيلِ اللهِ ",
    texteFrancais:
      "« Les martyrs sont au nombre de cinq : celui qui meurt de la peste, celui qui meurt d’une maladie abdominale, celui qui se noie, celui qui meurt sous les décombres, et le martyr dans le chemin d’Allah. »",
    lien: "https://dorar.net/hadith/sharh/6985",
    autres: "مسلم (1914)",
  },
  {
    sujet: "Hamza, le maître des martyrs",
    auteur: "ابن حبان",
    numero: 186,
    texteArabe: "سيِّدُ الشُّهداءِ حمزةُ بنُ عبدِ المطَّلبِ  ...",
    texteFrancais: "« Le maître des martyrs est Ḥamza ibn ʿAbd al-Muṭṭalib. »",
    lien: "https://dorar.net/hadith/sharh/112385",
    autres: "الحاكم (4884)، والديلمي في ((الفردوس)) (3472)",
  },
  {
    sujet: "Intention du martyr",
    auteur: "صحيح أبي داود ",
    numero: 1520,
    texteArabe:
      "من سألَ اللَّهَ الشَّهادةَ صادقًا بلَّغَه اللَّهُ منازلَ الشُّهداءِ وإن ماتَ علَى فراشِه",
    texteFrancais:
      "« Celui qui demande sincèrement à Allah le martyre, Allah lui fera atteindre le rang des martyrs, même s’il meurt sur son lit. »",
    lien: "https://dorar.net/hadith/sharh/36993",
    autres: "مسلم (1909)",
  },
  {
    sujet: "Pardon du martyr",
    auteur: "صحيح مسلم",
    numero: 1886,
    texteArabe:
      "أولُ ما يُهراقُ مِنْ دمِ الشهيدِ ، يُغفَرُ له ذنبُهُ كلُّهُ إلَّا الدَّيْنَ",
    texteFrancais:
      "« La première chose qui est versée du sang du martyr, tous ses péchés lui sont pardonnés, sauf… »",
    lien: "https://dorar.net/hadith/sharh/131405",
    autres:
      "الطبراني (6/73) (5552) واللفظ له، والحاكم (2555)، والبيهقي (18992)",
  },
  {
    sujet: "Signe du martyr",
    auteur: "صحيح البخاري",
    numero: 237,
    texteArabe:
      "ما مِن مَكلومٍ يُكلَمُ في سَبيلِ اللهِ إلَّا جاءَ يَومَ القيامةِ وكَلْمُه يَدمَى، اللَّونُ لَونُ دَمٍ، والرِّيحُ ريحُ مِسكٍ. ",
    texteFrancais:
      "« Il viendra au Jour de la Résurrection, sa blessure saignant encore : sa couleur sera celle du sang, mais son odeur sera celle du musc. »",
    lien: "https://dorar.net/hadith/sharh/14597",
    autres: "مسلم (1876)",
  },
  {
    sujet: "Économie du butin",
    auteur: "صحيح البخاري",
    numero: 2797,
    texteArabe:
      " والَّذي نَفسِي بيدِهِ ، لولا أنَّ رِجالًا مِن المؤمنينَ لا تَطيبُ أنفسُهُم أن يتخلَّفُوا عنِّي ...",
    texteFrancais:
      "« Par Celui qui détient mon âme dans Sa main, si ce n’était que certains hommes parmi les croyants ne seraient pas satisfaits… »",
    lien: "https://dorar.net/hadith/sharh/14597",
    autres: " صحيح ابن حبان(4737)",
  },
  {
    sujet: "Âmes des martyrs",
    auteur: "صحيح الجامع",
    numero: 912,
    texteArabe:
      "أرواحُ المؤمِنينَ في أجوافِ طيْرٍ خُضْرٍ تُعلَّقُ في أشْجارِ الجنةِ ، حتى يَرُدَّها اللهُ إلى أجْسادِها يومَ القيامةِ ",
    texteFrancais:
      "« Les âmes des croyants sont dans des corps d’oiseaux verts, suspendus aux arbres du Paradis, jusqu’à ce qu’Allah les rende à leurs corps le Jour de la Résurrection. »",
    lien: "https://dorar.net/hadith/sharh/146528",
    autres: " الطبراني (19/65) (122)، وأبو نعيم في ((معرفة الصحابة)) (8037) ",
  },
];

// 3- La violence conjugale -->
const souratesViolencesConjugales = [4,4,4,];
const versetsViolencesConjugales = [34,35,128];
const ahadithsViolencesConjugales = [
  {
    sujet: "Frappe des épouses",
    auteur: "El Boukhari صحيح البخاري",
    numero: 3377,
    texteArabe: "  لا يضربُ أحدُكم امرأتَه ضربَ الأمةِ ثم يضاجعُها",
    texteFrancais:
      "« Ne frappez pas vos épouses comme on frappe une servante, puis il va la fréquenter (avoir des relations avec elle)… »",
    lien: "https://dorar.net/hadith/sharh/138072",
    autres: 5204,
  },
  {
    sujet: "Le prophète frappe Aicha !",
    auteur: " صحيح مسلم ",
    numero: 3377,
    texteArabe: " فلَهَدَني في صَدْري لَهْدَةً أوجَعَتْني ",
    texteFrancais: "« Il m’a frappé la poitrine d’un coup qui m’a fait mal. »",
    lien: "https://dorar.net/hadith/sharh/12880",
    autres: "أحمد (25855) واللفظ له، والنسائي (2037)، وعبد الرزاق (6712)",
  },
  {
    sujet: "Le fouet comme disciplne!",
    auteur: "  صحيح الأدب المفرد ",
    numero: 933,
    texteArabe:
      " عَلِّقُوا السَّوْطَ حيثُ يَرَاهُ أهلُ البيتِ , فإنه أَدَبٌ لهم ",
    texteFrancais:
      "« Suspendez le fouet là où les gens de la maison peuvent le voir, car cela est une éducation (discipline). »",
    lien: "https://dorar.net/hadith/sharh/110399",
    autres:
      "الطبراني (10/344) (10671)، وابن عدي في ((الكامل في الضعفاء)) (3/90)، والخطيب في ((تاريخ بغداد)) (12/203) البخاري في ((الأدب المفرد)) (1229)، وابن أبي الدنيا في ((النفقة على العيال)) (322) واللفظ لهما، وعبد الرزاق (17963)",
  },
  {
    sujet: "Autorisation de frapper",
    auteur: "  صحيح أبي داود ",
    numero: 2146,
    texteArabe: "لا تضرِبوا إماءَ اللَّهِ ... ",
    texteFrancais: "« Ne frappez pas les servantes d’Allah. »",
    lien: "https://dorar.net/hadith/sharh/73127",
    autres: " النسائي في ((السنن الكبرى)) (9167) ابن ماجه (1985)",
  },
  {
    sujet: "Droits des femmes",
    auteur: "  صحيح أبي داود ",
    numero: 1905,
    texteArabe:
      " اتَّقوا اللهَ في النساءِ؛ فإنَّكم أخذتُموهنَّ بأمانةِ الله ... ",
    texteFrancais:
      "« Craignez Allah concernant les femmes, car vous les avez prises comme un dépôt (une responsabilité) d’Allah. »",
    lien: "https://dorar.net/hadith/sharh/91552",
    autres: " النسائي في ((الكبرى)) (9135)، وابن خزيمة (2809) ",
  },
];

// 4- La violence contre les enfants -->
const souratesViolenceEnfants = [18,18,18,37, ];
const versetsViolenceEnfants = [74,80,81,102, ];
const ahadithsViolenceEnfants = [
  {
    sujet: "Le fouet comme discipline",
    auteur: "  صحيح الأدب المفرد ",
    numero: 933,
    texteArabe:
      " عَلِّقُوا السَّوْطَ حيثُ يَرَاهُ أهلُ البيتِ , فإنه أَدَبٌ لهم ",
    texteFrancais:
      "« Suspendez le fouet là où les gens de la maison peuvent le voir, car cela est une éducation (discipline). »",
    lien: "https://dorar.net/hadith/sharh/110399",
    autres:
      "الطبراني (10/344) (10671)، وابن عدي في ((الكامل في الضعفاء)) (3/90)، والخطيب في ((تاريخ بغداد)) (12/203) البخاري في ((الأدب المفرد)) (1229)، وابن أبي الدنيا في ((النفقة على العيال)) (322) واللفظ لهما، وعبد الرزاق (17963)",
  },

  {
    sujet: "Frappez-les à 10 ans!",
    auteur: "  صحيح أبي داود ",
    numero: 495,
    texteArabe:
      "مُرُوا أولادَكُم بالصلاةِ وهُم أبناءُ سبعِ سنينَ ، واضرِبُوهُم عليهَا وهُمْ أبْنَاءُ عَشْرٍ وفرِّقُوا بينِهِم في المَضَاجِعِ ",
    texteFrancais:
      "« Ordonnez à vos enfants la prière à l’âge de sept ans, frappez-les (pour cela) à l’âge de dix ans, et séparez-les dans les lits. »",
    lien: "https://dorar.net/hadith/sharh/66400",
    autres: "أحمد (6689)",
  },
];

// 5- Exécution des apostats-- >
const souratesExecutionApostats = [2,2,2,      3,3,3,3,3,       4,   5,  16,  47,47,47,];
const versetsExecutionApostats = [217,109,217, 86,87,88,89,90,  137, 54, 106, 25,26,27,];
const ahadithsExecutionApostats = [
  {
    sujet: "La peine de l’apostasie",
    auteur: "El Boukhari صحيح البخاري",
    numero: 3017,
    texteArabe: "مَن بدَّلَ دينَه فاقتُلوهُ",
    texteFrancais: "« Celui qui change de religion, tuez-le. »",
    lien: "https://dorar.net/hadith/sharh/5702",
    autres: "صحيح ابن ماجه | الصفحة أو الرقم : 2070",
  },
  {
    sujet: "La peine de l’apostasie",
    auteur: "El Boukhari صحيح البخاري",
    numero: 6878,
    texteArabe:
      "لا يحِلُّ دمُ امرءٍ مسلمٍ إلَّا بإحدَى ثلاثٍ , الزِّنَى , والنَّفسُ بالنَّفسِ , والتَّاركُ لدينِه المفارقُ للجماعةِ",
    texteFrancais:
      "« Le sang d’un musulman n’est licite que dans trois cas :</br> - le fornicateur (adultère),</br> - la vie pour la vie (en cas de meurtre), </br> - et celui qui abandonne sa religion et se sépare de la communauté. »",
    lien: "https://dorar.net/hadith/sharh/73887",
    autres: "مسلم (1676)",
  },
  {
    sujet: "La peine de l’apostasie",
    auteur: "El Boukhari صحيح البخاري",
    numero: 6922,
    texteArabe: "أُتيَ عَليٌّ رَضيَ اللهُ عنه بزَنادِقةٍ فأحرَقَهم ... ",
    texteFrancais:
      "« On amena à Ali ibn Abi Talib des hérétiques (zanādiqa), et il les fit brûler. »",
    lien: "https://dorar.net/hadith/sharh/5704",
    autres: "من أفراد البخاري على مسلم",
  },
  {
    sujet: "Fondement des guerres contre les apostats (ḥurūb al-ridda)",
    auteur: "El Boukhari صحيح البخاري",
    numero: 1399,
    texteArabe:
      "واللَّهِ لَأُقَاتِلَنَّ مَن فَرَّقَ بيْنَ الصَّلَاةِ والزَّكَاةِ ",
    texteFrancais:
      "« Par Allah, je combattrai certes ceux qui font une distinction entre la prière et la zakāt. »",
    lien: "https://dorar.net/hadith/sharh/67078",
    autres:
      "البخاري (7284، 7285)، ومسلم (20)، وأبو داود (1556)، والترمذي (2607) واللفظ له، والنسائي (3970)، وأحمد (117)",
  },
  {
    sujet: "Interdiction de sonder les cœurs",
    auteur: "El Boukhari صحيح البخاري",
    numero: 4351,
    texteArabe: "« إني لم أومر أن أنقب عن قلوب الناس ولا أشق بطونهم » ",
    texteFrancais:
      "« Il ne m’a pas été ordonné de sonder les cœurs des gens ni d’ouvrir leurs ventres. »",
    lien: "https://dorar.net/hadith/sharh/984",
    autres: "مسلم (1064).",
  },
  {
    sujet: "Principe de l’acceptation du repentir après l’apostasie",
    auteur: "صحيح النسائي",
    numero: 4079,
    texteArabe:
      "انَ رجلٌ منَ الأنصارِ أسلمَ ثمَّ ارتدَّ ولحقَ بالشِّرْكِ ثمَّ تندَّمَ ",
    texteFrancais:
      "“Demandez pour moi au Messager d’Allah ﷺ s’il y a pour moi un repentir.”",
    lien: "https://dorar.net/hadith/sharh/85639",
    autres: "أحمد (2218) بنحوه، والطبري في ((التفسير)) (7360)",
  },
  {
    sujet: "L’affaire d’Abdullah ibn Abi Sarh, ",
    auteur: "صحيح أبي داود",
    numero: 4359,
    texteArabe: " أما كان فيكم رجلٌ رشيدٌ ... عبدُ اللهِ بنُ أبي السَّرحِ",
    texteFrancais:
      "« N’y avait-il pas parmi vous un homme sensé qui aurait pu se lever et lui trancher le cou ? »",
    lien: "https://dorar.net/hadith/sharh/30712",
    autres:
      " https://tafsir.app/tabari/6/92?utm_source=chatgpt.com النسائي (4067)، والحاكم (4360)",
    Tabari: "https://tafsir.app/tabari/6/92?utm_source=chatgpt.com",
  },
  {
    sujet: "Eviter la propagation de rumeurs contre l’islam",
    auteur: "El Boukhari صحيح البخاري",
    numero: 3518,
    texteArabe:
      "دَعْه، لا يَتَحَدَّثُ النَّاسُ أنَّ مُحَمَّدًا يَقتُلُ أصحابَه. ",
    texteFrancais:
      "« Pour que les gens ne disent pas que Muhammad tue ses compagnons. »",
    lien: "https://dorar.net/hadith/sharh/21796",
    autres: "مسلم (2584).",
  },
];

// 6- Couper la main du voleur -->
const souratesCouperMainVoleurs = [5, ];
const versetsCouperMainVoleurs = [38, ];
const ahadithsCouperMainVoleurs = [
  {
    sujet: "Égalité devant la justice!",
    auteur: "El Boukhari صحيح البخاري",
    numero: 4304,
    texteArabe:
      " والذي نفسُ محمدٍ بيدِه لو أن فاطمةَ بنتَ محمدٍ سَرَقَتْ لقَطَعَتُ يدَها. ",
    texteFrancais:
      "« Par Celui qui détient l’âme de Muhammad dans Sa main, si Fāṭima, la fille de Muhammad, avait volé, je lui aurais coupé la main. »",
    lien: "https://dorar.net/hadith/sharh/2028",
  },
  {
    sujet: "Le prophète coupe les mains!",
    auteur: "El Boukhari صحيح البخاري",
    numero: 2648,
    texteArabe:
      "كانت امرأةٌ مخزوميَّةٌ تستعيرُ المتاعَ وتجحَدُه  فقطع النَّبيُّ صلَّى اللهُ عليه وسلَّم يدَها ...  ",
    texteFrancais:
      "« Elle empruntait des objets puis les niait (les refusait), alors le Prophète ﷺ lui fit couper la main. »",
    lien: "https://dorar.net/hadith/sharh/33105",
    autres:
      " مسلم (1688)، وأبو داود (4397) واللفظ له، والنسائي (4898)، وأحمد (25297) ",
  },
  {
    sujet: "Le Prophète ﷺ a coupé la main d’un voleur",
    auteur: "El Boukhari صحيح البخاري",
    numero: 6795,
    texteArabe: "  أن النبيَّ صلى الله عليه وسلم قَطَعَ يدَ سارقٍ ",
    texteFrancais: "« Le Prophète ﷺ a coupé la main d’un voleur. »",
    lien: "https://dorar.net/hadith/sharh/30720",
    autres: "مسلم (1686)  أبو داود (4386)  النسائي (4909)",
  },
  {
    sujet: "Seuil du vol",
    auteur: "El Boukhari صحيح البخاري",
    numero: 6789,
    texteArabe:
      " لَا تُقْطَعُ يَدُ السَّارِقِ إلَّا في رُبْعِ دِينَارٍ فَصَاعِدًا.",
    texteFrancais:
      "« La main du voleur n’est coupée qu’à partir d’un quart de dinar et plus. »",
    lien: "https://dorar.net/hadith/sharh/4920",
    autres: "",
  },
  {
    sujet: "Repentir après sanction pour vol",
    auteur: "El Boukhari صحيح البخاري",
    numero: 4304,
    texteArabe:
      "والذي نَفْسُ مُحَمَّدٍ بيَدِهِ، لو أنَّ فاطِمَةَ بنْتَ مُحَمَّدٍ سَرَقَتْ، لَقَطَعْتُ يَدَها. ثُمَّ أمَرَ رَسولُ اللَّهِ صلَّى اللهُ عليه وسلَّمَ بتِلْكَ المَرْأَةِ، فَقُطِعَتْ يَدُها، فَحَسُنَتْ تَوْبَتُها بَعْدَ ذلكَ وتَزَوَّجَتْ. قالَتْ عائِشَةُ: فَكانَتْ تَأْتي بَعْدَ ذلكَ فأرْفَعُ حاجَتَها إلى رَسولِ اللَّهِ صلَّى اللهُ عليه وسلَّمَ. ",
    texteFrancais:
      "« …la main de cette femme fut coupée, puis son repentir fut bon après cela et elle se maria. Aisha bint Abi Bakr dit : “Elle venait ensuite, et je présentais sa demande au Messager d’Allah ﷺ…” »",
    lien: "https://dorar.net/hadith/sharh/82722",
    autres: "",
  },
  {
    sujet: "Il vendait les palmiers des Banu Nadhir ...",
    auteur: "El Boukhari صحيح البخاري",
    numero: 5357,
    texteArabe: " كان يبيعُ نخلَ بني النضيرِ ، ويحبِسُ لأهْلِهِ قوتَ سنتِهم",
    texteFrancais:
      "« …et le prophète vendait les palmiers de Banū al-Naḍīr, et retenait pour sa famille la nourriture d’une année. »",
    lien: "https://dorar.net/hadith/sharh/24736",
    autres: "",
  },
  {
    sujet: "Peine du vol",
    auteur: "El Boukhari صحيح البخاري",
    numero: 6783,
    texteArabe:
      " لعن اللهُ السارقَ يسرقُ البيضةَ فتُقطَعُ يدُه ويسرقُ الحبلَ فتُقطَعُ يدُه ",
    texteFrancais:
      "« Le voleur vole un œuf et sa main est coupée, et il vole une corde et sa main est coupée. »",
    lien: "https://dorar.net/hadith/sharh/12804",
    autres: "مسلم (1687)",
  },
  {
    sujet: "Le prophète ordonne la mort d'un voleur !",
    auteur: " أبو داود ",
    numero: 4410,
    texteArabe:
      "  جيءَ بِسارقٍ إلى النَّبيِّ صلَّى اللَّهُ عليهِ وسلَّمَ فَقالَ : اقتُلوهُ ",
    texteFrancais:
      "« Un voleur fut amené au Prophète ﷺ, et il dit : “Tuez-le.” »",
    lien: "https://dorar.net/h/INaGhEMw?osoul=1",
    autres: " النسائي (4978) ",
  },
  {
    sujet: "Preuve du vol",
    auteur: "  إرواء الغليل",
    numero: 2425,
    texteArabe: " لا يُقطعُ السارقُ حتى يشهدَ على نفسه مرتينِ ",
    texteFrancais:
      "« La main du voleur n’est coupée que s’il témoigne contre lui-même à deux reprises. »",
    lien: "https://dorar.net/h/ka92o90C?osoul=1",
    autres:
      " أخرجه البيهقي في ((معرفة السنن والآثار)) (17223) بنحوه، وعبد الرزاق (18783)، والطحاوي في ((معاني الآثار)) (4980) ",
  },
  {
    sujet: "Seuil du vol",
    auteur: "El Boukhari صحيح البخاري",
    numero: 6794,
    texteArabe:
      "  أن رسولَ اللهِ صلى الله عليه وسلم قَطَعَ في مَجِنٍّ ثمنُه ثلاثةُ دراهمَ. ",
    texteFrancais:
      "« Le Messager d’Allah ﷺ a ordonné la coupe (de la main) pour un bouclier dont la valeur était de trois dirhams. »",
    lien: "https://dorar.net/hadith/sharh/15677",

    autres: "  النسائي (4908)  مسلم (1685)",
  },
  {
    sujet: "Peine du vol",
    auteur: "صحيح أبي داود",
    numero: 4394,
    texteArabe: "  فهلَّا كان هذا قبل أن تأتيَني به ",
    texteFrancais:
      "« Le Prophète ﷺ a fait appliquer la coupe de la main pour un vol atteint le seuil légal. »",
    lien: "https://dorar.net/hadith/sharh/72363",
    autres: " ابن ماجه (2595) النسائي (4883) ",
  },
  {
    sujet: "Pas de peine pendant la guerre!",
    auteur: " الترمذي",
    numero: 1450,
    texteArabe: " لا تُقطَعُ الأيدي في الغَزوِ. ",
    texteFrancais:
      "« Les mains ne sont pas coupées pendant la campagne militaire (en temps de guerre). »",
    lien: "https://dorar.net/h/3G96HTOC",
    autres: "  النسائي (4979) ",
  },
  {
    sujet: "Pas de peine pendant le voyage !",
    auteur: " صحيح أبي داود ",
    numero: 4408,
    texteArabe: "  لا تُقطَعُ الأيدي في السَّفَرِ",
    texteFrancais: "« Les mains ne sont pas coupées en voyage. »",
    lien: "https://dorar.net/hadith/sharh/30811",
    autres: "  النسائي (4979) الترمذي (1450)، وأحمد (17626)",
  },
  {
    sujet: "Seuil du vol",
    auteur: " صحيح أبي داود ",
    numero: 4388,
    texte: " لا قَطْعَ في ثَمَرٍ ولا كَثَرٍ ",
    texteFrancais:
      "« Il n’y a pas de coupe (de la main) pour les fruits ni pour les palmes (tronc/palmiers). »",
    lien: "https://dorar.net/hadith/sharh/30728",
    autres:
      " الترمذي (1449)، والنسائي (4960)، وابن ماجه (2593)، وأحمد (15804) ",
  },
  {
    sujet: "Peine en famine",
    auteur: " البدر المنير",
    numero: 8 / 679,
    texteArabe: " عن عمرَ رضيَ اللهُ عنهُ أنَّه لا قطْعَ في عامِ المجاعةِ ",
    texteFrancais:
      "« D’après ʿUmar (qu’Allah l’agrée), il n’y a pas de coupe (de la main) en année de famine. »",
    lien: "https://dorar.net/h/1Qj8cRvg",
    autres:
      "  تاريخ أصبهان (1/162)   ضعف الحديث الألباني في السلسلة الضعيفة (1673)",
  },
  // https://dorar.net/hadith/sharh/15353
  // https://dorar.net/hadith/sharh/120306
];

// 7- Fouettement des fornicateurs et alccol -->
const souratesFouettementFornicateurs = [4, 24,24,24,24,24,];
const versetsFouettementFornicateurs = [25, 2,3,4,13,14,];
const ahadithsFouettementFornicateurs = [
  {
    sujet: "Châtiment du vin",
    auteur: "El Boukhari صحيح البخاري",
    numero: 6779,
    texteArabe:
      "أنَّ نَبِيَّ اللهِ صَلَّى اللَّهُ عليه وسلَّمَ جَلَدَ في الخَمْرِ بالجَرِيدِ، وَالنِّعَالِ",
    texteFrancais:
      "« Le Prophète ﷺ infligea la flagellation pour le vin avec des branches de palmier et des sandales. »",
    lien: "https://dorar.net/hadith/sharh/11200",
    autres: "أبو داود (4479)، والترمذي (1443)",
  },
  {
    sujet: "Châtiment de l’esclave / fornication",
    auteur: "El Boukhari صحيح البخاري",
    numero: 2234,
    texteArabe:
      " إذا زَنَت أمةُ أحَدِكُم، فتَبَيَّنَ زِناها، فليَجلِدْها الحَدَّ ...",
    texteFrancais:
      "« Si une esclave de l’un d’entre vous commet la fornication et que cela est établi, qu’il la fouette. »",
    lien: "https://dorar.net/hadith/sharh/15817",
    autres: " مسلم (1703)",
  },

  {
    sujet: "Preuve de fornication",
    auteur: "صحيح أبي داود",
    numero: 4413,
    texteArabe:
      " وَاللَّاتِي يَأْتِينَ الْفَاحِشَةَ مِنْ نِسَائِكُمْ فَاسْتَشْهِدُوا عَلَيْهِنَّ أَرْبَعَةً مِنْكُمْ ...",
    texteFrancais:
      "« Celles de vos femmes qui commettent la turpitude, faites témoigner contre elles quatre témoins parmi vous… »",
    lien: "https://dorar.net/hadith/sharh/126384",
    autres: " البيهقي (17357)",
  },
  {
    sujet: "Peine et bannissement / fornication",
    auteur: " الترمذي ",
    numero: 1438,
    texteArabe:
      "أنَّ النَّبيَّ صلَّى اللَّهُ عليهِ وسلَّمَ ضربَ وغرَّب ، وأنَّ أبا بَكرٍ ضربَ وغرَّبَ ، وأنَّ عُمَرَ ضربَ وغرَّبَ ",
    texteFrancais:
      "« Le Prophète ﷺ a infligé la flagellation et le bannissement ; Abū Bakr a infligé la flagellation et le bannissement ; et ʿUmar a infligé la flagellation… »",
    lien: "https://dorar.net/hadith/sharh/110828",
    autres: " النسائي في ((السنن الكبرى)) (7342)، والحاكم (8105)",
  },

  {
    sujet: "Peine du vin",
    auteur: "El Boukhari صحيح البخاري",
    numero: 6777,
    texteArabe:
      " أنَّ النبيَّ صَلَّى اللهُ عليه وسلَّمَ ضَرَبَ في الخَمْرِ بالجَرِيدِ والنِّعالِ، وجَلَدَ أبو بَكْرٍ أرْبَعِينَ.",
    texteFrancais:
      "« Le Prophète ﷺ a frappé (pour le vin) avec des branches de palmier et des sandales, et Abū Bakr a infligé quarante coups… »",
    lien: "https://dorar.net/hadith/sharh/11762",
    autres: "",
  },
  // https://dorar.net/hadith/sharh/15353
  // https://dorar.net/hadith/sharh/120306
];

// 8- Lapidation des adultères -->
const souratesLapidationAdulteres = [4,24,24,24,24,115];
const versetsLapidationAdulteres = [25,6,7,8,9,1];
const ahadithsLapidationAdulteres = [
  {
    sujet: "Ali lapide une adultère...",
    auteur: "El Boukhari صحيح البخاري",
    numero: 6812,
    texteArabe:
      " عَنْ عَلِيٍّ رَضِيَ اللَّهُ عنْه حِينَ رَجَمَ المَرْأَةَ يَومَ الجُمُعَةِ، وقالَ: قدْ رَجَمْتُهَا بسُنَّةِ رَسولِ اللَّهِ صَلَّى اللهُ عليه وسلَّمَ.",
    texteFrancais:
      "« D’après ʿAlī (qu’Allah l’agrée), lorsqu’il lapida une femme le jour du vendredi, il dit : “Je l’ai lapidée selon la sunna du Messager d’Allah ﷺ.” »",
    lien: "https://dorar.net/hadith/sharh/67065",
    autres: "",
  },
  {
    sujet: "Le prophète a lapidé des adultères juifs...",
    auteur: "El Boukhari صحيح البخاري",
    numero: 6841,
    texteArabe:
      " أنَّ اليَهودَ جاؤوا إلى النَّبيِّ صلَّى اللهُ عليه وسلَّم برَجُلٍ منهم وامرَأةٍ قد زَنَيا ...  فأمَرَ بهِما فرُجِما",
    texteFrancais:
      "« Des Juifs vinrent voir le Prophète ﷺ avec un homme et une femme parmi eux qui avaient commis l’adultère… alors il ordonna qu’ils soient lapidés. »",
    lien: "https://dorar.net/hadith/sharh/11200",
    autres: "أبو داود (4479)، والترمذي (1443)",
  },
  {
    sujet: "Le prophète a pratiqué la lapidation...",
    auteur: "El Boukhari صحيح البخاري",
    numero: 6840,
    texteArabe:
      " رَجَمَ النبيُّ صَلَّى اللهُ عليه وسلَّمَ فَقُلتُ: أقَبْلَ النُّورِ أمْ بَعْدَهُ؟ قالَ: لا أدْرِي.",
    texteFrancais:
      "« Le Prophète ﷺ a pratiqué la lapidation. Je demandai : “Était-ce avant la révélation de la sourate an-Nūr ou après ?”Il répondit : “Je ne sais pas.” »",
    lien: "https://dorar.net/hadith/sharh/11551",
    autres: "",
  },
  {
    sujet: "Verset de lapidation",
    auteur: "El Boukhari صحيح البخاري",
    numero: 6830,
    texteArabe:
      " فَكانَ فيما أُنزِلَ عليهِ آيةُ الرَّجمِ، فقرأناها ووَعيناها، ورجمَ رسولُ اللَّهِ صلَّى اللَّهُ عليهِ وسلَّمَ، ورجمنا من بعدِهِ ... ",
    texteFrancais:
      "« Parmi ce qui fut révélé, il y avait le verset de la lapidation. Nous l’avons lu et compris. Le Messager d’Allah ﷺ a pratiqué la lapidation, et nous avons pratiqué la lapidation après lui. »",
    lien: "https://dorar.net/hadith/sharh/36779",
    autres: " مسلم (1691) أبو داود (4418) أحمد (156)",
  },
  {
    sujet: "Confession de Maʿiz",
    auteur: "El Boukhari صحيح البخاري",
    numero: 6824,
    texteArabe:
      " « أَنَّ مَاعِزَ بْنَ مَالِكٍ أَتَى النَّبِيَّ ﷺ فَأَقَرَّ بِالزِّنَا… فَأَمَرَ بِهِ فَرُجِمَ ",
    texteFrancais:
      "« Maʿiz ibn Mālik vint voir le Prophète ﷺ et avoua la fornication… alors il ordonna qu’il soit lapidé. »",
    lien: "https://dorar.net/hadith/sharh/139921",
    autres: "  النسائي (7204)، وأحمد (9809)",
  },
  {
    sujet: "Le prophète ordonne la lapidation",
    auteur: "El Boukhari صحيح البخاري",
    numero: 5271,
    texteArabe: "  اذهَبوا به فارجُموه. وكان قد أُحصِنَ. ",
    texteFrancais: "« Emmenez-le et lapidez-le. Il était marié… »",
    lien: "https://dorar.net/hadith/sharh/3878",
    autres: " مسلم (1691) ",
  },
  {
    sujet: "Le prophète ordonne la lapidation d'une femme enceinte !",
    auteur: " صحيح أبي داود ",
    numero: 4440,
    texteArabe:
      " « أَنَّ امْرَأَةً مِنْ جُهَيْنَةَ أَتَتِ النَّبِيَّ ﷺ وَهِيَ حُبْلَى مِنَ الزِّنَا… فَأَمَرَ بِهَا فَرُجِمَتْ ",
    texteFrancais:
      "« Une femme de la tribu de Juhayna vint au Prophète ﷺ alors qu’elle était enceinte à cause de la fornication… alors il ordonna qu’elle soit lapidée. »",
    lien: "https://dorar.net/hadith/sharh/17250",
    autres:
      " مسلم (1696)، والنسائي (1957)، بلفظ مقارب، وابن ماجه (2555)، مختصرا. ",
  },
  {
    sujet: "Le peine de fornication et de l'adultère",
    auteur: " صحيح مسل ",
    numero: 1690,
    texteArabe:
      " خُذُوا عَنِّي، خُذُوا عَنِّي، قَدْ جَعَلَ اللَّهُ لَهُنَّ سَبِيلًا،البِكْرُ بِالبِكْرِ جَلْدُ مِائَةٍ وَنَفْيُ سَنَةٍ،وَالثَّيِّبُ بِالثَّيِّبِ جَلْدُ مِائَةٍ وَالرَّجْمُ » ",
    texteFrancais:
      "« Prenez de moi, prenez de moi : Allah leur a certes établi une voie.Le célibataire avec la célibataire : cent coups de fouet et exil d’un an.Et le marié avec la mariée : cent coups de fouet et… »",
    lien: "https://dorar.net/hadith/sharh/17294",
    autres:
      "  أحمد (22703)، والنسائي في ((الكبرى)) (7926)، وابن حبان (4443) باختلاف يسير. ",
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
    sujet: "Jugement des adultères selon le Livre",
    auteur: " صحيح البخاري ",
    numero: 6633,
    texteArabe:
      " ... أما والذي نَفسي بيَدِه، لَأقضيَنَّ بينَكُما بكِتابِ اللهِ،  ... ",
    texteFrancais:
      "« Par Celui qui détient mon âme dans Sa main, je jugerai entre vous selon le Livre d’Allah. »",
    lien: "https://dorar.net/hadith/sharh/559",
    autres: " مسلم  1697  أبو داود (4445)، والترمذي (1433)",
  },
];

// 9- La violence contre les homosexuels -->
const souratesViolenceHomosexuels = [7,7, 11,11,11, 26,26, 27,27, 29,29, 21];
const versetsViolenceHomosexuels = [80,81, 77,78,79, 165,166, 54,55, 28,29, 74, ];
const ahadithsViolenceHomosexuels = [
  {
    sujet: "Interdit de sodomie",
    auteur: "صحيح الجامع",
    numero: 5891,
    texteArabe: " لَعَنَ اللَّهُ مَنْ عَمِلَ عَمَلَ قَوْمِ لُوطٍ ...",
    texteFrancais:
      "« Qu’Allah maudisse celui qui commet l’acte du peuple de Loth. »",
    lien: "https://dorar.net/hadith/sharh/116214",
    autres: " أحمد (1875)  ابن حبان (4417)، والطبراني (11/218) (11546)",
  },
  {
    sujet: "Avertissement moral contre la sodomie",
    auteur: "  صحيح الترمذي ",
    numero: 1457,
    texteArabe: "  إنَّ أخوَفَ ما أخافُ على أمَّتي من عملِ قومِ لوطٍ",
    texteFrancais:
      "« Ce que je crains le plus pour ma communauté, ce sont les actes du peuple de Loth. »",
    lien: "https://dorar.net/hadith/sharh/72929",
    autres: " ابن ماجه (2563)، وأحمد (15093) ",
  },

  {
    sujet: "Sanction de la sodomie: la mort!",
    auteur: " صحيح أبي داود",
    numero: 4462,
    texteArabe:
      " مَنْ وجدتُموهُ يعملُ عملَ قومِ لوطٍ ، فاقتلوا الفاعلَ والمفعولَ بهِ",
    texteFrancais:
      "« Celui que vous trouvez commettant l’acte du peuple de Loth, tuez l’auteur et celui sur qui l’acte est commis. »",
    lien: "https://dorar.net/hadith/sharh/120445",
    autres: " الترمذي (1456)، وابن ماجه (2561)، وأحمد (2732) ",
  },
  {
    sujet: "Punition de la sodomie: jeter du haut...",
    auteur: "  التعليقات الرضية",
    numero: 284,
    texteArabe:
      " ينظرُ أعلى بناءٍ في القريةِ ؛ فيرمى به مُنكََّسًا ، ثم يُتْبَعُ الحجارةَ .",
    texteFrancais:
      "« Il est placé au sommet du bâtiment le plus élevé du village, puis on le jette la tête en bas, puis on le suit avec des pierres. »",
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
    sujet: "Le prophète tue un juif responsable d'un meurtre!",
    auteur: "El Boukhari صحيح البخاري",
    numero: 5295,
    texteArabe:
      " أنَّ يَهُودِيًّا قَتَلَ جَارِيَةً علَى أوْضَاحٍ لَهَا، فَقَتَلَهَا بحَجَرٍ، فَجِيءَ بهَا إلى النبيِّ صَلَّى اللهُ عليه وسلَّمَ وبِهَا رَمَقٌ، فَقالَ: أقَتَلَكِ فُلَانٌ؟ فأشَارَتْ برَأْسِهَا: أنْ لَا، ثُمَّ قالَ الثَّانِيَةَ، فأشَارَتْ برَأْسِهَا: أنْ لَا، ثُمَّ سَأَلَهَا الثَّالِثَةَ، فأشَارَتْ برَأْسِهَا: أنْ نَعَمْ، فَقَتَلَهُ النبيُّ صَلَّى اللهُ عليه وسلَّمَ بحَجَرَيْنِ.",
    texteFrancais:
      "« Un Juif avait tué une jeune fille pour des bijoux qu’elle portait, en la frappant avec une pierre. Elle fut amenée au Prophète ﷺ alors qu’elle était encore en vie.Il lui demanda : “Est-ce untel qui t’a tuée ?” Elle fit signe de la tête : non.Puis il mentionna une autre personne, elle fit encore signe : non.Puis il lui posa une troisième question, et elle fit signe : oui.Alors le Prophète ﷺ fit exécuter (le responsable) par la pierre. »",
    lien: "https://dorar.net/hadith/sharh/8019",
    autres: "",
  },
  {
    sujet: "L'affaire des captifs d'Uhud",
    auteur: "El Boukhari صحيح البخاري",
    numero: 1884,
    texteArabe:
      " رَجَعَ نَاسٌ مِن أصْحَابِ النبيِّ صَلَّى اللهُ عليه وسلَّمَ مِن أُحُدٍ، وكانَ النَّاسُ فيهم فِرْقَتَيْنِ: فَرِيقٌ يقولُ: اقْتُلْهُمْ، وفَرِيقٌ يقولُ: لَا، فَنَزَلَتْ: {فَما لَكُمْ في المُنَافِقِينَ فِئَتَيْنِ}",
    texteFrancais:
      "« Des gens parmi les compagnons du Prophète ﷺ revinrent (de la bataille) de Uhud, et les gens étaient divisés en deux groupes : un groupe disait : “Tuez-les”, et un autre groupe disait : “Ne les tuez pas.” Alors fut révélé : “Qu’avez-vous donc au sujet des hypocrites…” »",
    lien: "https://dorar.net/hadith/sharh/6072",
    autres: 4589,
  },
  {
    sujet: "Le prophète se désavoue de Khalid ibn el walid",
    auteur: "El Boukhari صحيح البخاري",
    numero: 4339,
    texteArabe:
      " اللَّهُمَّ إنِّي أبْرَأُ إلَيْكَ ممَّا صَنَعَ خَالِدُ بنُ الوَلِيدِ مَرَّتَيْنِ.",
    texteFrancais:
      "« Ô Allah, je me désavoue auprès de Toi de ce que Khalid ibn al-Walid a fait. »",
    lien: "https://dorar.net/hadith/sharh/24160",
    autres: "",
  },
  {
    sujet: "Omar: laisse-moi frapper le cou de cet hypocrite !",
    auteur: "El Boukhari صحيح البخاري",
    numero: 4274,
    texteArabe:
      " فَقالَ عُمَرُ: يا رَسولَ اللَّهِ، دَعْنِي أضْرِبْ عُنُقَ هذا المُنَافِقِ، ... [الممتحنة: 1]",
    texteFrancais:
      "« Ô Messager d’Allah, laisse-moi frapper le cou de cet hypocrite ! »",
    lien: "https://dorar.net/hadith/sharh/117689",
    autres: 2494,
  },
  {
    sujet: "Le prphète ordonne la mort de Ibn Khatal accroché à la Kaaba!",
    auteur: "El Boukhari صحيح البخاري",
    numero: 4286,
    texteArabe:
      " عن أنسِ بنِ مالكٍ, أنَّ رسولَ اللهِ صلَّى اللهُ عليهِ وسلَّم دخل مكةَ عامَ الفتحِ, وعلى رأسِه المغفَرُ, فلما نزعَه, جاءَه رجلٌ فقال : ابنُ خطلٍ متعلِّقٌ بأستارِ الكعبةِ, فقال ( رسولُ اللهِ صلَّى اللهُ عليهِ وسلَّم ) اقتلوهُ",
    texteFrancais:
      "« D’après Anas ibn Malik : le Messager d’Allah ﷺ entra à La Mecque l’année de la conquête en portant un casque.Puis, lorsqu’il l’enleva, un homme vint lui dire : “Ibn Khatal est accroché aux rideaux de la Kaaba.”Alors le Messager d’Allah ﷺ dit : “Tuez-le.” »",
    lien: "https://dorar.net/hadith/sharh/79443",
    autres: "",
  },
  {
    sujet: "Le prophète décapite des voleurs!",
    auteur: "El Boukhari صحيح البخاري",
    numero: 4192,
    texteArabe:
      " ... فأمرَ بِهِم فقُطِعَت أيديهم وأرجلُهُم وسمرَ أعينُهُم ، وألقَوا في الحرَّةِ يستَسقونَ فلا يُسقونَ",
    texteFrancais:
      "« Alors il ordonna à leur sujet : leurs mains et leurs pieds furent coupés, leurs yeux furent marqués (aveuglés), puis ils furent jetés dans al-Ḥarra, demandant à boire sans être abreuvés. »",
    lien: "https://dorar.net/hadith/sharh/10926",
    autres: "",
  },
  {
    sujet: "Le prophète décapite des voleurs!",
    auteur: "El Boukhari صحيح البخاري",
    numero: 1501,
    texteArabe:
      " فَأُتِيَ بهِمْ، فَقَطَّعَ أيْدِيَهُمْ وأَرْجُلَهُمْ، وسَمَرَ أعْيُنَهُمْ، وتَرَكَهُمْ بالحَرَّةِ يَعَضُّونَ الحِجَارَةَ.",
    texteFrancais:
      "« Ils furent amenés, alors il fit couper leurs mains et leurs pieds, il marqua leurs yeux, puis les laissa dans al-Ḥarra, mordant les pierres (de soif et de souffrance). »",
    lien: "https://dorar.net/hadith/sharh/33629",
    autres: "",
  },
  {
    sujet: "Affaire Kaʿb ibn al-Ashraf",
    auteur: "El Boukhari صحيح البخاري",
    numero: 4037,
    texteArabe:
      "مَن لِكَعْبِ بنِ الأشْرَفِ؛ فإنَّه قدْ آذَى اللَّهَ ورَسولَهُ؟ ",
    texteFrancais:
      "« …au sujet de Kaʿb ibn al-Ashraf, car il a offensé Allah et Son Messager. »",
    lien: "https://dorar.net/hadith/sharh/4176",
    autres: 2510,
  },
  {
    sujet: "Le carnage de Banu al-Mustaliq",
    auteur: "El Boukhari صحيح البخاري",
    numero: 2541,
    texteArabe:
      " إنَّ النَّبيَّ صلَّى اللهُ عليه وسلَّمَ أغَارَ علَى بَنِي المُصْطَلِقِ وهُمْ غَارُّونَ، وأَنْعَامُهُمْ تُسْقَى علَى المَاءِ، فَقَتَلَ مُقَاتِلَتَهُمْ، وسَبَى ذَرَارِيَّهُمْ، وأَصَابَ يَومَئذٍ جُوَيْرِيَةَ.",
    texteFrancais:
      "« Le Prophète ﷺ lança une attaque contre Banū al-Muṣṭaliq alors qu’ils étaient inattentifs, et que leurs troupeaux étaient en train d’être abreuvés. Il tua leurs combattants, fit des captifs leurs femmes et enfants, et ce jour-là il obtint Juwayriyya… »",
    lien: "https://dorar.net/hadith/sharh/7139",
    autres: 3804,
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
    sujet: "Affaire Abû Râfiʿ",
    auteur: "El Boukhari صحيح البخاري",
    numero: 4039,
    texteArabe:
      "  بَعَثَ رَسولُ اللَّهِ صَلَّى اللهُ عليه وسلَّمَ رَهْطًا مِنَ الأنْصَارِ إلى أبِي رَافِعٍ فَدَخَلَ عليه عبدُ اللَّهِ بنُ عَتِيكٍ بَيْتَهُ لَيْلًا فَقَتَلَهُ وهو نَائِمٌ.",
    texteFrancais:
      "« Le Messager d’Allah ﷺ envoya un groupe d’Ansar auprès d’Abû Râfiʿ.ʿAbd Allâh ibn ʿAtîk entra chez lui la nuit dans sa maison et le tua alors qu’il dormait. »",
    lien: "https://dorar.net/hadith/sharh/24040",
    autres: "",
  },
  {
    sujet: "Les musulmans divisés à propos des Hypocrites à Uhud",
    auteur: "El Boukhari صحيح البخاري",
    numero: 4050,
    texteArabe:
      " أنَّ النبيَّ صَلَّى اللَّهُ عليه وَسَلَّمَ خَرَجَ إلى أُحُدٍ، فَرَجَعَ نَاسٌ مِمَّنْ كانَ معهُ، فَكانَ أَصْحَابُ النبيِّ صَلَّى اللَّهُ عليه وَسَلَّمَ فيهم فِرْقَتَيْنِ، قالَ بَعْضُهُمْ: نَقْتُلُهُمْ، وَقالَ بَعْضُهُمْ: لَا، فَنَزَلَتْ {فَما لَكُمْ في المُنَافِقِينَ فِئَتَيْنِ} [النساء: 88].",
    texteFrancais:
      "« Des gens parmi les compagnons du Messager d’Allah ﷺ furent divisés en deux groupes : certains disaient : “Tuons-les”, et d’autres disaient : “Ne les tuons pas.”Alors fut révélé : “Qu’avez-vous donc au sujet des hypocrites, pour être divisés en deux groupes…” »",
    lien: "https://dorar.net/hadith/sharh/6074",
    autres: "",
  },
  {
    sujet: "Le carnage de Banu Kuraydha!",
    auteur: "El Boukhari صحيح البخاري",
    numero: 2813,
    texteArabe:
      "لَمَّا رَجَعَ النبيُّ صَلَّى اللهُ عليه وسلَّمَ مِنَ الخَنْدَقِ، ووَضَعَ السِّلَاحَ واغْتَسَلَ، أتَاهُ جِبْرِيلُ عليه السَّلَامُ، فَقالَ: قدْ وضَعْتَ السِّلَاحَ؟ واللَّهِ ما وضَعْنَاهُ، فَاخْرُجْ إليهِم قالَ: فَإِلَى أيْنَ؟ قالَ: هَا هُنَا، وأَشَارَ إلى بَنِي قُرَيْظَةَ، فَخَرَجَ النبيُّ صَلَّى اللهُ عليه وسلَّمَ إليهِم ",
    texteFrancais:
      "« Lorsque le Prophète ﷺ revint du fossé (al-Khandaq), qu’il posa ses armes et se lava, Jibrîl lui vint et dit : “As-tu déposé les armes ? Par Allah, nous ne les avons pas déposées. Sors vers eux.”Il dit : “Où ?”Il répondit : “Ici”, en désignant Banū Qurayẓa.Alors le Prophète ﷺ sortit vers eux… »",
    lien: "https://dorar.net/hadith/sharh/21196",
    autres: 4117,
  },
  {
    sujet:
      "Le prophète ordonne l'assassinat de quatre hommes et deux femmes à la meque",
    auteur: "صحيح النسائي",
    numero: 4078,
    texteArabe: " اقتُلوهم وإن وجَدتُموهم متَعلِّقينَ بأَستارِ الكَعبةِ ",
    texteFrancais:
      "« Tuez-les, même si vous les trouvez accrochés aux rideaux de la Kaaba. »",
    lien: "https://dorar.net/hadith/sharh/138269",
    autres: "أبو داود (2683)",
  },
  {
    sujet: "L'affaire Umm Qarfa",
    auteur: "Tarikh al-Tabari",
    numero: "Volume 8. pages 95–97",
    texteArabe:
      " فَأَمَرَ بِهَا فَقُطِّعَتْ رِجْلاَهَا وَيَدَاهَا، ثُمَّ رُمِيَ بِهَا حَتَّى مَاتَتْ ",
    texteFrancais:
      "« Il ordonna à son sujet : ses mains et ses pieds furent coupés, puis elle fut jetée jusqu’à ce qu’elle meure. »",
    lien: "https://dorar.net/hadith/sharh/138269",
    autres: "Sirat Ibn Ishaq via Ibn Hisham",
  },
];

// 11- Le djihad et le butin
const souratesDjihadViolencesButin = ["Butin hallal", 8,"Répartition du butin", 8, 8, 8, 59,4,"Trahison du butin", 3,];
const versetsDjihadViolencesButin = ["",69, "",20, 1, 41, 7,95,"",161,];
const ahadithsDjihadViolencesButin = [
  {
    sujet: " Le butin licite!",
    auteur: "صحيح الترمذي  ",
    numero: 3085,
    texteArabe: "كَانَتِ الْغَنَائِمُ لَا تَحِلُّ لِأَحَدٍ قَبْلَنَا",
    texteFrancais: "“Le butin n’était pas permis à personne avant nous.”",
    lien: "https://dorar.net/hadith/sharh/42669",
    autres: "النسائي في ((السنن الكبرى)) (11209)، وأحمد (7433)",
  },
  {
    sujet: " Les cinq caractéristiques",
    auteur: "صحيح البخاري ",
    numero: 335,
    texteArabe: "أُعطيتُ خَمسًا لَم يُعطَهنَّ أحَدٌ قَبلي ...",
    texteFrancais:
      "“Cinq choses m’ont été accordées, qui n’ont été accordées à personne avant moi :...",
    lien: "https://dorar.net/hadith/sharh/15781",
    autres: "مسلم (521)، والنسائي (432)، وأحمد (14264)",
  },
  {
    sujet: "La corruption !",
    auteur: "El Boukhari صحيح البخاري",
    numero: 3344,
    texteArabe:
      " بَعَثَ عَليٌّ رَضيَ اللهُ عنه إلى النَّبيِّ صلَّى اللهُ عليه وسلَّم بذُهَيبةٍ، فقَسَمَها بينَ الأربَعةِ",
    texteFrancais:
      "‘Alî envoya au Prophète ﷺ une petite quantité d’or, et il la distribua entre plusieurs chefs. Les gens de Quraysh et les Ansar se fâchèrent en disant qu’il donnait aux notables de Najd et les délaissait.",
    lien: "https://dorar.net/hadith/sharh/8019",
    autres: "مسلم (1064)",
  },
  {
    sujet: " Nous allons manger des dattes!",
    auteur: "صحيح البخاري ",
    numero: 4242,
    texteArabe:
      "عَن عائِشةَ رَضيَ اللهُ عنها، قالت: لَمَّا فُتِحَت خَيبَرُ قُلنا: الآنَ نَشبَعُ مِنَ التَّمرِ.",
    texteFrancais:
      "‘Aïcha (qu’Allah l’agrée) a dit :“Lorsque Khaybar fut conquise, nous avons dit : ‘Maintenant nous allons manger des dattes à satiété.’”",
    lien: "https://dorar.net/hadith/sharh/150377",
    autres: "ابن حبان (684)",
  },
  {
    sujet: " Répartition du butin",
    auteur: "صحيح البخاري ",
    numero: 4228,
    texteArabe:
      "قَسَمَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ يَوْمَ خَيْبَرَ لِلْفَرَسِ سَهْمَيْنِ وَلِلرَّاجِلِ سَهْمًا",
    texteFrancais:
      "“Le Messager d’Allah ﷺ, le jour de Khaybar, attribua deux parts au cavalier et une part au piéton.”",
    lien: "https://dorar.net/hadith/sharh/150377",
    autres: "مسلم (1762)",
  },
  {
    sujet: " Répartition du butin",
    auteur: "صحيح البخاري ",
    numero: 3140,
    texteArabe:
      "يَا رَسُولَ اللَّهِ، أَعْطَيْتَ بَنِي الْمُطَّلِبِ وَتَرَكْتَنَا",
    texteFrancais:
      "“Ô Messager d’Allah, tu as donné aux Banū al-Muṭṭalib et tu nous as laissés.”",
    lien: "https://dorar.net/hadith/sharh/150377",
    autres: "من أفراد البخاري على مسلم",
  },
  {
    sujet: " Répartition du butin",
    auteur: "صحيح البخاري ",
    numero: 4234,
    texteArabe: "غَنِمنا المَتاعَ والطَّعامَ والثِّيابَ",
    texteFrancais:
      "“Nous avons pris comme butin des objets, de la nourriture et des vêtements.”",
    lien: "https://dorar.net/hadith/sharh/11911",
    autres: "مسلم (115)",
  },
  {
    sujet: "La corruption !المُؤَلَّفةِ قُلوبُهم",
    auteur: "El Boukhari صحيح البخاري",
    numero: 4330,
    texteArabe:
      " لَمَّا أفاءَ اللهُ على رَسولِه صلَّى اللهُ عليه وسلَّم يَومَ حُنَينٍ قَسَمَ في النَّاسِ في المُؤَلَّفةِ قُلوبُهم",
    texteFrancais:
      "“Lorsque Allah accorda (le butin) à Son Messager ﷺ le jour de Hunayn, il le répartit parmi les gens, notamment parmi ceux dont les cœurs étaient à gagner.”",
    lien: "https://dorar.net/hadith/sharh/8019",
    autres: "مسلم (1061)",
  },
];
