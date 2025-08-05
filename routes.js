
const express = require('express')

const app=express()
process.env.PORT
app.listen(process.env.PORT || 8000)
app.use(express.json())

app.get("/show/:id",(req,res)=>{
   res.send(`This is a Show! ${req.params.id}`);
})
app.post("/store/:id",(req,res)=>{
    res.send(`This is a store! ${req.params.id}`);
 })
 app.put("/update/:id",(req,res)=>{
    res.send(`This is a Update! ${req.params.id}`);
 })
 app.delete("/delete/:id",(req,res)=>{
    res.send(`This is a Delete! ${req.params.id}`);
 })
 


