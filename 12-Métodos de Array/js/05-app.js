
//Declarar el array carrito
//Este array contiene objetos, cada uno con su nombre y un precio
carrito = [
     {nombre: "TV de 50 pulgadas", precio: 600 },
     {nombre: "Portátil 15\"", precio: 400 },
     {nombre: "Pantalla Smart 60 pulgadas", precio: 900 },
     {nombre: "Tablet ultra light", precio: 800 },
     {nombre: "Desktop top", precio: 1200 },
]

//uso del find
let resultado = carrito.find(item =>item.precio > 400 );

//Mostramos el resultado

console.log(resultado);  //el primero que encuentre es el q devuelve
