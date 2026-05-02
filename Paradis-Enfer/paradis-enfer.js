// 1. Le paradis d'Allah
const souratesParadis = [
  // 🌿 1. Jardins du Paradis (Jannāt) et paysages
    " 1. Jardins du Paradis (Jannāt) et paysages", 2, 3, 3, 3, 3, 4, 10, 15, 9, 18,  
    " 2. Rivières et sources", 2, 3, 3, 3, 3, 4, 10, 15,  47,
    " 3. Nourriture et fruits", 2, 55,55, 56,56,56,56,
    " 4. Épouses pures (compagnons)", 2, 3, 4, 55,55,
    " 5. Demeure éternelle et stabilité", 2, 3, 3, 3, 4, 15,  
    " 6. Paix, sécurité et absence de peur", 4, 15, 56,56,
    " 7. Récompense spirituelle et proximité d’Allah", 3,3,3, 75,75,
];
const versetsParadis = [
    "🌿", 25, 15, 133, 136, 198, 57, 9, 45, 72, 31, 
    "💧", 25, 15, 133, 136, 198, 57, 9, 45,  15,
    "🍇", 25, 70,56, 20,21,32,33,
    "👥", 25, 15, 57, 70,56, 
    "🏡", 25, 15, 136, 198, 57, 48, 
    "😊", 57, 46, 25,26, 
    "🌟", 15,169,198, 22,23, 
    

];
const ahadithssParadis = [
  {
    sujet: " 🔥🌿 آخر من يدخل الجنة (Le dernier entrant au Paradis)",
    auteur: " صحيح البخاري",
    numero: 773,
    texteArabe:
      " ... يا ربِّ لا تجعلني أشقى خلقِك فيضحَكُ اللَّهُ عزَّ وجلَّ منهُ",
    texteFrancais:
      "... Il restera un homme entre le Paradis et l’Enfer, et il sera le dernier des gens du Paradis à y entrer....",
    lien: "https://dorar.net/hadith/sharh/74177",
    autres: " مسلم (182)",
  },

  {
    sujet: " Description du paradis ",
    auteur: " صحيح مسلم",
    numero: 1901,
    texteArabe: " قوموا إلى جَنَّةٍ عَرضُها السَّمَواتُ والأرضُ،",
    texteFrancais: " ",
    lien: "https://dorar.net/hadith/sharh/33044",
    autres: " أحمد (12398) أبو داود (2618)",
  },
  {
    sujet: " Description du paradis ",
    auteur: " صحيح البخاري",
    numero: 2790,
    texteArabe:
      " إنَّ في الجنةِ مائةُ درجةٍ أعدَّها اللهُ للمجاهدِين في سبيلِه، ما بين كل درجَتينِ كما بين السماءِ والأرضِ",
    texteFrancais:
      " Au Paradis il y a cent degrés qu’Allah a préparés pour les combattants dans Son chemin.",
    lien: "https://dorar.net/hadith/sharh/68657",
    autres: " ",
  },
  {
    sujet: " 💧 Rivières et boissons ",
    auteur: " صحيح الترمذي",
    numero: 2790,
    texteArabe: "في الجنةِ أربعةُ أنهارٍ: ماءٌ، ولبنٌ، وخمرٌ، وعسلٌ",
    texteFrancais:
      " Au Paradis il y a quatre fleuves : d’eau, de lait, de vin et de miel.",
    lien: "https://dorar.net/hadith/sharh/120093",
    autres: " أحمد (20052)",
  },
  {
    sujet: "🍇 Nourriture et fruits (L'arbre au tronc d'or)",
    auteur: " صحيح الترمذي",
    numero: 2525,
    texteArabe: "ما في الجنةِ شجرةٌ إلا وساقُها من ذهب",
    texteFrancais:
      "Il n’y a pas un arbre au Paradis dont le tronc ne soit en or. ",
    lien: "https://dorar.net/hadith/sharh/149827",
    autres: " أبو يعلى (6195)، وابن حبان (7410)",
  },
  {
    sujet: "🍇 Nourriture (ni urine ni caca !)",
    auteur: "صحيح مسلم ",
    numero: 2835,
    texteArabe: "إن أهل الجنةِ يأكلون فيها ويشربون ولا يتغوّطون",
    texteFrancais:
      "Les gens du Paradis mangent et boivent sans aucune souillure. ",
    lien: "https://dorar.net/hadith/sharh/20820",
    autres: " من أفراد مسلم على البخاري",
  },
  {
    sujet: "👥 Les femmes du paradis",
    auteur: "صحيح مسلم ",
    numero: 1880,
    texteArabe: "إن أهل الجنةِ يأكلون فيها ويشربون ولا يتغوّطون",
    texteFrancais:
      "Si une femme du Paradis apparaissait sur terre, elle illuminerait tout ce qui est entre les deux.",
    lien: "https://dorar.net/hadith/sharh/13721",
    autres: " صحيح البخاري 6567",
  },
  {
    sujet: "👥 Deux houris pour chaque croyant!",
    auteur: "صحيح مسلم ",
    numero: 2834,
    texteArabe: " إن للمؤمنِ في الجنةِ زوجتين من الحور العين",
    texteFrancais: "Le croyant aura au Paradis deux épouses parmi les houris.",
    lien: "https://dorar.net/hadith/sharh/131297",
    autres: " صحيح البخاري 3246",
  },
  {
    sujet: "👥 Les croyants verront Allah ! ",
    auteur: "صحيح مسلم ",
    numero: 633,
    texteArabe: " إنكم سترون ربكم كما ترون القمر ليلة البدر",
    texteFrancais:
      "Vous verrez votre Seigneur comme vous voyez la pleine lune.",
    lien: "https://dorar.net/hadith/sharh/24478",
    autres: " صحيح البخاري 554",
  },
  {
    sujet: "💧 fleuve ! الكَوثَرُ",
    auteur: "صحيح مسلم ",
    numero: 162,
    texteArabe:
      "... هذا الكَوثَرُ الذي أعطاك رَبُّك، فإذا طينُه -أو طيبُه- مِسكٌ أذفَرُ ",
    texteFrancais:
      "Alors que je marchais dans le Paradis, je vis un fleuve dont les rives étaient faites de dômes de perles creuses.Je dis : « Qu’est-ce que cela, ô Jibril ? »Il dit : « C’est le Kawthar que ton Seigneur t’a donné. »Et son sol — ou son parfum — était du musc très odorant.",
    lien: "https://dorar.net/hadith/sharh/21709",
    autres: " صحيح البخاري 4964",
  },
  {
    sujet: "🚪 La porte Ar-Rayyan بابً الرَّيَّانُ ",
    auteur: "صحيح مسلم ",
    numero: 1152,
    texteArabe: "إنَّ في الجنةِ بابًا يقالُ له: الرَّيَّانُ ... ",
    texteFrancais:
      "Il y a au Paradis une porte appelée Ar-Rayyan.On dira au Jour de la Résurrection : « Où sont les jeûneurs ? Avez-vous une entrée vers Ar-Rayyan ? »Celui qui y entre n’aura plus jamais soif.Lorsqu’ils y seront entrés, elle sera fermée et personne d’autre n’y entrera.",
    lien: "https://dorar.net/hadith/sharh/33448",
    autres: " صحيح البخاري 1896",
  },
  {
    sujet: "🚪 Les portes du paradis أبواب الجنة",
    auteur: "صحيح مسلم ",
    numero: 1027,
    texteArabe: " مَن أنفَقَ زَوجَينِ في سَبيلِ اللهِ نوديَ في الجَنَّةِ... ",
    texteFrancais:
      "Celui qui dépense deux choses (en couple) dans le sentier d’Allah sera appelé depuis les portes du Paradis",
    lien: "https://dorar.net/hadith/sharh/11591",
    autres: " صحيح البخاري 3666",
  },
  {
    sujet: "🏡 Une grande tente !خيمةً من لؤلؤةٍ ",
    auteur: "صحيح مسلم ",
    numero: 2838,
    texteArabe:
      " إنَّ للمؤمنِ في الجنةِ لَخيمةً من لؤلؤةٍ واحدةٍ مجوَّفةٍ، طولُها ستون ميلًا،..",
    texteFrancais:
      "Le croyant aura au Paradis une tente faite d’une seule perle creuse, longue de soixante milles...",
    lien: "https://dorar.net/hadith/sharh/61059",
    autres: " صحيح البخاري 4879",
  },
  {
    sujet: "🏡 Une grande tente !خيمةً من لؤلؤةٍ ",
    auteur: "صحيح مسلم ",
    numero: 2838,
    texteArabe:
      " إنَّ للمؤمنِ في الجنةِ لَخيمةً من لؤلؤةٍ واحدةٍ مجوَّفةٍ، طولُها ستون ميلًا،..",
    texteFrancais:
      "Le croyant aura au Paradis une tente faite d’une seule perle creuse, longue de soixante milles...",
    lien: "https://dorar.net/hadith/sharh/61059",
    autres: " صحيح البخاري 4879",
  },
  {
    sujet: "70 000 croyants dans le paradis sans jugement ! ",
    auteur: "صحيح مسلم ",
    numero: 220,
    texteArabe: " يدخلُ مِن أمَّتي الجنَّةَ سبعونَ ألفًا بغيرِ حسابٍ ...",
    texteFrancais:
      "Soixante-dix mille personnes de ma communauté entreront au Paradis sans jugement...",
    lien: "https://dorar.net/hadith/sharh/64080",
    autres: " صحيح البخاري 5705",
  },
  {
    sujet: "🌿 L'arbre à l'ombre infinie ! شَجَرةً الجَنَّةِ",
    auteur: "صحيح مسلم ",
    numero: 2827,
    texteArabe:
      "إنَّ في الجَنَّةِ لَشَجَرةً يَسيرُ الرَّاكِبُ في ظِلِّها مِائةَ عامٍ لا يَقطَعُها.",
    texteFrancais:
      "Il y a dans le Paradis un arbre sous lequel un cavalier pourrait voyager pendant cent ans sans en parcourir toute l’ombre.",
    lien: "https://dorar.net/hadith/sharh/5084",
    autres: " صحيح البخاري 6552",
  },
  {
    sujet: "Certains gens de l'enfer basculeront dans le paradis!",
    auteur: "صحيح مسلم ",
    numero: 184,
    texteArabe:
      "مَن كان في قَلبِه مِثقالُ حَبَّةٍ مِن خَردَلٍ مِن إيمانٍ فأخرِجوه...",
    texteFrancais:
      "« Faites sortir (de l’Enfer) quiconque a dans son cœur le poids d’un grain de moutarde de foi. »",
    lien: "https://dorar.net/hadith/sharh/5811",
    autres: " صحيح البخاري 22",
  },
  {
    sujet: "⚖️ Histoire de Qozman قُزْمَانُ ",
    auteur: "صحيح مسلم ",
    numero: 111,
    texteArabe: "... «لا يَدخُلُ الجنَّةَ إلَّا مُؤْمِنٌ» ...",
    texteFrancais: "«N’entrera au Paradis qu’un croyant.» ...",
    lien: "https://dorar.net/hadith/sharh/26605",
    autres: " صحيح البخاري 6606",
  },
  {
    sujet:
      "🌟 Abdullah ibn Salam au paradis ! عبْدُ اللهِ بنُ سَلَامٍ مِن أهلِ الجنَّةِ ",
    auteur: "صحيح مسلم ",
    numero: 2483,
    texteArabe: "... «لا يَدخُلُ الجنَّةَ إلَّا مُؤْمِنٌ» ...",
    texteFrancais: "«N’entrera au Paradis qu’un croyant.» ...",
    lien: "https://dorar.net/hadith/sharh/6223",
    autres: " صحيح البخاري 3812",
  },
  {
    sujet: "Conditions d’entrée au Paradis",
    auteur: "صحيح مسلم ",
    numero: 94,
    texteArabe: "من ماتَ لا يشرِكُ باللَّهِ شيئًا دخلَ الجنَّةَ ...",
    texteFrancais:
      "Celui qui meurt sans rien associer à Allah entrera au Paradis.",
    lien: "https://dorar.net/hadith/sharh/120306",
    autres: " صحيح البخاري 1237",
  },
  {
    sujet: "Conditions d’entrée au Paradis",
    auteur: "صحيح مسلم ",
    numero: 94,
    texteArabe:
      " ما مِن عَبدٍ قال: لا إلَهَ إلَّا اللهُ ثُمَّ ماتَ على ذلك، إلَّا دَخَلَ الجَنَّةَ...",
    texteFrancais:
      "Aucun serviteur qui a dit : « Il n’y a pas de divinité digne d’adoration si ce n’est Allah », puis est mort sur cela, n’entrera au Paradis.",
    lien: "https://dorar.net/hadith/sharh/15353",
    autres: " صحيح البخاري 5827",
  },
  {
    sujet: "Vision d’Allah au Jour du Jugement",
    auteur: "صحيح مسلم ",
    numero: 183,
    texteArabe:
      " : يا رَسولَ اللهِ، هل نَرى رَبَّنا يَومَ القيامةِ؟ قال: نَعَم ...",
    texteFrancais:
      "« Ô Messager d’Allah, verrons-nous notre Seigneur le Jour de la Résurrection ? »Il répondit : « Oui. »",
    lien: "https://dorar.net/hadith/sharh/15353",
    autres: " صحيح البخاري 4581",
  },
  {
    sujet: "🕌 Les œuvres qui mènent au Paradis",
    auteur: "صحيح مسلم ",
    numero: 533,
    texteArabe:
      " من بنَى مسجدًا للهِ كمَفحَصِ قَطاةٍ أو أصغرَ بنَى اللهُ له بيتًا في الجنَّةِ.",
    texteFrancais:
      "Celui qui construit une mosquée pour Allah, même de la taille d’un nid de perdrix ou plus petit, Allah lui construira une maison au",
    lien: "https://dorar.net/hadith/sharh/86811",
    autres: " صحيح البخاري 450",
  },
  {
    sujet: "🍖 Viandes et nourriture du Paradis",
    auteur: " الألباني  صحيح الترغيب ",
    numero: 3740,
    texteArabe:
      " إنَّ طيرَ الجنةِ كأمثالِ البُختِ ترعى في شجرِ الجنةِ فقال أبو بكرٍ : يا رسولَ اللهِ ! إنَّ هذه لَطيرٌ ناعمةٌ فقال : أَكلَتُها أنعمُ منها – قالها ثلاثًا – إني لأرجو أن تكونَ ممن يأكلُ منها",
    texteFrancais:
      "Les oiseaux du Paradis sont semblables à de grands chameaux...",
    lien: "https://dorar.net/h/aqFzg3KK?sims=1",
    autres: " ",
  },
  {
    sujet: "🍯 Boissons et délices alimentaires: eau, lait, vin et miel !",
    auteur: "صحيح الترمذي ",
    numero: 2571,
    texteArabe: " في الجنةِ أربعةُ أنهارٍ: ماءٌ، ولبنٌ، وخمرٌ، وعسلٌ",
    texteFrancais:
      "Au Paradis, il y a quatre fleuves : d’eau, de lait, de vin et de miel.",
    lien: "https://dorar.net/hadith/sharh/120093",
    autres: " صحيح البخاري 450",
  },
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

// 2. L'enfer' d'Allah
const souratesEnfer = [
    "🔥 1. Le feu et la fournaise", 4, 14,14, 18, 22, 37,37,37,37,37,37,37, 44,44,44,44, 47, 56,56,56, 82,  
    "🔁 2. Impossibilité de sortir de l’Enfer", 5, 22, 32, 
    "💥 3. Intensité et continuité du châtiment", 22, 56, 56, 56, 78, 78, 78, 
    "🌍 4. Diversité des châtiments", 14, 14, 37, 37, 37, 37, 37, 37, 37, 44, 44, 44, 44, 47, 
    "⚖️ 5. Rétribution selon les actes", 16, 18, 32, 78, 78, 78, 99, 99, 
    ];
const versetsEnfer = [
    "النار والعذاب بالنار", 56, 16,17, 29, 22, 62,63,64,65,66,67,68, 43,44,45,46, 15, 42,43,44, 14, 
    " عدم الخروج من النار", 37, 22, 20, 
    "شدة العذاب واستمراريته ", 22, 42, 43, 44, 24, 25, 26, 
    " أنواع العذاب المختلفة", 16, 17, 62, 63, 64, 65, 66, 67, 68, 43, 44, 45, 46, 15, 
    " الجزاء حسب الأعمال ", 34, 29, 20, 24, 25, 26, 7, 8, 
];
const ahadithssEnfer = [
  {
    sujet: " 🔥Les plus sévèrement punis أشد الناس عذابًا في النار",
    auteur: " صحيح مسلم",
    numero: 2109,
    texteArabe: " أشدُّ النَّاسِ عذابًا يومَ القيامةِ، المصوِّرونَ.",
    texteFrancais:
      " Les gens qui subiront le châtiment le plus sévère au Jour de la Résurrection sont les faiseurs d’images (« مصوِّرون »",
    lien: "https://dorar.net/hadith/sharh/123620",
    autres: " البخاري (5950)",
  },
  {
    sujet:
      " 🔥👥 أكثر أهل النار وأهل الجنة (Majorité des habitants de l’Enfer et du Paradis",
    auteur: " صحيح مسلم",
    numero: 2737,
    texteArabe:
      " اطَّلَعْتُ في النَّارِ فرأَيْتُ أكثَرَ أهلِها النِّساءَ، واطَّلَعْتُ في الجنَّةِ فرأَيْتُ أكثَرَ أهلِها الفُقراءَ.",
    texteFrancais:
      " J’ai regardé dans le Feu et j’ai vu que la majorité de ses habitants sont des femmes.",
    lien: "https://dorar.net/hadith/sharh/21365",
    autres: " البخاري (3241)",
  },
  {
    sujet: " 🔥 الجُهنَّميِّينَ الشفاعة",
    auteur: " صحيح ابن ماجه 3501",
    numero: 2737,
    texteArabe: " ليخرجنَّ قومٌ من النارِ بشفاعَتِي يُسمُّونَ الجُهنَّميِّينَ",
    texteFrancais:
      "Des gens sortiront de l’Enfer grâce à mon intercession. Ils seront appelés « les gens de la Géhenne » (al-Jahannamiyyûn). ",
    lien: "https://dorar.net/hadith/sharh/21365",
    autres: " البخاري (6566)",
  },
  {
    sujet: " 🔥 الكذب على النبي ﷺ (Mentir sur le Prophète)",
    auteur: " صحيح البخاري",
    numero: 1291,
    texteArabe:
      " إنَّ كَذِبًا عليَّ ليس ككذبٍ على أحدٍ ، فمن كذب عليَّ مُتعمِّدًا ، فلْيتبوَّأْ مقعدَه من النَّارِ",
    texteFrancais:
      "Français : Mentir à mon sujet n’est pas comme mentir à n’importe qui. Celui qui ment intentionnellement sur moi, qu’il prenne sa place en Enfer.",
    lien: "https://dorar.net/hadith/sharh/61988",
    autres: " أحمد (18202)",
  },
  {
    sujet: " ⚰️ عذاب القبر (Châtiment de la tombe)",
    auteur: " صحيح البخاري",
    numero: 1292,
    texteArabe: " الميِّتُ يُعذَّبُ في قَبرِه بما نِيحَ علَيهِ",
    texteFrancais:
      "Le mort est châtié dans sa tombe à cause des lamentations (les pleurs excessifs et les cris de deuil) qu’on fait sur lui.",
    lien: "https://dorar.net/hadith/sharh/37248",
    autres: " مسلم (927)",
  },
  {
    sujet:
      " ⚰️ عذاب القبر والبكاء على الميت (Châtiment de la tombe et pleurs des proches",
    auteur: " صحيح البخاري",
    numero: 1304,
    texteArabe: " إِنَّ المَيِّتَ يُعَذَّبُ بِبُكاءِ أهلِهِ عليهِ",
    texteFrancais:
      "... Et le mort est châtié à cause des pleurs de sa famille sur lui",
    lien: "https://dorar.net/hadith/sharh/9662",
    autres: " مسلم (924)",
  },
  {
    sujet: " 🔥 أهون أهل النار عذابًا (Le moins châtié en Enfer)",
    auteur: " صحيح البخاري",
    numero: 6561,
    texteArabe:
      " إنَّ أهونَ أهلِ النَّارِ عَذابًا مَن له نَعلانِ وشِراكانِ مِن نارٍ ...",
    texteFrancais:
      "Le plus légèrement châtié parmi les gens de l’Enfer est celui qui a deux sandales et deux lanières de feu, à cause desquelles son cerveau bout comme une marmite",
    lien: "https://dorar.net/hadith/sharh/5105",
    autres: " مسلم (213)",
  },
  {
    sujet:
      " 🔥 شفاعة النبي ﷺ وعذاب أبي طالب (Intercession et châtiment d’Abu Talib)",
    auteur: " صحيح البخاري",
    numero: 6208,
    texteArabe:
      " ...  فيُجعَلُ في ضَحضاحٍ مِنَ النَّارِ يَبلُغُ كَعبَيه، يَغلي منه أُمُّ دِماغِه.",
    texteFrancais:
      "... Il est dans une couche peu profonde du Feu. Sans moi, il aurait été dans le degré le plus bas de l’Enfer ...",
    lien: "https://dorar.net/hadith/sharh/1639",
    autres: " مسلم (209)",
  },
  {
    sujet:
      " 🌿🔥 أهل الجنة وأهل النار (Caractéristiques des gens du Paradis et de l’Enfer)",
    auteur: " صحيح البخاري",
    numero: 4918,
    texteArabe:
      " ...  قال: ألا أُخبِرُكُم بأهلِ النَّارِ؟ قالوا: بَلى، قال: كُلُّ عُتُلٍّ جَوَّاظٍ مُستَكبِرٍ..",
    texteFrancais:
      "... il dit : « Voulez-vous que je vous informe des gens de l’Enfer ? »Ils dirent : « Oui. »Il dit : « Tout être dur, arrogant et orgueilleu ",
    lien: "https://dorar.net/hadith/sharh/15115",
    autres: " مسلم (2853)",
  },
  {
    sujet: " 🌿🔥 الخلود في الجنة والنار (L’éternité au Paradis et en Enfer)",
    auteur: " صحيح البخاري",
    numero: 6545,
    texteArabe: " ...  يا أهلَ النَّارِ خُلودٌ لا مَوتَ...",
    texteFrancais: "Il sera dit aux gens du Paradis : « Ô gens du Paradis, éternité sans mort. »Et il sera dit aux gens de l’Enfer : « Ô gens de l’Enfer, éternité sans mort. ",
    lien: "https://dorar.net/hadith/sharh/5415",
    autres: " ",
  },
];

