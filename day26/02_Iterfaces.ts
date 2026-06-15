// An interface in TypeScript is a way to define the structure of an object.

//Example 1:  Regular properties

interface Person{
    name:string
    age:number
}

let student: Person={
    name:"John",
    age:25
}

console.log(student) //{ name: 'John', age: 25 }
console.log(student.name)



//Example 2: Optional properties

interface Employee{
    id:number,
    name:string,
    department?:string   // optional property
}

let emp:Employee={
    id:101,
    name:"John",
    //department:"Accounts"
}

console.log(emp)
console.log(emp.id,emp.name,emp.department)  // emp.department vlaue is undefined


//Example 3: Read only properties / Not allowed for modification
// Interface also can have methods ( abstract only)

interface Book{
    readonly isbn:string,
    title:string,
    display():void;   // Abstract method
}

let mybook:Book={
    isbn:"123-ABC",
    title:"Learn TypeScript",
    display(){
        console.log(mybook.isbn,mybook.title)
    }
}

//mybook.isbn="456-XYZ" // cannot change isbn, read only...

mybook.title="Learning JavaScript"  // title we are able to change

console.log(mybook)
console.log(mybook.isbn,mybook.title) //123-ABC Learn TypeScript
mybook.display() //123-ABC Learn TypeScript


//Example 4: Extending interfaces - Inheritance

interface Animal{
    name:string
}

interface Dog extends Animal{
    color: string
}

// create object using iterface structure 'Dog'

let mydog:Dog={
    name:"Buddy",
    color:"Black"
}

console.log(mydog) //{ name: 'Buddy', color: 'Black' }



//Example 5: Interface Vs Class

interface Animal{
    name:string
    sound():void    // abstract method
}


class Cat implements Animal{

    name:string

    constructor(name:string){
        this.name=name
    }

    sound(){
        console.log("Mew....")
    }
}

let mycat=new Cat("Tommoy")
mycat.sound()






