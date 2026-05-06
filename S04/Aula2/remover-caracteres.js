const fruta = "maçã maçã"

/**
 * maca
 */

function tratarStrings(str) {
    return str.replaceAll('ç', 'c').replaceAll('ã', 'a')
}
const stringTratada = tratarStrings(fruta)
console.log(stringTratada)


let texto = "Hoje é dia 5"

let numeros = texto.match(/\d+/)

console.log(numeros)