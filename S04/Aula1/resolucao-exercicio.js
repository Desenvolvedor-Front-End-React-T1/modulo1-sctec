const carrinho = [
    { nome: "Camiseta", preco: 49.90 },
    { nome: "Calça", preco: 89.90 },
    { nome: "Tênis", preco: 199.90 },
    { nome: "Boné", preco: 29.90 },
    { nome: "Meia", preco: 15.90 }
]

// metodo 1 - via for
let soma = 0
for (let i = 0; i < carrinho.length; i++) {
    soma = soma + carrinho[i].preco
}
console.log(`O valor total da compra é: R$ ${soma}`)

// metodo 1 - via reduce
const somaReduce = carrinho.reduce((acumulador, item) => acumulador + item.preco)

// const divisao = (a, b) => a/b

// const divisao = (a, b) => {
//     if (b === 0) return 'Nao é permitido dividir por zero'
//     const resultado = a / b
//     return resultado
// }

console.log(`O valor total da compra é: R$ ${somaReduce}`)