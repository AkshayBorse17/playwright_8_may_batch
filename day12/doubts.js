let a = [1,2,3,4,5];
console.log("Before push",a);

let new_a = a.push(6,7,8,9,10);

console.log("After push",a);

let newarray=a


console.log(new_a); //10 new length of an array


console.log(newarray)



/*
let arr=[10,20,30,40]
for(let i in arr){   // i is an index

console.log(arr[i])
}
*/

let arr=[10,20,30,40]

for(let i of arr){    // here i is value

console.log(i)
}

