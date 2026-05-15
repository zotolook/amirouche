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