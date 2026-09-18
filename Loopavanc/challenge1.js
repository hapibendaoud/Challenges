const prompt = require("prompt-sync")();

let num = Number(prompt("Enter a Number: "));


for(let i = 10; i > 0; i--){
    console.log(`${num} * ${i} = ${num * i}`)
}