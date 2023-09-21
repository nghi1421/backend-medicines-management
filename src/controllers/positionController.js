const positionService = require('../services/positionService.js');

const getPositions = async (req, res) => {
    try {
        const result = await positionService.getPositions();

        res.status(200).json({
            errorCode: 0,
            data: result.data,
        })
    }
    catch (error) {
        res.status(200).json({
            errorCode: 1,
            errorMessage: 'Error from server'
        })
    }
}

const getPosition = async (req, res) => {
    try {
        const result = await positionService.getPosition(req.query.position_id);
        
        res.status(200).json({
            data: result.data,
        })
    }
    catch (error) {
        res.status(200).json({
            errorCode: 1,
            errorMessage: 'Error from server'
        })
    }
}

module.exports = {
    getPositions: getPositions, 
    getPosition: getPosition
}