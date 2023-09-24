const customerService = require('../services/customerService')

const getCustomers = async (req, res) => {
    try {
        const result = await customerService.getCustomers();
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

const searchCustomer = async (req, res) => {
    try {
        const result = await customerService.searchCustomer({...req.body, id: req.params.customerId});
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

const createCustomer = async (req, res) => {
    try {
        const result = await customerService.createCustomer(req.body);
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

const updateCustomer = async (req, res) => {
    try {
        const result = await customerService.updateCustomer(req.params.customerId, req.body);
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

const deleteCustomer = async (req, res) => {
try {
        const result = await customerService.deleteCustomer(req.params.customerId);
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

module.exports = {
    getCustomers,
    searchCustomer,
    createCustomer,
    updateCustomer,
    deleteCustomer,
}