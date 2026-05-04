const prompt = require("prompt-sync")()

let opcao = "0"

do {
    // ...
    console.log("Menu de opções:")
    console.log("1 - Somar")
    console.log("2 - Subtrair")
    console.log("3 - Multiplicar")
    console.log("4 - Dividir")
    console.log("0 - Sair")

    opcao = prompt("Digite a opção desejada: ")
} while (opcao !== "0")