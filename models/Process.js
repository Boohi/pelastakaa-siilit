const mongoose = require('mongoose');

const { Schema } = mongoose;

const processSchema = new Schema({
    name: String,
    description: String,
    company: String,
    _user: { type: Schema.Types.ObjectId, ref: 'User' }
});

mongoose.model('processes', processSchema);
