const prompt = require("prompt-sync")();

const comment = prompt("Write a caomment: ");
// let comment = "said";

let revers = "";

for(let i = comment.length - 1; i >= 0; i-- ){
    revers += comment[i];
}
console.log(revers);