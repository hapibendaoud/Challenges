const prompt = require("prompt-sync")();

const Km = parseFloat(prompt("Enter number of KLM? "));

const Yards = Km * 1093.61

console.log("the ", Km , " Km to Yard is", Yards);
