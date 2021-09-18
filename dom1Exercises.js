// 1) Changer le texte de "Pas dans la div" en "En dehors de la div".
const titleDiv = document.getElementsByTagName("h2")[1].innerHTML = "En dehors de la div";
// // 2) Changer la couleur du texte du lien en vert.
document.getElementsByTagName("a")[0].style.color = "green";
// // 3) Changer le titre de l'onglet en DOM - EXOS
document.getElementsByTagName("title")[0].innerHTML = "DOM - EXOS"
// // 4) Écrire dans la console le texte du dernier paragraphe (celui en dehors de la div).
const lastP = document.getElementsByTagName("p")[4].innerHTML;
console.log(lastP);
// 5) Modifier le texte du quatrième paragraphe pour mettre le même texte que celui du dernier paragraphe.
document.getElementById("myDiv").children[4].innerHTML = lastP;

// 6) Ajouter au début de chaque paragraphe son numéro :
// 1 --- Lorem...
// 2 --- Pellentesque
// ...
const para = document.getElementsByTagName("p");
let number = 1;
for (let i=0; i<para.length; i++){
    let text = para[i].innerHTML;
    para[i].innerHTML = number + " --- " +text;
    number++;
}

// 7) Ajouter à la fin de chaque paragraphe, sur une nouvelle ligne, le nombre de caractères de celui-ci :
// ... Ut ut hendrerit eros.
// (size = 558)
// ... ante gravida sit amet.
// (size = 541)
for (let i=0; i<para.length; i++){
    let text2 = "(size = " + para[i].innerHTML.length + ")";
    para[i].innerHTML += "<br>" + text2;
}

// 8) Ajouter un margin à gauche et à droite à tous les paragraphes importants.
// const important = document.getElementsByClassName("important");
for (let i=0; i<para.length - 1; i++){
    if (para[i].classList.contains("important")){
    para[i].style.marginLeft = "50px";
    para[i].style.marginRight = "50px";
    }
};
// 9) Changer la couleur des bordure des paragraphes non importants en bleu.
for (let i=0; i<para.length; i++){
if (!(para[i].classList.contains("important"))){
    para[i].style.borderColor = "blue";
}
}
// Bonus : afficher toutes les voyelles des paragraphes en bleu. Et à l'envers.
for (let i = 0; i < para.length; i++){
    let replace = para[i].innerHTML.replace(/[a e i o u y]/gi , x =>{
        return "<span class = 'vowel'>"+ x + "</span>";     
    });
    para[i].innerHTML= replace;
}
