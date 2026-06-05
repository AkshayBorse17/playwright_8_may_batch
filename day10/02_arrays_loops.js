// 1.Classic for loop (Index-based loop)
// 2. for...in loop (Keys / Indexes)
// 3. for...of loop (Values)  // ES6



// Example 1: Classic for loop (Index-based loop)
/*
When to use:
When you need index control
When you want to modify elements using index
When you need forward/backward iteration
Full control over loop
Can skip, reverse, or break easily
Best for performance-critical loops
*/


let empNames = ["John", "Smith", "Peter", "Scott"]

//for(let i=0;i<=empNames.length-1;i++ )

for(let i=0;i<empNames.length;i++ )
{
    console.log(empNames[i])
}



// Example 2: for...in loop (gives indexes of values)
/*
When to use:
When you want indexes (keys) of array
Returns indexes as strings
Mainly used for objects, not recommended for arrays
*/

let empIds = [101, 102, 103, 104];

for(let i in empIds)    // here  i is an index
{
    //console.log(i)  // 0 1 2 3   prints indexes of elements
    console.log(empIds[i])
}


// Example 3: for...of loop (gives values)
/*
When you want direct values
No index needed
Works with arrays, strings, maps, sets
Best for simple iteration
Cleaner and modern approach (ES6)

*/

let data = [1, 'John', true, null];   // array contains diffferent types of data/ mixed type

for(let x of data)    // here x is a variable
{
   console.log(x)
}
