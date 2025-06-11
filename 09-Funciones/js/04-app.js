/**Diferencia entre métodos y funciones */
const num2 = "20";

console.log(parseInt(num2)); //Estamos ejecutando una función.El resultado es 20

const num1= 20;
console.log(num1.toString); //resultaso "20"

//Una función definida por el usario
function saludar(){
    console.log("Hola");
}

saludar();  //llama a la función

//Creamos un objeto

const persona = {
    nombre:"Juan",
    saludo: function(){
        console.log("Hola"+ this.nombre);
    }
};
persona.saludo();