var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    mongoose        = require("mongoose"),
    methodOverride  = require("method-override")

    
// app config
mongoose.connect("mongodb://localhost:27017/goStem",{ useNewUrlParser: true });
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));

// Schema Sutup
var formInputsSchema = new mongoose.Schema({
    name: String,
    email: String
});

var formInput = mongoose.model("formInput", formInputsSchema);

// data tester

// formInput.create({
//     name: "demo1",
//     email:"demo.com"
// }, function(err, inputs){
//     if(err){
//         console.log(err);
//     }
//     else {
//         console.log(inputs);
//     }
// });

// ROUTES
app.get("/", function(req,res){
    res.render("landing");
});

app.get("/new", function(req,res){
    res.render("new");
});

app.get("/entries", function(req,res){
    formInput.find({}, function(err, inputs){
        if(err){
            console.log(err);
        }
        else{
            console.log(inputs);
            res.render("entries", {inputs: inputs});
        }
    });
});

app.post("/entries", function(req,res){
    var name = req.body.name;
    var email = req.body.email;
    var newEntrie = {name: name, email:email};
    formInput.create(newEntrie, function(err, inputs){
        if(err){
            console.log(err);
        }
        else{
            res.redirect("/entries");
        }
    });
});


app.listen(3000, function(){
    console.log("The Server Has Started!!!!");
 });