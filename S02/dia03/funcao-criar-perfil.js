// Para executar: node funcao-criar-perfil.js

// Adicionando 3 parametros a funcao criar perfil, sendo 1 opcional.
function criarPerfil(nome, idade, cidade = "Não informada") {
    console.log("Nome: " + nome)
    console.log("Idade: " + idade)
    console.log("Cidade: " + cidade)
    console.log("Estado: SC")
    console.log("---")
}

criarPerfil("Yan", 33, "Florianópolis")