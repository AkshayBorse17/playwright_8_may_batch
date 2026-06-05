// 1. push()
// Adds elements to the end of an array and returns new length
// Syntax: array.push(element1, element2, ...)

let numbers = [1, 2, 3, 4, 5];

let newLenght=numbers.push(6,7)
console.log("After push:", numbers)
console.log("New lenght:",newLenght) //7

//-------------------------------------------------

// 2. pop()
// Removes the last element and returns it
// Syntax: array.pop()

let fruits = ["apple", "banana", "orange", "mango"];

let removedFruit=fruits.pop()

console.log("After pop:", fruits) //[ 'apple', 'banana', 'orange' ]
console.log("Removed Fruite:",removedFruit) //mango


//-----------------------------------------------
// 3. shift()
// Removes the first element and returns it
// Syntax: array.shift()


let numbers = [1, 2, 3, 4, 5];

let removedFirst=numbers.shift();
console.log("After shifting:", numbers) //[ 2, 3, 4, 5 ]
console.log("Removed value", removedFirst) //1

//----------------------------------------------

// 4. unshift()
// Adds elements to the beginning and returns new length
// Syntax: array.unshift(element1, element2, ...)


let fruits = ["apple", "banana", "orange"];

let newLength=fruits.unshift("Kiwi","Pear")

console.log("After UnShift:",fruits) // [ 'Kiwi', 'Pear', 'apple', 'banana', 'orange' ]
console.log("New length:",newLength)  //5


// 5. concat()
// Combines arrays (does not modify original arrays)
// Syntax: array.concat(array1, array2, ...)


//Ex1:

let arr1 = [1, 2];
let arr2 = [3, 4, 5];
let arr3=["abc","xyz"]

let combined_arr=arr1.concat(arr2)
console.log("After combined:", combined_arr) //[ 1, 2, 3, 4, 5 ]

//console.log(arr1.concat(arr2).concat(arr3)) //[1,2,3,4,5,"abc","xyz"]
console.log(arr1.concat(arr2,arr3)) //same as above byut with single concat() method

console.log(arr1)
console.log(arr2)
console.log(arr3)


//Ex2:
let numbers = [1, 2, 3];

let combined_arr=numbers.concat([4,5],[6,7,8])
console.log("Concatenated array:",combined_arr)



// -----------------------------------------------------

// 6. slice()
// Extracts part of an array (end index is exclusive)
// Syntax: array.slice(start, end)


//Ex1:
let arr1 = [1, 2, 3, 4, 5];
let sliced_arr=arr1.slice(1,3)
console.log("Sliced array:",sliced_arr) //[ 2, 3 ]


//Ex2:
let fruits = ["apple", "banana", "orange", "mango", "kiwi"];

//let sliced_array=fruits.slice(2, 5);
//console.log(sliced_array) //[ 'orange', 'mango', 'kiwi' ]
//console.log("Original array:",fruits)

console.log(fruits.slice(2,6));   //[ 'orange', 'mango', 'kiwi' ]

//--------------------------------------------------------------------

// 7. splice()
// Adds/removes elements (modifies original array)
// Syntax: array.splice(start, deleteCount, item1, item2, ...)


// Ex 1: Remove elements
let fruits = ["apple", "banana", "orange", "mango"];

let removed_fruits=fruits.splice(1,2) // here 1 is starting index, 2 is represents how many elements to be deleted
console.log("Removed fruites:",removed_fruits) //[ 'banana', 'orange' ]
console.log("Original fruites:",fruits) //[ 'apple', 'mango' ]


// Ex 2: Add elements (no deletion)
let fruits = ["apple", "banana", "orange"];
fruits.splice(1,0,"grape","pineapple")
console.log("After adding:",fruits) //[ 'apple', 'grape', 'pineapple', 'banana', 'orange' ]


// Ex 3: Remove and add (Replacing)
let fruits = ["apple", "banana", "orange", "mango"];
let repalced_items=fruits.splice(1,2,"cherry","kiwi","Papaya")

console.log("After replacing:", fruits) //[ 'apple', 'cherry', 'kiwi', 'Papaya', 'mango' ]
console.log("Repalced items:",repalced_items)


//--------------------------------

// 8. indexOf()
// Returns index of element, or -1 if not found
// Syntax: array.indexOf(searchElement) 

let fruits = ["apple", "banana", "orange", "mango"];

console.log("Index of orange ", fruits.indexOf("orange")) //2
console.log("Index of papaya ", fruits.indexOf("papaya"))  //-1


// 9. at()
// Returns the element at the specified index in the array.
//Synatax: array.at(index)

let numbers = [100, 200, 300, 400, 500];

console.log(numbers.at(3))  //400
console.log(numbers.at(6))  //undefined

