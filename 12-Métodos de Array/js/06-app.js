
//Declarar el array carrito
//Este array contiene objetos, cada uno con su nombre y un precio
carrito = [
     {nombre: "TV de 50 pulgadas", precio: 600 },
     {nombre: "Portátil 15\"", precio: 400 },
     {nombre: "Pantalla Smart 60 pulgadas", precio: 900 },
     {nombre: "Tablet ultra light", precio: 800 },
     {nombre: "Desktop top", precio: 1200 },
]

//Uso del every

let resultado = carrito.every(item => item.precio> 400);

//Mostramos resultado
console.log(resultado); //true si todos cumplen la condición

//uso del forEach para validar una condición similar
let cumple = true;
//Recorremos cada producto del carrito

carito.forEach(producto =>{
    if (producto.precio<900){

    console.log(producto.nombre, " ", producto.precio);
cumple:false;
return;
}
});
console.log(cumple);