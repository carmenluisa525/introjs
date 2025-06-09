//Un objeto puede contener cualquier tipo de dato
//Incluso otro objeto,esto se conoce como objeto anidado

const producto= {
    nombre: "Tv 50\"",
    precio: 500,
    disponoble: true,
    información:{
        peso: "2Kg"
        medida: "1.5mts"
    }
};

console.log("Este es el objeto", producto);
console.log(producto.informacion.medida);

console.log(producto.informacion);