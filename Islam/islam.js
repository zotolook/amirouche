// 1. L'islam, vraie religon
const souratesIslamVrai = [
    "Unicité de la religion", 3, 3, 5, 30, 42, 86, 86, 6,
    "Le coran, révélation, vérité et guide",2,17,39,41,53,53,69,
    "Critique des Gens du Livre et des oppositions", 2,2,3,4,
    "Triomphe de l’islam sur les autres religions",   9, 24,48,61,61,
];
const versetsIslamVrai = [
    "", 19, 85, 3, 13, 30, 13, 14, 92,
    "",2,9,23,42,3,4,40,
    "", 146,159,99,46,
    "", 33, 55,28,8,9,
];
const ahadithsIslamVrai = [
  {
    sujet: "Le Coran comme guide",
    auteur: "صحيح البخاري",
    numero: 1452,
    texteArabe: " إنِّي تارِكٌ فيكم ثَقَلينِ أوَّلُهما كتابُ اللهِ .... ",
    texteFrancais:
      "“Le meilleur d’entre vous est celui qui apprend le Coran et l’enseigne.”",
    lien: "https://dorar.net/hadith/sharh/13180",
    autres: "أحمد (412)",
  },
  {
    sujet: "Le Coran comme guide",
    auteur: "صحيح أحمد ",
    numero: 16957,
    texteArabe:
      " لَيَبْلُغَنَّ هَذَا الأَمْرُ مَا بَلَغَ اللَّيْلُ وَالنَّهَارُ ... ",
    texteFrancais:
      "“Cette religion atteindra tout ce que couvrent la nuit et le jour.”",
    lien: "https://dorar.net/h/Bl2xt8xG",
    autres: "الطبراني (2/58) (1280)",
  },
  {
    sujet: "Le Coran comme guide",
    auteur: "صحيح مسلم ",
    numero: 867,
    texteArabe: " إِنَّ أَصْدَقَ الْحَدِيثِ كِتَابُ اللَّهِ ",
    texteFrancais: "“La parole la plus véridique est le Livre d’Allah.”",
    lien: "https://dorar.net/hadith/sharh/121864",
    autres: "ابن ماجه (45)، وأحمد (14984)",
  },
  {
    sujet: "Les gens du livre en enfer!",
    auteur: "صحيح مسلم",
    numero: 2408,
    texteArabe: " إنِّي تارِكٌ فيكم ثَقَلينِ أوَّلُهما كتابُ اللهِ .... ",
    texteFrancais:
      "“Je laisse parmi vous deux choses importantes :la première est le Livre d’Allah, dans lequel se trouvent la guidée et la lumière…”",
    lien: "https://dorar.net/hadith/sharh/65857",
    autres: "أحمد (19265)",
  },

  {
    sujet: "Les gens du livre en enfer!",
    auteur: "صحيح مسلم",
    numero: 153,
    texteArabe:
      " لا يَسمَعُ بي أحَدٌ مِن هذه الأُمَّةِ يَهوديٌّ ولا نَصرانيٌّ ... ",
    texteFrancais:
      " ... quiconque parmi cette communauté — juif ou chrétien — entend parler de moi puis meurt sans croire en ce avec quoi j’ai été envoyé sera parmi les gens du Feu.",
    lien: "https://dorar.net/hadith/sharh/24095",
    autres: "",
  },
  {
    sujet: "Les divisions des monothéismes...",
    auteur: "صحيح الترمذي",
    numero: 2641,
    texteArabe:
      " افترقتِ اليهودُ على إحدَى وسبعينَ فرقةً , وافترقتِ النصارَى على اثنتَينِ وسبعينَ فرقةً , وستفترقُ هذه الأمةُ على ثلاثٍ وسبعينَ فرقةً كلُّها في النارِ إلا واحدةً",
    texteFrancais:
      "“Les juifs se sont divisés en 71 groupes… et ma communauté se divisera en 73 groupes…” ",
    lien: "https://dorar.net/hadith/sharh/87648",
    autres: "الطبراني (14/53) (14646)، والحاكم (444)",
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
];

// 2. Les noms et attributs d'Allah
const souratesIslamAttributsAllah = [
  "Nul égal à Allah",
  42,
  42,
  42,
  112,
  112,
  112,
  112,
  "Les plus beaux Noms d’Allah",
  7,
  17,
  20,
  "Versets qui regroupent plusieurs attributs",
  59,
  59,
  59,
  2,
  "Attributs de connaissance et de science",
  6,
  49,
  "Attributs de miséricorde",
  39,
  7,
  "Attributs de puissance et domination",
  57,
  67,
  "Transcendance et unicité",
  42,

  "Les 99 noms d'Allah الأسماء الحسنى",
  "1. الرحمن — Le Tout-Miséricordieux ",
  "2. الرحيم — Le Très-Miséricordieux",
  "3. الملك — Le Roi, le Souverain",
  "4. القدوس — Le Très-Saint",
  "5. السلام — La Paix",
  "6. المؤمن — Le Garant de la foi",
  "7. المهيمن — Le Préservateur",
  "8. العزيز — Le Tout-Puissant",
  "9. الجبار — Le Contraignant",
  "10. المتكبر — Le Majestueux",
  "11. الخالق — Le Créateur",
  "12. البارئ — Le Producteur",
  "13. المصور — Le Formateur",
  "14. الغفار — Le Grand Pardonneur",
  "15. القهار — Le Dominateur suprême",
  "16. الوهاب — Le Donateur",
  "17. الرزاق — Le Pourvoyeur",
  "18. الفتاح — L’Ouvreur",
  "19. العليم — L’Omniscient",
  "20. القابض — Celui qui retient",
  "21. الباسط — Celui qui étend",
  "22. الخافض — Celui qui abaisse",
  "23. الرافع — Celui qui élève",
  "24. المعز — Celui qui honore",
  "25. المذل — Celui qui humilie",
  "26. السميع — L’Audient",
  "27. البصير — Le Clairvoyant",
  "28. الحكم — Le Juge",
  "29. العدل — Le Juste",
  "30. اللطيف — Le Subtil",
  "31. الخبير — Le Parfaitement Informé",
  "32. الحليم — Le Très Doux",
  "33. العظيم — L’Immense",
  "34. الغفور — Le Pardonneur",
  "35. الشكور — Le Très Reconnaissant",
  "36. العلي — Le Très Haut",
  "37. الكبير — Le Très Grand",
  "38. الحفيظ — Le Préservateur",
  "39. المقيت — Le Pourvoyeur",
  "40. الحسيب — Le Suffisant",
  "41. الجليل — Le Majestueux",
  "42. الكريم — Le Noble",
  "43. الرقيب — Le Vigilant",
  "44. المجيب — Celui qui exauce",
  "45. الواسع — L’Immense",
  "46. الحكيم — Le Sage",
  "47. الودود — Le Plein d’amour",
  "48. المجيد — Le Glorieux",
  "49. الباعث — Celui qui ressuscite",
  "50. الشهيد — Le Témoin",
  "51. الحق — La Vérité",
  "52. الوكيل — Le Garant",
  "53. القوي — Le Fort",
  "54. المتين — Le Très Fort",
  "55. الولي — Le Protecteur",
  "56. الحميد — Le Digne de louange",
  "57. المحصي — Celui qui recense",
  "58. المبدئ — Le Commenceur",
  "59. المعيد — Celui qui répète",
  "60. المحيي — Le Donneur de vie",
  "61. المميت — Celui qui fait mourir",
  "62. الحي — Le Vivant",
  "63. القيوم — L’Auto-subsistant",
  "64. الواجد — Le Trouveur",
  "65. الماجد — Le Noble",
  "66. الواحد — L’Unique",
  "67. الصمد — Le Parfait, le Seul vers qui on se tourne",
  "68. القادر — Le Capable",
  "69. المقتدر — Le Tout-Puissant",
  "70. المقدم — Celui qui avance",
  "71. المؤخر — Celui qui retarde",
  "72. الأول — Le Premier",
  "73. الآخر — Le Dernier",
  "74. الظاهر — L’Apparent",
  "75. الباطن — Le Caché",
  "76. الوالي — Le Gouverneur",
  "77. المتعالي — Le Très Élevé",
  "78. البر — Le Bienveillant",
  "79. التواب — Celui qui accepte le repentir",
  "80. المنتقم — Le Vengeur",
  "81. العفو — Celui qui efface les fautes",
  "82. الرؤوف — Le Compatissant",
  "83. مالك الملك — Le Maître de la royauté",
  "84. ذو الجلال والإكرام — Le Détenteur de majesté et de générosité",
  "85. المقسط — Le Juste équitable",
  "86. الجامع — Le Rassembleur",
  "87. الغني — Le Riche",
  "88. المغني — Celui qui enrichit",
  "89. المانع — Celui qui empêche",
  "90. الضار — Celui qui cause le mal (par sagesse)",
  "91. النافع — Celui qui apporte le bien",
  "92. النور — La Lumière",
  "93. الهادي — Le Guide",
  "94. البديع — Le Créateur sans modèle",
  "95. الباقي — L’Éternel",
  "96. الوارث — L’Héritier",
  "97. الرشيد — Le Bien-guidé",
  "98. الصبور — Le Très Patient",
  "99. الله — Allah (le Nom suprême)",
];
const versetsIslamAttributsAllah = [
  "",
  10,
  11,
  12,
  1,
  2,
  3,
  4,
  "",
  180,
  110,
  8,
  "",
  22,
  23,
  24,
  255,
  "",
  59,
  16,
  "",
  53,
  156,
  "",
  1,
  1,
  "",
  11,
  
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
];
const ahadithsIslamAttributsAllah = [
  {
    sujet: "Allah a 99 noms",
    auteur: "صحيح البخاري",
    numero: 6410,
    texteArabe:
      " لَّهِ تِسعةٌ وتِسعونَ اسمًا -مِائةٌ إلَّا واحِدًا- لا يَحفَظُها أحَدٌ إلَّا دَخَلَ الجَنَّةَ ",
    texteFrancais:
      "“Allah possède quatre-vingt-dix-neuf noms — cent moins un — quiconque les mémorise entrera au Paradis.”",
    lien: "https://dorar.net/hadith/sharh/132010",
    autres: "مسلم (2677)",
    },
    
];

// 3. Allah omnipotent / omnscient
const souratesIslamAllahOmni = [
    "1) La Science absolue d’Allah — العلم (Al-‘Ilm) ", 6, 6, 11, 13, 22, 33,
    "2) Sagesse et justice — الحكمة والعدل (Al-Ḥikma / Al-‘Adl) ", 3, 7, 22, 22, 22, 2,
    "3) La Puissance absolue — القدرة (Al-Qudra) ", 16, 36, 22, 40, 42, 32,
    "4) Volonté et gestion divine — الإرادة والتدبير (Al-Irāda / At-Tadbīr) ", 35, 32, 22,
    "5) Révélation et guidance — الوحي والبيان (Al-Waḥy) ", 6, 9, 11, 11, 42,
    "6)  Souveraineté et domination — الربوبية والسيادة (Ar-Rubūbiyya / Al-Mulk)", 6, 22, 35,
    "7) L’invisible et limites humaines — الغيب والحدود (Al-Ghayb)  ",17,11,6,
];
const versetsIslamAllahOmni = [
    "", 18, 103, 5, 9, 70, 54,
    "", 140, 5, 38, 39, 40, 181,
    "", 40, 82, 6, 68, 9, 5,
    "", 2, 5, 70,
    "", 115, 6, 2, 3, 17,
    "", 18, 6, 2,
    "",85,5,103,
];
let ahadithsIslamAllahOmni = [
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 4584,
    texte:
      "أَطِيعُوا اللَّهَ وَأَطِيعُوا الرَّسُولَ وَأُولِي الْأَمْرِ مِنْكُمْ",
    lien: "https://dorar.net/hadith/sharh/65277",
  },
  // https://dorar.net/hadith/sharh/24773
];

