// TypeScript is a Statically Typed

let age=25   // Number
age=30  // number allowed
age="Twenty-five"  // age is become string   (ERROR)

console.log(typeof age) //string




//Type safety in TS
//Prevents incorrect operations

let result:number= "5" + 3  // Trying to assign string to number (Error)- type safety
console.log(result) //53


let message ="Welcome"
message =123  //Trying to assign number to string (Error)- type safety

console.log(typeof message)
console.log(message)

