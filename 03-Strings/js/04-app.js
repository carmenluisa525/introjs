//métodos de string
const producto = "       Monitor de 30\"";
console.log(producto);
console.log(producto.length);

//Eliminar espacios 
//console.log(producto.trimStart());  //Elimina al inicio
//console.log(producto.trimEnd()); //Elimina al final

//Los métodos en JS se pueden concatenar
console.log(producto.trimStart().trimEnd());
console.log(producto.trim().length);