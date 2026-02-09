const crypto=require("crypto");

crypto.pbkdf2("password","salt ",500000,50,"sha512",(err,key)=>{
    console.log("password1");
});

crypto.pbkdf2("password","salt ",500000,50,"sha512",(err,key)=>{
    console.log("password2");
});

crypto.pbkdf2("password","salt ",500000,50,"sha512",(err,key)=>{
    console.log("password3");
});

crypto.pbkdf2("password","salt ",500000,50,"sha512",(err,key)=>{
    console.log("password4");
});

crypto.pbkdf2("password","salt ",500000,50,"sha512",(err,key)=>{
    console.log("password5");
});
