// 0- Femmes du prophète Muhamad
const souratesMuhamadEpousesFemmes = [
    "1- Le statut social des femmes du prophète",  33,33, 
    "2- Le comportement des femmes du prophète", 33, 33,33,33,
    "3- Les récompenses aux femmes du prophète", 33, 33,
    "4- Les chatiments reservés aux femmes du prophète", 33
];
const versetsMuhamadEpousesFemmes = [
    "...", 32, 6,
    "...", 28,33,34,53, 
    "...",29, 31,
    "...",  30,
];
const ahadithsMuhamadEpousesFemmes = [];

// 1- Khadidja
const souratesMuhamadEpousesKhadidja = [
  "Le Coran ne cite aucune épouse du Prophète par son nom, y compris Khadija.",
];
const versetsMuhamadEpousesKhadidja = [
  "Certains versets parlent des épouses du Prophète en général, (voir femmes du prophète). Les informations sur elle viennent uniquement de hadiths (voir Ahadiths).",
];
const ahadithsMuhamadEpousesKhadidja = [
  // Le mariage

  {
    sujet: " Le mariage ",
    auteur: " al-Waqidi (Kitab al-Maghazi) ",
    numero: "(m. 823)",
    texteArabe:
      " فَذَكَرَتْ ذَلِكَ لِأَبِيهَا، فَأَبَى.فَدَعَتْهُ إِلَى طَعَامٍ، فَسَقَتْهُ خَمْرًا حَتَّى سَكِرَ،فَلَمَّا سَكِرَ زَوَّجَتْهُ مِنْ رَسُولِ اللَّهِ ﷺ،فَلَمَّا أَفَاقَ قَالَ: مَا هَذَا  الُوا: زَوَّجْتَ مُحَمَّدَ بْنَ عَبْدِ اللَّهِ خَدِيجَةَ.فَأَنْكَرَ ذَلِكَ، فَقِيلَ لَهُ: قَدْ كَانَ ذَلِكَ. ",
    texteFrancais:
      " Ils ont rapporté que Khadija fit venir son père, Khuwaylid ibn Asad.Elle lui fit boire du vin jusqu’à ce qu’il soit ivre.Puis elle se maria elle-même avec le Messager de Dieu ﷺ.Lorsqu’il reprit ses esprits, il nia cela.On lui dit alors : “Tu l’as bien mariée à lui.”",
    lien: "https://archive.org/search?query=tarikh+al+tabari+arabic",
    autres:
      " Al-Tabari — Tārīkh al-Rusul wa al-Mulūk vol. 2. Pages p. 281–282 (selon éditions)",
  },
  {
    sujet: " Le mariage ",
    auteur: " Ibn Ishaq → Ibn Hisham السيرة النبوية",
    numero: "1/187 – 1/189 (selon édition Dar al-Kutub al-‘Ilmiyya)",
    texteArabe: " ... وَكَانَتْ تَسْتَأْجِرُ الرِّجَالَ ",
    texteFrancais:
      " ... Khadija était une femme noble et déterminée, qui employait des hommes pour gérer ses biens...",
    lien: "https://sunnah2.com/3102",
    autres:
      " Ibn Ishaq → سيرة رسول الله, Ibn Sa'd — الطبقات الكبرى, Al-Tabari — تاريخ الرسل والملوك",
  },
  // Début de la révélation
  {
    sujet: " Début de la révélaton ",
    auteur: "صحيح البخاري ",
    numero: 6982,
    texteArabe: "فَرَجَعَ إِلَى خَدِيجَةَ فَقَالَ: زَمِّلُونِي زَمِّلُونِي…",
    texteFrancais: "Il revint vers Khadija en disant : “Couvrez-moi…” ",
    lien: "https://dorar.net/hadith/sharh/83181",
    autres: "مسلم (160)، وأحمد (25959)",
  },
  {
    sujet: " Début de la révélaton ",
    auteur: "صحيح البخاري ",
    numero: 3821,
    texteArabe:
      "كان النَّبيُّ صلَّى اللهُ عليه وسلَّمَ إذا ذكَرَ خَديجةَ أَثْنى عليها …",
    texteFrancais:
      "« Allah ne m’a pas donné meilleure qu’elle : elle a cru en moi quand les gens ont mécru, elle m’a cru quand les gens m’ont traité de menteur… »",
    lien: "https://dorar.net/hadith/sharh/150232",
    autres: "مسلم (2437) ",
  },
  // La meilleure femme
  {
    sujet: " Khadidja La meilleure femme ",
    auteur: "صحيح البخاري ",
    numero: 3815,
    texteArabe:
      "خَيرُ نِسائِها مَريَمُ بنتُ عِمرانَ، وخَيرُ نِسائِها خَديجةُ بنتُ خويلِدٍ.",
    texteFrancais: "« La meilleure des femmes est Khadija bint Khuwaylid. »",
    lien: "https://dorar.net/hadith/sharh/16590",
    autres: "مسلم (2430). ",
  },

  // Aicha jalouse de Khadidja
  {
    sujet: " Aicha jalouse de Khadidja ",
    auteur: "صحيح البخاري ",
    numero: 3818,
    texteArabe:
      "ما غِرْتُ على أَحَدٍ من أَزْوَاجِ النبيِّ صلَّى اللهُ عليهِ وسلَّمَ ما غِرْتُ على خديجةَ ...",
    texteFrancais:
      "Je n’ai jamais été jalouse d’aucune femme autant que de Khadija… car il parlait souvent d’elle. ",
    lien: "https://dorar.net/hadith/sharh/65353",
    autres: "مسلم (2435)، الترمذي (2017)",
  },
  {
    sujet: " Aicha jalouse de Khadidja ",
    auteur: "صحيح البخاري ",
    numero: 3821,
    texteArabe:
      " استَأذَنَت هالةُ بنتُ خويلِدٍ أُختُ خَديجةَ على رَسولِ اللهِ ...",
    texteFrancais:
      "Une sœur de Khadija demanda la permission d’entrer… Le Prophète se rappela d’elle et dit : “Ô Allah, Hala !” Je fus jalouse et dis…",
    lien: "https://dorar.net/hadith/sharh/588",
    autres: "مسلم (2437).",
  },
  // Khadidja au paradis
  {
    sujet: " Khadidja au paradis ",
    auteur: "صحيح البخاري ",
    numero: 3820,
    texteArabe: "أتاني جِبريلُ فقال : يا رسولَ اللهِ ! هذهِ خَديجةُ ...",
    texteFrancais:
      " Gabriel dit : “Voici Khadija… Transmets-lui le salut de son Seigneur et de moi, et annonce-lui une maison au Paradis faite de perles, sans bruit ni fatigue.”",
    lien: "https://dorar.net/hadith/sharh/136074",
    autres: "مسلم (2432)،",
  },
  // Fidélité après sa mort
  {
    sujet: " Fidélité après sa mort ",
    auteur: "صحيح مسلم ",
    numero: 2435,
    texteArabe:
      " كان إذا ذبحَ الشَّاةَ يقولُ : أَرْسِلُوا بها إلى أصدِقاءِ خَديجةَ",
    texteFrancais:
      " Le Prophète, lorsqu’il égorgeait un animal, disait :“Envoyez-en aux amies de Khadija.” ",
    lien: "https://dorar.net/hadith/sharh/91913",
    autres: "ابن حبان (7006)",
  },
];

