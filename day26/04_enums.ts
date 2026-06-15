//An enum is a group of named constant values
// enums also a type in typescript

//Example 1 : Test status enum

enum TestStatus{
    PASS,
    FAIL,
    SKIPPED
}


function printTestStatus(status:TestStatus):void{
    console.log("Test status is:",TestStatus[status])
}

//Usage:
printTestStatus(TestStatus.PASS)   // argument
printTestStatus(TestStatus.FAIL) // argument
printTestStatus(TestStatus.SKIPPED) // arguments


//Example 2 : Browser types enums

enum BrowserType{
    CHROME="chrome",
    FIREFOX="firefox",
    EDGE="Edge"
}


function launchBrowser(browser:BrowserType):void{
console.log("Browser launched is:", browser)
}


launchBrowser(BrowserType.CHROME)
launchBrowser(BrowserType.FIREFOX)


// Example 3: Test Priorities

enum TestPriority {
    LOW = 1,
    MEDIUM = 2,
    HIGH = 3
}


function executeTest(priority: TestPriority): void {
    console.log(`Executing ${TestPriority[priority]} priority test`);
}

executeTest(TestPriority.LOW)
executeTest(TestPriority.MEDIUM)


//Example 4: Environments

enum Environment {
    DEV = "Development",
    QA = "QA",
    PROD = "Production"
}

function runTests(env: Environment): void {
    console.log(`Running tests in ${env} environment`);
}

// Usage
runTests(Environment.DEV);
runTests(Environment.QA);


//Example 5 : API Request

enum HttpMethod {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE"
}

function makeApiCall(method: HttpMethod): void {
    console.log(`Executing ${method} request`);
}

makeApiCall(HttpMethod.GET)
makeApiCall(HttpMethod.DELETE)