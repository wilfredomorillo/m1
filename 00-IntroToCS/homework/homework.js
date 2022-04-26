'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  //para hacer de binario a decimal lo primero que devo hacer es determinar una variable
  //esta me va a decir como leer el lumero binario y determinar o convertir de un strin o comentario a un arraty
  // luego tengo q hacer un ciclo q me va a ir recorriendo este numero hasta alcance elsu exponente determinado 
  //agrupa su numer} y concatenarlo al anterior 
  //retormar el resultado 

  let angelica= num.split("").reverse()
  let result = 0
  for( var i= 0 ; i <angelica.length; i++){
    var wilfredo = 2**i
    result= result + wilfredo * angelica[i]

  }
return result
}

function DecimalABinario(num) {
  // tu codigo aca
  //para hacer de decimal a binario se tiene q 
  //dividir por la base 2 quedarce con el resto y ir dividiendo hasta q no se pueda dividir mas 
  //por lo que ecesitamos hacer un ciclo whaile (num >0) ir dividiendo el numero ente 2 redondear el resto y segur dividiendo 
let resultado = ""
  while (num>0){
 resultado= (num%2)+ resultado
 num= Math.floor(num/2)
  }
return resultado
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}