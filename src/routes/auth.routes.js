const express = require('express');
const authController = require("../controllers/auth.controller");


const router = express.Router();
// creates a router object 
// express.Router() is used to create a separate grp of routes in express think of it like  a mini express app that u can keep it in a separate file 

router.post('/register', authController.registerUser)

router.post('/login', authController.loginUser);


module.exports = router;