// 4. Obéir à Allah et à son prophète
const souratesIslamObeissance = [
  " Obéissance à Allah et au Messager",
  3,
  3,
  4,
  4,
  24,
  47,
  8,
  8,
  64,
  "Conséquences de l’obéissance et de la désobéissance",
  3,
  4,
  48,
  8,
  9,
  33,
  "Le rôle du Messager (transmettre, guider, non divin)",
  6,
  24,
  5,
  16,
  "Attitude des croyants face au jugement d’Allah et du Messager",
  24,
  33,
  2,
  24,
  "Respect et comportement envers le Prophète",
  49,
  49,
  33,33,
  49,
  "Le Prophète comme modèle à suivre",
  33,
  68,
  "Foi et engagement (croire + agir)",
  57,
  57,
  4,
  61,
  61,
  "Pratiques religieuses liées à l’obéissance",2,9,24,
];
const versetsIslamObeissance = [
  "",32,132,59,80,54,33,20,24,12,
  "",32,33,17,13,71,71,
  "",50,54,99,44,
  "",51,36,285,52,
    "",1,2,53,6,3,
  "",21,4,
  "",7,8,136,2,3,
  "",43,103,56
];
const ahadithsIslamObeissance = [
  // 1. Obéissance au Messager
  {
    sujet: "Obéissance au Messager",
    auteur: "صحيح البخاري",
    numero: 2957,
    texteArabe:
      "« مَنْ أَطَاعَنِي فَقَدْ أَطَاعَ اللَّهَ، وَمَنْ عَصَانِي فَقَدْ عَصَى اللَّهَ » ",
    texteFrancais:
      "« Celui qui m’obéit a obéi à Allah, et celui qui me désobéit a désobéi à Allah. »",
    lien: "https://dorar.net/hadith/sharh/21858",
    autres: "مسلم (1835)",
  },
  {
    sujet: "Obéissance au Messager",
    auteur: "صحيح البخاري",
    numero: 7280,
    texteArabe: "« ... مَن أطاعَني دخل الجنَّةَ ومَن عَصاني فقَد أبَى » ",
    texteFrancais:
      "« Toute ma communauté entrera au Paradis sauf celui qui refuse… »",
    lien: "https://dorar.net/hadith/sharh/67820",
    autres: "",
  },
  {
    sujet: "Obéissance au Messager",
    auteur: "El Boukhari صحيح البخاري",
    numero: 4584,
    texteArabe:
      "أَطِيعُوا اللَّهَ وَأَطِيعُوا الرَّسُولَ وَأُولِي الْأَمْرِ مِنْكُمْ ",
    texteFrancais:
      "« Obéissez à Allah, obéissez au Messager, et à ceux d’entre vous qui détiennent l’autorité (ou le commandement). »",
    lien: "https://dorar.net/hadith/sharh/65277",
    autres: "مسلم (1834)",
  },
  {
    sujet: "Obéissance au Messager",
    auteur: "Abou Daoud أبو داود",
    numero: 4607,
    texteArabe: "فعليكم بسنتي.  أوصيكم بتقوى اللهِ، والسَّمعِ والطاعةِ. ",
    texteFrancais:
      "« Attachez-vous à ma Sunna.Je vous recommande la crainte d’Allah, ainsi que l’écoute et l’obéissance. »",
    lien: "https://dorar.net/hadith/sharh/72777",
    autres: "أحمد (17185)",
  },
  //2.Conséquences (récompense / châtiment)
  {
    sujet: "Conséquences (récompense / châtiment)",
    auteur: "مالك بن أنس (الموطأ)",
    numero: "(2/899)",
    texteArabe: "« ... مَن أطاعَني دخل الجنَّةَ ومَن عَصاني فقَد أبَى » ",
    texteFrancais:
      "« Je vous ai laissé deux choses… le Livre d’Allah et ma Sunna. »",
    lien: "https://dorar.net/hadith/sharh/115269",
    autres: "",
  },
  // 3. Rôle du Messager
  {
    sujet: "Rôle du Messager",
    auteur: " الألباني صحيح الجامع ",
    numero: 2833,
    texteArabe: " بُعِثتُ لأُتَمِّمَ صالِحَ الأخْلاقِ ",
    texteFrancais:
      "« J’ai reçu le Coran et quelque chose de semblable avec lui. »",
    lien: "https://dorar.net/hadith/sharh/113995",
    autres: "أحمد (8939)",
  },

  // 4. Attitude des croyants (soumission)
  {
    sujet: "Aimer le prophète plus que ses parents et ses enfants",
    auteur: " صحيح البخاري",
    numero: 15,
    texteArabe:
      " « لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى أَكُونَ أَحَبَّ إِلَيْهِ مِنْ وَالِدِهِ وَوَلَدِهِ وَالنَّاسِ أَجْمَعِينَ »",
    texteFrancais:
      "« Aucun de vous ne croit vraiment jusqu’à ce que je sois plus aimé… »",
    lien: "https://dorar.net/hadith/sharh/",
    autres: " مسلم (44) أحمد (12814)",
  },
  {
    sujet: "Aimer le prophète plus que soi-même",
    auteur: "El Boukhari صحيح البخاري",
    numero: 6632,
    texteArabe:
      "والَّذي نَفْسِي بيَدِهِ، حتَّى أكُونَ أحَبَّ إلَيْكَ مِن نَفْسِكَ. الآنَ يا عُمَرُ.  ",
    texteFrancais:
      "« Par Celui qui détient mon âme en Sa main, (ta foi ne sera complète) que lorsque je serai plus aimé pour toi que ta propre personne. »",
    lien: "https://dorar.net/hadith/sharh/13097",
    autres: "أحمد (22503)",
  },
  // 5. Le Prophète comme modèle
  {
    sujet: "Le Prophète comme modèle",
    auteur: " الألباني صحيح الجامع",
    numero: 4811,
    texteArabe: " ... كان خُلُقُه القُرآنَ.",
    texteFrancais: "« Son comportement était le Coran. »",
    lien: "https://dorar.net/hadith/sharh/135240",
    autres: "  أحمد (25302)",
  },
  // 6. Pratiques religieuses
  {
    sujet: "Pratiques religieuses",
    auteur: " صحيح البخاري",
    numero: 818,
    texteArabe: "« صَلُّوا كَمَا رَأَيْتُمُونِي أُصَلِّي »",
    texteFrancais: "« Priez comme vous m’avez vu prier. »",
    lien: "https://dorar.net/hadith/sharh/12052",
    autres: "  أحمد (20539)",
  },
  {
    sujet: "Pratiques religieuses",
    auteur: " صحيح مسلم",
    numero: 1297,
    texteArabe: "خُذوا ‌عني ‌مناسِكَكم، لعلِي لا أراكم بعد عامي هذا",
    texteFrancais: "« Prenez de moi vos rites. »",
    lien: "https://dorar.net/hadith/sharh/87479",
    autres: "  أحمد (15041)",
  },
];

