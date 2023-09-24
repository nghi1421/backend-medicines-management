const express = require('express');
const positionController = require('../controllers/positionController.js');
const userController = require('../controllers/userController.js');
const staffController = require('../controllers/staffController.js');
const authenticateController = require('../controllers/authenticateController.js');
const passport = require('passport');

const router = express.Router();

const routes = (app) => {
    router.post('/login', authenticateController.login)
    router.post('/logout', passport.authenticate('jwt', { session: false }), authenticateController.logout)
    //positions
    router.get('/positions', positionController.getPositions)

    //users
    router.get('/users',  userController.getUsers)
    router.get('/users/:userId',  userController.findUserById)
    router.post('/users',  userController.createUser)
    router.put('/users/:userId',  userController.changePassword)

    //staffs
    router.get('/staffs', staffController.getStaffs)
    router.get('/staffs/:staffId', staffController.searchStaff)
    router.post('/staffs', staffController.createStaff)
    router.put('/staffs/:staffId', staffController.updateStaff)
    router.delete('/staffs/:staffId', staffController.deleteStaff)

    router.get('/test-token', passport.authenticate('jwt', { session: false }),async function (req, res) {
        const user = await req.user
        console.log(user)
        res.json({
            message: 'Success! You can now see this without a token.',
        });
    });
    
    return app.use("/api", router);
}

module.exports = routes;