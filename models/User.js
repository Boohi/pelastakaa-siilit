const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    role: String,
    company: String,
    googleID: String
});

mongoose.model('users', userSchema);
