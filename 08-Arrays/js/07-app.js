//Creamos el "carrito" vaco al princpio
const carrito = [];
//Creamos varios productos
const producto1= {
    nombre: "Monitor 40",
    precio: 600
};


const producto2 = {
    nombre: "Monitor 60\"",
    precio: 950
}

const producto3 = {
    nombre:"Móvil",
    precio:700
};

const producto4 = {
nombre: "Móvil XL",
precio:1100
};

//Agregamos los productos al array "carrito" usando.push
carrito.push(producto1);
carrito.push(producto2);
carrito.push(producto3);
carrito.push(producto4);

//mostramos el carrito
console.log(carrito);

//Ahora vamos a eliminar elementos de array
//Existen varios métodos de elminer elementos


//Eliminamos el último elemento con.pop()
carrito.pop();
console.log("shift");
console.log(carrito);

//Eliminamos el primer elemento del array.shift()

carrito.shift();
console.log("shift")
console.table(carrito);

//Volvemos aagregar producto4 al último
carrito.push(producto4);
console.group("push");
console.table(carrito);

//Eliinamos un elemento desde la posición 2 (índice 1) con .splice()
//Sintaxis:array.splice(inicio, cantidadEliminar)
carrito.splice(1,1); //Elimina el elemento de la segunda posición
console.log("splice");
console.log(carrito);