//Another way
console.log(numbers[3])  //400
console.log(numbers[6])  //undefined


// -----------------------------------------------------

// 10. includes() : searching an element
// Checks if element exists (returns true/false)
// Syntax: array.includes(element, fromIndex)

let fruits = ["apple", "banana", "orange"];

console.log("Include apple?", fruits.includes("apple"))  //true
console.log("Include manago?", fruits.includes("mango"))  //false
console.log("Include orange?", fruits.includes("orange",1)) //true

console.log("Include apple?", fruits.includes("apple",1)) //false


// -----------------------------------------------------

// 11. toString()
// Converts array to string
// Syntax: array.toString()



//Ex 1: 

let numbers = [1, 2, 3, 4, 5];
console.log(numbers)  //[ 1, 2, 3, 4, 5 ]
console.log(typeof(numbers)) // object

 
let strings=numbers.toString()  // convertign array into string
console.log(strings)  // "1,2,3,4,5"
console.log(typeof(strings)) //string


//Ex2: 
let chars_arr = ['w', 'e', 'l', 'c', 'o', 'm', 'e'];  // 7 strings
console.log(chars_arr)
console.log(typeof(chars_arr)) //object
console.log(chars_arr.length) //7


let str=chars_arr.toString()

console.log(str)  // w,e,l,c,o,m,e
console.log(typeof(str))  //string
console.log(str.length) //13


//12. reverse() Reverses the elements of an array in place. The first array element becomes the last, and the last array element becomes the first.
//Syntax: array.reverse()

//Ex1:
let numbers = [1, 2, 3, 4, 5];
numbers.reverse()
console.log(numbers)  //[ 5, 4, 3, 2, 1 ]


//Ex2:
let fruits = ["apple", "banana", "orange"];
fruits.reverse()

console.log(fruits) //[ 'orange', 'banana', 'apple' ]


//-------------------------------------

// 13. flat()  — flattens nested arrays

let arr=[[1,2],[3,4,5],[6]]   // Nested arrays
console.log(arr)

let flatten_arr=arr.flat()

console.log(flatten_arr) //[ 1, 2, 3, 4, 5, 6 ]


//--------------------------------------------------------
//14 . sort()  
//sort() compares as strings (which can give wrong results for numbers). 
// Use a comparator function for numeric sorting.


//Ex1:

let fruits = ["banana", "apple", "cherry"];
fruits.sort()
console.log(fruits)  //[ 'apple', 'banana', 'cherry' ]  // sortign will happen in alphabetical order

//Ex2:
let numbers = [10, 1, 21, 2];

numbers.sort()
console.log(numbers)  //[ 1, 10, 2, 21 ]   -  //wrong (compares as strings!) - limitation


//Ex3:
let numbers = [200, 100, 150, 50];
numbers.sort(); 
console.log(numbers) //[ 100, 150, 200, 50 ]  //wrong (compares as strings!) - limitation


//Ex4: solvign the sortign problem for numbers

//If result is negative → a comes before b
//If result is positive → b comes before a
//If result is 0 → no change


let numbers = [200, 100, 150, 50];

numbers.sort((a,b)=>{
    return (a-b)      
})

//numbers.sort((a, b) => a - b);
console.log(numbers);  //[ 50, 100, 150, 200 ]


//Explanation:
// 200 - 100 = 100 → positive → swap → 100 comes first
// 150 - 50 = 100 → positive → swap → 50 comes first



//Ex 5: 
let numbers = [200, 100, 150, 50];

numbers.sort((a,b)=>{
    return (b-a)      
})

console.log(numbers)  //[ 200, 150, 100, 50 ]



// 15. Array De-structuring
//Extract values from arrays into variables using destructuring syntax. 
// The rest operator ... collects remaining elements.



//let arr=[10,20,30]
//console.log(arr)  //[ 10, 20, 30 ]

//Ex1:

let [a,b,c] =[10,20,30]

console.log(a)
console.log(b)
console.log(c)


//Ex2:  rest
let [a,b,c,...d] =[10,20,30,40,50,60]

console.log(a) //10
console.log(c) //20
console.log(c) //30
console.log(d)  //[ 40, 50, 60 ]



//Copying arrays
// Assigning an array to a new variable creates a reference, not a copy.
// Modifying one affects the other.
//In JS, arrays are mutable by default. 
// This means you can modify an array's contents—adding, removing, or changing elements


let arr = [1, 2, 3];
let copyarr=arr

copyarr.push(4)

console.log(arr) //[ 1, 2, 3, 4 ]
console.log(arr.length) //4

console.log(copyarr) //[ 1, 2, 3, 4 ]
console.log(copyarr.length) //4


// Next Topics: Transformation methods
// forEach(), map(), filter(), reduce(), some(), every()