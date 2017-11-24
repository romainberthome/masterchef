var mongoose = require("mongoose");
    
var ReceipeSchema = new mongoose.Schema({
    title: String,
    picture: String,
    quantity: String,
    ingredients:[String],
    stores:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Stores"
        }
    ],
    steps:{
        one:{
            picture: String,
            title: String
        },
        two:{
            picture: String,
            title: String
        },
        three:{
            picture: String,
            title: String
        },
        four:{
            picture: String,
            title: String
        },
        five:{
            picture: String,
            title: String
        },
        six:{
            picture: String,
            title: String
        },
        seven:{
            picture: String,
            title: String
        },
        height:{
            picture: String,
            title: String
        },
        nine:{
            picture: String,
            title: String
        },
        ten:{
            picture: String,
            title: String
        },
        eleven:{
            picture: String,
            title: String
        },
         twelve:{
            picture: String,
            title: String
        },
        thirteen:{
            picture: String,
            title: String
        },
        fourteen:{
            picture: String,
            title: String
        },
        fiveteen:{
            picture: String,
            title: String
        }
    }
});

module.exports = mongoose.model("Receipe", ReceipeSchema);