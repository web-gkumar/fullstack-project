const express = require('express');
const routers = express.Router();
const { userSignUpValidation, userSignInValidation, verifyToken } = require('../utlity/userValidations');
const { registerUser, loginUser, getUsers } = require('../controllers/auth_controller');
const { createModule, getModules, updatModule, deleteModule } = require('../controllers/module_controller');
const { createForm, getForms, updatForm, deleteForm} = require('../controllers/forms_controller');
const { saveDyanimicFormsData, getByCollections, getSingleDataByCollections} = require('../controllers/collections_controller');

//Auth Api
routers.post('/signup', userSignUpValidation, registerUser);
routers.post('/signin', userSignInValidation, loginUser);
routers.get('/users', verifyToken, getUsers);
//Modules Api
routers.get('/modules', verifyToken, getModules);
routers.post('/createModule', verifyToken, createModule);
routers.put('/modules/:id', verifyToken, updatModule);
routers.delete('/modules/:id', verifyToken, deleteModule);
//Forms Api
routers.post('/createForm', verifyToken, createForm);
routers.get('/forms', verifyToken, getForms);
routers.put('/forms/:id', verifyToken, updatForm);
routers.delete('/forms/:id', verifyToken, deleteForm);
//DynamicSaveForms Api
routers.post('/createFormData', verifyToken, saveDyanimicFormsData);
routers.post('/gridData', verifyToken, getByCollections);
routers.put('/gridData/:id', verifyToken, getSingleDataByCollections);





module.exports = routers;