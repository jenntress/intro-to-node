//console.log("YOU GOT IT TO WORK JENN!!"); //always test to make sure files are set up correctly


var express = require('express');
var app = express();

app.get('/greeting', function(req, res){  //the /greeting is the "URL end point"
  res.send("You foudn the greeting endpoint!")
});

console.log(express);





// configure our server - spin up a little web server on our local computer
var server = app.listen(3000, function(){
  console.log("App up on port 3000") // console log to tell me what port it's running on
});


//made two new endpoints... one that sends a happy and one that sends a sad

app.get('/happy', function(req, res){
  res.send("Bleep bloop boop bleep boop")
});

app.get('/sad', function(req, res){
  res.send("Wha whaaaa")
});
