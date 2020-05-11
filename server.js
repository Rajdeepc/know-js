const Joi = require('@hapi/joi');
Joi.objectId = require('joi-objectid')(Joi);
const express = require('express');
const app = express();

const mongoose = require('mongoose');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

const cors = require("cors");



// routes
const users = require('./routes/users');
const auth = require('./routes/auth');
const profile = require('./routes/profile');
const validateUser = require('./routes/validateUser');
const updatePassword = require('./routes/updatePassword');
const saveVideo = require('./routes/saveVideo');


// middlewares
app.use(cors());
app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use('/users', users);
app.use('/auth', auth);
app.use('/profile', profile);
app.use('/validateUser', validateUser);
app.use('/updatePassword', updatePassword);
app.use('/savevideo', saveVideo);

// Serve static files assets on heroku
app.use(express.static(path.join(__dirname, 'client/build')));


// MongoDB connection string
const MONGO_LOCAL_URI = `mongodb://localhost:27017/alljs`;
mongoose.connect(process.env.MONGOLAB_URI || MONGO_LOCAL_URI)
.then(() => console.log("New connection established"))
.catch(err => console.log('Something went wrong' + err))

console.log("port" + process.env.PORT)
const port = process.env.PORT || 4000;
// Right before your app.listen(), add this:
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
  });
app.listen(port, () => console.log(`Listening on port ${port}...`));

