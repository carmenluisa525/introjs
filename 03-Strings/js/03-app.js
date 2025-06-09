//como concatenar y unir cedenas de  texto y variables
const producto="Monitor de 30 pulgadas";
const precio="200";

console.log(producto.concat(" En descuento")); //concatenar un string
console.log(producto.concat(precio)); //concatenar una variable

//otras formas de concatenar
console.log(producto+precio);
console.log (producto + " con un precio" + precio);
console.log ("el producto"+producto+ "con un precio de");
console.log(producto, "con un precio de  ", precio);

//ES "SmartScript6" la mejor forma de concatenar variables
console.log(`El producto ${producto} tiene un precio de ${precio}`);