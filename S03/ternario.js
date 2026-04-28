// const objetivo = (se algo acontecer) ? faça isso : faça aquilo
// const resultado = (idade >= 18) ? 'Maior de idade' : 
//                                 'Menor de idade'   
// console.log(resultado)

const identificarMaioridade = (idade) => 
    (idade >= 18) ? console.log('Maior de idade') : console.log('Menor de idade')


/**
 * o codigo acima substitui todo o codigo abaixo
 function identificarMaioridade(idade) {
    if (idade >= 18) {
    console.log('Maior de idade')   
    } else {
        console.log('Menor de idade')
    }
}

identificarMaioridade(20)
 */