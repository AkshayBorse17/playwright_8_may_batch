class TestCase{

  testName: string;
  browser: string;
  url?: string;

  // Constructor Overloading Signatures
  constructor(testName: string);
  constructor(testName: string, browser: string);
  constructor(testName: string, browser: string, url: string);

 //implementation

 constructor(testName:string,browser?:string,url?:string){
    this.testName=testName
    this.browser=browser || "chrome"
    this.url=url
 }

displayTestInfo(): void {
    console.log("Test Name:", this.testName);
    console.log("Browser:", this.browser);

    if (this.url) {
      console.log("URL:", this.url);
    } else {
      console.log("No URL provided.");
    }
  }

}


// Creating objects using different constructors
const tc1 = new TestCase("Login Test");
const tc2 = new TestCase("Signup Test", "Firefox");
const tc3 = new TestCase("Checkout Test", "Edge", "https://testapp.com");

tc1.displayTestInfo()
tc2.displayTestInfo()
tc3.displayTestInfo()


// what will be the output????
//let tc4 = new TestCase();
//console.log(tc4.displayTestInfo())