const fs=require("node:fs");
const a=100;
setImmediate(()=>console.log("set Immediate"));


fs.readFile("./file.txt","utf-8",()=>{
    console.log("file reading cb");
});

setTimeout(()=>console.log("timer expired"),0);
function printA(){
    console.log("a=",a);
}


console.log("last line of the code");