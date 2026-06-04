// Adam Adam[23]آدم, ādam
const souratesAdam = [
  " 1. Création d’Adam", 2, 3, 7, 15, 15, 15, 17, 18, 20, 23, 32, 38, 38, 55,
  " 2. Souffle de l’esprit", 15, 32, 38,
  " 3. Prosternation des anges", 2, 7, 15, 15, 17, 18, 20, 38, 38,
  " 4. Iblis refuse", 2, 7, 7, 15, 15, 17, 38, 38,
  " 5. Science d’Adam", 2, 2, 2,
  " 6. Paradis", 2,7,20,20,20,
  " 7. Arbre interdit", 2, 7, 20,
  " 8. Tentation", 2, 7, 7, 7, 20, 20,
  " 9. Nudité révélée", 7, 20,
  " 10. Descente sur Terre", 2, 7, 7, 20,
  " 11. Repentir", 2, 7, 20,
  " 12. Humanité issue d’Adam", 4, 7, 39,
  " 13. Les deux fils d’Adam (Cain et Abel)", 5,5,5,5,5,
];
const versetsAdam = [
  " 👤", 30,59,11,26,27,28,61,37,55,12,7,71,72,14,
  " 🤲", 29,9,72,
  " 👼", 34,11,30,31,61,50,116,73,74,
  " 😈", 34,12,13,32,33,61,75,76,
  " 📚", 31,32,33,
  " 🌴", 35,19,117,118,119,
  " 🚫", 35,19,120,
  " 🐍", 36,20,21,22,120,121,
  " 🍃", 22,121,
  " 🌍", 36,24,25,123,
  " 🤲", 37,23,122,
  " 👨‍👩‍👧", 1, 189, 6,
  " 👨‍👩‍👧‍👦", 27,28,29,30,31,
];
const ahadithsAdam = [
  {
    sujet: " 🌱 Création d'Adam !",
    auteur: "  صحيح أبي داود",
    numero: 4693,
    texteArabe: "إن اللهَ خلَقَ آدمَ مِن قبضةٍ قَبَضَها مِن جميعِ الأرضِ ...",
    texteFrancais:
      "« Allah a créé Adam à partir d’une poignée (de terre) prise de toute la terre. »",
    lien: "https://dorar.net/hadith/sharh/65835",
    autres: "أحمد (4693)",
  },
  {
    sujet: "  Création d'Adam et sa taille",
    auteur: "  صحيح البخاري",
    numero: 6227,
    texteArabe:
      "خَلَقَ اللَّهُ آدَمَ عَلَى صُورَتِهِ، طُولُهُ سِتُّونَ ذِرَاعًا",
    texteFrancais:
      "« Allah a créé Adam à Son image, sa taille était de soixante coudées. »",
    lien: "https://dorar.net/hadith/sharh/12845",
    autres: "مسلم (2841)",
  },
  {
    sujet: "  Création d'Adam et nombre de prophètes",
    auteur: " ابن حبان",
    numero: 3113,
    texteArabe:
      "عَدَدُ الْأَنْبِيَاءِ مِائَةُ أَلْفٍ وَأَرْبَعَةٌ وَعِشْرُونَ أَلْفًا، وَآدَمُ أَوَّلُهُمْ",
    texteFrancais:
      "« Le nombre des prophètes est de 124 000, et Adam est le premier d’entre eux. »",
    lien: "https://dorar.net/h/PS82XSL5",
    autres:
      "الطبراني (8/ 118) (7545)، وابن عساكر (7/ 446)، والبيهقي في ((الأسماء والصفات)) (440)",
  },
  {
    sujet: " 🌍 Tous les humains descendent d’Adam الناس كلهم من آدم",
    auteur: " الألباني",
    numero: 313,
    texteArabe:
      "«يَا أَيُّهَا النَّاسُ، أَلَا إِنَّ رَبَّكُمْ وَاحِدٌ، وَإِنَّ أَبَاكُمْ وَاحِدٌ، كُلُّكُمْ لِآدَمَ وَآدَمُ مِنْ تُرَابٍ»",
    texteFrancais:
      "« Ô gens ! Votre Seigneur est Un et votre père est un. Vous descendez tous d’Adam, et Adam fut créé de terre. »",
    lien: "https://dorar.net/hadith/sharh/124333",
    autres:
      "أبو نعيم في ((حلية الأولياء)) (3/100)، والبيهقي في ((شعب الإيمان)) (5137)",
  },
  {
    sujet: "  🏡 Adam et Ève au Paradis آدم وحواء في الجنة",
    auteur: "  صحيح البخاري",
    numero: 4738,
    texteArabe: "حَجَّ آدَمُ موسى.",
    texteFrancais:
      "« Moïse discuta avec Adam… » Moïse lui reproche la faute originelle",
    lien: "https://dorar.net/hadith/sharh/4660",
    autres: "مسلم (2652)",
  },
  {
    sujet: " 🤲 Adam et le souffle de l’âme توبة آدم عليه السلام",
    auteur: " صحيح الترمذي ",
    numero: 3368,
    texteArabe:
      "لَمَّا نَفَخَ اللَّهُ فِيهِ الرُّوحَ، عَطَسَ فَقَالَ: الْحَمْدُ لِلَّهِ.",
    texteFrancais:
      "Quand Allah insuffla l’âme en Adam, il éternua et dit :« Alhamdulillah »",
    lien: "https://dorar.net/hadith/sharh/84440",
    autres: "البزار (8478)، وابن خزيمة في ((التوحيد)) (1/160)",
  },
  {
    sujet: " 📚 Adam reçoit les noms de toutes choses تعليم آدم الأسماء",
    auteur: " صحيح الترمذي ",
    numero: 7510,
    texteArabe:
      "أَنْتَ آدَمُ أَبُو النَّاسِ، خَلَقَكَ اللَّهُ بِيَدِهِ، وَعَلَّمَكَ أَسْمَاءَ كُلِّ شَيْءٍ...»",
    texteFrancais:
      "« Tu es Adam, père de l’humanité. Allah t’a créé de Sa Main et t’a enseigné le nom de toute chose... »",
    lien: "https://dorar.net/hadith/sharh/5837",
    autres: "مسلم (193)",
  },
  {
    sujet: "🌿 La taille d'Adam: 60 coudées!",
    auteur: "El Boukhari صحيح البخاري",
    numero: 6227,
    texteArabe:
      " فكُلُّ مَن يَدخلُ الجنةَ على صورةِ آدمَ في طُولِه سِتُّونَ ذِراعًا ، فلمْ تَزلْ الخَلْقُ تَنقُصُ بعدَه حتى الآنَ",
    texteFrancais:
      "« Tous ceux qui entreront au Paradis seront à l’image d’Adam, avec une taille de soixante coudées. Et la création n’a cessé de diminuer en taille depuis lui jusqu’à maintenant. »",
    lien: "https://dorar.net/hadith/sharh/12844",
    autres: "",
  },
  {
    sujet: " Le débat entre Adam et Moussa 🌊 محاجة آدم وموسى",
    auteur: " صحيح مسلم",
    numero: 2652,
    texteArabe:
      "احتج آدم وموسى، فقال موسى: أنت آدم الذي أخرجت الناس من الجنة بذنبك...",
    texteFrancais:
      "Moïse dit à Adam : « Tu es Adam qui as fait sortir les hommes du Paradis à cause de ton péché. »",
    lien: "https://dorar.net/hadith/sharh/4660",
    autres: " البخاري (4738)",
  },
  {
    sujet: " Adam, le premier des prophètes 🏜️ ",
    auteur: "  ابن حبان",
    numero: 807,
    texteArabe: "من كان أولُهم قال آدمُ",
    texteFrancais:
      "« Qui est le premier prophète? il a dit: Adam »",
    lien: "https://dorar.net/h/7tVGJYGl?osoul=1",
    autres: " الطبراني في ((مسند الشاميين)) (1979)",
  },
];

// 2- Idris / Énoch[24] إدريس, idrīs Idrîs
const souratesIdris = [
  " 1. Élévation et statut de prophète", 19, 19, 19,
  " 2. Parmi les patients", 21, 
];
const versetsIdris = [
  " 🌟", 56, 57, 58,
  " 🌌", 85,
  
];
const ahadithsIdriss = [
  {
    sujet: " Idriss parmi les prophètes arabes 🏜️ إدريسٌ من الأنبياء العرب",
    auteur: "  ابن حبان",
    numero: 807,
    texteArabe: "« كان من الأنبياء العرب: هود،وصالح،وشعيب،ونبيك يا أبا ذر »",
    texteFrancais:
      "« Parmi les prophètes arabes figurent :Hûd,Ṣâliḥ,Chuʿayb,et ton Prophète, ô Abû Dharr. »",
    lien: "https://dorar.net/h/7tVGJYGl?osoul=1",
    autres: " الطبراني في ((مسند الشاميين)) (1979)",
  },
  {
    sujet: " Idrīs mentionné dans le voyage du Prophète (Miʿrāj)",
    auteur: "  صحيح البخاري",
    numero: 4738,
    texteArabe:
      "ثُمَّ رُفِعْتُ إِلَى السَّمَاءِ الرَّابِعَةِ، فَإِذَا بِإِدْرِيسَ",
    texteFrancais: "« Puis je fus élevé au quatrième ciel, et voilà Idrīs. »",
    lien: "https://dorar.net/hadith/sharh/68201",
    autres: "مسلم (163)",
  },
];

