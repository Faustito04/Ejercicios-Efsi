/* 
Eliminar 6 cartas de la baraja al azar y calcular en promedio 
(haciendo mil iteraciones) cuanto valen las cartas que quedan
*/

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array
}

function arrayAvg(myArray) {
    var i = 0, summ = 0, ArrayLen = myArray.length;
    while (i < ArrayLen) {
        summ = summ + myArray[i++];
    }
    return summ / ArrayLen
}

const calcularValorCartas = () => {
    const intentos = 1000;

    const palo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    const mazo = palo.concat(palo, palo, palo)

    for (let i = 0; i < intentos; i++) {
        let aux = shuffleArray(mazo);
        aux.splice(0, 6)

        for (let a = 0; a < array.length; a++) {
            const element = array[a];
            
        }

    }
}

calcularValorCartas()