//veamos algunos métodos
const producto ="monitor 20 pulgadas"
const precio="50 euros"

console.log (producto.length);
console.log(precio.length);


console.log(producto.indexOf("pulgadas")); //posición donde comienza esa palabra en la variable
console.log(producto.indexOf("tablet"));//-1 significa que no la encontró

console.log (producto.includes("Monitor"));//devuelve true si lo encuentra
console.log (producto.includes("monitor")); //devuelve false si no  lo encuentra



