'''
¿Cuántas cartas con número par y negras hay en una baraja?

Eliminar 6 cartas de la baraja al azar y calcular en promedio 
(haciendo mil iteraciones) cuanto valen las cartas que quedan
'''

import random

palos = ["pica", "diamante", "corazon", "trebol"]
figuras = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K']
numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

mazo = []

for palo in palos:
    
    if palo == 'diamante' or palo == 'corazon':
        color = 'rojo'
    else:
        color = 'negro'

    for i in range(13):
        mazo.append({'palo': palo, 'figura': figuras[i], 'color': color, 'numero': numeros[i]})

# Cartas negras y pares
for carta in mazo:
    if carta['color'] == 'negro' and carta['numero'] % 2 == 0:
        print(carta)

# Promedio
iteraciones = 1000

suma_total = 0

for i in range(iteraciones):
    aux = random.sample(mazo, len(mazo))
    del aux[0:6]
    suma = 0

    for carta in aux:
        suma += carta["numero"]
    
    promedio = suma/len(aux)
    suma_total += promedio

promedio_total = suma_total / iteraciones

print(promedio_total)