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


// ejercicio 9
function mostrarMsj() {
    const msj = document.getElementById('msjOculto')
    const btn = document.getElementById('btnMostrarMsj')

    if (msj.style.display === "none") {
        msj.style.display = "block"
        btn.textContent = "Ocultar"
    } else {
        msj.style.display = "none"
        btn.textContent = "Mostrar"
    }
}

// ejercicio 10
function actualizarTitulo() {
    const titulo = document.getElementById('titulo')
    const input = document.getElementById('inputTitulo')

    titulo.textContent = input.value
}

// ejercicio 11
const azul = "blue"
const blanco = "white"
function aplicarEstilos() {
    const parrafos = document.getElementsByClassName('parrafosEjercicicio11')
    for (let i = 0; i < parrafos.length; i++) {
        parrafos[i].style.backgroundColor = azul
        parrafos[i].style.color = blanco
    }
}

// ejercicio 12
function validarForm(event) {
    event.preventDefault()
    const inputNombre = document.getElementById('inputNombre')
    const inputEmail = document.getElementById('inputEmail')
    const msjForm = document.getElementById('msjForm')

    if (inputNombre.value === "" || inputEmail.value === "") {
        msjForm.textContent = "Por favor, complete todos los campos."
        msjForm.style.color = "red"
    } else {
        msjForm.textContent = "Formulario enviado correctamente."
        msjForm.style.color = "green"
    }

}


//ejercicio 13
function listaTareas() {
    const lista = document.getElementById('listaTareas')
    const tarea = document.getElementById('inputTarea')

    const li = document.createElement('li')
    li.textContent = tarea.value

    const btnTachar = document.createElement('button')
    btnTachar.textContent = "Tachar"

    btnTachar.onclick = function () {
        li.classList.toggle('tachado')
    }

    li.appendChild(btnTachar);
    lista.appendChild(li)
    input.value = ""

}