// 3- Noe / Noé[25] نوح, nūḥ Nuh
const souratesNoe = [
  " 1. L’appel au monothéisme (da‘wa)", 7,7,7,7,7,10,10,11,11,23,26,26,26,26,26,26,71,71,71,71,
  " 2. Réponse du peuple : rejet, moquerie et accusations", 7,11, 23,23, 26,26,26,26,26,26, 71,71,
  " 3. Débat et arguments de Noé", 7,7,7, 11,11,11,11, 26,26,26,26, 71,71,71,71,71,71,71,71,71,
  " 4. L’ordre de construire l’arche", 11,11, 23, 71,71,71,
  " 5. Le déluge (châtiment divin)", 7, 10, 11,11,11,11,11, 21, 23, 25, 26, 29, 37, 54,54,54,54, 71,
  " 6. Le salut de Noé et des croyants", 7, 10, 11,11,11, 21, 23, 26, 29, 37,37, 54,54,54, 71, 
  " 7. L’exception de la femme et du fils de Noé", 11,11,11,11,11,11,
  " 8. Destruction finale et leçon morale", 7, 11, 21, 26, 54, 71, 
  " 9. Héritage, descendance et mémoire de Noé", 37,37,37,37,37,37,37, 29, 71, 
  " 10. Leçons et avertissements universels", 7, 11, 15,15, 21, 23, 29, 54,54, 
];
const versetsNoe = [
  " 🌊", 59,60,61,62,63, 71,72, 25,26, 23, 105,106,107,108,109,110, 1,2,3,4,
  " 🧍", 60, 27, 24,25, 111,112,113,114,115,116, 6,7, 
  " ⚖️", 61,62,63, 28,29,30,31, 112,113,114,115, 8,9,10,11,12,13,14,15,16,
  " 🛳️", 37,38, 27, 21,22,23,
  " 🌊", 64, 73, 40,41,42,43,44, 77, 41, 37, 120, 14, 82, 11,12,13,14, 25, 
  " 👨‍👩‍👦", 64, 73, 40,41,48, 76, 28, 119, 15, 76,77, 13,14,15, 21, 
  " ⚠️", 42,43,44,45,46, 66,
  " 🪦", 64, 44, 77, 120, 16, 25, 
  " 🌿", 75,76,77,78,79,80,81, 15, 28,
  " 🧠", 64, 49, 76,77, 77, 30, 35, 15,16,
];
const ahadithsNoe = [
  {
    sujet: "Intercession de Nūḥ au Jour du Jugement ",
    auteur: "  صحيح البخاري",
    numero: 4476,
    texteArabe:
      "يَأْتِي النَّاسُ نُوحًا فَيَقُولُونَ: أَنْتَ أَوَّلُ رَسُولٍ أَرْسَلَهُ اللَّهُ إِلَى أَهْلِ الْأَرْضِ",
    texteFrancais:
      "« Les gens viendront à Nūḥ et diront :“Tu es le premier messager envoyé aux habitants de la terre.” »",
    lien: "https://dorar.net/h/ZTpLJiKu",
    autres: "مسلم (193)",
  },
  {
    sujet:
      "👑 Nûḥ, premier messager envoyé à l'humanité نوح أول رسول إلى أهل الأرض",
    auteur: "  صحيح البخاري",
    numero: 4712,
    texteArabe:
      "يَأْتِي النَّاسُ نُوحًا فَيَقُولُونَ: أَنْتَ أَوَّلُ رَسُولٍ أَرْسَلَهُ اللَّهُ إِلَى أَهْلِ الْأَرْضِ",
    texteFrancais:
      "« Les gens viendront à Nūḥ et diront :“Tu es le premier messager envoyé aux habitants de la terre.” »",
    lien: "https://dorar.net/h/jIo0nnNx?osoul=1",
    autres: "مسلم (194)",
  },
  {
    sujet:
      "👑 Nûḥ, premier messager envoyé à l'humanité نوح أول رسول إلى أهل الأرض",
    auteur: "ابن حبان",
    numero: 3113,
    texteArabe:
      "كان بين آدمَ ونوحٍ عشرةُ قرونٍ، وبين نوحٍ وإبراهيمَ عشرةُ قرونٍ",
    texteFrancais:
      "« Combien de temps y eut-il entre Adam et Noé ? »Le Prophète ﷺ répondit :« Dix générations.",
    lien: "https://dorar.net/h/BAX1pvcx?osoul=1",
    autres: "الطبراني (8/ 118) (7545)، وابن عساكر (7/ 446)",
  },
  {
    sujet: "🌍 Nûḥ et l'origine de l'idolâtrie نوح وبداية الشرك",
    auteur: "صحيح البخاري",
    numero: 4920,
    texteArabe:
      "«صَارَتِ الْأَوْثَانُ الَّتِي كَانَتْ فِي قَوْمِ نُوحٍ فِي الْعَرَبِ بَعْدُ...»",
    texteFrancais:
      "« Les idoles qui existaient chez le peuple de Noé furent ensuite adoptées par les Arabes. »",
    lien: "https://dorar.net/hadith/sharh/150999",
    autres: "ابن الحداد (2887)",
  },
];

// 4- Abraham / Abraham[26]إبراهيم, ibrāhīm Ibrâhîm
const souratesAbraham = [
  " 1. Le monothéisme et l’appel à Allah التَّوْحِيدُ وَالدَّعْوَةُ إِلَى اللَّهِ", 19,19,19,19,19,19,19, 21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21, 26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26, 37,37,37,37,37,37,37,37,37,37,37,37, 43,43,43, 29,29,29, 
  " 2. Le raisonnement et la destruction des idoles الْحُجَّةُ وَتَحْطِيمُ الْأَصْنَام", 21,21,21,21,21,21,21,21,21,21,21,21,21,21, 37,37,37,37,37,37,37,37,
  " 3. Le jet dans le feu et le salut d’Allah إِلْقَاؤُهُ فِي النَّارِ وَنَجَاتُهُ", 21,21,21, 29, 
  " 4. Les visiteurs d’Abraham et la bonne nouvelle ضِيفُ إِبْرَاهِيمَ وَبُشْرَى الْمَوْلُودِ", 11,11,11,11,11,11,11,11, 15,15,15,15,15,15,15,15,15, 51,51,51,51,51,51,51, 29,29,
  " 5. Le débat concernant le peuple de Lot الْجِدَالُ فِي قَوْمِ لُوطٍ", 11,11,11, 15,15,15,15, 29,29,
  " 6. L’émigration vers Allah الْهِجْرَةُ إِلَى اللَّهِ", 19,19, 29,29, 37, 
  " 7. La descendance et la bénédiction الذُّرِّيَّةُ وَالْبَرَكَةُ", 21,21, 19,19, 37,37, 
  " 8. La grande épreuve (le sacrifice) الْبَلَاءُ الْعَظِيمُ (الذِّبْحُ)", 37, 37, 37, 37, 37, 37, 37, 37, 37, 37,
  " 9. L’élection divine et la droiture الْاصْطِفَاءُ وَالصِّدْقُ", 19, 37, 37, 38, 38, 38, 
  " 10. Le Jour du Jugement يَوْمُ الْقِيَامَةِ", 26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26, 29,
];
const versetsAbraham = [
  " 🕊️", 42,43,44,45,46,47,48, 51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67, 70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89, 85,86,87,88,89,90,91,92,93,94,95,96, 26,27,28, 16,17,18,
  " 🧠", 52,53,54,55,56,57,58,59,60,61,62,63,64,65, 88,89,90,91,92,93,94,95,
  " 🔥", 68,69,70, 24, 
  " 👼", 69,70,71,72,73,74,75,76, 51,52,53,54,55,56,57,58,59, 24,25,26,27,28,29,30, 31,32,
  " 🌍", 74,75,76, 57,58,59,60, 31,32, 
  " 🏃‍♂️", 49,50, 26,27, 99,
  " 🧬", 72,73, 49,50, 112,113,
  " 🐑", 102, 103, 104, 105, 106, 107, 108, 109, 110, 111,
  " 🌌", 41, 83, 84, 45, 46, 47,
  " ⚖️", 88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104, 25,
];
const ahadithsAbraham = [
  {
    sujet: "🤝 Abraham, l'ami intime d'Allah إبراهيم خليل الله ",
    auteur: "  صحيح مسلم",
    numero: 532,
    texteArabe:
      "«إِنَّ اللَّهَ اتَّخَذَنِي خَلِيلًا كَمَا اتَّخَذَ إِبْرَاهِيمَ خَلِيلًا»",
    texteFrancais:
      "« Allah m'a pris pour ami intime (khalîl), tout comme Il a pris Abraham pour ami intime. »",
    lien: "https://dorar.net/hadith/sharh/141467",
    autres: "ابن حبان (6425)",
  },
  {
    sujet:
      "🕋 Abraham et Ismaël construisent la Kaaba 🕋 إبراهيم وإسماعيل يبنيان الكعبة",
    auteur: "صحيح البخاري",
    numero: 3364,
    texteArabe:
      "«فَجَعَلَ إِسْمَاعِيلُ يَأْتِي بِالْحِجَارَةِ وَإِبْرَاهِيمُ يَبْنِي»",
    texteFrancais:
      "« Ismaël apportait les pierres tandis qu'Abraham construisait. »",
    lien: "https://dorar.net/hadith/sharh/1882",
    autres: "من أفراد البخاري على مسلم",
  },
  {
    sujet: "💦 Apparition du puits de Zamzam ظهور زمزم",
    auteur: "صحيح البخاري",
    numero: 3364,
    texteArabe: "«فَضَرَبَ جِبْرِيلُ بِعَقِبِهِ فَظَهَرَ زَمْزَمُ»",
    texteFrancais:
      "« Gabriel frappa le sol de son talon et l'eau de Zamzam jaillit. »",
    lien: "https://dorar.net/hadith/sharh/138073",
    autres: "أحمد (3390)",
  },
  {
    sujet: "🗣️ Les trois mensanges d'Abraham كذبات إبراهيم الثلاث",
    auteur: "صحيح البخاري",
    numero: 3358,
    texteArabe: "«لَمْ يَكْذِبْ إِبْرَاهِيمُ إِلَّا ثَلَاثَ كَذَبَاتٍ»",
    texteFrancais:
      "« Abraham ne prononça que trois paroles qui semblèrent être des mensonges. »",
    lien: "https://dorar.net/hadith/sharh/65437",
    autres: "مسلم (2371)",
  },
  {
    sujet: "La circoncision d'Abraham ✂️ ختان إبراهيم",
    auteur: "  صحيح البخاري",
    numero: 3356,
    texteArabe:
      "اختَتَنَ إبراهيمُ النَّبيُّ عليه السَّلامُ، وهو ابنُ ثَمانينَ سَنةً بالقَدُومِ.",
    texteFrancais: "« Abraham se fit circoncire à l’âge de 80 ans. »",
    lien: "https://dorar.net/hadith/sharh/16636",
    autres: "مسلم (2370)",
  },
  {
    sujet: " 🌟 Abraham dans le Miʿrāj لقاء إبراهيم في المعراج",
    auteur: " الألباني صحيح الجامع",
    numero: 127,
    texteArabe:
      "فَإِذَا إِبْرَاهِيمُ مُسْنِدٌ ظَهْرَهُ إِلَى الْبَيْتِ الْمَعْمُورِ",
    texteFrancais:
      "« Et voilà Abraham adossé à la Maison peuplée (al-Bayt al-Maʿmūr). »",
    lien: "https://dorar.net/hadith/sharh/119174",
    autres: "مسلم (162)",
  },
  {
    sujet: "  Le conseil d'Ibrahim à la communauté 🤲 وصية إبراهيم للأمة",
    auteur: " صحيح الترمذي ",
    numero: 3462,
    texteArabe:
      "يَا مُحَمَّدُ أَقْرِئْ أُمَّتَكَ مِنِّي السَّلَامَ، وَأَخْبِرْهُمْ أَنَّ الْجَنَّةَ طَيِّبَةُ التُّرْبَةِ عَذْبَةُ الْمَاءِ",
    texteFrancais:
      "« Ô Muhammad, transmets mon salut à ta communauté et informe-la que le Paradis a une terre excellente et une eau douce ; ses plantations sont : Subhân Allâh, Al-Hamdu lillâh, Lâ ilâha illa Allâh, Allâhu Akbar. »",
    lien: "https://dorar.net/hadith/sharh/36288",
    autres: "الطبراني (10/214) (10363)",
  },
  {
    sujet: " 🚼 Abraham était très grand ",
    auteur: " صحيح البخاري ",
    numero: 3354,
    texteArabe:
      "أتاني اللَّيلةَ آتيانِ، فأتَينا على رَجُلٍ طَويلٍ، لا أكادُ أرى رَأسَه طولًا، وإنَّه إبراهيمُ صلَّى اللهُ عليه وسلَّم.",
    texteFrancais:
      "« Je vis un homme très grand entouré de nombreux enfants... Cet homme était Ibrahim. »",
    lien: "https://dorar.net/hadith/sharh/150318",
    autres: "من أفراد البخاري على مسلم",
  },
  {
    sujet:
      " Ibrahim et son père au Jour de la Résurrection  👨‍👦 إبراهيم وأبوه يوم القيامة ",
    auteur: " صحيح البخاري ",
    numero: 3350,
    texteArabe: "«يَلْقَى إِبْرَاهِيمُ أَبَاهُ آزَرَ يَوْمَ الْقِيَامَةِ»",
    texteFrancais:
      "« Ibrahim rencontrera son père Âzar au Jour de la Résurrection. »",
    lien: "https://dorar.net/hadith/sharh/9790",
    autres: "من أفراد البخاري على مسلم",
  },
  {
    sujet:
      " Le premier vêtu au Jour de la Résurrection 👕 أول من يكسى يوم القيامة",
    auteur: " صحيح البخاري ",
    numero: 3447,
    texteArabe: "«يَلْقَى إِبْرَاهِيمُ أَبَاهُ آزَرَ يَوْمَ الْقِيَامَةِ»",
    texteFrancais:
      "« Ibrahim rencontrera son père Âzar au Jour de la Résurrection. »",
    lien: "https://dorar.net/hadith/sharh/9918",
    autres: "مسلم (2860)",
  },
  {
    sujet: " Ressemblance d'Abraham et Muhammad 🕊️ أشبه الناس بإبراهيم",
    auteur: " صحيح البخاري ",
    numero: 5913,
    texteArabe: "«أَمَّا إِبْرَاهِيمُ فَانْظُرُوا إِلَى صَاحِبِكُمْ»",
    texteFrancais:
      "« Quant à Ibrahim, regardez votre compagnon (c'est-à-dire moi-même). »",
    lien: "https://dorar.net/hadith/sharh/25773",
    autres: "مسلم (166)",
  },
  {
    sujet: " La prière sur Muhammad et Ibrahim 📿 الصلاة الإبراهيمية",
    auteur: " صحيح البخاري ",
    numero: 3370,
    texteArabe:
      "«اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ»",
    texteFrancais:
      "« Ô Allah, prie sur Muhammad et sur la famille de Muhammad comme Tu as prié sur Ibrahim et sur la famille d'Ibrahim. »",
    lien: "https://dorar.net/hadith/sharh/16204",
    autres: "مسلم (406)",
  },
];

