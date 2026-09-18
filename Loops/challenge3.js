const prompt = require("prompt-sync")();

let num = Number(prompt("Enter a Number: "));

let somme = 0;
for(let i = 1; i <= num; i++ ){
    somme += i
}
console.log(`La somme = ${somm}`)