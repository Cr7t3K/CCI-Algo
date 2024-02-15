let name = "Guillaume";
let age = 28;

let hobbies = ["Trail", "Mountain", "Video-Games"];

// Version 1 (concatenation Literal)
let message = `Bonjour, je m'appelle ${name}, j'ai ${age} ans et mes hobbies sont:`;

// Version 2 (concatenation avec +)
let message = "Bonjour, je m'appelle " + name + ", j'ai " + age + " ans et mes hobbies sont:";
console.log(message);



// Version 1 (avec boucle for)
for (let i = 0; i < hobbies.length; i++) {
    console.log("- " + hobbies[i]);
}

// Version 2 (avec join)
hobbies.join()

