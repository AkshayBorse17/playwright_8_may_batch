
/*
object
string
array

*/

//1. object destructing / unpacking the data

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50
};

let {firstName,lastName,age}=person

console.log(firstName)
console.log(lastName)
console.log(age)


//string destructuring

let name="JS"

let [char1,char2]=name

console.log(char1)   //J
console.log(char2)   //S


// Array destructuring..


const colors = ["Red", "Green", "Blue"];

//const [first,second,third]=colors

const [first,second]=colors

console.log(first)
console.log(second)
//console.log(third)
