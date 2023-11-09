const prompt = require('prompt-sync')()
var base, altura, area, continua, opcao

continua = true

while (continua) {
    base = parseInt(prompt('Informe o valor da base: '))
    altura = parseInt(prompt('Informe o valor da altura: '))

    area = base * altura

    console.log(`À area do retangulo é ${area}`)

    opcao = prompt('Deseja continar: S - Sim | N - Não ')

    if (opcao.toUpperCase() === 'N') {
        continua = false
    }
}




