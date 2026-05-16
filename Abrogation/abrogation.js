// 1. Le principe d'abrogation
const souratesAbrogationPrincipe = [
    "Abrogation de versets révélés par Dieu",2,3,16,
    "Abrogation de versets révélés par Satan",22,22,
];
const versetsAbrogationPrincipe = [
    "",106,39,101,
    "",52,53,
];
const ahadithsAbrogationPrincipe = [

];

// 2. L'alccol
const souratesAbrogationAlcool = [
  "1. Tolérance implicite",16,
  "2. Le mal est supérieur au bien", 2,
  "3. Interdiction partielle", 4,
  "4. Interdiction diffinitive", 5, 5,
  "5. Autres versets lié à l'alcool", 47,83,83,
];
const versetsAbrogationAlcool = [
  " (période mecquoise)", 67,
  " (période intermédiaire - médine)", 219,
  " (pendant la prière)", 43,
  " (Selon l'interprétation majoritaire)", 90, 91,
  " (le vin au paradis)", 15,25,26,
];
const ahadithsAbrogationAlcool = [
  {
    sujet: "1. Le vin existait avant l’interdiction 🍇",
    auteur: "صحيح البخاري",
    numero: 4993,
    texteArabe:
      " « إِنَّمَا نَزَلَ أَوَّلَ مَا نَزَلَ مِنْهُ سُورَةٌ مِنَ الْمُفَصَّلِ، فِيهَا ذِكْرُ الْجَنَّةِ وَالنَّارِ، حَتَّى إِذَا ثَابَ النَّاسُ إِلَى الإِسْلاَمِ نَزَلَ الْحَلَالُ وَالْحَرَامُ، وَلَوْ نَزَلَ أَوَّلَ شَيْءٍ: لاَ تَشْرَبُوا الْخَمْرَ، لَقَالُوا: لاَ نَدَعُ الْخَمْرَ أَبَدًا »",
    texteFrancais:
      "« Les premières révélations furent des sourates courtes mentionnant le Paradis et l’Enfer. Puis, lorsque les gens entrèrent dans l’islam, les règles du licite et de l’illicite furent révélées.Et si la première chose révélée avait été :“Ne buvez pas de vin”,ils auraient dit :“Nous n’abandonnerons jamais le vin.” »",
    lien: "https://dorar.net/hadith/sharh/151265",
    autres: " النسائي (11494)",
  },
  {
    sujet: "2. Les compagnons buvaient avant l’interdiction 🍷",
    auteur: "صحيح أبي داود",
    numero: 3673,
    texteArabe:
      " « كُنْتُ أَسْقِي أَبَا طَلْحَةَ وَأَبَا دُجَانَةَ وَسُهَيْلَ بْنَ بَيْضَاءَ شَرَابًا مِنْ فَضِيخٍ »",
    texteFrancais:
      "« Je servais à boire à Abû Talha, Abû Dujâna et Suhayl ibn Baydâ une boisson faite de dattes… »",
    lien: "https://dorar.net/h/DGcY6UL7?sims=1",
    autres: " صحيح مسلم 1980 النسائي (5557)",
  },

  {
    sujet: "3. Le prophète buvait le “nabîdh” 🍷",
    auteur: "صحيح ابن ماجه",
    numero: 2759,
    texteArabe:
      " « كَانَ يُنْبَذُ لِرَسُولِ اللَّهِ ﷺ الزَّبِيبُ فِي السِّقَاءِ »",
    texteFrancais:
      "« On préparait pour le Messager d’Allah ﷺ une boisson de raisins secs dans une outre. »",
    lien: "https://dorar.net/hadith/sharh/112051",
    autres: " صحيح مسلم 2005 ",
  },

  {
    sujet: "4. ‘Umar demande une clarification",
    auteur: "صحيح أبي داود",
    numero: 3670,
    texteArabe:
      " قال عمر بن الخطاب رضي الله عنه :« اللَّهُمَّ بَيِّنْ لَنَا فِي الْخَمْرِ بَيَانًا شَافِيًا »",
    texteFrancais:
      "‘Umar ibn al-Khattâb disait : « Ô Allah, donne-nous une clarification complète au sujet du vin. »",
    lien: "https://dorar.net/hadith/sharh/63609",
    autres: "النسائي (5540)",
  },

  {
    sujet: " 5. Révélation du verset final 🍷",
    auteur: "صحيح أبي داود",
    numero: 3670,
    texteArabe:
      " قال عمر بن الخطاب رضي الله عنه :« اللَّهُمَّ بَيِّنْ لَنَا فِي الْخَمْرِ بَيَانًا شَافِيًا »",
    texteFrancais:
      "‘Umar ibn al-Khattâb disait : « Ô Allah, donne-nous une clarification complète au sujet du vin. »",
    lien: "https://dorar.net/hadith/sharh/63609",
    autres: "النسائي (5540)",
  },
  {
    sujet: " 6. Les compagnons renversèrent le vin 🏺 ",
    auteur: "صحيح مسلم ",
    numero: 1980,
    texteArabe: "« فَأَهْرَقُوا الْخَمْرَ فِي سِكَكِ الْمَدِينَةِ »",
    texteFrancais: "« Ils déversèrent le vin dans les rues de Médine. »",
    lien: "https://dorar.net/hadith/sharh/24778",
    autres: "البخاري (2464)",
  },
  {
    sujet: " 7. Le Prophète interdit toute boisson enivrante 🍶 ",
    auteur: "صحيح مسلم ",
    numero: 2003,
    texteArabe: "« كُلُّ مُسْكِرٍ حَرَامٌ »",
    texteFrancais: "« Toute substance enivrante est interdite. »",
    lien: "https://dorar.net/hadith/sharh/128071",
    autres: "البخاري (5575)",
  },

  {
    sujet: " 8. Petite quantité ou grande quantité ⚠️ ",
    auteur: "صحيح النسائي ",
    numero: 5623,
    texteArabe: "« مَا أَسْكَرَ كَثِيرُهُ فَقَلِيلُهُ حَرَامٌ »",
    texteFrancais:
      "« Ce dont une grande quantité enivre, sa petite quantité est également interdite. »",
    lien: "https://dorar.net/hadith/sharh/128470",
    autres: "ابن ماجه (3394)، وأحمد (6558)",
  },
];

