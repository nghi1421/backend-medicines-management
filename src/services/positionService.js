const db = require('../models');
const Position = db.positions;

const getPositions = async () => {
    try {
        const positions = await Position.findAll();

        return {
            code: 0,
            data: positions,
        }
    }
    catch (error) {
        return {
            code: 1,
            errorMessage: error,
        }
    }
}

const getPosition = async (positionId) => {
    try {
        const position = await Position.findByPk(positionId);

        if (!position) {
            return {
                code: 2,
                errorMessage: 'Position not found',
            }
        }

        return {
            code: 0,
            data: position
        }
    }
    catch (error) {
        return {
            code: 1,
            errorMessage: error.message
        } 
    }
}

module.exports = {
    getPositions: getPositions,
    getPosition: getPosition
}
