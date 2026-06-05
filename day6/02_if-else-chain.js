//Example 1: If/Else If Chain  -An else if chain allows checking multiple conditions in sequence.
// Grading system: A (90+), B (80+), C (70+), D (60+), or F (below 60). 

//if else ladder (chaining)

let score=55

if(score >= 90){
    console.log("Grad: A - Excellent")
}
else if(score >=80){
    console.log("Grade :B - Good")
}else if (score >= 70) {
    console.log("Grade: C — Average");
} else if (score >= 60) {
    console.log("Grade: D — Below Average");
} else {
    console.log("Grade: F — Fail");
}

//Example 2: Nested if.else
    // if inside another if

//First checks if the user is logged in, then checks their role (admin, editor, viewer) to determine access level.

let isLoggedIn=false
let userRole="Viewer"

if(isLoggedIn)
{
    if(userRole ==="admin")
    {
        console.log("admin can do all the things")
    }
    else if(userRole==="Editor")
    {
         console.log("Welcome to Editor!")
    }
    else if(userRole==="Viewer")
    {
         console.log("Welcome to Viewer!")
    }
    else{
        console.log("No Idea which role you are.. ")
    }

}
else{
    console.log("You are Not logged-In..")
}



