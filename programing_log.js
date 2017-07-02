Mongo DB

Create database 
use curso_mean2;

save collection  to db
db.artists.save ({name: 'Xandria', description: 'Synphonic Metal',image: 'null'});

db.artist.find();

drop collection
db.COLLECTION_NAME.drop()
// creamos un allias en bash  profile  de cygdrive /cygdrive/c/Users/i.desena/Documents/Projects/curso-mean2

//creamos index.js archivo principal
index js

//connectamos mongoose y cargamos librerias  en index.js

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/curso_mean2', (err, res) => {
   if(err){
     throw err;
   }else{
     console.log('La base de datos funciona correctamente...');
   }
});

//creamos fichero app.js
load Express, bodyParser, ficheros de ruta, crear servidor
//creamos los modelos y los esquemas para user, artist, album song con respectivos relaciones


//creamos modelo de la base de datos 
//creamos controllers
//creamos rutas y rutas base

'use strict' 

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