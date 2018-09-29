const requireLogin = require('../middlewares/requireLogin');
const mongoose = require('mongoose');
const Process = mongoose.model('processes');

module.exports = app => {
    app.post('/api/submit_process', requireLogin, async (req, res) => {
        const { name, description, company } = req.body;

        const process = new Process({
            name,
            description,
            company,
            _user: req.user.id
        });
        try {
            await process.save();
            res.send(req.user);
        } catch (err) {
            res.status(422).send(err);
        }
    });

    app.get('/api/processes', requireLogin, async (req, res) => {
        const processes = await Process.find({ _user: req.user.id });

        res.send(processes);
    });

    app.post('/api/process', requireLogin, async (req, res) => {
        const process = await Process.findOne({_id: req.body.id});
        
        res.send(process);
    });
};
