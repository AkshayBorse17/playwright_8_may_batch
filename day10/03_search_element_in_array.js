// Search an element in a array

function search(ele,arr)
{
    let flag=false

    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]===ele){
            console.log("element found")
            flag=true
            break
        }
 
    }

    if(flag===false){
         console.log("element not found")
    }
}

let myarr = [10, 20, 30, 40, 50];
let search_element=100

search(search_element,myarr)