
//Method 1: creating an array using leteral

let a=[]   // empty array
console.log(a)  //[]
console.log(typeof(a)) // object
console.log(a.length) //0   , no elements


//creating an array with some elements

/*
let b=[]
b[0]=10
b[1]=20
b[2]=30
*/

let b=[10,20,30]
console.log(b)  //[ 10, 20, 30 ]
console.log(b.length)  //3   lenght of an array, count from Zero (0)



//Method : 2 : Creating an array using 'new' keyword and Array()- constructor 

let arr=new Array(10,20,30)
console.log(arr)   //[ 10, 20, 30 ]
console.log(typeof(arr))  //object
console.log(arr.length)  //3



//Problem

//Example 1:
let a1=[5]
console.log(a1) //[ 5 ]
console.log(a1[0]) //5
console.log(a1.length) //1


//Example 2:
let a2=new Array(5)    // here 5 is not considered as a value/element. 5 is considered as number of spaces
console.log(a2) //[ <5 empty items> ]
console.log(a2[0]) //undefined
console.log(a2.length)  //5  - lenght of an array
