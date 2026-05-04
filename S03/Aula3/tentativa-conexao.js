// Tenta conectar ao mundo/servidor (do...)
//                         while (!conectado)

let conectado = false
let count = 0

do {
    console.log('Tentando conectar ao mundo/servidor do jogo X')
    if (count === 3) {
        conectado = true
    }  
    count++
} while (!conectado)

console.log('Conectado')