function diaSemana(dia = 0) {
    switch (dia) {
        case 1:
            return 'Domingo';
        case 2:
            return 'Segunda-feira';
        case 3: 
            return 'Terça-feira';
        case 4:
            return 'Quarta-feira';
        case 5:
            return 'Quinta-feira';
        case 6:
            return 'Sexta-feira';
        case 7:
            return 'Sábado';
        default:
            return 'Dia inválido';
    }   
}    

// O código abaixo pode substituir todo código acima.
// function diaSemana(dia) {
//     if (dia === 1) return "Domingo"
//     if (dia === 2) return "Segunda-feira"
//     if (dia === 3) return "Terça-feira"
//     if (dia === 4) return "Quarta-feira"
//     if (dia === 5) return "Quinta-feira"
//     if (dia === 6) return "Sexta-feira"
//     if (dia === 7) return "Sábado"
//     return "Dia inválido" 
// }    
