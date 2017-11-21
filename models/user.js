var mongoose = require("mongoose"),
    passportLocalMongoose = require("passport-local-mongoose");
    
var UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    image: String,
    favoritereceipe:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Receipe"
        }
    ]
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);