// 5- Ismael / Ismaël[27] إسماعيل, ismāʿīl Ismâʿîl
const souratesIsmael = [
  " 1. La patience, l’obéissance à Allah et le sacrifice remplacé", 37,37,37,37,37,37,
  " 2. La construction de la Kaaba  ", 2,
  " 3. La prière pour les habitants de La Mecque ", 2, 2,
  " 4. La descendance bénie", 19, 
  " 5. La protection de la Maison sacrée", 2, 2, 2,
  " 6. La sincérité et la fidélité", 19,
];
const versetsIsmael = [
  " 🕊️ الصَّبْرُ وَالطَّاعَةُ لِلَّهِ فِدَاءُ الذَّبْحِ الْعَظِيمِ", 102,103,104,105,106,107,
  " 🏗️ بِنَاءُ الْكَعْبَةِ", 127,
  " 🙏 الدُّعَاءُ لِأَهْلِ مَكَّة", 128, 129,
  " 🧬 الذُّرِّيَّةُ الْمُبَارَكَةُ", 54, 
  " 🕋 رِعَايَةُ الْبَيْتِ الْحَرَام", 125, 126, 127,
  " 🌙 الصِّدْقُ وَالْوَفَاءُ", 54,
];
const ahadithsIsmael = [
  {
    sujet: "Ismaël, fils d'Abraham  👶 إسماعيل ابن إبراهيم",
    auteur: "  صحيح البخاري",
    numero: 3364,
    texteArabe:
      "... ثُمَّ جَاءَ بِهَا إِبْرَاهِيمُ وَبِابْنِهَا إِسْمَاعِيلَ وَهِيَ تُرْضِعُهُ ...",
    texteFrancais:
      "Abraham emmena Hajar avec son fils Ismaël, qu'elle allaitait encore, et les installa près de la Maison sacrée...",
    lien: "https://dorar.net/hadith/sharh/138073",
    autres: " أحمد (3390)",
  },
  {
    sujet:
      "🕋 Abraham et Ismaël construisent la Kaaba 🕋 إبراهيم وإسماعيل يبنيان الكعبة",
    auteur: "صحيح البخاري",
    numero: 3364,
    texteArabe:
      "«فَجَعَلَ إِسْمَاعِيلُ يَأْتِي بِالْحِجَارَةِ وَإِبْرَاهِيمُ يَبْنِي»",
    texteFrancais:
      "« Ismaël apportait les pierres tandis qu'Abraham construisait. »",
    lien: "https://dorar.net/hadith/sharh/1882",
    autres: "من أفراد البخاري على مسلم",
  },
  {
    sujet:
      " La généalogie du Prophète ﷺ remonte à Ismaël 🧬 نسب النبي ﷺ إلى إسماعيل",
    auteur: "صحيح الترمذي",
    numero: 3605,
    texteArabe: "إِنَّ اللَّهَ اصْطَفَى كِنَانَةَ مِنْ وَلَدِ إِسْمَاعِيلَ",
    texteFrancais:
      "« Allah a choisi Kinana parmi les descendants d'Ismaël... »",
    lien: "https://dorar.net/hadith/sharh/36312",
    autres: "مسلم (2276)",
  },
  {
    sujet: "🏹 Ismaël et le tir à l’arc",
    auteur: "  صحيح البخاري",
    numero: 2899,
    texteArabe: "ارْمُوا بَنِي إِسْمَاعِيلَ فَإِنَّ أَبَاكُمْ كَانَ رَامِيًا",
    texteFrancais:
      "« Tirez, ô descendants d’Ismaël, car votre ancêtre était un archer. »",
    lien: "https://dorar.net/hadith/sharh/3851",
    autres: " أحمد (16528)، وابن حبان (4693)، والبيهقي (19784)",
  },
  {
    sujet: "🏹 Ismaël et le tir à l’arc",
    auteur: "  صحيح البخاري",
    numero: 2899,
    texteArabe: "ارْمُوا بَنِي إِسْمَاعِيلَ فَإِنَّ أَبَاكُمْ كَانَ رَامِيًا",
    texteFrancais:
      "« Tirez, ô descendants d’Ismaël, car votre ancêtre était un archer. »",
    lien: "https://dorar.net/hadith/sharh/3851",
    autres: " أحمد (16528)، وابن حبان (4693)، والبيهقي (19784)",
  },
];

//6- Lotht / Loth[28] لوط, lūṭ Lût
const souratesLuth = [
  " 1. Mission prophétique de Lûṭ", 26, 26, 26, 26, 26, 37,
  " 2. La turpitude / homosexualité du peuple", 7, 7, 27, 27, 29, 26, 26,
  " 3. Corruption générale / perversité ", 29, 29, 7, 26,
  " 4. Mécréance et rejet du prophète", 26, 38, 38,
  " 5. Menaces contre Lûṭ", 26, 27, 7,
  " 6. Rejet de la pureté", 7, 27,
  " 7. Arrivée des anges", 11, 15, 29,
  " 8. Peur et détresse de Lûṭ", 11, 11, 15, 15, 29,
  " 9. Le peuple réclame les invités", 11, 11, 15, 15, 15, 54,
  " 10. « Voici mes filles »", 11, 15,
  " 11. Protection divine des anges", 11, 15, 15, 29,
  " 12. Ordre de fuir la ville", 11, 15,
  " 13. La femme de Lûṭ", 7, 11, 15, 26, 27, 29, 29, 37,
  " 14. Le châtiment", 11, 15, 7, 11, 15, 26, 27, 15, 38,
  " 15. Destruction totale", 15, 26, 37, 29, 29,
  " 16. Sauvetage de Lûṭ et des croyants", 7, 15, 26, 27, 29, 29, 37,
  " 17. Signes et leçons pour les générations futures", 15, 15, 15, 29, 37, 37, 26, 26,
  " 18. Références indirectes au peuple de Lûṭ", 38,38,38,38,38,
];
const versetsLuth = [
  " 👤", 160, 161, 162, 163, 164, 133,
  " 🚫", 80, 81, 54, 55, 28, 165, 166,
  " ⚠️", 29, 34, 81, 166,
  " ❌", 160, 13, 14,
  " ❌", 167, 56, 82,
  " 🧼", 82, 56,
  " 👼", 77, 61, 33,
  " 😢", 77, 80, 68, 69, 33,
  " 👥", 78, 79, 67, 70, 72, 37,
  " 👧", 78, 71,
  " 🛡️", 81, 63, 64, 33,
  " 🏃", 81, 65,
  " 🚫", 83, 81, 60, 171, 57, 32, 33, 135,
  " 🌪️", 82, 74,84,82,74,173,58,73,15,4,
  " ☠️", 66, 172, 136, 31, 34,
  " 🕋", 83, 59, 170, 57, 32, 33, 134,
  " 🧠", 75, 76, 77, 35, 137, 138, 174, 175,
  " 📍", 12,13,14,15,16,
  ];
const ahadithsLut = [
  {
    sujet: "Lût, contemporain d'Abraham 🕊️ لوط أخو إبراهيم",
    auteur: " صحيح البخاري",
    numero: 4694,
    texteArabe:
      "« يَرْحَمُ اللَّهُ لُوطًا، لَقَدْ كَانَ يَأْوِي إِلَى رُكْنٍ شَدِيدٍ »",
    texteFrancais:
      "« Qu'Allah fasse miséricorde à Lût ; il s'appuyait certes sur un soutien puissant. »",
    lien: "https://dorar.net/hadith/sharh/992",
    autres: " مسلم (151)",
  },
  {
    sujet: "🚫 1. L’acte du peuple de Lûṭ",
    auteur: "  الألباني",
    numero: 5891,
    texteArabe: "لَعَنَ اللَّهُ مَنْ عَمِلَ عَمَلَ قَوْمِ لُوطٍ",
    texteFrancais: "« Allah a maudit celui qui fait l’acte du peuple de Lûṭ. »",
    lien: "https://dorar.net/hadith/sharh/116214",
    autres: "  أحمد (1875)",
  },
  {
    sujet: "Ce que je crains pour ma communauté 🚫 أخوف ما أخاف على أمتي",
    auteur: " صحيح الترمذي",
    numero: 1457,
    texteArabe: " إنَّ أخوَفَ ما أخافُ على أمَّتي من عملِ قومِ لوطٍ",
    texteFrancais:
      "« Ce que je crains le plus pour ma communauté est l'acte du peuple de Lût. »",
    lien: "https://dorar.net/hadith/sharh/72929",
    autres: "ابن ماجة (2563)",
  },
];

// 7- Isaac / Isaac[29] إسحاق, isḥāq Ishâq
const souratesIsaac = [
  " 1. L’annonce de la naissance d’Isaac",11,11,11, 37, 51,51,51, 15,15,15,
  " 2. Isaac comme fils béni d’Abraham", 6,19,21,29,37,
  " 3. Isaac comme prophète et serviteur élu", 38,38,38, 21, 4, 2, 3,
  " 4. Isaac dans la lignée des prophètes", 12,12, 2, 
  " 5. Isaac parmi les prophètes honorés", 4, 6,6,6,6,6,
];
const versetsIsaac = [
  "🌟 البشارة بولادة إسحاق", 71,72,73, 112, 28,29,30, 53,54,55, 
  " 👨‍👩‍👦 إسحاق ابنٌ مبارك لإبراهيم", 84, 49, 72, 27, 113,
  " 👑 إسحاق نبيٌّ وعبدٌ مصطفى", 45, 46, 47, 73, 163, 136, 84,
  " 🕊️ إسحاق في سلسلة الأنبياء", 6, 38, 133, 
  " ✨ إسحاق من الأنبياء المكرمين", 163, 83,84,85,86,87,
];
const ahadithsIsaac = [
  {
    sujet:
      "Le noble fils du noble fils du noble fils du noble  🌟 الكريم ابن الكريم ابن الكريم ابن الكريم",
    auteur: " صحيح البخاري",
    numero: 3382,
    texteArabe:
      "« الْكَرِيمُ ابْنُ الْكَرِيمِ ابْنِ الْكَرِيمِ ابْنِ الْكَرِيمِ: يُوسُفُ بْنُ يَعْقُوبَ بْنِ إِسْحَاقَ بْنِ إِبْرَاهِيمَ عَلَيْهِمُ السَّلَامُ",
    texteFrancais:
      "« Le noble, fils du noble, fils du noble, fils du noble est Joseph, fils de Jacob, fils d’Isaac, fils d’Abraham. »",
    lien: "https://dorar.net/hadith/sharh/135359",
    autres: " الترمذي (3116)",
  },
  {
    sujet: "La plus noble lignée prophétique 🌳 أشرف نسب الأنبياء ",
    auteur: " صحيح البخاري",
    auteur: " صحيح البخاري",
    numero: 3374,
    texteArabe:
      "« يُوسُفُ نَبِيُّ اللَّهِ ابْنُ نَبِيِّ اللَّهِ ابْنِ نَبِيِّ اللَّهِ ابْنِ خَلِيلِ اللَّهِ »",
    texteFrancais:
      "« Joseph est le prophète d’Allah, fils du prophète d’Allah, fils du prophète d’Allah, fils de l’ami intime d’Allah. »",
    lien: "https://dorar.net/hadith/sharh/73096",
    autres: " مسلم (2378)",
  },

];

