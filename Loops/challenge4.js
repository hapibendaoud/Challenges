const prompt = require("prompt-sync")();

let num = Number(prompt("Enter a Number: "));

for(let i = 1; i <= num; i++ ){
    let res = 0;
    res = i * 2-1;
    console.log(res);
}
