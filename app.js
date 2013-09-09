// Copyright (c) 2013 Tom Steele
// See the file license.txt for copying permission
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server, {log: false});

app.configure(function() {
  app.use(express.logger());
  app.use(express.static(__dirname + '/public'));
});

app.get('*', function(req, res) {
  res.sendfile(__dirname + '/index.html');
});

server.listen(80);
io.sockets.on('connection', sockOps);
function sockOps(socket) {
  socket.on('data', function(data) {
    console.log('Captured string: ' + data.data);
  });
}
