
const PORT=3000;
const express=require("express");
const fs=require("fs");
const bodyparser=require("body-parser");
const server=express();

server.get("/",(req,res)=>{
res.send("Hello world")
});
server.listen(PORT);



// server.listen(()=>{
//     console.log("server starting");
//     server.use(PORT);
// });
