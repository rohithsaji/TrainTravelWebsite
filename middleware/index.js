
var bookingDetails=require("../models/bookingDetails");

var middlewareobj={};



middlewareobj.checkTicketOwnership=function(req,res,next){
    if(req.isAuthenticated()){
        bookingDetails.findById(req.params.id,function(er,found){
            if(er||!found){
                req.flash("error","Ticket not found");                
                res.redirect("/mytickets");
            }
            else{
               if(found.user.id.equals(req.user._id)){
                   next();
               }
                else{
                res.redirect("back");
                }
            }
        });
    }
    else{
        req.flash("error","Please LogIn");
        res.redirect("/login");
    }
}

middlewareobj.isLoggedIn=function(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    req.flash("error","Please LogIn");
    res.redirect("/login");
}

module.exports=middlewareobj;