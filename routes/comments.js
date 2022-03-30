var express=require('express');
const authenticate = require('../authentication/auth');
var app=express();
var comment=require('../models/comment');

const comments=app.post('/comment/:blogid',authenticate,(req,res)=>{
    const docomment= async ()=>{
        try {
            const user_id=req.user;
            const blog_id=req.params.blogid;
            const commented=req.body.comment;
            const c1=new comment({user_id:user_id,blog_id:blog_id,comment:commented});
            const result= await c1.save();
            if(!result){res.json({mesaage:"some error occured"})}
            res.json(result);
        } catch (error) {
            res.json(error)
        }

    }
    docomment();
})
module.exports=comments;