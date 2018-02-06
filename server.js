
var express = require('express');
 
var server = express();
var sassMiddleware = require("node-sass");

server.use(express.static(__dirname + '/public'));
 
var port = 10001;
server.listen(port, function() {
    console.log('server listening on port ' + port);
});