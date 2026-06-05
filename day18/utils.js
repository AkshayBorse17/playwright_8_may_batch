//3. Export with alias 


// variable
const waitTime = 3000;

// function
function takeScreenshot() {
    console.log("Screenshot captured");
}


// class
class APIHelper {
    get() {
        console.log("GET API called");
    }
}

//export with aliases
export {waitTime as delay,
        takeScreenshot as capture,
        APIHelper as API}