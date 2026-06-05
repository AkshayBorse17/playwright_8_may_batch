
//Example :
//Without break, execution "falls through" to subsequent cases
//  running all code below the matched case.

// 1 - sunday  2-monday  3 - tuesday..

let day=1

switch(day){

    case 1: 
        console.log("Sunday -Rest day")
    case 2:
        console.log("Monday - Sprint planning'")
       
    case 3:
        console.log("Tuesday — Development");
    
    case 4:
        console.log("Wednesday — Code Review");
        
    case 5:
        console.log("Thursday — Testing");
   
    case 6:
        console.log("Friday — Deployment & Retro");
    
    case 7:
        console.log("Saturday — Rest Day");
   
    default:
        console.log("Invalid week number!!!")
}