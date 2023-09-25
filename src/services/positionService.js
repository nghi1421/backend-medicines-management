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

const searchPosition = async (query) => {
    try {
        const position = await Position.findAll(query);

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

const createPosition = async (data) => {
    try {
        const position = await Position.create({
            name: data.name
        })
        return {
            code: 0,
            data: position
        }
    } catch (error) {
        return {
            code: 1,
            errorMessage: error.message
        } 
    }
}

const updatePosition = async (positionId, data) => {
    try {
        await Position.update({name: data.name}, {where: {id: positionId}});
        return {
            code: 0,
            message: 'Update position successfully'
        }
    }
    catch (error) {
        return {
            code: 1,
            errorMessage: error.message
        } 
    }
}

const deletePosition = async (positionId) => {
    try {
        await Position.destroy({ where: { id: positionId }});
        return {
            code: 2,
            errorMessage: 'Position not found',
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
    getPositions,
    searchPosition,
    createPosition,
    updatePosition,
    deletePosition,
}
