// Creating objects

// property =  key : value     (pair)

// Method 1: Create an empty Object after that add properties

let person={}

person.firstName="John"
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";

console.log(person) //{ firstName: 'John', lastName: 'Doe', age: 50, eyeColor: 'blue' }


// Method 2: Create an Object with properties (Preferable)

let person={
            firstName: 'John', 
            lastName: 'Kenedy', 
            age: 60, 
            eyeColor: 'red' 
        }

console.log(person) //{ firstName: 'John', lastName: 'Kenedy', age: 60, eyeColor: 'red' }


//Method 3: using 'new' keyword along with Object constructor

let person=new Object(
            { 
            firstName: 'John', 
              lastName: 'Kenedy', 
              age: 60, 
              eyeColor: 'red' 
            }
        )

console.log(person) //{ firstName: 'John', lastName: 'Kenedy', age: 60, eyeColor: 'red' }
