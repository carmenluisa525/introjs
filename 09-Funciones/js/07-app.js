
//Cómo se comunican las funciones
//Llamamos a la función principal
iniciarApp();

//Definir la primera función que inicia la aplicación
function iniciarApp(){
    //Mostramos un mensaje de inicio en la consola
    console.log("Iniciando la app...");

    //Llamamos a otra función llamada "segundaApp" la llamamos desde dentro de esta
    segundaApp();
}
//Definimos la segunda app
function segundaApp(){
    //mostramos el mensaje
    console.log("Desde la segunda App...");

    //LLamamos a la terdera función, pasándole un valor como  argumento
    usuarioAutenticado("Pepe");
}
//Definimos la tercera función
function usuarioAutenticado(usuario){
    console.log("validando...");
    console.log(`Usuario validado con éxito ${usuario}`);
}