// 5. Allah le très miséricordieux
const souratesIslamAllahMisericordieux = [];
const versetsIslamAllahMisericordieux = [];
const ahadithsIslamAllahMisericordieux = [
  {
    sujet: "Allah est plus mséricordieux qu'une maman",
    auteur: "صحيح البخاري",
    numero: 5999,
    texteArabe: "اللهُ أرحمُ بعبادِه من المرأةِ بولدِها ",
    texteFrancais:
      "“Allah est plus miséricordieux envers Ses serviteurs que cette mère envers son enfant.”",
    lien: "https://dorar.net/hadith/sharh/85969",
    autres: "مسلم (2754)",
  },
  {
    sujet: "Allah le juste !",
    auteur: "صحيح مسلم",
    numero: 2577,
    texteArabe: " إِنَّي حرمتُ الظلمَ على نفسي ",
    texteFrancais:
      "“Ô Mes serviteurs, Je Me suis interdit l’injustice et Je l’ai interdite entre vous, ne soyez donc pas injustes.”",
    lien: "https://dorar.net/hadith/sharh/16719",
    autres: "الألباني صحيح الجامع 4345 ",
  },
];

// 6. La volonté d'Allah
const souratesIslamVolonteAllah = [
  // 1. La Volonté d’Allah (القدر / المشيئة)
  "1. La volonté d’Allah (القدر / المشيئة)",2,3,3,3,3,4,6,6,6,6,10,11,14,16,16,22,35,42,76,76,81,5,24,28,39,
"2. Guidance et égarement (الهداية والضلال)", 2,4,6,6,7,13,14,16,16,16,16,18,25,28,35,43,45,47,63,6,17,29,20,
  "3. Les Cœurs scellés / refus de croire", 2, 2, 2, 2, 2, 6, 6, 7, 9, 9, 10, 16, 17, 18, 63,83,57,61,2,
"4. La nature du message et tests de foi", 2,2,3,6,7,16,16,10,16,21,42,
  "5. La limite du rôle du Prophète (محمد ﷺ)", 2, 10, 16, 28, 35,67,10,11,
  "6. Le pouvoir absolu d’Allah sur tout", 3, 3, 3, 6, 6, 6, 4,

];
const versetsIslamVolonteAllah = [
  "",284,26,27,47,129,48,41,111,112,149,99,118,27,9,93,16,8,8,30,31,29,17,21,68,62,
  "", 26, 88, 39, 125, 186, 27, 4, 36, 37, 107, 108, 17, 31, 56, 8, 36, 23, 23, 6,88,97,69,50,
  "", 6, 7, 8, 9, 10, 25, 110, 100, 87, 127, 74, 108, 46, 57, 3,14,16,5,74,
  "", 142, 213, 129, 35, 100, 39, 36, 74,44,107,48,
  "", 272, 99, 37, 56, 8,2,19,7,
  "", 26, 27, 47, 112, 123, 137, 52,
  "", 

];
const ahadithsIslamVolonteAllah = [
  {
    sujet: "📖 La volonté d’Allah (القدر / المشيئة)",
    auteur: "الترمذي",
    numero: 2516,
    texteArabe:
      "وَاعْلَمْ أَنَّ مَا أَصَابَكَ لَمْ يَكُنْ لِيُخْطِئَكَ، وَمَا أَخْطَأَكَ لَمْ يَكُنْ لِيُصِيبَكَ",
    texteFrancais:
      "“Sache que ce qui t’a atteint n’aurait pas pu te manquer, et ce qui t’a manqué n’aurait pas pu t’atteindre.”",
    lien: "https://dorar.net/hadith/sharh/111446",
    autres: "أحمد (2803)",
  },
  {
    sujet: "🧭 Guidance et égarement (الهداية والضلال)",
    auteur: "صحيح البخاري",
    numero: 7312,
    texteArabe: "« مَنْ يُرِدِ اللَّهُ بِهِ خَيْرًا يُفَقِّهْهُ فِي الدِّينِ »",
    texteFrancais:
      "“Lorsque Allah veut du bien à quelqu’un, Il lui accorde la compréhension de la religion.”",
    lien: "https://dorar.net/hadith/sharh/162",
    autres: "مسلم (1037)",
  },
  {
    sujet: "🌌  Pouvoir absolu d’Allah",
    auteur: " أحمد",
    numero: 16850,
    texteArabe:
      "اللَّهمَّ لا مانعَ لِما أَعطَيْتَ، ولا مُعْطيَ لِما منَعْتَ، ولا يَنفَعُ ذا الجَدِّ منكَ الجَدُّ، مَن يُرِدِ اللهُ به الخَيرَ يُفَقِّهْهُ في الدِّينِ.",
    texteFrancais:
      "“Ô Allah, nul ne peut retenir ce que Tu donnes, et nul ne peut donner ce que Tu retiens.”",
    lien: "https://dorar.net/hadith/sharh/144822",
    autres: "الطحاوي في ((شرح مشكل الآثار)) (1684)، والطبراني (19/339) (782)،",
  },
];
// 7. La résurection
const souratesIslamResurection = [
  "🌍 1. Signes cosmiques et bouleversements de l’univers", 77, 77, 77, 78, 78, 84, 84, 84, 84, 84, 89, 101,
  "🌪️ 2. Tremblements, fracas et événements apocalyptiques", 79, 79, 80, 99, 99, 101, 101, 101, 
  "🔔 3. Résurrection et rassemblement des humains", 78, 79, 79, 84, 99, 
  "⚖️ 4. Le Jour du Jugement (Jour de la Décision / Rétribution)", 77, 77, 78, 82, 82, 82, 79, 79, 79, 79, 79,
  "😨 5. Réactions humaines : peur, doute, regret", 79, 79, 79, 79, 79, 80, 80, 80, 80, 89, 99,  
  "⚖️ 6. Jugement individuel et responsabilité personnelle", 99, 99, 82, 80, 
  "😊😱 7. Sort final : paradis vs enfer", 80, 80, 101, 101, 89, 80, 80, 80, 79, 79, 79, 78, 101, 101, 101, 101, 
  "🧠 8. Rappel et sens spirituel", 35, 79,79, 84, 
];
const versetsIslamResurection = [
  "", 8, 9, 10, 19, 20, 1, 2, 3, 4, 5, 21, 5, 
  "", 6, 7, 33, 1, 2, 1, 2, 3, 
  "", 18, 13, 14, 4, 6, 
  "", 13, 14, 17, 17, 18, 19, 42, 43, 44, 45, 46,
  "", 8, 9, 10, 11, 12, 34, 35, 36, 37, 24, 3, 
  "", 7, 8, 19, 37, 
  "", 38,39, 6,7, 27, 40,41,42, 37,38,39, 21, 8,9,10,11, 
  "", 9,44,45, 6, 
];
const ahadithsIslamResurection = [
  {
    sujet: "📌 Signes sociaux et moraux précédant la fin des temps",
    auteur: "صحيح البخاري",
    numero: 5231,
    texteArabe:
      "مِن أشراطِ السَّاعةِ أن يُرفَعَ العِلمُ، ويَكثُرَ الجَهلُ، ويَكثُرَ الزِّنا، ويَكثُرَ شُربُ الخَمرِ، ويَقِلَّ الرِّجالُ، ويَكثُرَ النِّساءُ حتَّى يَكونَ لخَمسينَ امرَأةً القَيِّمُ الواحِدُ.",
    texteFrancais:
      "“Parmi les signes de l’Heure : la disparition du savoir, l’apparition de l’ignorance, la consommation d’alcool, la propagation de la fornication, la diminution du nombre d’hommes et l’augmentation du nombre de femmes, au point qu’un seul homme sera responsable de cinquante femmes.”",
    lien: "https://dorar.net/hadith/sharh/73376",
    autres: "مسلم (2671)",
  },
  {
    sujet: "📌 Description des délices du Paradis au Jour de la Résurrection",
    auteur: "صحيح البخاري",
    numero: 6520,
    texteArabe:
      "تَكونُ الأرضُ يَومَ القيامةِ خُبزةً واحِدةً يَتَكَفَّؤُها الجَبَّارُ بيَدِه كما يَكفَأُ أحَدُكُم خُبزَتَه في السَّفَرِ، نُزُلًا لأهلِ الجَنَّةِ...",
    texteFrancais:
      "“La terre, au Jour de la Résurrection, sera un seul pain que le Tout-Puissant tournera de Sa main, comme l’un de vous tourne son pain en voyage, en guise d’hospitalité pour les gens du Paradis.”",
    lien: "https://dorar.net/hadith/sharh/10332",
    autres: "مسلم (2792)",
  },
  {
    sujet: "📌 Intensité de l’épreuve au Jour du Jugement",
    auteur: "صحيح البخاري",
    numero: 6532,
    texteArabe:
      " يَعْرَقُ الناسُ يومَ القيامةِ حتى يَذْهَبَ عَرَقُهُم في الأرضِ سبعينَ ذِرَاعًا ، ويُلْجِمُهُم حتى يَبْلُغَ آذانَهم",
    texteFrancais:
      "“Les gens transpireront au Jour de la Résurrection au point que leur sueur s’enfoncera dans la terre sur une distance de soixante-dix coudées, et elle les submergera jusqu’à atteindre leurs oreilles.”",
    lien: "https://dorar.net/hadith/sharh/10339",
    autres: "مسلم (2863)",
  },
  {
    sujet: "📌 Secousse et sortie des hypocrites et mécréants à Médine",
    auteur: "صحيح البخاري",
    numero: 1881,
    texteArabe:
      " ... فيَنزِلُ بالسَّبخةِ، فتَرجُفُ المَدينةُ ثَلاثَ رَجَفاتٍ، يَخرُجُ إليه مِنها كُلُّ كافِرٍ ومُنافِقٍ",
    texteFrancais:
      "... “Il descendra dans une zone marécageuse, et Médine sera secouée trois fois. Alors en sortiront vers lui tous les mécréants et les hypocrites.”",
    lien: "https://dorar.net/hadith/sharh/6090",
    autres: "مسلم (2943)",
  },
  {
    sujet: "📌 Le signe de la fumée (ad-Dukhān)",
    auteur: "صحيح البخاري",
    numero: 4774,
    texteArabe: "... آيةَ الدُّخانِ تَجيءُ فتَأخُذُ بأنفاسِ الكُفَّارِ...",
    texteFrancais:
      "“La fumée apparaîtra. Elle saisira les souffles des mécréants et les enveloppera, au point que chacun d’eux aura la sensation d’être comme enfiévré ou ivre.Quant aux croyants, elle ne leur fera que l’effet d’un simple rhume.”",
    lien: "https://dorar.net/hadith/sharh/12583",
    autres: "مسلم (2798)",
  },
  {
    sujet: "📌 Apparition d’un groupe extrémiste et leur rejet de la religion",
    auteur: "صحيح البخاري",
    numero: 6930,
    texteArabe:
      "...  يخرُجُ في آخرِ الزَّمانِ قومٌ أحداثُ الأسنانِ سُفَهاءُ الأحلامِ",
    texteFrancais:
      "“À la fin des temps apparaîtra un groupe de jeunes gens, aux esprits légers et immatures. Ils parleront avec les meilleures paroles des gens. Ils réciteront le Coran, mais il ne dépassera pas leurs gorges.Ils sortiront de la religion comme la flèche traverse la proie.Quiconque les rencontre, qu’il les combatte, car leur combat est une récompense auprès d’Allah pour celui qui les combat.”",
    lien: "https://dorar.net/hadith/sharh/391",
    autres: "مسلم (1066)",
  },
  {
    sujet:
      "📌 L’ouverture de la barrière de Gog et Magog et l’épreuve générale",
    auteur: "صحيح البخاري",
    numero: 3346,
    texteArabe: "... ويلٌ للعَرَبِ مِن شَرٍّ قدِ اقتَرَبَ!  ",
    texteFrancais:
      "“Le Prophète ﷺ entra auprès d’elle effrayé, disant : ‘Il n’y a de divinité qu’Allah ! Malheur aux Arabes à cause d’un mal qui s’est rapproché ! Aujourd’hui une ouverture a été faite dans la barrière de Gog et Magog de cette taille.’Et il forma un cercle avec son pouce et l’index.Zaynab bint Jahsh demanda : ‘Ô Messager d’Allah, périrons-nous alors qu’il y a parmi nous des pieux ?’Il répondit : ‘Oui, lorsque la corruption sera répandue.’”",
    lien: "https://dorar.net/hadith/sharh/16178",
    autres: "مسلم (2880)",
  },
  {
    sujet:
      "📌 L’ouverture de la barrière de Gog et Magog et l’épreuve générale",
    auteur: "صحيح البخاري",
    numero: 3346,
    texteArabe: "... ويلٌ للعَرَبِ مِن شَرٍّ قدِ اقتَرَبَ!  ",
    texteFrancais:
      "“Le Prophète ﷺ entra auprès d’elle effrayé, disant : ‘Il n’y a de divinité qu’Allah ! Malheur aux Arabes à cause d’un mal qui s’est rapproché ! Aujourd’hui une ouverture a été faite dans la barrière de Gog et Magog de cette taille.’Et il forma un cercle avec son pouce et l’index.Zaynab bint Jahsh demanda : ‘Ô Messager d’Allah, périrons-nous alors qu’il y a parmi nous des pieux ?’Il répondit : ‘Oui, lorsque la corruption sera répandue.’”",
    lien: "https://dorar.net/hadith/sharh/16178",
    autres: "مسلم (2880)",
  },
  {
    sujet:
      "📌 L’ouverture de la barrière de Gog et Magog et l’épreuve générale",
    auteur: "صحيح البخاري",
    numero: 3517,
    texteArabe:
      ".لا تقومُ الساعةُ حتى يخرجَ رجلٌ من قحطانَ يسوقُ الناسَ بعصاهُ  ",
    texteFrancais:
      " “L’Heure ne viendra pas avant qu’un homme de Qahtan ne sorte, conduisant les gens avec son bâton.”",
    lien: "https://dorar.net/hadith/sharh/21337",
    autres: "مسلم (2910)",
  },
  {
    sujet:
      "📌 Signes de la fin des temps : déclin du savoir et corruption morale",
    auteur: "صحيح البخاري",
    numero: 5231,
    texteArabe:
      ". مِن أشراطِ السَّاعةِ أن يُرفَعَ العِلمُ، ويَثبُتَ الجَهلُ، ويُشرَبَ الخَمرُ، ويَظهَرَ الزِّنا ",
    texteFrancais:
      " “Parmi les signes de l’Heure : que le savoir sera enlevé, que l’ignorance s’installera, que le vin sera consommé et que la fornication apparaîtra.”",
    lien: "https://dorar.net/hadith/sharh/24843",
    autres: "مسلم (2671)",
  },
  {
    sujet: "📌 L’épreuve de l’Antéchrist (Dajjâl) et la réponse des croyants",
    auteur: "صحيح البخاري",
    numero: 4581,
    texteArabe:
      "فيَقولُ: أنا رَبُّكُم، فيَقولونَ: لا نُشرِكُ باللهِ شيئًا، مَرَّتَينِ أو ثَلاثًا... ",
    texteFrancais:
      " “Il dira : ‘Je suis votre Seigneur.’Et ils répondront : ‘Nous ne donnons aucun associé à Allah’, en répétant cela deux ou trois fois.”",
    lien: "https://dorar.net/hadith/sharh/7419",
    autres: "مسلم (183)",
  },
  {
    sujet: "🌍 1. Rassemblement des gens",
    auteur: "صحيح البخاري",
    numero: 6527,
    texteArabe:
      "تُحشَرونَ حُفاةً عُراةً غُرلًا، قالت عائِشةُ: فقُلتُ: يا رَسولَ اللهِ، الرِّجالُ والنِّساءُ يَنظُرُ بَعضُهم إلى بَعضٍ! فقال: الأمرُ أشَدُّ مِن أن يُهمَّهم ذاكِ.",
    texteFrancais:
      " “Les gens seront rassemblés au Jour de la Résurrection pieds nus, nus et non circoncis.”",
    lien: "https://dorar.net/hadith/sharh/727938",
    autres: "مسلم (2859)",
  },
  {
    sujet: "⚖️ 3. Jugement individuel",
    auteur: "صحيح البخاري",
    numero: 6539,
    texteArabe:
      "ما منكم مِن رجُلٍ إلَّا سيُكلِّمُه اللهُ يومَ القيامةِ ليس بَيْنَه وبَيْنَه تَرْجُمانٌ",
    texteFrancais:
      "“Le serviteur rencontrera son Seigneur et Il lui parlera sans intermédiaire.”",
    lien: "https://dorar.net/h/T9KpX5WY?osoul=1",
    autres: "مسلم (1016)",
  },
  {
    sujet: "🌉 Le pont (Sirat)",
    auteur: "صحيح أحمد",
    numero: 11081,
    texteArabe: "« ثُمَّ يُضْرَبُ الصِّرَاطُ عَلَى جَهَنَّمَ »",
    texteFrancais: " “Ensuite, le pont sera placé au-dessus de l’Enfer.”",
    lien: "https://dorar.net/hadith/sharh/137478",
    autres: "ابن ماجه (4280)",
  },
  {
    sujet: "📌 l'homme corpulent !",
    auteur: "صحيح البخاري",
    numero: 4729,
    texteArabe:
      "إنَّه لَيَأتي الرَّجُلُ العَظيمُ السَّمينُ يَومَ القيامةِ، لا يَزِنُ عِندَ اللهِ جَناحَ بَعوضةٍ، اقرَؤوا {فلا نُقيمُ لهم يَومَ القيامةِ وزنًا}.",
    texteFrancais:
      " “Un homme grand et corpulent viendra au Jour de la Résurrection, mais il ne pèsera pas auprès d’Allah le poids de l’aile d’un moustique.”",
    lien: "https://dorar.net/hadith/sharh/16389",
    autres: "مسلم (2785)",
  },
];
