const prompt = require("prompt-sync")();


const person = {
    nom: "",
    prenom: "",
    age: ""
};

for(let cle in person){
    person[cle] = prompt(`Enter your ${cle} : `);
}
console.log(person);


