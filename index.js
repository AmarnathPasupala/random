let express=require("express");
let app=express();
let port=8080;

app.listen(port,()=>{
    console.log("app is started");
})

app.get("/main",(req,res)=>{
    res.send("i am at root");
})

app.get("/main/root",(req,res)=>{
    res.send("i am at main root");
})