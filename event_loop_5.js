const fs=require("node:fs");

setImmediate(()=>console.log("set Immediate"));
setTimeout(()=>console.log("timer expired"),0);

Promise.resolve("promise").then(console.log);

Promise.resolve().then(()=>{
    process.nextTick(()=>console.log("next tick inside promise"));

    console.log("promise-3");
})

fs.readFile("./file.txt","utf-8",()=>{
    console.log("file reading cb");
})

process.nextTick(()=>{
   Promise.resolve("promise-2").then(console.log);

    console.log("nexttick");
})

console.log("last line of the code");