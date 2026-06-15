class Person{

public name:string  // public property - accessible anywhere
protected age:number // protected property - accessible within the class and its childclasses.
private ssn:number // private property - accessible only within this class

  constructor(name: string, age: number, ssn: number) {
       this.name = name;
       this.age = age;
       this.ssn = ssn;
    }

 public displayInfo():void{
    console.log("Name:",this.name)
    console.log("Age:",this.age)
    console.log("SSN:",this.ssn)
  }

}

class Employee extends Person{

   private employeeID:number

   constructor(name: string, age: number, ssn: number,employeeID:number){
        super(name,age,ssn)
        this.employeeID=employeeID
   }

   public showEmployeeDetails(){
        console.log(this.name)  // public - accessible
        console.log(this.age)  // protected - accessible
        //console.log(this.ssn)  // Error:private property
        console.log(this.employeeID) // private - belongs to same class
   }

}

let emp:Employee=new Employee("Smith",30,121313134,101)


//emp.displayInfo()
//emp.showEmployeeDetails()

console.log(emp.name)  // public
console.log(emp.age) // Not allowed to access - protected
console.log(emp.ssn) // Not allowed to access - private
console.log(emp.employeeID) // Not allowed to access - private