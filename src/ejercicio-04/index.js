const hora = 20

if (hora < 12) {
    console.log("Buenos días")
} else if (hora >= 12 && hora < 18) {
    console.log("Buenas tardes")
} else {
    console.log("Buenas noches")
}  

function esMayorDeEdad(edad) {
    return edad >= 18
}

const edadPersona = 20
const esEstudiante = 20

if (esMayorDeEdad(edadPersona) && esEstudiante) {
    console.log("Es mayor de edad y estudiante")
} else {
    console.log("No válido")
}

function esVocal(letra) {
    const vocales = `aeiouAEIOU`
    return vocales.includes(letra)
}

const vocalCaracter = 'O'
if (esVocal(vocalCaracter)) {
    console.log(`${vocalCaracter} es una vocal`)
} else {
    console.log(`${vocalCaracter} no es una vocal`)
}