// Verificar que todos os numeros são positivos no array
const numeros = [1, 2, 3, 4, 5]

// const resultado = numeros.filter(numero => numero > 0) // Resposta possível: sempre vai ser um novo array
// console.log(resultado)
// if (resultado.length === numeros.length) {
//     console.log("Este array só tem numeros positivos")
// } else {
//     console.log("Este tem tambem numeros negativos ou 0")
// }
const resultado = numeros
    .map(numero => numero * -1)
    .every(numero => numero > 0) // Resposta possivel: true ou false
if (resultado) {
    console.log("Este array só tem numeros positivos")
} else {
    console.log("Este array tem tambem numeros negativos ou 0")
}