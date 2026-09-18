const prompt = require("prompt-sync")();

const num = Number(prompt("Enter a Number: "));

for(let i = 1; i <= 10 ; i++ ){
    console.log(`${num} * ${i} = ${num*i}`);
}