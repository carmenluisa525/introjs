//En js u array (o arreglo) es una estructura de datos que nos permite almacenar múltiples
//valores en una sola variable

//Sintaxis literal

const frutas= ['manzana', 'pera','platano'];
console.log(frutas);

//usando el constructor

const meses=new Array('Ene','Feb','Mar','May','jun','jul','Ago');
console.log(meses);

//Array vacios
const fruta_vacio = [];
const meses_vacío = new Array();

//Con método array.of()
const letras = Array.of('a','b','c');

    //
    const correcto = Array.of(3);
    const confuso = new Array(3);
    console.log(correcto);
    console.log(confuso);

    //crear array literal con números
    const numeros=[10,20,30,40,50,60];
    console.log(numeros);

    //Crear un array que llamaremos de todo que contiene diferentes tipos de datos

    const deTodo = [
        'hola', //String
        10, //numero
        'rafael', //Otros String
        'Si', //otro string
        null, //valor nulo
        Date(),  //resultaod de la fincion Date()
        {nombre:'Rafael',apellido:'Martín'},  //objeto con dos propiedades
        [0,1,2,3,4]  //Otro Array (array anidado)
    ];
    console.log(deTodo);