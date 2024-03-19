
// Import the required modules
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.getUserForm);
router.post('/createUser', userController.createUser);


// Export the function to external clients
module.exports = router;



//POST
// app.post("/createUser", (req, res) => {
//   const { name, age, email } = req.body;
//   const user = new User(name, age, email); // Constructors
//   console.log("Objects were constucted", user);
//   const { name: userName, age: userAge, email: userEmail } = user;
//   console.log(
//     "Objects were destructed by ",
//     "User name: ",
//     userName,
//     "User Age: ",
//     userAge,
//     "User Email",
//     userEmail
//   );
//   res.render("userInfo", { userName, userAge, userEmail });
// });