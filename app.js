const express = require("express");
const app = express();

// "/" => "Hi There!!" route
app.get("/", function(req, res){
    res.send("Hi There!!");
});

// "/bye" => "Goodbye!!"
app.get("/bye", function(req, res){
    res.send("Goodbye!!");
});

// "/dog" => "MEOW!!"
app.get("/dog", function(req, res){
    res.send("MEOW!!");
});

//Route paramater implementation
app.get("/e/:subfile", function(req, res){
    let sub = req.params.subfile;
    res.send("Welcome to the " + sub + " page!!!");
});

// "*" => "YOU ARE A STAR" catchall/fallback route matcher
app.get("*", function(req, res){
    res.send("Not that way...hurry up and go back!!");
});

// Tell Express to listen for requests (starts the server)
app.listen(3000, function(){
    console.log("Server has started!!!");
});