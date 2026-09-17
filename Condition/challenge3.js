const prompt = require("prompt-sync")();

const number1 = Number(prompt("Write a number 1 : "));
const number2 = Number(prompt("Write a number 2 : "));

if(number1 === number2){
    let result = (number1+number2)*3;
    console.log("la somme"+" "+result);
}else{
    console.log("le nomber non identiques");
}
