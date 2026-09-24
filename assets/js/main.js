/**
 * Le coffre fort du musée
 * Solution modèle minimale de l'exercice #1
 * @author Camille Semaan
 */

/************************* REMARQUE IMPORTANTE ********************************/
// Il est important de noter que la solution donnée ici est minimale et utilise
// uniquement les éléments de programmation et de code JS vus en classe.
/******************************************************************************/

/** @type {HTMLCanvasElement} */
let canvas = document.querySelector("#scene");
let contexte = canvas.getContext("2d");

// Combinaison du coffre fort
const COMBINAISON1 = 0;
const COMBINAISON2 = 0;
const COMBINAISON3 = 7;

// Saisie des chiffres par l'utilisateur
let saisie1 = Number(prompt("Devinez le premier chiffre du numéro"));
let saisie2 = Number(prompt("Devinez le deuxième chiffre du numéro"));
let saisie3 = Number(prompt("Devinez le troisième chiffre du numéro"));

// Dessine un fond noir
contexte.fillStyle = "black";
contexte.fillRect(200, 150, 500, 300);

// Dimensions des rectangles (rouge ou vert) à dessiner.
let largeurRectangle = 100; 
let hauteurRectangle = 200; 

// On vérifie chaque chiffre et on dessine un rectangle vert ou rouge selon le cas
// Premier chiffre
if (saisie1 === COMBINAISON1) {
    contexte.fillStyle = "green";
} else {
    contexte.fillStyle = "red";
}
contexte.fillRect(250, 200, largeurRectangle, hauteurRectangle);

// Deuxième chiffre
if (saisie2 === COMBINAISON2) {
    contexte.fillStyle = "green";
} else {
    contexte.fillStyle = "red";
}
contexte.fillRect(300 + largeurRectangle, 200, largeurRectangle, hauteurRectangle);

// Troisième chiffre
if (saisie3 === COMBINAISON3) {
    contexte.fillStyle = "green";
} else {
    contexte.fillStyle = "red";
}
contexte.fillRect(350 + 2 * largeurRectangle, 200, largeurRectangle, hauteurRectangle);

// Message de fin
contexte.font = "bold 24px Courrier";
contexte.textAlign = "center";
contexte.textBaseline = "middle";
if (saisie1 === COMBINAISON1 && saisie2 === COMBINAISON2 && saisie3 === COMBINAISON3) {
    contexte.fillStyle = "#090";
    contexte.fillText("Félicitations, le coffre est ouvert 🙌", canvas.width/2, 75);
}
else {
    contexte.fillStyle = "#900";
    contexte.fillText("Dommage, ce n'est pas le bon code 🙁", canvas.width/2, 75);
}