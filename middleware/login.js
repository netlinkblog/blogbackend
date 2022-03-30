const express=require('express');
const app=express();
var bycrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const Users=require('../models/model');
var mongoose=require('mongoose');
app.use(express.json());

const login=app.post('/login',(req,res)=>{
    const getLogin= async ()=>{
             
            try {  
                    const username=req.body.username;
                    const password=req.body.password;
                    const result=await Users.findOne({email:username});
                    if(!result){res.sendStatus(400).res.json({message:"email does not found"})}
                    const compare= await bycrypt.compare(password,result.password);
                    if(!compare){res.json({message:"login with correct credital"})}
                    const token=jwt.sign({id:result._id,username:result.email},'thesecretishere');
                    res.json({message:"login succesful",token:token});
            } catch (error) {
                    res.json(error);
            }
       
        
        
       
    }
 getLogin();

})
module.exports=login;