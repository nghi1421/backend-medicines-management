const express = require('express');
const positionController = require('../controllers/positionController.js');

const router = express.Router();

const routes = (app) => {
    router.get('/positions', positionController.getPositions)

    return app.use("/api", router);
}

module.exports = routes;