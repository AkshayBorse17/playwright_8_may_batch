//2. Export at Bottom 


// variable
const pageTitle = "Dashboard";

// function
function clickLogin() {
    console.log("Clicked on Login button");
}

// object
const selectors = {
    username: "#username",
    password: "#password",
    loginBtn: "#login"
};

// class
class Actions {
    fillForm() {
        console.log("Form filled");
    }
}

//export at bottom
export {pageTitle,clickLogin,selectors,Actions}