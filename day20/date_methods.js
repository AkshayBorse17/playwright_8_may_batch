/*

new Date() → creates current date & time
getFullYear() → returns full year (e.g., 2026)
getMonth() → starts from 0 (Jan) to 11 (Dec)
getDay() → returns weekday index (0–6)
getTime() → useful for timestamps & comparisons

*/

// Create a new Date object (current date & time)
let currentDate = new Date();

console.log("Full Date:", currentDate); //2026-06-05T02:04:18.493Z

/*
Meaning of Each Part
2026 → Year
06 → Month (June)
05 → Date (5th day)
T → Separator between date and time
02 → Hours (in 24-hour format)
04 → Minutes
18 → Seconds
493 → Milliseconds
Z → Zulu Time (UTC timezone)

*/

// Get Year
console.log("Year:", currentDate.getFullYear());

// Get Month (0-11 → add +1 for real month)
console.log("Month:", currentDate.getMonth() + 1);

// Get Date (day of the month)
console.log("Date:", currentDate.getDate());

// Get Day (0 = Sunday, 6 = Saturday)
console.log("Day:", currentDate.getDay());

// Get Hours (0-23)
console.log("Hours:", currentDate.getHours());

// Get Minutes (0-59)
console.log("Minutes:", currentDate.getMinutes());

// Get Seconds (0-59)
console.log("Seconds:", currentDate.getSeconds());

// Get Milliseconds (0-999)
console.log("Milliseconds:", currentDate.getMilliseconds());


// Get Time (milliseconds since Jan 1, 1970)    
console.log("Timestamp:", currentDate.getTime()); //It’s a unique number for every moment in time


//1. ⏱️ Compare Dates (YYYY/MM/DD)
let d1 = new Date("2026-06-01");
let d2 = new Date("2026-06-05");

if (d2.getTime() > d1.getTime()) {
    console.log("d2 is later than d1");
}

//2. ⏳ Calculate Time Difference
let start = new Date();

// some operation
console.log("Hello")
console.log("Hello")
console.log("Hello")

let end = new Date();

let diff = end.getTime() - start.getTime();

console.log("Time taken (ms):", diff);


//Get the Local time (Changing time zone)
let localDate = new Date();
console.log("Local Time:", localDate.toString()); //Local Time: Fri Jun 05 2026 09:42:06 GMT+0530 (India Standard Time)