// 1. هلاك الأمم والعقوبات (Destruction des peuples / châtiment des nations)
const souratesAllahMisericordieuxDestruction = [15,15,15,16,16,17,17,17,18,19,21,21,23,25,25,25,25,25,28,28,29,32,34, 43,43, 59,65,65,68,68,69,69,69,69,];
const versetsAllahMisericordieuxDestruction = [79,80,83,26,113,17,16,58,59,98,6,11,44,36,37,38,39,40,58,59,40, 26,33, 25,55, 2,8,9,19,20,4,5,6,7,];
const ahadithsAllahMisericordieuxDestruction = [
  {
    sujet: "Punition collective quand le mal se répand",
    auteur: "صحيح الترمذي",
    numero: 2185,
    texteArabe: " يكونُ في آخرِ الزمانِ الخسفُ ، و القذفُ ، و المسخُ ",
    texteFrancais:
      "Quand le mal se répand, il y a alors engloutissement, jets de pierres et métamorphoses.",
    lien: "https://dorar.net/hadith/sharh/113548",
    autres: "ابن ماجه (4060)",
  },
  {
    sujet: "Punition générale même avec les pieux",
    auteur: "صحيح أبي داود",
    numero: 4249,
    texteArabe: " «وَيْلٌ لِلْعَرَبِ مِنْ شَرٍّ قَدِ اقْتَرَبَ…»",
    texteFrancais: "Malheur aux Arabes d’un mal qui s’approche…",
    lien: "https://dorar.net/hadith/sharh/43465",
    autres: "3346 مسلم (2880) صحيح البخاري ",
  },
  {
    sujet: "Les peuples détruits après rejet des messagers",
    auteur: "صحيح البخاري",
    numero: 4981,
    texteArabe:
      "ما من الأنبياء من نبيٍّ ، إلا و قد أُعطَى من الآيات ما مِثلُه آمنَ عليه البشرُ ...",
    texteFrancais:
      "Chaque prophète a reçu des signes… mais son peuple les a rejetés.",
    lien: "https://dorar.net/hadith/sharh/5444",
    autres: " مسلم (152) ",
  },
  {
    sujet: "Allah laisse un délai avant de punir",
    auteur: "صحيح البخاري",
    numero: 4686,
    texteArabe:
      "إنَّ اللهَ عزَّ وجلَّ يُملي للظَّالِمِ، فإذا أخَذَه لَم يُفلِتْه",
    texteFrancais:
      "Allah accorde un délai à l’injuste, puis quand Il le saisit, il ne lui échappe pas.",
    lien: "https://dorar.net/hadith/sharh/16384",
    autres: " مسلم (2583) ",
  },
  {
    sujet: "Le châtiment peut toucher tout le monde",
    auteur: "صحيح البخاري",
    numero: 7108,
    texteArabe:
      "«إِذَا أَنْزَلَ اللَّهُ بِقَوْمٍ عَذَابًا، أَصَابَ العَذَابُ مَنْ كَانَ فِيهِمْ، ثُمَّ بُعِثُوا عَلَى أَعْمَالِهِمْ»",
    texteFrancais:
      "Quand Allah fait descendre un châtiment sur un peuple, il atteint tous ceux qui sont parmi eux, puis ils seront ressuscités selon leurs actions.",
    lien: "https://dorar.net/hadith/sharh/37321",
    autres: " مسلم (2879) ",
  },
  {
    sujet:
      "Interdiction d’entrer dans les lieux desThamuds",
    auteur: "صحيح البخاري",
    numero: 4702,
    texteArabe:
      "«إِذَا أَنْزَلَ اللَّهُ بِقَوْمٍ عَذَابًا، أَصَابَ العَذَابُ مَنْ كَانَ فِيهِمْ، ثُمَّ بُعِثُوا عَلَى أَعْمَالِهِمْ»",
    texteFrancais: "N’entrez pas chez ces peuples châtiés sauf en pleurant.",
    lien: "https://dorar.net/hadith/sharh/3156",
    autres: " مسلم (2980) ",
  },
];
 
