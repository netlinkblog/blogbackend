var mongoose=require('mongoose');

var commentSchema=mongoose.Schema({
      user_id:{type:String,required:true},
      blog_id:{type:String,required:true},
      comment:{type:String,required:true},

});
var comment=mongoose.model('comment',commentSchema);
module.exports=comment;