class TestExecutor{

  // Method Overloading Signatures
  runTest(testName: string): void;
  runTest(testName: string, browser: string): void;
  runTest(testName: string, browser: string, retries: number): void;

    runTest(testName:string,browser?:string,retries?:number):void{

        console.log("Executing the test:", testName)

        if(browser){
            console.log("Browser:", browser)
        }
        else{
            console.log("Browser:chrome(Default)")
        }

        if(retries!==undefined){
            console.log("Retries:",retries )
        }
        else{
            console.log("Retries:",0 )
        }
    }

}


let executor=new TestExecutor()

executor.runTest("Login Test");
executor.runTest("Search Test", "Firefox");
executor.runTest("Payment Test", "Chrome", 2);