//Ex1:

function hello(){
    console.log("Hello")
}

hello() // directly called hello() immediately  - synchronous



//Ex2:

/*
function hello(){
    console.log("Hello")
}
*/

/*let hello=()=>{
    console.log("Hello")
}
*/
//setTimeout(hello,5000)  // we passed function name

//Passed arrow function in setTimeout()
setTimeout(()=>{
    console.log("Hello")
},5000)



//Ex3:

console.log("one")
console.log("two")

setTimeout(()=>{      // we make it as asynchronous
    console.log("hello")
},3000)

console.log("three")
console.log("four")


//Ex4: Asynchrounous - API response

/*
When you send  API request, you dont freeze your entire test suite waiting for the response.
The request goes out, your code continues, and when the respose arrives , then the callback runs.
*/  

console.log("Step1: send a request..")

setTimeout(()=>{
   console.log("Step 2: do processing the request....")
},2000)

console.log("Step3 : continue with th rest of the steps.... ")