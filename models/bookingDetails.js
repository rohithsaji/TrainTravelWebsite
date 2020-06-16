var mongoose=require("mongoose");

var bookingDetailSchema=new mongoose.Schema({
    name: String,
    date: String,
    sex: String,
    age: String,
    noOfPassengers:Number,
    class: String,
    trainDetails:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"trainDetail"
    }],
    user:{
        id:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        },
    }
});

module.exports=mongoose.model("bookingDetail",bookingDetailSchema);