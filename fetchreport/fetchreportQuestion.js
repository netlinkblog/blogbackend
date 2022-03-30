var express=require('express');
var app=express();
var question=require('../models/Questions');

const fetchreportquestion=app.post('/fetchreport/question/:regionId',(req,res)=>{
    const fetchreport= async()=>{
        try {
            const regionId=req.params.regionId;
            console.log(regionId)
            const result= await question.findById({_id:regionId});
            res.json(result);
        } catch (error) {
            
        }
    }
    fetchreport();
})
module.exports=fetchreportquestion;