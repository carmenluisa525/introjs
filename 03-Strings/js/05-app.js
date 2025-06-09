//3métodos más
//Replace
const producto= "Monitor de 30  pulgadas"


//Remplazar
console.log(producto.replace("30","48"));


//Remplazar la palabra "pulgadas" por (") comillas dobles

console.log(producto.replace(" pulgadas",`"`));

//Slice te permite extraer una porción de la variable
console.log(producto.slice(0,10));
//Slice desde una posición hasta al final
console.log(producto.slice(8));

//Slice posición de comienzo es mayor que la de final

console.log(producto.slice(2,1));  //Devuelve una cadena vacía

//Substring que invierte los números.

console.log(producto.substring(2,1)); //Invierte los números
console.log(producto.substring(0,10));

