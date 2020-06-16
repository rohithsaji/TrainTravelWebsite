var express=require("express");
var router=express.Router();
var User=require("../models/user");
var passport=require("passport");


router.get("/logout",function(req,res){
    if(req.isAuthenticated()){
        req.logOut();
        req.flash("success","You have logged Out");
        res.redirect("/trains");
    }
    else{
        req.flash("error","No user is Logged In");
        res.redirect("/trains");
    }
});
router.get("/login",function(req,res){
    res.render("auth/login.ejs");
});

router.get("/register",function(req,res){
    res.render("auth/register.ejs");
});
router.post("/register",function(req,res){
    User.register(new User({username:req.body.username}),req.body.password,function(err,user){
        if(err)
        {
            console.log(err);
            req.flash("error",err.message);
            return res.redirect("/register");
        }
        passport.authenticate("local")(req,res,function(){
            req.flash("success","Welcome "+user.username);
            res.redirect("/trains");
        });
    });
});

router.post("/login",passport.authenticate("local",{
    successRedirect:"/trains",
    failureRedirect:"/login"
}),function(){});

module.exports=router;
