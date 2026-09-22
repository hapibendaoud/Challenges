const trajets = [
  { id: 1, depart: "Casablanca", arrivee: "Rabat", prix: 50, placesDisponibles: 10 },
  { id: 2, depart: "Rabat", arrivee: "Fes", prix: 120, placesDisponibles: 0 },
  { id: 3, depart: "Casablanca", arrivee: "Marrakech", prix: 90, placesDisponibles: 3 },
  { id: 4, depart: "Fes", arrivee: "Tanger", prix: 150, placesDisponibles: 7 },
  { id: 5, depart: "Marrakech", arrivee: "Agadir", prix: 80, placesDisponibles: 0 },
];

const tickets = [
  { trajetId: 1 }, { trajetId: 2 }, { trajetId: 1 },
  { trajetId: 3 }, { trajetId: 1 }, { trajetId: 2 },
];


function maxSoldTicket(){
    let numberOfTecket = [];
    for(let t of tickets){
        let count = 0;
        let exist = false;
        for(let j of tickets){
            if(t.trajetId === j.trajetId){
                count++
            }
        }
        for(let id of numberOfTecket){
            if(t.trajetId === id.key){
                exist = true;
            }
        }
        if(exist === false){
            numberOfTecket.push({
                key: t.trajetId,
                tickets: count
                })
        }
    }
    let max = numberOfTecket[0].tickets;
    let id = numberOfTecket[0].key;
    for (let i = 1; i < numberOfTecket.length; i++){
        if(numberOfTecket[i].tickets > max){
            max = numberOfTecket[i].tickets;
            id = numberOfTecket[i].key;
        }
        // console.log(numberOfTecket[i].key);

    }
    // return numberOfTecket;
    console.log(numberOfTecket);
    console.log(`The most sold Ticket is with id (${max}) and her key is: (${id})`);

}
maxSoldTicket();
// console.log(maxSoldTicket());


function availibleTikits(prix){
    if (!prix){
        return
    }
    let tikitPrix = [];
    for(let t of trajets){
        if (prix <= t.prix){
            tikitPrix.push(t);
        }
    }
    return tikitPrix;
}
// console.log(availibleTikits(100))

function search(par){
    if (!par){
        console.log("prix is empty");
        return
    }
    let searched = [];
    for(let t of trajets){
        if(par === t.depart || par === t.arrivee ){
            searched.push(t);
        }
    }
    return searched;
}
// console.log(search("Rabat"));
