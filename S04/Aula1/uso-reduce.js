// Casos de uso - reduce:
// Somar todos os preços de um carrinho de compras
// Calcular a média de notas de uma turma
// Contar quantas vezes um valor aparece em uma lista

const notas = [10, 7.5, 6, 9, 5]
// let soma = 0
// for (let i = 0; i < notas.length; i++) {
//     soma = notas[i] + soma
// }

// console.log(soma / notas.length)

const soma = notas.reduce((acumulador, nota) => { return acumulador + nota }, 0)

console.log(soma / notas.length)

// Fluxo:
// NOTAS: [10, 7.5, 6, 9, 5]
// ACUMULADOR: 0

//             VALOR - ACUMULADOR - PREVIA
// Execucao 1 - 10   -    0       -  10
// Execucao 2 - 7.5  -   10       - 17.5
// Execucao 3 -  6   -   17.5     -  23.5
// Execucao 4 - 9    - 23.5       - 32.5
// Execucao 5 - 5   -   32.5      - 37.5

// SOMA COMPLETA DO ACUMULADOR / qtd de ocorrencias
// 37.5 / 5 = 7.5

