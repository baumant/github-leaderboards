'use strict';

var express = require('express'),
    routes = require("./app/routes/index.js");

require('dotenv').config({silent: true});

var app = express();

app.use('/public', express.static(__dirname + '/public'));
app.use('/controllers', express.static(__dirname + 'app/controllers'));
    
routes(app);
    
var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log('Node.js listening on port ' + port + '...');
});



