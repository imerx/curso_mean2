'use strict'/*

// create model schema  in the song user

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SongSchema = Schema({
	number: String,
	name: String,
	duration: String,
	fiel: String,
	album: { type: Schema.ObjectId, ref: 'Album'} // search  for AlbumId located in Album
});
// create a model user using  the Schema (UserSchema)
module.exports = mongoose.model('Song',SongSchema);