// 9- Joseph / Joseph[30] يوسف, yūsuf Yûsuf (fils de Ja,cob)
const souratesJoseph = [
  " 1. Le rêve de Joseph", 12,12,12,
  " 2. La jalousie de ses frères", 12,12,12,12,12,12,
  " 3. Joseph dans le puits et sauvé",12,12,12,
  " 4. Joseph en Égypte", 12,12,
  " 5. La tentation de la femme du gouverneur", 12,12,12,12,12,12,12,12,12,12,
  " 6. Joseph en prison", 12,12,12,12,
  " 7. L’interprétation du rêve du roi", 12,12,12,12,12,12,12,
  " 8. Les retrouvailles avec ses frères", 12,12,12,12,12,
  " 9. Le pardon et les retrouvailles familiales", 12, 12, 12, 12, 12,
  " 10. Les leçons de l’histoire de Joseph", ,12,12,12
];
const versetsJoseph = [
  " 🌟 رؤيا يوسف", 4,5,6,
  " 👨‍👩‍👦 حسد إخوته له", 8,9,10, 15, 17,18,
  " 🕳️ يوسف في الجب ونجاته", 15,19,20,
  " 🏛️ يوسف في مصر", 21,22,
  " ❤️ فتنة امرأة العزيز", 13,24,25,26,27,28,29,30,31,32,
  " ⛓️ يوسف في السجن", 33,36,40,41,
  " 👑 تأويل رؤيا الملك", 43,46,47,48,49,54,55,
  " 🤝 لقاء يوسف بإخوته", 58,69,77,89,90,
  " 😭 العفو ولمّ الشمل", 92, 93, 99, 100, 101,
  " ✨ العبر من قصة يوسف", 3,7,111,
  
];
const ahadithsJoseph = [
  {
    sujet: "La plus noble lignée prophétique 🌳 أشرف نسب الأنبياء ",
    auteur: " صحيح البخاري",
    numero: 3374,
    texteArabe:
      "« يُوسُفُ نَبِيُّ اللَّهِ ابْنُ نَبِيِّ اللَّهِ ابْنِ نَبِيِّ اللَّهِ ابْنِ خَلِيلِ اللَّهِ »",
    texteFrancais:
      "« Joseph est le prophète d’Allah, fils du prophète d’Allah, fils du prophète d’Allah, fils de l’ami intime d’Allah. »",
    lien: "https://dorar.net/hadith/sharh/73096",
    autres: " مسلم (2378)",
  },
  {
    sujet:
      "Joseph est préféré pour sa noblesse prophétique 👑 تفضيل يوسف لشرف نسبه",
    auteur: " البخاري في ((الأدب المفرد))",
    numero: 129,
    texteArabe: "« أَكْرَمُهُمْ عِنْدَ اللَّهِ أَتْقَاهُمْ »",
    texteFrancais: "« Le plus noble auprès d’Allah est le plus pieux. »",
    lien: "https://dorar.net/h/JiuLQTTP#:~:text=%D9%85%D8%B9%D9%8A%D9%86%20(%D8%B1%D9%88%D8%A7%D9%8A%D8%A9%20%D8%A7%D9%84%D8%AF%D9%88%D8%B1%D9%8A)-,%2D%20%D8%B3%D9%8F%D8%A6%D9%90%D9%84%D9%8E%20%D8%B1%D8%B3%D9%88%D9%84%D9%8F%20%D8%A7%D9%84%D9%84%D9%87%D9%90%20%D8%B5%D9%84%D9%8E%D9%91%D9%89%20%D8%A7%D9%84%D9%84%D9%87%D9%8F%20%D8%B9%D9%84%D9%8A%D9%87%D9%90%20%D9%88%20%D8%B3%D9%84%D9%8E%D9%91%D9%85%D9%8E%20%3A%20%D8%A3%D9%8A%D9%8F%D9%91%20%D8%A7%D9%84%D9%86%D8%A7%D8%B3%D9%90,%D9%86%D8%A8%D9%8A%D9%90%D9%91%20%D8%A7%D9%84%D9%84%D9%87%D9%90%20%D8%A7%D8%A8%D9%86%D9%90%20%D8%AE%D9%8E%D9%84%D9%90%D9%8A%D9%84%D9%90%20%D8%A7%D9%84%D9%84%D9%87%D9%90.",
    autres: " الدارمي (229)، وأبو يعلى (6562)",
  },
  {
    sujet: "La plus noble lignée prophétique 🌳 أشرف نسب الأنبياء ",
    auteur: " أحمد ",
    numero: 14082,
    texteArabe:
      "« ثُمَّ أُتِيتُ يُوسُفَ، وَإِذَا هُوَ قَدْ أُعْطِيَ شَطْرَ الْحُسْنِ »",
    texteFrancais:
      "« Puis je rencontrai Joseph, auquel avait été donnée la moitié de la beauté. »",
    lien: "https://dorar.net/hadith/sharh/119174",
    autres: " ابن أبي شيبة (17883)، وأبو يعلى (3373)",
  },
  {
    sujet: "Joseph et la patience exemplaire 🤝 صبر يوسف عليه السلام",
    auteur: " البخاري ",
    numero: 3387,
    texteArabe:
      "« يَرْحَمُ اللَّهُ يُوسُفَ، لَوْلَا الْكَلِمَةُ الَّتِي قَالَ: ﴿اذْكُرْنِي عِنْدَ رَبِّكَ﴾ مَا لَبِثَ فِي السِّجْنِ طُولَ مَا لَبِثَ »",
    texteFrancais:
      "« Qu’Allah fasse miséricorde à Joseph ! Sans la parole qu’il prononça : “Parle de moi à ton maître”, il ne serait pas resté aussi longtemps en prison. »",
    lien: "https://dorar.net/h/6sWsiCjO",
    autres: "  مسلم (151)",
  },
  {
    sujet:
      "Éloge explicite de la patience de Joseph ❤️ الثناء على حلم يوسف وصبره",
    auteur: " البخاري ",
    numero: 3372,
    texteArabe:
      "« وَنَحْنُ أَحَقُّ بِالشَّكِّ مِنْ إِبْرَاهِيمَ، وَيَرْحَمُ اللَّهُ يُوسُفَ... »",
    texteFrancais:
      "« Nous avons davantage de raison de douter qu’Abraham (et pourtant il ne doutait pas), et qu’Allah fasse miséricorde à Joseph... »",
    lien: "https://dorar.net/hadith/sharh/43557",
    autres: "  مسلم (151)",
  },
];

// 10- Saleh /Shelah[31] prophète des Thamud صالح, ṣāliḥ
const souratesSaleh = [
  " 1. Saleh envoyé à son peuple Thamoud", 7, 11, 26, 26, 26, 26, 27, 41,
  " 2. Le miracle de la chamelle", 7, 11, 26, 54, 91,
  " 3. Le rejet de صالح par son peuple", 7,7,11,26,27,54,
  " 4. Le meurtre de la chamelle", 7,11,26,91,
  " 5. Le châtiment des Thamoud", 7,11,15,15,23,51,51,51,69,69,
  " 6. Le salut de Saleh et des croyants", 11,27,
  " 7. Les leçons de l’histoire de Saleh", 7,54,89,
 
];
const versetsSaleh = [
  " 🌟 صالح مرسل إلى ثمود", 73,61,141,142,143,144,45,17,
  " 🐪 معجزة الناقة", 73,64,155,27,13,
  " ⚠️ تكذيب قوم صالح", 75,76,62,153,47,24,
  " 🗡️ عقر الناقة", 77,65,157,14,
  " 🌩️ عذاب ثمود", 78,67,83,84,41,43,44,45,4,5,
  " 🕊️ نجاة صالح والمؤمنين ", 66,53,
  " ✨ العبر من قصة صالح", 79,23,9,
];
const ahadithsSaleh = [
  {
    sujet: "le tueur de la chamelle 🐪 أشقى الناس عاقر الناقة",
    auteur: " النسائي",
    numero: 8538,
    texteArabe: "« أَلَا أُخْبِرُكُمْ بِأَشْقَى النَّاسِ؟ »",
    texteFrancais:
      "« Voulez-vous que je vous informe du plus misérable des hommes ? »: « L'homme de Thamûd qui tua la chamelle. »",
    lien: "https://dorar.net/h/bqBpqT19",
    autres: "أحمد (18321)",
  },
  {
    sujet:
      "Le noble fils du noble fils du noble fils du noble  🌟 الكريم ابن الكريم ابن الكريم ابن الكريم",
    auteur: " صحيح البخاري",
    numero: 3378,
    texteArabe:
      "فَأَمَرَهُمْ رَسُولُ اللَّهِ ﷺ أَنْ يُهْرِيقُوا مَا اسْتَقَوْا مِنْ مِيَاهِهَا وَأَنْ يَعْلِفُوا الْإِبِلَ الْعَجِينَ",
    texteFrancais:
      "Le Prophète ﷺ ordonna aux Compagnons :de jeter l'eau qu'ils avaient puisée des puits de Thamûd et de donner à leurs chameaux la pâte qui avait été préparée avec cette eau.",
    lien: "https://dorar.net/hadith/sharh/16603",
    autres: "  مسلم (2981)",
  },

];

