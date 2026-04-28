const desconto_percentual = 0.10 // 10%

/**
 * 1 - Valor de compra
 * 2 - Jogo esse valor para uma funcao
 * 3 - A funcao vai identificar se é maior ou menor que 100
 * 4 - Se for menor ou igual a 100, retorna o valor original
 * 5 - Se o valor for maior que 100, retorna o valor com desconto
 * 6 - Imprime (console.log) o valor total a pagar
 */

function calcularVoltarTotal(valor_compra) {
    if (valor_compra <= 100) return valor_compra
    /**
     * Aplicar desconto
     * Para saber o valor em reais do desconto: valor_compra * desconto_percentual
     * Para saber o valor a pagar: valor_compra - (valor_compra * desconto_percentual)
     */
    const desconto_reais = valor_compra * desconto_percentual // 200 reais * 0.10 = 20 reais
    return valor_compra - desconto_reais // 200 reais - 20 reais = 180 reais
    /**
     * Outro modo:
     * return valor_compra * 0.90 -> valor em reais que o cliente vai pagar
     */

    /**
     if (valor_compra <= 100) {
     return valor_compra
     } else {
        const desconto_reais = valor_compra * desconto_percentual
        return valor_compra - desconto_reais
     } */
 }

console.log(`Valor total a pagar: R$ ${calcularVoltarTotal(50)}`) 
console.log(`Valor total a pagar: R$ ${calcularVoltarTotal(100)}`) 
console.log(`Valor total a pagar: R$ ${calcularVoltarTotal(200)}`) 


// const calcularValorTotal = (valor_compra) => valor_compra * 0.90

const calcularValorTotalTernario = (valor_compra) =>
    valor_compra <= 100 ? valor_compra : valor_compra * 0.90


console.log(`Valor total a pagar: R$ ${calcularValorTotalTernario(50)}`) 
console.log(`Valor total a pagar: R$ ${calcularValorTotalTernario(100)}`) 
console.log(`Valor total a pagar: R$ ${calcularValorTotalTernario(200)}`) 
