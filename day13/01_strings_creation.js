
/*
single    '   '
double    "  "
backtick   ` `

*/


let str="welcome"
let str='welcome'

let str=`welcome`

console.log(typeof(str))


let num=10

console.log("Number is:",num)  //valid

console.log("Number is:${num}")  //invalid
console.log('Number is:${num}')  //invalid

console.log(`Number is:${num}`)  //valid






