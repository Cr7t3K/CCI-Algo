const prompt = require("prompt-sync")();

/* ------------------------------------------------------------------------------------------------------------------ */
/* ------------------------------------------------- Version 1 ------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------------------------ */



// On demande à l'utilisateur de saisir trois notes
let grade1 = parseFloat(prompt("Entrez la première note :"));
let grade2 = parseFloat(prompt("Entrez la deuxième note :"));
let grade3 = parseFloat(prompt("Entrez la troisième note :"));

// Stocke les notes dans un tableau
let grades = [grade1, grade2, grade3];

// Calcul de la somme de toutes les notes
let sum = 0;
for (let i = 0; i < grades.length; i++) {
    sum += grades[i];
}

// Calcul de la moyenne des notes
let average = sum / grades.length;

// Afficher la moyenne des notes à l'utilisateur
console.log("Les notes sont : " + grades.join(", "));
console.log("La moyenne est : " + average.toFixed(2)); // Limite à deux décimales






/* ------------------------------------------------------------------------------------------------------------------ */
/* ------------------------------------------------- Version 2 ------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------------------------ */


let homeworks, grade;

while (true) {
    // On demande à l'utilisateur le nombre de devoirs
    homeworks = parseInt(prompt("Combien de devoirs avez-vous ?"));

    // Vérifier si la valeur saisie n'est pas un nombre
    if (isNaN(homeworks)) {
        console.log("La valeur entrée n'est pas un nombre. Veuillez réessayer.");
    } else {
        break;
    }
}


// Créer un tableau vide pour stocker les notes
let grades = [];

// On utilise une boucle pour saisir les notes et les stocker dans le tableau
// On vient boucler autant de fois que l'utilisateur a renseigné de devoir dans le précédent Prompt
for (let i = 0; i < homeworks; i++) {
    do {
        grade = parseFloat(prompt(`Saisissez la note du devoir ${i + 1}:`)); // Demander la note pour chaque devoir
    } while (isNaN(grade))

    grades.push(grade); // Ajouter la note au tableau
}

// Calcul de la somme des notes
let sum = 0;
for (let j = 0; j < grades.length; j++) {
    sum += grades[j];
}

// Calcul de la moyenne
let average = sum / grades.length;

// Afficher la moyenne à l'utilisateur
console.log(`La moyenne des ${homeworks} devoirs est : ${average.toFixed(2)}`);