// 2. عذاب الآخرة (Châtiment de l’au-delà / Enfer)
const souratesAllahMisericordieuxEnfer = [17,17,17, 18, 19,19,19,19,19, 21,21, 22,22,22,22, 25,25, 33,33,33,33,33, 37,37, 66, 84, 88,88,];
const versetsAllahMisericordieuxEnfer = [18, 97,98, 29, 68,69,70,71,72, 39,40, 19,20,21,22, 13,14, 64,65,66,67,68, 22,23, 6, 12, 23,24, ];
const ahadithsAllahMisericordieuxEnfer = [
  {
    sujet: "Le feu le plus léger de l’Enfer",
    auteur: "صحيح البخاري",
    numero: 6561,
    texteArabe:
      "«إِذَا أَنْزَلَ اللَّهُ بِقَوْمٍ عَذَابًا، أَصَابَ العَذَابُ مَنْ كَانَ فِيهِمْ، ثُمَّ بُعِثُوا عَلَى أَعْمَالِهِمْ»",
    texteFrancais:
      "Le châtiment le plus léger en Enfer sera pour quelqu’un qui portera deux sandales de feu, et son cerveau bouillonnera à cause d’elles.",
    lien: "https://dorar.net/hadith/sharh/5105",
    autres: " مسلم (213) ",
  },
  {
    sujet: "Le feu de l’Enfer est bien plus intense",
    auteur: "صحيح البخاري",
    numero: 3265,
    texteArabe: "نارُكُم جُزءٌ مِن سَبعينَ جُزءًا مِن نارِ جَهَنَّمَ، ...",
    texteFrancais:
      "Votre feu ici-bas n’est qu’une partie sur soixante-dix du feu de l’Enfer.",
    lien: "https://dorar.net/hadith/sharh/87936",
    autres: " مسلم (2843) ",
  },
  {
    sujet: "Les gens de l’Enfer ne meurent pas",
    auteur: "صحيح مسلم",
    numero: 2842,
    texteArabe:
      "يؤتى بجهنمَ يومئذٍ لها سبعونَ ألفَ زِمامٍ مع كلِّ زمامٍ سبعونَ ألفَ ملكٍ يَجرُّونَها ",
    texteFrancais:
      "On fera venir l’Enfer ce jour-là avec 70 000 rênes, chacune tenue par 70 000 anges.",
    lien: "https://dorar.net/hadith/sharh/79230",
    autres: "  من أفراد مسلم على البخاري ",
  },
  {
    sujet: "L'enfer ne se remplie jamais",
    auteur: "صحيح مسلم",
    numero: 2846,
    texteArabe:
      " «يُقَالُ لِأَهْلِ النَّارِ: هَلِ امْتَلَأْتِ؟ فَتَقُولُ: هَلْ مِنْ مَزِيدٍ»",
    texteFrancais:
      "On dira à l’Enfer : es-tu rempli ?Il dira : y en a-t-il encore ?",
    lien: "https://dorar.net/hadith/sharh/5428",
    autres: "البخاري (4850) ",
  },
  {
    sujet: "La profondeur de l’Enfer",
    auteur: "صحيح مسلم",
    numero: 2844,
    texteArabe:
      "«لَوْ أُلْقِيَ حَجَرٌ فِي جَهَنَّمَ لَهَوَى فِيهَا سَبْعِينَ خَرِيفًا»",
    texteFrancais:
      "Si une pierre est jetée en Enfer, elle tomberait pendant 70 ans avant d’atteindre le fond.",
    lien: "https://dorar.net/hadith/sharh/20455",
    autres: "الألباني 6993 ",
  },
  {
    sujet: "Les gens de l’Enfer pleureront énormément",
    auteur: "ابن ماجه",
    numero: 4324,
    texteArabe:
      " يُرْسَلُ البكاءُ على أهلِ النارِ، فيَبْكُونَ حتى تنقطِعَ الدموعُ، ثُمَّ يبكونَ الدَّمَ، حتى يصيرَ في وجوهِهِم كهيئَةَ الأخدودِ ، لو أرسلَتْ فيه السفنُ لجرَتْ",
    texteFrancais:
      "Les gens de l’Enfer pleureront tellement que des bateaux pourraient naviguer dans leurs larmes.",
    lien: "https://dorar.net/h/5elFXIQ2",
    autres: "الألباني 8083 ",
  },
  {
    sujet: "L'enfer ne se remplie jamais",
    auteur: "ابن ماجه",
    numero: 4324,
    texteArabe:
      " يُرْسَلُ البكاءُ على أهلِ النارِ، فيَبْكُونَ حتى تنقطِعَ الدموعُ، ثُمَّ يبكونَ الدَّمَ، حتى يصيرَ في وجوهِهِم كهيئَةَ الأخدودِ ، لو أرسلَتْ فيه السفنُ لجرَتْ",
    texteFrancais:
      "Les gens de l’Enfer pleureront tellement que des bateaux pourraient naviguer dans leurs larmes.",
    lien: "https://dorar.net/h/5elFXIQ2",
    autres: "الألباني 8083 ",
  },
  {
    sujet: "Vision du Prophète ﷺ de l’Enfer",
    auteur: "صحيح البخاري",
    numero: 1052,
    texteArabe:
      "«رَأَيْتُ النَّارَ فَلَمْ أَرَ كَالْيَوْمِ مَنْظَرًا قَطُّ أَفْظَعَ»",
    texteFrancais:
      "J’ai vu l’Enfer, et je n’ai jamais vu une scène plus terrifiante.",
    lien: "https://dorar.net/hadith/sharh/67314",
    autres: "مسلم (907)",
  },
];

