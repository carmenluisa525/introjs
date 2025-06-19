
//Vamos a declarar un array de objetos llamado 'carrito'
const carrito = [
    {id:1, producto:'Libro'},
    {id:2, producto:'cammisa'},
    {id:3, producto: 'móvil'}
]

//Bucle for...of
//Recorre cada objeto dentro del array 'carrito'
for(let item of carrito){
    //Accede y muestra la propiedad 'producto' de cada objeto
    console.log(item.producto);

}
//Declaramos un objeto llamado 'automóvil'
let automovil = {
    modelo: 'Golf',
    motor: '2.0',
    year: '2020';
    marca:'Volkswagen'


    

}
//bucle for...in
for(let coche in automovil){
    console.log(`${coche}: ${automovil[coche]}`); //Inprime modelo: Golf.....

}

//definimos una variable max para usar en la función aleatorios
let max = 10;
//Bucle for:
//Vamos a hacer que se ejecute 14 veces
for(let i=1; i<=14; i++){
    //llamamnos a la funcion aleaotorio
    let resultado = aleatorios(max);
    //Imprimimos el resultado generado
    console.log(`Resultado ${i}: `,resultado.a, " - ",resultado.b);
}
function aleatorios(max){
    const a = Math.floor(Math.random()*max);
    const b = Math.floor(Math.random()*max);

    //Devolvemos

    return {a:a, b:b};
}
