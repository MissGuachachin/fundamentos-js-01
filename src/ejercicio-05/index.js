const mes = 1

switch (mes) {
    case 3:
    case 4:
    case 5:   
        console.log("Primavera") 
        break
    case 6:
    case 7:
    case 8:   
        console.log("Verano") 
        break
    case 9:
    case 10:
    case 11:   
        console.log("Otoño") 
        break
    case 12:
    case 1:
    case 2:   
        console.log("Invierno") 
        break
    default:
        console.log("Mes inválido")
}
function calcularDiasMes(mes) {
    switch (mes) {
        case 2:
            return 28
        case 4:
        case 6:
        case 9:
        case 11:
            return 30
        default:
            return 31
    }
}

const mesEspecifico = 9
console.log(`El mes ${mesEspecifico} tiene ${calcularDiasMes(mesEspecifico)} días.`)