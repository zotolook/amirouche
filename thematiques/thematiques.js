
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