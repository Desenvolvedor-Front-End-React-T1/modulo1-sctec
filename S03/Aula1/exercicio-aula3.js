var input = require('prompt-sync')();

const desconto = 0.10
function calculaValorTotal(preco) {
    if (preco <= 100) return preco
    return preco - (preco * desconto)
}

console.log(calculaValorTotal(50)) // 50
console.log(calculaValorTotal(150)) // 135

const valor = input("Qual valor da compra? ")
console.log("Valor total a pagar: " + calculaValorTotal(parseFloat(valor)))