const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    role: String,
    company: String,
    googleID: String,
    image: String
});

mongoose.model('users', userSchema);
