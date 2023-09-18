// import db from '../models'
// console.log(db);

import Position from '../models/position.js';

// const Position = require("../models").Position;

const getPositions = async () => {
    try {
        const positions = await Position.findAll();
        console.log(JSON.stringify(positions, null, 2))
        return {
            code: 0,
            data: positions,
        }
    }
    catch (error) {
        return {
            code: 1,
            errorMessage: error.message,
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

export default { getPositions, getPosition }