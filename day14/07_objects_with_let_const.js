
//Ex: Behaviour of objects with let vs const 

// let -  Allowed Modification of object properties and also complete object 

let config1 = { browser: "Chrome", timeout: 3000 };

config1.browser = "Firefox";
config1.timeout = 5000;
config1.retries = 2;
console.log(config1); //{ browser: 'Firefox', timeout: 5000, retries: 2 }

config1 = { browser: "Safari" };  // Trying to Complete object modification 
console.log(config1); //{ browser: 'Safari' }



// const -  Allowed Modification of object properties, but  Not complete object 

const config = { browser: "Chrome", timeout: 3000 };

config.browser = "Firefox";
config.timeout = 5000;
config.retries = 2;
console.log(config);

config = { browser: "Safari" }; // Trying to Complete object modification //TypeError: Assignment to constant variable.
console.log(config);