/*

JavaScript Math METHODS

abs(x)	Returns the absolute value of x
ceil(x)	Returns x, rounded upwards to the nearest integer
floor(x)	Returns x, rounded downwards to the nearest integer
pow(x, y)	Returns the value of x to the power of y
random()	Returns a random number between 0 and 1
round(x)	Rounds x to the nearest integer
sqrt(x)	Returns the square root of x
trunc(x)	Returns the integer part of a number (x)


*/

let num = -7.8;

console.log("Original Number:", num);

// abs(x) → Absolute value
console.log("Math.abs(num):", Math.abs(num)); // 7.8

// ceil(x) → Round UP to nearest integer
console.log("Math.ceil(num):", Math.ceil(num)); // -7

// floor(x) → Round DOWN to nearest integer
console.log("Math.floor(num):", Math.floor(num)); // -8

// round(x) → Round to nearest integer
console.log("Math.round(num):", Math.round(num)); // -8

// trunc(x) → Removes decimal part
console.log("Math.trunc(num):", Math.trunc(num)); // -7

// sqrt(x) → Square root
let value = 16;
console.log("Math.sqrt(16):", Math.sqrt(value)); // 4

// pow(x, y) → x raised to power y
console.log("Math.pow(2, 3):", Math.pow(2, 3)); // 8

// random() → Random number between 0 and 1
console.log("Math.random():", Math.random()); // 0.17012762247705182


// Bonus: Random number between 1 to 10
let randomNum = Math.floor(Math.random() * 10) ;  //1.7012762247705182
console.log("Random number (1-10):", randomNum);



//splitting the expression : Math.floor(Math.random() * 10) ;

let rand=Math.random();
console.log("Randome number:",rand) //0.20173840993638925

let rand1 = rand * 10
console.log("rand *10 : ",rand1 ) //2.0173840993638925

let rand2 = Math.floor(rand1)
console.log("Math.floor : ",rand2 ) //2

