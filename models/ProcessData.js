const mongoose = require('mongoose');

const { Schema } = mongoose;

const processDataSchema = new Schema({
    _process: { type: Schema.Types.ObjectId, ref: 'Process' },
    jsonData: [Schema.Types.Mixed]
});

mongoose.model('processesData', processDataSchema);
