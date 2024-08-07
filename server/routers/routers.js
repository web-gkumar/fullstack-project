const express = require('express');
const { userSignUpValidation, userSignInValidation, verifyToken } = require('../utlity/userValidations');
const { registerUser, loginUser, getUsers } = require('../controllers/auth_controller');
const { createModule, getModules, updatModule, deleteModule } = require('../controllers/module_controller');
const routers = express.Router();


routers.post('/signup', userSignUpValidation, registerUser);
routers.post('/signin', userSignInValidation, loginUser);
routers.get('/getUser', verifyToken, getUsers);

routers.post('/createModule', createModule);
routers.get('/modules', getModules);
routers.patch('/modules/:id', updatModule);
routers.delete('/modules/:id', deleteModule);




module.exports = routers;