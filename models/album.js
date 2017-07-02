'use strict' 

// create model schema  in the object Album

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AlbumSchema = Schema({
	title: String,
	descriptiom: String,
	year: Number,
	image: String,
	artist: { type:Schema.ObjectId, ref:'Artist' } //propiety artist save objectID on database  and that object will be Artist 
	image: String
});
// create a model user using  the Schema (UserSchema)
module.exports = mongoose.model('Album',AlbumSchema);