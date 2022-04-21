// Nome do aluno - nota 1 - nota 2 - média - Aprovado/Reprovado

var nomes = ["Igor", "José", "Maria"]
var notaA = [1.0, 6.5, 9.5]
var notaB = [8.0, 7.0, 8.5]


function media(n1, n2) {
    return (n1 + n2) / 2
}

function AprovReprov(n1, n2) {
    if (media(n1, n2) <= 7) {
        return "Reprovado"
    } else {
        return "Aprovado"
    }
}


for (let c = 0; c < nomes.length; c++) {
    console.log(nomes[c] + " => Notas: " + notaA[c] + " / " + notaB[c] + "\nMédia: " + media(notaA[c], notaB[c]) + " " + AprovReprov(notaA[c], notaB[c]).toUpperCase() + "\n");
    
}