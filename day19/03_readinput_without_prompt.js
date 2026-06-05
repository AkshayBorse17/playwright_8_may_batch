// We can read input using readline 'readline'  built-in module

//const readline = require('readline');  // in Common JS
import readline from "readline";     // in Modern JS

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question("Provide your name: ", (name) => {
    console.log("Hello:", name);

    r1.question("Provide your age: ", (age) => {
        console.log("Age:", age);

        r1.close(); // Close after all inputs
    });
});