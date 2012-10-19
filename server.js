#!/usr/bin/env node

process.title = 'node-url-bridge';

var fs    = require('fs');
var net   = require('net');
var os    = require('os');
var spawn = require('child_process').spawn;

fs.readFile(__dirname + '/server-conf.json', function (err, data) {
	if (err) {
		console.log('Cannot read config file');
		process.exit(1);
	}

	var config = JSON.parse(data);

	var server = net.createServer(function(socket) {
		socket.on('data', function(data) {
			var url = data.toString()
				.replace(/[\s\r\n]+$/, '')
				.replace('&amp;', '&');
			if (url.indexOf('http') === 0) {
				var app = 'xdg-open';
				if (os.platform === 'win32') {
					app = 'explorer.exe';
				}
				else if (os.platform === 'darwin') {
					app = 'open';
				}
				spawn(app, [ url ]);
			}
		});
	});
	server.listen(config.listen);

});

