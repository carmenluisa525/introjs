
//Comprobar más de una condición
let rol = "ADMIN";

if(rol.toUpperCase() == 'ADMIN'){
    console.log("El usuario puede editar, eliminar y consultar toda la información");
}else if(rol==='EDITOR)
{console.log("El usuario sólo puede editar sus registros");
}else{
    console.log("El usuario es invitado, sólo puede conaultar");
}