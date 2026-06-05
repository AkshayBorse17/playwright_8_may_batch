//Ex1: normal statments - Synchronous

console.log("a")
console.log("b")
console.log("c")
console.log("d")


//Ex2: functions also will be executed in Synchronous mode
//JavaScript functions are executed in the sequence they are called. 
// Not in the sequence they are defined.

function myFirst() {
 console.log("Hello");
}

function mySecond() {
  console.log("Goodbye");
}

myFirst()
mySecond()


