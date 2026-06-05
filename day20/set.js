/* Set :

Uniqueness: Each value can only occur once.(duplicates not allowed)
Ordered: Elements are iterated in their insertion order.
No Indexing: You cannot access values via index (e.g., set[0] will not work)

*/

//creating set
const tools = new Set(['selenium', 'cypress', 'playwright', 'selenium']);

console.log(tools.size)  //3 

//add new element
tools.add("appium")
console.log("After adding:",tools) //{ 'selenium', 'cypress', 'playwright', 'appium' }

//check the existance
console.log(tools.has("cypress"))//true

//deleting element
tools.delete("appium")
console.log("After deletion:",tools) //{ 'selenium', 'cypress', 'playwright' }


// for..of loop prefered for data structures
for(let t of tools)
{
    console.log(t)
}