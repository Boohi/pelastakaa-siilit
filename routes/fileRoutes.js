const requireLogin = require('../middlewares/requireLogin');
const mongoose = require('mongoose');
const csv = require('csvtojson');
const ProcessData = mongoose.model('processesData');

module.exports = app => {
    app.post('/api/file_upload', requireLogin, async (req, res) => {
       // console.log(req.body._id);
       // console.log(req.files.file.data);
        const json = await csv().fromString(req.files.file.data.toString());
        const processData = new ProcessData({
            _process: req.body._id,
            jsonData: json
        });
        try {
            await processData.save();
            res.send(req.user);
        } catch (err) {
            res.status(422).send(err);
        }
    });
};
