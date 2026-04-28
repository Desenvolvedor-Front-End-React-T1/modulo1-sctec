// Para executar: node funcao-saudacao-parametros.js

// declaracao de um parametro 'nome' sendo opcional (por estar atribuindo um valor padrao a ele)
function saudacao(nome = 'Visitante') {
    console.log(`Olá, ${nome}!`)
}

saudacao()
saudacao("Yan")

