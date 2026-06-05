//1. Arithmetic Operators 
    //     +  -  *  /  %  **

    //let a,b,c
   //let a=5,b=2

    let sum=5+2
    //console.log(sum) //7


let diff = 10 - 2; // Subtraction  8
let p = 5 * 2; // Multiplication 10
let q = 10 / 2; // Division  5
let r = 10 % 2; // Modulo Division 0  // returns remainder

console.log(sum, diff, p, q,r);


console.log(2**2); //2*2   4
console.log(3**2);   //3*3   9
console.log(2**5);  // 2*2*2*2*2 //32

//2. Assignment Operators
    //   =  +=  -=  *=  /=   %=  **=

let a=10
let b=5

//a+=b    //a=a+b
//console.log(a)

//console.log(a+=b);   // a=a+b   --->15
//console.log(a-=b);   // a=a-b   --->5
//console.log(a*=b);   // a=a*b   ----> 50
//console.log(a/=b);   // a=a/b  ----> 2
console.log(a%=b);  // a=a%b  ----> 0

/*
a=5,b=2
 a**=b //a=a**b

console.log(a)  //25
*/

/*
a=10
b=5

a=a+b  //15
a=a-b  //10
*/




//3. Relational/Comparison Operators
    //Returns boolean- true/ false

//   >  <  >=  <=  ==  !=  ===(Strict equality)

a=10
b=20
console.log(a>b);  //false
console.log(a<b); // true

console.log(a<=b); //true
console.log(a>=b); //false

console.log(a==b); //false
console.log(a!=b); //true

// ==(equaltiy)   vs    ===(strict equality)

let num1=10   // number type 
let num2="10"   //string type 
 
console.log(num1==num2)  //true ( only compares values)
console.log(num1===num2)   //false (comapres the values & type)


let v1=null   //no value
let v2=undefined  //not assigned

console.log("Type of v1: ",typeof v1) //object
console.log("Type of v2:", typeof v2) //undefined

console.log(v1==v2) //true
console.log(v1===v2)  //false


//4. Logical Operators   &&  ||  !
    // returns true/false (boolean)
    // works between boolean variables

// b1      b2       &&           ||          !b1
//--------------------------------------------------
//true      true    true        true          false
//true      false   false       true           fasle
//false     true    false       true           true
// false    false   false       false           true

let b1=true, b2=false

console.log(b1 && b2);  //false
console.log(b1 || b2);  ///true
console.log(!b1);  //false
console.log(!b2);  //true



// Mixing of logical & Relational operators

console.log(20>10) //true
console.log(10>5) //true

console.log(20>10 && 10>5)  //true
console.log(20>10 || 10>5)  //true


//5. Comma Operator (, )
//evaluates its operands from left to right sequentially and returns the value of the rightmost operand. 

let n1,n2

let res=(n1=1,n2=2,n1+n2)
console.log(res) //3

let x,y
res=(x="hello ",y="welcome",x+y)
console.log(res)


//res=(1,2,3)  //3
//res=1,2,3  //3   // invalid, bracket is mandatory
console.log(res)


console.log((a=2,b=4,5)) //5

console.log((2,3,4)) //4


//6. nullish coalescing operator
//  ??

//let model=null
let model="Hyundai"

let val=model ?? "Maruthi"
console.log(val)  //Maruthi


//let username="xyz"
//let username=null

let username=null
let user=username ?? "Guest"

console.log("User is:", user)




