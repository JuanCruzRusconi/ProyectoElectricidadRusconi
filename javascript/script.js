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


alert("Estos son nuestros productos: \n - Colgantes\n - Plafon")

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