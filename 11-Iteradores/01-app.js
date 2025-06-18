
//Ejecutar código hasta que se cumpla una condición
for (let x = 0; x<=10; x++){
    console.log(`Numero --> ${x}`);
}

//
console.log("Némros pares e impares");
for( let x = 0; x<=20; x++){
    
}

// Lo mismo, pero con una función

console.log( "**** Número par e impar con una función");

//function determinarParImpar(numero){
if(numero%2 == 0){
        console.log(`Número par = ${x}`);
    }else{
        console.log(`Número impar = ${x}`);
    }
    (x%2 ==0)?('Nnumero par = ${x')
//}

function determinarParImpar(numero){
    return (numero %2) ==0 ? 'par':'impar';

}

for(let x =0; x<=20; x++){
    const tipo = determinarParImpar(x)
    console.log(`El numero ${x} es &{tipo}`);
}