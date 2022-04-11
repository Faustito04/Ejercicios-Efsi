/*
¿Cuántas cartas con número par y negras hay en una baraja?
*/

const calcularCartas = () => {
    const cartasMazo = 52;
    let cartasNegras = cartasMazo/2;
    let cartasNegrasPares = cartasNegras * 5 /13;
    return cartasNegrasPares
}

console.log(calcularCartas())