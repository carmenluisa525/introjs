
//const producto= {
    nombre: "Tv 50\"",
    precio: 500,
    disponible: true,
    mostrarInfo function(){
        return 'El producto: ${this.nombre]' tiene un precio de ${this.precio}';
    }
    
}; */

const producto= {
    nombre: "Tv 50\"",
    precio: 500,
    disponible: true,
    mostrarInfo(){
        return 'El producto: ${this.nombre{' tiene un precio de ${this.precio}';
    }

console.log(producto.mostrarInfo());