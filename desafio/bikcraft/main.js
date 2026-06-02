console.log('Executando main.js')

// BUSCAR TODAS AS BICICLETAS - querySelectorAll
const bikes = document.querySelectorAll('.bike') // [bike1, bike2, bike3, ...]

console.log('main.js::bikes')
console.log(bikes)

bikes.forEach((bike) => {
    const precoBike = bike.querySelector('.preco-bike').textContent
    const nomeBike = bike.querySelector('.nome-bike').textContent
    const imgBike = bike.querySelector('.foto-bike').src
    console.log(nomeBike)
    console.log(precoBike)
    console.log(imgBike)
})

// bikes.forEach((bike) => {
//     console.log('Bicicleta:')
//     console.log(bike)
//     const nomeBicicleta = bike.querySelector('.nome-bike')
//     const precoBicicleta = bike.querySelector('.preco-bike')
//     console.log('Nome da bicicleta:')
//     console.log(nomeBicicleta.textContent)
//     console.log('Preço da bicicleta:')
//     console.log(precoBicicleta.textContent)
// })

// const numeros = [1, 2, 3, 4, 5]

// numeros.forEach((numero) => {
//     console.log(numero)
// })