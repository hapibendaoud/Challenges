const prompt = require("prompt-sync")();


const list = [];
const index = Number(prompt("Enter nomber de le index: "));

for(let i = 0; i < index; i++){
    let nomber = Number(prompt(`Enter le nomber ${i+1} into the list: `));
    list.push(nomber)
}
console.log(list);

// const list = [1,2,3,4];
let somme = 0;
for(let j = 0; j < list.length; j++){
    somme += list[j];
}

console.log(somme);