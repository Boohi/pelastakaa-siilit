const requireLogin = require('../middlewares/requireLogin');
const mongoose = require('mongoose');
const Project = mongoose.model('projects');
const User = mongoose.model('users');

module.exports = app => {
    app.post('/api/submit_project', requireLogin, async (req, res) => {
        const { name, description, company } = req.body;

        const project = new Project({
            name,
            description,
            company,
            _user: req.user.id
        });
        try {
            await project.save();
            res.send(req.user);
        } catch (err) {
            res.status(422).send(err);
        }
    });

    app.get('/api/projects', requireLogin, async (req, res) => {
        const projects = await Project.find({ _user: req.user.id });

        res.send(projects);
    });

    app.post('/api/projects', requireLogin, async (req, res) => {
        const project = await Project.findOne({ _id: req.body.id });
        const users = await User.find({_id: project._user});

        res.send({ project, users });
    });
};
