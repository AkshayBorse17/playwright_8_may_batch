
// Example 1: Placing Food Order (Asynchronous)

function placeOrder(item){

    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            resolve("Order completed")
        },2000)
      })
   
}

placeOrder("Pizza")
.then((message)=>{
    console.log(message)
})



//Example 2: Login - Asynchronous

function loginUser(username, password) {
    return new Promise((resolve, reject) => {
        console.log("Launching browser and navigating to login page...");

        setTimeout(() => {
            if (username === "admin" && password === "admin123") {
                resolve("Login successful");
            } else {
                reject("Login failed - Invalid credentials");
            }
        }, 2000);
    });
}

loginUser("admin","admin")
.then((result)=>{
    console.log(result +" Navigating to Dashboard..")
})
.catch((errormsg)=>{
    console.log(errormsg)  
})
.finally(()=>{
    console.log("Closing browser..")
})


//Example 3: Fetching user
// Function returning a Promise
function fetchUser() {
    console.log("Fetching user data...");

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = true;

            if (success) {
                let user = { name: "John", age: 35 };
                resolve(user); // success
            } else {
                reject("Error fetching user");
            }
        }, 2000);
    });
}

fetchUser()
    .then((user) => {
        console.log("User received:", user);
    })
    .catch((error) => {
        console.log("Error:", error);
    });

