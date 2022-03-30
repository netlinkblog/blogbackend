var express=require('express')
var app=express();
var {body,validationResult}=require('express-validator');
var mongoose=require('mongoose');
var bycrypt=require('bcryptjs');
var Users = require('../models/model');
var nodeMailer=require('nodemailer');
app.use(express.json())
const creatinguser=app.post('/createuser',body('name').isLength({min:3})
,body('email').isEmail(),
body('password').isLength({min:5})
,(req,res)=>{
          const err=validationResult(req)
          if(!err.isEmpty()){res.sendStatus(400).json({err:err.array()})}
          const createUser=async ()=>{
              try{
                  const name=req.body.name;
                  const email=req.body.email;
              //   const isExists= await Users.find({email:email})
              //    if(isExists){res.sendStatus(400).res.json({message:"email already exists"})}
               

                      const salt= await bycrypt.genSalt(10);
                      const hashedPass= await bycrypt.hash(req.body.password ,salt)
                      const u1= await new Users({name:name,email:email,password:hashedPass});
                      const result = await u1.save();
                      if(!result){res.json({message:"some technical issue"})}
                      res.json(result);
                  
              }
              catch(err){res.json(err)}
          }
          createUser();
})
module.exports=creatinguser;