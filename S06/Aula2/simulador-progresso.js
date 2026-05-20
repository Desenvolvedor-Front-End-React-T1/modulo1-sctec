const documentoGB = 1
let jaBaixou = 0.01

const intervalo = setInterval(() => {
    jaBaixou += 0.05
        
    const porcentagemJaBaixou = (jaBaixou / documentoGB) * 100
    console.log(`Progresso: ${porcentagemJaBaixou.toFixed(2)}%`)

    if (porcentagemJaBaixou >= 100) {
        clearInterval(intervalo)
    }

}, 1000)