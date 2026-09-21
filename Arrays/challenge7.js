// const prompt = require("prompt-sync")();


// const list = [];
// const index = Number(prompt("Enter nomber de le index: "));

// for(let i = 0; i < index; i++){
//     let nomber = Number(prompt(`Enter le nomber ${i+1} into the list: `));
//     list.push(nomber)
// }
// console.log(`first list: [${list}]`);

let list = [1,3,5,4,2,0];
let x = 0;
for (let i = 0; i < list.length; i++){
    // console.log(list[i]);
    for(let j = 0; j < list.length; j++){
        if(list[i] < list[j]){
            x = list[i];
            list[i] = list[j];
            list[j] = x
        }
    }
}
console.log(`the new list: [${list}]`);