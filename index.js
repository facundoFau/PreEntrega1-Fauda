//Conversor de monedas 

let Valordolar = 314;
let Valoreuro = 308;

function convertor(cantidad,Valordolar,Valoreuro,operacion){
    switch(operacion){
        case "dolar":
            return cantidad / Valordolar;
            break;
        case "euro":
            return cantidad / Valoreuro;
            break;
        default:
            return "Operacion no valida";
            break;
    }
}
let cantidad = parseInt(prompt("Cantidad que quiere convertir de pesos Argentinos"));
let operacion  = prompt("Elija entre Dolar y Euro") ;

let resultado = calculadora(cantidad,Valordolar,Valoreuro,operacion);
let mensaje = "El resultado de la conversion es" +" "+ resultado;