// logical operators :   &&  ||   !
// works with only boolean type variables/data


//the username and password match 
// AND the account is not locked.  
//then user is entered.

let username="dev"
let password="secure123"
let isAccountLocked=false

if((username==="dev" && password==="secure123") && !isAccountLocked ){
    console.log("Allowed to Enter..")
}
else{
    console.log("Not allowed to enter")
}