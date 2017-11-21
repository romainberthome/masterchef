var mongoose = require("mongoose"),
    passportLocalMongoose = require("passport-local-mongoose");
    
var StoreSchema = new mongoose.Schema({
    name: String,
    idstore: String
});

StoreSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("Store", StoreSchema);