// 11- Houd  / Eber[32] prophète des ʿAd هود, hūd Hûd (dénommé Abir)
const souratesHud = [
  " 1. Hûd envoyé au peuple de ‘Âd", 7,11,26,26,26,26,41,
  " 2. Le refus et l’orgueil du peuple de ‘Âd", 7,7,7,7,7, 11, 26,26, 54,54,54,
  " 3. Les exhortations de Hûd", 11,11, 7, 26,26,26,26,26, 
  " 4. Le châtiment du peuple de ‘Âd", 7, 11,11,11, 69,69,69, 51,51, 46,46, 
  " 5. Le salut de Hûd et des croyants", 11,7,
  " 6. Les leçons de l’histoire de Hûd", 26,26,26,26, 89,89,89, 46, 
];
const versetsHud = [
  " 🌟 هود مرسل إلى عاد", 65,50,123,124,125,126,15,
  " ⚠️ تكذيب قوم عاد واستكبارهم", 66,67,68,69,70, 53, 128,129, 18,19,20, 
  " 🕊️ مواعظ هود", 51,52, 69, 131,132,133,134,135, 
  " 🌪️ عذاب قوم عاد", 72, 58,59,60, 6,7,8, 41,42, 24,25, 
  " 🛡️ نجاة هود والمؤمنين", 58,72,
  " ✨ العبر من قصة هود", 136,137,138,139, 6,7,8, 21,
];
const ahadithsHud = [
  {
    sujet:
      "Le noble fils du noble fils du noble fils du noble  🌟 الكريم ابن الكريم ابن الكريم ابن الكريم",
    auteur: " صحيح الترمذي",
    numero: 3297,
    texteArabe:
      "« شَيَّبَتْنِي هُودٌ وَالْوَاقِعَةُ وَالْمُرْسَلَاتُ وَعَمَّ يَتَسَاءَلُونَ وَإِذَا الشَّمْسُ كُوِّرَتْ »",
    texteFrancais:
      "Les Compagnons dirent :</br> « Ô Messager d'Allah, tes cheveux ont blanchi. » </br> Il répondit :</br>« La sourate Hûd, Al-Wâqi‘a, Al-Mursalât, An-Naba’ et At-Takwîr m'ont fait blanchir les cheveux. »",
    lien: "https://dorar.net/hadith/sharh/116944",
    autres: "  ابن سعد 1180",
  },
  {
    sujet:
      "Le noble fils du noble fils du noble fils du noble  🌟 الكريم ابن الكريم ابن الكريم ابن الكريم",
    auteur: " صحيح الترمذي",
    numero: 3449,
    texteArabe:
      "« اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَهَا وَخَيْرَ مَا فِيهَا وَخَيْرَ مَا أُرْسِلَتْ بِهِ، وَأَعُوذُ بِكَ مِنْ شَرِّهَا وَشَرِّ مَا فِيهَا وَشَرِّ مَا أُرْسِلَتْ بِهِ »",
    texteFrancais:
      "« Ô Allah, je Te demande le bien de ce vent, le bien qu'il contient et le bien pour lequel il a été envoyé. Je cherche refuge auprès de Toi contre son mal, le mal qu'il contient et le mal pour lequel il a été envoyé. »",
    lien: "https://dorar.net/hadith/sharh/112326",
    autres: " مسلم (899)",
  },
  {
    sujet:
      "Crainte d'un châtiment semblable à celui de ‘Âd ⚠️ الخوف من عذاب عاد",
    auteur: " صحيح مسلم",
    numero: 899,
    texteArabe:
      "« وَمَا يُؤْمِنُنِي أَنْ يَكُونَ فِيهِ عَذَابٌ؟ قَدْ عُذِّبَ قَوْمٌ بِالرِّيحِ »",
    texteFrancais:
      "« Qu'est-ce qui me garantit qu'il ne s'y trouve pas un châtiment ? Un peuple a déjà été châtié par le vent. »",
    lien: "https://dorar.net/h/RrYw12wV?osoul=1",
    autres: " أبو داود (5098)، وأحمد (24369) ",
  },
  {
    sujet: " Hud parmi les prophètes arabes 🏜️ هودُ من الأنبياء العرب",
    auteur: "  ابن حبان",
    numero: 807,
    texteArabe: "« كان من الأنبياء العرب: هود،وصالح،وشعيب،ونبيك يا أبا ذر »",
    texteFrancais:
      "« Parmi les prophètes arabes figurent :Hûd,Ṣâliḥ,Chuʿayb,et ton Prophète, ô Abû Dharr. »",
    lien: "https://dorar.net/h/7tVGJYGl?osoul=1",
    autres: " الطبراني في ((مسند الشاميين)) (1979)",
  },
];

// 12- Moïse[33] مُوسَى, mūsā Moussa
const souratesMoise = [
  " 1. Naissance de Moïse", 20,20,20,20, 26, 28,28,28,28,28,28,28,28,28,28,28,
  " 2. Jeunesse et fuite", 28,28,28,28,28,28,28,28,
  " 3. Révélation", 20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20, 26,26,26,26,26,26,26,26, 27,27,27,27,27,27, 28,28,28,28,28,28,28, 79,79,79,79,79,
  " 4. Confrontation avec Pharaon", 7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7, 10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10, 17,17,17,17, 20,20,20,20,20,20,20,20,20, 20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20, 26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26, 28,28,28,28,28,28,28, 40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40, 43,43,43,43,43,43,43,43,43,43,43, 44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44, 51,51,51, 73,73, 79,79,79,79,79,79,79,79,79,79,79,79,
  " 5. Les magiciens", 7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7, 10,10,10,10, 20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20, 26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,
  " 6. Les plaies d’Égypte", 7,7,7,7,7,7,7,
  " 7. Exode", 2,2, 7, 10,10,10, 20,20,20, 26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26, 44,44,44,44,44,44,44,44,44,44,44,
  " 8. Le désert", 2,2,2,2,2,2,2,2,2,2, 7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7, 20,20,20,
  " 9. Le veau d’or", 2,2,2,2, 7,7,7,7,7,7,7, 20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,
  " 10. La Torah", 2, 7,7,7,7, 17, 21, 28, 32, 
  " 11. Voir Dieu", 2,2, 4, 7, 
  " 12. La vache", 2,2,2,2,2,2,2,
  " 13. Terre promise", 5,5,5,5,5,5,5,
  " 14. Al-Khidr", 18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,
  " 15. Qârûn", 28,28,28,28,28,28,28,
  " 16. Références générales", 2,2,3,4,7,10,20,28,40,

  
];
const versetsMoise = [
  " 🍼 ولادة موسى", 37,38,39,40, 18, 3,4,5,6,7,8,9,10,11,12,13,
  " 🏜️ الشباب والهروب", 14,15,16,17,18,19,20,21,
  " 🔥 الوحي", 9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36, 10,11,12,13,14,15,16,17, 7,8,9,10,11,12, 29,30,31,32,33,34,35, 15,16,17,18,19,
  " 👑 مواجهة فرعون", 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 101, 102, 103, 104, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 36,37,38,39,40,41,42, 23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46, 46,47,48,49,50,51,52,53,54,55,56, 17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,38,39,40, 15,16, 15,16,17,18,19,20,21,22,23,24,25,26,
  " 🪄 السحرة", 111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126, 79,80,81,82, 56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73, 34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,
  " 🌊 آيات مصر", 130,131,132,133,134,135,136, 
  " 🌊 الخروج", 49,50, 137, 90,91,92, 77,78,79, 52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68, 23,24,25,26,27,28,29,30,31,32,33,
  " 🏜️ الصحراء", 51,52,53,54,55,56,57,58,59,60,61, 138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160, 80,81,82,
  " 🐄 العجل الذهبي", 51,52,53,54, 148,149,150,151,152,153,154, 83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98, 
  " 📜 التوراة", 53, 142,143,144,145, 2, 48, 43, 23, 
  " ⚡ رؤية الله", 55,56,153,155, 
  " 🐄 البقرة", 67,68,69,70,71,72,73, 
  " 🏔️ الأرض المقدسة", 20,21,22,23,24,25,26,
  " ⚖️ الخضر", 60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,
  " 💰 قارون", 76,77,78,79,80,81,82,
  " 📖 إشارات عامة",87,136,84,164,103,75,9,43,53,
];
const ahadithsMoise = [
  {
    sujet: " 🌊 Les enfants d’Israël faisaient du tort à Mûsâ",
    auteur: " البخاري",
    numero: 4986,
    texteArabe: "أعطي موسى التوراة.",
    texteFrancais: "« Moïse reçut la Torah.»",
    lien: "https://dorar.net/adyan/189/%D8%A7%D9%84%D9%81%D8%B5%D9%84-%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3-%D8%AA%D8%A7%D8%B1%D9%8A%D8%AE-%D8%A7%D9%84%D8%AA%D9%88%D8%B1%D8%A7%D8%A9",
    autres: " "
  },
  {
    sujet: " 🌊 Les enfants d’Israël faisaient du tort à Mûsâ",
    auteur: " صحيح مسلم",
    numero: 339,
    texteArabe:
      "كَانَ بَنُو إِسْرَائِيلَ يَغْتَسِلُونَ عُرَاةً، وَكَانَ مُوسَى يَغْتَسِلُ وَحْدَهُ، فَقَالُوا: وَاللَّهِ مَا يَمْنَعُ مُوسَى أَنْ يَغْتَسِلَ مَعَنَا إِلَّا أَنَّهُ آدَرُ",
    texteFrancais:
      "« Les enfants d’Israël se baignaient nus ensemble tandis que Moïse se baignait seul. Ils dirent : “Rien ne l’empêche de se baigner avec nous sauf un défaut physique.” »",
    lien: "https://dorar.net/hadith/sharh/4097",
    autres: " البخاري (278)",
  },
  {
    sujet: " 🏔️ Moussa frappe l’Ange de la Mort موسى يفقأ عين ملك الموت",
    auteur: " صحيح مسلم",
    numero: 2372,
    texteArabe:
      "رسل ملك الموت إلى موسى عليه السلام، فلما جاءه صكه ففقأ عينه، فرجع إلى ربه فقال: أرسلتني إلى عبد لا يريد الموت...",
    texteFrancais:
      "L’Ange de la Mort fut envoyé à Moïse. Lorsqu’il vint à lui, Moïse le frappa et lui creva un œil. L’ange retourna alors vers son Seigneur et dit : « Tu m’as envoyé vers un serviteur qui ne veut pas mourir... »",
    lien: "https://dorar.net/hadith/sharh/13594",
    autres: " البخاري (1339)",
  },
  {
    sujet: " Le débat entre Adam et Moussa 🌊 محاجة آدم وموسى",
    auteur: " صحيح مسلم",
    numero: 2652,
    texteArabe:
      "احتج آدم وموسى، فقال موسى: أنت آدم الذي أخرجت الناس من الجنة بذنبك...",
    texteFrancais:
      "Moïse dit à Adam : « Tu es Adam qui as fait sortir les hommes du Paradis à cause de ton péché. »",
    lien: "https://dorar.net/hadith/sharh/4660",
    autres: " البخاري (4738)",
  },
  {
    sujet: " Moussa et Al-Khidr 🧑‍🏫 قصة موسى والخضر",
    auteur: " صحيح مسلم",
    numero: 2380,
    texteArabe:
      "احتج آدم وموسى، فقال موسى: أنت آدم الذي أخرجت الناس من الجنة بذنبك...",
    texteFrancais:
      "Moïse dit à Adam : « Tu es Adam qui as fait sortir les hommes du Paradis à cause de ton péché. »",
    lien: "https://dorar.net/hadith/sharh/4537",
    autres: " البخاري (4727)",
  },
  {
    sujet:
      " Les Israélites faisaient souffrir Moussa: La pierre et les vêtements 🤲 أذى بني إسرائيل لموسى ",
    auteur: " صحيح مسلم",
    numero: 339,
    texteArabe: "فقالوا: والله ما يمنع موسى أن يغتسل معنا إلا أنه آدر.",
    texteFrancais:
      "« Rien n’empêche Moïse de se baigner avec nous sauf un défaut physique. »",
    lien: "https://dorar.net/hadith/sharh/4097",
    autres: " البخاري (278)",
  },
  {
    sujet:
      " Moussa vu par le Prophète lors du Voyage nocturne 🕋 رؤية موسى ليلة الإسراء",
    auteur: " صحيح مسلم",
    numero: 167,
    texteArabe: "رأيت موسى فإذا رجل ضرب من الرجال، كأنه من رجال شنوءة..",
    texteFrancais:
      "J’ai vu Moïse ; c’était un homme robuste, semblable aux hommes de la tribu de Shanu’a.",
    lien: "https://dorar.net/hadith/sharh/40110",
    autres: " الترمذي (3649)",
  },
  {
    sujet: " Moussa et les cinq prières 🚀 مشورة موسى في الصلوات",
    auteur: " صحيح مسلم",
    numero: 163,
    texteArabe: "ارجع إلى ربك فاسأله التخفيف، فإن أمتك لا تطيق ذلك.",
    texteFrancais:
      "Retourne vers ton Seigneur et demande un allègement, car ta communauté ne pourra pas supporter cela.",
    lien: "https://dorar.net/hadith/sharh/41907",
    autres: " ابن ماجه (1399)",
  },
  {
    sujet: " Moussa et les cinq prières 🚀 مشورة موسى في الصلوات",
    auteur: " صحيح مسلم",
    numero: 2375,
    texteArabe:
      "مررت بموسى ليلة أسري بي عند الكثيب الأحمر وهو قائم يصلي في قبره.",
    texteFrancais:
      "Lors de mon Voyage nocturne, je passai près de Moïse à la dune rouge ; il était debout dans sa tombe en train de prier.",
    lien: "https://dorar.net/hadith/sharh/66213",
    autres: " من أفراد مسلم على البخاري",
  },
  {
    sujet:
      " Moussa parmi les prophètes le Jour de la Résurrection 🌌 موسى يوم القيامة",
    auteur: " صحيح مسلم",
    numero: 2375,
    texteArabe: "فإذا موسى آخذ بقائمة من قوائم العرش.",
    texteFrancais: "Je verrai alors Moïse tenant l’un des piliers du Trône.",
    lien: "https://dorar.net/h/2UXycg3M?osoul=1",
    autres: " من أفراد مسلم على البخاري",
  },
  {
    sujet: " Ne me préférez pas à Moussa 📜 لا تفضلوني على موسى",
    auteur: " صحيح مسلم",
    numero: 2373,
    texteArabe: "فإذا موسى آخذ بقائمة من قوائم العرش.",
    texteFrancais: "Je verrai alors Moïse tenant l’un des piliers du Trône.",
    lien: "https://dorar.net/hadith/sharh/6429",
    autres: "البخاري (2411) ",
  },
];

