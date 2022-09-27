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

alert ("Bienvenidos a Electricidad Rusconi")

alert ("Estos son los productos que tenemos a la venta: \n - Colgantes\n - Plafon")

// ------- Objetos ------- //
// ---- Producto A ---- //

let productoA = {
    nombre: "Colgantes",
    precio: 1000,
    stock: 20,
}

console.log(productoA)

// ------- Objetos Función Constructora ------- //
// ---- Producto B ---- //

function Producto (nombre, precio ,stock) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
}

let productoB = new Producto("Plafon", 500, 30)

console.log(productoB)