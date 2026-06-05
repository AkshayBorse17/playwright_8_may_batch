//Hoisting (Variable Access Before Declaration) 

//Example1 : 

//console.log(a); //when i execute only this statement then ReferenceError: a is not defined

//console.log(a)  //Undefined (var is hoisted)
var a=10;
console.log(a)


//Exampe 2 : using let - Hoisting is not allowed

console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b;


//Example 3: using const - Hoisting is not allowed
console.log(c);
const c=100; //ReferenceError: Cannot access 'c' before initialization