// 2- Saouda
const souratesMuhamadEpousesSaouda = [4,];
const versetsMuhamadEpousesSaouda = [128, ];
const ahadithsMuhamadEpousesSaouda = [
  {
    sujet: " Le voile ",
    auteur: " صحيح البخاري",
    numero: 6240,
    texteArabe:
      " فقال: عَرَفتُكِ يا سَودةُ؛ حِرصًا على أن يُنزَلَ الحِجابُ، قالت: فأنزَلَ اللهُ عزَّ وجلَّ آيةَ الحِجابِ.",
    texteFrancais:
      "... Elle (Saouda) dit : “Alors Allah, Puissant et Majestueux, révéla le verset du voile.” ",
    lien: "https://dorar.net/hadith/sharh/25945",
    autres:
      " مسلم (2170) Tafsir al-Tabari / Ibn Kathir، وأحمد (25866)، والبيهقي (13634)",
  },
  {
    sujet: " Le voile // Autorisation de sortir la nuit...",
    auteur: " صحيح البخاري",
    numero: 5237,
    texteArabe: " قد أذِنَ اللهُ لَكُنَّ أن تَخرُجنَ لحَوائِجِكُنَّ. ",
    texteFrancais: " Allah vous a permis de sortir pour vos besoins.",
    lien: "https://dorar.net/hadith/sharh/25946",
    autres: " مسلم (2170)،",
  },
  {
    sujet: " Saouda fait don de sa nuit pour Aicha ...",
    auteur: " صحيح البخاري",
    numero: 5212,
    texteArabe: " لمَّا كبِرَت سَودَةُ بنتُ زَمعَةَ وَهبَت يومَها لعائشةَ ",
    texteFrancais:
      " Sawda donne volontairement sa nuit à Aisha pour rester avec le Prophète ﷺ.",
    lien: "https://dorar.net/hadith/sharh/24911",
    autres: " مسلم (5212)،  ابن ماجه (1972) أبو داود (2138)",
  },
];

