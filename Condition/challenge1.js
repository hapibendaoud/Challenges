const prompt = require("prompt-sync")();


const number = Number(prompt("Write a number: "));

if (number % 2 === 0){
    console.log("Pair")
} else {
    console.log("Impair")
}
