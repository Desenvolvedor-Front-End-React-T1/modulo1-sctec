//   Crie uma classe Pizza com:
//   - Atributos: sabor, tamanho (P, M ou G) e borda (true ou false) OK
//   - Método calcularPreco() que retorna o preço baseado no tamanho: OK
//     - P = R$ 25,00
//     - M = R$ 35,00
//     - G = R$ 50,00
//     - Se tiver borda recheada, adiciona R$ 8,00
//   - Método resumo() que exibe no console todas as informações e o preço final. `Pizza ${tamanho} com/sem borda custará R$ ${valor} reais`

class Pizza {
    sabor = ''
    tamanho = ''
    borda = false
    
    constructor(sabor, tamanho, borda = false) { // new Pizza("Calabresa", "G", true)
        this.sabor = sabor
        this.tamanho = tamanho
        this.borda = borda
    }

    calcularPreco() {
        /**
         * Quando o tamanho:
         * 
         * P => 25.00
         * M => 35.00
         * G => 50.00
         *  
         * */

        /**
         * Se tem borda = +8.00
         * Caso não tenha = 0
         */
        let preco = 0
        if (this.tamanho === "P") {
            preco = 25.00
        } else if (this.tamanho === "M") {
            preco = 35.00
        } else { // caso G
            preco = 50
        }

        if (this.borda) {
            preco += 8
        }

        return preco
    }

    resumo() {
        console.log(`
            Pizza: ${this.sabor}
            Tamanho: ${this.tamanho}
            Borda recheada: ${this.borda ? "Sim" : "Não"}
            Preço final: R$ ${this.calcularPreco().toFixed(2)}
        `)
    }
}

const pizza = new Pizza("calabresa", "G", false)
pizza.resumo()
