const prompt = require("prompt-sync")();

// Initialisation de age
let age;



// --------------------------------------------------------------------------------------------- //
// -------------------------------------------- Version 1 -------------------------------------- //
// --------------------------------------------------------------------------------------------- //
while (true) {
    age = Number(prompt("Entrez un nombre :"));

    // Vérifier si la valeur saisie n'est pas un nombre
    if (isNaN(age)) {
        console.log("La valeur entrée n'est pas un nombre. Veuillez réessayer.");
    } else {
        if (age < 0) {
            console.log("Quoi.. tu viens du futur ?");
        } else if (age < 18) {
            console.log("Désolé, vous êtes mineur, l'accès est interdit.");
        } else if (age >= 18 && age <= 65) {
            console.log("Bienvenue ! Vous êtes majeur, vous pouvez accéder au site.");
        } else {
            console.log("Attention, vous êtes senior, l'accès peut être restreint.");
        }
        break;
    }
}



// --------------------------------------------------------------------------------------------- //
// -------------------------------------------- Version Switch --------------------------------- //
// --------------------------------------------------------------------------------------------- //
age = Number(prompt("Entrez un nombre :"));

switch (true) {
    case age < 0:
        console.log("Quoi.. tu viens du futur ?");
        break;
    case age < 18:
        console.log("Désolé, vous êtes mineur, l'accès est interdit.");
        break;
    case age >= 18 && age <= 65:
        console.log("Bienvenue ! Vous êtes majeur, vous pouvez accéder au site.");
        break;
    default:
        console.log("Attention, vous êtes senior, l'accès peut être restreint.");
}




// --------------------------------------------------------------------------------------------- //
// -------------------------------------------- Version 2 -------------------------------------- //
// --------------------------------------------------------------------------------------------- //
do {
    age = Number(prompt("Entrez un nombre :"));
} while(isNaN(age));

if (age < 0) {
    console.log("Quoi.. tu viens du futur ?");
} else if (age < 18) {
    console.log("Désolé, vous êtes mineur, l'accès est interdit.");
} else if (age >= 18 && age <= 65) {
    console.log("Bienvenue ! Vous êtes majeur, vous pouvez accéder au site.");
} else {
    console.log("Attention, vous êtes senior, l'accès peut être restreint.");
}

// --------------------------------------------------------------------------------------------- //
// -------------------------------------------- Version 3 (Fonction)---------------------------- //
// --------------------------------------------------------------------------------------------- //
do {
    age = Number(prompt("Entrez un nombre :"));
} while(isNaN(age));

function auth(age) {
    let message;

    if (age < 0) {
        message = "Quoi.. tu viens du futur ?";
    } else if (age < 18) {
        message = "Désolé, vous êtes mineur, l'accès est interdit.";
    } else if (age >= 18 && age <= 65) {
        message = "Bienvenue ! Vous êtes majeur, vous pouvez accéder au site.";
    } else {
        message = "Attention, vous êtes senior, l'accès peut être restreint.";
    }

    return message;
}

let result = auth(age);
console.log(result);
