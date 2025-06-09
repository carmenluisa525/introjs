//Como hacer un destructuring a un objeto dentro de otro

const producto= {
    nombre: "Tv 50\"",
    precio: 500,
    disponoble: true,
    información:{
        peso: "2Kg"
        medida: "1.5mts"
    }
};

const {nombre, precio, disponible, informacion:{peso,medida}}=producto;

console.log("mostrar el nombre", nombre);
console.log("mostrar el precio", precio);
console.log("mostrar el disponible", disponible);
console.log("mostrar el peso",peso);
console.log("mostrar la medida", medida);