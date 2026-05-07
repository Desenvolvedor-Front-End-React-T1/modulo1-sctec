// Objetivo do MAP -> transformar dados e sempre vai criar um novo array

const precos = [100, 90, 250, 50]
// precos.map((preco) => preco * 0.9)
const comDesconto = precos.map((preco) => {
    // return preco * 0.9
    if (preco > 100) return preco * 0.9
    return preco
})

console.log("Preços originais")
console.log(precos)
console.log("Preços com desconto")
console.log(comDesconto)

const usuarios = [
    { nome: "Yan", idade: 33 },
    { nome: "Ana", idade: 26 },
    { nome: "Joao", idade: 42 }
]

const nomes = usuarios.map((usuario) => {
    return usuario.nome
})

console.log(nomes) // ["Yan", "Ana", "Joao"]

// Exemplo 3 de map


const produtos = [
    { nome: "Notebook", preco: 3000 },
    { nome: "Mouse", preco: 100 },
    { nome: "Teclado", preco: 129 },
]

const precosFormatados = produtos.map((produto) => {
    return {
        nome: produto.nome,
        valorReal: `R$ ${produto.preco}`,
        valorDolar: ` ${produto.preco * 5} usd`,
    }
})

console.log(precosFormatados)