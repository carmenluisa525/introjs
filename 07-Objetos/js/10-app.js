//Otra forma más moderna
//Definimos 2 objetos

const producto= {
    nombre: "Tv 50\"",
    precio: 500,
    disponible: true,
    imagen:"" //propiedad vacía
    
};

const medida = {
    peso: "2.5Kg",
    medida: "1.5mt"
}

//Spread operator: forma moderna de combinar objetos y arreglos en javascript
//Crear u objeto que une las propiedades de producto y medida
const resultado ={...producto, ...medida};
console.log(resultado);

//Imprimimos el objeto prodducto para verificar que no ha cambiado (es inmutable)

console.log(producto);


