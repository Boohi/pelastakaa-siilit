//Imports
const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
require("./models/User");
require("./services/passport");

//Connect to database
mongoose.connect(keys.mongoURI);

const app = express();

//Routes
require("./routes/authRoutes")(app);

//Assign port to listen to
const PORT = process.env.PORT || 3000;
app.listen(PORT);
