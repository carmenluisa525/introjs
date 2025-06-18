
//El operador OR
let efectivo = 300;
let credito = 400;
let disponible = efectivo + credito;
let totalCarrito = 700;

if(efectivo >=totalCarrito || credito >= totalCarrito){
    console.log("puede oagar con efectivo o crédito");

}else if(disponible >= totalcarrito){
    console.log("Puede pagar con ambos efectvo+crédito");
}else{
    console.log("No tienes disponible");
}

//true or true  true
//false or true true
// true or false true
//false or false false

//true and true implica true
//false and false implica false
//false and true  false
//true and false false

//XOR
//true XOR false true
//false xor true true
//true xor true false
//false xor false false