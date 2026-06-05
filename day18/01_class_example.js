
class Car{

    constructor(brand,model,year){

        this.brand=brand
        this.model=model
        this.year=year
    }

    getDetails(){
          console.log(`${this.year} ${this.brand} ${this.model}`);
    }

    getAge(){
          let currentYear= new Date().getFullYear() // Date() is built-in class contains getFullYear() methods....
          let age=currentYear-this.year
          return age
    }
}

let mycar1=new Car("Hyudai","Grandi10",2021)
mycar1.getDetails()
console.log("Age of the car:",mycar1.getAge())


let mycar2=new Car("Maruthi","Baleno",2023)
mycar2.getDetails()
console.log("Age of the car:",mycar2.getAge())