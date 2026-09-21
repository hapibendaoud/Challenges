const prompt = require("prompt-sync")();


const list = ["tests", "code"];
// const index = prompt("Enter nomber de le index: ");

// for(let i = 0; i < index; i++){
//     let word = prompt(`Enter le nomber ${i+1} into the list: `);
//     list.push(word);
// };


let letter = prompt(`Search for letter: `);
let searchedLetter = 0;
for(let i = 0; i < list.length; i++){
    for(let j = 0; j < list[i].length; j++){
        if(list[i][j] === letter){
            for(let a = 0; a < list[i].length ; a++ ){
                searchedLetter ++;
            }
            console.log(`the letter "${letter}" is exist and the length of the the corrent word is (${searchedLetter})`);
            break;
        }
    }
};
