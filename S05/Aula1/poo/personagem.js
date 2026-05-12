class Personagem {
    nome = ""
    caracteristicaPrincipal = ""
    constructor(nome, caracteristicaPrincipal) {
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
        console.log(this.nome + " está voando")
    }
}

module.exports = Personagem