// 3. العدل والمسؤولية (Justice divine et responsabilité humaine)
const souratesAllahMisericordieuxJustice = [17,17, 21, 22, 29, 33,33,];
const versetsAllahMisericordieuxJustice = [15,16, 9, 58, 40, 66,67,];
const ahadithsAllahMisericordieuxJustice = [
  {
    sujet: "Chacun est responsable de ses actes",
    auteur: "صحيح البخاري",
    numero: 2409,
    texteArabe: "« كُلُّكُمْ رَاعٍ، وَكُلُّكُمْ مَسْؤُولٌ عَنْ رَعِيَّتِهِ...»",
    texteFrancais:
      "« Chacun de vous est un berger, et chacun de vous est responsable de son troupeau… »",
    lien: "https://dorar.net/hadith/sharh/66037",
    autres: " مسلم (1829) ",
  },
  {
    sujet: "Chacun est responsable de ses actes",
    auteur: "صحيح البخاري",
    numero: 54,
    texteArabe: "« إنما الأعمال بالنيات، وإنما لكل امرئ ما نوى»",
    texteFrancais:
      "« Les actions ne valent que par les intentions, et chacun n’aura que ce qu’il a eu l’intention de faire. »",
    lien: "https://dorar.net/hadith/sharh/64107",
    autres: " مسلم (1907) ",
  },
  {
    sujet: "L’injustice mène à l’obscurité au Jour du Jugement",
    auteur: "صحيح مسلم",
    numero: 2578,
    texteArabe: "« الظلمُ ظلماتٌ يوم القيامة »",
    texteFrancais:
      "« L’injustice sera des ténèbres le Jour de la Résurrection. »",
    lien: "https://dorar.net/hadith/sharh/17170",
    autres: " البيهقي (11612)",
  },
];

