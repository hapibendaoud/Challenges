const prompt = require("prompt-sync")();

const message = prompt("Write your comment: ");
let counter = 0;

for(let i = 0; i < message.length ; i++ ){
    counter ++;
}

console.log("The length of your message is: ",counter);