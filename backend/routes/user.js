const path = require('path');
const express = require('express');

const userController = require('../controllers/user');
const router = express.Router();

router.get('/user/:userId', userController.getUser);

router.post('/register', userController.register);

router.get('/login', userController.getLogin);
router.post('/login', userController.postLogin);

router.post('/logout', userController.postLogout);

router.get('/edit-user/:userId', userController.getEditUser);
router.post('/edit-user/', userController.postEditUser);


module.exports = router;