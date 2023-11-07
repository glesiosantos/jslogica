const prompt = require('prompt-sync')()

var num1, num2, resultado, continua, opcao

continua = true

while (continua) {
    num1 = parseFloat(prompt('Informe o primeiro número:'))
    num2 = parseFloat(prompt('Informe o segundo número:'))

    if (num2 === 0) {
        console.log('Número invalido')
        num2 = parseFloat(prompt('Informe o segundo número:'))
    }

    resultado = num1 / num2
    console.log(`O resultado é ${resultado}`)
    opcao = prompt('Deseja continuar com a operação? S - Sim | N - Não')
    if (opcao.toUpperCase() === 'N') {
        continua = false
    }
}
