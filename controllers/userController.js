// Creat user controller
const users = require('../data/users.json');
const User = require("../models/user");
exports.userForm = require("../models/user");
// myUser = new User("","","");

// Create a route for the form

const user = users[0];
exports.getUserForm = (req, res) => {
  res.render('userInfo', user);
}

exports.createUser = (req, res) => {
  const { name, age, email } = req.body;
  const user = new User(name, age, email); // Constructors
  console.log("Objects were constucted", user);
  const { name: userName, age: userAge, email: userEmail } = user;
  console.log(
    "Objects were destructed by ",
    "User name: ",
    userName,
    "User Age: ",
    userAge,
    "User Email",
    userEmail
  );
  res.render("userInfo", { userName, userAge, userEmail });
}
// route handler for the form

//export the function to external clients

