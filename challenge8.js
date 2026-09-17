const prompt = require("prompt-sync")();

const a = Number(prompt("Enter number a ? "));
const b = Number(prompt("Enter number b ? "));
const c = Number(prompt("Enter number c ? "));

const moyenneGeo = (a * b * c)^(1/3);


console.log("le Moyenne: " + moyenneGeo);