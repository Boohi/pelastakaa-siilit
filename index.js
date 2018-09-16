//Imports
const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");
require("./models/User");
require("./services/passport");

//Connect to database
mongoose.connect(keys.mongoURI);

const app = express();


//Setup cookies and initialize passport
app.use(cookieSession({
    maxAge: 30*24*60*60*1000,
    keys: [keys.cookieKey]
}));
app.use(passport.initialize());
app.use(passport.session());

//Routes
require("./routes/authRoutes")(app);

//Assign port to listen to
const PORT = process.env.PORT || 3000;
app.listen(PORT);