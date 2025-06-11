//Añadir elementos usando el spread operador
//Creamos el "carrito"
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

//Creamos un nuevo array llamado resultado que contiene el producto1
let resultado = [...carrito,producto1];
console.log(resultado);

//Añadimos el producto2 al final de resultado
resultado = [...resultado, producto2];
console.log ("Resultado 1",resultado); ///Muestra el array con 2 productos

//Añadimos el producto3 al final del array

resultado =[...resultado, producto3];
console.log(resultado);

//También podemos agregar un elemento al "nicio" de array
resultado = [producto4,...resultado];

//Mostramos el resultado final

console.log(resultado);



