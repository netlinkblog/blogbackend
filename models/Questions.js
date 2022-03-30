var mongoose=require('mongoose');


var questionSchema=mongoose.Schema({user_id:String,question:String});
var question=mongoose.model('question',questionSchema)

module.exports=question;