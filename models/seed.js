var mongoose=require("mongoose");
var bookingdeatils=require("./bookingDetails");
var trainDetails=require("./trainDetails");
var trains=require("./trains");
var stations=require("./stations");
var places=require("./places");

var TRAINS=[{
    "_id": "16516",
    "name": "Mangalore YPR Exp",
    "stops": [
      {
        "id": "1",
        "time": 1130
      },
      {
        "id": "2",
        "time": 1545
      },
      {
        "id": "3",
        "time": 1810
      },
      {
        "id": "4",
        "time": 1940
      },
      {
        "id": "5",
        "time": 2030
      }
    ]
  },{
    "_id": "12615",
    "name": "Grand Trunk Express",
    "stops": [
      {
        "id": "11",
        "time": 1915
      },
      {
        "id": "12",
        "time": 2310
      },
      {
        "id": "13",
        "time": 155
      },
      {
        "id": "14",
        "time": 500
      },
      {
        "id": "15",
        "time": 905
      },
      {
        "id": "16",
        "time": 1225
      },
      {
        "id": "17",
        "time": 1720
      },
      {
        "id": "18",
        "time": 2340
      },
      {
        "id": "19",
        "time": 240
      },
      {
        "id": "20",
        "time": 630
      }
    ]
  },{
    "_id": "22833",
    "name": "Humsafar Express",
    "stops": [
      {
        "id": "13",
        "time": 100
      },
      {
        "id": "21",
        "time": 408
      },
      {
        "id": "10",
        "time": 925
      },
      {
        "id": "22",
        "time": 1045
      },
      {
        "id": "23",
        "time": 1145
      },
      {
        "id": "5",
        "time": 1315
      }
    ]
  },{
    "_id": "12686",
    "name": "Chennai Express",
    "stops": [
      {
        "id": "1",
        "time": 1615
      },
      {
        "id": "6",
        "time": 1820
      },
      {
        "id": "7",
        "time": 1945
      },
      {
        "id": "8",
        "time": 2215
      },
      {
        "id": "9",
        "time": 240
      },
      {
        "id": "10",
        "time": 540
      },
      {
        "id": "11",
        "time": 800
      }
    ]
  },{
    "_id": "16512",
    "name": "BANGALORE EXP",
    "stops": [
      {
        "id": "6",
        "time": 1700
      },
      {
        "id": "1",
        "time": 2055
      },
      {
        "id": "2",
        "time": 125
      },
      {
        "id": "3",
        "time": 420
      },
      {
        "id": "4",
        "time": 550
      },
      {
        "id": "5",
        "time": 640
      }
    ]
  },{
    "_id": "12602",
    "name": "Chennai mail",
    "stops": [
      {
        "id": "1",
        "time": 1325
      },
      {
        "id": "6",
        "time": 1540
      },
      {
        "id": "7",
        "time": 1710
      },
      {
        "id": "8",
        "time": 2015
      },
      {
        "id": "9",
        "time": 20
      },
      {
        "id": "10",
        "time": 315
      },
      {
        "id": "11",
        "time": 540
      }
    ]
  },{
    "_id": "12611",
    "name": "NZM GARIB RATH",
    "stops": [
      {
        "id": "11",
        "time": 605
      },
      {
        "id": "12",
        "time": 940
      },
      {
        "id": "13",
        "time": 1155
      },
      {
        "id": "16",
        "time": 2045
      },
      {
        "id": "18",
        "time": 550
      },
      {
        "id": "19",
        "time": 810
      },
      {
        "id": "20",
        "time": 1040
      }
    ]
  },{
    "_id": "12863",
    "name": "HWH YPR EXPRESS",
    "stops": [
      {
        "id": "13",
        "time": 1640
      },
      {
        "id": "21",
        "time": 1950
      },
      {
        "id": "10",
        "time": 150
      },
      {
        "id": "22",
        "time": 320
      },
      {
        "id": "23",
        "time": 430
      },
      {
        "id": "5",
        "time": 715
      }
    ]
  },{
    "_id": "16687",
    "name": "NAVYUG EXP",
    "stops": [
      {
        "id": "1",
        "time": 1705
      },
      {
        "id": "6",
        "time": 1910
      },
      {
        "id": "7",
        "time": 2030
      },
      {
        "id": "8",
        "time": 2250
      },
      {
        "id": "9",
        "time": 405
      },
      {
        "id": "10",
        "time": 725
      },
      {
        "id": "21",
        "time": 1155
      },
      {
        "id": "12",
        "time": 1330
      },
      {
        "id": "13",
        "time": 1620
      },
      {
        "id": "14",
        "time": 1945
      },
      {
        "id": "15",
        "time": 2347
      },
      {
        "id": "16",
        "time": 255
      },
      {
        "id": "17",
        "time": 730
      },
      {
        "id": "18",
        "time": 1410
      },
      {
        "id": "19",
        "time": 1720
      },
      {
        "id": "20",
        "time": 2330
      }
    ]
  },{
    "_id": "16511",
    "name": "KANNUR EXP",
    "stops": [
      {
        "id": "5",
        "time": 1915
      },
      {
        "id": "3",
        "time": 2100
      },
      {
        "id": "2",
        "time": 20
      },
      {
        "id": "1",
        "time": 655
      },
      {
        "id": "6",
        "time": 1010
      }
    ]
  },{
    "_id": "16575",
    "name": "GOMTESHWARA EXP",
    "stops": [
      {
        "id": "10",
        "time": 310
      },
      {
        "id": "22",
        "time": 430
      },
      {
        "id": "23",
        "time": 530
      },
      {
        "id": "5",
        "time": 710
      },
      {
        "id": "4",
        "time": 739
      },
      {
        "id": "3",
        "time": 845
      },
      {
        "id": "2",
        "time": 1145
      },
      {
        "id": "1",
        "time": 1700
      }
    ]
  },{
    "_id": "12601",
    "name": "MANGALORE MAIL",
    "stops": [
      {
        "id": "11",
        "time": 2020
      },
      {
        "id": "10",
        "time": 2220
      },
      {
        "id": "22",
        "time": 2325
      },
      {
        "id": "9",
        "time": 100
      },
      {
        "id": "8",
        "time": 440
      },
      {
        "id": "7",
        "time": 730
      },
      {
        "id": "6",
        "time": 915
      },
      {
        "id": "1",
        "time": 1225
      }
    ]
  },{
    "_id": "22637",
    "name": "KARNATAKA EXPRESS",
    "stops": [
      {
        "id": "11",
        "time": 1205
      },
      {
        "id": "10",
        "time": 1425
      },
      {
        "id": "22",
        "time": 1540
      },
      {
        "id": "23",
        "time": 1640
      },
      {
        "id": "5",
        "time": 1810
      },
      {
        "id": "4",
        "time": 1900
      },
      {
        "id": "3",
        "time": 2030
      },
      {
        "id": "2",
        "time": 2255
      },
      {
        "id": "1",
        "time": 305
      },
      {
        "id": "6",
        "time": 510
      }
    ]
  },{
    "_id": "22404",
    "name": "NDLS PDY EXP",
    "stops": [
      {
        "id": "20",
        "time": 2345
      },
      {
        "id": "19",
        "time": 215
      },
      {
        "id": "18",
        "time": 555
      },
      {
        "id": "17",
        "time": 1305
      },
      {
        "id": "16",
        "time": 1825
      },
      {
        "id": "15",
        "time": 2145
      },
      {
        "id": "14",
        "time": 220
      },
      {
        "id": "13",
        "time": 640
      },
      {
        "id": "12",
        "time": 815
      },
      {
        "id": "22",
        "time": 1120
      },
      {
        "id": "11",
        "time": 1425
      }
    ]
  },{
    "_id": "12652",
    "name": "T N SMPRK KRNTI",
    "stops": [
      {
        "id": "20",
        "time": 710
      },
      {
        "id": "18",
        "time": 1355
      },
      {
        "id": "16",
        "time": 15
      },
      {
        "id": "14",
        "time": 720
      },
      {
        "id": "13",
        "time": 1025
      },
      {
        "id": "11",
        "time": 1825
      },
      {
        "id": "10",
        "time": 2045
      },
      {
        "id": "9",
        "time": 2345
      }
    ]
  },{
    "_id": "12253",
    "name": "ANGA EXPRESS",
    "stops": [
      {
        "id": "5",
        "time": 1330
      },
      {
        "id": "23",
        "time": 1520
      },
      {
        "id": "22",
        "time": 1620
      },
      {
        "id": "10",
        "time": 1745
      },
      {
        "id": "21",
        "time": 2205
      },
      {
        "id": "12",
        "time": 2330
      },
      {
        "id": "13",
        "time": 240
      }
    ]
  },{
    "_id": "02295",
    "name": "SANGHAMITRA EXP",
    "stops": [
      {
        "id": "5",
        "time": 1000
      },
      {
        "id": "23",
        "time": 1010
      },
      {
        "id": "22",
        "time": 1110
      },
      {
        "id": "21",
        "time": 1808
      },
      {
        "id": "12",
        "time": 1934
      },
      {
        "id": "13",
        "time": 2220
      },
      {
        "id": "14",
        "time": 106
      },
      {
        "id": "15",
        "time": 520
      },
      {
        "id": "16",
        "time": 0830
      },
      {
        "id": "17",
        "time": 1435
      }
    ]
  }];
  

  var STATIONS=[{
    "_id": "1",
    "name": "Mangalore",
    "places": [
      "1001",
      "1002",
      "1003"
    ]
  },{
    "_id": "2",
    "name": "Sakaleshpur",
    "places": [
      "1004",
      "1005",
      "1006"
    ]
  },{
    "_id": "3",
    "name": "B.G.Nagar",
    "places": [
      "1007"
    ]
  },{
    "_id": "4",
    "name": "Nelamangala",
    "places": [
      "1008",
      "1009",
      "1010"
    ]
  },{
    "_id": "5",
    "name": "Yeshwantpur",
    "places": [
      "1011",
      "1012",
      "1013"
    ]
  },{
    "_id": "6",
    "name": "Kannur",
    "places": [
      "1014",
      "1015",
      "1016"
    ]
  },{
    "_id": "7",
    "name": "Kozhikhode",
    "places": [
      "1017",
      "1018",
      "1019"
    ]
  },{
    "_id": "8",
    "name": "Palakkad",
    "places": [
      "1020",
      "1021"
    ]
  },{
    "_id": "9",
    "name": "Salem",
    "places": [
      "1022",
      "1023",
      "1024"
    ]
  },{
    "_id": "10",
    "name": "Katpadi Jn",
    "places": [
      "1025",
      "1026",
      "1027"
    ]
  },{
    "_id": "11",
    "name": "Chennai",
    "places": [
      "1028",
      "1029",
      "1030"
    ]
  },{
    "_id": "12",
    "name": "Ongole",
    "places": [
      "1031",
      "1032"
    ]
  },{
    "_id": "13",
    "name": "Vijayawada",
    "places": [
      "1033",
      "1034",
      "1035"
    ]
  },{
    "_id": "14",
    "name": "Warangal",
    "places": [
      "1036",
      "1037",
      "1038"
    ]
  },{
    "_id": "15",
    "name": "Chandrapur",
    "places": [
      "1039",
      "1040",
      "1041"
    ]
  },{
    "_id": "16",
    "name": "Nagpur",
    "places": [
      "1042",
      "1043",
      "1044"
    ]
  },{
    "_id": "17",
    "name": "Itarsi Jn",
    "places": [
      "1045",
      "1046",
      "1047"
    ]
  },{
    "_id": "18",
    "name": "Jhansi Jn",
    "places": [
      "1048",
      "1049",
      "1050"
    ]
  },{
    "_id": "19",
    "name": "Agra Cantt",
    "places": [
      "1051",
      "1052",
      "1053"
    ]
  },{
    "_id": "20",
    "name": "New Delhi",
    "places": [
      "1054",
      "1055",
      "1056"
    ]
  },{
    "_id": "21",
    "name": "Nellore",
    "places": [
      "1057",
      "1058",
      "1059"
    ]
  },{
    "_id": "22",
    "name": "Jolarpettai",
    "places": [
      "1060",
      "1061"
    ]
  },{
    "_id": "23",
    "name": "Bangarpet",
    "places": [
      "1062",
      "1063"
    ]
  }];
  var PLACES=[{
    "_id": "1001",
    "name": "Cosmo Lodge",
    "rating": 3,
    "type": "Lodge"
  },{
    "_id": "1002",
    "name": "The Steak Palace",
    "rating": 4,
    "type": "Dine-in"
  },{
    "_id": "1003",
    "name": "St.Aloysius Chapel",
    "rating": 4,
    "type": "Religious"
  },{
    "_id": "1004",
    "name": "Hotel Aashritha",
    "rating": 4,
    "type": "Lodge"
  },{
    "_id": "1005",
    "name": "Mythri's Restaurant",
    "rating": 3,
    "type": "Dine-in"
  },{
    "_id": "1006",
    "name": "Shri Sakaleshwara Swamy Temple",
    "rating": 5,
    "type": "Religious"
  },{
    "_id": "1007",
    "name": "Shri Ganesh Lodge",
    "rating": 2,
    "type": "Lodge"
  },{
    "_id": "1008",
    "name": "Snoozotel",
    "rating": 5,
    "type": "Lodge"
  },{
    "_id": "1009",
    "name": "Udupi Grand Veg",
    "rating": 4,
    "type": "Dine-in"
  },{
    "_id": "1010",
    "name": "Nandi Hills",
    "rating": 4,
    "type": "Hill station"
  },{
    "_id": "1011",
    "name": "Veekay Lodge",
    "rating": 3,
    "type": "Lodge"
  },{
    "_id": "1012",
    "name": "Paranda",
    "rating": 3,
    "type": "Dine-in"
  },{
    "_id": "1013",
    "name": "Iskcon Temple",
    "rating": 5,
    "type": "Religious"
  },{
    "_id": "1014",
    "name": "SS Residency",
    "rating": 4,
    "type": "Lodge"
  },{
    "_id": "1015",
    "name": "Quality Inn",
    "rating": 5,
    "type": "Dine-in"
  },{
    "_id": "1016",
    "name": "St.Angelo Fort",
    "rating": 4,
    "type": "Ancient"
  },{
    "_id": "1017",
    "name": "Atlas Inn",
    "rating": 4,
    "type": "Lodge"
  },{
    "_id": "1018",
    "name": "Paragon Restaurant",
    "rating": 4,
    "type": "Dine-in"
  },{
    "_id": "1019",
    "name": "Miskhal Mosque",
    "rating": 3,
    "type": "Religious"
  },{
    "_id": "1020",
    "name": "Royal Inn",
    "rating": 4,
    "type": "Lodge"
  },{
    "_id": "1021",
    "name": "Malabar Restaurant",
    "rating": 4,
    "type": "Dine-in"
  },{
    "_id": "1022",
    "name": "Selva Lodge",
    "rating": 4,
    "type": "Lodge"
  },{
    "_id": "1023",
    "name": "Tandooriwaala",
    "rating": 5,
    "type": "Dine-in"
  },{
    "_id": "1024",
    "name": "Sri Paanduranganathar Temple",
    "rating": 4,
    "type": "Religious"
  },{
    "_id": "1025",
    "name": "Jai Bharat Residency",
    "rating": 4,
    "type": "Lodge"
  },{
    "_id": "1026",
    "name": "Darling Barbecque",
    "rating": 5,
    "type": "Dine-in"
  },{
    "_id": "1027",
    "name": "Fort Vellore",
    "rating": 3,
    "type": "Ancient"
  },{
    "_id": "1028",
    "name": "Horizon Inn",
    "rating": 5,
    "type": "Lodge"
  },{
    "_id": "1029",
    "name": "Murugan Idli Shop",
    "rating": 5,
    "type": "Dine-in"
  },{
    "_id": "1030",
    "name": "Kandhakottam Temple",
    "rating": 4,
    "type": "Religious"
  },{
    "_id": "1031",
    "name": "Mourya Inn",
    "rating": 4,
    "type": "Lodge"
  },{
    "_id": "1032",
    "name": "Venugopal Swamy Temple",
    "rating": 5,
    "type": "Religious"
  },{
    "_id": "1033",
    "name": "Hotel Sri Krishna Residency",
    "rating": 3,
    "type": "Lodge"
  },{
    "_id": "1034",
    "name": "Kanakamahalakshmi Temple",
    "rating": 5,
    "type": "Religious"
  },{
    "_id": "1035",
    "name": "Paradise Biriyani",
    "rating": 5,
    "type": "Dine-in"
  },{
    "_id": "1036",
    "name": "Vijaya Inn",
    "rating": 3,
    "type": "Lodge"
  },{
    "_id": "1037",
    "name": "Zytoon Restaurant",
    "rating": 4,
    "type": "Dine-in"
  },{
    "_id": "1038",
    "name": "Warangal Fort",
    "rating": 5,
    "type": "Ancient"
  },{
    "_id": "1039",
    "name": "Super Lodge",
    "rating": 2,
    "type": "Lodge"
  },{
    "_id": "1040",
    "name": "Saffron Restaurant",
    "rating": 4,
    "type": "Dine-in"
  },{
    "_id": "1041",
    "name": "Shree Mahakali Temple",
    "rating": 5,
    "type": "Religious"
  },{
    "_id": "1042",
    "name": "Sadaf Guest House",
    "rating": 3,
    "type": "Lodge"
  },{
    "_id": "1043",
    "name": "Tuktuk Restaurant",
    "rating": 5,
    "type": "Dine-in"
  },{
    "_id": "1044",
    "name": "Shri Ganesh Mandir Tekdi",
    "rating": 5,
    "type": "Religious"
  },{
    "_id": "1045",
    "name": "Hotel Shri-Nivas",
    "rating": 4,
    "type": "Lodge"
  },{
    "_id": "1046",
    "name": "Kishore Restaurant",
    "rating": 5,
    "type": "Dine-in"
  },{
    "_id": "1047",
    "name": "Hanumaan Mandir",
    "rating": 3,
    "type": "Religious"
  },{
    "_id": "1048",
    "name": "Kamla Guest House",
    "rating": 4,
    "type": "Lodge"
  },{
    "_id": "1049",
    "name": "Lazeez Fine Dining Restaurant",
    "rating": 5,
    "type": "Dine-in"
  },{
    "_id": "1050",
    "name": "Jhansi Fort",
    "rating": 5,
    "type": "Ancient"
  },{
    "_id": "1051",
    "name": "Marc Royal By ASAPIAN Hotels",
    "rating": 5,
    "type": "Lodge"
  },{
    "_id": "1052",
    "name": "Grand Hotel",
    "rating": 4,
    "type": "Dine-in"
  },{
    "_id": "1053",
    "name": "Taj Mahal",
    "rating": 5,
    "type": "Ancient"
  },{
    "_id": "1054",
    "name": "Hotel Stay Inn Dx.",
    "rating": 4,
    "type": "Lodge"
  },{
    "_id": "1055",
    "name": "Raj Bhog",
    "rating": 5,
    "type": "Dine-in"
  },{
    "_id": "1056",
    "name": "Qutib Minar",
    "rating": 5,
    "type": "Ancient"
  },{
    "_id": "1057",
    "name": "Sri Vinayaka Lodge",
    "rating": 2,
    "type": "Lodge"
  },{
    "_id": "1058",
    "name": "Hotel Rayalseema's",
    "rating": 4,
    "type": "Dine-in"
  },{
    "_id": "1059",
    "name": "Sri Thalpagiri Ranganadha Swamy Temple",
    "rating": 4,
    "type": "Religious"
  },{
    "_id": "1060",
    "name": "Dolphin Resort",
    "rating": 5,
    "type": "Lodge"
  },{
    "_id": "1061",
    "name": "Erode Ganapathi Vilas",
    "rating": 3,
    "type": "Dine-in"
  },{
    "_id": "1062",
    "name": "HOTEL SREE SARAVANA BHAVAN",
    "rating": 3,
    "type": "Lodge"
  },{
    "_id": "1063",
    "name": "Lord Someshwara Temple",
    "rating": 4,
    "type": "Religious"
  }];

var seedDB=function(){
    trains.deleteMany({},function(er){
        if(!er){
            console.log("Train is deleted");
            TRAINS.forEach(function(train){
                trains.create(train,function(er){
                    if(er){
                        console.log(er);
                    }
                    else{
                        console.log("Train is loaded");
                    }
                });
            });
        }
    });
    console.log(TRAINS.length+" "+STATIONS.length+" "+PLACES.length);
    
    places.deleteMany({},function(er){
        if(!er){
            console.log("places is deleted");
            PLACES.forEach(function(place){
                places.create(place,function(er){
                    if(er){
                        console.log(er);
                    }
                    else{
                        console.log("places is loaded");
                    }
                });
            });
        }
    });
    

    stations.deleteMany({},function(er){
        if(!er){
            console.log("stations is deleted");
            STATIONS.forEach(function(station){
                stations.create(station,function(er){
                    if(er){
                        console.log(er);
                    }
                    else{
                        console.log("stations is loaded");
                    }
                });
            });
        }
    });
    
}
                                                        

    

module.exports=seedDB;
