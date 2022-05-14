//factorial de un numero 
/* function factorial(n){
    if (n=== 1) return 1
    if (n<0) return "ingresa algo aqui si no sirve loco"
    return n*factorial (n-1)//para calcular un numero factorial de un numero necesito es el numero * factorial del numero -1
 }
console.log(factorial(-4)) // tengo un limite para calcular el factorial 
*/

/*
el objerto set permite 
almacenar valores unicos del cualquier tipo 
incluso valores primitivos u referencias a objetos 
un valor del set solo puede estar una vez esta esla unica cindicion del 
set 
*/
/*var array= [1,2,3,4,4,5,5,1,2,33]
//let user = new objeto 
var mySet = new Set(array)
console.log("array:", array)
console.log("set:",mySet)

mySet.add(1)
mySet.add(3)
mySet.add("some text")

const o={ a: 1, b: 2}
mySet.add(o)
console.log( "set modificado:", mySet)

console.log("size:", mySet.size)
mySet.delete(1)
console.log("set eliminado 1:", mySet)*/

let set0 = new Set()

let wilfredo = {name: "wilfredo"}
let queso = {name: "queso"}
let angelica = {name: "angelica"}

set0.add(wilfredo)
set0.add(queso)
set0.add(angelica)
set0.add(wilfredo)
/*set0.add({name: "wilfredo"})
set0.add("queso")
set0.add(["hola", "queso papi"])*/

console.log (set0)

for (let user of set0){
    console.log(user.name)
}
console.log(typeof(set0))
console.log(typeof(array))

class hastaball {
    constructor() {
        this.hast = []


        hastaball.prototype.add = function (data) {
            this.hast.push(data)
        }


        hastaball.prototype.delete = function () {
            this.hast.pop()

        }


        hastaball.prototype.show = function () {
            this.hast.length()

        }


    }
}




