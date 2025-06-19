
//Declaración del Array 'meses con algunos nombres de meses como elementos

const meses = ['enero','febrero','marzo','abril','mayo','junio'];
//Declarar el array carrito
//Este array contiene objetos, cada uno con su nombre y un precio
carrito = [
     {nombre: "TV de 50 pulgadas"",precio: 600 },
     {nombre: "Portátil 15"", precio: 400 },
     {nombre: "Pantalla Smart 60 pulgadas", precio: 900 },
     {nombre: "Tablet ultra light", precio: 800 },
     {nombre: "Desktop top", precio: 1200 },
]

//calcular el total del carrito usando forEach

let total = 0;

carrito.forEach(producto => total +==producto.precio);
console.log (`El total es: ${total}`);

//Calcular el total del carrito usando reduce

let resultado = carrito.reduce ((total, producto) => total += producto.precio, 0);
console.log ('El segundo total es: ${total');