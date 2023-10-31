const numero = 99

const tipoNumero = numero > 0 ? `positivo` : `negativo o cero`
console.log(`El número es ${tipoNumero}`)

const cadena = "Hola BlockMaker"

const longitudCadena = cadena.length > 5 ? "larga" : "corta"
console.log(`La cadena es ${longitudCadena}`)

function esPar(numero) {
    return numero % 2 === 0
}

const numeroPar = 4
if (esPar(numeroPar)) {
    console.log(`${numeroPar} es par`)
} else {
    console.log(`${numeroPar} es impar`)
}