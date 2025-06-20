//Declaración del Array 'meses con algunos nombres de meses como elementos

const meses = ['enero','febrero','marzo','abril','mayo','junio'];
//Declarar el array carrito
//Este array contiene objetos, cada uno con su nombre y un precio
carrito = [
     {nombre: "TV de 50 pulgadas", precio: 600 },
     {nombre: "Portátil 15\"", precio: 400 },
     {nombre: "Pantalla Smart 60 pulgadas", precio: 900 },
     {nombre: "Tablet ultra light", precio: 800 },
     {nombre: "Desktop top", precio: 1200 },
]

//calcular el total del carrito usando forEach

let total = 0;

carrito.forEach(producto => total += producto.precio);
console.log (`El total es: ${total}`);

//Calcular el total del carrito usando reduce
//"reduce acumula el valor de todos lod precios empezando en cero

let resultado = carrito.reduce ((total, producto) => total += producto.precio, 0);
console.log ('El segundo total es: ${total');

//Ejercicio: contar el número de vocales en una palabra

const vocales = ["a","e", "i", "o","u","á","é","í","ó","ú"];
//solicitamos al usuario una palabra mediante prompt
let palabra = prompt("Escribe una paabra");
//mostramos la palabra
console.log(palabra);
//mostramos la primera letra
console.log(palabra[0]);
//mostramos la longitud da la palabra
console.log(palabra.length);
//inicializamos un contador
let contar = 0
//recorremos cada letra de la palabra
for(let i = 0; i < palabra.length; i++){
     const existe = vocales.includes(palabra[i].toLowerCase());
     if (existe){
          contar++;
          console.log(palabra[i]);
     }
}
console.log(contar);