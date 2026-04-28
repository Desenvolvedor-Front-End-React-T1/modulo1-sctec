// Para executar: node funcoes-parametros.js

function soma(numero1, numero2) {
   return numero1 + numero2
}

let resultado = soma(5, 3)

console.log(`Resultado da soma: ${resultado}`)
console.log(`Resultado da soma (8+8): ${soma(8, 8)}`)


function saudacao(nome = 'Visitante') {
    console.log(`Olá, ${nome}!`)
}

saudacao()
saudacao("Yan")


function criarPerfil(nome, idade, cidade = "Não informada") {
    console.log("Nome: " + nome)
    console.log("Idade: " + idade)
    console.log("Cidade: " + cidade)
    console.log("Estado: SC")
    console.log("---")
}

criarPerfil("Yan", 25, "Florianópolis")


// Retorna um boolean (true/false)
function ehMaiorDeIdade(idade) {
    return idade >= 18 //-> true ou false
}

console.log(ehMaiorDeIdade(20))  // true
console.log(ehMaiorDeIdade(15))  // false