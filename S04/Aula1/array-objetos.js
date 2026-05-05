const pessoas = [
    {
        nome: "Yan",
        idade: 33
    },
    {
        nome: "Maria",
        idade: 8
    }
]

// console.log(pessoas[0])

const produtos = [
    {
        nome: "Veja",
        valor: 33,
        estoque: 8
    },
    {
        nome: "Omo",
        valor: 8,
        estoque: null
    }
]

// Adicionando um novo produto
produtos.push(
    {
        nome: "Biscoito",
        valor: 8,
        estoque: 15
    }
)


// Uso do for com array de objetos
for (let i = 0; i < produtos.length; i++) {
    console.log(produtos[i].nome)
}

