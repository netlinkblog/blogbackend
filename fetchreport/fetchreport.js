var express=require('express');
var app=express();
var blogs=require('../models/Blogs');

const fetchreport=app.post('/fetchreport/blogs/:regionId',(req,res)=>{
    const fetchreport= async()=>{
        const regionId=req.params.regionId;
        const result= await blogs.findById({_id:regionId});
        res.json(result);
    }
    fetchreport();
})
module.exports=fetchreport;