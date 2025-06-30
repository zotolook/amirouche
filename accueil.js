let pMauvaisNumero = document.createElement("p")
  pMauvaisNumero.setAttribute('id', 'pMauvaisNumero');

let divListeSourates = document.createElement('div') 
divListeSourates.setAttribute('class', 'listeSourates') 
// Fonction liste sourates

const listeSourates = function () {
  tableau.appendChild(divListeSourates)
  sourates.forEach((sourate) => {
    let divSourate = document.createElement("div");
    divSourate.setAttribute('class', 'sourate')
    divSourate.setAttribute('onclick', `afficherSourate(${sourate.numero})`)
    let pNumeroSourate = document.createElement("p");
    pNumeroSourate.setAttribute('class', 'pNumeroSourate')
    pNumeroSourate.textContent = sourate.numero
    let pNomSourate = document.createElement("p");
    pNomSourate.textContent = sourate.nom
    let pNomArabeSourate = document.createElement("p");
    pNomArabeSourate.textContent = sourate.nomArabe

    divListeSourates.appendChild(divSourate)
    divSourate.appendChild(pNumeroSourate)
    divSourate.appendChild(pNomSourate);
    divSourate.appendChild(pNomArabeSourate);
  })
}
// Fin liste sourates

// Fonction Lire le coran complet
const lireCoran = function () {
  tableau.innerHTML = ''
  listeSourates()
};


// Fonction lire une sourate - Afficher une sourate
const lireSourate = function () {
  tableau.innerHTML = ` 
  <div class ='divFormulaireLireVerset'>
  <label> Sourate N°: </label>
  <input type="number" min="1" max="114" id="inputNumeroSourate1">
  <button type="button" class="btn btn-success" id="boutonLireSourate">Ok</button>
  </div>
  `;
  let boutonLireSourate = document.getElementById("boutonLireSourate");
  boutonLireSourate.disabled = true;
  let inputNumeroSourate = document.getElementById("inputNumeroSourate1");
  

  // Ecouter l'input si mauvais numéro
  inputNumeroSourate.addEventListener('input', () => {
    if (inputNumeroSourate.value > 114 || inputNumeroSourate.value == '') {
      boutonLireSourate.disabled = true; 
      pMauvaisNumero.textContent =
        " Ce numéro de sourate n'existe pas. Merci de corriger!";
      tableau.appendChild(pMauvaisNumero)
} else {
      boutonLireSourate.disabled = false;
      pMauvaisNumero.remove()
    }
  })
  // Fin écoute input

  // Ecouter le bouton OK lire sourate
  boutonLireSourate.addEventListener("click", () => {
    numeroSourate = inputNumeroSourate.value;
    afficherSourate(numeroSourate)
  });
}

// Fonction Lire coran par sourate - Afficher une sourate
const afficherSourate = function (numeroSourate) {
  tableau.innerHTML = ''
  let divSourate = document.createElement("div");
  divSourate.setAttribute("class", "divSourate");
 
    let sourate = coran[numeroSourate - 1];
    let nomSourate = sourates[numeroSourate - 1].nom;
    let nomSourateArabe = sourates[numeroSourate - 1].nomArabe;
    tableau.appendChild(divSourate);
  
    let titreSourateArabe = document.createElement("h4");
    let titreSourate = document.createElement("h5");

  titreSourate.setAttribute("class", "titreSourate");
  titreSourateArabe.setAttribute("class", "titreSourate");
  titreSourateArabe.textContent = nomSourateArabe; 
  titreSourate.textContent = `Sourate ${numeroSourate} : ${nomSourate}`;

  
  divSourate.appendChild(titreSourateArabe);
  divSourate.appendChild(titreSourate);
  
    let pBasmala = document.createElement("p");
    pBasmala.setAttribute("class", "basmala");
    pBasmala.textContent = basmala;
    if (numeroSourate != 9) {
      divSourate.appendChild(pBasmala);
    }
    numeroVerset = 1;
    for (const verset in sourate) {
      let pVerset = document.createElement("p");
      pVerset.innerHTML = `<span class='numeroVerset'> ${numeroVerset}.</span>  ${sourate[verset]}`;
      divSourate.appendChild(pVerset);

      numeroVerset++;
    }
}

