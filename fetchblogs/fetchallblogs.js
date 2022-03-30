var express=require('express');
var app=express();
var Blogs=require('../models/Blogs');


const allblogs=app.get('/allblogs',(req,res)=>{
    const fetchbytags=async ()=>{
        const tag=req.params.tag;
        const result=await Blogs.find();
        res.json(result)
    }
    fetchbytags();
})
module.exports=allblogs