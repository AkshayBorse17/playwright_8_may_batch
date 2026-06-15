//super() - used to invoke immediate parent class constructor.
//super - used to invoke immediate parent class method

//super - cannot be used to invoke the parent class property. (In Java, it is possible)


class Parent {

    num: number = 10;

    constructor() {
        console.log("This is Parent class constructor..")
    }

    display() {
        console.log("This is display() method from Parent class...")
    }
}

class Child extends Parent{

    num: number = 20;  // property overrided

    constructor(){
        super()  // this will invoke parent class constructor
        console.log("This is child class constructor...")
    }

    show(){
        //console.log(super.num) // parent's num //TS doesn't support super.num to access parent class properties directly like Java does.
        console.log(this.num) // 20 overrided value
        console.log("this is show() method from child class.....")
    }

    override display() {
        console.log("This is display() method from Child class...")
        super.display() // invoke parent class method
    }

}


let c:Child=new Child()

c.show()

c.display()