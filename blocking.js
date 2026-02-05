const crypto=require("node:crypto");


console.log("hello world");

crypto.pbkdf2Sync("password","salt",500000,50,"sha512");
console.log("the 1st key is generated");
crypto.pbkdf2("ramya","salt",500000,50,"sha512",(err,key)=>{
    console.log("the 2nd key is generated");
});

