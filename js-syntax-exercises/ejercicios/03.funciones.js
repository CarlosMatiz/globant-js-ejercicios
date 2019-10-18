/*
 Funciones
*/

/*
 Define una funcion llamada "hola" que imprima "Hola!" en consola.
*/

function hola() {
    return console.log("Hola!");
}


/*
 Define una funcion llamada "resta" que tome dos numeros y retorne el resultado de restarlos
 Nota: Recuerda la palabra clave return;
 */


function resta(numero1, numero2) {
    return numero1 - numero2;
}


/*
  Define una funcion llamada "vejez" que reciba un numero y funcione asi:

  - Si el numero es mayor o igual a 18 retorne el string "Es adulto"
  - Si el numero es menor que 18 retorne el string "No es adulto".

  Nota: Recuerda las palabras claves if, else y return
 */

function vejez(edad) {
    if(edad >= 18){
    	return "Es adulto"
    }else if(edad < 18){
    	return "No es adulto"
    }
}