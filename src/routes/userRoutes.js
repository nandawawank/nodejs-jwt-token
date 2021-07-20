const express = require('express');
const router = express.Router();

const userController = require('../controllers/userControllers');

router.post('/user/login', userController.loginUser);
router.post('/user/logout', userController.logoutUser);

module.exports = router;


