// 1- Conversatin Allah / Adam / Anges / Satan
const souratesAllahAdamAngesSatan = [
    "1. ",2,2,2,2, 3, 15, 38,38, 
    "2. ", 2, 7,7, 15,15, 17,17, 18, 20, 38,38,
    "3. ", 7,7,7,7, 15,15,15, 17,17,17, 38,38,38,38,38,38,38,
    "4. ", 7,7,7,7,7, 15,15, 38,38,38,38,
    "5. ",2, 7, 20, 20, 20,
    "6. ",2, 7,7,20,
    "7. ",2,7,20, 
    "8. ",7,7, 17,    
];
const versetsAllahAdamAngesSatan = [
    " Création d'Adam",30,31,32,33, 59, 26, 71,72, 
    " La prosternation des anges et le refus d'Iblis",34, 11,12, 30,31, 61,62, 50, 116, 73,74,
    " Allah maudit Iblis, puis lui accorde un délai", 13,14,15,18, 36,37,38, 63,64,65, 75,76,77,78,79,80,81,
    " La promesse d'Iblis de tromper les humains", 16,17,20,21,22, 39,40, 82,83,84,85,
    " Adam et Eve dans le paradis ",35,19, 117, 118, 119,
    " La désobéissance d'Adam et sa sortie du paradis",36,24,25,121, 
    " Le pardon et l'élection d'Adam",37,23,122, 
    " L'honneur donné à Adam et à ses descendants",26,27, 70,
];
const ahadithsAllahAdamAngesSatan = [

];

// 2- Adam
const souratesAdam = [
    "1. ",2,2,2,2, 3, 7, 15, 38,38,
    "2. ",2, 7, 20,20,20,
    "3. ",2, 7,7,7, 20,
    "4. ",2, 7, 20,20, 
    "5. ", 7,7, 17,
    "6. ", 3, 19, 33, 
    "7. ", 5,
];
const versetsAdam = [
    " Création d'Adam", 30,31,32,33, 59, 11, 26, 71,72,
    " L'avertissement à Adam",35, 19, 117,118,119,
    " La désobéissance d'Adam et sa sortie du paradis",36, 19,24,25, 120,121, 
    " Le pardon et l'élection d'Adam",37, 23, 122, 
    " L'honneur donné à Adam et à ses descendants", 26,27, 70,
    " Adam et les prophètes ", 59, 58, 7,
    " Les fils d'Adam ", 27, 
 ];
const ahadithsAdam = [];

// 3- Satan
const souratesSatan = [
    "1. ", 2, 7,7, 15,15, 17,17, 18, 20, 38,38,
    "2. ", 7,7,7,7, 15,15,15,15,15, 17,17,17, 38,38,38,38,38,38,38,
    "3. ", 7,7,7,7,7, 15,15, 38,38,38,38,
    "4. ", 7, 15,
    "5. ", 22,
    "6. ",43,
    "7. ", 67,
    "8. ", 14, 15, 16,16,
    ];
