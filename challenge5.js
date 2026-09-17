const prompt = require("prompt-sync")();

const C = Number(prompt("Enter Celsius? "));

if ( C < 0 ){
    console.log("Solide")
} else if (C < 100){
    console.log("Liquide")
} else {
    console.log("Gaz")
}