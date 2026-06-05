//var and let - Re-assignment Allowed
//const  - Re-assignment Not allowed (Only constants are allowed- cannot change the value)

// Example 1: var allows re-assignment

var age=25
age=30;  // Allowed
console.log(age)  //30


// Example 2: let allows re-assignment
let score=50
score=60  // Allowed
console.log(score)

// Example 3: const does not allow re-assignment
const pi=3.14;
//pi=4.5 //TypeError: Assignment to constant variable.
console.log(pi)





//declaration vs assignment

var x; //declaration
x=10 // assignment

var x=10; // declaraion + assignemnt
