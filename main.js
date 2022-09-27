alert("Bienvenido a tu compra de tickets para Lost Kids")

const usuario = "usuario";
const contrasenia = "1234";

let usuarioUno = prompt("Ingrese su Usuario: ");
let contraseniaDos = prompt("Ingrese su contraseña: ");

if (usuario === usuarioUno && contrasenia === contraseniaDos) {
    alert("bienvenido + usuario");
    let entradas = parseInt(prompt("ingrese la cantidad de entradas: "));

    for (let i = 0; i < entradas; i++) {
        let entrada1 = parseInt(prompt("ingrese la entrada 1: "));
        let entrada2 = parseInt(prompt("ingrese la entrada 2: "));
        let entrada3 = parseInt(prompt("ingrese la entrada 3: "));
        let promedio = calcularEntradas (entrada1,entrada2,entrada3);
        alert("el promedio de " + entradas +" es " + promedio);

        let aplica = aplicaDescuento (promedio);
        if (aplica){
            alert(entradas + " aplica descuento ");
            
        }else {
            alert(entradas + " no aplica desceunto ");
        }

    }

}else{
    alert(" usuario o contraseña incorrecta ");
}

/* Funciones */

function calcularEntradas(entrada1,entrada2,entrada3){
    let promedio = (entrada1 + entrada2 + entrada3) / 3;
    return promedio;
}

function aplicaDescuento (promedio){
    if(promedio >= 3000 ){
        return true;
    } else{
        return false;  
    }
}








