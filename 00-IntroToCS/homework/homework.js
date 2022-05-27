'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
let angelica= num.split("").reverse()
let result=0
for (let i = 0; i < angelica.length; i++) {
 var queso= 2**i
 result= result+ queso*angelica[i]

}
return result

}

function DecimalABinario(num) {
  // tu codigo aca
let result =""

while(num>0){
   result = (num%2)+result
  num= Math.floor(num/2)
 
}
return result
}


//no toques esto aqui abajo mi rey 
module.exports = {
  BinarioADecimal,
  DecimalABinario,
}