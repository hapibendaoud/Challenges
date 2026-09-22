const prompt = require("prompt-sync")();


const list = ["tests", "code", "said"];

for(let i = 0; i < list.length; i++){
    let revers = "";
    for(let j = list[i].length - 1; j >= 0; j-- ){
        revers += list[i][j];
    }
    list[i] = revers;
}
console.log(list);