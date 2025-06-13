
//Funcion flecha con un sólo parámetro entre paréntesis
const aprendiendo = (tecnologia) =>
    console.log(`Aprendiendo ${tecnologia}`);

//Llamamos a la función pásandole u argumento;'JavaScript
aprendiendo('JavaScript');
//Si la función flecha(arrow function) tiene un sólo parámetro podemos omitir los paréntesis

const aprendiendo1 = tecnologia => 
    console.log(`Aprendiendo ${tecnologia}`);

aprendiendo1('JavaScript');

//Si hay más de un parámetro los paréntesis son obligatorios
const aprendiendo2 = (tec1, tec2) =>
    console.log(`Aprendiendo ${tec1} y ${tec2}`);
aprendiendo2('JavaScript', 'css');