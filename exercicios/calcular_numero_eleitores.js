var totalEleitores, totalVotoBranco, totalVotoNulo, totalVotoValidos

totalEleitores = 1000
totalVotoBranco = 60
totalVotoNulo = 100
totalVotoValidos = totalEleitores - totalVotoBranco - totalVotoNulo

console.log(`Total de Votos Branco ${totalVotoBranco * 100 / 1000}%`)
console.log(`Total de Votos Nulos ${totalVotoNulo * 100 / 1000}%`)
console.log(`Total de Votos Válidos ${totalVotoValidos * 100 / 1000}%`)
console.log(`Totalizando ${totalEleitores} eleitore(s)`)
