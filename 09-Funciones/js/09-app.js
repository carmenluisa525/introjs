
//Crear u objeto llamdo reproductor
const reproductor = {
    //Método para reproducir una canción
    reproducir:function(id){
        console.log(`Reproduciendo la canción id ${id}`);
    },

    //Método para pausar la canción actual
    pausar:function(){
    console.log("Pausando la canción");
},
//Método borrar una canción del sistema por su "Id"

borrar:function(id){
    console.log(`Borrando canción de id ${id}`);
},
//Método para crear una Playlist
crearPlaylist:function(nombre){
    console.log(`Creando una playlist de nobre ${nombre}`);
},

//Método para reproducir Plylist
reproducirPlaylist:function(nombre){
    console.log(`Estamos reproduciendo la Playlist con nombre ${nombre}`);
}


}


//Llamamos a los métodos del objeto "reproductor"

//Reproducir canción id 30
reproductor.reproducir(30);
//Pausamos la canción
reproductor.pausar(),

//Borramos una canción con id 20
reproductor.borrar(20);

//Creamos una playlist llamada "Heavy Metal"
reproductor.crearPlaylist("Heavy metal");

//Reproduce la plylist llamada "heavy metal"
reproductor.reproducirPlaylist("Heavy metal");
