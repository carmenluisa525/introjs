
//Operador While
let i = 0;
while (i<10){
    console.log(`Número ${i}`);
    i++;
}

/*function generarNumerosAleatorios(){
    let numeros = [];
    const cantidad = 100;
    while(numeros.length< cantidad){
        //Aleatorio entre 1 y 1000
        let numeroAleatorio =Math.floor( Math.random() * 1000) +1;
        if(!numeros.includes(numeroAleatorio)){
            numeros.push(numeroAleatorio);
        }
    }
    console.log(numeros);
}
generarNumerosAleatorios();*/


function generarNumerosAleatorios(){
    let numeros = new Set();
    while (numeros.size < 100){
        let numeroAleatorio = Math.floor(Math.random()*100)+1; //SEt no tiene en cuenta los datos repetidos
        numeros.add(numeroAleatorio);
    }
    let arrayNumeros = Array.from(numros); //Si queremos convertirlo en un array
    console.log(arrayNumeros);


}
generarNumerosAleatorios();