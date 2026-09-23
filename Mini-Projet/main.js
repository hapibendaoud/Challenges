const prompt = require("prompt-sync")();
const books = [
    {
        title: "",
        writer: "",
        prix: "",
        quantity: ""
    }
]; 

function Menu(){
    console.log(`=================================
RAILWAY MANAGER
=================================
= 1. Afficher les trajets       =
= 2. Acheter un ticket          =
= 3. Afficher les tickets       =
= 4. Annuler un ticket          =
= 5. Rechercher un ticket       =
= 6. Filtrer les trajets        =
= 7. Trier les trajets          =
= 0. Quitter                    =
=================================
`);
    const choix = Number(prompt("Choose from the Menu: "))
    switch(choix){
        case 1:
            console.log("1");
            break;
        case 2:
            console.log("2");
            break;
        case 3:
            console.log("3");
            break;
        case 4:
            console.log("4");
            break;
        case 5:
            console.log("5");
            break;
        case 6:
            console.log("6");
            break;
        case 7:
            console.log("7");
            break;
        case 0:
            console.log("0");
            break;
    }
}
Menu()