const versetsSatan = [
    " Iblis refuse de se prosterner devant Adam ",34, 11,12, 30,31, 61,62, 50, 116, 73,74,
    " Allah maudit Iblis, puis lui accorde un délai", 13,14,15,18, 34,35,36,37,38, 63,64,65, 75,76,77,78,79,80,81,
    " La promesse d'Iblis de tromper les humains", 16,17,20,21,22, 39,40, 82,83,84,85,
    " Iblis attribut son égarement à Allah ", 16, 39,
    " Les versets sataniques",52,
    " Allah désigne des diables aux égarés",36,
    " Allah lapide les diables", 5,
    " Le rôle de Satan ...", 22, 42, 99,100,
];
const ahadithsSatan = [
  {
    auteur: "صحيح البخاري",
    numero: 608,
    texte:
      " إذا نُودي للصَّلاةِ أدبر الشَّيطانُ له ضُراطٌ حتَّى لا يسمَعَ النِّداءَ ",
    lien: "https://dorar.net/hadith/sharh/62780",
    autres: "مسلم (389)",
  },
  {
    auteur: "صحيح البخاري",
    numero: 1232,
    texte:
      "إنَّ أحَدَكُمْ إذَا قَامَ يُصَلِّي جَاءَ الشَّيْطَانُ، فَلَبَسَ عليه حتَّى لا يَدْرِيَ كَمْ صَلَّى",
    lien: "https://dorar.net/hadith/sharh/63747",
    autres: "مسلم (389)، وأبو داود (1030)، وابن خزيمة (1020)",
  },
  {
    auteur: "صحيح البخاري",
    numero: 1629,
    texte:
      "ثلاثُ ساعاتٍ كانَ رسولُ اللَّهِ صلَّى اللَّهُ عليهِ وسلَّمَ يَنهانا أن نصلِّيَ فيهنَّ",
    lien: "https://dorar.net/hadith/sharh/34109",
    autres: " النسائي (565) واللفظ له، وأخرجه مسلم (831) باختلاف يسير",
  },
  {
    auteur: "صحيح البخاري",
    numero: 2311,
    texte:
      "وَكَّلَني رسولُ اللَّهِ صلَّى اللَّهُ عليهِ وسلَّمَ بحفظِ زَكاةِ رمضانَ",
    lien: "https://dorar.net/hadith/sharh/80989",
    autres:
      "النسائي في ((السنن الكبرى)) (10795)، وابن خزيمة (2424) باختلاف يسير، والبيهقي في ((شعب الإيمان)) (2170)",
  },
  {
    auteur: "صحيح البخاري",
    numero: 3104,
    texte:
      "الفِتْنَةُ هَا هُنَا الفِتْنَةُ هَا هُنَا، مِن حَيْثُ يَطْلُعُ قَرْنُ الشَّيْطَانِ، - أوْ قالَ: قَرْنُ الشَّمْسِ -.",
    lien: "https://dorar.net/hadith/sharh/2961",
    autres: "مسلم (2905) ",
  },
  {
    auteur: "صحيح البخاري",
    numero: 3292,
    texte:
      " الرُّؤْيا الصَّالِحَةُ مِنَ اللَّهِ، والحُلُمُ مِنَ الشَّيْطانِ، فإذا حَلَمَ أحَدُكُمْ حُلُمًا يَخافُهُ فَلْيَبْصُقْ عن يَسارِهِ، ولْيَتَعَوَّذْ باللَّهِ مِن شَرِّها، فإنَّها لا تَضُرُّهُ.",
    lien: "https://dorar.net/hadith/sharh/1580",
    autres: "مسلم (2261) ",
  },
  {
    auteur: "صحيح البخاري",
    numero: 3303,
    texte:
      " إذا سمعتُم صِياحَ الدِّيكةِ فسَلُوا الله تعالى من فَضْلِه؛ فإنَّها رأت مَلَكًا، وإذا سمعتُم نهيقَ الحِمارِ فتعَوَّذوا بالله من الشَّيطانِ؛ فإنَّها رأت شيطانًا",
    lien: "https://dorar.net/hadith/sharh/10511",
    autres: " , الترمذي (3459) مسلم (2729) ",
  },
  {
    auteur: "صحيح البخاري",
    numero: 5623,
    texte:
      " إِذَا كانَ جُنْحُ اللَّيْلِ، أَوْ أَمْسَيْتُمْ، فَكُفُّوا صِبْيَانَكُمْ، فإنَّ الشَّيْطَانَ يَنْتَشِرُ حِينَئِذٍ",
    lien: "https://dorar.net/hadith/sharh/10191",
    autres: "مسلم (2012) ",
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
    numero: 1142,
    texte:
      " يَعْقِدُ الشَّيْطَانُ علَى قَافِيَةِ رَأْسِ أَحَدِكُمْ إذَا هو نَامَ ثَلَاثَ عُقَدٍ",
    lien: "https://dorar.net/hadith/sharh/9600",
    autres: "مسلم (776)",
  },
  {
    auteur: "صحيح البخاري",
    numero: 6223,
    texte: "  إنَّ اللهَ يُحِبُّ العُطاسَ ويكرَهُ التَّثاؤبَ",
    lien: "https://dorar.net/hadith/sharh/15100",
    autres: "أبو داود (5028)، والترمذي (2746)",
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
    numero: 3431,
    texte: " ما مِن بَنِي آدَمَ مَوْلُودٌ إلَّا يَمَسُّهُ الشَّيْطَانُ حِينَ يُولَدُ",
    lien: "https://dorar.net/hadith/sharh/63283",
    autres: "مسلم (2366)",
  },
  {
    auteur: "صحيح البخاري",
    numero: 5165,
    texte:" أَمَا لو أنَّ أحَدَهُمْ يَقولُ حِينَ يَأْتي أهْلَهُ: باسْمِ اللَّهِ، اللَّهُمَّ جَنِّبْنِي الشَّيْطانَ",
    lien: "https://dorar.net/hadith/sharh/134166",
    autres: "مسلم (1434)",
  },
]; ;

// 4- Les anges
const souratesAnges = [
    "1. ", 2, 7, 16, 21, 21, 35, 42,
    "2. ", 66,
    "3. ", 2, 2, 2, 2, 3, 15, 38, 38,
    "4. ", 2, 7, 7, 15, 15, 17, 17, 18, 38, 38,
    "5. ", 50, 50, 82, 82, 82,
    "6. ", 16, 32, 39, 69,
    "7. ", "Jibril ...", 2, 2, 66, "Mikail", 2, "Malik", 43, "Harut et Marut",2, "Anges ","A.", 82,82,82, "B.",32, "C.",69, "D.",13,
];
const versetsAnges = [
    " Création et nature des anges ", 97, 206, 2, 26, 27, 1, 5,  
    " Les anges ne désobéissent jamais ", 6,
    " Création d'Adam", 30, 31, 32, 33, 59, 26, 71, 72, 
    " La prosternation des anges et le refus d'Iblis", 34, 11, 12, 30, 31, 61, 62, 50, 73, 74,
    " Les anges enregistrent les actions", 17, 18, 10, 11, 12, 
    " Les anges au moment de la mort et le jour du jugement", 28, 11, 75, 17,
    "Les différents anges et leur rôle", "l'ange de la révélation", 97,98, 4, "gestion de la pluie et de la subsistance",98, "Gardien de l'enfer",77, "Avertisseurs",102, "sans noms", "Les anges scribes",10,11,12, "Les anges qui prennent l'âme", 11, "Les anges qui portent le Trône", 17, "Les anges gardiens", 11 
];
const ahadithsAnges = [
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
    numero: 3232,
    texte: " رأيتُ جبريلَ لهُ سِتُّمِائةِ جَناحٍ",
    lien: "https://dorar.net/hadith/sharh/141412",
    autres: "مسلم (174)",
  },
  {
    auteur: "صحيح البخاري",
    numero: 3217,
    texte: " يا عَائِشَةُ هذا جِبْرِيلُ يَقْرَأُ عَلَيْكِ السَّلَامَ ",
    lien: "https://dorar.net/hadith/sharh/4740",
    autres: "مسلم (2447)، وأبو داود (5232)، والنسائي (3953)",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 6443,
    texte: ".مَن مات من أُمَّتِكَ لا يُشرِكُ باللهِ شيئًا دخل الجنَّةَ",
    lien: "https://dorar.net/hadith/sharh/9430",
    autres: "مسلم (94)",
  },
];