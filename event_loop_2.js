const fs=require("node:fs");
const a=100;
setImmediate(()=>console.log("set immediate"));

Promise.resolve("promise").then(console.log);

fs.readFile("./file.txt","utf-8",()=>{
    console.log("file reading cb");
});

setTimeout(()=>{
    console.log("timer expired");
},0);

process.nextTick(()=>{
    console.log("process nexttick");
});

function printA(){
    console.log("a=",a);
}

printA();
console.log("last line of the code");