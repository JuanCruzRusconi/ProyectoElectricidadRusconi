// ------- Variables ------- //

// let - variable  //
// const - constante //

// ------- Mostrar en la consola ------- // 

// console.log //


/*
let TipoProductoA
let ProductoA
let s

let nombreTipoProductoB

nombreTipoProductoA = "Iluminación exterior"
nombreTipoProductoB = "Iluminación interior"
*/
/*
alert ("Bienvenidos a Electricidad Rusconi")

alert ("Estos son los productos que tenemos a la venta: \n - Colgantes\n - Plafon")
*/

// ------- Objetos ------- //
// ---- Producto A ---- //

let productoA = {
    nombre: "Colgantes",
    precio: 1000,
    stock: 20,
    /*restarStock = function(cantidad){
        stock -= cantidad
    }
    sumarStock = function(cantidad)
        stock += cantidad */
}

/*console.log(productoA)*/

// ------- Objetos Función Constructora ------- //
// ---- Producto B ---- //

function Producto (nombre, precio ,stock) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    this.restarStock = function(cantidad){
        this.stock -= cantidad
    }
    this.sumarStock = function(cantidad){
        this.stock += cantidad
    }
}

let productoB = new Producto("Plafon", 500, 30)

let precioTotal = 0

let productoC = new Producto("Lampara", 200, 0)

/*console.log(productoB)*/

// ------- Control de flujos ------- //

/*let compra = prompt("Ingrese SI si desea comprar un producto " + productoA.nombre + " y " + ProductoB.nombre)

if(compra == "SI"){
    let cantidadProductoA = prompt("Ingrese que cantidad de " + productoA.nombre + " desea comprar:")
    let cantidadProductoB = prompt("Ingrese que cantidad de " + productoB.nombre + " desea comprar:")

    let precioTotalA = cantidadProductoA * productoA.precio
    let precioTotalB = cantidadProductoB * productoB.precio

    let PrecioTotal = precioTotalA + precioTotalB

    alert("El precio total es de: " + PrecioTotal)
}

else {
    alert("Gracias por su visita")
}
*/

//\n - Colgantes\n - Plafon +
/*alert("Estos son nuestros productos: \n - Colgantes\n - Plafon\n - Lampara")*/

// ------- Ciclo de compra con FOR ------- //

function calculoPrecio(cantidad, precio){
    precioTotal += (cantidad * precio)
}

function calculoStock(cantidad, stock, precio){
    if(cantidad <= stock){
        calculoPrecio(cantidad, precio)
    }
    else{
        alert("Actualmente tenemos " + stock + " unidades de este producto")
    }
}



let cantidadCompra = parseInt(prompt("Que cantidad de productos distintos desea comprar:"))

for(let i = 0; i < cantidadCompra; i = i + 1){

    let productoCompra = prompt("Ingrese que producto desea comprar: \n - Colgantes\n - Plafon")
    
    if(productoCompra.toUpperCase() == 'COLGANTES'){
        let cantidadProductoColgantes = prompt("ingrese que cantidad de " + productoA.nombre + " desea comprar:")
        calculoStock(cantidadProductoColgantes, productoA.stock, productoA["precio"])
        productoA.restarStock(cantidadProductoColgantes)
    }
    else if(productoCompra == 'Plafon'){
        let cantidadProductoPlafon = prompt("ingrese que cantidad de " + productoB.nombre + " desea comprar:")
        calculoStock(cantidadProductoPlafon, productoB.stock, productoB.precio)
        productoB.restarStock(cantidadProductoPlafon)
    }
    
    else{
        alert("No tenemos ese producto a la venta")
    }

} 

if(precioTotal != 0){
    alert("El precio total es: " + precioTotal)
}
else{
    alert("Gracias por su visita!")
}

// ------- Ciclo de compra con WHILE ------- //

/* let opcion = prompt("Ingrese que es lo que quiere comprar o ESC para salir")
while(opcion != "ESC"){
    
    if(opcion.toUpperCase() == 'COLGANTES'){
        let cantidadProductoColgantes = parseInt(prompt("ingrese que cantidad de " + productoA.nombre + " desea comprar:"))
        if(cantidadProductoColgantes <= productoA.stock){
            precioTotal = precioTotal + (cantidadProductoColgantes * productoA.precio)
        }
        else{
            alert("Actualmente tenemos " + productoA.stock + " unidades de este producto")
        }
    }
    else if(opcion == 'Plafon'){
        let cantidadProductoPlafon = parseInt(prompt("ingrese que cantidad de " + productoB.nombre + " desea comprar:"))
        if(cantidadProductoPlafon <= productoB.stock){
            precioTotal = precioTotal + (cantidadProductoPlafon * productoB.precio)
        }
        else{
            alert("Actualmente tenemos " + productoB.stock + " unidades de este producto")
        }
    }
    else{
        alert("No tenemos ese producto a la venta")
    }
    opcion = prompt("Ingrese que producto quiere comprar: \n - Colgantes\n - Plafon\n - ESC")
}
if(precioTotal != 0){
    alert("El precio total es: " + precioTotal)
}
else{
    alert("Gracias por su visita!")
} */



//// -------- HASTA CLASE 5 -------- ////


// ------- Arrays ------- //

// Enumeracion              0           1       2    3 //
/*let listaDeProductos = ["Colgantes", "Plafon" , 8, "algo"]*/

/*
let algoDos = listaDeProductos[2]
console.log(algoDos)

for (let i = 0; i <= 3; i++)
    console.log (istaDeProductos[i])
*/

// -- Propiedad lenght -- //

/*console.log (listaDeProductos.length)*/
/*
for(let i = 0; i < listaDeProductos.lenght; i++){
    console.log (listaDeProductos[i])
}

let nombre = prompt("ingrese")
listaDeProductos.push(nombre)
*/
 // -- Metodos/Propiedades: push, unshift, shift, pop, join, concat, splice, slice, include, reverse -- //

 let listaDeProductos = [productoA, productoB]

 console.log(listaDeProductos.length)

 let listaNombres = []
 
 for(const producto of listaDeProductos){
    if(producto.stock > 0){
        listaNombres.push(producto.nombre)
    } 
    
 }

  console.log(listaNombres)


  // ------- Funciones de orden superior ------- //

  let listaProductos = [productoA, productoB, productoC]

  let listaProductosConStock = listaProductos.filter((prod) => prod.stock > 0)
 
  for(const producto of listaProductos){
  let listaNombres = listaProductosConStock.map((prod) => producto.nombre)
  }
  

  // ------- DOM ------- //

  // --- Nodos --- //

  let catalogo = document.getElementById("catalogo")

  for(const producto of listaProductosConStock){

  let card = document.createElement("div")

  card.className = "card"

  card.innerHTML = `<h2>${producto.nombre}</h2><p>algo</p>`

  catalogo.append(card)
  }
  // --- Propiedades

