/**
 * PRODUTO
 * preco 
 * custo
 * lucro -> BOM, RUIM, EXCELENTE, PESSIMA
 * 
 * lucro = receita - custos
 * margem de lucro = (lucro / receita) * 100 -> transforma em porcentagem
 * 
 * CLASSIFICAR:
 * EXCELENTE -> margem de lucro >= 20%
 * BOM -> margem de lucro 
 * RUIM -> margem de lucro 
 * PESSIMO -> margem de lucro < 10%
 */

let preco = 500
let custo = 90

let lucro = preco - custo
let margemLucro = (lucro / preco) * 100 // porcentagem

function classificarMargemLucro(margem) {
    // return margem >= 15 ? 'Bom' : 'Ruim'
    if (margem >= 20) return 'Excelente'
    if (margem >= 15 && margem < 20) return 'Bom'
    if (margem >= 10 && margem < 15) return 'Ruim'
    return 'Péssima'
}
// if (margemLucro >= 20) {
//     console.log('Margem excelente')
// } else if (margemLucro >= 15 && margemLucro < 20) {
//     console.log('Margem boa')
// } else if (margemLucro >= 10 && margemLucro < 15) {
//     console.log('Margem ruim')
// } else {
//     console.log('Margem péssima')
// }
// console.log(`margemLucro: ${margemLucro}%`)