// 13- Aaron[27] هارون, hārūn Hârûn
const souratesAaron = [
  " 1. Harun, frère et soutien", 20,20,20,20,20,20,20,20, 25, 28,28,
  " 2. Mission auprès de Pharaon", 20,20,20,20,20,20,20, 26,26,26,26,26, 
  " 3. Confrontation avec les magiciens", 7,7, 10,10,
  " 4. Le veau d’or",7,7,7,7,7,7,7,7,7, 20,20,20,20,20,
  " 5. Confrontation Moïse–Harun", 20,20,20,
  " 6. Châtiment et repentir", 7,7, 20,20,20,20, 
  " 7. Harun comme prophète", 19,21,23,25, 37,37,37,37,37,37,37,37,37,
  " 8. Exode et soutien", 10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10, 26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,
  " 9. Mont Sinaï et absence de Moïse", 7,7,7,7,
  " 10. Harun dans les récits généraux", 2,4,6,19, 20,20,20,20,20,20,20, 21, 37,37,37,37,37,37,37,37,37,  
];
const versetsAaron = [
  " 👶 هارون الأخ والسند", 29,30,31,32,33,34,35,36, 35, 34,35, 
  " 🔥 مهمة فرعون", 42,43,44,45,46,47,48, 13,14,15,16,17,
  " 🪄 السحرة", 121,122, 80,81,
  " 🐄 العجل الذهبي", 142,143,144,145,146,147,148,149,150, 90,91,92,93,94,
  " ⚖️ موسى وهارون", 92,93,94,
  " 🏜️ العقاب والتوبة", 155,156, 95,96,97,98,
  " 📜 نبي هارون", 53,48,45,35,114,115,116,117,118,119,120,121,122,
  " 🌊 الخروج", 75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90, 48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,
  " 🏔️ جبل الطور", 142,143,144,145,
  " 🧭 إشارات عامة", 248,163,84,53,30,31,32,33,34,35,36, 48, 114,115,116,117,118,119,120,121,122,
];
const ahadithsAaron = [
  {
    sujet: " Comparaison entre Ali et Aaron 🤝 أنت مني بمنزلة هارون من موسى",
    auteur: " البخاري",
    numero: 3706,
    texteArabe:
      "« أما ترضى أن تكون مني بمنزلة هارون من موسى،إلا أنه لا نبي بعدي ».",
    texteFrancais:
      "« N’es-tu pas satisfait d’être pour moi ce qu’Aaron était pour Moïse,sauf qu’il n’y aura pas de prophète après moi ? »",
    lien: "https://dorar.net/hadith/sharh/21416",
    autres: " مسلم (2404)",
  },

];

// 14- Jethro[34] prophète des Madianites (Al Aïka) شُعَيْب, šuʿayb, Chuʿayb
const souratesChouib = [
  " 1. Le monothéisme et la foi", "L’appel à adorer Dieu seul", 7,11,26,26,29, "La confiance en Dieu",7,11,11,
  " 2. La justice dans le commerce", "L’interdiction de la fraude dans les mesures et les balances", 7,11,11,26,26,26, "L’interdiction de semer la corruption sur terre",7,11,
  " 3. Le rejet et les moqueries du peuple", "Le refus du message de Shuʿayb", 7,7,11,26,26, "Les moqueries et la dérision envers Shuʿayb",11,11,26,26, "Les menaces d’expulsion",7,11,
  " 4. La patience et la fermeté de Shuʿayb", "La persévérance face à l’opposition", 7,11,11,11, "L’attente du jugement de Dieu", 7,11,26,
  " 5. Le châtiment divin", "La destruction du peuple de Madyan", 7,7,11,11,29, "Le châtiment du Jour de l’Ombre",26,"Le cri et le tremblement",7,11,
  " 6. Les gens du Bois (Aṣḥāb al-Aykah)", "Mention des gens du Bois",15,26,38,50, "Le récit complet des gens du Bois",26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,
  " 7. Moïse et Madyan (traditionnellement lié à Jethro/Shuʿayb)", "La rencontre de Moïse avec les filles de Madyan", 28,28,28, "L’accueil et la protection de Moïse à Madyan",28,28, "Le mariage de Moïse et son travail chez le sage de Madyan", 28,

];
const versetsChouib = [
  " 🕊️ التوحيد والإيمان", " 📖 الدعوة إلى عبادة الله وحده", 85,84,177,178,36, "📖 التوكل على الله والثقة به",89,88,90,
  " ⚖️ العدل في التجارة", "📖 النهي عن الغش في الكيل والميزان", 85,84,85,181,182,183, "📖 النهي عن الفساد في الأرض", 86,85,
  " 😠 تكذيب القوم وسخريتهم", "📖 رفض دعوة شعيب", 88,90,91,176,185, "📖 السخرية والاستهزاء بشعيب",87,91,186,187, "📖 التهديد بالطرد والإبعاد",88,91,
  " 🛡️ صبر شعيب وثباته", "📖 الصبر والثبات أمام المعارضة", 89,88,89,93, "📖 انتظار حكم الل",89,93,189,
  " 🌩️ العذاب الإلهي", "📖 هلاك قوم مدين", 91,92,94,95,37, "📖 عذاب يوم الظلة",189, "📖 الصيحة والرجفة",91,94,
  " 🌳 أصحاب الأيكة", "📖 ذكر أصحاب الأيكة", 78,176,13,14, "📖 القصة الكاملة لأصحاب الأيكة", 176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,
  " 👨‍👧‍👦 موسى ومدين", "📖 لقاء موسى بابنتي مدين", 22,23,24, "📖 دعوة موسى إلى بيت مدين وحمايته", 25,26, "📖 زواج موسى وعمله عند شيخ مدين",27,

];
const ahadithsChouib = [
  {
    sujet: " Chuʿayb parmi les prophètes arabes 🏜️ شعيب من الأنبياء العرب",
    auteur: "  ابن حبان",
    numero: 807,
    texteArabe: "« كان من الأنبياء العرب: هود،وصالح،وشعيب،ونبيك يا أبا ذر »",
    texteFrancais:
      "« Parmi les prophètes arabes figurent :Hûd,Ṣâliḥ,Chuʿayb,et ton Prophète, ô Abû Dharr. »",
    lien: "https://dorar.net/h/7tVGJYGl?osoul=1",
    autres: " الطبراني في ((مسند الشاميين)) (1979)",
  },
];

// 15- Job[27] أَيّوب, ayyūb Ayyûb
const souratesJob = [
  " 1. La patience et la foi", " La patience de Job face à l’épreuve", 21, 38, 38, " La confiance en Dieu et l’invocation", 21, 38,
  " 2. L’invocation et l’appel au secours", "La prière de Job à Dieu", 21, 38, "La demande de miséricorde et de guérison", 21,
  " 3. La miséricorde et la guérison", " La réponse de Dieu à l’invocation de Job", 21,38, "La guérison de Job et la disparition de l’épreuve", 21,38, "Le retour des bienfaits et de la famille", 21,38,
  " 4. La fermeté et l’obéissance", "Job comme modèle des patients", 21,38, "Respecter son serment sans injustice", 38,
  " 5. Les éloges adressés à Job", "Job comme serviteur vertueux", 38, "« Quel excellent serviteur ! Il revenait sans cesse à Dieu »", 38,
  " 6. Mention de Job avec les autres prophètes", 4,6,21,
 
];
const versetsJob = [
  " 🕊️ الصبر والإيمان", " 📖 صبر أيوب على البلاء", 83,41,44, "📖 الثقة بالله والدعاء", 83,41,
  " 🤲 الدعاء والاستغاثة", "📖 دعاء أيوب إلى الله", 83,41, "📖 طلب الرحمة والشفاء", 83,
  " 🌿 الرحمة والشفاء", "📖 استجابة الله لدعاء أيوب", 84,42, "📖 شفاء أيوب وإزالة البلاء", 84,42, "📖 إعادة النعم والأهل", 84,43,
  " 🛡️ الثبات والطاعة", "📖 أيوب نموذج للصابرين", 85,44, "📖 الوفاء بالقسم دون ظلم", 44,
  " 🌟 الثناء على أيوب", "📖 أيوب عبد صالح", 44, "📖 نعم العبد إنه أواب", 44,
  " 📜 ذكر أيوب بين الأنبياء", 163,84,85,
];

// 16- David[27] داوود, dāwūd Dâwûd
const souratesDavid = [
  "1. La royauté et le jugement",
  "David établi comme roi et successeur", 2,38,
  "La sagesse et le jugement entre les gens",21,21,38,38,38,38,38,38,38,
  "L’interdiction de suivre les passions dans le jugement",38,
  "2. Le combat et la victoire",
  "La mise à mort de Goliath (Jālūt)", 2,
  "La victoire par la permission de Dieu", 2,
  "3. Les Psaumes et la révélation",
  "Le don des Psaumes (Zabūr)",4,17,
  "David parmi les prophètes",6,
  "4. Les louanges et l’adoration",
  "Les montagnes et les oiseaux glorifiant Dieu avec David",21,34,38,38,
  "La force dans l’adoration et le retour vers Dieu",38,38,
  "La belle voix dans la récitation",34,
  "5. Les bienfaits et les miracles",
  "L’enseignement de la fabrication des armures",21,34,
  "Le fer rendu malléable pour David",34,
  "6. Le repentir et le retour vers Dieu",
  "L’histoire des deux plaideurs et l’épreuve de David",38,38,38,38,
  "Le pardon demandé par David et son repentir",38,38,
  "7. David et Salomon",
  "Salomon héritant de David",27,27,
  "Le jugement commun de David et Salomon",21,21,
  "8. Les éloges adressés à David",
  "« Quel excellent serviteur »",38,
  "Celui qui revient constamment vers Dieu",38,38,
  
];
const versetsDavid = [
  " 👑 الملك والحكم",
  " 📖 جعل داود خليفة وملكًا",251,26,
  " 📖 الحكمة وفصل الخصومات",78,79,20,21,22,23,24,25,26,
  " 📖 النهي عن اتباع الهوى في الحكم",26,
  " ⚔️ الجهاد والانتصار",
  " 📖 قتل جالوت",251,
  " 📖 النصر بإذن الله",251,
  " 📖 الزبور والوحي",
  " 📖 إيتاء الزبور",163,55,
  " 📖 داود نبي من الأنبياء",84,
  " 🎶 التسبيح والعبادة",
  " 📖 تسبيح الجبال والطير مع داود",79,10,18,19,
  " 📖 قوة العبادة والرجوع إلى الله",17,30,
  " 📖 حسن الصوت في التلاوة",10,
  " 🛠️ النعم والمعجزات",
  " 📖 تعليم صناعة الدروع",80,11,
  " 📖 تليين الحديد لداود",10,
  " 🤲 التوبة والإنابة",
  " 📖 قصة الخصمين وامتحان داود",21,22,23,24,
  " 📖 استغفار داود وتوبته",24,25,
  " 👨‍👦 داود وسليمان",
  " 📖 وراثة سليمان لداود",15,16,
  " 📖 الحكم المشترك بين داود وسليمان",78,79,
  " 🌟 الثناء على داود",
  " 📖 نعم العبد",30,
  " 📖 أواب",17,30,

];

