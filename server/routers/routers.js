const express = require('express');
const { userSignUpValidation, userSignInValidation, verifyToken } = require('../utlity/userValidations');
const { registerUser, loginUser, getUsers } = require('../controllers/auth_controller');
const { createModule, getModules, updatModule, deleteModule } = require('../controllers/module_controller');
const { createForm, getForms, updatForm, deleteForm} = require('../controllers/forms_controller');
const routers = express.Router();


routers.post('/signup', userSignUpValidation, registerUser);
routers.post('/signin', userSignInValidation, loginUser);
routers.get('/users', verifyToken, getUsers);

routers.post('/createModule', verifyToken, createModule);
routers.get('/modules', verifyToken, getModules);
routers.put('/modules/:id', verifyToken, updatModule);
routers.delete('/modules/:id', verifyToken, deleteModule);

routers.post('/createForm', verifyToken, createForm);
routers.get('/forms', verifyToken, getForms);
routers.put('/forms/:id', verifyToken, updatForm);
routers.delete('/forms/:id', verifyToken, deleteForm);




module.exports = routers;