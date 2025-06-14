
// 1- E S C L A V A G E

// Les versets de l'esclavage
const souratesEsclavage = [2, 2, 4, 4, 4, 4, 5, 8, 8, 8, 8, 8, 16, 17, 24, 24, 30, 33, 33, 33, 48, 48, 48, 58, 58, 59, 59, 59, 59]
const versetsEsclavage = [178, 221, 24, 25, 36, 92, 89, 1, 41, 69, 70, 71, 75, 72, 32, 33, 28, 26, 27, 50, 19, 20, 21, 3, 4, 5, 6, 7, 8]

// Ahadiths esclavage
let ahadithsEsclavage = [
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 2565,
    texte: " الوَلَاءَ لِمَن أَعْتَقَ",
    lien: "https://dorar.net/hadith/sharh/12301",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 2403,
    texte:
      "أَعْتَقَ رَجُلٌ غُلَامًا له عن دُبُرٍ، فَقالَ النبيُّ صَلَّى اللهُ عليه وسلَّمَ: مَن يَشْتَرِيهِ مِنِّي؟، فَاشْتَرَاهُ نُعَيْمُ بنُ عبدِ اللَّهِ، فأخَذَ ثَمَنَهُ، فَدَفَعَهُ إلَيْهِ",
    lien: "https://dorar.net/hadith/sharh/15197",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 1054,
    texte:
      "أمَرَ النبيُّ صَلَّى اللهُ عليه وسلَّمَ بالعَتَاقَةِ في كُسُوفِ الشَّمْسِ.",
    lien: "https://dorar.net/hadith/sharh/13088",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 2522,
    texte:
      "مَن أعْتَقَ شِرْكًا له في عَبْدٍ، فَكانَ له مَالٌ يَبْلُغُ ثَمَنَ العَبْدِ قُوِّمَ العَبْدُ عليه قِيمَةَ عَدْلٍ، فأعْطَى شُرَكَاءَهُ حِصَصَهُمْ، وعَتَقَ عليه العَبْدُ، وإلَّا فقَدْ عَتَقَ منه ما عَتَقَ.",
    lien: "https://dorar.net/hadith/sharh/1779",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 2539,
    texte: " إمَّا المَالَ وإمَّا السَّبْيَ ",
    lien: "https://dorar.net/hadith/sharh/3449",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 2541,
    texte:
      " فَقَتَلَ مُقَاتِلَتَهُمْ، وسَبَى ذَرَارِيَّهُمْ، وأَصَابَ يَومَئذٍ جُوَيْرِيَةَ",
    lien: "https://dorar.net/hadith/sharh/7139",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 2542,
    texte:
      " في غَزْوَةِ بَنِي المُصْطَلِقِ، فأصَبْنَا سَبْيًا مِن سَبْيِ العَرَبِ، فَاشْتَهَيْنَا النِّسَاءَ، واشْتَدَّتْ عَلَيْنَا العُزْبَةُ، وأَحْبَبْنَا العَزْلَ، فأرَدْنَا أنْ نَعْزِلَ، وقُلْنَا: نَعْزِلُ ورَسولُ اللَّهِ صلَّى اللهُ عليه وسلَّمَ بيْنَ أظْهُرِنَا قَبْلَ أنْ نَسْأَلَهُ؟! فَسَأَلْنَاهُ عن ذلكَ، فَقَالَ: ما علَيْكُم أنْ لا تَفْعَلُوا، ما مِن نَسَمَةٍ كَائِنَةٍ إلى يَومِ القِيَامَةِ إلَّا وهي كَائِنَةٌ ",
    lien: "https://dorar.net/hadith/sharh/11750",
  },

  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 2545,
    texte:
      "  هُم إخوانُكم خَوَلُكم، جَعَلَهم اللهُ تحت أيْديكم، فمَن كان أخُوه تحت يَدِه فلْيُطعِمْه ممَّا يَأكُلُ، ويُلبِسْه ممَّا يَلبَسُ، ولا تُكلِّفوهم ما يَغلِبُهم، فإنْ كَلَّفتُموهم فأعينُوهم، ومَن لم يُلائِمْكم منهم فبِيعوهم، ولا تُعذِّبوا خَلْقَ اللهِ.",
    lien: "https://dorar.net/hadith/sharh/89125",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 2547,
    texte:
      "أَيُّما رَجُلٍ كانَتْ له جارِيَةٌ، فأدَّبَها فأحْسَنَ تَأْدِيبَها، وأَعْتَقَها، وتَزَوَّجَها فَلَهُ أجْرانِ، وأَيُّما عَبْدٍ أدَّى حَقَّ اللَّهِ وحَقَّ مَوالِيهِ فَلَهُ أجْرانِ. ",
    lien: "https://dorar.net/hadith/sharh/7285",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 2548,
    texte:
      "لِلْعَبْدِ المَمْلُوكِ الصَّالِحِ أجْرانِ. والذي نَفْسِي بيَدِهِ، لَوْلا الجِهادُ في سَبيلِ اللَّهِ، والحَجُّ، وبِرُّ أُمِّي؛ لَأَحْبَبْتُ أنْ أمُوتَ وأنا مَمْلُوكٌ. ",
    lien: "https://dorar.net/hadith/sharh/118993",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 2549,
    texte:
      " نِعْمَ ما لأحَدِهِمْ يُحْسِنُ عِبادَةَ رَبِّهِ ويَنْصَحُ لِسَيِّدِهِ.",
    lien: "https://dorar.net/hadith/sharh/4819",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 2552,
    texte: "لا يقولَنَّ أحدُكم عبدي وأمتي ولكن ليقُلْ فتاي وفتاتي ",
    lien: "https://dorar.net/hadith/sharh/110854",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 2557,
    texte:
      "إذا أتَى أحَدَكُمْ خادِمُهُ بطَعامِهِ، فإنْ لَمْ يُجْلِسْهُ معهُ، فَليُناوِلْهُ لُقْمَةً أوْ لُقْمَتَيْنِ، أوْ أُكْلَةً أوْ أُكْلَتَيْنِ؛ فإنَّه ولِيَ عِلاجَهُ.",
    lien: "https://dorar.net/hadith/sharh/33060",
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 2592,
    texte: "أَمَا إنَّكِ لو أَعْطَيْتِهَا أَخْوَالَكِ كانَ أَعْظَمَ لأجْرِكِ.",
    lien: "https://dorar.net/hadith/sharh/16247",
    autres: 2594,
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 3754,
    texte:
      "كانَ عُمَرُ يقولُ: أبو بَكْرٍ سَيِّدُنَا، وأَعْتَقَ سَيِّدَنَا. يَعْنِي بلَالًا.",
    lien: "https://dorar.net/hadith/sharh/68882",
    autres: 3755,
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 3804,
    texte:
      "فإنِّي أحْكُمُ فيهم أنْ تُقْتَلَ مُقَاتِلَتُهُمْ وتُسْبَى ذَرَارِيُّهُمْ، قالَ: حَكَمْتَ بحُكْمِ اللَّهِ ",
    lien: "https://dorar.net/hadith/sharh/7125",
    autres: 4122,
  },
  {
    auteur: "El Boukhari صحيح البخاري",
    numero: 6716,
    texte:" مَن يَشْتَرِيهِ مِنِّي؟ فاشْتَراهُ نُعَيْمُ بنُ النَّحَّامِ بثَمانِ مِائَةِ دِرْهَمٍ.",
    lien: "https://dorar.net/hadith/sharh/15197",
  },
];  
// Fin Esclavage

