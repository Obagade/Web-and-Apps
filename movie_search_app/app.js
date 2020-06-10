var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");

app.get("/results", function(req, res){
    res.send("Hello it works");
});
app.get("/", function(req, res){
    res.render("search"); 
}); 

app.listen(3000, function(){
    var query = req.query.search;
    var url = "http://http://www.omdbapi.com/?apikey=[yourkey]&"
    request(url, function(error, response, body){
        console.log("started");
        if(!error && response.statusCode == 200) {
            var data = JSON.parse(body)
            res.render("results", {data: data});
        }

    });


});