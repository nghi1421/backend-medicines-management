const User = require('../models').users;
const bcrypt = require('bcrypt');

const login = async (data) => {
    try {
        const user = await User.findOne({ where: { username: data.username }})

        if (user) {
            if (bcrypt.compareSync(data.password, user.password)) {
                return {
                    code: 0,
                    errorMessage: 'Login successes',
                    data: {
                        id: user.id,
                        username: user.username,
                        role: user.role
                    }
                }
            }
            return {
                code: 2,
                errorMessage: 'Password wrong'
            }
        }
        return {
            code: 3,
            errorMessage: 'User not found'
        }
    }
    catch (error) {
        return {
            code: 1,
            errorMessage: error
        }
    }
}

module.exports = {
    login
}