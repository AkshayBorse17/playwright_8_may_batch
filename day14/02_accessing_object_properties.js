let person = {
    firstName: "John",
    lastName: "Kenedy", 
    age: 50, 
    eyeColor: "blue"
};


//1. using Dot .

console.log(person.firstName) //John
console.log(person.age) //50
console.log(person.firstName+ " is "+person.age )


//2. using bracket  []
// when you specify attribute name/key inside the [], tehn "" are mandatory

console.log(person["firstName"]) //John
console.log(person["age"]) //50
console.log(person["firstName"]+ " is "+person["age"])


//3. Expression

let person = {
    firstName: "John",
    lastName: "Kenedy", 
    age: 50, 
    eyeColor: "blue"
};


let n1="firstName"
let ag="age"

console.log(person[n1]+ " is "+person[ag]) //John is 50
