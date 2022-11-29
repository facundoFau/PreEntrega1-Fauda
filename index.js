//Conversor de monedas 
function convertor(cantidad,operacion){
    switch(operacion){
        case "dolar":
            return cantidad / 314;
            break;
        case "euro":
            return cantidad / 320;
            break;
        default:
            return "Operacion no valida";
            break;
    }
}
let operacion  = prompt("Elija entre Dolar y Euro") ;
let cantidad = parseInt(prompt("Cantidad que quiere convertir de pesos Argentinos"));

let resultado = convertor(cantidad,operacion);
let mensaje = "El resultado de la conversion es" +" "+ resultado;
alert(mensaje)