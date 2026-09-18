const prompt = require("prompt-sync")();

let num = Number(prompt("Enter a Number: "));
let f = 1;
for (let i = 1 ; i <= num ; i++ ){
    f = f * i;
};
console.log(`${num}! = ${f}`);