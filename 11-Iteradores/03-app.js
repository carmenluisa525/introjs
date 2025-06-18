
//Recorrer los número s del 1 al 50 inclusive
//Si el número es múltiplo de 3 y de 5, imprimir FizzBuzz
//Si el número es múltiplo sólo de 3,imprimir Fizz
//Si el número e múltiplo sólo de 5, imprimir Buzz
//Si no es múltiplo de 3 ni de 5, imprimir el número

for(let i=1; i<=50; i++){
    if(i % 3 ==0 && i % 5 == 0){
        console.log("FizzBuzz");
    }else if(i % 3 ==0){
        console.log("Fizz");
    }else if(i % 5 == 0){
        console.log("Buzz")
    }else{
        console.log(`Elnúmero ${i}`);
    }
    
}


for(let i=1; i<=50; i++){
    let salida = ""
    if(i%3==0){
        salida += 'Fizz';
    }
    if (i % 5== 0){
        salida +='Buzz';
    }
    if (salida === ""){
        salida += `&{i}`;
    }
    
    console.log(salida);
}