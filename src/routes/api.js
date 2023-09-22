const express = require('express');
const positionController = require('../controllers/positionController.js');
const userController = require('../controllers/userController.js');
const authenticateController = require('../controllers/authenticateController.js');
const passport = require('passport');

const router = express.Router();

const routes = (app) => {
    router.post('/login', authenticateController.login)

    router.get('/positions', positionController.getPositions)

    //users
    router.get('/users', userController.getUsers)
    router.get('/users/:userId', userController.findUserById)
    router.post('/users', userController.createUser)
    router.put('/users/:userId', userController.changePassword)

    router.get('/test-token', passport.authenticate('jwt', { session: false }), function(req, res) {
        res.json('Success! You can now see this without a token.');
    });
    
    return app.use("/api", router);
}

module.exports = routes;