const express=require('express');
const app=express();
app.use(express.json());
const jwt=require('jsonwebtoken');
const User=require('../models/model');

const authenticate=(req,res,next)=>{
        try {
            const token=req.header('token');
            if(!token){res.json({message:"user is not logged in"})};
            const isValid=jwt.verify(token,'thesecretishere');
            if(!isValid){res.json({loggedin:false,message:"token not valid"})}
             req.user=isValid.id;
            next();
        } catch (error) {
            res.json(error)
        }
    }

module.exports=authenticate;