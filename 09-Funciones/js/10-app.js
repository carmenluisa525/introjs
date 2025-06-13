
//Funcion clásica (función anónima asignada a una constante)
const aprendiendo1 = function(){
    console.log("Aprendiendo JS");
}

//Función flecha (arrow function) equivalente a la anterior
//Esta es la forma moderna y concisa de escribir funciones en JS
const aprendiendo2 = () => {
    console.log("Aprendiendo JS");
}

//Arrow function en una sola linea
//Si sólo hay una intrucción dentro de la función, no es necesario usar llaves
const aprendiendo3 = () => console.log('Aprendiendo js');

//Arrow function que retorna un valor sin usar "return"
const Aprendiendo4 = () => 'Aprendiendo js'

//llamamos a cada una de las funciones
//Ejecutamos la función aprendiendo1
aprendiendo1();

//Ejecutamos la función aprendiendo2
aprendiendo2();

//Ejecutamoa la función aprendiendo3

aprendiendo3();

//Ejecutamos la función aprendiendo4, que devuelve un texto ,usamos console.log()
console.log(Aprendiendo4());