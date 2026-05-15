// Crie uma classe `ContaBancaria` com:

// Atributos: `titular` e `saldo` (inicia em 0)
// Método `depositar(valor)` que soma o valor ao saldo
// Método `sacar(valor)` que subtrai do saldo, mas só se tiver saldo suficiente. Se não tiver, exibir "Saldo insuficiente"
// Método `extrato()` que exibe:  `Titular ${nome} | Saldo: R$ ${valor}`

// Teste criando uma conta, depositando 500, sacando 200 e mostrando o extrato.
// Evolução em aula: Transformar em um modelo cadastrando várias pessoas e usando import/export       para separar em vários arquivos.

class ContaBancaria {
    titular = '' // nome de uma pessoa
    saldo = 0 // 0

    constructor(_titular, _saldo) {
        this.titular = _titular
        this.saldo = _saldo
    }

    extrato() {
        console.log(`Titular ${this.titular} | Saldo: R$ ${this.saldo}`)
    }
    
    depositar(valorDeposito) {
        if (valorDeposito < 0) {
            return console.log("Não é permitido depositar valores negativos")
        }
        this.saldo += valorDeposito
    }

    sacar(valorSaque) {
        if (valorSaque < 0) {
            return console.log("Não é permitido sacar valores negativos")   
        }
        if (valorSaque > this.saldo) {
            return console.log('Você não tem saldo disponível para sacar este valor.')
        }
        this.saldo -= valorSaque
        console.log(`Foi efetuado o saque de R$ ${valorSaque} e seu novo saldo é ${this.saldo}`)
    }
}

const conta1 = new ContaBancaria('Yan', 1000)
const conta2 = new ContaBancaria('José', 3000)
// conta1.depositar(300)
// conta1.extrato()
conta2.extrato()