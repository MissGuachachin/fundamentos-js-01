// Ejercicio 2: Operadores y Condicionales

// 1. Declara una variable `puntuacion`.
const puntuacion = 90

// 2. Condicional if/else.
if (puntuacion >= 70) {
    console.log(`Aprobado`)
} else {
    console.log(`Reprobado`)
}

// 3. Declara una variable `dia`.
const dia = 5

// 4. Switch para días de la semana.
switch (dia) {
    case 1:
        console.log('Lunes')
        break
    case 2:
        console.log('Martes')
        break
    case 3:
        console.log('Miércoles')
        break
    case 4:
        console.log('Jueves')
        break
    case 5:
        console.log('Viernes')
        break
    case 6:
        console.log('Sábado')
        break
    case 7:
        console.log('Domingo')
        break
    default:
        console.log('Día inválido')
}

// 5. Declaración una variable temperatura.
const temperaturaCelsius = 36

// 6. Declaración de función convertirFahrenheit.
function convertirFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32
}

// 7. Utiliza la función convertirFahrenheit.
const temperaturaFahrenheit = convertirFahrenheit(temperaturaCelsius)
console.log(`Temperatura en Fahrenheit: ${temperaturaFahrenheit}`)

