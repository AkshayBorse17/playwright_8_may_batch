// Example 1: Sequencial

function apiCall(name) {
    return new Promise((resolve)=> {
        setTimeout(()=> {
            resolve(name, " 200 Ok!");
        }, 2000)

    });
}


async function sequencialtest(){

    let startime=Date.now()

    let r1=await apiCall("Create user")
    console.log(r1)
    let r2=await apiCall("Update the user")
     console.log(r2)
    let r3=await apiCall("Delete the user")
     console.log(r3)

    let endtime=Date.now()
    
    console.log("Time taken: ",(endtime-startime)+"ms") //6039ms
}

sequencialtest()



// Example 2: Parallel execution

function apiCall(name) {
    return new Promise((resolve)=> {
        setTimeout(()=> {
            resolve(name, " 200 Ok!");
        }, 2000)

    });
}


async function paralleltest(){

     let startime=Date.now()

    let [r1,r2,r3]= await Promise.all(
        [
            apiCall("Auth service"),
            apiCall("User service"),
            apiCall("Payment service")
        ]
    )
    console.log(r1)
    console.log(r2)
    console.log(r3)

    let endtime=Date.now()
    
    console.log("Time taken: ",(endtime-startime)+"ms") //2020ms

}

paralleltest()