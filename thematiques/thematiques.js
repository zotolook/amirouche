 
// 1- E S C L A V A G E

// Les versets de l'esclavage
const souratesEsclavage = [2, 2, 4, 4, 4, 4, 5, 8, 8, 8, 8, 8, 16, 17, 24, 24, 30, 33, 33, 33, 48, 48, 48, 58, 58, 59, 59, 59, 59]
const versetsEsclavage = [178, 221, 24, 25, 36, 92, 89, 1, 41, 69, 70, 71, 75, 72, 32, 33, 28, 26, 27, 50, 19, 20, 21, 3, 4, 5, 6, 7, 8]

// Ahadiths esclavage
let ahadithsEsclavage = {
  
};  
// Fin Esclavage

// 2- A L L A H   O M N I P O T E N T
const souratesAllahOmnipotent = [2, 2, 6, 6, 6, 6, 7, 9, 9, 40 ]
const versetsAllahOmnipotent = [ 181, 244, 13, 18, 103, 115, 187, 77, 79, 68]

// Fonction injecter les sourates selon le thème

const injecteVersets = function (sourates, versets) {
  
    tableau.innerHTML = "";
    
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