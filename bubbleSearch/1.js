let arr = [0,5,4,7,8,21,2,45,6,9,8,7,1];

for(let i = 0; i < arr.length ; i++ ){
    for(let j = 0; j < arr.length - i; j++){
        if(arr[j] > arr[j+1]){
            let x = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = x;
        }
    }
}
console.log(arr)