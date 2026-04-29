//- 1- Les Chrétiens et les juifs
const souratesInsultesJuifsChretiens = [1, 2,9,];
const versetsInsultesJuifsChretiens = [7, 18,29];
const ahadithsInsultesJuifsChretiens = [
  {
    sujet: "Les chrétiens et les juifs",
    auteur: "El Boukhari صحيح البخاري",
    numero: 1358,
    texteArabe:
      "كُلُّ مَوْلُودٍ يُولَدُ علَى الفِطْرَةِ، فأبَوَاهُ يُهَوِّدَانِهِ، أوْ يُنَصِّرَانِهِ، أوْ يُمَجِّسَانِهِ، كَمَثَلِ البَهِيمَةِ تُنْتَجُ البَهِيمَةَ هلْ تَرَى فِيهَا جَدْعَاءَ.",
    texteFrancais: "",
    lien: "https://dorar.net/hadith/sharh/11465",
    autres: "",
  },
  {
    sujet: "Les chrétiens et les juifs",
    auteur: "El Boukhari صحيح البخاري",
    numero: 3462,
    texteArabe: "إنَّ اليَهُودَ وَالنَّصَارَى لا يَصْبُغُونَ، فَخَالِفُوهُمْ.",
    texteFrancais: "",
    lien: "https://dorar.net/hadith/sharh/34253",
    autres: "",
  },
  {
    sujet: "Les chrétiens et les juifs",
    auteur: "El Boukhari صحيح البخاري",
    numero: 4475,
    texteArabe:
      "إذا قالَ الإمامُ: {غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ} [الفاتحة: 7] فَقُولوا آمِينَ، فمَن وافَقَ قَوْلُهُ قَوْلَ المَلائِكَةِ غُفِرَ له ما تَقَدَّمَ مِن ذَنْبِهِ",
    texteFrancais: "",
    lien: "https://dorar.net/hadith/sharh/11383",
    autres: "",
  },
];

//- 2- Les juifs
const souratesInsultesJuifs = [2, 5, 5, 7, 62];
const versetsInsultesJuifs = [65, 60, 64, 166, 5];
const ahadithsInsultesJuifs = [
  {
    sujet: "Les juifs",
    auteur: "El Boukhari صحيح البخاري",
    numero: 3330,
    texteArabe:
      " لَوْلَا بَنُو إِسْرَائِيلَ، لَمْ يَخْبُثِ الطَّعَامُ، وَلَمْ يَخْنَزِ اللَّحْمُ، وَلَوْلَا حَوَّاءُ لَمْ تَخُنْ أُنْثَى زَوْجَهَا الدَّهْرَ.",
    texteFrancais: "",
    lien: "https://dorar.net/hadith/sharh/22158",
    autres: "",
  },
];

// 3- Les mécréants
const souratesInsultesMecreants = [2, 7, 7,  10, 25, 31];
const versetsInsultesMecreants = [171, 176, 179,  43, 44, 19];
const ahadithsInsultesMecreants = [
  {
    sujet: "Se réclamer du tribalisme",
    auteur: "صحيح الجامع  الألباني",
    numero: 797,
    texteArabe: "من تعزَّى بعزاءِ الجاهليةِ فأَعِضُّوه و لا تكنُوه",
    texteFrancais:
      "Celui qui se réclame des solidarités de l’époque préislamique (jāhiliyya),dites-lui : ‘mords le sexe de ton père’, sans euphémisme.",
    lien: "https://dorar.net/hadith/sharh/146345",
    autres:
      "أحمد (21271)، والنسائي في ((السنن الكبرى)) (10812)، والطبراني (1/198) (534)",
  },
  {
    sujet: "Insultes envers les mécréants",
    auteur: "El Boukhari صحيح البخاري",
    numero: 797,
    texteArabe: "فيدعو للمؤمنينَ ويلعنُ الْكافرينَ",
    texteFrancais: "",
    lien: "https://dorar.net/hadith/sharh/36802",
    autres: "",
  },

  {
    sujet: "Les mécréants",
    auteur: "El Boukhari صحيح البخاري",
    numero: 5395,
    texteArabe:
      "إنَّ الكَافِرَ يَأْكُلُ في سَبْعَةِ أمْعَاءٍ فَقالَ: فأنَا أُومِنُ باللَّهِ ورَسولِهِ. ",
    texteFrancais: "",
    lien: "https://dorar.net/hadith/sharh/5157",
    autres: "",
  },
];

// 4- Les associateurs
const souratesInsultesAssociateurs = [9, 9, 39, 54, 54];
const versetsInsultesAssociateurs = [28, 95, 64, 7, 31];
const ahadithsInsultesAssociateurs = [];

