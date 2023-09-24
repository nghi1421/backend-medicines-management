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

const searchPosition = async (req, res) => {
    try {
        const result = await positionService.searchPosition(req.query.position_id);
        
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

const createPosition = async (req, res) => {
    try {
        const result = await positionService.createPosition(req.body);
        if (result.code === 0) {
            res.status(200).json({
                message: 'Position created successfully',
            })
        }
        else {
            res.status(200).json({
                message: result.errorMessage,
            })
        }
    }
    catch (error) {
        res.status(500).json({
            message: 'Server not responding'
        })
    }
}

const updatePosition = async (req, res) => {
    try {
        const result = await positionService.updatePosition(req.params.positionId, req.body);
        if (result.code === 0) {
            res.status(200).json({
                message: 'Position updated successfully',
            })
        }
        else {
            res.status(200).json({
                message: result.errorMessage,
            })
        }
    }
    catch (error) {
        res.status(500).json({
            message: 'Server not responding'
        })
    }
}

const deletePosition = async (req, res) => {
    try {
        const result = await positionService.deletePosition(req.params.positionId);
        if (result.code === 0) {
            res.status(200).json({
                message: 'Position deleted successfully',
            })
        }
        else {
            res.status(200).json({
                message: result.errorMessage,
            })
        }
    }
    catch (error) {
        res.status(500).json({
            message: 'Server not responding'
        })
    }
}

module.exports = {
    getPositions, 
    searchPosition,
    createPosition,
    updatePosition,
    deletePosition,
}