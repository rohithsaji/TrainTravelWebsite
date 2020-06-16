var express=require("express");
var router=express.Router();
var bookingDetails=require("../models/bookingDetails");
var trains=require("../models/trains");
var stations=require("../models/stations");
var trainDetails=require("../models/trainDetails");
var placeDetails=require("../models/places");


var methodoverride=require("method-override");
var middleware=require("../middleware");
var bodyParser=require("body-parser");


router.use(bodyParser.urlencoded({extended: true}));




router.use(methodoverride("_method"));




router.get("/trains",function(req,res){
    res.render("trains/trains.ejs");
});
router.get("/tickets/new",middleware.isLoggedIn,function(req,res){
    stations.find({},function(er,station){
        if(er){
            console.log(er);
        }
        else{  
            res.render("trains/addnew.ejs",{station:station, dateToday: formatDate(Date())});
        }
    });
    
});
router.get("/foundtrains",middleware.isLoggedIn,function(req,res){
    var data={
        To  :req.query.toStation,
        From:req.query.fromStation,
        Date:req.query.tdate,
    }
    stations.findOne({name:data.To},function(er,toStation){
        stations.findOne({name:data.From},function(er,fromStation){
            var From=fromStation,To=toStation;
            trains.find({"stops.id":{$all:[From._id,To._id]}}).populate("stops.id").exec(function(er,Found){
                // console.log(From._id);
                for(var i=0;i<Found.length;){
                    console.log(findLocation(Found[i].stops,From._id),findLocation(Found[i].stops,To._id));
                    if(findLocation(Found[i].stops,From._id)>findLocation(Found[i].stops,To._id)){
                        // console.log("deleted",Found[i]);
                        Found.splice(i,1);
                    }
                    else{
                        i++;
                    }
                }
                // console.log("added"+Found);
                res.render("trains/foundtrains.ejs",{found:Found,data:data});
            });
        });
   }); 
});

router.get("/othertrains",middleware.isLoggedIn,function(req,res){
    var TRAINS=[],count=0;
    var data={
        To  :req.query.to,
        From:req.query.from,
        Date:req.query.Date,
    }
    stations.findOne({name:data.To},function(er,to){
        stations.findOne({name:data.From},function(er,from){
            trains.find({"stops.id":{$in:[to._id,from._id]}}).populate("stops.id").exec(function(er,Found){
               console.log("indrectt"+Found.length);

                for(var i=0;i<Found.length;)
                {
                    if(count>=8){
                        break;
                    }
                    // console.log("1");
                    if(findLocation(Found[i].stops,to._id)!=-1 && findLocation(Found[i].stops,from._id)!=-1){
                        Found.splice(i,1);
                    }
                    else{
                        i++;
                    }
                }
                var locationi;
                // console.log("after"+Found);
                for(var i=0;i<Found.length;i++){
                    // console.log("2");
                    locationi=findLocation(Found[i].stops,from._id);
                    console.log("putting inside"+locationi);
                    if(locationi==-1){
                        continue;
                    }
                    else{
                        for(var j=locationi+1;j<Found[i].stops.length;j++){
                            for(var k=0;k<Found.length;k++)
                            {
                                if(k==i){
                                    continue;
                                }
                                else{
                                    if(count>=8){
                                        break;
                                    }
                                    var STOPS=findByorder(Found[k].stops,Found[i].stops[j].id._id,to._id);
                                    if(STOPS){
                                        count++;
                                        // console.log("putting inside");
                                        TRAINS.push({
                                                train1: Found[i].name,
                                                id1: Found[i]._id,
                                                id2: Found[k]._id,
                                                train2: Found[k].name,
                                                stops1: j-locationi,
                                                stops2: STOPS,
                                                from:  data.From,
                                                middle:    Found[i].stops[j].id.name,
                                                to:data.To,
                                                stime1:Found[i].stops[locationi].time,
                                                etime1:Found[i].stops[j].time,
                                                stime2:Found[k].stops[findLocation(Found[k].stops,Found[i].stops[j].id._id)].time,
                                                etime2:Found[k].stops[findLocation(Found[k].stops,to._id)].time,
                                                places:Found[i].stops[j].id._id,
                                            });
                                    }
                                }
                            }
                            if(count>=8){
                                break;
                            }
                        }
                    }
                    if(count>=8){
                        break;
                    }
                }
                // console.log("i am outside"+TRAINS.length);
                var k=0;
                if(TRAINS.length==0)
                {
                    res.render("trains/othertrains.ejs",{TRAINS:TRAINS,data:data});
                }
                TRAINS.forEach(function(train){
                // console.log("i am outside");
                stations.findById(train.places).populate("places").exec(function(er,middleFound){                    

                    train.Places=middleFound.places;
                    // console.log("puting in");
                    if(k==TRAINS.length-1){
                        // console.log("okkkkkkkkkkk"+TRAINS[0].Places);
                        res.render("trains/othertrains.ejs",{TRAINS:TRAINS,data:data});
                    }
                    k++;
                });
               });
            });
        });
    });
});
router.get("/mytickets",middleware.isLoggedIn,function(req,res){
    bookingDetails.find({"user":{"id":req.user._id}}).populate("trainDetails").exec(function(er,foundTicket){
        if(er){
            console.log(er);
        }
        else{
            res.render("trains/mytickets.ejs",{ticket:foundTicket});
        }
    });

});

