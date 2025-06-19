
/**tabla de multiplcación */  //ojo sin corregir
/**El usuario debe ingresar la sfilas y las columnas de las tablas */
/**Cadac ceda debe contener el producto cdlos numeros de su fila y  columna */
/**Ejemplo:fila2, columna 3--> 2*3 =6 */
/**El script genera la tabla de forma dinámica y muestra el html */

function generarTabla(){
    //Obtener los valores de las filas y las columnas
    let filas = parseInt(document.getElementById('filas').value);
    let columnas = parseInt(document.getElementById('columnas').value);
    let tota
    let fila = [i];
    let columna = [j];

    
    const totalMultiplicacion =function multiplica(fila,columna){
        return fila*columna;
    } 
    //Inicializar variable tabla
    let tabla = "<table border='1' cellpadding='10' cellspacing = '0'>";

    //bucle para recorre filas
    for( let i=0; i<filas; i++){
        //Abrir una nueva fila
        tabla += "<tr>";
        //Bucle para recorrer la columnas
        for(let j= 0; j<columnas; j++){
            //crear una celda
            tabla += "<td>" + totalMultiplicacion + "</td>";
        
        }
        tabla += "</tr>";
    }
    tabla += "</table>";

    document.getElementById('tabla').innerHTML = tabla;
    
}