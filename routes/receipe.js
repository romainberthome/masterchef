var express = require("express"),
    router = express.Router(),
    Receipe = require("../models/receipe");

router.get('/receipe', function(req, res){
    Receipe.find({}, function(err, receipes){
        if(err){
            console.log(err);
        }else{
            res.render('backend/receipe/index', {receipes: receipes});
        }
    })
});

router.post('/receipe', function(req, res){
    var title = req.body.title;
    var picture = req.body.picture;
    var quantity = req.body.quantity;
    var ingredients = [req.body.ingredients];
    var steps =  req.body.steps;
    var newReceipe = {title: title, picture: picture, quantity: quantity, ingredients: ingredients, steps: steps};
    Receipe.create(newReceipe, function(err, createdReceipe){
        if(err){
            console.log(err);
        }else{
            res.redirect('/receipe');
        }
    })
});

router.get('/receipe/new', function(req, res){
    res.render('backend/receipe/new');
});

router.get("/receipe/:id", function(req, res) {
    Receipe.findById(req.params.id, function(err, foundReceipe){
        if(err){
            console.log(err);
        }else{
            Receipe.find({}, function(err, allReceipes){
                if(err){
                    console.log(err);
                }else{
                    res.render("backend/receipe/show", {receipes:foundReceipe, allreceipes:allReceipes});
                }
            });
        }
    });
});

router.get("/receipe/:id/edit", function(req, res) {
    Receipe.findById(req.params.id, function(err, foundReceipe){
        if(err){
            console.log(err);
        }else{
            res.render("backend/receipe/edit", {receipes:foundReceipe});
        }
    })
});

router.put("/receipe/:id", function(req, res){
    var title = req.body.title;
    var picture = req.body.picture;
    var quantity = req.body.quantity;
    var ingredients = [req.body.ingredients];
    var steps =  req.body.steps;
    var receipeUpdate = {title: title, picture: picture, quantity: quantity, ingredients: ingredients, steps: steps};
    Receipe.findByIdAndUpdate(req.params.id, receipeUpdate, function(err, updatedReceipe){
        if(err){
            console.log(err);
        }else{
            res.redirect("/receipe/"+ req.params.id);
        }
    })
});

router.delete("/receipe/:id", function(req, res){
    Receipe.findByIdAndRemove(req.params.id, function(err, deletedReceipe){
        if(err){
            res.redirect("/receipe");
        }else{
            res.redirect("/receipe");
        }
    });
});

module.exports = router;
