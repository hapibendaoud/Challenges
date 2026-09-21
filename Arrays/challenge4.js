const prompt = require("prompt-sync")();


const list = [];
const index = Number(prompt("Enter nomber de le index: "));

for(let i = 0; i < index; i++){
    let nomber = Number(prompt(`Enter le nomber ${i+1} into the list: `));
    list.push(nomber)
}

// console.log(list);


let max = list[0];
for (let i = 1; i < list.length; i++){
    if(list[i] > max){
        max = list[i];
    }
}
console.log(list);
console.log(`The Max is: ${max}`);