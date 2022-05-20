'use strict'

const { hasEmbeddedError } = require("@11ty/eleventy/src/EleventyErrorUtil")

// Implementa la clase LinkedList
// tiene metodos `add`, `remove`, y `search`
// add: Agrega un nuevo nodo en el final de la lista
// Ej:      Head --> null
// add(1):  Head --> 1 --> null
// add(2):  Head --> 1 --> 2 --> null
// remove:  Elimina el último nodo de la lista y devuelve su valor. (Tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía)
// Ej:         Head --> 1
// remove():   Head --> null y devuelve 1
// search: Busca un valor dentro de la lista. Puede recibir un valor o una función. Si no hubiera resultados, devuelve null.

function LinkedList() {
  //creamos un construtor 
this.head= null
this.length= 0
}

function Node(value){
this.value=value
this.next= null
 
}
LinkedList.prototype.add=function(data ){
  let node= new Node(data)  //si la lista esta vacia 
  if ( this.head=== null){
    this.head=node
  }// AHHHH!!!!! PERO SI LA LISTA NO ESTA VACIA  ENTONCES PREGUNTAMOS NO ESTA VACIA 
  else {let current= this.head
while(current.next){
  current=current.next
}
current.next= node 
  }
this.length++
return node 
}
 LinkedList.prototype.remove= function(){/// primero debo recorre la lista  verificar si esta vacia 
  //crear uan variable current 
  let current= this.head

  if ( this.length===0 ) return null //el largo de la lista no tiene nada lo verificamos asi
  
  //de lo contratio seria preguntar tiene algun elemento la lista si si lo tiene

  else if ( this.length===1){
    let aux= current.value // aqui guardo ese valos o argument para luego retornarlo
    this.head= null 
    this.length--
    return aux
  }
  while(current.next.next){
    current=current.next //de esta forma nos desplazamos por la lista y verificamos si tenemos un null delante del nodo 

  }
  let aux = current.next.value// verifico el valor accinado a la lista 
  current.next=null
  this.length--
  return aux


  }


  LinkedList.prototype.search = function(value) { //tercer nodo
    let current = this.head;
  
    while(current) {
      if(current.value === value) return current.value;
  
      else if(typeof value === 'function') {
        if(value(current.value)) {
          return current.value;
        }
      }
      current = current.next;
    }
    return null;
  }
 





 




// Hash Table( ver información en: https://es.wikipedia.org/wiki/Tabla_hash)
// Una Hash table contiene un arreglo de "contenedores" o buckets donde puede guardar información.
// Para este ejercicio, generar 35 buckets para la Hash Table, y realizar los métodos, get, hasKey
// Para almacenar un valor asociado a una key (string):
//    - Se pasa ese valor a la función hash(Pista: usar la función charCodeAt), que determina la posición en que debe ir en el arreglo. 
//    - Luego el elemento se inserta(llamando al método set) en la posición(índice) devuelta. 
// Para buscar el valor por su key:
//    - Sólo habrá que pasarle a la función hash la clave del elemento a buscar y ésta determinará la posición 
//      en que se encuentra.
//    - Usar el número obtenido, para buscar(llamando al método get) el contenedor o bucket donde está el valor.
//    - Retornar dicho valor.

function HashTable() {

  this.numBuckets = 35; // número de casilleros en la tabla
  this.casilleros = [];
}

HashTable.prototype.hash = function(value) { //'foo'
  var acumulador = 0;

  for (let i = 0; i < value.length; i++) {
    acumulador = acumulador + value.charCodeAt(i);    
  }
  return acumulador % this.numBuckets; //4
}

HashTable.prototype.set = function(key, value) {
  if(typeof key !== 'string') {
    throw new TypeError('Keys must be strings');
  }

  var posicion = this.hash(key);
  this.casilleros[posicion] = this.casilleros[posicion] || [];
  this.casilleros[posicion].unshift({
    key: key,
    value: value
  })
}

HashTable.prototype.get = function(key) {
  var posicion = this.hash(key);
  for (let i = 0; i < this.casilleros[posicion].length; i++) {
    if(this.casilleros[posicion][i].key === key) {
      return this.casilleros[posicion][i].value
    }
  }

  return false;
}


HashTable.prototype.hasKey = function(key) {
  var elemento = this.get(key) // valor ó false

  if(elemento) return true;

  return false;
}




// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable
};
