'use strict'
//import module to encrypt passwords
var bcrypt = require('bcrypt-nodejs');
//import model
var User = require('../models/user');
// call  service created
var jwt = require('../services/jwt');

function pruebas(req, res) {
 res.status(200).send({
  message: 'Probando una accion del controllador del Api Rest con Node y mongo'
 });
}
/*
create a object user   instanced to  model User, receive params from post  action,
use bcrypt to encrypt password, create data validations
*/
     
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
				      res.status(500).send({ message: 'Error al guardar ususario' });
				    } else {
				        if (!userStored) {
				         res.status(404).send({  message: 'No se ha registrado ususario' })
				        } else {
				          res.status(200).send({ user: userStored });
			            }
			        }

			    });
		    } else {
		       res.status(200).send({  message: 'Rellena todos los campos' });
		    }
		    });
	 } else {
		res.status(200).send({ message: 'Introduce la contrasena'  });
	 }
}
//End user object code

//login 

function loginUser(req, res){
	var params = req.body;

	var email = params.email;
	var password = params.password;
    //model User
	User.findOne({email: email.toLowerCase()},(err, user) => {
		if (err){
			res.status(500).send({message: 'Error en la peticion'});
		}else{
			if(!user){
				res.status(404).send({message: 'El ususario no existe'});
			}else{
				//compare  password sending from post  &&   password save in the Object User from db.
				bcrypt.compare( password, user.password, function(err, check){
					if (check){
						//if data is correct, return logged user
						if (params.gethash){
							//devolver un token de jwt
							res.status(200).send({
								//we use the service created
							    token:	jwt.createToken(user)												
							});
						}else{
							res.status(200).send(user);
						}
					}else{
						res.status(404).send({message: 'Email o Password incorrecto :)'});
					}

				});
			}
		}
	});

};

//Export code to be uset outside of this scope. 
module.exports = {
 pruebas,
 saveUser,
 loginUser
};