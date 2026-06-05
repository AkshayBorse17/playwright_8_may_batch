/*
Method 1: Using prompt():
Only works in browsers (not Node.js)
*/




/*
Method 2: Using prompt-sync module

Node.js does NOT support prompt() directly. You need built-in module 'prompt-sync'

Install prompt-sync module by giving this command in terminal:
    npm install prompt-sync

Importing 'prompt-sync' in CommonJS:    
    const prompt = require('prompt-sync')();

Importing 'prompt-sync' in ModernJS: 
      import promptSync from 'prompt-sync';

    Add this entry in package.json
      {"type": "module"}

Note: you need to run only thorugh terminal (not supported code runner)

*/


//commonJS
//let prompt = require('prompt-sync')()

//ModernJS -ES6
import promptSync from "prompt-sync"

let prompt=promptSync()  //promptSync() is a function which returns prompt() function

let name=prompt("Provide your name:")
let age=prompt("Provide your age:")

console.log("Name of the parson:",name)
console.log("Age of the parson:",age)

console.log(typeof(age))






