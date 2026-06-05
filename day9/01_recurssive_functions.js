/*
Recursive Function:

A function that calls itself until a condition is met. 
Very useful for problems like factorial, Fibonacci, or tree traversals.
*/

//Example 1: Factorial a number

/*
2 =  2 * (2-1) =2
5!  = 5 *4 *3 *2*1   (or)
5! = 1*2*3*4*5
10!  = 10*9*8*7*6*5*4*3*2*1 

n! = n × (n-1) × (n-2) × ... × 1
0! = 1

!3 = 3 * 2 *1 = 6

Multiply the number with factorial of previous number until you reach 0.
*/

//Factorial a number

function factorial(n)  // 3 2 1 0
{
    console.log(n)    //3//2//1//0
    if(n===0) //false  false false true
        return 1
    
    prevNum= n*factorial(n-1)
    return prevNum
}

console.log(factorial(3))  //6
//console.log(factorial(5))  //120


//Example 2: Fibonacci sequence:
// 0, 1, 1, 2, 3, 5, 8, 13, ...

//10
// 0 1 1 2 3 5 8


function fibonacci(n) //0  1 2 3
{
    if(n===0)
        return 0;
    if (n===1) 
        return 1

    nextNum=fibonacci(n-1)+fibonacci(n-2)   
    return nextNum
}

function printFibonacciSeries(n)
{
    for(let i=0;i<n;i++) //0 1 2 3
    {
        console.log(fibonacci(i)) //0 1 2  3                    
    }
}
printFibonacciSeries(5)

