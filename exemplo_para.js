const prompt = require('prompt-sync')()
// var contWhile = 1

var n

n = parseInt(prompt('Informe um número: '))

if (n === 0) {
    console.log('Informe um número maior que zero')
    n = parseInt(prompt('Informe um número maior que zero: '))
}

for (let cont = 1; cont <= n; cont++) {
    console.log(cont)
}

// while (contWhile <= n) {
//     console.log(cont)
//     contWhile++
// }

// Ler um valor N e imprimir todos os valores 
// inteiros entre 1(inclusive) e N(inclusive).
// Considere que o N será sempre maior que ZERO. 
