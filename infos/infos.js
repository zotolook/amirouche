// Infos Coran
const coranInfos = function () {
    tableau.innerHTML = ""
    console.log("coran");
    let divInfosGenerales = document.createElement("div")
    divInfosGenerales.setAttribute('class', 'divSourate')

    divInfosGenerales.innerHTML = `
    <h2> Informations générales </h2>
    <h4> Le Coran </h4>
    <p> De l'arabe al-Qur'ān, « la lecture » ou, plus précisément, « la récitation déclamatoire. C'est le livre sacré des musulmans.»
        Il est composé des révélations transmises par Dieu (en arabe Allah) au prophète Mahomet par l'intermédiaire de l'archange Gabriel (en arabe Djabraïl).
    le Coran est divisé en 114 chapitres, appelés surates (de l'arabe sūrat), subdivisés en versets (ayat) et classés selon un ordre de longueur décroissante.</br>
    Parole divine, le Coran est à la fois l'acte constitutif de la religion islamique et sa référence absolue. Son texte a fourni, à côté du recueil des traditions
    liées à la vie du Prophète (la sunna), les bases de l'édifice islamique : la théologie et le droit musulmans, la langue et la littérature arabes, enfin le culte
    musulman, qui réserve une place centrale à la récitation de ses versets.

    
        </p>

    `;
    tableau.appendChild(divInfosGenerales)
}

// Infos Sourates
const sourateInfos = function () {
  tableau.innerHTML = "";
  sourates.forEach((sourate) => {
    let divSourate = document.createElement("div");
    divSourate.setAttribute("class", "divSourate");

    tableau.appendChild(divSourate);
    divSourate.innerHTML = `
  <p  > Sourate N°: &nbsp <span class =" couleurinfos">${sourate.numero} </span></p>
  <p> Nom en arabe: <span class =" couleurinfos"> &nbsp ${sourate.nomArabe} </span></p>
  <p> Nom en français: <span class =" couleurinfos"> &nbsp ${sourate.nom} </span></p>
  <p> Nom transcrit:  <span class =" couleurinfos">&nbsp ${sourate.transcrit} </span></p>
  <p> Type de sourate:  <span class =" couleurinfos"> &nbsp ${sourate.type} </span> </p>
  <p> Ordre de révélation: <span class =" couleurinfos"> &nbsp ${sourate.ordreRevelation} </span></p>
  <p> Nombre de versets: <span class =" couleurinfos"> &nbsp ${sourate.nombreVersets} </span></p>
  <p> Verset origine du nom: <span class =" couleurinfos"> &nbsp ${sourate.versetNom} </span> <button class =" btn btn-primary boutonOrigineNomSourate${sourate.numero}" onclick= 'lireVersetNom(${sourate.numero}, ${sourate.versetNom})'> Lire  </button> </p>
  `;
    lireVersetNom = function (s, v) {
      let boutonOrigineNomSourate = document.getElementsByClassName(
        `boutonOrigineNomSourate${s}`
      );

      verset = `s${s}v${v}`;
      sourate = coran[s - 1];

      let pOrigineNomSourate = document.createElement("p");
      pOrigineNomSourate.innerHTML = sourate[verset];
      tableau.children[s - 1].appendChild(pOrigineNomSourate);
    };
  });
};

// Infos Sourate


// Infos Ve