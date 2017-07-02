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
