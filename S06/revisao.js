// const pessoa = { nome: 'Jose', idade: 45, filhos: ['Maria'] }
// const pessoas = [
//     pessoa,
//     { nome: 'João', idade: 30, filhos: ['Ana', 'Carlos'] },
//     { nome: 'Maria', idade: 25, filhos: ['Beatriz'] },
//     { nome: 'Pedro', idade: 35, filhos: ['Carlos'] }
// ]

// // // METODOS DE ARRAYS (foreach, map, filter, find)
// // pessoas.forEach((element) => {
// //     // console.log(element)
// //     console.log(element.filhos)
// // })

// console.log(
//     pessoa
// )

// console.log(pessoas[0])

class Pessoa {
    constructor(nome, idade, filhos) {
        this.nome = nome
        this.idade = idade
        this.filhos = filhos
    }
}

const jose = new Pessoa('Jose', 45, ['Maria'])  
const pedro = new Pessoa('Pedro', 35, ['Carlos'])  
const joao = new Pessoa('João', 30, ['Ana', 'Carlos'])  
const maria = new Pessoa('Maria', 25, ['Beatriz'])  

const pessoas = [
    jose, 
    pedro,
    joao,
    maria
]

pessoas.push(new Pessoa('Ana', 20, []))

/**
 * pop -> remove o ultimo item
 * shift -> remove o primeiro item
 * splice -> remove um item específico (em qualquer posição)
 */
console.log(
    pessoas.filter(pessoa => pessoa.nome !== "Ana")  
)

// console.log(
//     pessoas.filter(pessoa => pessoa.filhos.includes('Carlos'))
// )

