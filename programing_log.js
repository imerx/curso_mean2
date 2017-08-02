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
//creamos controllers  en folder controller (user.js) //creamos rutas en folder routes  y rutas base

'use strict' 

//import module to encrypt passwords
//var bcrypt = require('bcrypt-nodejs');
//import model
//var User = require('../models/user');
//create and test a controller actionand routes
//create user controller action
//use error.status(200)//todo ha hido correctamente
(400)// un recurso o existe
(500)//error en el servidor
//runing controller,routes,user model and password validation
//crear metodo de login  y crear un token
//crear midleware

//midleware, se ejecuta antes del controlador