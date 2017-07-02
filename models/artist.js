'use strict' 

// create model schema  in the object artist

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//Schema
var artist Schema = Schema({
	name: String,
	description: String,
	image: String
});
//create model Artist , use Schema (ArtistSchema)
module.exports = mongoose.model('Artist', ArtistSchema);