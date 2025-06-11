/*Las funciones en cualqier lenguaje son un serie de procedmientos o intrucciones 
que realizan una acción.Una se las ventajas de las finciones es que permiten tener un código más ordeado y fácil de mantener */

//Otra de las ventajas es que son reutilizables:Puede tener una función que valide un formulario y utilizarla en todos los formularios*/
//también puedes tener una función qque envíe datos al servidor y utilizarla miles  de veces.
 //Existen varias formas de crear o declarar funciones en JavaScript
 //Declaración de una funcion tradicional
 //La palabra clave "function" va seguida del nombre de la función
 //luego los paréntesis de los parámetros
 //Y el cuerpo de la función entre llaves

 

 function sumar(){
 console.log(2+2); //simplemente imprime el resultado de la suma 2+2
 }
 

 sumar(); //LLamada a la función: imprime 4

 //Aquí estamos signando una función anónima a una constante llamada "sumar2"
//Es decir, la funció no tiene nombre propio, y se guarda como valor de una variable
//Esta es una expresión de función


const sumar2 = function(){
console.log(3 + 3); //Imprime la suma de tres
}

sumar2();  //Llama a la función y suma 6

//Esta es una función flecha, introducida en ES6 (ECMAScript 2015)
//Es una forma más concisa de escribir funciones anónimas
//Ideal para funcones cortas y callbacks

const sumar3= ()=>{
    console.log (4 + 4);

}
sumar3();