const express = require('express');
const positionController = require('../controllers/positionController.js');
const userController = require('../controllers/userController.js');

const router = express.Router();

const routes = (app) => {
    router.get('/positions', positionController.getPositions)

    //users
    router.get('/users', userController.getUsers)
    router.get('/users/:userId', userController.findUserById)
    router.post('/users', userController.createUser)
    router.put('/users/:userId', userController.changePassword)
    
    return app.use("/api", router);
}

module.exports = routes;