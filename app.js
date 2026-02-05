const {calculateSum,calculateMultiply}=require("./calculate/index.js");
require("./xyz.js");
const data=require("./data.json");
console.log(data);
var name="Ramya";
var a=10;
var b=20;

console.log(name);
calculateSum(a,b);
calculateMultiply(a,b);
