/*
Calcular años bisiestos antes de 2150
*/

const calcularBisiestos = (año) => {
    let añosBisiestos = [];

    for(let i = 2022; i < año; i++){
        if (i % 4 === 0) {
            añosBisiestos.push(i)
        }
    }

    return añosBisiestos
}

console.log(calcularBisiestos(2150))