// 3. 🕌 Changement de la qibla
const souratesAbrogationQibla = [
  " 1. Direction initiale de la prière",
  " 2. Nouvelle direction ",2,2,
];
const versetsAbrogationQibla = [
  "🕍: Jérusalem (Voir Hadiths)",
  " La Mecque 🕋",125, 144,
];
const ahadithsAbrogationQibla = [
  {
    sujet: "1. 🕌 la direction initiale de la prière (vers Jérusalem)",
    auteur: "El Boukhari  صحيح  البخاري",
    numero: 40,
    texteArabe:
      " صلينا مع النبيِّ نحو بيت المقدسِ ستةَ عشرَ شهرًا، أو سبعةَ عشرَ شهرًا وصُرف إلى القبلةِ",
    texteFrancais:
      "« Le Messager d’Allah ﷺ pria en direction de Jérusalem pendant seize ou dix-sept mois. »",
    lien: "https://dorar.net/hadith/sharh/5974",
    autres: "مسلم 525",
  },
  {
    sujet: "2. 🕋 Changement de qibla",
    auteur: "El Boukhari  صحيح  البخاري",
    numero: 402,
    texteArabe:
      " قالَ عُمَرُ بنُ الخَطَّابِ رَضِيَ اللَّهُ عنْه، وافَقْتُ رَبِّي في ثَلَاثٍ",
    texteFrancais: "",
    lien: "https://dorar.net/hadith/sharh/130872",
    autres: "مسلم 2399, أحمد (157), ابن حبان (6896)",
  },
];

// 4. Le pacifisme et le combat
const souratesAbrogationPacifisme = [
    " 1. Versets pacifiques ", 73, 109, 10, 
    " Versets de combat ", 2,8,22,9,9,2,
];
const versetsAbrogationPacifisme = [
    "⚖️  “versets abrogés”", 10, 6, 99,
    " ⚔️ “versets abrogeants”", 190,61,39,5,29,193,
];
const ahadithsAbrogationPacifisme = [

];

// 5. La visite des tombes
const souratesAbrogationVisiteTombes = [
    "Il n’existe pas de verset disant explicitement",
  " La distraction jusqu’aux tombes", 102,102,
];
const versetsAbrogationVisiteTombes = [
    " Voir les hadiths",
    "⚰️ ", 1,2,
];
const ahadithsAbrogationVisiteTombes = [
  {
    sujet: "1. 🕌 la direction initiale de la prière (vers Jérusalem)",
    auteur: "أحمد",
    numero: 13487,
    texteArabe:
      " « كُنْتُ نَهَيْتُكُمْ عَنْ زِيَارَةِ الْقُبُورِ، فَزُورُوهَا »",
    texteFrancais:
      "« Je vous avais interdit de visiter les tombes ; désormais visitez-les. »",
    lien: "https://dorar.net/hadith/sharh/899007",
    autres: "أبو يعلى (3707)",
  },
];

