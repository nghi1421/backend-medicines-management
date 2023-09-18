import express from 'express';
import positionController from '../controllers/positionController.js';

const router = express.Router();

const routes = (app) => {
    router.get('/positions', positionController.getPositions)

    return app.use("/api", router);
}

export default routes;