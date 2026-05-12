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


const personagens = [
    {
        nome: "Paladino",
        caracteristicaPrincipal: "força"
    }
]

const personagensCriados = []

function selecionarPersonagem(personagem) {
    return new Personagem(personagem.nome, personagem.caracteristicaPrincipal)
}

const p = selecionarPersonagem(personagens[0])
personagensCriados.push(p)


personagensCriados[0].bater()