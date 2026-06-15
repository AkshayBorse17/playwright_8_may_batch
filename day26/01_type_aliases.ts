/*

Type aliases:

Syntax:
    type alias=existing type 

*/


// Example 1: Primitive types

//let username:string
//username="john"

type UserName=string
type Age=number
type IsActive=boolean

//let myname:string="John"

let myname:UserName="John"
let userAge:Age=30
let activeStatus:IsActive=true

console.log(myname,userAge,activeStatus)

 
//Example2 : object type
type User={name:string,age:number,isActive:boolean}


let myuser:User={name:"ravi", age:25, isActive:true}
console.log(myuser)


//Example 3: Union Type

type ID=string |number

let userId1:ID=101
let userId2:ID="EMP101"

console.log(userId1, userId2)


//Example 3: Intersection type
// create a new type alias by using another type aliases

type PersonalInfo={name:string}
type JobInfo={role:string}

type candidate=PersonalInfo & JobInfo    // new type alias

//let emp:PersonalInfo & JobInfo={name:"John",role:"engineer"}
let emp:candidate={name:"John",role:"engineer"}

console.log(emp)


//Example 5: Union + Intersection Types

type Admin={
   name:string
   priviliges:string[] 
}

type NormalUser={
    name:string
    startDate:Date
}

//type Employee= Admin | NormalUser
//let myemp:Employee={name:"John", priviliges:["administrator","engineer"]}
//let myemp:Employee={name:"John", startDate:new Date()}

type UserID={id:number}


type Employee= (Admin | NormalUser) & UserID


// Admin +UserID
let emp1: Employee={
    name:"Smith",
    priviliges:["manage-users"],
    id: 1
}

//NormalUser + UserID
let emp2: Employee={
    name:"Kumar",
    startDate:new Date(),
    id: 2
}

console.log(emp1)
console.log(emp2)


