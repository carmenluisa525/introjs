
//Operador ternario
//Sintáxis básica-> condición? valor si true:valor si false

const autenticado = true;

const puedePagar = false;

console.log(autenticado ? 'Si está autenticado':'No está autenticado');

//Combinación aperadores lógicos con el ternario
console.log(autenticado && puedePagar ? 'autentica dopuede pagar':'Autenticado no puede pagar');

//operador ternario anidado

//Permite evalar múltiples condiciones en una sóla línea

console.log(autenticado 
    ? puedePagar 
        ? 'sí, puede pagar'
        :'está autenticado pero no puede pagar'
     :'No está autenticado');