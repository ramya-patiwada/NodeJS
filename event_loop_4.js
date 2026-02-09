const fs=require("node:fs");

setImmediate(()=>console.log("set Immediate"));
setTimeout(()=>console.log("timer expired"),0);

Promise.resolve("promise").then(console.log);

fs.readFile("./file.txt","utf-8",()=>{
    console.log("file reading cb");
})

process.nextTick(()=>{
    process.nextTick(()=>console.log("Inner nextTick"));

    console.log("nexttick");
})

console.log("last line of the code");