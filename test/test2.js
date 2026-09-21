for(let i = 1; i<=4; i++){
    let num = "";
    for(let j = 1; j<=4; j++){
            if(j % 2 !== 0){
        num += j
    } else{
        num += `(${j})`;
    }
    }
    console.log(num);
}
