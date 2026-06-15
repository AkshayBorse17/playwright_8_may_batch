
// Interface 1 for Login functionality
interface Login{
    login(username:string, password:string): void
}


//Interface 2  for search functionality
interface Search{
   searchProduct(productName:string):void
}

//Interface 3  for logout functionality
interface Logout{
   logout():void
}


//class can implement multiple interfaces  - multiple inheritance

class EcommerceTest implements Login,Search,Logout{

    testName:string

    constructor(tname:string){
        this.testName=tname
    }

    login(username: string, password: string): void {
        console.log(`${this.testName}: Logging in with ${username}`);
    }

    searchProduct(productName: string): void {
        console.log(`${this.testName}: Searching for ${productName}`);
    }

    logout(): void {
        console.log(`${this.testName}: Logging out`);
    }

}


// usage

let mytest=new EcommerceTest("Functional Test")

mytest.login("admin","admin123")
mytest.searchProduct("Mobile")
mytest.logout()