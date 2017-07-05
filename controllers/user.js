'use strict'
//import module to encrypt passwords
var bcrypt = require('bcrypt-nodejs');
//import model
var User = require('../models/user');

function pruebas(req, res) {
 res.status(200).send({
  message: 'Probando una accion del controllador del Api Rest con Node y mongo'
 });
}

// create a object user   instanced to  model User
function saveUser(req, res) {
 var user = new User();

 // code receive a post params from body 
 var params = req.body;

 console.log(params);

 //save params in variables, encrypt password
 user.name = params.name;
 user.surname = params.surname;
 user.email = params.email;
 user.role = 'ROLE_ADMIN';
 user.image = 'null';

	 if (params.password) {
	  //encrypt password and save
	  bcrypt.hash(params.password, null, null, function(err, hash) {
	   user.password = hash;

	   if (user.name != null && user.surname != null && user.email != null) {
	    // save user, made password validation
	    user.save((err, userStored) => {
	     if (err) {
	      res.status(500).send({
	       message: 'Error al guardar ususario'
	      });
	     } else {
	      if (!userStored) {
	       res.status(404).send({
	        message: 'No se ha registrado ususario'
	       })
	      } else {
	       res.status(200).send({
	        user: userStored
	       });
	      }

	    }

	    });
	   } else {
	    res.status(200).send({
	     message: 'Rellena todos los campos'
	    });
	   }
	  });
	 } else {
	  res.status(200).send({
	   message: 'Introduce la contrasena'
	  });
	 }

}

//export  code 
module.exports = {
 pruebas,
 saveUser
};