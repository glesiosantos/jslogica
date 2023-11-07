const prompt = require('prompt-sync')()

var nota1, nota2, nota3, mediaExercicio, mediaAprov

nota1 = parseFloat(prompt('Informe a nota 01: '))
nota2 = parseFloat(prompt('Informe a nota 02: '))
nota3 = parseFloat(prompt('Informe a nota 03: '))
mediaExercicio = parseFloat(prompt('Informe a Média de Exercicio: '))

mediaAprov = (nota1 + nota2 * 2 + nota3 * 3 + mediaExercicio) / 7

if (mediaAprov >= 9) {
    console.log(`Aluno com média de aproveitamento ${mediaAprov.toFixed(2)} tem o conceito "A"`)
} else if (mediaAprov >= 7.5 && mediaAprov < 9) {
    console.log(`Aluno com média de aproveitamento ${mediaAprov.toFixed(2)} tem o conceito "B"`)
} else if (mediaAprov >= 6.0 && mediaAprov < 7.5) {
    console.log(`Aluno com média de aproveitamento ${mediaAprov.toFixed(2)} tem o conceito "C"`)
} else {
    console.log(`Aluno com média de aproveitamento ${mediaAprov.toFixed(2)} tem o conceito "D"`)
}