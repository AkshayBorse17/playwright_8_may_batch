/*
function pizzaReady(abc,xyz){
  console.log(abc + " your pizza is ready")// +  xyz())
    xyz()
 }

function orderNumber()
{   
    console.log("Your order number is 101")
}


pizzaReady("John",orderNumber)
*/




function pizzaReady(abc,xyz){
  console.log(abc + " your pizza is ready" + xyz())
    //xyz()
 }
 
function orderNumber()
{   
   return ("Your order number is 101")
}


pizzaReady("John",orderNumber)