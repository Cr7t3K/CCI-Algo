const prompt = require('prompt-sync')();

let inviteList = ["Jean", "Maurice", "Lucas"]
let inviteListString = ""

function addGuest() {
    let guest = prompt("Qui voulez-vous inviter de plus ? ")
    inviteList.push(guest)
}

function displayGuest() {
    inviteList.forEach(function (item) {
        inviteListString += item + ", "
    })
    console.log(inviteListString)
}

function searchGuest() {
    let guestInput = prompt("Entrez le nom de l'invité :  ")
    let result = inviteList.includes(guestInput)
    if (result === true){
        console.log("L'invité serra présent")
    } else {
        console.log("La personne n'est pas invité !")
    }
}

function start () {
    let choice = prompt("Que voulez vous faire? Ecrivez : Ajouter, Afficher, Rechercher ou 'exit' pour quitter.  ")
    while (!["ajouter", "afficher", "rechercher", "exit"].includes(choice.toLowerCase())) {
        choice = prompt("Que voulez vous faire? Ecrivez : Ajouter, Afficher, Rechercher ou 'exit' pour quitter.  ")
    }

    switch (choice.toLowerCase()) {
        case "ajouter":
            addGuest()
            break;
        case "afficher":
            displayGuest()
            break;
        case "rechercher":
            searchGuest()
            break;
        case "exit":
            console.log("Terminated")
            break;
        default:
            console.log("Error")
            break;
    }
}