
//uso del break y el continue

//En el primer bucle for:uso de break

for(let i=0; i<=10; i++){
    if (i==5){
        console.log("Estamos en el 5 ...fin");
        //El break detiene completamente el bucle for
        //No sigue con más iteración
        break;
    }
    //Si se cumple ,imprimir el número
    console.log(`Número: ${i}`);
}
//Segundo bucle for con el uso de "continue"
 for (let i = 0; i<=0; i++){
    if(i==5){
    console.log("Estamos en el 5 ...fin");
    continue;
    
    }
    console.log(`Número: ${i}`);
 }

 //Ejmplo real con array de objetos uso del continue
 const carrito = [
    {nombre:"monitor 20 pulgadas", precio:200, },
    {nombre:"Televisor 50 pulgadas", precio:700, descuento:true},
    {nombre: "pantalla 50 pulgadas", precio:800, descuento:false},
    {nombre: "Tablet", precio:500, descuento:true},
    {nombre: "Móvil xl", precio:900, descuento:true}
 ]

 for(let i=0; i<carrito.length; i++){
    if(carrito[i].descuento ==true){
        console.log(`El artículo ${carrito[i].nombre} tiene descuento`);
    }
 }
