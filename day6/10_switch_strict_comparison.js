
//Example 1: 
//let value = "5";
let value = 5;

switch (value) {
    case 5:
        console.log("Number 5 matched");
        break;
    case "5":
        console.log("String '5' matched");
        break;
}

//  == compare only values
//   === compare values + data type of values



//Example 2:

//let status = 0;
let status = false;


switch (status) {
    case false:
        console.log("false matched");
        break;
    case 0:
        console.log("0 matched");
        break;
}


//output : 0 matched