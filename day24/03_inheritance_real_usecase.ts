// Base Class

// open the page ---> clicking on the element
class BasePage {
    pageName: string;

    constructor(pageName: string) {
        this.pageName = pageName;
        console.log(`BasePage Constructor: ${this.pageName}`);
    }

    open(): void {
        console.log(`Opening page: ${this.pageName}`);
    }

    click(element: string): void {
        console.log(`${this.pageName} Clicking on: ${element}`);
    }
}

class LoginPage extends BasePage{

 constructor(pageName: string) {
        super(pageName)
        console.log("Login page constructor...")
    }

 login(username:string,password:string):void{
    this.open() // inherited method // opens the page
    this.click("user name field")
    console.log(`Entering username : ${username}`)

    this.click("password filed")
    console.log(`Entering password : ${password}`)

    this.click("Login button")
    console.log("Login succesfull")
 }

}


//Testscript

let lp=new LoginPage("Login Page")

lp.login("admin","admin123")
