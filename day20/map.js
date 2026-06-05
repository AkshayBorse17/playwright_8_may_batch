/*
/*
Map Object (Key-Value Storage)
A Map is a collection of key-value pairs 
It maintains the exact insertion order of its elements
*/


let mymap=new Map()


//add/update values   - set()

mymap.set("John", "manager")
mymap.set("Mary", "tester")
mymap.set("Scott", "developer")

console.log(mymap) 

//output

/*
{
  'John' => 'manager',
  'Mary' => 'tester',
  'Scott' => 'developer'
}
*/


mymap.set("John", "Lead")  //updated

console.log("After updation:", mymap) 


// Check existence (.has)

console.log(mymap.has("Scott")) //true

//size
console.log(mymap.size) //3


//delete
mymap.delete("Scott")
console.log("After deletion:", mymap) //{ 'John' => 'Lead', 'Mary' => 'tester' }


for(let [k,v] of mymap)
{
    console.log(k,v)
}