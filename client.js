#!/usr/bin/env node

var fs = require('fs');
var net = require('net');

fs.readFile(__dirname + '/client-conf.json', function (err, data) {
	if (err) {
		console.log('Cannot read config file');
		process.exit(1);
	}

	var config = JSON.parse(data);

	var urls = process.argv.splice(2);
	if (urls.length === 0) {
		process.exit();
	}

	var client = net.connect({ port: config.port, host: config.host }, function() {
		urls.forEach(function(arg) {
			client.write(arg + "\n");
		});
		client.end();
	});
	client.on('error', function(err) {
		console.log(err);
	});

});
