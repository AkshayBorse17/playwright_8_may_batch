/*
A callback function is a function that is passed as an argument to another function and executed later.

A function can accept another function as a parameter.

A callback function can execute after another function has finished.
*/


//Example 1:

function greet(name,sayBycallby)
{
    console.log("hello," +name)
    sayBycallby()  // call back function
}

function sayBye()
{
     console.log("Good Bye!")
}

greet("John",sayBye) //passing function as argument




//Example 2 :

function calc(a,b,addcalback)
{
   return addcalback(a,b)  // calling callback function
}

function add(x,y)
{
    return x+y
}

let res=calc(5,3,add)  //passing add function as argument
console.log(res)



/*
Example 3: Callback after completing a task
You finish some work, and then you want to notify (call another function).
*/

function completeTask(task,notifyUsercallabck){
console.log("Task completed...",task)
notifyUsercallabck() //calling callback function
}


function notifyUser()
{
    console.log("User notified..")
}

completeTask("Learn javascript",notifyUser) //passing function as argument


/*
Example 4: 
Boss → gives work → Employee → completes work → notifies Boss
*/

function employeeTask(task, notificationcallback)
{
    console.log("Completed Task...",task)
    notificationcallback() // calling callback function
}


function notification(){
    console.log("Boss: task is completed!!!!")
}


//As Boss I'm giving some task
employeeTask("Prepare report",notification) //Passing function as argument



//Eaxample 5: Pizza ready--> notify customer  - Ananymous function

let pizzaReady=function(notifyCustomercallback){
    console.log("Pizza is ready")
    notifyCustomercallback() // calling callback function
}

let notifyCustomer=function(){
    console.log("Hello sire, your pizza is ready!!!!")
}

pizzaReady(notifyCustomer) //Passing function as argument



/*
Example 6 : Callback functions -add  - Arrow function 
*/

calculator=(a,b,sumcallback)=>{
    sumcallback(a,b)  // calling callback function
}


let sum=(a,b)=>{
    console.log(a+b)
}

//calculator(1,2,sum)  //Passing sum function as argument

//We can directly pass function body as argument - New way
calculator(1,2,(a,b)=>{
    console.log(a+b)
})