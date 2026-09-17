const prompt = require("prompt-sync")();

const number = Number(prompt("Write a number: "));

if(number > 0){
    console.log("Le number est positif");
}else if(number < 0){
    console.log("le number est négatif");
}else{
    console.log("le nomber égal à zéro.")
}