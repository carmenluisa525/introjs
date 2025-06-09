//Object.keys, Object.values y el Object.entries
//Esto nos permite acceder a las propiedades del objecto muy facilmente
//

const producto= {
    nombre: "Tv 50\"",
    precio: 500,
    disponible: true
    
    };
    //Nos devuelve un array con los nombres (claves) de las propiedades del objeto
    console.log(Object.keys(producto)); 

    //nos devuelve un array con los valores de las propiedades
    console.log(Object.values(producto));

    //Nos devuelve un array de arrays, cada subarray contiene un par[clave,valor]
    console.log(Object.entries(producto));
    //Muy útil para recorrer un objeto  con métodos como foreach o for...of

