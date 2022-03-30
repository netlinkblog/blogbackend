const express=require('express');
const app=express();
const User=require('../models/model');

const getuser=app.get('/getuser',(req,res)=>{
    const getUser= async ()=>{
       const result = await User.find();
       res.json(result);
    }
    getUser();
})
module.exports=getuser;