// 6. Ecriture des hadiths
const souratesAbrogationEcritureHadiths = [
    "Concernant l’écriture des hadiths, il n’existe pas de verset disant explicitement : « écrivez les hadiths » ou « n’écrivez pas les hadiths »",
    96,96,2,59,
];
const versetsAbrogationEcritureHadiths = [
  "Mais certains versets sont utilisés dans les discussions sur: </br> 📖 l’écriture,</br>🧠 la transmission du savoir,</br>✍️ la préservation de la révélation.",
4,5,282,7,
];
const ahadithsAbrogationEcritureHadiths = [
  {
    sujet: "1. Interdiction initiale d’écrire autre chose que le Coran 🚫",
    auteur: "صحيح مسلم",
    numero: 3004,
    texteArabe:
      " لَا تَكْتُبُوا عَنِّي، وَمَنْ كَتَبَ عَنِّي غَيْرَ الْقُرْآنِ فَلْيَمْحُهُ",
    texteFrancais:
      "« N’écrivez rien venant de moi ; et celui qui a écrit autre chose que le Coran, qu’il l’efface. »",
    lien: "https://dorar.net/hadith/sharh/17868",
    autres: "من أفراد مسلم على البخاري",
  },
  {
    sujet: "2. Permission d'écrire les hadiths ✍️ كِتَابَةِ غَيْرِ الْقُرْآنِ ",
    auteur: "El Boukhari  صحيح  البخاري",
    numero: 7288,
    texteArabe:
      " كُنْتُ نَهَيْتُكُمْ عَنْ كِتَابَةِ غَيْرِ الْقُرْآنِ، فَاكْتُبُوا",
    texteFrancais:
      "« Je vous avais interdit d’écrire autre chose que le Coran ; désormais écrivez. »",
    lien: "https://dorar.net/hadith/sharh/10569",
    autres: "مسلم 1337",
  },
  {
    sujet: "📜 3. Le Prophète autorise explicitement l’écriture",
    auteur: "صحيح أبي داود",
    numero: 3646,
    texteArabe:
      " « اكْتُبْ، فَوَالَّذِي نَفْسِي بِيَدِهِ مَا يَخْرُجُ مِنْهُ إِلَّا الْحَقُّ »",
    texteFrancais:
      "« Écris ! Par Celui qui détient mon âme dans Sa main, il ne sort de cette bouche que la vérité. »",
    lien: "https://dorar.net/hadith/sharh/80878",
    autres: "أحمد (6802)",
  },
];

// 7. Allaitement de l'adulte
const souratesAbrogationAllaitementAdultes = [
  "2. L'allaitement de l'adulte",   115,   "",
];
const versetsAbrogationAllaitementAdultes = [
  " 🤱 آيَةُ رضاع الكبير ",   2,   "Pour plus de détails, voir les hadiths!",
];
const ahadithsAbrogationAllaitementAdultes = [
  {
    sujet: "7. Allaitement de l'adulte 🤱",
    auteur: "أبو داود",
    numero: 2062,
    texteArabe:
      " كَانَ فِيمَا أُنْزِلَ مِنَ الْقُرْآنِ عَشْرُ رَضَعَاتٍ مَعْلُومَاتٍ… فَنُسِخْنَ بِخَمْسٍ",
    texteFrancais:
      "« Parmi ce qui fut révélé du Coran figurait dix tétées connues… puis cela fut abrogé par cinq. »",
    lien: "https://dorar.net/hadith/sharh/65041",
    autres: "مسلم 1452",
  },
];

// 8. Conservation de la viande
const souratesAbrogationConservationViande = [
   " Il n’existe pas de verset du Coran qui parle explicitement de :« conserver la viande du sacrifice plus de trois jours »"
];
const versetsAbrogationConservationViande = [
  " ➡️ Cette règle vient des hadiths et non du Coran. (voir hadiths)",
];
const ahadithsAbrogationConservationViande = [
  {
    sujet: " 8. Conservation de la viande du sacrifice 🍖",
    auteur: "صحيح مسلم",
    numero: 1977,
    texteArabe:
      " « كُنْتُ نَهَيْتُكُمْ عَنْ لُحُومِ الأَضَاحِيِّ فَوْقَ ثَلاَثٍ، فَأَمْسِكُوا مَا بَدَا لَكُمْ »",
    texteFrancais:
      "« Je vous avais interdit de conserver la viande des sacrifices plus de trois jours ; désormais gardez-en autant que vous voulez. »",
    lien: "https://dorar.net/hadith/sharh/40237",
    autres: "الترمذي (1054)",
  },
];