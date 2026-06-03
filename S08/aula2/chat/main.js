const btnLaranja = document.getElementById('btnLaranja');
const btnAzul = document.getElementById('btnAzul');
const btnVerde = document.getElementById('btnVerde');

const userQuestion = document.querySelector('.user-question')

let corAplicada = 'orange'

btnLaranja.addEventListener('click', () => {
    userQuestion.classList.remove(corAplicada)
    userQuestion.classList.add('orange')
    corAplicada = 'orange'
})

btnAzul.addEventListener('click', () => {
    userQuestion.classList.remove(corAplicada)
    userQuestion.classList.add('blue')
    corAplicada = 'blue'
})

btnVerde.addEventListener('click', () => {
    userQuestion.classList.remove(corAplicada)
    userQuestion.classList.add('green')
    corAplicada = 'green'
})