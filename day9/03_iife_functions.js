/*
Immediately Invoked Function Expressions (IIFE) 

Immediately Invoked Function Expressions (IIFE) are JavaScript functions 
that are executed immediately after they are defined. 

They are typically used to create a local scope for variables to prevent them from polluting the global scope.

Syntax:

(function (){ 
// Function Logic Here. 
})();

*/


//Example 1: 

let myfun=function(){
    console.log("this is test..")
}

myfun()


(function(){
    console.log("this is test..")
}) ()


//Example 2:

let res =(function(){
    let x=10
    let y=20
    return x+y
}) ()

console.log(res)


//Example 3 : with parameters

(function(name){
    console.log(name)
})("John")

