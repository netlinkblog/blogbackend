const mongoose=require('mongoose');
const connection=mongoose.connect('mongodb://localhost:27017/lumenoreBlogs').then(()=>{
    console.log('connection created succesfully')
}).catch((err)=>{console.log(err)})

module.exports=connection;