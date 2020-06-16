var mongoose=require("mongoose");

var Schema=new mongoose.Schema({
    _id: String,
    name: String,
    places:[{
        type:String,
        ref:"place"
    }],
});

module.exports=mongoose.model("station",Schema);