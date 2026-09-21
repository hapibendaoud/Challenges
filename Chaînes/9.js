const prompt = require("prompt-sync")();

const comment = prompt("Write a caomment: ");

let clear = '';

for(let i = 0; i < comment.length; i++){
    if(comment[i] !== " "){
        clear+=comment[i];
    }
}
console.log(clear);