/* Value Assignment at the Declaration */


//Example 1: var can be declared without assignment (value assignment is  optional)
var x;
console.log(x)  // undefined

//Example 2: let can be declared without assignment(value assignment is  optional)
var x;
let x;
console.log(x)  // undefined


// Example 3: const must be assignend at declaration (value assignment is mandatory)
var x;
//const x; // Error: Missing initializer in `const` declaration
const x=100; // we must assign the value to the const variable
console.log(x)