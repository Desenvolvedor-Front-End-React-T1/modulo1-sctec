class Veiculo {
    velocidade = 0
    constructor() {        
    }

    acelerar() {
        this.velocidade += 1
    }

    frear() {
        this.velocidade -= 1
    }
}

const veiculo1 = new Veiculo()

if (KEY.W) {
    veiculo1.acelerar()    
}

if (KEY.S) {
    veiculo1.frear()
}

// wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww