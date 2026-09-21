const prompt = require("prompt-sync")();

const firstName = prompt("Write your First name: ");
const lastName = prompt("Write your Last name: ");

const fullName = firstName + " " + lastName;

console.log(fullName);