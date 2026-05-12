class Personagem {  
    nome = ""
    caracteristicaPrincipal = "" 

    constructor(nome, caracteristicaPrincipal = "força") {
        this.nome = nome
        this.caracteristicaPrincipal = caracteristicaPrincipal
    }

    correr() {
        console.log(this.nome + " está correndo")
    }

    bater() {
        console.log(this.nome + " está batendo em algo")
    }

    nadar() {
        console.log(this.nome + " está nadando")
    }

    voar() {
        console.log(this.nome +  " está voando")
    }
}

const personagem1 = new Personagem("Guerreiro Alfa", "força")
const personagem2 = new Personagem("Guerreiro Beta")






// const personagem = {
//     nome: "Guerreiro Alfa",
//     caracteristicaPrincipal: "força",
//     correr: () => {
//         return ' está correndo'
//     }
// }

// const personagem2 = {
//     nome: "Guerreiro Beta",
//     caracteristicaPrincipal: "velocidade",
//     correr: () => {
//         return ' está correndo'
//     }
// }

// const personagem3 = {
//     nome: "Guerreiro Beta",
//     caracteristicaPrincipal: "velocidade",
//     correr: () => {
//         return ' está correndo'
//     }
// }


// console.log(`
//     O ${personagem.nome} ${personagem.correr()}
// `)