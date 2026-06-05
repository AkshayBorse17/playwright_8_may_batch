//=============================================
//1. Callback Approach (Callback Hell Example)
//=============================================

// Step 1: Login
function loginUser(username, callback) {
    console.log("Logging in user:", username);

    setTimeout(() => {
        console.log("Login successful");
        callback();
    }, 2000);
}

// Step 2: Place Order
function placeOrder(callback) {
    console.log("Placing order...");

    setTimeout(() => {
        console.log("Order placed successfully");
        callback();
    }, 2000);
}

// Step 3: Make Payment
function makePayment(callback) {
    console.log("Processing payment...");

    setTimeout(() => {
        console.log("Payment successful");
        callback();
    }, 2000);
}

// Execution (Nested callbacks)
loginUser("Pavan", function () {
    placeOrder(function () {
        makePayment(function () {
            console.log("All steps completed!");
        });
    });
});

/*
Problem :
Nested structure → hard to read
Difficult to debug
Called Callback Hell
*/


//=============================================
// 2. Promise Approach (Better Structure)
//=============================================

// Step 1: Login
function loginUser(username) {
    console.log("Logging in user:", username);

    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Login successful");
            resolve();
        }, 2000);
    });
}

// Step 2: Place Order
function placeOrder() {
    console.log("Placing order...");

    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Order placed successfully");
            resolve();
        }, 2000);
    });
}

// Step 3: Make Payment
function makePayment() {
    console.log("Processing payment...");

    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Payment successful");
            resolve();
        }, 2000);
    });
}

// Execution (Promise chaining)
loginUser("Pavan")
    .then(() => placeOrder())
    .then(() => makePayment())
    .then(() => {
        console.log("All steps completed!");
    });

/*
Advantage :
No deep nesting
Flow is linear and readable

Dis Advantage: Promise chaining

*/


//=============================================
//3. Async / Await Approach (Best)
//=============================================

// Step 1: Login
function loginUser(username) {
    console.log("Logging in user:", username);

    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Login successful");
            resolve();
        }, 2000);
    });
}

// Step 2: Place Order
function placeOrder() {
    console.log("Placing order...");

    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Order placed successfully");
            resolve();
        }, 2000);
    });
}

// Step 3: Make Payment
function makePayment() {
    console.log("Processing payment...");

    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Payment successful");
            resolve();
        }, 2000);
    });
}

// Execution using async/await
async function processOrder() {
    await loginUser("Pavan");
    await placeOrder();
    await makePayment();

    console.log("All steps completed!");
}

// Function call
processOrder();
