//  *****  USER ROUTE   *********
'use strict' 

var express = require('express');
//load the user controller located in folder controllers
var UserController = require('../controllers/user');
//load expres router
var api = express.Router();
// load middleware
var md_auth = require('../middlewares/authenticated');

//create a routes //load in app file

api.get('/probando-controlador',md_auth.ensureAuth, UserController.pruebas);
api.post('/register', UserController.saveUser);
api.post('/login', UserController.loginUser);

//exports  api to be used  outside of this file


module.exports = api;




