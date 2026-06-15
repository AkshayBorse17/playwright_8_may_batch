
abstract class PaymentProcessor{

    status:string="idle"
    amount:number

    constructor(amount:number){
        this.amount=amount
    }

    abstract processPayment():boolean   // abstract method

    // concrete method - have full implementation
    printReceipt(){
        if( this.processPayment()===true){
               console.log(`Receipt: Processed transaction of $${this.amount}. Status: ${this.status}`);
        }
         else{
             console.log(`Not processed Payment - Status: ${this.status}`);
       
        }
    }

}

//child class implementing abstract method from parent abstract class
class CreditCardProcessor extends PaymentProcessor{

 cardNumber:string

    constructor(amount:number,cardNumber:string){
        super(amount)
        this.cardNumber=cardNumber
    }

// implementation of abstract method
processPayment():boolean{
    if(this.cardNumber.length===16){
        this.status="completed"
        return true
    }
    this.status="failed"
    return false
    }

}


let cardPayment=new CreditCardProcessor(3000,"1234567891234567")
//console.log(cardPayment.processPayment())
cardPayment.printReceipt()