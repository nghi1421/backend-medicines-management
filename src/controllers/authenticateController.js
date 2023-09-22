const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const authenticateService = require('../services/authenticateService');

const login = async (req, res) => {
    const data = {
        username: req.body.username,
        password: req.body.password,
    };
    if (data.username && data.password) {
        const resultLogin = await authenticateService.login(data)
        console.log(resultLogin)
        if (resultLogin && resultLogin.code === 0) {
            const payload = { id: resultLogin.data.id };
            const token = jwt.sign(payload, process.env.JWT_SECRET_KEY);
            res.status(200).json({
                data: resultLogin.data,
                token: token
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
  
module.exports = {
    login
}