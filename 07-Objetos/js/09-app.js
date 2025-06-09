//vamos a ver como unir dos objectos, es muy común al trabajar con BBDD

const producto= {
    nombre: "Tv 50\"",
    precio: 500,
    disponible: true,
    imagen:"",
    
};

const medida = {
    peso: "2.5Kg",
    medida: "1.5mt"
}
//

//una forma de unirlo es con el método assign()
//const resultado = Object.assign(producto, medida);
//console.log(resultado);

//console.log(producto);
//la forma recomendada:clonar el objeto producto y luego agregarle las propiedades de medida
const resultado2 = Object.assign( {},producto, medida);
//Esto crea un nuevo objeto, combinando producto+medida, sin alterar

//verificamos el nuevo objeto original
console.log(producto);

//Mostramos el nuevo objeto combinado
console.log(resultado2);

