var mongoose=require('mongoose');

var reportsSchema=mongoose.Schema({user_id:String,region:String,regionId:String,report:String})

var report=mongoose.model('report',reportsSchema);
module.exports=report;