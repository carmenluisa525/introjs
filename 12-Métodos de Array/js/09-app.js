
//Seleccionar el formulario por su Id
const formDNI = document.getElementById('form-dni');
//Añadir un listener para cuando se envía el formulario
formDNI.addEventListener('submit', function(event){
    event.preventDefault();

    //Obtengo el valor ingresado
    const numeroDNI = document.getElementById('num-dni').value;

    //Llamar a la función cal cular letra dni
    calcularLetraDNI(numeroDNI);
});





//Creamos una función para calcular el número del dni
function calcularLetraDNI(numero){
    //letras de control para el dni
    const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    //Convertir el número y calcuar el resto
    const resto = parseInt(numero) %23;

    //Obtenemos la letra que corresponda
     const letra = letras.charAt(resto);

     //Mostrar la respuesta en el P con id respuesta-dni
     document.getElementById('respuesta-dni').innerHTML=
     `La letrade tu dni es: ${letra}`;

}