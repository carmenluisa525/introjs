
//Operador While
let i = 0;
while (i<10){
    console.log(`Número ${i}`);
    i++;
}

function generarNumerosAleatorios(){
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
generarNumerosAleatorios();

