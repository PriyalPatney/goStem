var express = require("express");
    app = express();
    bodyParser = require("body-parser");
    mongoose = require("mongoose");
    methodOverride  = require("method-override");
    

mongoose.connect("mongodb://localhost:27017/goStem",{ useNewUrlParser: true });
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));



// ROUTES
app.get("/", function(req,res){
    res.render("landing");
})


app.listen(3000, function(){
    console.log("The Server Has Started!!!!");
 });