const prompt = require("prompt-sync")();

const num1 = Number(prompt("Enter number 1 ? "));
const num2 = Number(prompt("Enter number 2 ? "));
const num3 = Number(prompt("Enter number 3 ? "));

const moyenne = ((num1 * 2) + (num2 * 3) + (num3 * 5))/10


console.log("le Moyenne: " + moyenne);