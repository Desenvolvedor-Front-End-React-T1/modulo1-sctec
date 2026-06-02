console.log('BIKCRAFT');
const btnEscolha = document.getElementById('btn-escolha')
// document.querySelector('#btn-escolha') // outra forma de selecionar o elemento
// document.querySelector('.button') // outra forma de selecionar o elemento
// document.querySelector('button') // outra forma de selecionar o elemento

const subtituloIntro = document.getElementById('subtitulo-introducao')

// console.log('BOTAO ENCONTRADO')
// btnEscolha.textContent = 'Escolha a sua bike'
// subtituloIntro.textContent = 'AQUI TEM UM TEXTO'

// CAPTURANDO TODAS AS BICICLETAS
const bikes = document.querySelectorAll('.bike')
console.log('BICICLETAS ENCONTRADAS: ', bikes.length)
// console.log(bikes)


/**
 * ADICIONAR EVENTOS
 * 1 - SELECIONAR O ELEMENTO NO HTML (DOM)
 * 2 - FALAR QUAL O EVENTO QUE A GENTE QUER CAPTURAR (click, mover mouse, digitacao, scroll)
 * 3 - O QUE FAZER QUANDO AQUELE EVENTO ACONTECER (callback)
 */

btnEscolha.addEventListener('click', (event) => {
    alert('Houve clique no botao')
})