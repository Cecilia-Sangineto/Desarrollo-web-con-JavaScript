// ejercicio 1

let diccionario = [{
    palabra: "peregrino",
    definicion: "Persona Que anda o viaja por tierras extrañas que presentan dificultades.",
}, {
    palabra: "berenjena",
    definicion: "planta de fruto comestible, generalmente anual, del género Solanum dentro de la familia de las solanáceas",
}, {
    palabra: "bucle",
    definicion: "secuencia de instrucciones de código que se ejecuta repetidas veces.//Curva en forma de rizo que se forma en determinadas cosas. ",
}, {
    palabra: "estetoscopio",
    definicion: "Instrumento médico que sirve para explorar los sonidos producidos por los órganos de las cavidades del pecho y del abdomen.",
}, {
    palabra: "recoleccion",
    definicion: "Acción o actividad de recolectar los frutos de la tierra.//Conjunto de frutos recolectados.",
}]
 
let botonDef = document.querySelectorAll('button')[0]; // array de botones en la pos 1
let zonaDefinicion = document.getElementById('recuadroCeleste')

let element = document.createElement('p')
element.textContent = ``
zonaDefinicion.appendChild(element)

botonDef.addEventListener('click', () => {
    let palabra = document.getElementById('palabra').value;

    for (i = 0; i < diccionario.length; i++){    
        if (palabra == diccionario[i].palabra){
            element.textContent = `${diccionario[i].definicion}`
            break;
        }
        else
        { 
            element.textContent = "Lo sentimos, nuestro diccionario no dispone de esta esta definición por el momento" }
    }
})

//ejercicio 2
 
 
let botonComprar = document.querySelectorAll('button')[1]
let botonSacar = document.querySelectorAll('button')[2]
let zonaCarrito = document.querySelector('.circulo')
let cantidadComprada = document.querySelector('.circulo').textContent
let precio = document.querySelector('span').textContent
let zonaTotal = document.querySelector('.total')
 
botonComprar.addEventListener('click', () => {
 
 
    cantidadComprada++
    zonaCarrito.textContent = `${cantidadComprada}`
    zonaTotal.textContent = `TOTAL: ${cantidadComprada * precio}`
})
 
botonSacar.addEventListener('click', () => {
 
    if (cantidadComprada == 0){
        window.alert("No se pueden sacar mas productos del carrito")
    }else {
    cantidadComprada --
    zonaCarrito.textContent = `${cantidadComprada}`
    zonaTotal.textContent = `TOTAL: ${cantidadComprada * precio}`}
})
 

//ejercicio 3
 
/*
 
let usuarioAdministrador = "Cosme Fulanito";
let password = "Admin123";
 
let arrayProd = [
    {
        nombre: "remera",
        precio: 2500,
        stock: 40
    },
    {
        nombre: "buzo",
        precio: 5750,
        stock: 32
    }]
 
let usuarioIngresado = prompt("Ingrese su usuario.")
let contraseniaIngresada;
 
function cargarProducto () {
    let productoDatos = prompt("Ingrese los datos del producto de la siguiente manera: nombre,precio,stock")
    let arrayDatos = productoDatos.split(",")
 
    let newProducto = {
        nombre: arrayDatos[0],
        precio: arrayDatos[1],
        stock: arrayDatos[2]
    }
 
    arrayProd.push(newProducto)
    console.log(arrayProd)
}
 
if (usuarioIngresado == usuarioAdministrador) {
    contraseniaIngresada = prompt("Ingrese su contrasenia")
 
    if (contraseniaIngresada != password) {
        window.alert("Lo sentimos, sus credenciales no son validas.")
        usuarioIngresado = "Salir"
    } else {
        cargarProducto();
    }
} else {
    window.alert("Se ha ingresado mal el usuario.")
}
 
*/
 
//ejercicio 4
 
 
let cancion=["mi","barba","tiene","tres","pelos"]
let botonCancion = document.querySelectorAll('button')[3];
let zonaCancion = document.querySelectorAll('h2')[2]
 
let elemento = document.createElement('p')
elemento.textContent = `${cancion.join(" ")}`
elemento.classList.add("Nodo")
zonaCancion.appendChild(elemento)
 
let elemento2 = document.createElement('h5')
elemento2.textContent = ""
elemento2.classList.add("Nodo")
zonaCancion.appendChild(elemento2)
 
botonCancion.addEventListener('click', () => {
        let palabra = document.querySelectorAll('input')[1].value;
 
        if ( cancion.indexOf(palabra) == -1){
            elemento2.textContent = "Palabra no encontrada"
        }else {
            elemento2.textContent = ""
            cancion.splice(cancion.indexOf(palabra), 1)
            elemento.textContent = `${cancion.join(" ")}`
        }
})


//Ejercicio 5

let botonNoche = document.getElementsByClassName('noche')[0];
let zonaNoche = document.querySelectorAll('.tema')[0]
let noche = document.querySelectorAll('.tema')[0]

let image = document.createElement('img')
image.src = './imagenes/murcielago.png'

botonNoche.addEventListener('mouseover', () => {
    if (zonaNoche.children.length == 1) {
        noche.style.backgroundColor = "darkblue"
        zonaNoche.appendChild(image)
    }
})

botonNoche.addEventListener('mouseout', () => {
    noche.style.backgroundColor = "white"
    if (zonaNoche.children.length == 2) {
        zonaNoche.removeChild(image)
    }
})

