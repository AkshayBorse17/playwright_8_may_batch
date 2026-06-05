let str25 = "HeLLo";
let toggle = str25
  .split("") // convert to array elements
  .map(c => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase())
  .join("");
console.log("25. Toggle case:", toggle);
