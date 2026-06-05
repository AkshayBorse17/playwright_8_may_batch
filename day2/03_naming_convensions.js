// 1. camelCase (standard for JS variables and functions)

let userName = "camelCase";
let totalPrice = 99.99;
let isLoggedIn = true;

console.log("camelCase:", userName, totalPrice, isLoggedIn);

// 2. PascalCase (standard for JS classes and constructors)

let UserProfile = "PascalCase";
let ShoppingCart = "class name style";

console.log("PascalCase:", UserProfile, ShoppingCart);

// 3. snake_case (underscore separated)
let user_name = 'snake_case';
let total_price = 49.99;
let is_logged_in = false;

console.log("snake_case:", user_name, total_price, is_logged_in);

// 4. SCREAMING_SNAKE_CASE (constants)

const MAX_SIZE=100
const API_KEY = "abc123";
const DATABASE_URL = "localhost";

console.log("SCREAMING_SNAKE_CASE:", MAX_SIZE, API_KEY, DATABASE_URL);


// 5. Hungarian Notation (prefix with type - older style)

let strName="pavan"
let nCount=100
let bActive=true;
console.log("Hungarian Notation:", strName, bActive, nCount)