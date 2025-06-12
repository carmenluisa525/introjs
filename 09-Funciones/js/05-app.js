//Definimos una funcion que recibe parámetros:nombre y apellidos
function saludar(nombre, apellidos){
    //Usamos template literal(comillas invertidas) para mostrar el mensaje
    console.log(`Hola ${nombre}, ${apellidos}`);

}
saludar("pepe","López");

//Hacer una llamada  parámetros pre-definidos
saludar();

function nombreCompleto(nombre1="Carmen luisa", apellidos1="Castillo"){
    console.log(`Hola ${nombre1}, ${apellidos1}`)
}

nombreCompleto();
nombreCompleto("Isabel", "Acosta");