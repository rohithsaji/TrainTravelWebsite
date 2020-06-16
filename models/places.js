var mongoose=require("mongoose");

var Schema=new mongoose.Schema({
    _id: String,
    name: String,
    rating: Number,
    type: String
});

module.exports=mongoose.model("place",Schema);