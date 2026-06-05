//let browser="chrome"

switch(browser)
{
    case "chrome":
    case "edge":
    case "opera":
        console.log("chromium project..")
        break
    case "firefox":
        console.log("mozilla  project...")
        break
    case "safari":
        console.log("apple browser..")
        break
    default:
    console.log("unknown browser")

}



//Example 2:
// || operator is not allowed in case.
// only the first value in the case will be considered.

browser="edge"  // wont consider this value

switch(browser)
{
    case "chrome" || "edge" || "opera":
        console.log("chromium project..")
        break
    case "firefox":
        console.log("mozilla  project...")
        break
    case "safari":
        console.log("apple browser..")
        break
    default:
    console.log("unknown browser")

}