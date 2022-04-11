var arr = [11, 33, 2, -1, 110, 99, 8];
PMI = false;
i = 0;

arr.sort((a, b) => a - b).reverse();

while(!PMI || arr[i] % 2 == 0){
    if(arr[i] % 2 != 0){
        PMI = true
    }
    i++;
}

console.log(arr[i])