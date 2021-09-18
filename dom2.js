/*=================================================
  Ajout et suppression des éléments de la page html
  ================================================= */
 
/*
En plus de pouvoir récupérer et modifier ce qui existe déjà dans la page html, on peut aussi ajouter du contenu.
L'objet document possède une méthode qui permet de créer une balise.
*/

const newElement = document.createElement("div");
newElement.innerHTML = "Je suis un élément créé en javascript !";
console.log(newElement);
/*
Maintenant que cet élément est créé, il faut l'ajouter à la page.
Certaines méthodes permettent d'ajouter un élément aux enfants d'un élément.
*/
// Ajout à la fin (juste avant la fermeture de la balise de l'élément parent)
document.body.appendChild(newElement);

// Autre exemple
// Création d'un p
const newP = document.createElement("p");

// Création et ajout d'un strong à l'intérieur du p
const strong = document.createElement("strong");
strong.innerHTML = "B";
newP.appendChild(strong);

// Création et ajout d'un span à l'intérieur du p (à la fin)
const span = document.createElement("span");
span.innerHTML = "onjou";
newP.appendChild(span);

// Création et ajout d'un strong à l'intérieur du p (à la fin)
const strong2 = document.createElement("strong");
newP.appendChild(strong2);
strong2.innerHTML = "r";

// Ajout du paragraphe à la fin de la div
const myDiv = document.getElementById("myDiv");
myDiv.appendChild(newP);


// Ajout juste avant un autre élément
const before = document.createElement("h3");
before.innerHTML = "Ceci est un petit titre à mettre avant !";
document.body.insertBefore(before,newElement);

const p2 = document.createElement("p");
p2.innerHTML = "Salut";
const secondParagraph = myDiv.children[2];
myDiv.insertBefore(p2,secondParagraph);

/*
On peut aussi retirer un enfant, via la méthode removeChild du parent.
*/
document.body.removeChild(newElement);
// document.body.removeChild(myDiv);
console.log(p2.parentElement); // L'objet myDiv
p2.parentElement.removeChild(p2);