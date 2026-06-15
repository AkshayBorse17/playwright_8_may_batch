/*
Primitive Types
•	number → integers & decimals 
•	string → text 
•	boolean → true/false 
•	null → intentional empty value 
•	undefined → variable declared but not assigned 
•	any → allows any type (avoid using) 
•	union → multiple types (string | number) 
•	void → no return value (functions) 

Non-Primitive Types
    Array
    Function
    Class
    Interface

*/


// 1. Number
let age: number = 25;
let price: number = 199.99;
console.log("Numbers :", age, price);


// 2. String
let firstName: string = "Pavan";
console.log(`Hello, ${firstName}!`);


// 3. Boolean
let isAdmin: boolean = false;
console.log("is Admin: ", isAdmin);


// 4. Null
let emptyValue: null = null;
console.log("Value is :", emptyValue);


// 5. Undefined
let dob: undefined = undefined;
console.log("Date of birth:", dob);


// 6. Any (Avoid using in real projects)

let data :any = "Hello";
console.log("data has string value: ", data);
console.log(typeof(data)) // string

data=100  //Loses Type Safety 
console.log("data:", data)

data=true //Loses Type Safety 
console.log("data:", data)

let date : any ;
console.log(date) //undefined
console.log(typeof data);  // undefined // Note: type of 'any' returns  undefined.


//7. Union type - combination of multiple types

let id: number | string | null;

id=103
console.log(id)

console.log(typeof id) // number 

id="EMP103"
console.log(id)
console.log(typeof id) // string 

id=null
console.log(id)
console.log(typeof id) // object  // Note:type of null is 'object'



//8. void type (Function with no return value)

function test():void {
    console.log("I'm test")
}

test()


//9. never type (Function with no return value) - Special cases used by deveopers...

function test1(message:string):never {
    throw new Error(message)
}

function test2(message:string):never {
while(true){
}
}



