'use strict';
var github = require(process.cwd() + '/app/controllers/github.js'),
    ghAuth = require(process.cwd() + '/app/controllers/ghAuth.js');

module.exports = function(app){
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });
    
    app.route('/')
        .get(function(req, res) {
            console.log(process.cwd());
            res.sendFile(process.cwd() + '/public/index.html');
    });
    
    app.route('/api/github')
        .get(github.getData);
    app.route('/auth/github')
        .get(ghAuth.authenticate);
};
