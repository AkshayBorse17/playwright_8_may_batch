class Student{
    studentId:number
    name:string
    email:string

    constructor(id:number,name:string,email:string)
    {
        this.studentId=id
        this.name=name
        this.email=email
    }

    displayInfo():void{
        console.log("Student ID:", this.studentId)
        console.log("Name of the Student:", this.name)
        console.log("Email :", this.email)
    }

}

let stu1=new Student(101,"John","abc@gmail.com")
stu1.displayInfo()


let stu2=new Student(102,"Scott","xyz@gmail.com")
stu2.displayInfo()