//Objetos literales (sin clase)
//Los objetos literales son una parte principal de js
//en lugar de crear diferentes variables como estas

let nombreProducto = "Monitor 40\"";
let precio= 350;
let disponible = true;

//Podemos crear un objeto que agrupe la información

const producto= {
    nombre: "Monitor 40\"",
    precio: 350,
    disponible: true //el último no lleva coma
}

console.log(producto.nombre);

//¿Qué son?
//Estructuras se datos clave-valor creadas directamente, sin necesidad de definir una clase
//Características:
//*No requiere de una clase previa
//*Son ideales para almacenar datso agrupados
//*Se crean con {}
//*Muy usados en JSON ,configuración o respuestas de APi`s

let persona={
    nombre= "Lucía",
    edad= 30,
    saludar: function(){
        return "Hola";
    }
}
console.log(persona.nombre)
console.log(persona.saludar());

//Este objeto lo podemos escribir así

let persona2={
    nombre= "Pedro",
    edad= 31,
    saludar(){
        return "Hola"; // o tb return `Hola soy $ {this.nombre
    }
}

console.log(persona2.saludar());