// 4. الإيمان والتكذيب (Foi et rejet des signes)
const souratesAllahMisericordieuxFoi = [15, 16, 26, 43,];
const versetsAllahMisericordieuxFoi = [81, 27, 6, 24, ];
const ahadithsAllahMisericordieuxFoi = [
  {
    sujet: "Le croyant accepte les signes, le mécréant les rejette",
    auteur: "صحيح البخاري",
    numero: 5020,
    texteArabe:
      "مثلُ المؤمنِ الذي يقرأُ القرآنَ مثلُ الأُترُجَّةِ، ريحُها طيِّبٌ وطعمُها طيِّبٌ،",
    texteFrancais:
      "« Le croyant qui lit le Coran est comme le cédrat : son odeur est agréable et son goût est bon… tandis que l’hypocrite… est amer. »",
    lien: "https://dorar.net/hadith/sharh/71664",
    autres: " مسلم (797) ",
  },
  {
    sujet: "La foi et la reconnaissance des signes",
    auteur: "صحيح مسلم",
    numero: 34,
    texteArabe:
      "« ذاق طعم الإيمان من رضي بالله ربًّا، وبالإسلام دينًا، وبمحمد رسولًا »",
    texteFrancais:
      "« Goûte à la douceur de la foi celui qui accepte Allah comme Seigneur, l’Islam comme religion et Muhammad comme messager. »",
    lien: "https://dorar.net/hadith/sharh/63646",
    autres: "الترمذي (2623)، وأحمد (1779)، وابن حبان (1694) ",
  },
  {
    sujet: "Suivre les signes mène au salut",
    auteur: "مالك  في ((الموطأ))",
    numero: "2 / 899",
    texteArabe: "تركت فيكم ما إن تمسكتم به لن تضلوا: كتاب الله وسنتي",
    texteFrancais:
      "« Je vous ai laissé ce qui, si vous vous y attachez, vous ne vous égarerez pas : le Livre d’Allah et ma Sunna. »",
    lien: "https://dorar.net/hadith/sharh/115269",
    autres: "الحاكم (318)",
  },
];

// 5. قدرة الله وحكمه (Puissance et souveraineté d’Allah)
const souratesAllahMisericordieuxPuissance = [16,16, 17, 22, 35, 36, 40, 42, 22, 33, ];
const versetsAllahMisericordieuxPuissance = [26, 40, 97, 39, 2, 82, 68, 9, 70, 54, ];
const ahadithsAllahMisericordieuxPuissance = [
  {
    sujet: "Allah détient toute la royauté",
    auteur: "صحيح البخاري",
    numero: 7414,
    texteArabe:
      "« يقبضُ اللهُ الأرضَ يومَ القيامةِ ويطوي السماءَ بيمينهِ، ثم يقولُ: أنا الملكُ، أين ملوكُ الأرض؟ »",
    texteFrancais:
      "« Allah saisira la terre le Jour de la Résurrection et pliera les cieux dans Sa main droite, puis Il dira : “Je suis le Roi ! Où sont les rois de la terre ?” »",
    lien: "https://dorar.net/hadith/sharh/1620",
    autres: " مسلم (2786) ",
  },
  {
    sujet: "Allah est capable de tout",
    auteur: "صحيح مسلم",
    numero: 179,
    texteArabe:
      "« إنَّ اللهَ لا ينامُ ولا ينبغي له أن ينامَ، يخفضُ القِسطَ ويرفعُهُ… »",
    texteFrancais:
      "« Allah ne dort pas et il ne Lui convient pas de dormir. Il abaisse et élève la balance… »",
    lien: "https://dorar.net/hadith/sharh/74274",
    autres: " مسلم (179) ",
  },
  {
    sujet: "Toute la création dépend de Lui",
    auteur: "صحيح البخاري",
    numero: 46,
    texteArabe: "« يدُ اللهِ مَلأى لا تغيضُها نفقةٌ، سحّاءُ الليلَ والنهارَ »",
    texteFrancais:
      "« La main d’Allah est pleine, la dépense ne la diminue pas. Il donne nuit et jour. »",
    lien: "https://dorar.net/hadith/sharh/13172",
    autres: " مسلم (993) ",
  },
  {
    sujet: "Allah est le plus puissant des juges",
    auteur: "صحيح البخاري",
    numero: 4686,
    texteArabe: "« إن اللهَ يُملي للظالم حتى إذا أخذه لم يُفلته »",
    texteFrancais:
      "« Allah accorde un délai à l’injuste, mais quand Il le saisit, Il ne le laisse pas échapper. »",
    lien: "https://dorar.net/hadith/sharh/16384",
    autres: " مسلم (2583) ",
  },
];

