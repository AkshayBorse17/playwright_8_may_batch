// spread     ...
// rest      ...

// Spreading 

let arr1=[1,2,3]

//let arr2=[...arr1,4,5,...arr1]  // spreading

let arr2=[4,5,...arr1]  // spreading


console.log(arr2) // [ 1, 2, 3, 4, 5 ]
console.log(arr1) //[ 1, 2, 3 ]



// Object spreading

const obj1 = { a: 1, b: 2 };

const obj2 ={...obj1,c:3}

console.log(obj2) //{ a: 1, b: 2, c: 3 }


//Rest parameter

function sum(...numbers)
{
    console.log(numbers)
}

sum(100) //[ 100 ]

sum(100,200,300,400,500)  //[ 100, 200, 300, 400, 500 ]



// rest in destructuring

let [v1,...v2] =[1,2,3,4]

console.log(v1)  //1
console.log(v2)  //[2,3,4]
