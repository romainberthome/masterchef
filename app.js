var express = require("express"),
    app     = express(),
    mongoose = require("mongoose"),
    bodyParser = require("body-parser"),
    passport = require("passport"),
    LocalStrategy = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose"),
    methodOverride = require("method-override");

var User = require("./models/user");


var url = process.env.DATABASEURL || "mongodb://localhost/masterchef" ; 
mongoose.connect(url);

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(require("express-session")({
    secret:"Once qgin rusty is cute",
    resave: false,
    saveUninitialized: false
}));
app.use(methodOverride("_method"));

app.locals.moment = require('moment');

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server Started");
});