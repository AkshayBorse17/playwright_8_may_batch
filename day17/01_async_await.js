
//Example 1: Placing Food Order (Async/Await Version)


function placeOrder(item) {
    console.log("Placing order for:", item);

    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Order Completed!");
        }, 2000);
    });
}

// Anonymous Asynchronous function
async function orderFood(){
    let message=await placeOrder("Pizza")
    console.log(message)

}

orderFood() // calling asaynchoruns function



// Example 2: Fetch User Data (Async/Await Version)

function fetchUser() {
    console.log("Fetching user data...");

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = false;

            if (success) {
                let user = { name: "John", age: 35 };
                resolve(user); // success
            } else {
                reject("Error fetching user");
            }
        }, 2000);
    });
}

//Arrow Asynchronous function

getuser= async ()=>{

    let user
   
    try{
         user=await fetchUser()
        console.log(user)
    }
    catch(error){
        console.log(error)
    }
   
}

getuser() //Function call