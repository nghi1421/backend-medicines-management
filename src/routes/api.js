import express from 'express';
import positionController from '../controller/positionController';

const router = express.Router();

const routes = (app) => {
    router.get('/positions', positionController.getPositions)
}

export default routes;