# 🟨 JavaScript — Full Tutorial Notes

> **A comprehensive guide to JavaScript fundamentals**, from the basics of how JS runs in a browser to asynchronous programming, classes, and modules.

---

## 📚 Table of Contents

1. [Introduction to JavaScript](#1-introduction-to-javascript)
2. [How the JavaScript Engine Works](#2-how-the-javascript-engine-works)
3. [Comments, Keywords, Identifiers, Literals & Operators](#3-comments-keywords-identifiers-literals--operators)
4. [Variables — var, let & const](#4-variables--var-let--const)
5. [Data Types](#5-data-types)
6. [Operators](#6-operators)
7. [Conditional Statements](#7-conditional-statements)
8. [Truthy and Falsy Values](#8-truthy-and-falsy-values)
9. [Loops](#9-loops)
10. [Functions](#10-functions)
11. [Arrays](#11-arrays)
12. [Array Methods](#12-array-methods)
13. [Advanced Array Methods](#13-advanced-array-methods)
14. [Strings](#14-strings)
15. [Objects](#15-objects)
16. [Asynchronous Programming](#16-asynchronous-programming)
17. [Promises](#17-promises)
18. [Async / Await](#18-async--await)
19. [Classes](#19-classes)
20. [Modules](#20-modules)
21. [Type Conversion](#21-type-conversion)

---

## 1. Introduction to JavaScript

### 🌐 What is JavaScript?

**JavaScript (JS)** is a **high-level**, **interpreted** programming language used to make web pages interactive and dynamic.

- Runs on the **client-side** (browser) and executes directly on the user's machine
- The **default scripting language** for HTML
- JavaScript is **case-sensitive**
- Adds dynamic behaviour to web pages (animations, form validation, button clicks, etc.)

---

### 🏗️ Core Technologies of a Website

Every website is built using three main technologies:

| Technology | Role |
|---|---|
| **HTML** | Structure / Content |
| **CSS** | Styling / Appearance |
| **JavaScript** | Behaviour / Interactivity |

---

### ⭐ Key Features of JavaScript

- **Supports multiple programming styles:**
  - Object-Oriented
  - Functional
  - Event-Driven
- **Dynamically typed** → No need to declare data types explicitly
- Can handle **asynchronous operations** using:
  - Callbacks
  - Promises
  - async/await

---

### ⚙️ How JavaScript Runs in the Browser

JavaScript code is executed by a **JavaScript Engine**.

> **Popular Engine: V8** — used in Chrome & Node.js. It is a high-performance engine written in C++.

---

### 🖥️ Where JavaScript Runs

Originally designed for **web browsers**, it now also runs on:

- Servers (using **Node.js**)
- Mobile apps
- Desktop applications
- IoT devices

---

### 🟢 What is Node.js?

- **Node.js** is an open-source, cross-platform runtime environment
- Allows **running JavaScript outside the browser** (mainly on servers)
- Created by **Ryan Dahl in 2009**
- Built on **Google's V8 Engine**

---

## 2. How the JavaScript Engine Works

The engine processes two types of code:
- **Simple statement** → `let x = 10;`
- **Hot code** → e.g., a loop (runs repeatedly)

### 🔄 Step-by-Step Flow

#### Step 1 — JavaScript Code (Input)
You write JavaScript code in a `.js` file.

```js
let x = 10;

for (let i = 0; i < 3; i++) {
  console.log(i);
}
```

---

#### Step 2 — Parser (Syntax Check)
The parser reads code **line by line** and checks for syntax errors (missing `;`, wrong brackets, etc.). Think of it like a **grammar checker**.

✅ `let` used correctly  
✅ Variable `x` valid  
✅ Assignment `=` correct

---

#### Step 3 — AST (Abstract Syntax Tree)
The parser converts code into a **tree structure** — think of it as a **blueprint of your code**.

```
VariableDeclaration (let)
├── Identifier: x
└── Literal: 10

ForStatement
├── Initialization: let i = 0
├── Condition: i < 3
├── Update: i++
└── Body: console.log(i)
```

---

#### Step 4 — Interpreter (Execution Starts)
Executes code **line by line**. Fast execution, no optimization yet.

```
x → 10

i = 0 → print 0
i = 1 → print 1
i = 2 → print 2
```

---

#### Step 5 — Bytecode
Code is converted into **bytecode** (low-level instructions) while interpreting.

```
LOAD_CONST 10
STORE_NAME x

INIT i = 0
CHECK i < 3
PRINT i
INCREMENT i
REPEAT
```

---

#### Step 6 — Profiler (Monitoring)
The profiler watches execution and identifies **hot code** (code that runs many times).

- `let x = 10;` → runs only once ❌ → Not hot
- Loop → runs multiple times ✅ → Marked as **hot code 🔥**

---

#### Step 7 — Compiler (Optimization)
Converts **hot code only** into faster machine-level instructions.

- Simple statement → ❌ No optimization
- Loop → ✅ Optimized

---

#### Step 8 — Optimized Output
Optimized code replaces slower interpreted code and runs **much faster** for repeated operations.

---

### 🗺️ Simple Flow Summary

```
JS Code → Parser → AST → Interpreter → Bytecode
        → Profiler → Compiler → Optimized Code → Output
```

---

### 💡 Easy Analogy

| Component | Analogy |
|---|---|
| Parser | Grammar checker |
| AST | Blueprint / Tree structure |
| Interpreter | Quick worker |
| Profiler | Performance checker |
| Compiler | Expert optimizer |

> **Key Takeaway:** Simple code like `let x = 10;` runs once → no optimization. Repeated code like loops/functions → 🔥 hot code → ✅ optimized.

---

## 3. Comments, Keywords, Identifiers, Literals & Operators

### 💬 Comments

Comments explain code and improve readability. They are **ignored by the JavaScript engine**.

```js
// This is a single-line comment

/* This is a
   multi-line comment */
```

---

### 🔑 Keywords

Reserved words in JavaScript with special meaning. **Cannot be used as variable names.**

```js
let  const  var  if  else  for  function  return
```

---

### 🏷️ Identifiers

Names given to **variables, functions, or objects**.

**Rules:**
- Must start with a letter, `_`, or `$`
- Cannot start with a number
- Cannot be a keyword
- Case-sensitive

```js
let userName = "Pavan";
let _count = 5;
let $price = 100;
```

---

### 📌 Literals

Fixed values written directly in code (the **value** of a variable).

| Type | Example |
|---|---|
| Number | `10` |
| String | `"Hello"` |
| Boolean | `true`, `false` |
| Array | `[1, 2, 3]` |
| Object | `{name: "Pavan"}` |

```js
let age = 30;         // number literal
let name = "John";    // string literal
let isActive = true;  // boolean literal
```

---

### ➗ Operators

Perform **operations** on variables and values.

| Type | Operators |
|---|---|
| Arithmetic | `+`, `-`, `*`, `/` |
| Assignment | `=`, `+=` |
| Comparison | `==`, `===`, `>`, `<` |
| Logical | `&&`, `\|\|`, `!` |

```js
let a = 10;
let b = 5;
let sum = a + b;   // = is assignment, + is arithmetic
```

---

## 4. Variables — `var`, `let` & `const`

A **variable** is a container that holds data, which can be used or updated later.

> 💡 `let` and `const` are part of **ES6 (Modern JavaScript)**. `var` is legacy — **not recommended**.

---

### 🔍 Scope

| Keyword | Scope |
|---|---|
| `var` | Function Scope |
| `let` | Block Scope `{}` |
| `const` | Block Scope `{}` |

---

### 📊 var, let & const — Summary Table

| # | Feature | `var` | `let` | `const` |
|---|---|---|---|---|
| 1 | Scope | Function | Block | Block |
| 2 | Value at Declaration | Not Mandatory | Not Mandatory | **Mandatory** |
| 3 | Re-declare | Allowed | ❌ Not Allowed | ❌ Not Allowed |
| 4 | Re-assign | Allowed | Allowed | ❌ Not Allowed |
| 5 | Hoisting | Yes (undefined) | No (not initialized) | No (not initialized) |
| 6 | Best Use | ⚠️ Avoid | Changing values | Constants |

---

### 📖 Examples

**Value Assignment:**
```js
var b;
console.log(b); // Output: undefined

let d;
console.log(d); // Output: undefined

// const f;      // ❌ Error: Missing initializer
const g = 60;   // ✅ Works
```

**Re-declaration:**
```js
var city = "New York";
var city = "Los Angeles"; // ⚠️ Allowed (can cause bugs!)

let country = "USA";
// let country = "Canada"; // ❌ Error (safer!)
```

**Re-assignment:**
```js
let score = 50;
score = 60; // ✅ Allowed

const pi = 3.14;
// pi = 3.14159; // ❌ Error
```

**Hoisting:**
```js
console.log(a); // undefined (var is hoisted)
var a = 10;

console.log(b); // ❌ Error (cannot access before initialization)
let b = 20;
```

---

### ✅ Best Practices

- ❌ Avoid `var` — can cause unexpected bugs due to function scope
- ✅ Use `let` — when the variable needs to change later
- ✅ Use `const` — for values that should never change

---

### 🔠 Variable Naming Conventions

| Convention | Example | Valid? |
|---|---|---|
| camelCase | `firstName` | ✅ Yes (standard) |
| PascalCase | `FirstName` | ✅ Yes (for classes) |
| snake_case | `first_name` | ✅ Yes (less common) |
| SCREAMING_SNAKE_CASE | `FIRST_NAME` | ✅ Yes (for constants) |
| kebab-case | `first-name` | ❌ No (SyntaxError) |
| Train-Case | `First-Name` | ❌ No (HTTP headers only) |

---

## 5. Data Types

JavaScript is a **dynamically typed language** — the type is decided at **runtime**.

| Data Type | Description | Example |
|---|---|---|
| `Number` | Integers and decimals | `42`, `3.14` |
| `BigInt` | Very large integers (add `n`) | `9007199254740991n` |
| `Boolean` | Logical: true/false | `true`, `false` |
| `String` | Text data | `"Hello"` |
| `Object` | Key-value pairs | `{name: "John"}` |
| `null` | Intentional absence of value | `null` |
| `undefined` | Declared but not assigned | `undefined` |

---

### 📝 Notes

- **Number:** Precision limited (~16 digits). Has `Number.MAX_SAFE_INTEGER` and `Number.MIN_SAFE_INTEGER`.
- **BigInt:** No floating-point allowed. Use `n` suffix: `9007199254740991n`.
- **null:** `typeof null` returns `"object"` — this is a known JS quirk.
- **String:** Can use `' '`, `" "`, or backticks `` ` ` ``. Backticks support `${variable}` interpolation and multi-line strings.

```js
let name = "Pavan";
let msg = `Hello ${name}`;  // Template literal
```

---

## 6. Operators

### ➕ 1. Arithmetic Operators

| Operator | Operation |
|---|---|
| `+` | Addition |
| `-` | Subtraction |
| `*` | Multiplication |
| `/` | Division |
| `%` | Modulus (remainder) |
| `**` | Exponent (power) |

```js
let a = 10, b = 3;
console.log(a + b);  // 13
console.log(a % b);  // 1
console.log(a ** b); // 1000
```

---

### 📥 2. Assignment Operators

```js
let x = 5;
x += 2;  // x = 7  (add and assign)
x -= 1;  // x = 6  (subtract and assign)
x *= 2;  // x = 12 (multiply and assign)
```

---

### 🔁 3. Comparison Operators

Always return **`true` or `false`**.

| Operator | Meaning |
|---|---|
| `>` | Greater than |
| `<` | Less than |
| `>=` | Greater than or equal |
| `<=` | Less than or equal |
| `==` | Equality (value only) |
| `!=` | Not equal |
| `===` | Strict equality (value + type) |

> ⚠️ **`==` vs `===`:**
> ```js
> console.log(5 == "5");  // true  (only value checked)
> console.log(5 === "5"); // false (value + type checked)
> ```
> Always prefer `===` to avoid unexpected type coercion.

---

### 🔗 4. Logical Operators

```js
console.log(20 > 10 && 10 > 5); // true  (AND)
console.log(10 < 20 || 5 > 10); // true  (OR)
console.log(!true);              // false (NOT)
```

---

### ❓ 5. Ternary Operator (Conditional Operator)

Short form of `if-else`.

```js
// Syntax: condition ? value_if_true : value_if_false

let age = 18;
let result = age >= 18 ? "Adult" : "Minor";
// result = "Adult"
```

---

### 🔢 6. Increment & Decrement Operators

```js
let i = 5;
i++;  // 6
i--;  // 5
```

---

### 🔀 7. Nullish Coalescing Operator (`??`)

Returns the **right value only if left is `null` or `undefined`**.

```js
let model = null;
let val = model ?? "Maruthi";
console.log(val); // "Maruthi"
```

---

### ➕ 8. Comma Operator

Evaluates multiple expressions left-to-right, returns the **last value**.

```js
let result = (1, 2, 3);
console.log(result); // 3
```

---

## 7. Conditional Statements

Conditional statements execute different blocks of code **based on conditions**.

---

### 1️⃣ `if` Statement

Executes a block **only if a condition is true**.

```js
if (condition) {
    // code to execute if condition is true
}

// Example
let age = 18;

if (age >= 18) {
    console.log("You are eligible to vote");
}
```

---

### 2️⃣ `if-else` Statement

Runs one block if `true`, another if `false`.

```js
let number = 5;

if (number % 2 === 0) {
    console.log("Even Number");
} else {
    console.log("Odd Number");
}
// Output: "Odd Number"
```

---

### 3️⃣ `switch` Statement

Checks **multiple conditions** and executes one matching block.

> ✅ Often more readable than multiple `if...else if` chains.

```js
switch (expression) {
    case value1:
        // code block
        break;
    case value2:
        // code block
        break;
    default:
        // fallback code
}

// Example
let day = 3;

switch (day) {
    case 1: console.log("Monday");    break;
    case 2: console.log("Tuesday");   break;
    case 3: console.log("Wednesday"); break;
    default: console.log("Invalid day");
}
// Output: "Wednesday"
```

**Key notes:**
- `break` prevents **fall-through** — without it, execution continues to the next case
- `default` is optional but acts as a fallback
- `switch` compares **exact values** (strict equality)
- You **cannot use `||`** inside `case` — use multiple case statements without `break` instead

---

## 8. Truthy and Falsy Values

In JavaScript, every value is treated as either **truthy** or **falsy** in a boolean context.

### ❌ Falsy Values

```
false  |  0  |  ""  |  null  |  undefined  |  NaN
```

### ✅ Truthy Values

Everything else, including:

```
"Hello"  |  1  |  -10  |  []  |  {}  |  true
```

```js
let username = "";

if (username) {
    console.log("Valid username");
} else {
    console.log("Username is empty");  // ← this runs (empty string is falsy)
}
```

---

### 🧠 Quick Reference

| Use | Statement |
|---|---|
| Single condition | `if` |
| Two conditions | `if-else` |
| Multiple fixed values | `switch` |
| Simplified conditions | Truthy/Falsy |

---

## 9. Loops

Loops **repeat a block of code** until a condition is met.

---

### 🔄 `while` Loop

Executes **as long as the condition is true**. Condition checked **before** execution.

```js
// Syntax
while (condition) {
    // code to execute
}

// Example
let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}
// Output: 1 2 3 4 5
```

> ⚠️ If condition is false initially → loop will **not run at all**.

---

### 🔁 `do...while` Loop

Executes the block **at least once**, then checks the condition.

```js
do {
    // code to execute
} while (condition);

// Example
let i = 1;

do {
    console.log(i);
    i++;
} while (i <= 5);
// Output: 1 2 3 4 5
```

> ✅ Condition is checked **after** execution — guaranteed to run at least once.

---

### 🔢 `for` Loop

Used when you know **how many times to repeat**.

```js
for (initialization; condition; increment/decrement) {
    // code to execute
}

// Example
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
// Output: 1 2 3 4 5
```

---

### ⛔ `break` Statement

**Stops the loop immediately.**

```js
for (let i = 1; i <= 5; i++) {
    if (i === 3) break;
    console.log(i);
}
// Output: 1 2
```

---

### ⏭️ `continue` Statement

**Skips the current iteration** and moves to the next.

```js
for (let i = 1; i <= 5; i++) {
    if (i === 3) continue;
    console.log(i);
}
// Output: 1 2 4 5
```

---

### 📊 Loops Comparison Table

| Feature | `while` | `do...while` | `for` |
|---|---|---|---|
| Condition Check | Before execution | After execution | Before execution |
| Min. Executions | 0 | **1** | 0 |
| Syntax | Simple | Slightly complex | Compact |
| Best Use Case | Unknown iterations | Must run at least once | Known number of iterations |
| Initialization | Outside loop | Outside loop | Inside loop |

---

### 🎯 When to Use What?

- **`for` loop** → You know the exact count (e.g., 50 accounts — iterate one by one)
- **`while` loop** → You're waiting for a condition (e.g., "is download done yet?")
- **`do...while` loop** → The action must happen at least once (e.g., knock on door, then check if answered)

---

## 10. Functions

A **function** is a reusable block of code designed to perform a specific task. Functions help write clean, modular, and maintainable code.

---

### 📤 console.log vs return

| | `console.log` | `return` |
|---|---|---|
| Purpose | Prints to terminal/DevTools | Sends value back to caller |
| Use for | Debugging / display | Data flow / calculations |

```js
function addLog(a, b) {
  console.log(a + b);    // prints, returns nothing
}

function addReturn(a, b) {
  return a + b;          // gives value back
}
```

---

### 🗂️ Types of Functions in JavaScript

---

#### 1️⃣ Named Functions

A function with a specific name. Can be called by that name.

```js
function greet(name) {
    console.log("Hello " + name);
}

greet("Pavan");  // Output: Hello Pavan
```

> ✅ Hoisted — can be called before declaration.

---

#### 2️⃣ Anonymous Functions

A function **without a name**, usually assigned to a variable or used as an argument.

```js
let add = function(a, b) {
    return a + b;
};

console.log(add(2, 3)); // Output: 5
```

---

#### 3️⃣ Arrow Functions (ES6)

A **shorter syntax** for writing functions, introduced in ES6.

```js
// Basic
let multiply = (a, b) => {
    return a * b;
};

// Implicit return (single expression)
let square = x => x * x;
console.log(square(4)); // Output: 16
```

> 🔑 Key: No `this` binding — uses **lexical `this`**. Great for callbacks.

---

#### 4️⃣ Recursive Functions

A function that **calls itself** until a condition is met. Must have a **base condition** to avoid infinite recursion.

```js
// Factorial
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5)); // Output: 120

// Fibonacci
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(6)); // Output: 8
```

---

#### 5️⃣ Callback Functions

A function **passed as an argument** to another function and executed later.

```js
function greet(name) {
    console.log("Hello " + name);
}

function processUserInput(callback) {
    let name = "Pavan";
    callback(name);
}

processUserInput(greet); // Output: Hello Pavan
```

> 📡 Common in APIs, timers, and event handling.

---

#### 6️⃣ Immediately Invoked Function Expressions (IIFE)

A function that **runs immediately** after it is defined. Helps avoid polluting the global scope.

```js
(function() {
    console.log("IIFE executed");
})();

// With parameters
(function(name) {
    console.log("Hello " + name);
})("Pavan");
```

---

### 📋 Functions Summary Table

| Function Type | Key Feature | Usage |
|---|---|---|
| Named Function | Has a name | Reusable logic |
| Anonymous Function | No name | Callbacks, expressions |
| Arrow Function | Short syntax | Modern JS, callbacks |
| Recursive Function | Calls itself | Factorial, Fibonacci |
| Callback Function | Passed as argument | Async operations |
| IIFE | Executes immediately | Initialization |

---

## 11. Arrays

### 📦 What is an Array?

An **array** is a special variable used to store **multiple values** in a single place.

- Can store **different data types**
- Arrays are **ordered collections**
- Each element has an **index** starting from **0**

---

### 🛠️ Creating Arrays

**Method 1: Array Literal (Recommended)**
```js
let a = [];           // empty array
let b = [10, 20, 30]; // array with values
// typeof(a) → "object"
```

**Method 2: Array Constructor**
```js
let a = new Array(10, 20, 30);
```

> ⚠️ **Single value difference:**
> ```js
> let a1 = [5];          // [5]     → length = 1
> let a2 = new Array(5); // [ , , , , ] → length = 5 (empty slots)
> ```

---

### 📏 The `length` Property

```js
let b = [10, 20, 30];
console.log(b.length); // 3
```

---

### 🔁 Looping Through Arrays

#### Classic `for` Loop — Index-based

Best for index control, modifying elements, or performance-critical loops.

```js
let arr = [10, 20, 30];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
```

---

#### `for...in` Loop — Keys/Indexes

Returns **indexes as strings**. Mainly for **objects** — ❌ not recommended for arrays in real projects.

```js
for (let index in arr) {
    console.log(index);      // "0", "1", "2"
    console.log(arr[index]); // 10, 20, 30
}
```

---

#### `for...of` Loop — Values (ES6)

The **cleanest and most modern** approach when you just need values.

```js
for (let value of arr) {
    console.log(value); // 10, 20, 30
}
```

---

### 📊 Loop Comparison Table

| Feature | `for` | `for...in` | `for...of` |
|---|---|---|---|
| Iterates | Index | Keys (index) | Values |
| Best for Arrays | ✅ Yes | ❌ Not recommended | ✅ Yes |
| Access index | ✅ Yes | ✅ Yes | ❌ No |
| Access value | ✅ Yes | ✅ Yes | ✅ Yes |
| Modern syntax | ❌ | ❌ | ✅ Yes |

> 🎯 **Simple Rule:** Need **index** → `for` | Need **values only** → `for...of` | Working with **objects** → `for...in`

---

## 12. Array Methods

### 📊 Quick Reference Table

| Method | Modifies Original? | Returns |
|---|---|---|
| `push()` | ✅ Yes | New length |
| `pop()` | ✅ Yes | Removed element |
| `shift()` | ✅ Yes | Removed element |
| `unshift()` | ✅ Yes | New length |
| `concat()` | ❌ No | New array |
| `slice()` | ❌ No | New array |
| `splice()` | ✅ Yes | Removed elements |
| `indexOf()` | ❌ No | Index / -1 |
| `at()` | ❌ No | Element |
| `includes()` | ❌ No | `true`/`false` |
| `toString()` | ❌ No | String |
| `reverse()` | ✅ Yes | Reversed array |
| `flat()` | ❌ No | New array |
| `sort()` | ✅ Yes | Sorted array |
| `join()` | ❌ No | String |

---

### 📚 Detailed Examples

**`push()` — Add to end**
```js
let fruits = ["apple", "banana"];
fruits.push("orange");
console.log(fruits); // ["apple", "banana", "orange"]
```

**`pop()` — Remove from end**
```js
let fruits = ["apple", "banana", "orange"];
let removed = fruits.pop();
console.log(removed); // "orange"
console.log(fruits);  // ["apple", "banana"]
```

**`shift()` — Remove from beginning**
```js
let fruits = ["apple", "banana", "orange"];
fruits.shift();
console.log(fruits); // ["banana", "orange"]
```

**`unshift()` — Add to beginning**
```js
let fruits = ["banana", "orange"];
fruits.unshift("apple");
console.log(fruits); // ["apple", "banana", "orange"]
```

**`concat()` — Merge arrays**
```js
let a = [1, 2];
let b = [3, 4];
let result = a.concat(b);
console.log(result); // [1, 2, 3, 4]
```

**`slice(start, end)` — Extract portion**
```js
let numbers = [10, 20, 30, 40];
let result = numbers.slice(1, 3); // start=inclusive, end=exclusive
console.log(result); // [20, 30]
```

**`splice(start, deleteCount, ...items)` — Add/Remove/Replace**
```js
let numbers = [10, 20, 30, 40];
numbers.splice(1, 1); // remove 1 element from index 1
console.log(numbers); // [10, 30, 40]
```

**`indexOf()` — Find index**
```js
let fruits = ["apple", "banana", "orange"];
console.log(fruits.indexOf("banana")); // 1
console.log(fruits.indexOf("grape"));  // -1 (not found)
```

**`at()` — Supports negative index**
```js
let fruits = ["apple", "banana", "orange"];
console.log(fruits.at(0));  // "apple"
console.log(fruits.at(-1)); // "orange"
```

**`includes()` — Check existence**
```js
console.log(fruits.includes("banana")); // true
console.log(fruits.includes("grape"));  // false
```

**`flat()` — Flatten nested arrays**
```js
let arr = [1, 2, [3, 4]];
let result = arr.flat();
console.log(result); // [1, 2, 3, 4]
```

---

## 13. Advanced Array Methods

### 📊 Advanced Methods Summary

| Method | Purpose | Returns |
|---|---|---|
| `forEach()` | Execute for each element | `undefined` |
| `map()` | Transform elements | New array |
| `filter()` | Filter elements | New array |
| `reduce()` | Accumulate value | Single value |
| `some()` | Any element matches | `true`/`false` |
| `every()` | All elements match | `true`/`false` |

---

### 🔄 `forEach()` — Execute for Each

```js
let numbers = [1, 2, 3];

numbers.forEach(function(num) {
    console.log(num);
});
// Output: 1  2  3
```

> ⚠️ Cannot `break` or `stop` early.

---

### 🔀 `map()` — Transform Elements

Returns a **new array** without modifying the original.

```js
let numbers = [1, 2, 3];

let doubled = numbers.map(function(num) {
    return num * 2;
});
console.log(doubled); // [2, 4, 6]
```

---

### 🔍 `filter()` — Filter by Condition

Returns only elements that **satisfy the condition**.

```js
let numbers = [1, 2, 3, 4, 5];

let evenNumbers = numbers.filter(function(num) {
    return num % 2 === 0;
});
console.log(evenNumbers); // [2, 4]
```

---

### ➕ `reduce()` — Accumulate to Single Value

Useful for sum, product, total, etc.

```js
let numbers = [1, 2, 3, 4];
let sum = numbers.reduce(function(total, num) {
    return total + num;
}, 0);
console.log(sum); // 10
```

---

### ❔ `some()` — Any Element Matches

Returns `true` if **at least one** element matches.

```js
let numbers = [1, 3, 5, 8];
let hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven); // true
```

---

### ✅ `every()` — All Elements Match

Returns `true` only if **all** elements match.

```js
let numbers = [2, 4, 6];
let allEven = numbers.every(num => num % 2 === 0);
console.log(allEven); // true
```

---

## 14. Strings

### 📝 What is a String?

A **string** represents text data — a sequence of characters.

```js
let str1 = 'Single quote string';
let str2 = "Double quote string";
let str3 = `Backtick (template) string`;
```

---

### 🔧 Template Strings (Backticks)

Backticks allow **variable interpolation** with `${}`.

```js
let num = 10;
console.log(`Number is: ${num}`);    // ✅ Valid → "Number is: 10"
console.log("Number is: ${num}");    // ❌ NOT valid → literal "${num}"
```

> ✅ `${}` works **only with backticks**.

---

### 🧰 String Methods

**`length`** — Number of characters
```js
let str = "Welcome";
console.log(str.length); // 7
```

**`toUpperCase()` / `toLowerCase()`**
```js
console.log(str.toUpperCase()); // WELCOME
console.log(str.toLowerCase()); // welcome
```

**`charAt(index)` / `indexOf(value)`**
```js
let str = "Welcome";
console.log(str.charAt(3));       // "c"
console.log(str.indexOf("l"));    // 2
console.log(str.indexOf("come")); // 3
console.log(str.indexOf("abc"));  // -1 (not found)
```

**`substring(start, end)`** — start inclusive, end exclusive
```js
console.log(str.substring(0, 5)); // "Welco"
console.log(str.substring(2, 4)); // "lc"
```

**`includes()`** — Case-sensitive existence check
```js
let str = "Hello, JavaScript!";
console.log(str.includes("Hello")); // true
console.log(str.includes("hello")); // false
```

**`startsWith()` / `endsWith()`**
```js
console.log(str.startsWith("Hello")); // true
console.log(str.endsWith("!"));       // true
```

**`replace()`**
```js
console.log(str.replace("JavaScript", "World")); // "Hello, World!"
```

**`split(separator, limit)`** — String to array
```js
console.log("Hello World".split(" "));    // ["Hello", "World"]
console.log("Jan,Feb,Mar".split(","));    // ["Jan", "Feb", "Mar"]
console.log("A-B-C-D".split("-", 2));     // ["A", "B"]
```

**`trim()` / `trimStart()` / `trimEnd()`** — Remove spaces
```js
let s = "   welcome to JavaScript   ";
console.log(s.trim());      // "welcome to JavaScript"
console.log(s.trimStart()); // "welcome to JavaScript   "
console.log(s.trimEnd());   // "   welcome to JavaScript"
```

**`concat()`** — Combine strings
```js
let str1 = "welcome";
let str2 = " to JavaScript";
console.log(str1.concat(str2)); // "welcome to JavaScript"
```

---

### 🔒 String Immutability

Strings are **immutable** — string methods **do not modify the original** string. They return a **new string**.

```js
let str = "welcome";
let modified = str.concat(" to JavaScript");

console.log(str);      // "welcome"   (original unchanged)
console.log(modified); // "welcome to JavaScript"
```

---

## 15. Objects

### 🗂️ What are JavaScript Objects?

A **JavaScript Object** is a variable that stores multiple values as **key-value pairs**.

- **Properties** → store values (`key: value`)
- **Methods** → store functions (`key: function()`)

```js
const person = {
    firstName: "John",    // Property
    age: 30,              // Property
    greet: function() {   // Method
        console.log("Hello");
    }
};
```

---

### 🔨 Creating Objects

**1. Object Literal (Most Common)**
```js
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};
```

**2. Empty Object + Add Properties**
```js
const person = {};
person.firstName = "John";
person.lastName = "Doe";
```

**3. Using `new Object()`**
```js
const person = new Object({
    firstName: "John",
    age: 50
});
```

---

### 🔑 Accessing Properties

```js
// Dot notation
person.firstName

// Bracket notation
person["firstName"]

// Dynamic access (expression)
let key = "firstName";
console.log(person[key]);
```

---

### ✏️ Modifying Object Properties

```js
person.age = 10;                 // Change/update value
person.nationality = "English";  // Add new property
delete person.age;               // Delete property → becomes undefined

// Check existence
let result = "firstName" in person;
```

---

### 🪆 Nested Objects

```js
const myObj = {
    name: "John",
    age: 30,
    myCars: {
        car1: "Ford",
        car2: "BMW",
        car3: "Fiat"
    }
};

// Accessing nested properties
myObj.myCars.car2;        // "BMW"
myObj["myCars"]["car2"];  // "BMW"
```

---

### ⚙️ Object Methods & `this` Keyword

```js
const person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

person.fullName();  // "John Doe" (executes function)
person.fullName;    // returns function definition (no parentheses)
```

> `this` refers to the **current object**.

---

### 🔍 Displaying Object Properties

```js
let car = { brand: "Toyota", model: "Camry", year: 2025, color: "Black" };

// Using for...in
for (let key in car) {
    console.log(key + ": " + car[key]);
}

// Using Object.values()
let values = Object.values(car);
// ['Toyota', 'Camry', 2025, 'Black']

// Using Object.entries()
for (let [key, value] of Object.entries(car)) {
    console.log(key + ": " + value);
}

// Count properties
console.log(Object.keys(car).length); // 4
```

---

## 16. Asynchronous Programming

### ⏱️ Synchronous vs Asynchronous

**Synchronous** — code executes **line by line**, blocking execution. Each statement must complete before the next starts.

```
Step 1 → Step 2 → Step 3  (if one step takes time, everything waits)
```

**Asynchronous** — allows **time-consuming tasks** to run in the background without blocking other code.

> 🔑 JavaScript is **single-threaded**, but uses asynchronous techniques to handle multiple operations efficiently.

---

### ❓ Why is Async Programming Needed?

Some operations take time:

- Network requests (API calls)
- Timers (`setTimeout`, `setInterval`)
- User interactions (clicks, inputs)
- File operations

Without async, the application would **freeze** while waiting.

---

### 🛠️ Ways to Handle Async Programming

| Approach | Style | Readability | Recommendation |
|---|---|---|---|
| **Callbacks** | Nested functions | Hard | Old approach |
| **Promises** | `.then()` / `.catch()` | Better | Modern JS |
| **Async/Await** | Looks synchronous | Very easy | ✅ Recommended |

---

### 🔙 Callback Functions (Oldest Approach)

A **callback** is a function passed as an argument, executed **after** a task completes.

```js
function fetchUser(callback) {
    console.log("Fetching user data...");

    setTimeout(() => {
        let user = { name: "John", age: 35 };
        callback(user); // execute callback when done
    }, 2000);
}

function displayUser(user) {
    console.log("User received:", user);
}

fetchUser(displayUser);
// Output: "Fetching user data..."
// (after 2 seconds) "User received: { name: 'John', age: 35 }"
```

---

### ⚠️ Callback Hell (Pyramid of Doom)

When callbacks are **nested inside other callbacks**:

```
Open Browser
   → Go to Login Page
       → Enter Credentials
           → Click Login
               → (more nesting...)
```

This makes code hard to read, maintain, and debug.

---

## 17. Promises

### 🤝 What is a Promise?

A **Promise** is an object representing the result of an asynchronous operation. A cleaner alternative to nested callbacks.

---

### 📊 Promise States

| State | Meaning |
|---|---|
| **Pending** | Operation is still running |
| **Fulfilled (Resolved)** | Operation completed successfully |
| **Rejected** | Operation failed |

---

### 📝 Basic Syntax

```js
let myPromise = new Promise((resolve, reject) => {
    // async task
    if (success) {
        resolve("Success result");
    } else {
        reject("Error occurred");
    }
});

myPromise
    .then((result) => {
        // runs on success
    })
    .catch((error) => {
        // runs on failure
    })
    .finally(() => {
        // always runs (cleanup)
    });
```

---

### 💡 Simple Example

```js
let order = new Promise((resolve, reject) => {
    let orderReady = true;

    if (orderReady) {
        resolve("Order is ready!");
    } else {
        reject("Order failed!");
    }
});

order
    .then(msg => console.log(msg))
    .catch(err => console.log(err))
    .finally(() => console.log("Process completed"));
// Output: "Order is ready!" → "Process completed"
```

---

### 🔀 Running Multiple Promises

**`Promise.all()` — Parallel Execution**
- Runs multiple promises together
- If **any one fails** → entire operation fails

```js
Promise.all([
    Promise.resolve("Auth OK"),
    Promise.resolve("DB OK"),
    Promise.resolve("Cache OK")
])
.then(results => console.log(results))
.catch(err => console.log(err));
```

**`Promise.allSettled()` — Returns all results**
- Returns both success and failure results
- Never fails overall

```js
Promise.allSettled([
    Promise.resolve("Login passed"),
    Promise.reject("Search failed")
])
.then(results => console.log(results));
```

**`Promise.race()` — Fastest wins**
- Returns the result of the **fastest** promise

```js
Promise.race([api1, api2])
    .then(result => console.log(result));
```

---

### ✅ Key Advantages of Promises

- Avoids callback hell
- Improves readability
- Better error handling
- Easier chaining of async operations

---

## 18. Async / Await

### ⚡ What is async/await?

`async/await` is a **simpler way to work with Promises** — asynchronous code that **reads like synchronous code**.

- **`async`** — placed before a function, makes it always return a Promise
- **`await`** — used inside an async function, **pauses execution** until the Promise resolves

---

### 📝 Example

```js
function fetchUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let user = { name: "John", age: 30 };
            resolve(user);
        }, 2000);
    });
}

// Async function
async function getUser() {
    console.log("Fetching user data...");

    try {
        let user = await fetchUser();           // wait for Promise
        console.log("User received:", user);
    } catch (error) {
        console.log("Error:", error);
    }
}

getUser();
// Output: "Fetching user data..."
// (after 2 seconds) "User received: { name: 'John', age: 30 }"
```

> `try...catch` in async/await works like `.catch()` in Promises.

---

### 📊 Approaches Comparison

| Approach | Syntax Style | Readability | Recommendation |
|---|---|---|---|
| Callback | Nested functions | Difficult | Old approach |
| Promise | `.then()` / `.catch()` | Better | Modern JS |
| Async/Await | Looks synchronous | Very easy | ✅ Recommended |

---

## 19. Classes

### 🏛️ What is a Class?

A **class** is a **blueprint for creating objects**. Introduced in **ES6 (2015)**.

- Class is a **logical entity** (contains variables and methods)
- Object is a **physical entity** (an instance of a class)

**Real Examples:**
- Class: `Student` → Objects: John, Smith, Mary
- Class: `Animal` → Objects: Dog, Cat, Tiger

---

### 🔧 Constructor

The `constructor` method is a **special method** that:
- Must be named exactly `"constructor"`
- Executes **automatically** when a new object is created
- Used to **initialize** object properties
- If omitted, JavaScript adds an empty one automatically

---

### 📝 Syntax & Example

```js
class ClassName {
    constructor() {
        // initialization
    }

    methodName() {
        // logic
    }
}

// Example
class Car {
    constructor(brand, model) {
        this.brand = brand;   // property
        this.model = model;
    }

    start() {
        console.log(this.brand + " started");
    }

    stop() {
        console.log(this.brand + " stopped");
    }
}

const car1 = new Car("Toyota", "Corolla");
car1.start(); // "Toyota started"
car1.stop();  // "Toyota stopped"
```

---

### 🔑 Key Concepts

| Keyword | Meaning |
|---|---|
| `class` | Defines the blueprint |
| `constructor()` | Special initialization method |
| `this` | Refers to the current object |
| `new` | Creates an object instance |
| Methods | Functions inside the class |

---

## 20. Modules

### 📦 What is a Module?

A **module** is a separate JavaScript file used to **organize and reuse code**. Modules can contain variables, functions, objects, and classes.

**Why use modules?**
- ♻️ Code reusability
- 🏗️ Better structure
- 🔧 Easy maintenance

---

### 📤 Exporting Modules (3 Ways)

**1. Named Export (Most Common)**
```js
// math.js
export const PI = 3.14;

export function add(a, b) {
    return a + b;
}
```

**2. Export at Bottom**
```js
// utils.js
const name = "Pavan";

function greet() {
    console.log("Hello");
}

export { name, greet };
```

**3. Export with Alias**
```js
// greet.js
const message = "Hello";
export { message as msg };
```

---

### 📥 Importing Modules (3 Ways)

**1. Named Import**
```js
import { PI, add } from './math.js';
```

**2. Import All**
```js
import * as utils from './utils.js';
// Access as: utils.name, utils.greet()
```

**3. Import with Alias**
```js
import { msg } from './greet.js';
```

---

### 🗂️ Classes vs Modules — Quick Summary

| | Classes | Modules |
|---|---|---|
| Purpose | Blueprint for objects | Split code into files |
| Key words | `constructor`, `this`, methods | `export`, `import` |
| Supports | OOP (inheritance, encapsulation) | Maintainability & scalability |

---

## 21. Type Conversion

### 🔄 What is Type Conversion?

**Type Conversion** means converting a value from **one data type to another**. JavaScript is a **weakly (loosely) typed language**, so variables can hold any type.

---

### 🤖 1. Implicit Type Conversion (Automatic)

Also called **Type Coercion** — done **automatically** by the JS engine during operations.

| Expression | Result | Why |
|---|---|---|
| `"5" + 2` | `"52"` | Number → String (`+` with string = concat) |
| `"5" - 2` | `3` | String → Number (`-` forces numeric) |
| `true + 1` | `2` | Boolean → Number (`true` = 1) |

> ⚠️ JavaScript decides conversion based on **context and operator**.

---

### 🖐️ 2. Explicit Type Conversion (Manual)

Done **manually** using built-in conversion functions.

| Function | Converts to | Example |
|---|---|---|
| `Number()` | Number | `Number("123")` → `123` |
| `parseInt()` | Integer | `parseInt("42px")` → `42` |
| `parseFloat()` | Decimal | `parseFloat("3.14")` → `3.14` |
| `String()` | String | `String(100)` → `"100"` |
| `Boolean()` | Boolean | `Boolean(0)` → `false` |

---

### ⚠️ Important Notes

**`==` vs `===`:**
- `==` → compares values **after conversion** (loose equality)
- `===` → compares **value + type** (strict equality) ✅ Preferred

**`+` Operator Special Behaviour:**
- If one operand is string → converts everything to string (concatenation)
- Otherwise → performs numeric operation

**Falsy values:** `0`, `""`, `null`, `undefined`, `NaN`, `false`

---

### ✅ Summary

- Type conversion helps JavaScript handle **different data types smoothly**
- **Implicit** → automatic (by JS engine)
- **Explicit** → manual (by programmer)
- Understanding conversion prevents **unexpected bugs**

---

## 📖 Additional Resources

| Resource | Link |
|---|---|
| 🌐 Training Website | [pavanonlinetrainings.com](https://www.pavanonlinetrainings.com) |
| 📺 YouTube Channel | [SDET Pavan](https://www.youtube.com/@sdetpavan) |

---

> 💡 **Pro Tip:** Practice every concept in the browser's Developer Tools console (`F12` → Console tab) or at [jsfiddle.net](https://jsfiddle.net) to reinforce learning!

---

*Document prepared and enhanced from JavaScript Full Notes — Happy Coding! 🚀*
