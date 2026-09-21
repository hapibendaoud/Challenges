const prompt = require("prompt-sync")();

const firstWord = prompt("Write first word: ");
const secondWord = prompt("Write second word: ");

if(firstWord === secondWord){
    console.log("the two word are equal");
} else {
    console.log("the two word are different");
}
