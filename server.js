const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

// MongoDB connection string
const MONGO_LOCAL_URI = `mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@ds341837.mlab.com:41837/urlshortener`;
mongoose.connect(process.env.MONGOLAB_URI || MONGO_LOCAL_URI)
.then(() => console.log("New connection established"))
.catch(err => console.log('Something went wrong' + err))




const port = process.env.PORT || 4000;
// Right before your app.listen(), add this:
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
  });app.listen(port, () => console.log(`Listening on port ${port}...`));