// 6. العلم الإلهي (Science divine)
const souratesAllahMisericordieuxScience = [15, 16, 17, 22, 33, 11, 13,  ];
const versetsAllahMisericordieuxScience = [81, 27, 17, 70, 54, 1, 9, ];
const ahadithsAllahMisericordieuxScience = [
  {
    sujet: "Allah connaît tout, même l’invisible",
    auteur: "صحيح مسلم",
    numero: 2653,
    texteArabe:
      "« إنَّ اللهَ كتبَ مقاديرَ الخلائقِ قبل أن يخلقَ السماواتِ والأرضَ بخمسين ألف سنة »",
    texteFrancais:
      "« Allah a écrit les destinées des créatures cinquante mille ans avant de créer les cieux et la terre. »",
    lien: "https://dorar.net/hadith/sharh/118676",
    autres: " الترمذي (2156)، وأحمد (6579) ",
  },
  {
    sujet: "Rien n’échappe à Sa connaissance",
    auteur: "صحيح مسلم",
    numero: 2647,
    texteArabe:
      "ما مِنكُم مِن أحَدٍ إلَّا وقد كُتِبَ مَقعَدُه مِنَ النَّارِ، ومَقعَدُه مِنَ الجَنَّةِ",
    texteFrancais:
      "« Il n’y a aucun d’entre vous dont la place au Paradis ou en Enfer n’a pas été écrite. »",
    lien: "https://dorar.net/hadith/sharh/4566",
    autres: " أبو داود (4694)، والترمذي (3344) ",
  },
  {
    sujet: "Rien n’échappe à Sa connaissance",
    auteur: "صحيح مسلم",
    numero: 2643,
    texteArabe:
      "« إن أحدكم يُجمع خلقه في بطن أمه… ثم يُكتب رزقه وأجله وعمله وشقي أو سعيد »",
    texteFrancais:
      "« L’un de vous est rassemblé dans le ventre de sa mère… puis sont écrits sa subsistance, sa durée de vie, ses actes et s’il sera heureux ou malheureux. »",
    lien: "https://dorar.net/hadith/sharh/4724",
    autres: " البخاري (3208) ",
    },
  
];

// 7. الأمثال والعبر (Paraboles et leçons)
const souratesAllahMisericordieuxParaboles = [16,16, 68,68,68,68, ];
const versetsAllahMisericordieuxParaboles = [112,113, 17,18,19,20, ];
const ahadithsAllahMisericordieuxParaboles = [
  {
    sujet: "La parabole de la guidance",
    auteur: "صحيح مسلم",
    numero: 2282,
    texteArabe:
      "« مثلُ ما بعثني اللهُ به من الهدى والعلم كمثلِ الغيثِ الكثيرِ أصاب أرضًا… »",
    texteFrancais:
      "« L’exemple de la guidance et du savoir avec lesquels Allah m’a envoyé est comme une pluie abondante tombant sur une terre… »",
    lien: "https://dorar.net/hadith/sharh/148",
    autres: " البخاري (79)",
  },
  {
    sujet: "La parabole du croyant et de l’hypocrite",
    auteur: "صحيح مسلم",
    numero: 797,
    texteArabe:
      "« مثلُ المؤمنِ الذي يقرأ القرآن كمثلِ الأترجة… ومثلُ المنافقِ… »",
    texteFrancais:
      "« Le croyant qui lit le Coran est comme le cédrat… et l’hypocrite… »",
    lien: "https://dorar.net/hadith/sharh/10155",
    autres: " البخاري (5427)",
  },
  {
    sujet: "La parabole de la vie d’ici-bas",
    auteur: "صحيح الترمذي",
    numero: 2377,
    texteArabe:
      "« ما لي وللدنيا، ما أنا في الدنيا إلا كراكبٍ استظلَّ تحت شجرةٍ ثم راح وتركها »",
    texteFrancais:
      "« Que suis-je par rapport à ce bas monde ? Je suis comme un voyageur qui s’est reposé sous un arbre puis est parti. »",
    lien: "https://dorar.net/hadith/sharh/118093",
    autres: " ابن ماجه (4109)، وأحمد (3709).",
  },
];

