'use strict'
// Las funciones nFactoria y nFibonacci deben resolverlas
// usando recursión. Una vez realizadas de esa forma pueden probar hacerlas
// de forma iterativa pero esto último no es obligatorio.

function nFactorial(n) {
  // devolvé el factorial de n (n!)
  // ej:
  // el factorial de 3 es 6 (3 * 2 * 1)
  if (n===  1 || n ===0) { return 1}
  
  return n * nFactorial (n-1)
}

function nFibonacci(n) {
  // Secuencia de Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144,…
  // Retorna el enésimo numero de la serie
  // nFibonacci(0) // 0  // el elemento 0 es cero
  // nFibonacci(1) // 1 // el elemento 1 es 1
  // nFibonacci(6) // 1 // el elemento 6 es 8
if ( n===0) return 0
if (n=== 1 ) return 1
 return nFibonacci(n-1) + nFibonacci (n-2)
 //secuencia fibonacci se puede resilver iterativamente osea 
 //con un for forech wile y cualquier otro metodo para para hacer un contador 
 // decimos que la secuenca fibonacci se resulve con recurcion ya q con esta podemos llamar nuevamente a la funcion 
 //y de esta forma poder tomar los elementos de dicha funcion y utilizarlos para resolver esto de una forma mas sensilla e intuitibamente 


}
function Queue(){
// Para esta parte no es necesario utilizar recursión.
// Implementa la clase Queue que debe contener los siguientes métodos:
// enqueue: Agrega un valor a la queue. Respeta el orden existente.
// dequeue: Remueve un valor de la queue. Obedece a FIFO y respeta el underflow (devuelve undefined cuando la queue tiene size cero, o sea, cuando no tiene ningún elemento).
// size: Devuelve el número de elementos que contiene la queue.
this.queue= []


Queue.prototype.size= function(){
  return this.queue.length // contabilizar cuantos elementos tiene la cola 

}


}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Queue,
  nFactorial,
  nFibonacci
};