// 3- Aicha
const souratesMuhamadEpousesAicha = [24,24,24,24,24,24,24,24,24,24,66,66,66,];
const versetsMuhamadEpousesAicha = [11,12,13,14,15,16,17,18,19,20,3,4,5,];
const ahadithsMuhamadEpousesAicha = [
  {
    sujet: " Le mariage de Muhamad avec Aisha ",
    auteur: " صحيح البخاري",
    numero: 5134,
    texteArabe:
      "  تزوَّجَني رسولُ اللهِ صلَّى اللهُ عليه وسلَّمَ وأنا ابنةُ ستِّ سِنينَ بمكَّةَ، مُتَوَفَّى خَديجةَ، ودخَلَ بي وأنا ابنةُ تِسعِ سِنينَ بالمدينةِ.",
    texteFrancais:
      "Le Prophète ﷺ m’a épousée alors que j’avais six ans, et il consomma le mariage avec moi alors que j’en avais neuf",
    lien: "https://dorar.net/hadith/sharh/141188",
    autres:
      " مسلم (1422)، وأبو داود (4933)، والنسائي (3255)، وابن ماجه (1876)، أحمد (24867)",
  },
  {
    sujet: " L'histoire de la calomnie' ",
    auteur: " صحيح البخاري",
    numero: 7545,
    texteArabe: " واللهِ ما كُنتُ أظُنُّ أنَّ اللهَ يُنزِلُ في شَأني وحيًا",
    texteFrancais:
      "Par Allah, je ne pensais pas qu’Allah révélerait à mon sujet une révélation récitée… Puis Allah révéla : ‘Ceux qui sont venus avec la calomnie…",
    lien: "https://dorar.net/hadith/sharh/7631",
    autres: " البزار (153)، وأبو عوانة (12140)، والبيهقي (19902)",
  },
  {
    sujet: " La femme la plus aimée ",
    auteur: " صحيح البخاري",
    numero: 3662,
    texteArabe:
      " يا رسولَ اللَّهِ أيُّ النَّاسِ أحبُّ إليكَ قالَ عائشةُ قيلَ مِنَ الرِّجالِ قالَ أبوها",
    texteFrancais:
      "On demanda : “Qui est la personne que tu aimes le plus ?”Il répondit : “Aïcha.”On dit : “Et parmi les hommes ?”Il dit : “Son père.”",
    lien: "https://dorar.net/hadith/sharh/41683",
    autres: " مسلم (2384)، والترمذي (3885)، وأحمد (17811)",
  },
  {
    sujet: " Salutation de Jibril",
    auteur: " صحيح البخاري",
    numero: 3217,
    texteArabe: " يا عائِشةُ، هذا جِبريلُ يَقرَأُ عليكِ السَّلامَ",
    texteFrancais: "Ô Aïcha, voici Gabriel qui te transmet le salut.",
    lien: "https://dorar.net/hadith/sharh/4740",
    autres: " مسلم (2447)، وأبو داود (5232)، والنسائي (3953)",
  },
  {
    sujet: " Sa science",
    auteur: " صحيح الترمذي",
    numero: 3883,
    texteArabe: "فسأَلْنا عائشةَ إلَّا وجَدْنا عندَها منه عِلْمًا ",
    texteFrancais:
      "Chaque fois que nous, compagnons de Muhammad ﷺ, avions une difficulté sur un hadith, nous interrogions Aïcha et nous trouvions chez elle une connaissance à ce sujet.",
    lien: "https://dorar.net/hadith/sharh/67001",
    autres: " ابن عدي في ((الكامل في الضعفاء)) (4/ 144)",
  },
  {
    sujet: " Mort du Prophète chez elle",
    auteur: " صحيح البخاري",
    numero: 4449,
    texteArabe:
      "مات رسولُ اللهِ صلَّى اللهُ عليه وسلَّم في يومي بَيْنَ سَحْري ونَحْري ",
    texteFrancais:
      "Le Prophète ﷺ est mort dans ma maison, pendant mon jour, entre ma poitrine et mon cou.",
    lien: "https://dorar.net/hadith/sharh/136161",
    autres: " مسلم (418، 2443، 2444) أحمد (24216)، وابن حبان (7116)",
  },
];

