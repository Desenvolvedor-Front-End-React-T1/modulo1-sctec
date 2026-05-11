const prompt = require("prompt-sync")()


let opcoesValidas = ["0", "1", "2", "3", "4"]
// indices                      0         1           2        3       4
let exerciciosDisponiveis = ["Corrida", "Caminhada", "Ciclismo", "Remo", "Natação"]
let atividades = []

// // 1 - Exibir a lista de exercícios disponíveis (numerados) - Corrida, caminhada, ciclismo, remo, natação
function listarExercicios() {
    console.log(`
0 - Corrida
1 - Caminhada
2 - Ciclismo
3 - Remo
4 - Natação
    `)
}

listarExercicios()

exercicioEscolhido = prompt("Escolha um dos exercícios (Informe em número): ")

if (opcoesValidas.includes(exercicioEscolhido)) {
    console.log("Opção valida")    

    distancia = Number(prompt("Informe a distancia realizada (em km): "))
    tempoMinutos = Number(prompt("Informe o tempo gasto (em minutos): "))

    // if (Number.isNaN(distancia)) {
    //     console.log("Valor invalido para a distancia, coloque apenas numeros")
    // }

    // if (Number.isNaN(tempoMinutos)) {
    //     console.log("Valor invalido para o tempo, coloque apenas numeros")
    // }

    console.log(exerciciosDisponiveis[exercicioEscolhido])
    console.log(`Distancia: ${distancia} km`)
    console.log(`Tempo: ${tempoMinutos} minutos`)    

    const novaAtividade = {
        exercicio: exerciciosDisponiveis[exercicioEscolhido],
        distancia: distancia,
        tempoMinutos: tempoMinutos
    }

    atividades.push(novaAtividade)

    // console.log(`Parabéns esta é a sua atividade numero ${atividades.length}`)
    console.log("Atividade registrada com sucesso!");

} else {
    console.log("Opção invalida")
}