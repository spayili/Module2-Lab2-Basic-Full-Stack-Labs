// Import the required modules
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const router = require('./routes/userRoutes');

// Create an instance of express
const app = express();

// we use the 'body-parser' middleware to parse the incoming request bodies
app.use(bodyParser.urlencoded({ extended: false }));

// Set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
console.log('views', path.join(__dirname, 'views'));

app.use(router);
// Start the server on port 4000,
// Note we are advertising the service on port number 4000 and not 3000 this time
var port = 4000
// NOTE

// Start the server on port 3000
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});

