const pessoa = {
    // propriedade: valor (chave-valor)
    nome: "Yan",
    idade: 33,

    endereco: {
        rua: "",
        bairro: "",
        numero: ""
    }
}

console.log(`${pessoa.nome} tem ${pessoa.idade} anos`)
// console.log(pessoa.nome + ' tem ' + pessoa.idade + ' anos')
console.log(`${pessoa["nome"]} tem ${pessoa["idade"]} anos`)

// Adicionando nova propriedade
pessoa["cor_olho"] = "castanho"
// console.log(pessoa)
// Removendo uma propriedade
delete pessoa.endereco // pessoa["endereco"] 

//  Mudando o valor de uma propriedade
pessoa["idade"] = 34

// console.log(pessoa)

console.log(
    Object.keys(pessoa)
)

console.log(pessoa)
// console.log(
//     Object.values(pessoa)
// )


// // Fazer um exemplo com array
// objeto = {
//     cargo: "",
//     status: ""
// }

// const propriedadesRemover = ["cargo", "status"]

// propriedadesRemover.forEach(prop => delete objeto[prop])