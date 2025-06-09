//Repeat permite repetir una cadena de texto
const producto="Monitor de 42\"";

const texto="en promoción ".repeat(3);
console.log(texto);

console.log(producto.repeat(3));

console.log(producto.repeat(2.2));

//Podemos usar template string para concatenar
console.log(`${producto}${texto}!!!`);

//Split

const madrid="Va a ganar el partido hoy!";

//Separar la frase por palabras
console.log(madrid.split(" "));

const espana ="equipo, ganador, equipo ganador, escribir"

//Usamod el split
console.log(espana.split(", "));
