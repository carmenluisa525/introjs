//Null y undefined
//En js hay varios tiposbde datos prmitivos
//además de string y number
//están boolean que son verdaderos y falso
//existe un par más llamado null y undefined

let numero; //variable declarada pero no inicializada-undefined
console.log(numero);

let numero2=null  //valor asignado manualmente que representa ausencia de valor
console.log(numero2); //imprime null
console.log(typeoff(numero2))://Imprime:Object

//comparando null y undefined
console.log("comparador estricto ===",numero ===numero2); //false:tipos diferentes
console.log("comparador ==",numro ==numero2); //true:valores similares según igualdad no estricta