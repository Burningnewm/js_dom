// Changer la couleur de fond du premier paragraphe lorsque l'on clique dessus.
const para = document.getElementsByTagName("p");
const para1 = para[0];
para1.addEventListener('click', () => {para1.style.color = "red"});
// Ajouter/enlever la classe "important" d'un paragraphe à chaque fois que l'on clique dessus.
function important(){
    for (let i = 0; i<para.length ; i++){
        para[i].addEventListener("click", () => para[i].classList.toggle("important"));
    }
};
important();
// À chaque fois que l'utilisateur modifie la valeur dans l'input, cette valeur va remplacer ce qu'il y a dans le premier titre h2.
const input = document.getElementById("titleChangerSource");
const premierH2 = document.getElementsByTagName("h2")[0]
console.log(premierH2);
input.addEventListener("keydown", function(){premierH2.innerHTML = this.value});
// Ajouter (directement dans le code html), deux inputs avant "myDiv" (le premier récupèrera un nombre , et du texte pour le second) et un bouton. Lors du clic sur le bouton, ajouter autant de paragraphes à la fin de la div, quiu contiendront tous une copie de ce texte.
const myDiv = document.getElementById("myDiv");
const number = document.getElementById("number");
const text  = document.getElementById("text");
const button = document.getElementById("submit");
button.addEventListener("click", function(){
    let count = number.value
    for (let i = 0; i< count ;i++){
        let newP = document.createElement("p");
        newP.innerHTML = text.value;
        myDiv.appendChild(newP);
    }
})

// Créer une fonction qui va demander un nombre n à l'utilisateur, puis déplacer la barre de défilement pour amener le nième enfant de myDiv en haut de l'écran. Indices : scrollIntoView, parseInt, prompt.
function scroll(){
    let prompt = window.prompt("veuillez entrer un nombre entre 0 et 4: ")
    let count = parseInt(prompt);
    let element = myDiv.children[count];
    element.scrollIntoView();
}
// Appeler cette fonction 3 secondes après le chargement de la page. Indice : setTimeout.
//setTimeout(scroll, 3000);

// Bonus : Ajouter un bouton quelque part dans la page html, en position fixe. À chaque fois que la souris rentre dans le bouton, celui se déplace autre part sur la page.
const newButton = document.createElement("input");
myDiv.appendChild(newButton);
newButton.setAttribute("type", "button");
newButton.style.position = "fixed";
newButton.style.height = "100px";
newButton.style.width = "100px";
const newButton2 = document.createElement("input");
myDiv.appendChild(newButton2);
newButton2.setAttribute("type", "button");
newButton2.style.position = "relative";
newButton2.style.height = "50px";
newButton2.style.width = "50px";
let count = 0;

newButton.addEventListener("mouseover", function(){
    let randomTopPos = Math.floor(Math.random() * (window.innerHeight - 100));
    let randomLeftPos = Math.floor(Math.random() * (window.innerWidth - 100));
    newButton.style.top = randomTopPos;
    newButton.style.left =randomLeftPos;
    let randomTopPos2 = Math.floor(Math.random() * (window.innerHeight - 50));
    let randomLeftPos2 = Math.floor(Math.random() * (window.innerWidth - 50));
    newButton2.style.height = Math.floor(Math.random() * 100);
    newButton2.style.width = Math.floor(Math.random() * 100)
    newButton2.style.top = randomTopPos2;
    newButton2.style.left =randomLeftPos2;
    count+=1;
    
});
function champion(){ 
    if (count > 5){
        alert("You are a champion you touched the button "+ count+ " times")
    }
    else {
        alert("Try again, not enough touches on the button!!!")
    }
}
setTimeout(champion, 3000);

// if (randomTopPos > window.innerHeight){
    //     randomTopPos = window.innerHeight
    // }
    // else if( randomLeftPos > window.innerWidth ){
    //     randomLeftPos = window.innerWidth;
    // }
//let url="https://api.agify.io?name=victor";
// url = "https://randomuser.me/api";
//url = "https://www.boredapi.com/api/activity";
// url = "https://datausa.io/api/data?drilldowns=Nation&measures=Population";
// url = "https://v2.jokeapi.dev/joke/programming";
// url = "https://api.publicapis.org/entries";

// fetch(url).then(response => response.json())
// .then(data => console.log(data));

// function f1(response) {
//     console.log(response);
//     return response.json();
// }

// function f2(data) {
//     const h2 = document.getElementById("myDiv").children[0];
//     h2.innerHTML = `si vous souhaitez decouvrir ${data.activity} suivez  <a href = "${data.link}" >le lien</a>`;
// }

// console.log(1);
// fetch(url).then(f1).then(f2);
// console.log(2);