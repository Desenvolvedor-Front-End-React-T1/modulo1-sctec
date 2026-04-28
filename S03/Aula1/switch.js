// Exemplo para leitura de semaforo
const cor = "vermelho"

switch (cor) {
    case "vermelho":
        console.log("Pare")
        break
    case "amarelo":
        console.log("Atenção")
        break
    case "verde":
        console.log("Siga")
        break
    default:
        console.log("Cor inválida")
}


const frutaConsumidor = "banana"

switch (frutaConsumidor) {
    case "maçã":
    case "uva":        
    case "banana":
        return console.log("Fruta disponivel")
    case "manga":
        return console.log("Fruta indisponivel")
    default:
        console.log("Fruta não encontrada")
}

