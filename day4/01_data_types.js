/*
JavaScript supports the following data types:

1. Number
2. BigInt (Introduced in ES2020)
3. Boolean
4. String
5. Object
6. null
7. Undefined
*/


/*
Number Systems (Ways to represent numbers):

1. Decimal (Base 10)  → 0–9
2. Octal (Base 8)     → 0–7
3. Binary (Base 2)    → 0–1
4. Hexadecimal (Base 16) → 0–9, A–F

*/

// 1. Number
// Used to represent both integers and floating-point (decimal) numbers

let positiveNumber = 42;        // Positive integer
let zeroValue = 0;              // Zero value
let negativeNumber = -7;        // Negative integer

let discountRate = 3.14; 
console.log(discountRate)

console.log(typeof positiveNumber)
console.log(typeof negativeNumber)
console.log(typeof discountRate)

// Even though written as 200.00, JavaScript treats it as 200 (integer)
let priceValue=200.00
console.log(priceValue)


//Different number formats
let hexnumber=0xFF;   // equals to 255 in decimal number system
console.log(hexnumber) //255

let binumber=0b1010;   // equals to 10 in decimal number system
console.log(binumber)  //10

let octnumber= 0o77 // equals to 63 in decimal number system
console.log(octnumber)  // 63


//Range of number
console.log(Number.MAX_SAFE_INTEGER) //9007199254740991
console.log(Number.MIN_SAFE_INTEGER) //-9007199254740991


// Precision limitation in Number type
let bigdecimalNumber=12.7654565434567878  // uptp 15 digits accepted after decimal. 
console.log(bigdecimalNumber) //12.765456543456787  last digit 8 is truncated


// 2. BigInt (Introduced in ES2020)
// Used to represent very large integers beyond Number limit. suffix 'n' should be added

let x=90071992547409998989n
console.log(typeof x) //bigint

//let y=12.765456543456787889n  //Invalid.  A bigint literal must be an integer.


// 3. Boolean
// Represents true or false values

let status=true
let hasPermission=false

console.log(typeof status)  //boolean
console.log(hasPermission) //false


// 4. String
// Used to represent text

//double quotes
let doubletext="Welcome"
console.log(doubletext)

//single quotes
let singletext='Welcome'
console.log(singletext)

// He said "Hi"

//let greet="He said "Hi""; // invalid
//let greet='He said 'Hi''; // invalid

let greet="He said 'Hi'";  // valid
console.log(greet)

greet='He said "Hi"';  // valid
console.log(greet)

//Backtick
let sentence=`Hi welcome 
to javascript 
class` 

let sentence=`Hi welcome to javascript class` 
console.log(sentence)

// Template Literal
// expected : Hi, Pavan Kumar
let first_name="Pavan"
let full_name=`Hi ${first_name} Kumar`
console.log(full_name)

// expected: 2+2=4

let num1=2
let num2=2
let res=num1+num2
console.log(res)
console.log("2+2=",res)

//console.log(`${num1}+${num2}=`,res) //valid
console.log(`${num1}+${num2}= ${res}`) //valid


//storing a File path in a variable
// "C:\Automation\myworkspace\file.txt"

// let path="C:\Automation\myworkspace\file.txt"  // Invalid
//console.log(path) //C:Automationmyworkspaceile.txt

//let path='C:\Automation\myworkspace\file.txt'  // Invalid
//console.log(path) 

//Correct way
//let path="C:\\Automation\\myworkspace\\file.txt"  // valid
let path='C:\\Automation\\myworkspace\\file.txt'  // valid
console.log(path)

// store URL 
let url="https://www.opencart.com/index.php"
console.log(url) //https://www.opencart.com/index.php


/*
Note:
'//' → Used in URLs (forward slashes)
'\\' → Used in file paths (escape backslash)
*/

//Object
// A collection of key-value pairs

let employee={ 
    name:"John",
    age:35,
    salary:508000
}

console.log(typeof employee) //object 
console.log(employee)
console.log(employee.name) // John



// null
// We explicitly assign null when we want to say "no value"
//let selectedUser = 100;
selectedUser = null;
console.log("Null value:", selectedUser); 
console.log(typeof selectedUser); //object //this is a known JavaScript quirk


// 2. undefined → "not yet assigned"
// Variable declared but no value assigned

let myname;
console.log(myname) //undefined


let user={age:30}
console.log(user.name) //undefined


function greet(name,age)
{
    console.log(age)
}

greet("john") //undefined


let colors=["red","green","blue"]
console.log(colors[5]) //undefined
