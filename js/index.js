// Ejercicio 1
console.log('ejercicio 1')
let numerosPar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function esPar() {
    return numerosPar.filter(a => {
        return a % 2 === 0
    })
}

console.log(esPar())

// ejercicio 2
console.log('ejercicio 2')

let numerosPromedio = [1, 2, 3, 4]

function promedio() {
    let suma = 0

    for (let i = 0; i < numerosPromedio.length; i++) {
        suma += numerosPromedio[i]
    }

    return suma / numerosPromedio.length
}

console.log(promedio())

// ejercicio 3

let arrayEjercicioTres = ["hola", "como", "estas"]

const imprimirConRetraso = () => {
    setTimeout(() => {
        console.log('ejercicio 3')
        arrayEjercicioTres.forEach(a => {
            console.log(a)
        })
    }, 2000)
}

imprimirConRetraso()


// ejercicio 4
console.log('ejercicio 4')

function sumar(num1, num2) {
    return num1 + num2
}

function restar(num1, num2) {
    return num1 - num2
}

function multiplicar(num1, num2) {
    return num1 * num2
}

function operacion(num1, num2, callback) {
    return callback(num1, num2)
}

console.log("Sumar:")
console.log(operacion(2, 2, sumar))
console.log("Restar:")
console.log(operacion(2, 2, restar))
console.log("Multiplicar:")
console.log(operacion(5, 2, multiplicar))


// ejercicio 5
console.log("ejercicio 5")

function botonMsj() {
    let msj = document.getElementById('msjSpan')

    msj.innerHTML = `
    <span>Saludo</span>
    `
}


// ejericicio 6
console.log("ejercicio 6")
const colores = ["red", "blue", "green"]
let indice = 0
function btnColorFondo() {

    document.body.style.backgroundColor = colores[indice]
    indice++

    if (indice >= colores.length)
        indice = 0
}


// ejercicio 7
console.log("ejercicio 7")

let contador = 0

function incrementar() {
    contador++
    document.getElementById('contador').innerText = contador
}

function decrementar() {
    contador--
    document.getElementById('contador').innerText = contador
}

// ejercicio 8
const rojo = "red"

function btnTextoParrafo() {
    const p = document.getElementsByClassName('parrafos')

    for (let i = 0; i < p.length; i++) {
        p[i].style.color = rojo
    }
}