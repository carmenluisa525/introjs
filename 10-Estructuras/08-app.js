
//buenas prácticas con el if

const autenticado = true;
//mala práctica
if(autenticado==true){
    console.log("El usuario está autenticado.mala práctica con el if");
}
//Buena práctica
if(autenticado){
    console.log("el usuario está autenticado");
}

//Otro ej de mala práctica

const puntaje = 500;
if(puntaje>300){
    console.log("Buen puntaje.Felicidades");
}else if{
    console.log("Excelente esfuerzo!!!");
}else{
    console.log("No sabría qué decirte");
}

if(puntaje>400){
console.log("Excelente esfuerzo!!!");
}else if(puntaje>300){
console.log("Buen puntaje.Felicidades");
}else{
    console.log("No sabría qué decirte");
}
