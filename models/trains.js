var mongoose=require("mongoose");

var Schema=new mongoose.Schema({
    _id: String,
    name: String,
    stops:[{
        id:{
            type:String,
            ref:"station"
        },
        time:Number
    }],
});

module.exports=mongoose.model("train",Schema);