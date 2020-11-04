const express = require('express')

const UserCtrl = require('../controllers/user-ctrl.js');

const router = express.Router();

router.post('/register', UserCtrl.createUser);
router.post('/login', UserCtrl.loginUser);
router.put('/user/:id', UserCtrl.updateUser)
router.delete('/user/:id', UserCtrl.deleteUser)
router.get('/user/:id', UserCtrl.getUserById)
router.get('/users', UserCtrl.getUsers)

module.exports = router