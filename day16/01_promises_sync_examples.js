//Example 1: Order Ready Notification 

let order=new Promise((resolve,reject)=>{

    let orderReady=true

    if(orderReady){
        resolve("Order is ready!")
    }
    else{
        reject("Order failed!")
    }

})

//consume the promise

order
    .then((msg)=>{

            console.log(msg)
    })
    .catch((errormsg)=>{
         console.log(errormsg)
    })
    .finally(()=>{
        console.log("process completed")
    })


//Example 2: API Call - promise resolved
// .then() runs ONLY when the promise resolves successfully.

    let apiCall= new Promise((resolve,reject)=>{

        //let response={status:200,body:"user data"}
        resolve({status:200,body:"user data"})
    })

apiCall
.then((response)=>{
    console.log(response)
    console.log(response.status)
    console.log(response.body)
})


//Example 3:   API Call - promise rejected
// .catch() runs ONLY when the promise is rejected.
//  .then() is completely skipped.

let apiCall= new Promise((resolve,reject)=>{

    //resolve("Request successfull")
    reject("500 Error")
    })

apiCall
.then((response)=>{
    console.log(response)
})
.catch((response)=>{
   console.log(response)
})



//Example 4: Promise.all (Run Multiple promises in Parallel)

/*
let checkAuth=new Promise((resolve,reject)=>{
    resolve("Auth is OK")
})
*/

let checkAuth=Promise.resolve("Auth is OK")
let checkDB = Promise.resolve("DB OK");
//let checkCache = Promise.resolve("Cache OK");
let checkCache = Promise.reject("Cache is NOT OK");

Promise.all([checkAuth,checkDB,checkCache])   // all() will run multiple promises in parallel

.then((results)=>{
    console.log(results)  //[ 'Auth is OK', 'DB OK', 'Cache OK' ]
})
.catch((errormsg)=>{
    console.log(errormsg)
})


//Exmple5: passing all the promises directly
// If one fails → whole Promise.all fails
// It is safe to add catch


Promise.all([
    Promise.resolve("Auth is OK"),
    Promise.resolve("DB OK"),
    Promise.reject("Cache Not OK"),
]) 

.then((results)=>{
    console.log(results)  //[ 'Auth is OK', 'DB OK', 'Cache OK' ]
})
.catch((errormsg)=>{
    console.log(errormsg) //
})


//Example 6: Promise.allSettled (Run All Tests & Get All Results)
// Always returns all results (no fail-fast)
// 'catch' is not required

let test1 = Promise.resolve("Login passed");
let test2 = Promise.reject("Search failed");
let test3 = Promise.resolve("Checkout passed");


Promise.allSettled([test1,test2,test3])  

.then((results)=>{
    console.log(results)  
})

/*outout

[
  { status: 'fulfilled', value: 'Login passed' },
  { status: 'rejected', reason: 'Search failed' },
  { status: 'fulfilled', value: 'Checkout passed' }
]


*/

//Example 7 : Promise.race (Fastest Test Wins)
// Think: Which API responds first?


let apicall1= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("api1 response.......")
    },3000)
   
})

let apicall2= new Promise((resolve,reject)=>{
     setTimeout(()=>{
        resolve("api2 response.......")
    },1000)
})

let apicall3= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("api3 response.......")
    },2000)
})

Promise.race([apicall1,apicall2,apicall3])
    .then((result)=>{
        console.log(result)  //api2 response.......

    })
