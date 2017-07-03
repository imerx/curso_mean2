//  *****  USER ROUTE   *********
'use strict' 

var express = require('express');
//load the user controller located in folder controllers
var UserController = require('../controllers/user');
//load expres router
var api = express.Router();


//create a routes //load in app file

api.get('/probando-controlador', UserController.pruebas);
api.post('/register', UserController.saveUser);
//exports  api to be used  outside of this file

//Exports

module.exports = api;




