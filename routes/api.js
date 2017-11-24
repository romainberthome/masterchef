var express = require("express"),
    router = express.Router(),
    mongooseQuerryRandom = require('mongoose-query-random'),
    CronJob = require('cron').CronJob,
    Receipe = require("../models/receipe");
    

router.get('/api/receipes', function(req, res){
    Receipe.find({}, function(err, allReceipes){
        if(err){
            console.log(err);
        }else{
            res.send(allReceipes);
        }
    })
});

router.get('/api/dates', function(req, res){
    Receipe.find().random(3, true, function(err, receipes){
        if(err){
            console.log(err);
        }else{
            res.send(receipes);
        }
    })
});
   
module.exports = router;