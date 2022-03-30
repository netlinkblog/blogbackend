var express=require('express');
const authenticate = require('../authentication/auth');
var app=express();
var answer=require('../models/answer');

const postanswer=app.post('/postanswer/:questionid',authenticate,(req,res)=>{
    const giveAnswer= async ()=>{
        const user_id=req.user;
        const question_id=req.params.questionid;
        const answered=req.body.answer;
        const a1=new answer({question_id:question_id,user_id:user_id,answer:answered})
        const result = await a1.save();
        res.json(result);

    }
    giveAnswer()
});
module.exports=postanswer;