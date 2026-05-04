// let contador = 1

// while (contador <= 10) {
//     console.log(`While foi executado ${contador} vezes`)

//     contador++
// }


const prompt = require("prompt-sync")()

let senha = "abcdef"
while (senha !== "abcdef") {
    senha = prompt("Digite a senha: ")
}

console.log("Senha correta! Acesso permitido.")
