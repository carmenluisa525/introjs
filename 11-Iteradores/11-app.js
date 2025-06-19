
/**tabla de multiplcación */  
/**El usuario debe ingresar la sfilas y las columnas de las tablas */
/**Cadac ceda debe contener el producto cdlos numeros de su fila y  columna */
/**Ejemplo:fila2, columna 3--> 2*3 =6 */
/**El script genera la tabla de forma dinámica y muestra el html */

function generarTablaMultiplicar(){
    //Obtener filas y olumnas
    let filas = parseInt(document.getElementById('filas').value);
    let columnas = parseInt(document.getElementById('columnas').value);

    //Inicializar la tabla
    let tabla = "<table border='1' cellpadding ='10" cellspacing='0'>";
    //Empezar a construir la tabla
    for (let i=1; i<=filas; i++){
        tabla += "<tr>";
        for(let j=1; j<=columnas; j++){
            let producto= i*j;
            //tabla += "<td>" + i+ ">" +j +"=" +producto +"</td>";
            tabla += `<td> ${i} x ${j} = ${producto} </td>`;
        }
        tabla +="</tr>";

    }
    tabla +="</table>";
    document.getElementById('tablaMultiplicar').innerHTML = tabla;

}