// Import the required modules
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Create an instance of express
const app = express();
const axios = require('axios');

// we use the 'body-parser' middleware to parse the incoming request bodies
app.use(bodyParser.urlencoded({ extended: false }));

// Set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
console.log('views', path.join(__dirname, 'views'));

// Create a route for the home page
// The GET route for the form
app.get("/", (req, res) => {
    res.render('httpRequest');
  });

// route handler for the form
app.post("/makeRequest", async (req, res) => {
  const { url } = req.body;
  try {
    const response = await axios.get(url);
    res.json(response.data);
    console.log(response.data);
    console.log("success");
  } catch (error) {
    res.json({ error: error.message });
    console.log("error");
  }
});
  
// Start the server on port 4000,
// Note we are advertising the service on port number 4000 and not 3000 this time
var port = 4000
// NOTE

// Start the server on port 3000
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});

