const prompt = require("prompt-sync")();

const word = prompt("Write a caomment: ");
const letter = prompt("Search for: ");

let count = 0;
for(let i = 0; i < word.length; i++){
    if(word[i] === letter){
        count++;
    }
}
console.log(`the word ${word} has ${count} of ${letter}`);