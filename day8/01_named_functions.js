// Named Function: A function that is declared with a name.

/* Syntax

//function declaration
function functionName(parameter) 
{
    // block of code
}

//calling the function
functionName()   

*/

// Example 1: Named Function with no parameters and no return type

display()   // calling function before declaration

function display()    // no parameters
{
    console.log("welcome to javascript")
}

//display()   // calling function



// Example 2: Named function with parameters and return type

function addNumbers(x, y)   // parameters
{
    return x+y
}

//let res=addNumbers(2,3)
//console.log(res)

//console.log(addNumbers(2,3)) // arguments


// JavaScript does NOT throw compile-time errors like TypeScript
//console.log(addNumbers(1))  //NaN
// console.log(addNumbers(1,2,5))  //3   ignores extra value which is 5


// Example 3: Named function with Rest parameters
// collect all remaining arguments into an array. 
// Very useful when you don’t know how many arguments will be passed.

function addNumbersRest(...nums){
    //console.log(nums)
    let sum=0

    for(let i=0;i<nums.length;i++)
    {
        sum=sum+nums[i]
    }
    console.log("total:", sum)
}

addNumbersRest(10)
//addNumbersRest(10,20) //30
//addNumbersRest(10,20,30)  //60


// Example 4: Named function with Rest parameters - multiple types

function findElements(...elements){
    return elements.length
}
//console.log(findElements(10,20,30,40,50)) //5
console.log(findElements(10,"Ten",true,undefined,null)) //5



//Printing te values
function printElements(...elements){
    for(let i=0;i<elements.length;i++)
    {
        console.log(elements[i])
    }
}

printElements(10,"Ten",true,undefined,null)



// Example 5: Named function with Default Parameters

function calculateDiscount(price,rate=0.50){
    let discount=price*rate
    console.log("Discount amount:", discount)
}

//calculateDiscount(1000,0.30) //300

calculateDiscount(1000) //500