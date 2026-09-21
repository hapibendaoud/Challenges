const prompt = require("prompt-sync")();

const comment = prompt("Write a caomment: ");
const word = prompt("search for: ");



if(comment.includes(word)){
    console.log("the word exist in the comment");
} else {
    console.log("the word do not exist");
}