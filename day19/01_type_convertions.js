/*


Type converion/Type casting

converting data to one format to another format..



Number() → converts to number
parseInt() → converts to integer
parseFloat() → converts to decimal
String() → converts to string
Boolean() → converts to true/false

*/

//1 . String to Number  -Number() 

let str="123.45"
let strnum=Number(str)

console.log(typeof(strnum)) //Number
console.log(strnum)

console.log(parseInt(str)) //123
console.log(parseFloat(str)) //123.45

console.log(parseFloat("123"))

//invalid conversion
console.log(Number("abc")) //Nan
console.log(Number(" ")) //0
console.log(Number(""))  //0


//2. Number to String - String()    toString()

//let num=456

let num=456.787

//let strnum= String(num)
let strnum= num.toString()

console.log(typeof(strnum)) //string
console.log(strnum)


//3. Boolean to Number   ---Number()

//let b=true

let b=false


let num=Number(b)

console.log(typeof(num))  // number
console.log(num) 

//4. Number to Boolean   - Boolean()
// except 0 , any other number returns true

let num=1
console.log(Boolean(num)) //true


let num=0
console.log(Boolean(num)) //false

let num=23434
//let num=01234   // octor number
console.log(Boolean(num)) //true


//// 5. String to Boolean

let str="welcome"
console.log(Boolean(str))  //true

let str=""
console.log(Boolean(str)) //false


////// 5. Boolean to String   String()

//console.log(String(true))
//console.log(String(false))


console.log(typeof(String(true))) //true
console.log(typeof(String(false)))  //false


//null & udefined conversions..

console.log(Number(null))  //0
console.log(Number(undefined))  //NaN


console.log(String(null))  //null in string format
console.log(String(undefined))  //undefined in string format