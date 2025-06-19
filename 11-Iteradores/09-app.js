
//realizar un script que pida el númro de filas y columnas.
//cree una tabla y dentri de cada celda escriba un número consecutivo en orden descendente


function generarTabla(){
    //Obtener los valores de las filas y las columnas
    let filas = parseInt(document.getElementById('filas').value);
    let columnas = parseInt(document.getElementById('columnas').value);

    //Calcular cantidad de celdas (filas*columnas)
    totalNumeros = filas*columnas
    //Inicializar variable tabla
    let tabla = "<table border='1' cellpadding='10' cellspacing = '0'>";

    //bucle para recorre filas
    for( let i=0; i<filas; i++){
        //Abrir una nueva fila
        tabla += "<tr>";
        //Bucle para recorrer la columnas
        for(let j= 0; j<columnas; j++){
            //crear una celda
            tabla += "<td>" + totalNumeros + "</td>";
            totalNumeros--;

        }
        tabla += "</tr>";
    }
    tabla += "</table>";

    document.getElementById('tabla').innerHTML = tabla;
}