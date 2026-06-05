

// 1. length - Returns number of characters in a string
// lenght  is a property ( It is not a method)

let str="Welcome"
console.log(str.length)  //7


// 2. toUpperCase() and toLowerCase()
let str="Welcome"
console.log(str.toUpperCase()) //WELCOME
console.log(str.toLowerCase()) //welcome


// 3. charAt(index) - returns character of specified index in string
//    indexOf(string) - returns index of specified character in a string
// String index starts from Zero  (0)

// Welcome
// 0123456

let str="Welcome"
console.log(str.charAt(5)) //m   
console.log(str.indexOf('c'))  //3 
console.log(str.indexOf("come")) //3  // this will return the index of first character in a substring

console.log(str.indexOf('abc'))   //-1   / not thrown any error


// 4. substring(startIndex, endIndex)
//Extract the substring of the string 
// Note: endIndex is exclusive

let str="Welcome"
console.log(str.substring(0,5))  //Welco
console.log(str.substring(2,4))   //lc
console.log(str.substring(3,8))   //come


// 5. includes() - returns true or false (boolean)
// check string present in the main string or not
// Note: case-sensitive

let str = "Hello, JavaScript!"

console.log(str.includes("Hello"));  //true
console.log(str.includes("hello"));  //false
console.log(str.includes(" ")); //true
console.log(str.includes("!")); //true
console.log(str.includes("abc")); //false


// 6. startsWith() and endsWith() - return boolean values

let str = "Hello, JavaScript!"

console.log(str.startsWith("Hello"));  //true
console.log(str.endsWith("!")); 
console.log(str.endsWith("xyz")); //false
console.log(str.startsWith("H")); //true

// 7. replace()

let str = "Hello, JavaScript!"

console.log(str.replace("JavaScript","World")) //Hello, World!
console.log(str.replace("JavaScript","Java")) //Hello, Java!


// 8. split() - splits/separate string into an array based on delimiter
// Returns an array


//Ex1:

let str = "Hello World"

let arr=str.split(" ")    //here space is delimeter
console.log(arr) //[ 'Hello', 'World' ]
console.log(arr[0]) 
console.log(arr[1])


//Ex2:
let months="Jan,Feb,Mar"

let arr=months.split(",")  // Here  ,  is separator

console.log(arr) //[ 'Jan', 'Feb', 'Mar' ]


//Ex3:
console.log("Hello world".split(" ")) //[ 'Hello', 'world' ] 


//Ex4:
console.log("Hello".split(""))  //[ 'H', 'e', 'l', 'l', 'o' ]


//Ex5:
console.log("Hi".split(""))  //[ 'H', 'i' ]

//Ex6:

console.log("A-B-C-D".split("-")) //[ 'A', 'B', 'C', 'D' ]

console.log("A-B-C-D".split("-",2)) //[ 'A', 'B' ]   // here 2 is limit


//Ex 7:
console.log("A|B|C|D".split("|",3))  //[ 'A', 'B', 'C' ]


//Ex: 8

let str="abc@gmail.com,xyabc"

console.log(str.split(",")) //[ 'abc@gmail.com', 'xyabc' ]
console.log(str.split(",")[0])  //abc@gmail.com

console.log(str.split(",",1))  //[ 'abc@gmail.com' ]


//console.log(str.split("@")) //[ 'abc', 'gmail.com,xyabc' ]


//Ex: 9
str="a2b2c2d2e"

console.log(str.split("2")) //[ 'a', 'b', 'c', 'd', 'e' ]


//9. join() - The join() method joins all array elements into a string.
// This is an array method
// same as toString() for array, but in addition you can specify the separator
// arrays ---> string


const elements = ["Fire", "Air", "Water"];

console.log(elements.toString()) //Fire,Air,Water
console.log(elements.join()) //Fire,Air,Water

console.log(elements.join("")) //FireAirWater
console.log(elements.join("-")) //Fire-Air-Water


// 10. trim(), trimStart(), trimEnd()


mystring = "   welcome to JavaScript   ";

console.log(mystring.trim()) //welcome to JavaScript
console.log(mystring.trimStart())
console.log(mystring.trimEnd())


// 11. concat() : joining strings

str1 = "welcome";
str2 = " to JavaScript";
str3 = " and Playwright";

console.log(str1.concat(str2)) //welcome to JavaScript
console.log(str1+str2) //welcome to JavaScript

console.log(str1.concat(str2).concat(str3)) //welcome to JavaScript and Playwright