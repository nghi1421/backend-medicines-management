const db = require('../models');
const User = db.users;
const bcrypt = require('bcrypt');

const salt = bcrypt.genSaltSync(10);

const getUsers = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            const users = await User.findAll();
            resolve({
                data: users,
                code: 0,
            }) 
        }
        catch (error) {
            reject(error) 
        }
    }) 
}

const findUserById = async (userId) => {
    return new Promise(async (resolve, reject) => {
        if (!userId) {
            resolve({
                errorMessage: 'Missing parameter',
                code: 1,
            }) 
        }
        try {
            const user = await User.findByPk(userId);
            if (user) {
                resolve({
                    data: user,
                    code: 0,
                }) 
            }
            resolve({
                errorMessage: 'User not found',
                code: 1,
            }) 
        }
        catch (error) {
            reject(error) 
        }
    }) 
}

const createUser = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const newUser = await User.create({
                username: data.username,
                password: bcrypt.hashSync(data.password, salt),
                role: data.role,
            });
            resolve('Create user successfully');
        }
         catch (error) {
            reject(error);
        }
    })
}

const changePassword = async (data, userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            const user = await User.findOne({ where: { id: userId }});

            if (user) {
                if (bcrypt.compareSync(data.oldPassword, user.password)) {
                    user.password = bcrypt.hashSync(data.newPassword, salt);
                    await user.save();
                    resolve({
                        code: 0,
                        message: 'Change password succeeds!'
                    })
                }
                resolve({
                    code: 1,
                    errorMessage: 'Password wrong',
                })
            }
            resolve({
                code: 2,
                errorMessage: 'Not found',
            })
        }
        catch (error) {
            reject(error)
        }
    })
}

module.exports = {
    getUsers,
    findUserById,
    createUser,
    changePassword
}