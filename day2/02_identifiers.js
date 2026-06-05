//create a variable

let a=10;
a=20;
console.log(a) //20

const year=1995
year=2001  // Invalid bcoz it is constant (fixed)
console.log(year)

// Rule of Identifier:
// 1. Must start with a letter, underscore, or dollar sign
// 2. Can contain letters, numbers, underscores, and dollar signs
// 3. Cannot start with a number
// 4. Cannot be a reserved keyword
// 5. Cannot contain spaces
// 6. Cannot contain special characters other than underscore and dollar sign
// 7. Case sensitive


// 1. Must start with a letter, underscore, or dollar sign

let firstName="Pavan"  // Start with letter
let _count=10  // Start with underscore

//let 1name="kumar"  // Invalid , should not start with number
//let @price=100;  // Invalid , shoudl not start with special character except underscore, or dollar sign


// 2. Can contain letters, numbers, underscores, and dollar signs
let user1_name$ = "John";


// 3. Cannot start with a number
//let 1value=100;  // invalid
let value1=100  // valid


// 4. Cannot be a reserved keyword

//let for = 10; // Invalid (reserved keyword)
let total=10;  //valid

// 5. Cannot contain spaces

//let first name = "Pavan";  // invalid , spaces not allowed
let firstName= "Pavan";  // valid

// 6. Cannot contain special characters other than underscore and dollar sign

//let user@name = "abc";  // Invalid special character is used
let user_name = "abc";   // valid

// 7. Case sensitive
let myVar=10;
let myvar=200;

console.log(myVar)
console.log(myvar)


// Checking

// let break="let's go"  // Invalid , break is a keyword
// console.log(break)