// 8. البعث والرجوع إلى الله (Résurrection et retour)
const souratesAllahMisericordieuxResurection = [17, 19,19,19, 22, 32, 40, 43, ];
const versetsAllahMisericordieuxResurection = [98, 70,71,72, 6, 5, 68, 55, ];
const ahadithsAllahMisericordieuxResurection = [
  {
    sujet: "La résurrection et le retour à Allah (البعث والرجوع إلى الله)",
    auteur: "صحيح البخاري",
    numero: 6527,
    texteArabe: "تُحشَرونَ حُفاةً عُراةً غُرلًا",
    texteFrancais:
      "« Les gens seront rassemblés le Jour de la Résurrection pieds nus, nus et incirconcis. »",
    lien: "https://dorar.net/hadith/sharh/27938",
    autres: " مسلم (2859)، والنسائي (2084)",
  },
  {
    sujet: "La première chose reconstituée",
    auteur: "صحيح البخاري",
    numero: 4935,
    texteArabe:
      "« كلُّ ابنِ آدمَ يأكُلُهُ الترابُ إلا عجبَ الذَّنَبِ، منه خُلِقَ ومنه يُركَّبُ »",
    texteFrancais:
      "« Tout le corps du fils d’Adam est mangé par la terre sauf le coccyx, à partir duquel il sera recréé. »",
    lien: "https://dorar.net/hadith/sharh/35003",
    autres: " مسلم (2955)",
  },
  {
    sujet: "La sortie des tombes",
    auteur: "صحيح مسلم",
    numero: 2940,
    texteArabe: "« يُنزلُ اللهُ مطرًا فتنبتُ منه أجسادُ الناسِ »",
    texteFrancais:
      "« Allah fera descendre une pluie grâce à laquelle les corps des gens repousseront. »",
    lien: "https://dorar.net/hadith/sharh/22166",
    autres: " ن أفراد مسلم على البخاري",
  },
  {
    sujet: "Le rassemblement final",
    auteur: "صحيح مسلم",
    numero: 2790,
    texteArabe:
      "« يُحشرُ الناسُ على أرضٍ بيضاءَ عفراءَ كقرصةِ نقيٍّ ليس فيها معلمٌ لأحدٍ »",
    texteFrancais:
      "« Les gens seront rassemblés sur une terre blanche, sans aucun repère. »",
    lien: "https://dorar.net/hadith/sharh/10335",
    autres: " البخاري (6521)",
  },
  {
    sujet: "Le jugement après le retour",
    auteur: "صحيح مسلم",
    numero: 2864,
    texteArabe:
      "« تدنو الشمسُ يومَ القيامةِ من الخلقِ حتى تكونَ منهم كمقدارِ ميل… »",
    texteFrancais:
      "« Le soleil sera rapproché des créatures le Jour de la Résurrection… »",
    lien: "https://dorar.net/hadith/sharh/20687",
    autres: " الترمذي (2421)، وأحمد (23813)",
  },
  {
    sujet: "Chacun sera ressuscité selon son état",
    auteur: "صحيح مسلم",
    numero: 2878,
    texteArabe: "« يُبعثُ كلُّ عبدٍ على ما مات عليه »",
    texteFrancais:
      "« Chaque serviteur sera ressuscité dans l’état dans lequel il est mort. »",
    lien: "https://dorar.net/hadith/sharh/79578",
    autres: " أحمد (14722)",
  },
  {
    sujet: "Le passage vers la destination finale",
    auteur: "صحيح مسلم",
    numero: 2849,
    texteArabe: "« يُؤتى بالموتِ يومَ القيامةِ كأنه كبشٌ أملح… ثم يُذبحُ »",
    texteFrancais:
      "« La mort sera amenée sous forme d’un bélier… puis elle sera égorgée. »",
    lien: "https://dorar.net/hadith/sharh/69361",
    autres: "البخاري (6545)",
  },
];