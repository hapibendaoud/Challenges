const prompt = require("prompt-sync")();

const speedByKm = parseInt(prompt("culcul Speed from Km/h to M/s : "));

const speedByM = speedByKm * 0.27778

console.log("Speed by m/s: ", speedByM, "M/S");



