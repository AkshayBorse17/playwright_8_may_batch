/*

What is Callback Hell/Pyramid of Doom?
    When callbacks are nested inside other callbacks
    Code becomes hard to read and maintain
    Also called "Pyramid of Doom"

Why This is a Problem?
    Too many nested functions
    Hard to understand flow
    Difficult to debug and maintain

    

Open Browser
   → Go to Login Page
       → Enter Credentials
           → Click Login

*/



// Step 1: Open Browser
function openBrowser(callback) {
    console.log("Opening browser...");

    setTimeout(() => {
        console.log("Step 1: Browser started");
        callback();
    }, 1000);
}

// Step 2: Go to Login Page
function goToLoginPage(callback) {
    setTimeout(() => {
        console.log("Step 2: Login page loaded");
        callback();
    }, 1000);
}

// Step 3: Enter Credentials
function enterCredentials(callback) {
    setTimeout(() => {
        console.log("Step 3: Entered username & password");
        callback();
    }, 1000);
}

// Step 4: Click Login
function clickLogin(callback) {
    setTimeout(() => {
        console.log("Step 4: Login button clicked");
        callback();
    }, 1000);
}

openBrowser(() => {
    goToLoginPage(() => {
        enterCredentials(() => {
            clickLogin(() => {
                console.log("Test Completed!");
            });
        });
    });
});