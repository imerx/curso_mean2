'use strict'/*

// create model schema  in the object user

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = Schema({
	name: String,
	surname: String,
	email: String,
	password: String,
	rol: String,
	image: String
});
// create a model user using  the Schema (UserSchema)
module.exports = mongoose.model('User',UserSchema);