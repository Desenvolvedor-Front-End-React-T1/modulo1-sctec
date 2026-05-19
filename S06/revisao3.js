const pessoas = [
    { nome: 'João', idade: 30, filhos: ['Ana', 'Carlos'] },
    { nome: 'Maria', idade: 25, filhos: ['Beatriz'] },
    { nome: 'Pedro', idade: 35, filhos: [] }
]

// map -> transformar dado

// OBJETIVO: FILTRAR PESSOAS QUE TEM FILHOS

function calcularQtdFilhos(pessoa) {
    return pessoa.filhos.length
}

const resultado = pessoas.map(item => ({ 
    nome: item.nome,
    // idade: item.idade,
    // filhos: item.filhos,
    qtdFilhos: calcularQtdFilhos(item)  
}))


console.log(resultado.find(pessoa => pessoa.qtdFilhos == 2))