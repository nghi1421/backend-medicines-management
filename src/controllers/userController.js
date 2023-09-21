const userService = require('../services/userService.js');

const getUsers = async (req, res) => {
    const result = await userService.getUsers();

    res.status(200).json({
        errorCode: 0,
        data: result.data,
    })
}

const findUserById = async (req, res) => {
    const result = await userService.findUserById(req.params.userId);
    if (result.code === 0) {
        res.status(200).json({
            data: result.data,
        })
    } 
    else {
        res.status(200).json({
            data: result,
        })
    }
}

const createUser = async (req, res) => {
    const result = await userService.createUser(req.body);
    res.status(200).json({
        message: result,
    })
}

const changePassword = async (req, res) => {
    const data = {
        oldPassword: req.body.old_password,
        newPassword: req.body.new_password
    }
    const result = await userService.changePassword(data, req.params.userId);
    res.status(200).json({
        message: result,
    })
}

module.exports = {
    getUsers,
    findUserById,
    createUser,
    changePassword
}