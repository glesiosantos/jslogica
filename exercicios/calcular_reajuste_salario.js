var salarioMensal, desconto, reajustePercentual, resultado

salarioMensal = 3000
reajustePercentual = 8
desconto = (salarioMensal * reajustePercentual) / 100
resultado = salarioMensal - desconto

console.log(`Seu salario de R$ ${salarioMensal.toFixed(2)}`)
console.log(`Desconto Folha R$ ${desconto.toFixed(2)}`)
console.log(`Seu salario será de R$ ${resultado.toFixed(2)}`)
