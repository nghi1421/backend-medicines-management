const staffService = require('../services/staffService');

const getStaffs = async (req, res) => {
    try {
        const result = await staffService.getStaffs();
        if (result.code === 0) {
            res.status(200).json({
                data: result.data
            })
        }
        else {
            res.status(200).json({
                message: result.errorMessage,
            })
        }
    } catch (error) {
        res.error(error)
    }
}

const searchStaff = async (req, res) => {
    try {
        const result = await staffService.searchStaff({...req.body, id: req.params.staffId});
        if (result.code === 0) {
            res.status(200).json({
                data: result.data
            })
        }
        else {
            res.status(200).json({
                message: result.errorMessage,
            })
        }
    } catch (error) {
        res.error(error)
    }
}

const createStaff = async (req, res) => {
    try {
        const result = await staffService.createStaff(req.body);
        if (result.code === 0) {
            res.status(200).json({
                data: result.data
            })
        }
        else {
            res.status(200).json({
                message: result.errorMessage,
            })
        }
    } catch (error) {
        res.error(error)
    }
}

const updateStaff = async (req, res) => {
    try {
        const result = await staffService.updateStaff(req.params.staffId, req.body);
        if (result.code === 0) {
            res.status(200).json({
                message: result.message
            })
        }
        else {
            res.status(200).json({
                message: result.errorMessage,
            })
        }
    } catch (error) {
        res.error(error)
    }
}

const deleteStaff = async (req, res) => {
    try {
        const result = await staffService.deleteStaff(req.params.staffId);
        if (result.code === 0) {
            res.status(200).json({
                data: result.message
            })
        }
        else {
            res.status(200).json({
                message: result.errorMessage,
            })
        }
    } catch (error) {
        res.error(error)
    }
}

module.exports = {
    getStaffs,
    searchStaff,
    createStaff,
    updateStaff,
    deleteStaff
}