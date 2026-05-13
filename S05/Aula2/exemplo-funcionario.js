/**
 * REGRAS do programa:
 * 1 - Classe funcionario com nome e salario
 * 2 - Classe diretor herdando de funcionario
 * 3 - O diretor tem um PLR * 10 o salario dele
 * 4 - O funcionario recebe o proprio salario de PLR
 * 5 - Apenas o diretor tem um bonus mensal de R$ 5.000 
 */
// MORTAIS
class Funcionario {
    nome = ''
    salario = 0
    constructor(nome, salario) {
        this.nome = nome
        this.salario = salario
    }

    verRendimentoMes() {
        console.log(`O funcionário ${this.nome} tem a receber ${this.salario}`)
    }

    distribuirPLR() {
        console.log(`O funcionário ${this.nome} vai receber R$ ${this.salario} de PLR`)
    }
}

class Diretor extends Funcionario {   
    bonusMensal = 0

    constructor(nome, salario, bonus) {
        super(nome, salario)
        this.bonusMensal = bonus
    }
   
    distribuirPLR() {
        console.log(`O diretor ${this.nome} vai receber R$ ${this.salario*10} de PLR`)
    }

    verRendimentoMes(mes) {
        console.log(`O funcionário ${this.nome} tem a receber ${this.salario+this.bonusMensal}`)
    }
}

// PJ -> MEI
class PJ extends Funcionario {
    cnpj = ''
    constructor(nome, salario, cnpj) {
        super(nome, salario)
        this.cnpj = cnpj
    }
}

const funcionarioA = new Funcionario('João', 9000)
const diretorA = new Diretor('Ricardo', 25000, 5000)
const diretorB = new Diretor('Jose', 25000, 15000)
const autonomoPJ = new PJ("Carla", 12000, '100.00.000')
// funcionarioA.distribuirPLR()
diretorA.verRendimentoMes(12)