// 2- A L L A H   O M N I P O T E N T
const souratesAllahOmnipotent = [2, 2, 6, 6, 6, 6, 7, 9, 9, 40 ]
const versetsAllahOmnipotent = [ 181, 244, 13, 18, 103, 115, 187, 77, 79, 68]
let pTitreThematique = document.createElement("p")
pTitreThematique.setAttribute('class', 'pTitreThematique')

// Fonction injecter les sourates selon le thème

function injecteVersets (titreThematique, sourates, versets) {
  
  tableau.innerHTML = "";
  
   pTitreThematique.textContent = `Versets sur ${titreThematique}`;
  tableau.appendChild(pTitreThematique)
    
  for (let index = 0; index < sourates.length; index++) {
    numeroSourate = sourates[index]
    numeroVerset = `s${numeroSourate}v${versets[index]}`;
    
    sourate = coran[numeroSourate-1] 
     
    verset = sourate[numeroVerset]
  
      let divVersets = document.createElement("div");
      let pVerset = document.createElement("p");
      pVerset.setAttribute("class", "pVerset");
      divVersets.appendChild(pVerset);
  
    pVerset.innerHTML = `<span class="numeroVerset">  ${numeroVerset}. </span> </br> ${verset}`;
        tableau.appendChild(divVersets)
    }
}

// Fonction injecter les Ahadiths selon le thème

function injecteAhadiths(titreThematique, ahadiths) {
  tableau.innerHTML = "";

  pTitreThematique.textContent = `Ahadiths authentiques sur ${titreThematique}`;
  tableau.appendChild(pTitreThematique);
  ahadiths.forEach(hadith => {
    console.log(hadith);
    
  
    let divHadith = document.createElement('div')
    divHadith.setAttribute('class', 'carteHadith')
  divHadith.innerHTML = `
  <p> Auteur: ${hadith.auteur} </p>
  <p> Numéro du hadith: ${hadith.numero} </p>
  <p> Résumé du texte: ${hadith.texte} </p>
  <p> Plus d'infos: <a href= '${hadith.lien}'  target='_blank'> Dorar الدرر السنية</a> </p>
  `;
   tableau.appendChild(divHadith)
  })
}