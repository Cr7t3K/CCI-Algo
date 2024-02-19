const prompt = require("prompt-sync")();


let taskList = ["do laundry", "clean kitchen", "throw the trash"]

function addTask() {
    let newTask = prompt("Entrez le nom de la nouvelle tâche :  ")
    taskList.push(newTask)
    chooseOption()
}

function displayTask() {
    for (i = 0; i < taskList.length; i++) {
        console.log((i + 1) + ' - ' + taskList[i])
    }
    chooseOption()
}

function removeTask() {
    displayTask()
    let userTask = Number(prompt("Saisissez le numéro de la tâche à supprimer :  "))
    let deleteTask = userTask - 1
    let result = taskList.splice(deleteTask, 1)
    displayTask()
}

function chooseOption() {
    let choice = prompt("Que voulez-vous faire ? Selectionnez : Ajouter, Afficher, Supprimer ou Exit pour quitter :  ")

    while (!["ajouter", "afficher", "supprimer", "exit"].includes(choice.toLowerCase())) {
        choice = prompt("Error: Que voulez-vous faire ? Selectionnez : Ajouter, Afficher, Supprimer ou Exit pour quitter :  ")
    }

    switch (choice.toLowerCase()) {
        case "ajouter":
            addTask()
            break;
        case "afficher":
            displayTask()
            break;
        case "supprimer":
            removeTask()
            break;
        case "exit":
            console.log("Terminated")
            break;
        default:
            console.log("Error")
            break;
    }
}

chooseOption()