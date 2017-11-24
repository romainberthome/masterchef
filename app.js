var express = require("express"),
    app     = express(),
    mongoose = require("mongoose"),
    bodyParser = require("body-parser"),
    passport = require("passport"),
    LocalStrategy = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose"),
    mongooseQuerryRandom = require('mongoose-query-random'),
    CronJob = require('cron').CronJob,
    methodOverride = require("method-override");

var receipeRoutes = require("./routes/receipe"),
    apiRoutes = require('./routes/api');

var User = require("./models/user"),
    Receipe = require("./models/receipe");


var url = process.env.DATABASEURL || "mongodb://localhost/masterchef" ; 
mongoose.connect(url);

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.set("view engine", "ejs");


app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.get('/', function(req, res){
    res.render('backend/home');
});




app.use("/",receipeRoutes);
app.use('/',apiRoutes);

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server Started");
});