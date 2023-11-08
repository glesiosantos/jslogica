const prompt = require('prompt-sync')()

var nomeFunc, anoNascFunc, anoTrabFunc, idadeFunc, tempoServico, continuar, opcao

continuar = true

while (continuar) {
    nomeFunc = prompt('Nome do funcionário: ')
    anoNascFunc = parseInt(prompt('Ano de nascimento: '))
    anoTrabFunc = parseInt(prompt('Ano de admissão: '))

    idadeFunc = 2023 - anoNascFunc
    tempoServico = 2023 - anoTrabFunc

    if (idadeFunc >= 60 && tempoServico >= 25) {
        console.log(`Sr(a) ${nomeFunc} tem ${idadeFunc} anos de idade e atua 
    à ${tempoServico} anos de serviços - Requer Aposentadoria`)
    } else if (idadeFunc >= 65) {
        console.log(`Sr(a) ${nomeFunc} tem ${idadeFunc} anos de idade e atua 
    à ${tempoServico} anos de serviços - Requer Aposentadoria`)
    } else if (tempoServico >= 30) {
        console.log(`Sr(a) ${nomeFunc} tem ${idadeFunc} anos de idade e atua 
    à ${tempoServico} anos de serviços - Requer Aposentadoria`)
    } else {
        console.log(`Sr(a) ${nomeFunc} tem ${idadeFunc} anos de idade e atua 
    à ${tempoServico} anos de serviços - Não Requer Aposentadoria`)
    }

    opcao = prompt('Deseja continuar? S - Sim | N - Não')
    if (opcao.toUpperCase() === 'N') {
        continuar = false
    }
}