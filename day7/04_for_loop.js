// For Loop: A for loop is typically used when the number of iterations is known beforehand.
//  Use when you know how many times to iterate 
//  Best for performance and control


/* Syntax:
// ICU - Initilize, Conditoin, Updation(inc/dec)

for(inilization; condition ; inc/dec)
{
 //statements;
}

*/

//Example 1:  print 1......10

for(let i=1;i<=10;i++)
{
    console.log(i)
}


//Example 2: print even numbers between 1---10

//Method1
for(let i=2;i<=10;i+=2)
{
    console.log(i)
}


//Method2
for(let i=1;i<=10;i++)
{
    if(i%2===0){
    console.log(i)
    }
}

// Example 3: 10 to 1
for(let i=10;i>=1;i--)
{
    console.log(i)
}


//Example4:

let i  // global

for(i=1;i<=5;i++)
{
    console.log(i)
}

console.log("value of i is: ", i)  //6

//Example5

for(let i=1;i<=5;i++)
{
    console.log(i)
}

console.log("value of i is: ", i)  //ReferenceError: i is not defined


//Example6:

//with curly brackets
let i;

for(i=1;i<=5;i++){
    console.log(i)
}

//without curly brackets
for(i=1;i<=5;i++)
    console.log(i)


//with simi colon
let i;
for(i=1;i<=5;i++); //1 2 3 4 5 6

console.log(i) //6

