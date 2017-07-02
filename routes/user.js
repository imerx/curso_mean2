'use strict' /*

var express = require('express');
//load the user controller located in folder controllers
var UserController = require('../controllers/user');

//load expres router
var api = express.Router();

//create a route
api.get('/probando-controlador', UserController.pruebas);
//api.post('/register', UserController.saveUser);
//exports  api to be used  outside of this file
module.exports = api;




