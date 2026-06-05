/*
Type Conversions refer to converting data from one data type to another.
These conversions are essential for JavaScript to perform operations and comparisons effectively. 
JavaScript variables can contain the values of any data type as it is a weakly typed language.

There are two types of type conversion in JavaScript −

Implicit type conversion
Explicit type conversion


*/

/*
1. Implicit Type Conversion (Automatic)
JavaScript automatically converts data types when performing operations.
*/

//Example 1: String + Number
let result = "10" + 5;
console.log(result);   // "105"

//Note: Number 5 is converted to string → concatenation happens


//Example 2: String - Number
let result = "10" - 5;
console.log(result);   // 5

//Note: String "10" is converted to number → subtraction happens



//Example 3: Boolean to Number
console.log(true + 1);   // 2
console.log(false + 1);  // 1

//Note:  true → 1, false → 0



//Example 4: Null Conversion
console.log(null + 5);   // 5   Here null becomes 0


//Example 5: Undefined Conversion
console.log(undefined + 5);   // NaN   Note: undefined cannot convert → results in NaN

//Example 6: Comparison Conversion
console.log("5" == 5);   // true
console.log("5" === 5);  // false

 // == converts type
 // === checks strict type (no conversion)


/*
 2. Explicit Type Conversion (Manual)
 Developer manually converts data types using built-in functions.
*/

//Example 1: Convert to Number

let str = "123.45";

console.log(Number(str));     // 123.45
console.log(parseInt(str));   // 123
console.log(parseFloat(str)); // 123.45


// Example 2: Convert to String
let num = 100;
console.log(String(num));  // "100"


//Example 3: Convert to Boolean
console.log(Boolean(1));     // true
console.log(Boolean(0));     // false
console.log(Boolean("Hi"));  // true
console.log(Boolean(""));    // false

//Example 4: Using toString()
let num = 50;

console.log(num.toString());  // "50"


//Example 5: Convert Boolean to Number
console.log(Number(true));   // 1
console.log(Number(false));  // 0


// Tell me
console.log("5" + 2);  // ?
console.log("5" - 2);  // ?
