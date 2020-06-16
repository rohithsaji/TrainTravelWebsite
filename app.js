var express=require("express");
var app=express();

var bodyParser=require("body-parser");
var mongoose=require("mongoose");
var passport=require("passport");
var flash=require("connect-flash");
var passportlocal=require("passport-local");


User=require("./models/user")
seedDB=require("./models/seed");


var trainRoute=require("./routes/trains");
var authRoute=require("./routes/index");


app.use(flash());
mongoose.connect("mongodb://localhost:27017/trainTravel",{ useNewUrlParser: true,useUnifiedTopology: true });
app.use(bodyParser.urlencoded({extended: true}));
app.use(require("express-session")({
    secret:"hadi akshara ayman neha",
    resave: false,
    saveUninitialized:false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
passport.use(new passportlocal(User.authenticate()));
app.use(function(req,res,next){
    res.locals.currentUser=req.user;
    res.locals.error=req.flash("error");
    res.locals.success=req.flash("success");
    next();
});
app.use( express.static( "public" ) );

seedDB();


app.use(trainRoute);
app.use(authRoute);




app.get("/",function(req,res){
    res.redirect("/trains");
});
app.get("*",function(req,res){
    res.redirect("/trains");
});


//user.....................

app.listen(3000,function(){
    console.log("server starting!!!!");
});