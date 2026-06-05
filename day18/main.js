//testData.js      --> named export
// actions.js      ---> bottom export
//utils.js       ---> export aliases


//1. Imported testData.js module
// Named import

import {baseURL,getUser,testConfig,TestHelper} from "./testData.js"

console.log(baseURL)
console.log(getUser())
console.log(testConfig)

/*
let th=new TestHelper()
th.login()
*/
new TestHelper().login()


//2.Import actions.js module
// importing all

import * as act  from "./actions.js"


console.log(act.pageTitle)

act.clickLogin()

console.log(act.selectors)

new act.Actions().fillForm()


//3. Import utils.js module
// importing aliases


import {delay,capture,API as Apiclass} from "./utils.js"


console.log(delay)

capture()


new Apiclass().get()
