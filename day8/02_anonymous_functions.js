// Anonymous Function (Unnamed Function)

/*
   An anonymous function is a function that does not have a name.
   It is assigned to a variable, which acts as its name.

   Syntax:

   let variable = function(parameters) 
   {
       // function body
   };

   variable(); // Calling the function

*/

// Example 1: Anonymous function

let msg=function(){
    return "Welcome to js"
}

console.log(msg()) //Welcome to js


// Example 2: Anonymous Function with Parameters

let multiply=function(a,b){
    return a*b
}

console.log(multiply(2,5))  //10
