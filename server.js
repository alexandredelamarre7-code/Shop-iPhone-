const express=require("express"),path=require("path");
const app=express();app.use(express.json());app.use(express.static(__dirname));
app.get("/api/health",(req,res)=>res.json({ok:true}));
app.listen(process.env.PORT||3000,()=>console.log("DELAMARRE STORE running"));