// 4- Hafsa
const souratesMuhamadEpousesHafsa = [];
const versetsMuhamadEpousesHafsa = [];
const ahadithsMuhamadEpousesHafsa = [];

// 5- Zaynab bint Khuzayma
const souratesMuhamadEpousesZaynebKhuzayma = [];
const versetsMuhamadEpousesZaynebKhuzayma = [];
const ahadithsMuhamadEpousesZaynebKhuzayma = [];

// 6- Umm Salama
const souratesMuhamadEpousesUmSalama = [];
const versetsMuhamadEpousesUmSalama = [];
const ahadithsMuhamadEpousesUmSalama = [];

// 7- Zaynab bent djahch
const souratesMuhamadEpousesZaynebDhahsh = [];
const versetsMuhamadEpousesZaynebDhahsh = [];
const ahadithsMuhamadEpousesZaynebDhahsh = [];

// 8-Juwayriya bint al-Harith
const souratesMuhamadEpousesJuwayriya = [];
const versetsMuhamadEpousesJuwayriya = [];
const ahadithsMuhamadEpousesJuwayriya = [];

// 9- Umm Habiba
const souratesMuhamadEpousesUmHabiba = [];
const versetsMuhamadEpousesUmHabiba = [];
const ahadithsMuhamadEpousesUmHabiba = [];

// 10- Safiyya bint Huyayy
const souratesMuhamadEpousesSafiya = [];
const versetsMuhamadEpousesSafiya = [];
const ahadithsMuhamadEpousesSafiya = [];

// 11-Maymuna bint al-Harith
const souratesMuhamadEpousesMaymuna = [];
const versetsMuhamadEpousesMaymuna = [];
const ahadithsMuhamadEpousesMaymuna = [];

// 12- Mariya la copte
const souratesMuhamadEpousesMariya = [];
const versetsMuhamadEpousesMariya = [];
const ahadithsMuhamadEpousesMariya = [];

// 13- Rayhana bint Zayd (ريحانة بنت زيد)
const souratesMuhamadEpousesRayhana = [];
const versetsMuhamadEpousesRayhana = [];
const ahadithsMuhamadEpousesRayhana = [];


// 14- mariage d’offrande
const souratesMuhamadEpousesMariageOffrande = [];
const versetsMuhamadEpousesMariageOffrande = [];
const ahadithsMuhamadEpousesMariageOffrande = [];

