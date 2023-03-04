const express = require('express');

const app=express()
const dafa = require('./data.js');
console.log('data: ', dafa);
const port=3000;

console.log(dafa.length+1);

app.get("/dafa",(req,res)=>{
    res.send(dafa)
})
app.listen(port,()=>{
    console.log("server is running");
})

app.use(express.json());

app.post("/sendData",(req,res)=>{
    class data{
        constructor() {
                    
        }
    }
    var temp=new data()
    temp.id=req.body.id
    temp.name=req.body.name
    temp.total_quantity=req.body.total_quantity
    temp.type_of_product=req.body.type_of_product
    temp.price=req.body.price
    console.log('dat: ', data);
    dafa.push(temp)
    res.send("data submitted")
})