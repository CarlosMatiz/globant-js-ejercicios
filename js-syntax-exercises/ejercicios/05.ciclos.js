/*
  Ciclos
*/

let lista = [2, 10, 50];

/*
  Use un ciclo "for" para recorrer la lista de numeros y llamar a la funcion check con cada elemento de la lista
  NOTA: check es una funcion que recibe cualquiera dato.
  */
function cicloFor(check) {

 for (var i = 0; i < lista.length; i++) {
    	lista[i] = check;
	}

}
/*
  Usa un ciclo "while" para recorrer la lista de numeros y llamar a la funcion check con cada elemento de la lista
*/
function cicloWhile(check) {

	let i = 0;

 while (i < 2)	 {              
 		lista[i] = check;
 		i++;
	}
}

