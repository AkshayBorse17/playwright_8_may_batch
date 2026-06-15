// Types (Data Types), 
// Type Annotations 
// Type Inference


//Types : Declaring variables with types 

//   let varname : type = value

let score: number = 100;
let isDone: boolean = true;


// Type Annotations
//Explicitely specifying the data type using  ':'

let person_name:string="John"  // variable annotating with string type
let person_age: number=30  // variable annotating with number type


//Function Parameter & Return type Annotations
function greet(name:string,age:number):string
{
    return `Hello , ${name}! you are ${age} years old`
}

console.log(greet("John", 30))


//Object Type Annotations
let user:{name:string, age:number}={ name:"john", age:30}
console.log(user)


//Array Annotations
let numbers:number[]=[1,2,3]
let names:string[]=["John","smith"]
let mixed:(number | string)[]=[1,2,"john","scott"]


// Type Inference :TS automatically guesses the data type if you don’t annotate it.

let message ="Welcome"  // TypeScript infers `message` as `string`
let count =30        // TypeScript infers `count` as `number`

message=123  // Error