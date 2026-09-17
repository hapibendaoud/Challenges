const prompt = require("prompt-sync")();


const letter = prompt("Write a letter: ");

switch (letter) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
    case "o":
        console.log("voyelle");
        break;
    default:
        console.log("Non voyelle");

}