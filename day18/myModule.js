
//variable
const url="https://www.google.com"

//function
function login(){
    console.log("Login to application.....")
}

// object
let config={retries: 3}


//classes
class CommonHelper{

    run(){
        console.log("Running tests....")
    }
}

//CommonJS Approach - old - not preferable
//Exportin module
module.exports={url,login,config,CommonHelper}