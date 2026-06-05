//Example 1:

// 1 - sunday  2-monday  3 - tuesday..

let day=10

switch(day){

     default:
        console.log("Invalid week number!!!")
        break

        
    case 1: 
        console.log("Sunday -Rest day")
        break
    case 2:
        console.log("Monday - Sprint planning'")
        break
    case 3:
        console.log("Tuesday — Development");
        break;
    case 4:
        console.log("Wednesday — Code Review");
        break;
    case 5:
        console.log("Thursday — Testing");
        break;
    case 6:
        console.log("Friday — Deployment & Retro");
        break;
    case 7:
        console.log("Saturday — Rest Day");
        break;
    // default:
    //     console.log("Invalid")
 
}