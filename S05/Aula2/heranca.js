class Animal {
    nomeAnimal = ''
    constructor(nome) {
        this.nomeAnimal = nome
    }

    comer() {
        console.log("O animal está comendo")
    }
}

class Cachorro extends Animal {       
    latir() {
        console.log(`O ${this.nomeAnimal} está latindo`)
    }

    comer() {
       console.log("O cachorro está comendo ração") 
    }
}

class Gato extends Animal {
    miar() {
        console.log("O gato está miando")
    }
}

const cachorro = new Cachorro('Buzzy')
cachorro.latir()
cachorro.comer()