/*
3 kinds of properties

1. read only properties
2. optional properties
3. static properties

2 type of methods
    1. normal methods (Non-static methods)
    2. static methods

*/
class TestEngineer{

    readonly empId:number  // Read-only property (assigned only once)
    name: string           // Regular/normal property
    framework?:string        // Optional property (may or may not be provided)
    static companyName: string="ABC Solutions" // Shared across all testers

    //constructor
   constructor(empId: number, name: string, framework?: string) {
    this.empId = empId;
    this.name = name;
    this.framework = framework;
  }

  //normal/ non-static method displays tester details
  displayDetails():void{

    console.log("Employee id:", this.empId)
    console.log("Employee Name:", this.name)

    if(this.framework){
        console.log("Framework:", this.framework)
    }
    else{
        console.log("No framework assigned..")
    }
    
    console.log("Company Name:", TestEngineer.companyName)  // Access static property using class name only

    }

    //static method - to update company name
    static updateCompanyName(newName:string):void{
        this.companyName=newName
    }

}


//Creating objects
let tester=new TestEngineer(201,"John","Hybrid")


//Accessing individual properties

console.log(tester.empId)  // read-only property
//tester.empId=301  // Not allowed to change the value since it is read-only property

console.log(tester.name)  // normal property
tester.name="David"    // allowed to change the value of name
console.log("After changing name:",tester.name)  

console.log(tester.framework)  // optional property, you can also change the value of optional prop if you need it

//console.log(tester.companyName)   // static property - undefined  // cannot access through object
console.log(TestEngineer.companyName) // can access only through class name

TestEngineer.companyName="XYZ Solutions" // can change the value of static property
console.log("Afer changing company name:",TestEngineer.companyName)


//accessing / calling methods

tester.displayDetails()  // normal method (non-static method)
//tester.updateCompanyName("123 Solutions")  // cannot invoke static methods using object
TestEngineer.updateCompanyName("123 Solutions")  // static method can be called only through class name

tester.displayDetails()  //one more time displaying tester details after updating the company


console.log("Getting details from tester2 object..........")
let tester2=new TestEngineer(501,"Smith")
tester2.displayDetails()