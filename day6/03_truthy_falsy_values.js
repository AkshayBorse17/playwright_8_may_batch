//JavaScript has truthy and falsy values. 
// Truthy: non-empty strings, non-zero numbers, objects {}, arrays [].
// Falsy: empty string "", null, undefined, NaN, 0. 

//Truthy values

/*
let mystr="hello"
if(mystr==="hello"){
    console.log("String is truthy")
}
 */

if("hello"){
    console.log("String is truthy")
}


if(42){
    console.log("Number is Truthy.")
}


if({})
{
   console.log("Empty object is truthy.") 
}


if([])
{
   console.log("Emty array is truthy") 
}

//Falsy values

if(""){
    console.log("Won't print anything..")
}

if(null){
    console.log("Won't print anything..")
}

if(undefined){
    console.log("Won't print anything..")
}

if(NaN){
    console.log("Won't print anything..")
}


if(0){
    console.log("Won't print anything..")
}


// true
if(!0){
    console.log("this is non-zero....")
}
