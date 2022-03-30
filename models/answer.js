var mongoose=require('mongoose');
var answerSchema=mongoose.Schema({question_id:{type:String,required:true},
    user_id:{type:String,required:true},
    answer:{type:String,required:true}
});
var answer=mongoose.model('answer',answerSchema);
module.exports=answer;