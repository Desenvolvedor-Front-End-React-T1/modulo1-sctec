const numeroStr = "10"
console.log(typeof numeroStr) // string
const numeroInteiro = Number(numeroStr) // -> 5
console.log(typeof numeroInteiro) // number
console.log(numeroInteiro)

if (Number.isNaN(numeroInteiro)) {
    console.log("Valor invalido, coloque apenas numeros")
}