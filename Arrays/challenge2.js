const prompt = require("prompt-sync")();


const list = [];
const index = Number(prompt("Enter nomber de le index: "));

for(let i = 0; i < index; i++){
    let nomber = Number(prompt(`Enter le nomber ${i+1} into the list: `));
    list.push(nomber)
}

console.log(list);