/*
//Immutable - cannot change/modify  ex: string
//Mutable - can change/modify  ex: arrays


*/


//Ex1:

let num=10

let res=num+5
console.log(res)  //15

console.log(num) //10 (original value unchanged) - immutable


//Ex2: strings are immutable
/*
let str="welcome"

let modifiedstring=str.concat(" to javascript")

console.log(modifiedstring)
console.log(str) // welcome (original string unchanged)// immutable 
*/

let str="welcome"
console.log(str.concat(" to javascript"))
console.log(str) // welcome (original string unchanged)// immutable 



//Ex:3 : arrays are mutable

let a=[10,20,30]

console.log(a) 
a.push(40,50)

console.log(a) //[ 10, 20, 30, 40, 50 ]



let str="welcome"
//console.log(str.substr(2,5)) //lcome



