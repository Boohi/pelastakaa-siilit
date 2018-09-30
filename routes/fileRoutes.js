const requireLogin = require('../middlewares/requireLogin');
const mongoose = require('mongoose');

module.exports = app => {
    app.post('/api/file_upload', requireLogin, async (req, res) => {
        console.log(req.files.file.data.toString());
    });
};
