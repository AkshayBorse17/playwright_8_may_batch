
class BankAccount{

    private balance:number
    readonly accountNumber:string

    constructor(initialBalance: number, accountNumber: string) {
        this.balance = initialBalance;
        this.accountNumber = accountNumber;
    }

    public get_balance():number{
        return this.balance     
    }

    public deposit(amount:number):void{
        if(amount>0){
            this.balance+=amount
            console.log("Deposited amount:",amount)
        }
        else{
            console.log("Deposit must be postive")
        }
    }
}

// OUTSIDERS
let myaccount=new BankAccount(1000,"ACC-12345")

//myaccount.balance=50000  // you cannot directly update/modify the balance - unsecure

myaccount.deposit(500)
console.log(myaccount.get_balance())