// 17- Salomon[27] سُلَيْمان, sulaymān Sulaymân
const souratesSalomon = [
  "1. La royauté et le pouvoir",
  "Le grand royaume de Salomon", 2,27,27,38,
  "La demande d’un royaume incomparable",38,
  "L’héritage et la succession",27,
  "2. La sagesse et la connaissance",
  "La sagesse accordée à Salomon",21,27,
  "La compréhension des affaires et des jugements",21,21,
  "La compréhension du langage des oiseaux",27,
  "3. La soumission du vent et des djinns",
  "Le vent soumis à Salomon",21,34,38,
  "Les djinns et démons soumis à Salomon",82,12,13,37,38,
  "Les travaux réalisés par les djinns",34,
  "4. Les oiseaux et les animaux",
  "L’histoire de la fourmi",27,27,27,
  "L’histoire de la huppe",27,27,27,27,27,27,27,27,27,
  "5. La reine de Saba",
  "L’appel de la reine de Saba à Dieu",27,27,27,
  "La consultation de son peuple par la reine",27,27,27,
  "L’envoi du cadeau à Salomon",27,27,27,
  "Le transport du trône",27,27,27,
  "La conversion de la reine de Saba",27,27,27,27,
  "6. L’adoration et le retour vers Dieu",
  "Salomon comme serviteur vertueux",38,
  "Celui qui revient constamment vers Dieu",38,
  "L’épreuve de Salomon et son repentir",38,38,
  "7. Les chevaux et l’épreuve",
  "Salomon absorbé par les chevaux",38,38,38,
  "8. La mort de Salomon",
  "La mort de Salomon et l’ignorance des djinns de l’invisible",34,
  "9. Les éloges adressés à Salomon",
  "« Quel excellent serviteur »",38,
  "La louange de Dieu pour les bienfaits accordés",27,27,
];
const versetsSalomon = [
  " 👑 الملك والسلطان",
  " 📖 ملك سليمان العظيم",102,15,16,35,
  " 📖 دعاء سليمان بملك لا ينبغي لأحد",35,
  " 📖 الاستخلاف والوراثة",16,
  " 🧠 الحكمة والعلم",
  " 📖 تعليم سليمان الحكمة", 79,15,
  " 📖 فهم القضايا والأحكام",78,79,
  " 📖 معرفة منطق الطير",16,
  " 🌬️ تسخير الريح والجن",
  " 📖 تسخير الريح لسليمان",81,12,36,
  " 📖 تسخير الجن والشياطي",82,12,13,37,38,
  " 📖 أعمال الجن لسليمان",13,
  " 🐜 الطير والحيوان",
  " 📖 قصة النملة",17,18,19,
  " 📖 قصة الهدهد",20,21,22,23,24,25,26,27,28,
  " 👸 ملكة سبأ",
  " 📖 دعوة ملكة سبأ إلى الله",29,30,31,
  " 📖 مشاورة الملكة لقومها",32,33,34,
  " 📖 إرسال الهدية إلى سليمان",35,36,37,
  " 📖 إحضار العرش",38,39,40,
  " 📖 إسلام ملكة سبأ",41,42,43,44,
  " 🛡️ العبادة والإنابة",
  " 📖 سليمان عبد صالح",30,
  " 📖 أواب", 30,
  " 📖 فتنة سليمان وتوبته",34,35,
  " 🐎 الخيل والامتحان",
  " 📖 انشغال سليمان بالخيل",31,32,33,
  " ⚰️ وفاة سليمان",
  " 📖 موت سليمان وعدم علم الجن بالغيب", 14,
  " ✨ الثناء على سليمان",
  " 📖 نعم العبد", 30," 📖 الحمد لله على النعم", 15,19,
];

// 18- Élie[35] إِلْيَاس, ilyās Ilyâs
const souratesElie = [
  " 1. L’appel au monothéisme",
  " L’appel de son peuple à adorer Dieu",
  37,
  37,
  37,
  " L’interdiction d’adorer Baal",
  37,
  " 2. Le rejet par son peuple",
  " Le démenti du peuple d’Élie",
  37,
  " Le refus de son message",
  37,
  37,
  " 3. Le salut et le châtiment",
  " Le salut des serviteurs sincères de Dieu",
  37,
  " Les négateurs conduits au châtiment",
  37,

  " 4. Les éloges adressés à Élie",
  " « Paix sur Élie »",37,
  " « Il était parmi Nos serviteurs croyants »",37,
  " « Ainsi récompensons-Nous les bienfaisants »",37,

  " 5. Mention d’Élie parmi les prophètes",
  " Élie parmi les messagers",37,
  " Mention avec les autres prophètes",6,
];
const versetsElie = [
  " 🕊️ الدعوة إلى التوحيد",
  " 📖 دعوة قومه إلى عبادة الل",123,124,125,
  " 📖 النهي عن عبادة بعل",125,
  
  " 😠 تكذيب القوم",
  " 📖 تكذيب قوم إلياس",127,
  " 📖 الإعراض عن دعوته", 126, 127,
  
  " 🌩️ النجاة والعذاب",
  " 📖 نجاة عباد الله المخلصين",128,
  " 📖 حضور المكذبين للعذاب", 127,
  
  " 🌟 الثناء على إلياس",
  " 📖 سلام على إلياس",130, 
  " 📖 إنه من عبادنا المؤمنين",132,
  " 📖 كذلك نجزي المحسنين",131,
  
  "📜 ذكر إلياس بين الأنبياء",
  " 📖 إلياس من المرسلين",123,
  " 📖 ذكره مع الأنبياء",85,
];

// 19- Élisée[36] اليسع, al yassar Al Yassa
const souratesElisee = [
  " 1. Mention d’Élisée parmi les prophètes",
  " Élisée parmi les prophètes vertueux",6,
  " Élisée parmi les meilleurs", 38,
  
  " 2. Les éloges adressés à Élisée",
  " Sa préférence parmi les mondes",6,
  " Élisée parmi les hommes excellents",38,
  
  " 3. La foi et la droiture",
  " Élisée parmi les justes",6,6,
  " Élisée parmi les serviteurs choisis de Dieu",38,38,
];
const versetsElisee = [
  " 📜 ذكر اليسع بين الأنبياء",
  " 📖 اليسع من الأنبياء الصالحين",86,
  " 📖 اليسع من الأخيار",48,
  
  " 🌟 الثناء على اليسع",
  " 📖 تفضيله على العالمين",86,
  " 📖 اليسع من الأخيار", 48,
  
  " 🕊️ الإيمان والصلاح",
  " 📖 اليسع من الصالحين",85,86,
  " 📖 اليسع من عباد الله المختارين",47,48,
];

// 20- Jonas[37] يونس, yūnous Yûnous
const souratesJonas = [
  " 1. L’appel à la foi",
  " Jonas envoyé comme messager à son peuple",10,37,
  " a foi du peuple de Jonas", 10,
  
  " 2. La fuite et le navire",
  " La fuite de Jonas",37,
  " Le tirage au sort sur le navire", 37,
  
  " 3. Le poisson et l’épreuve",
  " Jonas avalé par le poisson",21,37,
  " Jonas dans les ténèbres",21,
  " Sans ses louanges, il serait resté dans le ventre du poisson", 37, 37,
  
  " 4. L’invocation et le repentir",
  " La prière de Jonas dans le ventre du poisson",21,
  " La reconnaissance de sa faute",21,
  " La réponse de Dieu à son invocation", 21,
  
  " 5. Le salut et la miséricorde",
  " Le sauvetage de Jonas hors de la détresse",21,37,
  " La plante poussant au-dessus de lui",37,
  " Son nouvel envoi vers son peuple",37,
  " La foi de son peuple et les bienfaits accordés",10,37,

  " 6. Les éloges adressés à Jonas",
  " Jonas parmi les messagers",37,
  " Dieu sauve les croyants",21,
  " Ne pas imiter Jonas dans la précipitation",68,
  
  " 7. Mention de Jonas parmi les prophètes",
  " Jonas parmi les prophètes",4,6,
  " « L’homme du poisson »",68,68,68,
];
const versetsJonas = [
  " 🕊️ الدعوة إلى الإيمان",
  " 📖 يونس رسول إلى قومه",98,139,
  " 📖 إيمان قوم يونس", 98,
  
  " 2. 🚢 الهروب والسفينة",
  " 📖 فرار يونس",140,
  " 📖 المساهمة في القرعة", 141,
  
  " 🐋 الحوت والابتلاء",
  " 📖 ابتلاع الحوت ليونس",87,142,
  " 📖 يونس في الظلمات",87,
  " 📖 لولا التسبيح للبث في بطن الحوت",143,144,

  " 🤲 الدعاء والتوبة",
  " 📖 دعاء يونس في بطن الحوت",87,
  " 📖 اعترافه بخطئه",87,
  " 📖 استجابة الله له", 88,
  
  " 5. 🌿 النجاة والرحمة",
  " 📖 نجاة يونس من الغم",88,145,
  " 📖 إنبات شجرة عليه",146,
  " 📖 إرساله من جديد إلى قومه",147,
  " 📖 إيمان قومه وتمتيعهم", 98, 148,
  
  " 6. 🌟 الثناء على يونس",
  " 📖 يونس من المرسلين",139,
  " 📖 نجاة المؤمنين",88,
  " 📖 النهي عن التشبه بيونس في الاستعجال", 48,
  
  " 7. 📜 ذكر يونس بين الأنبياء",
  " 📖 يونس من الأنبياء",163,86,
  " 📖 صاحب الحوت",48,49,50,
];

// 21- Ézéchiel[24] ذَو الكِفْل, ḏū'l-kifl Dhul Kifl
const souratesEzekiel = [
  " 1. Mention de Dhū al-Kifl parmi les prophètes",
  " Dhū al-Kifl parmi les prophètes vertueux",21,
  " Mention avec Ismaël et Idrīs",21,
  " Mention avec les prophètes excellents", 38,
  
  " 2. La patience et la fermeté",
  " Dhū al-Kifl parmi les patients", 21,
  
  " 3. Les éloges adressés à Dhū al-Kifl",
  " Son admission dans la miséricorde de Dieu", 21,
  " « Il était parmi les justes »",21,
  " Parmi les meilleurs",38,
];
const versetsEzekiel = [
  " 📜 ذكر ذو الكفل بين الأنبياء",
  " 📖 ذو الكفل مع الأنبياء الصالحين",85,
  " 📖 ذكره مع إسماعيل وإدريس",85,
  " 📖 ذكره مع الأنبياء الأخيار", 48,
  
  " 🛡️ الصبر والثبات",
  " 📖 ذو الكفل من الصابرين", 85,
  
  " 🌟 الثناء على ذو الكفل",
  " 📖 إدخاله في رحمة الله",86,
  " 📖 إنه من الصالحين",86,
  " 📖 من الأخيار", 48,
];

