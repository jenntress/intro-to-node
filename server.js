console.log("YOU GOT IT TO WORK JENN!!"); //always test to make sure files are set up correctly

var http = require('http'); // http is a node module - creates a web server for us.

http.createServer(function(request, response){ // use this method to create a server "function" is something called a callback
response.end('Hello, World!');
 console.log("Your server is running on port 3000");
}).listen(3000);
