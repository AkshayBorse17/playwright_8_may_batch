// var → Function Scope 
// Variables declared with var are accessible anywhere inside the function. 
// Can lead to unexpected behaviour because they are not limited to blocks (if, for, etc.).

//Scope - accessible area


//Example 1: var (Function Scope)

function test(){
    if(true){
        var msg="Hello"
        console.log(msg)
    }
    console.log(msg)
}

test() // calling teh function


//let & const → Block Scope 
function test1(){
    if(true){
        let msg="Hello"
        let greet="Welcome"
        console.log(msg) // allowed
        console.log(greet) // allowed
    }
    console.log(msg)
    //console.log(greet)
}

test1()

// Example 3: Scope Difference (Function vs. Block Scope) - var, let & const

function test2()
{
    if(true)
    {
        var num1=10;
        let num2=20;
        const num3=30
        //console.log(num1)  // works
        //console.log(num2)// works
        //console.log(num3)// works
    }
    console.log(num1) // works  // function scope
    console.log(num2)  //num2 is not defined   // block scope
    console.log(num3) //num3 is not defined  // block scope
}

test2()




//Another example.



function test3()
{
     let num2=20;
     const num3=30
    if(true)
    {
        var num1=10;
              
        //console.log(num1)  // works
        console.log(num2)// works
       console.log(num3)// works
    }
   // console.log(num1) // works  // function scope
   // console.log(num2)  //num2 is not defined   // block scope
   // console.log(num3) //num3 is not defined  // block scope
}


test3()



