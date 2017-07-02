 'use strict'
 //loading mongoose
 var mongoose = require('mongoose');
 // loading express app file
 var app = require('./app');
 // port
 var port = process.env.PORT || 8080;


 //code to load a mongodb db
 mongoose.connect('mongodb://localhost:27017/curso_mean2', (err, res) => {
     if (err){
         throw err;
     }else{
         console.log("La conexion a la base de datos funciona correctamente...");
         
         // code to listen the port above created
        app.listen(port, function(){
            console.log("Servidor del Api rest de musica escuchando en http://localhost:"+port)
        });
        
     }
 });