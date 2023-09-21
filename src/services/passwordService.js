const bcrypt = require('bcrypt')
const salt = bcrypt.genSaltSync(10);

const hashPassword = (password) => {
    return new Promise((resolve, reject) => {
        try {
            let hashedPassword = bcrypt.hashSync(password)
            resolve(hashedPassword)
        }
        catch (error) {
            reject(error)
        }
    })
}

module.exports = {
    hashPassword
}