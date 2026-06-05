//do-while loop : A do-while loop always executes at least once before checking the condition.
// Use when the code must run at least once, no matter what

//Example 1...5 numbers

let i=1

do{

    console.log(i) //1 2 3 4 5
    i++  //2 3 4 5 6
}while(i<=5)   // 6<=5


//Example 2: 10 9 8 .......1  (decending order)

let i=10

do{

    console.log(i)
    i--
}while(i>0)     // i>0  or   i>=1  both are correct

