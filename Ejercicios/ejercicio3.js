/*
Duplicar el array anterior y ap´licarle la función raíz a todos los elementos, obteniendo como resultado:
[{original: 9, modificado: 3}
]
*/ 

let arrayOriginal = [4, 9, 16, 25, 36, 49, 64, 81, 100, 121];
arrayOriginal = arrayOriginal.concat(arrayOriginal)
let aux;

for(let i = 0; i < arrayOriginal.length; i++){
    aux = Math.sqrt(arrayOriginal[i])
    arrayOriginal[i]={
        original: arrayOriginal[i],
        modificado: aux
    }
}
console.log(arrayOriginal)