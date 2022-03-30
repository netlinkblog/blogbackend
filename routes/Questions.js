const express=require('express');
const authenticate = require('../authentication/auth');
var questions=require('../models/Questions');
var app=express();

const question=app.post('/question',authenticate,(req,res)=>{
    const askQuestion= async ()=>{
        const user=req.user;
        const question=req.body.question;
        var q1=new questions({user_id:user, question:question});
        const result= await q1.save();
        res.json(result);


    }
    askQuestion()
})

module.exports=question;