
//creamos una función 
function prueba() {
    //Declaración del Array 'meses con algunos nombres de meses como elementos

    const meses1 = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio'];

    //Declaración del Array 'meses con algunos nombres de meses como elementos

    const meses2 = ['julio', 'Agosto', 'septiembre', 'noviembre', 'diciembre'];
    //Este array contiene objetos, cada uno con su nombre y un precio
    carrito = [
        { nombre: "TV de 50 pulgadas", precio: 600 },
        { nombre: "Portátil 15\"", precio: 400 },
        { nombre: "Pantalla Smart 60 pulgadas", precio: 900 },
        { nombre: "Tablet ultra light", precio: 800 },
        { nombre: "Desktop top", precio: 1200 },
    ]


    //Añadir un mes al final del array usando spread operator
    //['enero','febrero',.....,'junio', 'julio']

    const meses3 = [...meses1, 'julio'];
    console.log(meses3);

    //Añadir un mes al principio del array, usando spread operator
    // ['junio','julio','agosto',.....,'diciembre']

    const meses4 = ['junio', ...meses2];
    console.log(meses4);

    //Añadir un objeto a final del carrito
    const producto = { nombre: "Desktop top", precio: 1200 };
    const meses5 = [...meses1, producto];
    console.log(meses5);

    //muestra array con meses más el objeto producto
}


prueba();