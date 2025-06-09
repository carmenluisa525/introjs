//los objetos pueden  modificar sus valores,veamos como evitarlo
const producto= {
    nombre: "Tv 50\"",
    precio: 500,
    disponible: true,
    imagen:"",
    información:{
        peso: "2Kg"
        medida: "1.5mts"
    }
};
console.log(producto);
//prevenir la modificación

Object.freeze(producto);

producto.disponible = "false";
console.log(producto);

producto.imagen = "imagen.jpg";


delete producto.imagen;
console.log(producto);

//Como revisar si el objecto está congelado (Freeze)

console.log("Está freeze", Object.isFrozen(producto));

console.log(producto);

