
//switch

let metodoPago = 'efectivo';
switch(metodoPago){
    case 'efectivo':
        console.log("pagaste en efectivo");
        break;
    case 'tarjeta':
        console.log("pagaste con tarjeta");
        break;
    case 'bizum':
        console.log("Pagaste con bizum");
        break;
     default
         console.log("Método de pago desconocido o no pagaste");
         break;
        
}