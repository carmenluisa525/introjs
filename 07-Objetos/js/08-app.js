//otra propiedad smilar al Object.freeze es Object.seal
//Ambos métodos se usan para restringir los cambios en los objectos, pero de forma diferente
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

//El Object.seal evita poder agregar o quitar propiedades
//pero si permite el cambio de valores

Object.seal(producto);
producto.nombre ="Tablet";
console.log(producto);

//Revisar si el objecto está sellado (sealed)
console.log("El objecto está sealed?", Object.isSealed(producto));