//Declarar una función saludarque reciba 2 parámetros
function saludar(nombre="Carmen Luisa",apellidos){
    console.log(`Hola ${nombre}, ${apellidos}`);
}
//En la prinera llamada pasamos ambos parámetros
saludar("Pepe","Pérez");

//En la seginda llamada dólo le pasamos el nombre
saludar("Pepe");

//En la tercera llamada no le pasamos parámetros
saludar();