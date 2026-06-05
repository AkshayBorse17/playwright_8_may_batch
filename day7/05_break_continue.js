//break
for(let i=1;i<=10;i++)
{
    if(i===5){
        break
    }
    console.log(i) //1 2 3 4 
}

//continue - skipping the value/values

for(let i=1;i<=10;i++)
{
    if(i===5){
        continue
    }
    console.log(i) 
}

//skip 3 5 7 
for(let i=1;i<=10;i++)
{
    if(i===3 || i===5 || i===7){
        continue
    }
    console.log(i) 
}