// 5- Abu Lahab
const souratesInsultesAbuLahab = [111, 111, 111, 111, 111];
const versetsInsultesAbuLahab = [1, 2, 3, 4, 5];
const ahadithsInsultesAbuLahab = [];

// 6- Walid Ibn El Moughira
const souratesInsultesWalidMoghira = [68, 68];
const versetsInsultesWalidMoghira = [13, 16];
const ahadithsInsultesWalidMoghira = [
  {
    sujet: "Abu lahab",
    auteur: "El Boukhari صحيح البخاري",
    numero: 1394,
    texteArabe:
      "قالَ أبو لَهَبٍ عليه لَعْنَةُ اللَّهِ للنبيِّ صَلَّى اللهُ عليه وسلَّمَ: تَبًّا لكَ سَائِرَ اليَومِ فَنَزَلَتْ: {تَبَّتْ يَدَا أبِي لَهَبٍ وتَبَّ} [المسد: 1]",
    texteFrancais: "",
    lien: "https://dorar.net/hadith/sharh/4292",
    autres: "4770, 4801",
  },
];

// 7- Les femmes
const souratesInsultesFemmes = [4, 4, 5];
const versetsInsultesFemmes = [5, 43, 6];
const ahadithsInsultesFemmes = [
  {
    sujet: "Les femmes",
    auteur: "صحيح مسلم",
    numero: 510,
    texteArabe: " يَقطَعُ صَلاتَه الحِمارُ، والمَرأةُ، والكَلبُ الأسودُ ",
    texteFrancais:
      "La prière est interrompue par la femme, l’âne et le chien noir.",
    lien: "https://dorar.net/hadith/sharh/77949",
    autres: "أبو داود (702)، والترمذي (338) ",
  },
];

// 8. La haine
const souratesInsultesHaine = [
  "1. Méfiance envers les hypocrites / ennemis cachés",3,4,4,63,
  "2. Hostilité envers les croyants et opposition active",3,3,3,2,5,3,
  "3. La loyauté religieuse vs loyauté familiale",9,58,60,3,
  "4. Autorité religieuse déviée (culte des savants / religieux)",9,5,42,7,
  "5. Conflits, pouvoir et domination sous ordre divin", 59,41,7,6,
];
const versetsInsultesHaine = [
  "", 118, 81,142,4,
  "", 119, 120, 181,109,82,186,
  "", 23,22,1,28,
  "", 31,77,21,3,
  "", 5, 5,146,33,
  
];
const ahadithsInsultesHaine = [
  // 2. Hostilité / conflit avec certains groupes
  {
    sujet: "Hostilité / conflit avec certains groupes",
    auteur: "صحيح مسلم",
    numero: 2922,
    texteArabe:
      " « لَا تَقُومُ السَّاعَةُ حَتَّى يُقَاتِلَ الْمُسْلِمُونَ الْيَهُودَ… »",
    texteFrancais:
      "“L’Heure n’arrivera pas avant que les musulmans combattent les Juifs…”",
    lien: "https://dorar.net/hadith/sharh/61547",
    autres: "صحيح البخاري 2926",
  },
  {
    sujet: "Hostilité / conflit avec certains groupes",
    auteur: "صحيح مسلم",
    numero: 531,
    texteArabe:
      "  لَعَنَ اللَّهُ الْيَهُودَ وَالنَّصَارَى، اتَّخَذُوا قُبُورَ أَنْبِيَائِهِمْ مَسَاجِدَ » ",
    texteFrancais:
      "“Qu’Allah maudisse les Juifs et les chrétiens : ils ont pris les tombes de leurs prophètes comme lieux de prière.”",
    lien: "https://dorar.net/hadith/sharh/62788",
    autres: "صحيح البخاري 3453",
  },
  {
    sujet: "Hostilité / conflit avec certains groupes",
    auteur: "صحيح مسلم",
    numero: 679,
    texteArabe:
      " « اللَّهُمَّ الْعَنْ رِعْلًا وَذَكْوَانَ وَعُصَيَّةَ عَصَوُا اللَّهَ وَرَسُولَهُ »",
    texteFrancais:
      "“Qu’Allah maudisse les Juifs et les chrétiens : ils ont pris les tombes de leurs prophètes comme lieux de prière.”",
    lien: "https://dorar.net/hadith/sharh/25389",
    autres: " أحمد(16571)، والطبراني (4/ 216 ) ( 4174)، والبيهقي (3174)",
  },
  // 3. Loyauté religieuse vs autres appartenances
  {
    sujet: "Loyauté religieuse vs autres appartenances",
    auteur: "صحيح أبي داود",
    numero: 4031,
    texteArabe: " « مَنْ تَشَبَّهَ بِقَوْمٍ فَهُوَ مِنْهُمْ »",
    texteFrancais: "“Celui qui imite un peuple en fait partie.”",
    lien: "https://dorar.net/hadith/sharh/85602",
    autres: "أحمد (5114)",
  },

  // 4. Autorité religieuse déviée
  {
    sujet: "Autorité religieuse déviée",
    auteur: "صحيح مسلم",
    numero: 1718,
    texteArabe:
      "« مَنْ أَحْدَثَ فِي أَمْرِنَا هَذَا مَا لَيْسَ مِنْهُ فَهُوَ رَدٌّ »",
    texteFrancais:
      "“Quiconque introduit dans notre religion ce qui n’en fait pas partie, cela est rejeté.”",
    lien: "https://dorar.net/hadith/sharh/81042",
    autres: " البخاري (2697",
  },

  // 5. Conflits, pouvoir et domination
  {
    sujet: "5. Conflits, pouvoir et domination",
    auteur: "صحيح مسلم",
    numero: 22,
    texteArabe:
      "« أُمِرْتُ أَنْ أُقَاتِلَ النَّاسَ حَتَّى يَشْهَدُوا أَنْ لَا إِلَهَ إِلَّا اللَّهُ… »",
    texteFrancais:
      "“Il m’a été ordonné de combattre les gens jusqu’à ce qu’ils témoignent qu’il n’y a de divinité qu’Allah…”",
    lien: "https://dorar.net/hadith/sharh/3101",
    autres: " البخاري 25 ",
  },
];

