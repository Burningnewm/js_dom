console.log("Exo DOM 2");
// Ajouter une image dans la div, après les paragraphes.
const image = document.createElement("img");
document.getElementById("myDiv").appendChild(image);

// Ajouter un petit titre avant le troisième paragraphe.
const title = document.createElement("h6");
const p2 = document.getElementsByTagName("p")[2];
document.getElementById("myDiv").insertBefore(title, p2);



// Retirer le lien tout en bas de la page, et le placer avant la div.

const link = document.getElementsByClassName("important")[3];
document.body.removeChild(link);
const myDiv = document.getElementById("myDiv");
document.body.insertBefore(link, myDiv);

// Ajouter à la fin du body une liste dont les éléments sont les mots suivants : "Fraise", "Banane", "Kiwi", "Pomme", "Abricot" et "Prune".
const ul = document.createElement("ul");
document.body.appendChild(ul);
const li = document.createElement("li");
const tab = ["Fraise", "Banane", "Kiwi", "Pomme", "Abricot", "Prune"];
const list = document.getElementsByTagName("ul")[0];
for (let i = 0; i < tab.length; i++){
	const li = document.createElement("li");
	list.appendChild(li);
	li.innerHTML = tab[i];
};
// Ajouter juste après le tout premier titre une table représentant une pyramide :
// *
// *    *
// *	*	*
// *	*	*	*
// *	*	*	*	*

const title1 = document.getElementById("titleChangerSource");
const tb = document.createElement("table");
document.body.insertBefore(tb, title1);
for (let i = 0; i < 5; i++){
	const tr = document.createElement("tr");
	for (let j = 0; j < i + 1; j++){
		const td = document.createElement("td");
		td.innerHTML= "*";
		tr.appendChild(td);
	}
	tb.appendChild(tr);
};


// Bonus : le code suivant a été chiffré en ROT13 (pour éviter de donner trop d'indices dans la question précédente !). Déchiffrez-le (à l'aide d'outils trouvés sur internet), et essayez de comprendre en quoi consiste le code.
/*
shapgvba perngrGnoyr(a,yriry) {
	pbafg gnoyr = qbphzrag.perngrRyrzrag("gnoyr");
	sbe(yrg v = 0 ; v < a ; v++) {
		pbafg ebj = qbphzrag.perngrRyrzrag("ge");
		sbe(yrg w = 0 ; w < v+1 ; w++) {
			pbafg pby = qbphzrag.perngrRyrzrag("gq");
			vs(yriry < 2) {
				pby.vaareUGZY = '*';
			} ryfr {
				pby.nccraqPuvyq(perngrGnoyr(a,yriry-1));
			}
			ebj.nccraqPuvyq(pby);
		}
		gnoyr.nccraqPuvyq(ebj);
	}
	erghea gnoyr;
}

qbphzrag.obql.nccraqPuvyq(perngrGnoyr(1,1)); // Irefvba 1
// qbphzrag.obql.nccraqPuvyq(perngrGnoyr(3,1)); // Irefvba 2
// qbphzrag.obql.nccraqPuvyq(perngrGnoyr(7,1)); // Irefvba 3
// qbphzrag.obql.nccraqPuvyq(perngrGnoyr(5,2)); // Irefvba 4
// qbphzrag.obql.nccraqPuvyq(perngrGnoyr(5,3)); // Irefvba 5
// qbphzrag.obql.nccraqPuvyq(perngrGnoyr(2,6)); // Irefvba 6
*/

function createTable(n,level) {
	const table = document.createElement("table");
	for(let i = 0 ; i < n ; i++) {
		const row = document.createElement("tr");
		for(let j = 0 ; j < i+1 ; j++) {
			const col = document.createElement("td");
			if(level < 2) {
				col.innerHTML = '*';
			} else {
				col.appendChild(createTable(n,level-1));
			}
			row.appendChild(col);
		}
		table.appendChild(row);
	}
	return table;
}

//document.body.appendChild(createTable(1,1)); // Version 1
 //document.body.appendChild(createTable(3,1)); // Version 2
//document.body.appendChild(createTable(7,1)); // Version 3
//document.body.appendChild(createTable(5,2)); // Version 4
// document.body.appendChild(createTable(5,3)); // Version 5
//document.body.appendChild(createTable(2,6)); // Version 6

