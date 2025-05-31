
// Les versets de l'esclavage

let versetsEsclavage = {
    1: 2,
    3: 14,
    10: 18,
    12: 45,
    15: 79
}  


let divVersetsEsclavage = document.getElementById('versetsEsclavage')

// Injecter les versets de l'esclavage

for (numeroSourate in versetsEsclavage) {
    numeroVerset = versetsEsclavage[numeroSourate];
    verset = `s${numeroSourate}v${numeroVerset}`;
    sourate = coran[numeroSourate - 1]
    
    let divVersetEsclavage = document.createElement('div')
    let pVerset = document.createElement('p')
    pVerset.setAttribute('class', 'pVerset')

    divVersetsEsclavage.appendChild(divVersetEsclavage)
    divVersetEsclavage.appendChild(pVerset);

    pVerset.innerHTML = `<span class="numeroVerset">  ${verset}. </span> </br> ${sourate[verset]}`
    

  console.log(verset, sourate[verset]);
}
// Fonction lire un verset


