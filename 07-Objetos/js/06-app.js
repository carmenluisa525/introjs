//Si recuerdas una variable definida con "const" no se puede reasignar
/*const producto ="Monitor"
produto ="tablet";
console.log(producto)*/

//En el caso de los objetos veremos un comportamiento diferente, ya que sus propiedades si se
//pueden reescribir

const producto= {
    nombre: "Tv 50\"",
    precio: 500,
    disponible: true,
    información:{
        peso: "2Kg"
        medida: "1.5mts"
    }
};

console.log(producto);

producto.disponible = "false";

console.log(producto);

