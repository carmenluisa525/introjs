//creamos un array llamado carrito qu simule una listaa de productos
const carrito = [];

//Mostrar el estado inicial del carrito
console.log("carrito inicial:", carrito);

//definimod un producto como n objeto de propiedades

const producto1= {
    nombre: "Monitor 40",
    precio: 600
};

//Definimos un segundo producto

const producto2 = {
    nombre: "Monitor 60\"";
    precio: 950
}
//Agregamos los 2 productos al final del array con el método .push

carrito.push(producto1);
carrito.push(producto2);

//Visualizamos el carrito tras agregar los 2 productos
console.log("Carrito tras añadir dos productos con .push");
console.table(carrito);

//Definimos un tercer producto
const producto3 = {
    nombre:"móvil",
    precio:700
};

//Usamos .unshift para agregarlo al principio del array
carrito.unshift(producto3);

console.log("Carrito después de usar .unshift() par agregar al inicio:")
console.table(carrito);
