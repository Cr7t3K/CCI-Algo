// Demander à l'utilisateur de saisir son poids
let weight = prompt("Entrez votre poids en kg :");

// Demander à l'utilisateur de saisir sa taille
let size = prompt("Entrez votre taille en mètres :");

// Convertir les saisies en nombres
weight = parseFloat(weight);
size = parseFloat(size);

// Calcul de l'IMC
let bmi = weight / (size * size);

// Déterminer la catégorie de poids en utilisant des opérateurs conditionnels
let weightCategory;

if (bmi < 18.5) {
    weightCategory = "Poids insuffisant";
} else if (bmi < 25) {
    weightCategory = "Poids normal";
} else if (bmi < 30) {
    weightCategory = "Surpoids";
} else {
    weightCategory = "Obésité";
}

// Afficher la catégorie de poids à l'utilisateur
console.log(`Votre catégorie de poids est : ${weightCategory}`);