// Fonction lire un verset
const lireVerset = function () {
  tableau.innerHTML = `
  <div class = 'divFormulaireLireVerset'>
  <label> Sourate N°: </label>
  <input type="number" min="1" max="114" id="inputNumeroSourate2">
  <label> Verset N°: </label>
  <input type="number" min="1" max="114" id="inputNumeroVerset">
  <button type="button" class="btn btn-success" id="boutonLireVerset">Ok</button>
  </div>
  `;
  let inputNumeroSourate2 = document.getElementById("inputNumeroSourate2");
  let inputNumeroVerset = document.getElementById("inputNumeroVerset");
  let boutonLireVerset = document.getElementById("boutonLireVerset");
  boutonLireVerset.disabled = true;
  let divSourate = document.createElement("div");
  divSourate.setAttribute("class", "divSourate");

  // Ecouter l'input si mauvais numéro sourate
  inputNumeroSourate2.addEventListener("input", () => {
    if (inputNumeroSourate2.value > 114 || inputNumeroSourate2.value == "") {
      boutonLireVerset.disabled = true;
      divSourate.innerHTML = "";
      pMauvaisNumero.textContent =
        " Ce numéro de sourate n'existe pas. Merci de corriger!";
      tableau.appendChild(pMauvaisNumero);
    } else {
      boutonLireVerset.disabled = false;
      pMauvaisNumero.remove();
    }
  });
  // Fin écoute input sourate
  
  // Ecouter l'input si mauvais numéro verset
  inputNumeroVerset.addEventListener("input", () => {
    console.log(Object.values(coran[inputNumeroSourate2.value-1]).length);
    if (
      inputNumeroVerset.value >
        Object.values(coran[inputNumeroSourate2.value-1]).length ||
        inputNumeroSourate2.value == ""
    ) {
      boutonLireVerset.disabled = true;
      divSourate.innerHTML = "";
      pMauvaisNumero.textContent = "Ce numéro de verset n'existe pas. Merci de corriger!"
      tableau.appendChild(pMauvaisNumero);
      
    } else {
      boutonLireVerset.disabled = false;
      pMauvaisNumero.remove();
    }
  });
  // Fin écoute input verset

  // Ecouter le bouton OK lire verset
  boutonLireVerset.addEventListener("click", () => {
    divSourate.innerHTML = "";
    numeroSourate = inputNumeroSourate2.value;
    nomSourate = sourates[numeroSourate - 1].nom;
    numeroVerset = inputNumeroVerset.value;
    sourate = coran[numeroSourate - 1];
    verset = `s${numeroSourate}v${numeroVerset}`;

    tableau.appendChild(divSourate);

    let titreSourate = document.createElement("h4");

    titreSourate.setAttribute("class", "titreSourate");
    titreSourate.textContent = `Sourate ${numeroSourate} : ${nomSourate}`;
    divSourate.appendChild(titreSourate);
    console.log(sourate);
    console.log(verset);
    console.log(sourate[verset]);
    
    

    let pVerset = document.createElement("p");
    pVerset.innerHTML = `<span class='numeroVerset'> ${verset}.</span>  ${sourate[verset]}`;
    divSourate.appendChild(pVerset);
   // inputNumeroSourate2.value = "";
    // inputNumeroVerset.value = "";
    boutonLireVerset.disabled = true;
  });
}

// Fonction Chercher un mot
const chercher = function () {
  tableau.innerHTML = "";
  let divChercher = document.createElement("div");
  let spanChercher = document.createElement("span");
  let inputChercher = document.createElement("input");
  let boutonChercher = document.createElement("button");

  divChercher.setAttribute("class", "input-group");
  spanChercher.setAttribute("class", "input-group-text");
  inputChercher.setAttribute("class", "form-control");
  inputChercher.setAttribute("type", "text");
  inputChercher.setAttribute("placeholder", "Tapez ici le mot à chercher");
  boutonChercher.setAttribute("class", "btn btn-info");

  spanChercher.textContent = "Chercher: ";
  boutonChercher.textContent = "Valider";

  tableau.appendChild(divChercher);
  divChercher.appendChild(spanChercher);
  divChercher.appendChild(inputChercher);
  divChercher.appendChild(boutonChercher);
  let pNombre = document.createElement("p");
  let divVersetsTrouves = document.createElement("div");
  // Clique sur le bouton valider/chercher
  
  boutonChercher.addEventListener("click", () => {
    divVersetsTrouves.innerHTML = "";
    motAChercher = inputChercher.value.toUpperCase();
    let nombretrouve = 0;
    let trouve;

    // Fonction chercher un mot //
    coran.forEach((sourate) => {
      for (const verset in sourate) {
        trouve = sourate[verset].toUpperCase();
        if (trouve.includes(motAChercher)) {
          let verseTrouve = `<span class="numeroVerset">${verset}. </span>"${trouve}`;
          verseTrouve = verseTrouve.replaceAll(
            motAChercher,
            `<span class="motTrouve"> ${motAChercher} </span>`
          );

          let pVerset = document.createElement("p");
          pVerset.innerHTML = verseTrouve;

          pNombre.setAttribute("class", "pNombre");
          divVersetsTrouves.appendChild(pVerset);
        }
        trouve = trouve.split(motAChercher).length - 1;
        nombretrouve = nombretrouve + trouve;
      }
      pNombre.innerHTML = `Le mot <span class='nombre'> ${motAChercher} </span> est répété <span class='nombre'> ${nombretrouve} </span> fois dans le coran.`;
      tableau.appendChild(pNombre);
      tableau.appendChild(divVersetsTrouves);
    });
    console.log("Nombre de fois ", motAChercher + ":", nombretrouve);
  }); // Fin chercher un mot
}; // Fin clique bouton chercher

// ChatGPT
/*
function compterChats(chaine) {
  const regex = /chat/g; // Utilise une expression régulière pour trouver toutes les occurrences de "chat"
  const resultats = chaine.match(regex); // Trouve toutes les occurrences
  return resultats ? resultats.length : 0; // Retourne le nombre d'occurrences ou 0 si aucune
}

// Exemple d'utilisation
const texte = "Le chat est sur le tapis. Un autre chat joue avec un jouet. J'aime les chats.";
const nombreDeChats = compterChats(texte);
console.log(nombreDeChats); // Affiche le nombre de fois que "chat" apparaît
*/