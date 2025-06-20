//Filter:crea un nuevo Array basado en un criterio que es evaluado par cada elemento


//Declarar el array carrito
//Este array contiene objetos, cada uno con su nombre y un precio
carrito = [
     {nombre: "TV de 50 pulgadas", precio: 600 },
     {nombre: "Portátil 15\"", precio: 400 },
     {nombre: "Pantalla Smart 60 pulgadas", precio: 900 },
     {nombre: "Tablet ultra light", precio: 800 },
     {nombre: "Desktop top", precio: 1200 },
]

//Uso de filter
let resultado = carrito.filter(producto =>producto.precio >800);
//Otro

let resultado2 = carrito.filter(producto => producto.nombre == "Tablet ultra light");

//Mostramos el resultado
console.log(resultado);
console.log(resultado2);   //Siempre devuelve un array
