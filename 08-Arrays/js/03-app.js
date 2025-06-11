//cramos un array utilizando el constructor "new Array con los nombres de los meses
const meses = new Array('Ene','Feb','mar');
console.log(meses);

//Si queremos saber cuántoe elementos tiene un Array,podemos utilizar el método ".lenght"
//.lenght devuelve el número total de elementos almacenados en el 
console.log(meses.length);

//Si queremos recorrer el array podemos utlizar el bucle "for"
//i es la variable de control que se  inicia en 0(primer índice del array)
//el bucle se ejecuta mientras i sea menor que (i<array.lenght)
//en cada iteración, mostramos el elemento en la posición i
for (let i=0; i < meses.length; i++){
    console.log(meses[i]);
}