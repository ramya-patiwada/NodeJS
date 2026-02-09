const fs=require("node:fs");
setImmediate(()=>console.log("set Immediate"));

setTimeout(()=>console.log("timer expired"));

Promise.resolve("promise").then(console.log);
fs.readFile("file.txt","utf-8",()=>{
    setTimeout(()=>console.log("2nd Timer"));

    process.nextTick(()=>console.log("2nd nexttick"));

    setImmediate(()=>console.log("2nd immediate"));

    console.log("file reading cb");
});

process.nextTick(()=>console.log("nexttick"));
console.log("last line of the file");