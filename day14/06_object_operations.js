let person = {
    firstName: "John",
    lastName: "Kenedy", 
    age: 50, 
    fullName: function() {
         return (this.firstName + " " + this.lastName).toUpperCase();
   } 
};


// Add, update/modify,  delete

//Ex 1:

//Adding property
person.city="Hyderabad"
console.log("After adding city:",person)

//Ading new method to the existing object
person.getAge=function(){
    return this.age
}

console.log(person.getAge()) //50



//Ex2:  Update/modify

let person = {
    firstName: "John",
    lastName: "Kenedy", 
    age: 50, 
    fullName: function() {
    return (this.firstName + " " + this.lastName).toUpperCase();
  } 
};

//updating/modifying property
person.lastName="Smith"
console.log("After modification:",person)

//modify existing method in object
person.fullName=function(){
     return (this.firstName + " " + this.lastName+ " "+this.age);
}

console.log(person.fullName()) //John Smith 50


//Ex3: delete property/method from an object


let person = {
    firstName: "John",
    lastName: "Kenedy", 
    age: 50, 
    fullName: function() {
    return (this.firstName + " " + this.lastName).toUpperCase();
  } 
};


delete(person.age)   //delete person["age"]
delete(person.fullName)  // delete person["fullName"]

console.log(person) //{ firstName: 'John', lastName: 'Kenedy' }


//Ex 4. Check if a Property Exists
// 'in' operator check if a property exists or not in an object
// returns true/false

let person = {
  firstName: "John",
  lastName: "Kenedy"
};

console.log("firstName" in person) //true
console.log("age" in person) //false


