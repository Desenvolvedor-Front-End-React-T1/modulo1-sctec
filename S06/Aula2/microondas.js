function esquentarComida(timerMS) {
    console.log('Esquentando comida por ' + timerMS + 'ms')

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ status: 'Comida esquentada', tempo: timerMS })
        }, timerMS)
    })

}

async function preparar() {
    console.log('Colocando comida no microondas')
    const resultado = await esquentarComida(10000) // Ponto de interrupcao ou "espera"
    console.log(resultado)
}

preparar()