// Imports
const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const path = require('path');
const keys = require('./config/keys');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');

require('./models/User');
require('./models/Process');
require('./models/Project');
require('./models/ProcessData');
require('./services/passport');

// Connect to database
mongoose.connect(keys.mongoURI);

const app = express();

// Setup middleware
app.use(bodyParser.json());
app.use(fileUpload());
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());

// Routes
require('./routes/authRoutes')(app);
require('./routes/processRoutes')(app);
require('./routes/projectRoutes')(app);
require('./routes/fileRoutes')(app);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

// Assign port to listen to
const PORT = process.env.PORT || 5000;
app.listen(PORT);
