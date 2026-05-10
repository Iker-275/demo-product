const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const { connectToDatabase } = require('./database/connect');
const apiRoutes = require('./routes/apiRoutes');
const cors = require('cors');

// Enable CORS for all routes

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json(bodyParser.urlencoded({ extended: true })));
app.use('/api', apiRoutes);

app.get('/', (req, res) => {
    res.send('PRODUCTS API');
});

//Right now server is running on port 3000, but when hosting on a platform like Render, Heroku, or Vercel, 
//  it will use the random port provided by the hosting platform, 
// or default to 3000 if the PORT variable is not set (e.g., when running locally).
app.listen(PORT, () => {
    connectToDatabase();
    console.log('Server is running on port ' + PORT);
});






