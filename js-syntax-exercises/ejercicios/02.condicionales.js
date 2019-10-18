/**
 * Condicionales
 */

// Reemplaza false con la condicion que debes crear en cada ejercicio.

/*
 Mayor que: >
 Escribe una condición que verifique que la edad es mayor de 65
*/

const edadMayor = 88;
let respuestaMayor;

if (edadMayor > 65) {
  respuestaMayor = 'Ya debe estar jubilado';
}

/*
 Menor que: <
 Escribe una condición que verifique si la edad es menor que 0
*/

const edadMenor = -20;
let respuestaMenor;

if (edadMenor < 0) {
  respuestaMenor = 'No ha nacido';
}

/*
 Igualdad: ===
 Escribe una condición que verifique que la edad es igual a 18
*/

const edadCedula = 18;
let respuestaCedula;

if (edadCedula == 18) {
  respuestaCedula = 'Ya tiene cedula';
}

/*
  Composición de condicionales   OR: ||  AND: &&
*/

/*
  Escribe una condicion que verifique Si esta cansado o tiene hambre
*/

const estaCansado = true;
const tieneHambre = true;
let respuesta;

if (estaCansado || tieneHambre) {
  respuesta = 'Va a bostezar o tiene hambre';
}else if(tieneHambre && estaCansado){
  respuesta = 'Tiene hambre y va a bostezar';

}


/*
 Escribe una condicion que verifique si se quedó dormido y se le olvido poner la alarma
*/

const seQuedoDormido = true;
const seLeOlvidoLaAlarma = true;
let respuestaDormido;

if (seQuedoDormido && seLeOlvidoLaAlarma) {
  respuestaDormido = 'Se quedo dormido';
}
