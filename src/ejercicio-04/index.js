const hora = 20

if (hora < 12) {
    console.log("Buenos días")
} else if (hora >= 12 && hora < 18) {
    console.log("Buenas tardes")
} else {
    console.log("Buenas noches")
}  // } else (hora >= 18) {
   //                     ^
// SyntaxError: Unexpected token '{'at internalCompileFunction (node:internal/vm:73:18)
// at wrapSafe (node:internal/modules/cjs/loader:1153:20)
// at Module._compile (node:internal/modules/cjs/loader:1205:27)
// at Module._extensions..js (node:internal/modules/cjs/loader:1295:10)
// at Module.load (node:internal/modules/cjs/loader:1091:32)
// at Module._load (node:internal/modules/cjs/loader:938:12)
// at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:83:12)
// at node:internal/main/run_main_module:23:47
// Node.js v20.9.0

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
    const vocales = "aeiouAEIOU"
    return vocales.includes(letra)
}

if (esVocal(vocalCaracter)) {
    console.log("${vocalCaracter} es una vocal")
} else {
    console.log("${vocalCaracter} no es una vocal")
}