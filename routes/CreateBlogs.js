var express=require('express');
var app=express();
var Blog=require('../models/Blogs');
const authenticate=require('../authentication/auth');

const createBlogs=app.post('/postblog',authenticate,(req,res)=>{
    const postblog = async ()=>{
        const user=req.user;
        const title=req.body.title;
        const description=req.body.description;
        const tags=req.body.tags;
        const b1= new Blog({user_id:user,title:title,description:description,tags:tags});
        const result = await b1.save();
        res.json(result);
    }
    postblog();
})

module.exports=createBlogs;