router.post("/foundtrains",middleware.isLoggedIn,function(req,res){
    var name=req.body.name,age=req.body.age,noofp=req.body.noOfP ,sex=req.body.sex,Class=req.body.Class,To=req.body.To,From=req.body.From,trainName=req.body.trainName,fair=req.body.Fair,date=req.body.Date,stime=req.body.starttime,etime=req.body.endtime;

    var traindetails={train_name:trainName, fair:fair, From:From,To:To,startTime:stime, endTime:etime};
    var bookingdetails={name:name, date:date,age:age, sex:sex, noOfPassengers:noofp,class:Class,user:{id:req.user._id}};
    bookingDetails.create(bookingdetails,function(er,newBD){
        if(er){
            console.log("Error cannot be added");
        }
        else{
            trainDetails.create(traindetails,function(error,newTD){
                if(error){
                    console.log(error);
                }
                else{
                    newBD.trainDetails.push(newTD);
                    bookingDetails.create(newBD,function(err,newestBD){
                        if(err){
                            console.log(err);
                        }
                        else{
                            console.log(newestBD);
                            req.flash("success","Ticket has been Booked");
                            res.redirect("/mytickets");
                        }
                    });
                }
            });
        }
    });
});

router.post("/othertrains",middleware.isLoggedIn,function(req,res){
    var count=0
    var name=req.body.name,age=req.body.age,noofp=req.body.noOfP ,sex=req.body.sex,Class=req.body.Class,fair=req.body.Fair,date=req.body.Date;
    var traindetails=[{
        train_name:req.body.trainname1, fair:req.body.fair1, From:req.body.from1,To:req.body.middle,startTime:req.body.starttime1, endTime:req.body.endtime1},
        {train_name:req.body.trainname2, fair:req.body.fair2, From:req.body.middle,To:req.body.to2,startTime:req.body.starttime2, endTime:req.body.endtime2}
    ];
    var bookingdetails={name:name, date:date,age:age, sex:sex, noOfPassengers:noofp,class:Class,user:{id:req.user._id}};
    bookingDetails.create(bookingdetails,function(er,newBD){
        if(er){
            console.log("Error cannot be added");
        }
        else{
            traindetails.forEach(function(traindetail){
                trainDetails.create(traindetail,function(error,newTD){
                    if(error){
                        console.log(error);
                    }
                    else{
                        newBD.trainDetails.push(newTD);
                        count++;
                        if(count==2){
                            bookingDetails.create(newBD,function(err,newestBD){
                                if(err){
                                    console.log(err);
                                }
                                else{
                                    console.log(newestBD);
                                    req.flash("success","Ticket has been Booked");
                                    res.redirect("/mytickets");
                                }
                            });
                        }
                    }
                });
            });
        }
    });
});

router.delete("/mytickets/:id",middleware.checkTicketOwnership,function(req,res){
    var ID=req.params.id;
    bookingDetails.findOneAndDelete(ID,function(er){
        if(er)
        {
            console.log(er);
            res.redirect("/mytickets");
        }
        else{
            req.flash("error","Ticket has been deleted");
            res.redirect("/mytickets");
        }
    });
});

 
function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}

var findLocation=function(a,b){
    for(var i=0;i<a.length;i++){
        if(a[i].id._id==b)
            return i;
    }
    return -1;
}
var findLocationFrom=function(a,k,b){
    for(var i=k;i<a.length;i++){
        if(a[i].id._id==b)
            return i;
    }
    return -1;
}
var findByorder=function(a,b,c){
    for(var i=0;i<a.length;i++){
        if(a[i].id._id==b){
            if(findLocationFrom(a,i+1,c)==-1){
                return 0;
            }
            else{
                return findLocationFrom(a,i+1,c)-i;
            }
        } 
    }
    return 0;
}


module.exports=router;


