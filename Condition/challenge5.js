const prompt = require("prompt-sync")();

const yeare = Number(prompt("Write yeare "));
const choise = Number(prompt("choise wish do you want"));

switch(choise){
    case 1:
        let mounths = yeare * 12;
        console.log("Mounth" + ' ' + mounths);
    case 2:
        let days = yeare * 366;
        console.log("Days" + ' ' + days);
    


}

// let mounths = yeare * 12;
// let days = yeare * 366;
// let hours = days * 24;
// let min = hours * 60;
// let sec = min * 60;

// console.log("Mounth" + ' ' + mounths);
// console.log("Days" + ' ' + days);
// console.log("Hours" + ' ' + hours);
// console.log("Minutes" + ' ' + min);
// console.log("Sec" + ' ' + sec);

