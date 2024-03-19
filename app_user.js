// Import the required modules
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Create an instance of express
const app = express();

// we use the 'body-parser' middleware to parse the incoming request bodies
app.use(bodyParser.urlencoded({ extended: false }));

// Set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
console.log('views', path.join(__dirname, 'views'));

const userName = "";
const userAge = "";
const userEmail = "";

// Create a route for the home page
// The GET route for the form
app.get('/', (req, res)=>{
    // Render the form and pass in the current book data
    res.render('userInfo', { userName, userAge, userEmail });
})

function User(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
  }
// TODO: Create a route for the form
//QTI
// route handler for the form
app.post("/createUser", (req, res) => {
    const { name, age, email } = req.body;
    const user = new User(name, age, email); // Constructors
    console.log("Objects were constucted", user);
    const { name: userName, age: userAge, email: userEmail } = user;
    console.log("Objects were destructed by ", "User name: ", userName, "User Age: ", userAge, "User Email", userEmail);
    res.render("userInfo", { userName, userAge, userEmail });
});
  

// Start the server on port 4000,
// Note we are advertising the service on port number 4000 and not 3000 this time
var port = 3000
// NOTE

// Start the server on port 3000
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});