// 22- Zacharie[38] زَكَرِيَّا, zakarīyā"
const souratesZacharie = [
  " 1. L’invocation et la demande d’un enfant",
  " La prière de Zacharie pour un enfant vertueux",
  3,
  19,
  19,
  19,
  21,
  " Sa crainte pour la religion après lui",
  19,
  " La demande d’un héritier pieux",
  19,

  " 2. L’annonce de Jean (Yaḥyā)",
  " L’annonce des anges concernant Jean",
  3,
  19,
  " Les qualités bénies de Jean",
  3,
  19,
  19,
  19,
  " Le nom de Jean et son caractère miraculeux",
  19,

  " 3. Le miracle et les signes",
  " L’étonnement de Zacharie",
  3,
  19,
  " La vieillesse et la stérilité de son épouse",
  3,
  19,
  " Le signe donné à Zacharie après l’annonce",
  3,
  19,
  " L’incapacité de parler sauf par signes",
  3,
  19,

  " 4. L’adoration et la piété",
  " L’abondance du rappel et des louanges",
  3,
  19,
  " L’adoration et l’humilité de Zacharie",
  21,

  " 5. L’adoration et l’humilité de Zacharie",
  " La réponse de Dieu à son invocation",
  21,
  " « Il était parmi les justes »",
  6,
  " La hâte dans les bonnes œuvres",
  21,

  " 6. La hâte dans les bonnes œuvres",
  " Zacharie parmi les prophètes vertueux",
  6,
  " Mention avec Marie",
  3,

  " 7. Marie et Zacharie",
  " Zacharie prenant soin de Marie",
  3,
  " Sa vision de la subsistance",
  3,
  " Son émotion devant le miracle de Marie et sa prière",3,
];
const versetsZacharie = [
  " 🤲 الدعاء وطلب الذرية",
  " 📖 دعاء زكريا لطلب ولد صالح",
  38,
  4,
  5,
  6,
  89,
  " 📖 خوفه على الدين بعده",
  5,
  " 📖 طلب وارث صالح",
  6,

  " 👶 البشارة بيحيى",
  " 📖 بشارة الملائكة بيحيى",
  39,
  7,
  " 📖 صفات يحيى المباركة",
  39,
  13,
  14,
  15,
  "📖 اسم يحيى ومعجزته",
  7,

  " ✨ المعجزة والآيات",
  " 📖 تعجب زكريا من البشارة",
  40,
  8,
  " 📖 كبر السن وعقم الزوجة",
  40,
  8,
  " 📖 آية زكريا بعد البشارة",
  41,
  10,
  " 📖 الامتناع عن الكلام إلا رمزًا",
  41,
  10,

  " 🕌 العبادة والتقوى",
  " 📖 كثرة الذكر والتسبيح",41,11,
  " 📖 عبادة زكريا وخشوعه", 90,
  
  " 🌟 الثناء على زكريا",
  " 📖 استجابة الله لدعائه",90,
  " 📖 إنه من الصالحين", 85,
  " 📖 المسارعة في الخيرات", 90,
  
  " 📜 ذكر زكريا بين الأنبياء",
  " 📖 زكريا من الأنبياء الصالحين",85,
  " 📖 ذكره مع مريم", 37,
  
  " 👩 مريم وزكريا",
  " 📖 كفالة زكريا لمريم",37,
  " 📖 رؤيته لرزق مريم",37,
  " 📖 تأثره بكرامة مريم ودعاؤه",38,
];

// 23- Jean le Baptiste[39] يحْيى, yaḥyā Yahyâ
const souratesJean = [
  " 1. L’annonce et la naissance",
  " L’annonce de Jean à Zacharie",
  3,
  19,
  " Le nom de Jean et son caractère miraculeux",
  19,
  " Sa naissance de parents âgés",
  3,
  19,

  " 2. La connaissance et la sagesse",
  " Jean recevant la sagesse dès l’enfance",
  19,
  " L’ordre de tenir fermement au Livre",
  19,

  " 3. La pureté et la piété",
  " Tendresse et pureté accordées par Dieu",19,
  " Il était pieux",19,
  " La bonté envers ses parents",19,
  " Il n’était ni arrogant ni désobéissant", 19,
  
  " 4. Les éloges adressés à Jean",
  " Noble, chaste et prophète",3,
  " Parmi les justes",3,6,
  " « Paix sur lui »", 19,
  
  " 5. Mention de Jean parmi les prophètes",
  " Jean parmi la descendance des prophètes",6,6,
  " Mention avec Zacharie, Jésus et Élie", 6,
  
  " 6. La paix et la bénédiction",
  " Paix sur lui le jour de sa naissance, de sa mort et de sa résurrection",19,
];
const versetsJean = [
  " 👶 البشارة والميلاد",
  " 📖 بشارة زكريا بيحيى",39,7,
  " 📖 اسم يحيى ومعجزته",7,
  " 📖 ولادته من أبوين كبيرين", 40, 8,
  
  " 📖 العلم والحكمة",
  " 📖 إيتاء يحيى الحكم صبيًا",12,
  " 📖 الأمر بالأخذ بالكتاب", 12,
  
  " 🕊️ الطهارة والتقوى",
  " 📖 حنانًا وزكاة",13,
  " 📖 كان تقيًا",13,
  " 📖 بر الوالدين",14,
  " 📖 لم يكن جبارًا عصيًا", 14,
  
  " 🌟 الثناء على يحيى",
  " 📖 سيدًا وحصورًا ونبيًا",39,
  " 📖 من الصالحين",39,85,
  " 📖 السلام عليه", 15,
  
  " 📜 ذكر يحيى بين الأنبياء",
  " 📖 يحيى من ذرية الأنبياء",84,85,
  " 📖 ذكره مع زكريا وعيسى وإلياس", 85,
  
  " ✨ السلام والبركة",
  " 📖 السلام يوم ولد ويوم يموت ويوم يبعث",15,
];

// 24- Jésus[40] عِيسى, ʿīsā ʿIsâ
const souratesJesus = [
  " 1. La naissance miraculeuse"," L’annonce de Jésus à Marie",3,19,19,19,19,19,
  " La naissance de Jésus sans père",3,19,19,
  " L’accouchement de Marie et la naissance de Jésus",19,19,19,19,19,

  " 2. La parole dans le berceau",
  " Jésus défend sa mère",19,19,19,19,19,19,19,
  " L’annonce de sa prophétie et de sa servitude envers Dieu",19,19,
  " L’ordre de la prière et de l’aumône",9,

  " 3. La prophétie et le Livre",
  " Le don de l’Évangile",3,5,57,
  " L’enseignement de la sagesse et de la Torah",3,
  " Jésus messager de Dieu",3,4,5,61,
  " La confirmation de la Torah", 3, 5,
  
  " 4. Les miracles",
  " Ressusciter les morts par permission de Dieu",3,5,
  " Guérir l’aveugle-né et le lépreux",3,5,
  " Façonner un oiseau d’argile",3,5,
  " Connaître ce que les gens cachent chez eux",3,
  " La descente de la table servie", 5, 5, 5, 5,
  
  " 5. L’appel au monothéisme",
  " Adorer Dieu seul",3,5,19,43,61,
  " Le rejet de la divinité de Jésus",5,5,5,5,
  " Jésus serviteur de Dieu", 19, 43,
  
  " 6. Les disciples",
  " La foi des disciples",3,5,
  " Le soutien apporté à Jésus",3,61,
  " La demande de la table servie", 5, 5,
  
  " 7. Le rejet par les Enfants d’Israël",
  " Le rejet de certains Enfants d’Israël",3,5,
  " Le complot contre Jésus", 3, 4,

  " 8. L’élévation vers Dieu",
  " Jésus élevé vers Dieu",3,4,
  " Le rejet de sa mise à mort et de sa crucifixion",4,
  
  " 9. Les éloges adressés à Jésus et Marie",
  " Jésus honoré ici-bas et dans l’au-delà",3,
  " Jésus parmi les rapprochés de Dieu",3,
  " Marie et son fils comme signe pour les mondes", 21, 23,
 
  " 10. Mention de Jésus parmi les prophètes",
  " Jésus parmi la descendance des prophètes",6,
  " L’annonce du prophète Muhammad",61,
  " Jésus comparable à Adam", 3,
  
  " 11. Le Jour du Jugement",
  " Dieu interroge Jésus", 5,5,5,
  " Le témoignage de Jésus sur son peuple",5,
];

const versetsJesus = [
  " 👶 الميلاد المعجز",
  " 📖 بشارة مريم بعيسى",45,17,18,19,20,21,
  " 📖 ولادة عيسى من غير أب",47,20,21,
  " 📖 مخاض مريم وولادة عيسى",22,23,24,25,26,

  " 🗣️ الكلام في المهد",
  " 📖 دفاع عيسى عن أمه",27,28,29,30,31,32,33,
  " 📖 إعلان نبوته وعبوديته لل",30,31,
  " 📖 الأمر بالصلاة والزكاة",31,

  " 3. النبوة والكتاب",
  " 📖 إيتاء الإنجيل",48,46,27,
  " 📖 تعليم الحكمة والتوراة",48,
  " 📖 عيسى رسول من الله",49,171,75,6,
  " 📖 تصديق التوراة",50,46,

  " 4. ✨ المعجزات",
  " 📖 إحياء الموتى بإذن الله",49,110,
  " 📖 شفاء الأكمه والأبرص",49,110,
  " 📖 خلق طير من طين",49,110,
  " 📖 معرفة ما يدخر الناس",49,
  " 📖 نزول المائدة",112,113,114,115,

  " 5. 🕊️ الدعوة إلى التوحيد",
  " 📖 عبادة الله وحده",51,72,36,64,6,
  " 📖 نفي الألوهية عن عيسى",72,73,116,117,
  " 📖 عيسى عبد الله",30,59,

  " 🤝 الحواريون",
  " 📖 إيمان الحواريين",52,111,
  " 📖 نصرة عيسى",52,14,
  " 📖 طلب المائدة",112,113,

  " 😠 تكذيب بني إسرائيل",
  " 📖 كفر بعض بني إسرائيل",52,78,
  " 📖 التآمر على عيسى", 54, 157,
  
  " ⬆️ الرفع إلى الله",
  " 📖 رفع عيسى إلى الله",55,158,
  " 📖 نفي القتل والصلب", 157,
  
  " 🌟 الثناء على عيسى ومريم",
  " 📖 عيسى وجيه في الدنيا والآخرة",45,
  " 📖 عيسى من المقربين",45,
  " 📖 مريم وابنها آية للعالمين", 91, 50,
  
  " 📜 ذكر عيسى بين الأنبياء",
  " 📖 عيسى من ذرية الأنبياء",85,
  " 📖 البشارة بمحمد",6,
  " 📖 عيسى مثل آدم", 59,
  
  " ⚖️ يوم القيامة",
  " 📖 سؤال الله لعيسى",116,117,118,
  " 📖 شهادة عيسى على قومه",117,
];


  

  

  



  
  
  