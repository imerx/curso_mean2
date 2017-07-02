'use strict' /*

//import module to encrypt passwords
//var bcrypt = require('bcrypt-nodejs');
//import model
//var User = require('../models/user');

	function pruebas(req, res) {
	    res.status(200).send({
		   message: 'Probando una accion del controllador del Api Rest con Node y mongo'
	    });

} 
// create a object user   instanced to  model User
function saveUser(req, res){
   var user = new User();

// code receive a post params from body 
    var params = req.body;

     console.log(params);

	//save params in variables
	user.name = params.name;
	user.surname = params.surname;
	user.email = params.email;
	user.role = 'ROLE_USER';
	user.image = 'null';

	if (params.password){
		//encrypt password
	    }else{
         res.status(500).send({message: 'Introduce la contrasena'});
	}

}

//export  code 
module.exports = {
	pruebas
	//saveUser
}  