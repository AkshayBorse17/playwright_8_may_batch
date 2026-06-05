/*
Continue	F5	            Resumes execution until the next breakpoint or program ends.
Step Over	F10	            Executes the current line and moves to the next line (skips function details).
Step Into	F11	            Enters inside a function to debug it line by line.
Step Out	Shift + F11	    Exits the current function and returns to the calling function.
Restart	    Ctrl + Shift + F5	Stops the current debugging session and restarts it from the beginning.
Stop	    Shift + F5	    Completely stops the debugging session.
*/


// debugging step by step(step over) - F10
/*
let i=1

while(i<5){
    console.log(i)
    i++
}
*/



let i=1

while(i<10){
    console.log("calling the function...")
    test(i)
    i++
}

function test(inc){
    console.log("Entering into  function....")
    console.log(inc)
}