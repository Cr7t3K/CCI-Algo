// Création d'un tableau vide pour stocker les éléments de la liste
let shoppingList = [];

// Ajout d'éléments à la liste de courses
shoppingList.push("Pain");
shoppingList.push("Lait");
shoppingList.push("Œufs");

// Affichage de la liste actuelle des courses
console.log("Liste de courses actuelle :");
if (shoppingList.length === 0) {
    // Si la liste est vide alors j'affiche ce message, sinon je passe dans else
    console.log("La liste est vide.");
} else {
    // Version avec la boucle for
    for (let i = 0; shoppingList.length; i++) {
        console.log(`${i}. ${shoppingList[i]}`);
    }

    // Version avec la boucle foreach
    shoppingList.forEach((element, index) => {
        console.log(`${index}. ${element}`);
    });
}

// Suppression d'un élément de la liste de courses
let toDelete = "Lait"; // Vous pouvez demander à l'utilisateur de saisir l'élément à supprimer avec prompt()
let indexElement = shoppingList.indexOf(toDelete); // On vient récupérer l'index de l'élément en question dans le tableau

// Si l'élément a supprimé ne se trouve pas dans le tableau "indexOf" nous renvoie -1
if (indexElement !== -1) {
    shoppingList.splice(indexElement, 1);
    console.log(`${toDelete} a été retiré(e) de la liste de courses.`);
} else {
    console.log(`${toDelete} n'est pas dans la liste de courses.`);
}

// Affichage de la liste mise à jour des courses
console.log("Liste de courses mise à jour :");

shoppingList.forEach((element, index) => {
    console.log(`${index + 1}. ${element}`);
});