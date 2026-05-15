/**
 * Formas de Pagamentos -> valor a ser pago, destino da conta, processar()
 * - pix -> PIX de R$ xx.xx realizado -> origem do dinheiro, chave pix (destino), mandeiParaContaErrada()
 * - cartao de credito -> Pagamento no cartão XXX de R$ xx.xx aprovado -> numero do cartao e o estab. destino, naoFuiEu()
 * - boleto -> Boleto pago com sucesso -> ag/conta bancaria destino
 */
class FormaPagamento {
    valor = 0

    constructor(valor) {
        this.valor = valor
    }

    pagar() {
        console.log('Processando pagamento.')
    }
}

class Boleto extends FormaPagamento {
    nroBoleto = ""

    constructor(valor, nroBoleto) {
        super(valor)
        this.nroBoleto = nroBoleto
    }
    pagar() {
        console.log('Boleto pago com sucesso')
    }   
}

class Pix extends FormaPagamento {
    chavePixDestino = ""

    constructor(valor, chavePixDestino) {
        super(valor)
        this.chavePixDestino = chavePixDestino
    }
    pagar() {
        console.log(`Pix de R$ ${this.valor} realizado para a chave ${this.chavePixDestino}`)
    }
}

const contaLuz = new Boleto(150, "1234567")
const pagarJoao = new Pix(55, "joao@mail.com")
// contaLuz.pagar()
pagarJoao.pagar()