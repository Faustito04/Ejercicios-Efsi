/*
Duplicar el array anterior y aplicarle la función raíz a todos los elementos, obteniendo como resultado:
[{original: 9, modificado: 3}]
*/

let arrayOriginal = [4, -3, 14, 25, 36, 49, 64, 81, 100, 121];
const result = [];

arrayOriginal = arrayOriginal.concat(arrayOriginal)

for(let i = 0; i < arrayOriginal.length; i++){
    const aux = Math.sqrt(arrayOriginal[i])

    if (!isNaN(aux)) {
        const rounded = +aux.toFixed(2)
        result.push({
            original: arrayOriginal[i],
            modificado: rounded,
        });
    }
}

console.log(result)