// 9- Les musulmans
const souratesInsultesMusulmans = [];
const versetsInsultesMusulmans = [];
const ahadithsInsultesMusulmans = [
  // Obscéneité
  {
    sujet: "Celui qui se réclame de ses ancêtres...",
    auteur: " أحمد",
    numero: 21271,
    texteArabe:
      " إذا رأيتُم الرجلُ يتعزَّى بعزاءِ الجاهليةِ ، فأَعْضُوهُ بِهِنَّ و لا تُكَنُّوا",
    texteFrancais:
      "“Lorsque vous voyez un homme se réclamer de la jâhiliyya”, et se vante de ses pères et ancêtres de la jâhiliyya, “alors insultez-le et dites-lui : “mords le pénis de ton père”, de manière explicite. “Et ne faites pas d’euphémisme”,",
    lien: "https://dorar.net/hadith/sharh/146345",
    autres: "النسائي في ((السنن الكبرى)) (10812)، والطبراني (1/198) (534) ",
  },
  // Comparaison à l'âne.
  {
    sujet: "Comparaison à l'âne...",
    auteur: "El Boukhari صحيح البخاري",
    numero: 691,
    texteArabe:
      " أما يخشى الَّذي يرفَعُ رأسَهُ قبلَ الإمامِ راكعًا أو ساجدًا أن يحوِّلَ اللَّهُ رأسَهُ رأسَ حمارٍ أو صورتَهُ صورةَ حمارٍ",
    texteFrancais: "",
    lien: "https://dorar.net/hadith/sharh/72198",
    autres: "",
  },
];

// 10- Les bi et homosexuels
const souratesInsultesBiHomos = [7,7,26,26,27,27,29,29,];
const versetsInsultesBiHomos = [80,81,165,166,54,55,28,29,];
const ahadithsInsultesBiHomos = [
  {
    sujet: "T..z les homosexuels !",
    auteur: "صحيح أبي داود",
    numero: 4462,
    texteArabe: "من وجدتموه يعملُ عملَ قومِ لوطٍ فاقتلوا الفاعلَ والمفعولَ به ",
    texteFrancais:
      "“Celui que vous trouvez commettant l’acte du peuple de Loth, tuez l’auteur et celui sur qui l’acte est commis.”",
    lien: "https://dorar.net/hadith/sharh/120445",
    autres: "الترمذي (1456)، وابن ماجه (2561)، وأحمد (2732)",
  },

  {
    sujet: "Les homosexuels maudits!",
    auteur: "El Boukhari صحيح البخاري",
    numero: 5885,
    texteArabe:
      "لعن اللهُ المتشبهين بالنساءِ من الرجالِ والمتشبهاتِ من النساءِ بالرجالِ. ",
    texteFrancais: "",
    lien: "https://dorar.net/hadith/sharh/80461",
    autres: "",
  },
];