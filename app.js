/*eslint-env node, express*/

//------------------------------------------------------------------------------
// node.js starter application for Bluemix
//------------------------------------------------------------------------------

// This application uses express as its web server
// for more info, see: http://expressjs.com
var express = require("express");

// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
var cfenv = require("cfenv");

// create a new express server
var app = express();
	
//add http&socket module
var http = require("http").Server(app);	
var io = require("socket.io")(http);	
	
// serve the files out of ./public as our main files
app.use(express.static(__dirname + "/public"));

/*app.get("/catch", function (req, res) {
	console.log("go in router \"/catch\" function");
	
	if(req.query.val === "w"){
		res.end("pressed w");
	}
	if(req.query.val === "s"){
		res.end("pressed s");
	}
	if(req.query.val === "a"){
		res.end("pressed a");
	}
	if(req.query.val === "d"){
		res.end("pressed d");
	}
});*/
io.on("connection",function(socket){
	/*
	if(socket.id){
		console.log('Socket Id is:' + socket.id);
	}else{
		console.log('no socketID');
	}
	*/
	socket.on("String",function(key){
		if(key === "w"){
			console.log("Received \"w\" from frontend");
			io.sockets.emit("message", key);
		}
		if(key === "s"){
			console.log("Received \"s\" from frontend");
			io.sockets.emit("message", key);
		}
		if(key === "a"){
			console.log("Received \"a\" from frontend");
			io.sockets.emit("message", key);
		}
		if(key === "d"){
			console.log("Received \"d\" from frontend");
			io.sockets.emit("message", key);
		}
	});
			
});

// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();
//http.listen(appEnv.port);
// start server on the specified port and binding host
/*app.listen(appEnv.port, "0.0.0.0", function() {
  // print a message when the server starts listening
  console.log("server starting on " + appEnv.url);
});*/
http.listen(appEnv.port, "0.0.0.0", function() {
  // print a message when the server starts listening
  console.log("server starting on " + appEnv.url + " " + appEnv.port);
});