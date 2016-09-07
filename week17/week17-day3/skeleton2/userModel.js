/* Mongoose Example (Students) (18.3.03)
 * ===================================== */ 

// dependency
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

// create the Schema class
var Schema = mongoose.Schema;

// instantiate a userSchema object with the Schema class we just made
var UserSchema = new Schema({

	/* TODO: 
	 * Add four entries into our schema. These should be:
	 *
	 * 1: A string. This needs to be required, and also trimmed.
	 * 2: A password. This needs to be requied, trimmed, and at least 6 chars.
	 * 3: An email. It must be unique in our collection, and must be a valid email.
	 * 4: A date. It should be the current date.
	 *
	 * TIP: The regex for checking if a string is an email is: /.+\@.+\..+/
	 * Use that with the model attribute that checks for a valid match.
	 * -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/ */

	 username: {
	 	type: String,
	 	trim: true,
	 	required: "String is Required"
	 },

	 password: {
	 	type: String,
	 	trim: true,
	 	//char length 6,
	 	validate: [
	 		function(input) {
	 			return input.length >= 6;
	 		},
	 		//Error Message
	 		"Password should be 6 characters or greater."
	 	],

	 	required: "String is Required"
	 },

	 email: {
	 	type: String,
	 	unique: true,
	 	match: [/.+\@.+\..+/, "Please enter a valid e-mail address"]
	 },

	 createdAt: {
	 	type: Date,
	 	default: Date.now
	 }


});

// create the "User" model with our UserSchema schema
var User = mongoose.model('User', UserSchema);

UserSchema.methods.fullName = function() {
	return username + " " + email;
}

//encrypts password
UserSchema.methods.generateHash = function(password){
	return bcrypt.hashSync(password, bcrypt.genSaltSync(9));
}

	//validates password
function validPassword(password){
	return bcrypt.compareSync(password, this.local.password);
}

// export the User model, so it can be used in server.js with a require.
module.exports = User;