const prompt = require("prompt-sync")()

function exibirMenu() {
    console.log("1 - Registrar atividade")
    console.log("2 - Ver historico")
    console.log("3 - Ver resumo")
    console.log("0 - Sair")
}

let opcao
let opcoesValidas = ["1", "2", "3", "0"]
do {
    exibirMenu()

    opcao = prompt("Escolha uma opção do menu (Informe em número): ")

    if (!opcoesValidas.includes(opcao)) {
        console.log("Opção invalida")
    }

} while (opcao !== "0")

console.log("Programa encerrado")