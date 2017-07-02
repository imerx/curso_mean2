//*********  SERVER  HTTP  CODE   **********//

'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// *******  load routes   ***********
//load the route file for the user controller
var user_routes = require('./routes/user');

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json 
app.use(bodyParser.json());

//  ********  load headers  ***********

// routes base
//we load the configured route  on Api 
app.use('/api', user_routes);

 /*   test HTTP server on port
app.get('/pruebas', function(req, res){
res.status(200).send({message: "Bienvenido al curso"});
});  */


module.exports = app;