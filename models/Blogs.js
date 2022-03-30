var mongoose=require('mongoose');

var BlogSchema=mongoose.Schema({
    user_id:{type:String,required:true},
    title:{type:String, required:true},
    description:{type:String,required:true},
    tags:{type:Array}
})
var Blog=mongoose.model('Blog',BlogSchema);

module.exports=Blog;