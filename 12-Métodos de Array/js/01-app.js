
//Declaración del Array 'meses con algunos nombres de meses como elementos

const meses = ['enero','febrero','marzo','abril','mayo','junio'];
//Declarar el array carrito
//Este array contiene objetos, cada uno con su nombre y un precio
carrito = [
     {nombre: "TV de 50 pulgadas\"",precio: 600 },
     {nombre: "Portátil 15\"", precio: 400 },
     {nombre: "Pantalla Smart 60 pulgadas", precio: 900 },
     {nombre: "Tablet ultra light", precio: 800 },
     {nombre: "Desktop top", precio: 1200 },
]

//Uso de método forEach:
//Recorre cada elemnto del array
/*meses.forEach(element =>{
if(element == "febrero"){
console.log('febrero si existe');
}*/
/*element == 'febrero' 
    ? console.log('febrero existe')
     : null;
    
}*/
element == 'febreo && console.log(`Febrero si existe)';

//El método includes
//verificar si un mes está incluido
const resultado = meses.includes('enero');
console.log(resultado);

//Uso del método some en al array 'carrito'
const existe = carrito.some(producto => producto.nombre === 'Portátil');
console.log("¿Existe el portátil?", existe);

//Uso del método some en el array meses
const existe2 = meses.some(mes => mes === 'febrero');
console.log("¿febrero existe?", existe2); //true si al menos un elemento de la array devuelve la función