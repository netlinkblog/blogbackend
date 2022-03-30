var express=require('express');
var app=express();
var report=require('../models/report');
const authenticate=require('../authentication/auth')

const reports=app.post('/report/:region/:regionId',authenticate,(req,res)=>{
    const doReport= async ()=>{
        const user=req.user;
        const region=req.params.region;
        const regionId=req.params.regionId;
        const reports=req.body.report;
        const r1=new report({user_id:user,region:region,regionId:regionId,report:reports});
        const result= await r1.save();
        res.json(result);

    }
    doReport();
})
module.exports=reports;