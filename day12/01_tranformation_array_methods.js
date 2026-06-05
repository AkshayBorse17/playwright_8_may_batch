//
// forEach(), map(), filter(), reduce(), some(), every()
// Common thing in all methods:  Every method take a function as an argument
// =====================================================


// 1. forEach() - Executes a function once for each array element
// It Takes function as a parameter

// Syntax: array.forEach(function(currentValue, index, array){})

// currentValue - The current element being processed in the array
// index (optional) - The index of the current element being processed in the array
// array(optional) - The array the current element belongs to.


// Ex 1: Get index of all the fruites along with value.
let fruits = ['apple', 'banana', 'orange', 'mango', 'kiwi'];

//looping statement
/*for(let i in fruits){
    console.log(i,fruits[i])
}
*/

//Using ananymous function
// here element is a varaible stores array element, i is an index.
/*fruits.forEach(function(element,i){
    console.log(i,element)
    })
*/
//arrow function
fruits.forEach((element,i)=>console.log(i,element))


// Ex 2: Print all fruite names in uppercase:
let fruits = ['apple', 'banana', 'orange', 'mango', 'kiwi'];

fruits.forEach((element)=>{
    console.log(element.toUpperCase())
})


//-----------------------------------------------------------------------


// 2. map() - Creates a new array with the result of calling the function on every element of an array
// It Takes function as a parameter.
// Returns the same number of elements that we have in original array.

// Syntax: array.map(function(currentValue, index, array){})


// Ex1: Req: Get square of all the numbers in an array. Ex: [1,2,3] then result should be [1,4,9]

let numbers = [1, 2, 3, 4, 5];


let square_arr=numbers.map( (num)=>{
    return num*num

})

console.log(square_arr) //[ 1, 4, 9, 16, 25 ]
console.log(numbers.length) //5
console.log(square_arr.length) //5


//Ex2: Double each number  [1,2,3,4,5] --->  [2,4,6,8,10]

let numbers = [1, 2, 3, 4, 5];
let double_numbers_arr=numbers.map( (num)=>num*2)
console.log(double_numbers_arr) //[ 2, 4, 6, 8, 10 ]


// 3. filter() - Creates a new array with all the elements that pass/satisfy the function
// It Takes function as a parameter.
// Returns either same or fewer number of elements compared to original array.

// Syntax: array.filter(function(currentValue, index, array){})



// Ex1: Get the only even numbers from an array
let numbers = [1, 2, 3, 4, 5];

//using loop
/* let even_arr=numbers.filter( (num)=>{
    if(num%2 ===0)
        return num
})
*/

//single statment (optimized)
let even_arr=numbers.filter( (num)=>num%2===0)
console.log(even_arr)  //[ 2, 4, 5 ]


// Ex2: Get the only numbers greater than 3 from an array

let numbers = [1, 2, 3, 4, 5];

/*let filterednumbers=numbers.filter( (num)=>{
    if(num>3)
        return num
})
*/

//optimized
let filterednumbers=numbers.filter( (num)=>num>3)
console.log(filterednumbers)  //[ 4, 5 ]



// 4. reduce() - Applies a function on every element of an array and returns a single value.

// Syntax: array.reduce(function(accumulator, currentValue, index, array){})
// accumulator - The accumulated value from previous iteration
// currentValue - The current element being processed


//Ex1: Get the total (sum) of all the elements in an array

numbers = [1, 2, 3, 4, 5];

//using loop
/*let sum=0
for(let i=0;i<numbers.length;i++){
    sum=sum+numbers[i]
}
console.log(sum) //15
*/

let total=numbers.reduce( (sum,num)=>{
    return sum+num
},0)

console.log(total) //15


// 5. some() - Checks if any element(at least one) satisfies a condition
// Returns true if at least one element passes the condition, else false
// Syntax: array.some(function(currentValue, index, array){})


//Ex1: check array contains at least one negative value
let numbers = [1, 2, 3, 4, 5,];

let status=numbers.some( (num)=>{
    return num<0
})
console.log(status)  //false


//Ex2:  contains -1
let numbers = [1, 2, 3, 4, 5,-1];

let status=numbers.some( (num)=>{
    return num<0
})

console.log(status)  //true


//Ex3: contains at least one possive  
let numbers = [-1, -2, 3, -4, -5];

let status=numbers.some( (num)=>{
    return num>0
})

console.log(status)  //true


//==================

// 6. every() - Checks if all elements(Every element) satisfy a condition
// Returns true if all elements pass the condition, else false

// Syntax: array.every(function(currentValue, index, array){})


//Ex 1: check all are even numbers
let numbers = [1, 2, 3, 4, 5];

let status=numbers.every( (num)=> num%2 ===0 )
console.log(status) //false

