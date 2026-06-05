// Arrow Functions (ES6) (Lambda Functions in Java)

/*
   Arrow functions are a concise way to write anonymous functions in JavaScript.
   They use the "=>" (fat arrow) syntax.

  There are 3 parts to a Arrow function.

  1.Parameters − A function may optionally have parameters
  2.The fat arrow notation (=>) − It is also called as the "goes to operator"
  3.Statements − represent the functions instruction set

  Syntax:

    let variable = (parameters) => 
    {
        // block of code
    }

    variable();
*/

// Example 1: Arrow Function with No Parameters and No Return Type

let greet=()=>{
    console.log("This is arrow function")
}

greet() //This is arrow function


// Example 2: Arrow Function with Parameters and Return Value

let add=(a,b)=>{
    return a+b
}

console.log(add(10,20))


// Example 3: Arrow Function with Implicit Return (No return statement , No braces)
/*
let add1=(a,b)=>{
    let res=a+b
    return res
}
*/

let add1=(a,b)=>a+b

console.log(add1(10,20))  //30


// Example 4 : Arrow Function with Rest Parameters

let size=(...elements)=>{
    
    for(let i=0;i<elements.length;i++)
    {
        console.log(elements[i])
    }
    
    return elements.length

}

console.log(size(10,20,30)) //3
console.log(size(10,"Ten",true,undefined,null)) 

//Example 5: Arrow Function with Default Parameters


let calculateDiscount=(price,rate=0.50)=>{
    let discount=price*rate
    console.log("Discount amount:", discount)
}

//calculateDiscount(1000,0.30) //300
calculateDiscount(1000) //500
