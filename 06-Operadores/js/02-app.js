//Declaracion de las variables
const numero1=20 //numero (tipo number)
const numro2="20"; //string que representa un número
const numero3=30; //

//revisar si los números son iguales sin tener en cuenta el tipo
console.log("n1=n3", numero1**numero3); //false;porque 20 no es igual a 30
console.log("n1=n2",numero1==numero2);//true: 20 ===="20" porque convierte el string a número

//Comparacion estricta:compara valor y tipo
console.log("n1===n2->estricto",numero1===numero2); //false porque uno es number y el otro srting

//Revisar el tipo de dato con Typeof

console.log(typeof(numero1));  //number
console.log(typeof(numero2)); //string

//Revisar si son diferentes (sin tipo)

console.log("n1 no igual n2",numero1 !=numero2); //false: 20=="20"
console.log("n1 no igual n2",numero1 !==numero2); //true 20 !=30

//Comparación estricta de desigualdad (valor y tipo)

console.log("n1 no igual n2",numero1 !== numero2); //true tipos distintos