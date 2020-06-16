var mongoose=require("mongoose");

var Schema=new mongoose.Schema({
    train_name:String,
    fair: Number,
    From: String,
    To: String,
    startTime:String,
    endTime:String
});

module.exports=mongoose.model("trainDetail",Schema);