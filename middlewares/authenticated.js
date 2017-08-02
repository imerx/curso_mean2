'use strict'

var jwt = require('jwt-simple');
var moment = require('moment');
var secret = 'clave_secreta_curso';

//this middleware will execute before  the controller action  contains the expration time 

exports.ensureAuth = function(req, res, next){

	if (!req.headers.authorization){
		return res.status(403).send({message: 'La peticion no existe la cabecera de la peticion'});
	}

	var token = req.headers.authorization.replace(/['"]+/g,'');
    //capture errors,save token in var payload
	try{
        var payload = jwt.decode(token, secret);
        if(payload.exp <= moment().unix()){
            return res.status(401).send({message: 'Token ha Expirado'});
        }
	}catch(ex){
		console.log(ex);
		return res.status(404).send({message: 'Token no valido'});
	}
	//assign the payload value to req.user wich contain the user data exp.
	req.user = payload;
	next();
};