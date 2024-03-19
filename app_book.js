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

const books =[];

// Create a route for the home page
// The GET route for the form
app.get('/', (req, res)=>{
    // Render the form and pass in the current book data
    res.render('books', { books });
})

app.post("/addBook", (req, res) => {
    const { title, author, publicationYear } = req.body;
    books.push ({ title, author, publicationYear });
    res.redirect("/");
})

////  Write your code here
// Start the server on port 4000,
// Note we are advertising the service on port number 4000 and not 3000 this time
var port = 4000
// NOTE

// Start the server on port 3000
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});

