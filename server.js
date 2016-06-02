'use strict';

var express = require('express');
var routes = require('./app/routes/index.js');
var mongoose = require('mongoose');
var passport = require('passport');
var session = require('express-session');
var fs=require('fs');

var app = express();
app.get('/api/whoami',function(req,res){
	fs.writeFile('log.txt',req,function(err){
		if(err) throw err;

	});
	var object={};
	var ips=req.ip.split(':');
	object['ipaddress']=ips[ips.length-1];
	object['language']=req.headers['accept-language'].split(',')[0];
	object['software']=req.headers['user-agent'].split('(')[1].split(')')[0];
	//console.log(req.headers);
	res.end(JSON.stringify(object));
});


var port = process.env.PORT || 8080;
app.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
});