const pilotos = ['Vettel', 'Alonso', 'Raikkoen', 'Massa']
pilotos.pop() // remove da ultima posição!
console.log(pilotos)

pilotos.push('Verstappen')  // adiciona no final!
console.log(pilotos)  

pilotos.shift()  // remove o primeiro!
console.log(pilotos)

pilotos.unshift('Hamilton')  // adiciona na primeira posição!
console.log(pilotos)

// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover
pilotos.splice(3, 1) // massa quebrou :(
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2)  // novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)