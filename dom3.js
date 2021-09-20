/*===============================
  Interactions avec l'utilisateur
  =============================== */

/*
Un système d'évènements permet de réagir à certaines actions que va faire l'utilisateur sur la page web. On va pouvoir, entre autres, réagir lors d'un clic sur un bouton ou n'importe quel élément, lorsque la souris est déplacée, ou lorsque l'utilisateur saisit du texte.
Il y a deux étapes qui vont permettre de mettre en place ce système.
La première étape consiste à créer une fonction pour "encapsuler" l'action que l'on déclenchera suite à une action de l'utilisateur.
La deuxième étape consiste à donner cette fonction à un élément de notre page, en lui précisant qu'il devra l'exécuter en réaction à un certain évènement.
*/

/*
Dans l'exemple suivant, nous allons mettre en place un système qui change le titre quand on clique dessus.
Nous allons d'abord stocker l'élément en question dans une variable pour éviter de devoir tout recopier à chaque fois
*/
const title = document.getElementById("myTitle");

/*
La première étape consiste à créer une fonction qui va changer la propriété innerHTML du titre.
Cette fonction a la particularité de recevoir une information : un évènement. Pour l'instant, il ne sera pas utilisé, mais autant prendre l'habitude de le mettre.
Cette fonction n'a pas pour vocation (a priori) d'être utilisée directement dans le code qu'on écrit. On va simplement la définir, et la donner à un ou plusieurs objets du DOM. Ce sont ces objets qui vont l'utiliser quand certaines conditions seront réunies.
Quand on donne à "quelqu'un" une fonction, en lui disant de l'exécuter plus tard, cette fonction est souvent qualifiée de *callback*.
*/
function titleChanger(event) {
	this.innerHTML = "CLIC CLIC CLIC";
	console.log(event);
}

/*
La deuxième étape consiste à lier cette fonction au clic sur l'élément title. On va pouvoir le faire grâce à une méthode de l'objet title, construite exactement pour ça.
Après avoir utilisé cette méthode, l'élément va *écouter* (surveiller) les évènements qui le concernent (clic de la souris, perte de focus, modification d'une valeur...) et déclencher la fonction de callback lorsqu'un tel évènement se produit.
Cette méthode s'appelle *addEventListener*. Elle reçoit deux arguments : un string pour le type d'évènement à surveiller, et la fonction de callback.
*/
console.log(typeof titleChanger);
title.addEventListener("click", titleChanger); // Je dis à l'élément title : "quand on va cliquer sur toi, exécute la fonction titleChanger"
/*
Il existe plein de sortes d'évènement, pas seulement le clic de la souris : https://developer.mozilla.org/fr/docs/Web/Events
*/

/*
Il est tout à fait possible d'appeler notre fonction titleChanger au clic sur un élément autre que le titre.
*/
const thirdP = document.getElementsByTagName("p")[2];
thirdP.addEventListener("click",titleChanger); // Quand on clique sur le troisième paragraphe, ça exécute la fonction titleChanger

