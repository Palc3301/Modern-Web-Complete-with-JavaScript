function getInteiroAleaotorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao // somente iniciada a variavel, sem valor inicial

do{ 
    opcao = getInteiroAleaotorioEntre(-1, 10)
    console.log('Opção escolhida foi '+ opcao + '.')
} while (opcao != -1)

console.log('Até a próxima!')