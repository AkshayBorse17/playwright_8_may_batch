/*
1.Different parameter types
2.Different number of parameters

3.Different return types


1. signatures
2. implement   - there must me only one implementation for all teh signatures
3. call/use


*/


// 1) Overloading with Different Parameter Types 


//Example 1:

//signatures
function display(value:number):string
function display(value:string):string
function display(value:boolean):string

//implemented
function display(value:number | string |boolean):string{
    return `value is: ${value}`
}

//calling
console.log(display(100))
console.log(display("Hello"))
console.log(display(true))



//Example 2:Find element using different locator types

function findElement(locator:string):string
function findElement(locator: {id?:string, xpath?:string}):string

function findElement(locator:any):string{
    
    if(typeof locator ==="string"){
        return `Finding element using CSS locator ${locator}`
    }
    else if(locator.id){
        return `Finding element using id locator ${locator.id}`
    }
    else if(locator.xpath){
        return `Finding element using xpath locator ${locator.xpath}`
    }

    return "invalid locator"
}

console.log(findElement("#loginBtn"))
console.log(findElement({id:"useraname"}))
console.log(findElement({xpath:"//input[@type='password']"}))




//  2) Overloading with Different Number of Parameters

//Example 1:

function login(username:string, password:string):string
function login(username:string, password:string,otp:number):string


function login(username:string,password:string,otp?:number):string{

    if(otp){
        return `Login with OTP for the user: ${username} `
    }
    else{
       return `Login without OTP for the user: ${username} `
    }

}

console.log(login("admin","admin123"))
console.log(login("admin","admin123",12345))




/// 3.Different return types


//Example 1:

function processInput(input: string): string; 
function processInput(input: number): number; 


function processInput(input: string | number): string | number{

    /*
    if(typeof input ==="string"){
        return input.toUpperCase()
    }
    else{
        return(input *2)
    }
    */

    return (typeof input ==="string")? input.toUpperCase():input *2

}

console.log(processInput("welcome")) //WELCOME
console.log(processInput(10))  //20



//Example 2:

function getTestData(id: number): string;
function getTestData(all: boolean): string[];

function getTestData(param:number | boolean ):any{

    if(typeof param==="number"){
        return `Test data for id is: ${param}`
    }
    else if(typeof param === "boolean"){
        return ["user1","user2","user3"]
    }

}

console.log(getTestData(101));        // returns string
console.log(getTestData(true));       // returns string[]