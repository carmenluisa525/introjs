//Declaración del Array 'meses con algunos nombres de meses como elementos
// vamos a unir 2 arrays con el método concat
const meses1 = ['enero','febrero','marzo','abril','mayo','junio'];

//Declaración del Array 'meses con algunos nombres de meses como elementos

const meses2 = ['julio','Agosto','septiembre','noviembre','diciembre'];

//Uso del concat

const meses = meses1.concat(meses2);

//Mostramaos el resultado

console.log(meses);

//Otra forma moserna de concatenar
//Spread operator
const mesesd = [...meses1, ...meses2]; 
console.log(mesesd);

