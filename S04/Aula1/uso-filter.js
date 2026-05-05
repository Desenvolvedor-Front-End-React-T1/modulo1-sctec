const produtos = [
    {
        nome: "Veja",
        valor: 12,
        estoque: 8
    },
    {
        nome: "Omo", // OMO , oMo, oMO, omo
        valor: 8,
        estoque: null
    },
    {
        nome: "Biscoito",
        valor: 9,
        estoque: 15
    },
    {
        nome: "Biscoito",
        valor: 8,
        estoque: 15
    }
]
// Encontrar os itens que derem match

// console.log(
//     produtos.find((produto) => produto.nome.toLocaleLowerCase() === "OMO".toLocaleLowerCase())
// )

// console.log(
//     produtos.find((produto) => produto.valor === 12)
// )

const resultado = produtos.filter((produto) => 
            produto.nome.toLocaleLowerCase() === "biscoito".toLocaleLowerCase() 
    )

console.log(`${resultado.length} resultados foram encontrados`)
console.log(resultado)