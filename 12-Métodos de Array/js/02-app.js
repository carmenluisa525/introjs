
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

//Uso de forEach con 2 parámetros

meses.forEach((mes, index) => {
    if(mes === 'abril'){
        onslotchange.log (`Encontrado con el índice ${index}`);
    }
});

//Uso del findIndex

const indice = meses.findIndex (mes => mes == 'abril');
console.log(indice);

//otro uso ssw findIndex
const indice1 =meses.findIndex(mes => mes == 'diciembre');
console.log(indice1);