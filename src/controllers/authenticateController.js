const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const authenticateService = require('../services/authenticateService');
const passport = require('passport')

const login = async (req, res) => {
    const data = {
        username: req.body.username,
        password: req.body.password,
    };
    if (data.username && data.password) {
        const resultLogin = await authenticateService.login(data)
        if (resultLogin && resultLogin.code === 0) {
            const payload = {
                id: resultLogin.data.id,
                role: resultLogin.data.role,
            };
            const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: 60 * 60 * 24 * 7 });

            res.status(200).json({
                data: resultLogin.data,
                token,
            });   
        }
        else {
            res.status(200).json({
                erorrMessage: resultLogin.errorMessage,
                code: resultLogin.code
            });
        }
    }
    else {
        res.status(200).json({ errorMessage: 'Missing parameters'})
    }
}

const logout = async (req, res, next) => {
    res.status(200).json({
        message: 'Logout successfully'
    });
}
  
module.exports = {
    login,
    logout
}