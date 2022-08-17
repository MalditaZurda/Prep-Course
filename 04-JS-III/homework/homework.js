// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length - 1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for (let i = 0; i < array.length; i++){
    array[i] = array[i] + 1;
    continue;
  }
  return array;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  let i = 0;
  let str = palabras[0]
  while(i < palabras.length - 1){
    i++;
    str = str + ' ' + palabras[i];
    continue;
  }
  return str;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  let i = 0;
  while (i < array.length){
    i++;
    if (array[i] === elemento){
      return true;
    }else if(array[i] !== elemento){
      continue;
    }
  }
  if (i === array.length){
    return false;
  }
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  let resultado = null;
  for(let i = 0; i < numeros.length; i++){
    if(parseInt(numeros[i]) === numeros[i]){
    resultado = resultado + numeros[i]
    }else {
      return false;
    }
  }
  return resultado;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  let suma = null;
  let promedio = null;
  let i = 0;
  while(i < resultadosTest.length){
    if(parseInt(resultadosTest[i]) === resultadosTest[i]){
      suma = suma + resultadosTest[i]; 
      i++;
    }else{
      return false;
    }
    
  }
  promedio = suma / resultadosTest.length;
  return promedio;
}


function numeroMasGrande(numeros){
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  let mayor = numeros[0];
  let i = 0;
  if (parseInt(numeros[i]) !== numeros[i]){
    return false;
  }else {
    while(i < numeros.length){
      if(mayor > numeros[i]){
        i++;
        continue;
        
      }else{
        mayor = numeros[i];
        i++;
      }
    }
    return mayor;
  }
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  let resultado = 1;
  if(arguments.length === 0){
    return 0;
  }else if(arguments.length === 1){
    return arguments;
  }else {
    for(let i = 0; i < arguments.length; i++){
     resultado = resultado * arguments[i];
    }
  } return resultado;
     
} 

function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  let mayores = 0;
  for(let i = 0; i < arreglo.length; i++){
    if(arreglo[i] > 18){
      mayores++;
      continue;
    }else {
      continue;
    }
  }
  return mayores;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if (numeroDeDia - 1 === 0 || numeroDeDia - 1 === 6){
    return "Es fin de semana";
  }else if(numeroDeDia - 1 > 0 && numeroDeDia - 1 < 7){
    return "Es dia Laboral";
  }
  
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  if(parseInt(n) === n){
    n = n.toString()
    if(n[0] === "9"){
      return true;
    }else if(n[0] !== "9"){
    return false;
    }
  } 
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  let i = 0;
  let prueba = arreglo[0];
  while (i < arreglo.length){
    if (prueba === arreglo[i]){
      prueba = arreglo[i];
      i++;
    }else{
      return false;
    }
    if(i === arreglo.length){
      return true;
    }
  }
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  let mesPedido = [];
  for(let i = 0; i < array.length; i++){
    if (array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre"){
      mesPedido.push(array[i])
      continue;
    }else{
      continue;
    }
  }  
  if(mesPedido.length < 3){
      return "No se encontraron los meses pedidos";
  } else {
    return mesPedido;
  }
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  let mayores = [];
  for (let i = 0; i < array.length; i++){
    if(array[i] > 100){
      mayores.push(array[i]);
      continue;
    }else{
      continue;
    }
  }
  return mayores;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  let valores = [];
  let i = 0;
  while(i < 10){
    i++;
    numero = numero + 2;
    if(numero !== i){
      valores.push(numero);
    }else {
      break;
      
    }
    
  }
} 



function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  let array = [];
  for (let i = 0; i < 10; i++){
    if( i === 5) {
      numero = numero;
      continue;
    } else {
      numero = numero + 2;
      array.push(numero);
      continue;
    }
  }
  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
