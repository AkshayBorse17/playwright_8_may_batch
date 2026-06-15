// Inheritance:
//A class can reuse the properties and methods of another class.  
// Inheritance is a mechanism where one class (child) can inherit the properties and methods of another class (parent).
// Inheritance allows you to reuse the functionality of an existing class without rewriting it.


// Method Overriding:
// A subclass/child calss can provide a specific implementation of a method that is already defined in its superclass.
// The method must have the same name, return type, and parameters.



class Car{
    name: string
    color:string
    model:string

    constructor(name:string,color:string,model:string){
        this.name=name
        this.color=color
        this.model=model
    }

    start(){
        console.log("Car started...")
    }
    stop(){
        console.log("Car stopped.....")
    }

    displayInformation(){
        console.log(`Name: ${this.name}, Color: ${this.color}, Model: ${this.model}`)
    }

}

class Honda extends Car{

    year:number

    constructor(name:string,color:string,model:string,year:number){
        super(name,color,model) // we are passing data to the parent class constructor
        this.year=year
    }

    //Ovverrided method  , overrid keyword is optional
    override start(){
        console.log("Honda car started...")
    }

    yom(){
     console.log(`Name: ${this.name}, Color: ${this.color}, Model: ${this.model}, YOM: ${this.year}`);
    }
}


//usage:

let honda:Honda=new Honda("Honda", "Red", "Honda city", 2024)

console.log(honda.name)
console.log(honda.color)
console.log(honda.model)
console.log(honda.year)

honda.start()  // child class method - overrided method
honda.stop()

honda.displayInformation()
honda.yom()


console.log("Printing data from honds obj...............")
//Parent class varaible is holding child class object
let hondobj:Car=new Honda("Honda", "Red", "Honda city", 2024)

console.log(hondobj.name)
console.log(hondobj.color)
console.log(hondobj.model)
console.log(hondobj.year) // Not accessible year defined inside the child class but not there in the parent

hondobj.start()  // child class method - overrided method
hondobj.stop()

hondobj.displayInformation()
hondobj.yom()  // Not accessible yom() defined inside the child class but not there in the parent