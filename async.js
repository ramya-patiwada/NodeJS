const fs=require("node:fs");
const https=require("node:https");


var a=20;
var b=30;

console.log("ASYNC");
https.get("https://dummy.com/",(res)=>{
    console.log("the data is fetched from the api");
});

setTimeout((res)=>{
    console.log("please wait for 5sec");
},5000);

fs.readFile("./file.txt","utf8",(err,data)=>{
    console.log("the data in the file is:",data);
});


function mul(x,y){
    const res=x*y;
    return res;
}

var c=mul(a,b);
console.log(c);