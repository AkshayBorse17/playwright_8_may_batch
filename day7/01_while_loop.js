//while loop : A while loop executes as long as the condition is true
// Condition-based execution.

//Example 1: print 1...5 numbers

let i=1   // Inilization

while(i<=5){
  console.log(i)
i++
}

// Example 2: print even numbers 1.....10
// 2 4 6 8 10

//Method 1
let i=2
while(i<=10)
{
  console.log(i)
  i+=2   //i=i+2
}


//Method 2:

let i=1
while(i<=10)
{
  if(i%2===0){
    console.log(i)
  }
i++
}


// Example 3: print odd numbers 1.....10

//Method 1
let i=1
while(i<=10)
{
  console.log(i)
  i+=2   //i=i+2
}

//Method 2:

let i=1
while(i<=10)
{
  if(i%2!=0){
    console.log(i)
  }
i++
}

// Example 4: print numbers 10 9 8 ......1
let i=10

while(i>=1)
{
  console.log(i)
  i--
}

//Example 5

while(true)
{
  console.log("welcome")
}