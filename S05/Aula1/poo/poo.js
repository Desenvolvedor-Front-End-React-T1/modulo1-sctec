class Personagem {
    constructor(nome, caracteristicaPrincipal) {
    }

    correr() {
        console.log(" está correndo")
    }

    bater() {
        console.log("está batendo em algo")
    }

    nadar() {
        console.log("está nadando")
    }

    voar() {
        console.log("está voando")
    }
}

const personagem1 = new Personagem("Guerreiro Alfa", "força")
// const personagem2 = new Personagem("Guerreiro Beta", "velocidade")

personagem1.bater()


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