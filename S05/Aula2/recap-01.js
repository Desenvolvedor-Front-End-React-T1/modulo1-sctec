class Produto {
    nome = ''
    codigoBarras = ''
    preco = 0
    constructor(nome, codigoBarras, preco) {
        this.nome = nome
        this.codigoBarras = codigoBarras
        this.preco = preco
    }

    mudarPreco(novoPreco) {
        this.preco = novoPreco
    }

    vender() {
        /* Chamo uma API onde eu envio o codigo de barras e a quantidade que eu estou vendendo */
        console.log(`O produto ${this.nome} (${this.codigoBarras}) foi vendido por ${this.preco}.`)
    }

    trocar() {
    }
}

/**Construir produtos */
const produtoA = new Produto("Biscoito Trakinas", "100900", 4.35)
const produtoB = new Produto("Biscoito Maizena", "100901", 2.99)
produtoB.mudarPreco(3.99)
produtoA.vender()
produtoB.vender()



// {
//     nome: '',
//     codigoBarras: '',
//     preco: 0
// }

// function cadastrarProduto(nome, codigoBarras) {
//     // cadastro
// }

// cadastrarProduto("nome do produto", "codigo de barras")