/****  Re-declaration ****/

//var - allows the Re-declaration
//let and const - not allows the Re-declaration (making code safer)

// Example 1: var allows re-declaration
 var city="Hyd"
 var city="Delhi" // var allows re-declaration, which can lead to accidental overwriting.
 console.log(city)


 //Example2 : let (Not allowed Re-declaration)
 let country="India"
 //let country="US" //Error: Identifier 'country' has already been declared
 console.log(country)

//Example 3: const (Not allowed Re-declaration)
const planet="earth"
//const planet="mars" //Error: Identifier 'planet' has already been declared
console.log(planet);


