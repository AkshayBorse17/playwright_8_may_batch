/*

words=["hello", "world", "javascript"];
words_upper= ["HELLOW", "WORLD", "JAVASCRIPT"];

*/

function capitalizeWords(words)
{
  let result=[];

    for(let i=0;i<words.length;i++)
    {
       result[i]= words[i].toUpperCase()   // toLowerCase()
    }

    return result
}


let words=["hello", "world", "javascript"];
console.log(capitalizeWords(words)) //[ 'HELLO', 'WORLD', 'JAVASCRIPT' ]

let a=['a','c,','b']
console.log(capitalizeWords(a)) 


'a'.toUpperCase()

